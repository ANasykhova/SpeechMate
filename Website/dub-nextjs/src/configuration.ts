import { GoogleAuthProvider } from "firebase/auth";
import { FeedbackCardType } from "~/components/FeedbackCard";
import { LayoutStyle } from "~/core/layout-style";

enum Themes {
  Light = "light",
  Dark = "dark",
}

const configuration = {
  site: {
    name: "SpeechMate: Cutting-edge AI-driven audio and video dubbing",
    description:
      "Discover the future of content creation with SpeechMate's cutting-edge AI dubber and dubbing software. Our online AI dubbing service offers seamless audio and video dubbing, empowering you to dub audio over video effortlessly. Transform your YouTube videos with AI voice dubbing, video translation, and audio translation services. Join the revolution in content production with SpeechMate!",
    themeColor: "#ffffff",
    themeColorDark: "#0a0a0a",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL as string,
    siteName: "SpeechMate, Inc",
    twitterHandle: "",
    githubHandle: "",
    convertKitFormId: "",
    locale: process.env.DEFAULT_LOCALE,
  },
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  },
  auth: {
    // Enable MFA. You must upgrade to GCP Identity Platform to use it.
    // see: https://cloud.google.com/identity-platform/docs/product-comparison
    enableMultiFactorAuth: false,
    // When enabled, users will be required to verify their email address
    // before being able to access the app
    requireEmailVerification: process.env.NEXT_PUBLIC_REQUIRE_EMAIL_VERIFICATION === "true",
    // NB: Enable the providers below in the Firebase Console
    // in your production project
    providers: {
      emailPassword: true,
      emailLink: false,
      oAuth: [GoogleAuthProvider],
    },
  },
  environment: process.env.NODE_ENV ?? "development",
  emulatorHost: process.env.NEXT_PUBLIC_EMULATOR_HOST,
  emulator: process.env.NEXT_PUBLIC_EMULATOR === "true",
  production: process.env.NODE_ENV === "production",
  enableThemeSwitcher: true,
  theme: Themes.Dark,
  paths: {
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
    emailLinkSignIn: "/auth/link",
    onboarding: `/onboarding`,
    appHome: "/projects",
    about: "/about",
    blog: "/blog",
    faq: "/faq",
    pricing: "/pricing",
    termsOfService: "/terms-of-service",
    privacyPolicy: "/privacy-policy",
    settings: {
      profile: "/settings/profile",
      authentication: "/settings/profile/authentication",
      email: "/settings/profile/email",
      password: "/settings/profile/password",
      subscription: "/settings/subscription",
    },
    api: {
      //TODO: поместить в configuration.paths.api все пути API
      onboarding: "/api/onboarding",
      checkout: "/api/stripe/checkout",
      billingPortal: "/api/stripe/portal",
      sessionSignOut: "/api/session/sign-out",
      sessionSignIn: "/api/session/sign-in",
    },
  },
  navigation: {
    style: LayoutStyle.Sidebar,
  },
  appCheckSiteKey: process.env.NEXT_PUBLIC_APPCHECK_KEY,
  emailEtherealTestAccount: {
    email: process.env.ETHEREAL_EMAIL,
    password: process.env.ETHEREAL_PASSWORD,
  },
  sentry: {
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },
  stripe: {
    products: [
      //* Free
      {
        name: "Free",
        //badge: "Enjoy!",
        description: "3 tokens",
        tokens: 3,
        isTokensPerMonth: false,
        maxFileDurationInMinutes: 3,
        free: true,
        features: [
          "3-min file-lengh max",
          "Audio translation",
          "Video translation",
          "Your own voice in 29 languages",
        ],
        plans: [
          {
            name: "",
            price: "0",
            stripePriceId: "",
          },
        ],
      },
      //* Creator
      {
        stripeProductId: "prod_PohOefN595skPP",
        name: "Creator",
        description: "10 tokens/month",
        tokens: 10,
        isTokensPerMonth: true,
        maxFileDurationInMinutes: 1,
        free: false,
        features: [
          "1-min file-lengh max",
          "Audio translation",
          "Video translation",
          "Your own voice in 29 languages",
        ],
        plans: [
          {
            name: "Monthly",
            price: "20",
            stripePriceId: "price_1Oz3zmP6InR9ATa78Joj3TCv"//process.env.NEXT_PUBLIC_CREATOR_MONTH_SUBSCRIPTION_ID,
          },
          {
            name: "Annually",
            price: "192",
            stripePriceId: "price_1Oz4jkP6InR9ATa7wajdx6Qs",//process.env.NEXT_PUBLIC_CREATOR_YEAR_SUBSCRIPTION_ID,
          },
        ],
      },
      //* Standard
      {
        stripeProductId: "prod_PohPzlDnc7faUsprod_PohPzlDnc7faUs",//process.env.NEXT_PUBLIC_STANDARD_PRODUCT_ID,
        name: "Standard",
        description: "30 tokens/month",
        tokens: 30,
        isTokensPerMonth: true,
        maxFileDurationInMinutes: 5,
        free: false,
        features: [
          "5-min file-lengh max",
          "Audio translation",
          "Video translation",
          "Your own voice in 29 languages",
        ],
        plans: [
          {
            name: "Monthly",
            price: "50",
            stripePriceId: "price_1Oz411P6InR9ATa7k3KyJZya",//process.env.NEXT_PUBLIC_STANDARD_MONTH_SUBSCRIPTION_ID,
          },
          {
            name: "Annually",
            price: "480",
            stripePriceId: "price_1Oz4kBP6InR9ATa704abeOqd",//process.env.NEXT_PUBLIC_STANDARD_YEAR_SUBSCRIPTION_ID,
          },
        ],
      },
      //* Producer
      {
        stripeProductId: "prod_PohRfmH8mlJLjD",//process.env.NEXT_PUBLIC_PRODUCER_PRODUCT_ID,
        name: "Producer",
        badge: `Most Popular`,
        recommended: true,
        description: "65 tokens/month",
        tokens: 65,
        isTokensPerMonth: true,
        maxFileDurationInMinutes: 10,
        free: false,
        features: [
          "10-min file-lengh max",
          "Audio translation",
          "Video translation",
          "Your own voice in 29 languages",
        ],
        plans: [
          {
            name: "Monthly",
            price: "350",
            stripePriceId: "price_1Oz42UP6InR9ATa7LKPlsJgl",//process.env.NEXT_PUBLIC_PRODUCER_MONTH_SUBSCRIPTION_ID,
          },
          {
            name: "Annually",
            price: "3360",
            stripePriceId: "price_1Oz4knP6InR9ATa7a07VrwVw",//process.env.NEXT_PUBLIC_PRODUCER_YEAR_SUBSCRIPTION_ID,
          },
        ],
      },
      //* Enterprise
      {
        name: "Enterprise",
        badge: `Let's talk`,
        recommended: false,
        description: "From 1000 tokens/month",
        tokens: 1000,
        isTokensPerMonth: true,
        maxFileDurationInMinutes: 90,
        free: false,
        features: [
          "90-min file-lengh max",
          "Everything in Producer",
          "Custom Pricing",
          "Agreement and Invoices",
          "Priority support",
        ],
        plans: [
          {
            name: "",
            price: "Contact us",
            stripePriceId: "",
            label: `Contact us`,
            href: `https://jdl9b5awl0v.typeform.com/to/x3QCNInY`,
          },
        ],
      },
    ],
  },
  unavailableFeatures: [
    "Visual editor",
    "Lip-syncing",
    "SRT sources",
  ],
  feedback: [
    {
      avatarUrl: "/assets/images/cathy.png",
      name: "Catherine N.",
      rating: 5,
      comment:
        "“SpeechMate has been a game-changer for my online courses. I can now seamlessly translate my lessons and ensure my students understand the material in their native language.“",
    } as FeedbackCardType,
    {
      avatarUrl: "/assets/images/john.png",
      name: "John T.",
      rating: 5,
      comment:
        "“As a travel vlogger, reaching a global audience is crucial for my success. SpeechMate's translation features have helped me connect with viewers from all over the world.“",
    } as FeedbackCardType,
    {
      avatarUrl: "/assets/images/Elizabeth.png",
      name: "Elizabeth R.",
      rating: 5,
      comment:
        "“I am thoroughly impressed with SpeechMate! It is very user-friendly. I used it to translate my web-series, and it saved me a lot of time.“",
    } as FeedbackCardType,
  ],
  magic: {
    // https://www.notion.so/krenels/61d2dd45bea5420baf770e621b40ad2e?pvs=4
    projectDurationMultiplicator: 2,
  },
  languageEmojis: {
    english: "🇬🇧",
    spanish: "🇪🇸",
    estonian: "🇪🇪",
    thai: "🇹🇭",
    zulu: "🇿🇦",
    korean: "🇰🇷",
    bangla: "🇧🇩",
    portuguese: "🇵🇹",
    hebrew: "🇮🇱",
    catalan: "🇨🇦",
    kannada: "🇮🇳",
    chinese: "🇨🇳",
    javanese: "🇮🇩",
    tamil: "🇮🇳",
    sundanese: "🇮🇩",
    german: "🇩🇪",
    swedish: "🇸🇪",
    malayalam: "🇮🇳",
    arabic: "🇸🇦",
    french: "🇫🇷",
    vietnamese: "🇻🇳",
    croatian: "🇭🇷",
    danish: "🇩🇰",
    finnish: "🇫🇮",
    russian: "🇷🇺",
    hindi: "🇮🇳",
    polish: "🇵🇱",
    turkish: "🇹🇷",
    japanese: "🇯🇵",
    norwegian: "🇳🇴",
    italian: "🇮🇹",
    greek: "🇬🇷",
    bulgarian: "🇧🇬",
    czech: "🇨🇿",
    slovak: "🇸🇰",
    latvian: "🇱🇻",
    romanian: "🇷🇴",
    slovene: "🇸🇮",
    ukrainian: "🇺🇦",
    lithuanian: "🇱🇹",
    dutch: "🇳🇱",
    bahasa: "🇮🇩",
    malay: "🇲🇾",
    gujarati: "🇮🇳",
    telugu: "🇮🇳",
    marathi: "🇮🇳",
    swahili: "🇰🇪",
    urdu: "🇵🇰",
    welsh: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    hungarian: "🇭🇺",
    irish: "🇮🇪",
    persian: "🇮🇷",
    afrikaans: "🇿🇦",
    filipino: "🇵🇭",
  },
};

export default configuration;
