import { Text } from "@react-email/components";
import { renderEmailHtml } from "../hooks/render-email-html";

export const getSubscriptionExpirationEmailTemplate = () => {
  const subject = "Heads Up! Your SpeechMate Subscription Expires in 3 Days ⏳";

  const html = renderEmailHtml(
    <>
      <Text>Hey!</Text>
      <br />

      <Text>
        It&apos;s Liza from SpeechMate. Just a quick reminder that your subscription is set to expire
        in 3 days. Don&apos;t miss out on uninterrupted service!
      </Text>
      <br />

      <Text>
        Want to keep the translations flowing? Simply renew your plan, and let&apos;s keep breaking
        those language barriers.
      </Text>
      <br />

      <Text>Here for you,</Text>
      <Text>Liza S</Text>
      <Text>CEO & Co-founder, SpeechMate</Text>
    </>,
  );

  return { subject, html };
};
