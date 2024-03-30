import type { User } from "firebase/auth";
import { Trans, useTranslation } from "next-i18next";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useStorage } from "reactfire";
import { toast } from "sonner";

import { FirebaseStorage, deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { unlink } from "firebase/auth";

import configuration from "~/configuration";
import { getFirebaseErrorCode } from "~/core/firebase/utils/get-firebase-error-code";
import { useRequestState } from "~/core/hooks/use-request-state";

import AuthErrorMessage from "~/components/auth/AuthErrorMessage";
import { useUpdateProfile } from "~/lib/profile/hooks/use-update-profile";

import Button from "~/core/ui/Button";
import If from "~/core/ui/If";
import ImageUploadInput from "~/core/ui/ImageUploadInput";
import Modal from "~/core/ui/Modal";
import TextField from "~/core/ui/TextField";

interface ProfileData {
  photoURL?: string | null;
  displayName?: string | null;
}

function UpdateProfileForm({
  user,
  onUpdate,
}: {
  user: User;
  onUpdate: (user: ProfileData) => void;
}) {
  const [updateProfile, { loading }] = useUpdateProfile();

  const storage = useStorage();
  const { t } = useTranslation();

  const currentPhotoURL = user?.photoURL ?? "";
  const currentDisplayName = user?.displayName ?? "";

  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      displayName: currentDisplayName,
      photoURL: "",
    },
  });

  const [avatarIsDirty, setAvatarIsDirty] = useState(false);

  const onAvatarCleared = useCallback(() => {
    setAvatarIsDirty(true);
    setValue("photoURL", "");
  }, [setValue]);

  const onSubmit = async (displayName: string, photoFile: Maybe<File>) => {
    const photoName = photoFile?.name;

    const photoUrl = photoName
      ? await uploadUserProfilePhoto(storage, photoFile, user.uid)
      : currentPhotoURL;

    const isAvatarRemoved = avatarIsDirty && !photoName;

    const info = {
      displayName,
      photoURL: isAvatarRemoved ? "" : photoUrl,
    };

    // delete existing photo if different
    if (isAvatarRemoved && currentPhotoURL) {
      try {
        await deleteObject(ref(storage, currentPhotoURL));
      } catch (e) {
        // old photo not found
      }
    }

    const promise = updateProfile(info).then(() => {
      onUpdate(info);
    });

    return toast.promise(promise, {
      success: t(`profile:updateProfileSuccess`),
      error: t(`profile:updateProfileError`),
      loading: t(`profile:updateProfileLoading`),
    });
  };

  const displayNameControl = register("displayName", {
    value: currentDisplayName,
  });

  const photoURLControl = register("photoURL");

  useEffect(() => {
    reset({
      displayName: currentDisplayName ?? "",
      photoURL: currentPhotoURL ?? "",
    });
  }, [currentDisplayName, currentPhotoURL, reset]);

  return (
    <>
      <form
        data-cy={"update-profile-form"}
        onSubmit={handleSubmit((value) => {
          return onSubmit(value.displayName, getPhotoFile(value.photoURL));
        })}
      >
        <div className={"flex flex-col space-y-4"}>
          <TextField>
            <TextField.Label>
              <Trans i18nKey={"profile:displayNameLabel"} />

              <TextField.Input
                {...displayNameControl}
                data-cy={"profile-display-name"}
                minLength={2}
                placeholder={""}
              />
            </TextField.Label>
          </TextField>

          <TextField>
            <TextField.Label>
              <Trans i18nKey={"profile:profilePictureLabel"} />

              <ImageUploadInput
                {...photoURLControl}
                multiple={false}
                onClear={onAvatarCleared}
                image={currentPhotoURL}
              >
                <Trans i18nKey={"common:imageInputLabel"} />
              </ImageUploadInput>
            </TextField.Label>
          </TextField>

          <TextField>
            <TextField.Label>
              <Trans i18nKey={"profile:emailLabel"} />

              <TextField.Input disabled value={user.email ?? ""} />
            </TextField.Label>

            <If condition={!user.email}>
              <div>
                <Button
                  type={"button"}
                  variant={"ghost"}
                  size={"small"}
                  href={configuration.paths.settings.authentication}
                >
                  <span className={"text-xs font-normal"}>
                    <Trans i18nKey={"profile:addEmailAddress"} />
                  </span>
                </Button>
              </div>
            </If>
          </TextField>

          <div>
            <Button className={"w-full md:w-auto"} loading={loading}>
              <Trans i18nKey={"profile:updateProfileSubmitLabel"} />
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

/**
 * @name getPhotoFile
 * @param value
 * @description Returns the file of the photo when submitted
 * It returns undefined when the user hasn't selected a file
 */
function getPhotoFile(value: string | null | FileList) {
  if (!value || typeof value === "string") {
    return;
  }

  return value.item(0) ?? undefined;
}

async function uploadUserProfilePhoto(storage: FirebaseStorage, photoFile: File, userId: string) {
  const url = `/profiles/${userId}/${photoFile.name}`;
  const bytes = await photoFile.arrayBuffer();
  const fileRef = ref(storage, url);

  await uploadBytes(fileRef, bytes, {
    contentType: photoFile.type,
  });

  return await getDownloadURL(fileRef);
}

export default UpdateProfileForm;
