import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { useCallback, useEffect } from 'react';
import { useAuth } from 'reactfire';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';
import If from '~/core/ui/If';
import Container from '~/core/ui/Container';

import configuration from '~/configuration';
import { isBrowser } from '~/core/generic/is-browser';
import getClientQueryParams from '~/core/generic/get-client-query-params';
import { getRedirectPathWithoutSearchParam } from '~/core/generic/get-redirect-url';

import { withAuthProps } from '~/lib/props/with-auth-props';
import OAuthProviders from '~/components/auth/OAuthProviders';
import EmailPasswordSignInContainer from '~/components/auth/EmailPasswordSignInContainer';
import EmailLinkAuth from '~/components/auth/EmailLinkAuth';
import AuthPageLayout from '~/components/auth/AuthPageLayout';
import SubHeading from '~/core/ui/SubHeading';

const signUpPath = configuration.paths.signUp;
const appHome = configuration.paths.appHome;

const FORCE_SIGN_OUT_QUERY_PARAM = 'signOut';
const NEEDS_EMAIL_VERIFICATION_QUERY_PARAM = 'needsEmailVerification';

export const SignIn: React.FCC = () => {
  const router = useRouter();
  const auth = useAuth();
  const { t } = useTranslation();

  const shouldForceSignOut = useShouldSignOut();
  const shouldVerifyEmail = useShouldVerifyEmail();

  const onSignIn = useCallback(async () => {
    const path = getRedirectPathWithoutSearchParam(appHome);

    return router.push(path);
  }, [router]);

  // let's prefetch the application home
  // to avoid slow redirects
  useEffect(() => {
    void router.prefetch(appHome);
  }, [router]);

  // force user signOut if the query parameter has been passed
  useEffect(() => {
    if (shouldForceSignOut) {
      void auth.signOut();
    }
  }, [auth, shouldForceSignOut]);

  return (
    <Container>
    <div className="flex flex-row">

   <div className = "basis-1/2 h-screen flex items-center justify-center">
    <div className = {"flex flex-col items-left justify-left" +
    "animate-in fade-in duration-1000 slide-in-from-top-12 space-y-5"}>
      
        <p className={"text-left w-9/10 text-4xl text-[#21aa2e] dark:text-[#21aa2e]" +
        "md:text-5xl flex flex-col font-heading font-medium xl:text-6xl 2xl:text-7xl"}>Welcome back to our community</p>
       <SubHeading>
        <p className="text-left">Continue your journey with us!</p>
        </SubHeading>
       
        
    </div>
    </div>

    <AuthPageLayout heading={<Trans i18nKey={'auth:signInHeading'} />}>
      <Head>
        <title key={'title'}>{t(`auth:signIn`)}</title>
      </Head>

      <OAuthProviders onSignIn={onSignIn} />

      <If condition={configuration.auth.providers.emailPassword}>
        <span className={'text-xs text-gray-400'}>
          <Trans i18nKey={'auth:orContinueWithEmail'} />
        </span>

        <EmailPasswordSignInContainer
          shouldVerifyEmail={shouldVerifyEmail}
          onSignIn={onSignIn}
        />
      </If>

      <If condition={configuration.auth.providers.emailLink}>
        <EmailLinkAuth />
      </If>

      <div className={'flex justify-center text-xs'}>
        <p className={'flex space-x-1'}>
          <span>
            <Trans i18nKey={'auth:doNotHaveAccountYet'} />
          </span>

          <Link
            className={'text-primary-800 hover:underline dark:text-primary'}
            href={signUpPath}
          >
            <Trans i18nKey={'auth:signUp'} />
          </Link>
        </p>
      </div>
    </AuthPageLayout>
    </div>
    </Container>
  );
};

export default SignIn;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await withAuthProps(ctx);
}

function useShouldSignOut() {
  return useQueryParam(FORCE_SIGN_OUT_QUERY_PARAM) === 'true';
}

function useShouldVerifyEmail() {
  return useQueryParam(NEEDS_EMAIL_VERIFICATION_QUERY_PARAM) === 'true';
}

function useQueryParam(param: string) {
  if (!isBrowser()) {
    return null;
  }

  const params = getClientQueryParams();

  return params.get(param);
}
