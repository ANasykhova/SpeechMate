import { useCallback, useEffect } from 'react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';
import { HeroTitle } from '..';
import Heading from '~/core/ui/Heading';
import Container from '~/core/ui/Container';

import configuration from '~/configuration';

import { withAuthProps } from '~/lib/props/with-auth-props';
import OAuthProviders from '~/components/auth/OAuthProviders';
import If from '~/core/ui/If';

import EmailPasswordSignUpContainer from '~/components/auth/EmailPasswordSignUpContainer';
import AuthPageLayout from '~/components/auth/AuthPageLayout';
import EmailLinkAuth from '~/components/auth/EmailLinkAuth';
import SubHeading from '~/core/ui/SubHeading';

const signInPath = configuration.paths.signIn;
// const onboarding = configuration.paths.onboarding;
const appHomePath = configuration.paths.appHome

const SignUp: React.FCC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    void router.prefetch(appHomePath);
  }, [router]);

  const onSignUp = useCallback(() => {
    return router.push(appHomePath);
  }, [router]);


  return (
   <Container>
   
   <div className="flex flex-row">

   <div className = "basis-1/2 flex items-center justify-center">
    <div className = {"flex flex-col items-left justify-left" +
    "animate-in fade-in duration-1000 slide-in-from-top-12 space-y-5"}>
      
        <p className={"text-left w-4/5 text-4xl text-[#21aa2e] dark:text-[#21aa2e]" +
        "md:text-5xl flex flex-col font-heading font-medium xl:text-6xl 2xl:text-7xl"}>Welcome to our community</p>
        <SubHeading>
        <p className= "text-left">Start your new journey with us!</p>
        </SubHeading>
    </div>
    </div>
    

    <AuthPageLayout heading={<Trans i18nKey={'auth:signUpHeading'} />}>
      
      <Head>
        <title key={'title'}>{t(`auth:signUp`)}</title>
      </Head>

      <OAuthProviders onSignIn={onSignUp} />

      <If condition={configuration.auth.providers.emailPassword}>
        <div>
          <span className={'text-xs text-gray-400'}>
            <Trans i18nKey={'auth:orContinueWithEmail'} />
          </span>
        </div>

        <EmailPasswordSignUpContainer onSignUp={onSignUp} />
      </If>

      <If condition={configuration.auth.providers.emailLink}>
        <EmailLinkAuth />
      </If>

      <div className={'flex justify-center text-xs'}>
        <p className={'flex space-x-1'}>
          <span>
            <Trans i18nKey={'auth:alreadyHaveAnAccount'} />
          </span>

          <Link
            className={'text-primary-800 hover:underline dark:text-primary'}
            href={signInPath}
          >
            <Trans i18nKey={'auth:signIn'} />
          </Link>
        </p>
      </div>
    </AuthPageLayout>
    </div>
    
    </Container>
     
  );
};

export default SignUp;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await withAuthProps(ctx);
}

