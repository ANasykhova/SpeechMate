import { Text } from "@react-email/components";
import { renderEmailHtml } from "../hooks/render-email-html";

export const getUnsuccessfulPaymentEmailTemplate = () => {
  const subject = "Oops! There's a Hitch with Your Payment 🤔";

  const html = renderEmailHtml(
    <>
      <Text>Hello!</Text>
      <br />

      <Text>
        Liza here from SpeechMate. We tried processing your subscription renewal today, but it seems
        like there was a hiccup with the payment.
      </Text>
      <br />

      <Text>
        No worries, though! You can quickly update your payment info or pay manually in our
        interface.
      </Text>
      <br />

      <Text>Need assistance? I&apos;m here to help.</Text>
      <br />

      <Text>Thanks for staying with us,</Text>
      <Text>Liza S</Text>
      <Text>CEO & Co-founder, SpeechMate</Text>
    </>,
  );

  return { subject, html };
};
