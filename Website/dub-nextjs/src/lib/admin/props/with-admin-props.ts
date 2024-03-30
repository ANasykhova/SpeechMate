import { GetServerSidePropsContext } from 'next';

import { withAdmin as withFirebaseAdmin } from '~/core/middleware/with-admin';
import { withTranslationProps } from '~/lib/props/with-translation-props';
import createCsrfCookie from '~/core/generic/create-csrf-token';

/**
 * @name withAdminProps
 * @description This is a middleware that checks if the user is an admin.
 * @param ctx
 */
export async function withAdminProps(ctx: GetServerSidePropsContext) {
  await withFirebaseAdmin();

  const { props: translationProps } = await withTranslationProps(ctx);
  const csrfToken = await createCsrfCookie(ctx);

  return {
    props: {
      ...translationProps,
      csrfToken,
    },
  };
}
