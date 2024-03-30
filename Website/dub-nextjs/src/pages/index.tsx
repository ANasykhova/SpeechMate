import Image from "next/image";
import { GetStaticPropsContext } from "next";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

import Container from "~/core/ui/Container";
import SubHeading from "~/core/ui/SubHeading";
import Button from "~/core/ui/Button";
import Heading from "~/core/ui/Heading";
import Layout from "~/core/ui/Layout";
import SiteHeader from "~/components/SiteHeader";
import { withTranslationProps } from "~/lib/props/with-translation-props";
import Footer from "~/components/Footer";
import FeedbackList from "~/components/FeedbackList";
import flagsmith from "flagsmith";
import initFlagsmith from "~/core/flagsmith/hooks/init-flagsmith";
import FEATURES_IDS_LIST from "~/core/flagsmith/features-ids-list";
import Link from "next/link";
import configuration from "~/configuration";


interface LandingProps {
  outputLanguageAmount: number;
  languageTableLinks: {
    language: keyof typeof configuration.languageEmojis;
    link: string;
  }[];
}

function Index(props: LandingProps) {
  return (
    <Layout>
      <SiteHeader />
      <div className={"flex w-full flex-1 flex-col items-center space-y-8 py-8"}>
              <Pill>
                <span>Effortless. Joyful. Magical.</span>
              </Pill> 
      </div>

     <Container>
      <div className = "flex flex-row items-center">
       
        <div
            className={
              "basis-1/2  py-20 my-20 flex flex-col items-left md:flex-row lg:my-16" +
              " mx-auto flex-1 justify-start animate-in fade-in " +
              " duration-1000 slide-in-from-top-12"
            }>

            <div className = "items-left">
              <div className={"items-left space-y-10"}>
                <HeroTitle>
                  <span className="mb-6 text-left text-[#21aa2e]">Unlock Worldwide <br/>Communication </span>
                </HeroTitle>
                <div className = "space-y-10">
                <SubHeading className={"text-left space-y-5"}>
                  <span>&#10004; Cutting-edge AI-driven audio and video dubbing</span>
                  <span>&#10004; State-of-the-art voice cloning technology</span>
                  <span>&#10004; Attain natural, human-like voices</span>
                </SubHeading>

                <div className={"flex-col items-center space-y-2"}>
                <span className={"flex flex-col items-center"}>
                  <MainCallToActionButton />
                  </span>

                  <span className={"flex flex-col items-center text-center text-gray-500 dark:text-gray-400"}>
                    No credit card required
                  </span>
                </div>
                </div>
              </div>
              
          </div>
        </div>
        <div className="basis-1/2 flex items-center justify-center">
        <div className="w-full flex flex-1 items-center justify-center  animate-in fade-in duration-1000 slide-in-from-top-12">
        <img className="" src="/assets/images/landing_pic_1.png" alt="image"></img>
        </div>
      </div>
        
      </div>
        </Container>
      
        <Container>
      <div className = "flex flex-row items-center">
       
        <div
            className={
              "my-12 flex flex-col items-left md:flex-row lg:my-16" +
              " mx-auto flex-1 justify-start animate-in fade-in " +
              " duration-1000 slide-in-from-top-12"
            }
          >

            <div className = "items-left">
              <div className={"items-left space-y-10"}>
                <HeroTitle>
                  <span className="mb-3 text-3xl text-left text-[#21aa2e]">SpeechMate: Utilizing Advanced AI for Multilingual Audio and Video Processing</span>
                </HeroTitle>
                <div className = "space-y-10 text-lg space-y-10">
                  <SubHeading className="text-left spave-y-8">
                  <span className="space-y-8">Whether you are a content creator, business professional, teacher, or just looking to reach a global audience, SpeechMate offers the following features:</span>
                  </SubHeading>
                <SubHeading className={"text-left"}>
                  <span>&bull; Create transcripts for your video & audio files</span>
                  <span>&bull; Translate content from video & audio files into the selected language with a human-like voice</span>
                </SubHeading>
                </div>
              </div>
              
          </div>
        </div>
        <div className="flex flex-1 w-max h-max animate-in fade-in duration-1000 slide-in-from-top-12">
        <img className="w-50 h-50" src="/assets/images/intro.png" alt="image"></img>
        </div>
        </div>
        </Container>

      
      <Container>
        <div className={"flex flex-col items-center justify-center py-18 space-y-16"}>
          <div className={"text-center"}>
            <Heading type={1}>Check out the testimonials from our users about the SpeechMate service</Heading>
          <FeedbackList />
        </div>
        </div>
      </Container>

     <Container>
        <div className={"flex flex-col items-center justify-center py-16 space-y-16"}>
          <div className={"flex flex-col items-center space-y-8 text-center"}>
            <Pill>Get started for free. No credit card required. Cancel anytime.</Pill>

            <div className={"flex flex-col space-y-6"}>
              <Heading type={1}>Ready to expand the reach of your content with SpeechMate?</Heading>

              <SubHeading>FREE to TRY. Worth to keep.</SubHeading>
              <div className={"flex flex-col items-center space-y-4"}>
                <MainCallToActionButton />
              </div>
            </div>
          </div>
        </div>
        </Container>

      <Container>
        <div className={"flex flex-col items-center justify-center py-[100px] "}>
          <div
            className={
              "flex justify-center py-12 max-w-15xl mx-auto animate-in fade-in " +
              " duration-1000 slide-in-from-top-16 fill-mode-both delay-300"
            }
          >
            <Image
              priority
              className={
                " rounded-2xl" +
                " animate-in fade-in" +
                " zoom-in-50 delay-300 duration-1000 ease-out fill-mode-both"
              }
              width={10000}
              height={9000}
              src={`/assets/images/content_advantages.png`}
              alt={`App Image`}
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className={"flex flex-col items-center justify-center py-16 space-y-16"}>
          <div className={"flex flex-col items-center space-y-8 text-center"}>
            <div className={"flex flex-col space-y-6 items-center"}>
              <Heading type={1}>
                Seamlessly Translate Your Content into{" "}
                <span className="bg-gradient-to-br bg-clip-text text-transparent from-primary-400 to-primary-700">
                  {props.outputLanguageAmount - 1} Languages
                </span>
              </Heading>

              <SubHeading className="max-w-2xl">
                Make your audience captivated by listening to you in their mother tongue with just a
                couple of clicks
              </SubHeading>
            </div>
          </div>

          <div
            className="grid gap-2 lg:gap-4 w-full px-10"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
          >
            {props.languageTableLinks.map(({ language, link }) => (
              <Link
                key={link}
                href={link}
                className="hover:underline text-[20px] lg:text-[25px] p-2 lg:p-4"
              >
                {configuration.languageEmojis[language]}
                &nbsp;
                <span className="capitalize">{language}</span>
              </Link>
            ))}
          </div>

          <div className={"flex flex-col items-center space-y-4"}>
            <MainCallToActionButton />

            <span className={"text-xs text-gray-500 dark:text-gray-400"}>
              No credit card required
            </span>
          </div>
        </div>
      </Container>

      <Footer />
    </Layout>
  );
}

export default Index;

//#region SSG

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { props } = await withTranslationProps({ locale });
  await initFlagsmith();
  const outputLanguageListFlagsmith: string = flagsmith.getValue(FEATURES_IDS_LIST.languages_list);
  const outputLanguageList: string[] = JSON.parse(outputLanguageListFlagsmith);

  // Ссылки на таблицы PSEO
  const inputLanguageListFlagsmith: string = flagsmith.getValue(
    FEATURES_IDS_LIST.requirements_info_tooltip,
  );
  const inputLanguageList: string[] = JSON.parse(inputLanguageListFlagsmith).supported_languages
    .for_source_file.languages_list;

  const languageTableLinks = inputLanguageList.map((language) => ({
    language: language.toLowerCase(),
    link: `/table/${language.toLowerCase()}`,
  }));

  return {
    props: {
      ...props,
      outputLanguageAmount: outputLanguageList.length,
      languageTableLinks,
    },
  };
}

//#endregion

//#region Components

export function HeroTitle({ children }: React.PropsWithChildren) {
  return (
    <h1
      className={
        "text-center text-4xl text-gray-600 dark:text-white md:text-5xl" +
        " flex flex-col font-heading font-medium xl:text-6xl 2xl:text-7xl"
      }
    >
      {children}
    </h1>
  );
}

export function Pill(props: React.PropsWithChildren) {
  return (
    <h2
      className={
        "inline-flex w-auto items-center space-x-2" +
        " rounded-full bg-gradient-to-br dark:from-gray-200 dark:via-gray-400" +
        " dark:to-gray-700 bg-clip-text px-4 py-2 text-center text-sm" +
        " font-normal text-gray-500 dark:text-transparent shadow" +
        " shadow-[#21aa2e]"
      }
    >
      <span>{props.children}</span>
    </h2>
  );
}

export function MainCallToActionButton() {
  return (
    <Button
      className={
        "flex justify-end bg-transparent bg-gradient-to-r shadow-2xl" +
        " hover:shadow-primary/60 from-primary" +
        " to-primary-600 hover:to-green-300 text-white"
      }
      variant={"custom"}
      size={"lg"}
      round
      href={"/auth/sign-up"}
    >
      <span className={"flex items-center  space-x-2"}>
        <span>Try now for Free</span>
        <ChevronRightIcon
          className={
            "h-4 animate-in fade-in slide-in-from-left-8" +
            " delay-1000 fill-mode-both duration-1000 zoom-in"
          }
        />
      </span>
    </Button>
  );
}
//#endregion
