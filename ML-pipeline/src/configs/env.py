import json
import os

from dotenv import load_dotenv

# Env variables
load_dotenv()

# Environment
ENVIRONMENT = os.getenv("ENVIRONMENT")
IS_DEV_ENVIRONMENT = ENVIRONMENT == "development"

# APIs


# Firebase
CERTIFICATE_CONTENT = {"type": "service_account", "project_id": "speechmate-39a12", "private_key_id": "97ee571edc03aa058d5ceb416aed50f4a4ccc749", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC82EMn2SizdBKH\n4qWKle6nCEzxJA6Oo3nm/z3kNKluxnaUmNdrle4/P+5kqlFUOf32DHFroJiyfNLJ\nBSydFPnyJL4o0kjihjZ9hlvzKQHXEgqpVaEtKVNxpMev2rVfVgASnHx12G96VoEH\nj+3CPFC7wFbyoacBv7O4JD6/k1gKzVRpt9UOClczm3R84hs2oGQG7tlDp616+sKf\nUG8mVPp15RvnYgI2lptjjVStWCHbJMLom505D7n6b9rr8xYfLHQavZvKj/W3MbUI\nkiyFPTSOYQvWS06QCl4u+UwhqeuAHZlcDUpC883vdDwbbGqjtI7iPOLcGc2f3VU+\nNBFNDqL1AgMBAAECggEAEt1MqhainviVoE7nCAbNuhBVdVJLhPq2Ivn04g7TrR30\nuwfgnx3xWI6nnxU3fiEz6igYjW6TymK3QL78U63EgSij+Vp2TvCm0VfCaDI8vZIP\nEBbefK8v536VNw8zRpSF+dX5heEq068AATQixWA2lWbTmLXGw+E1UAwI26TZquxn\nH5mPQUHA+3wP0IFSsZ29byA4wgFk0a9vshdVTxWzdRxc+E1hNcMHVrw+b0T6WI5g\nFev7x/XCunqcjNNK7eGDtdU27dbG09R2lECabErwZHn+ouG3VjWF4ycylSpjTOwX\nFFQINGcDdmyGnOaCaTDLRRF2/RsiiOXm0LWAN38HiQKBgQD+iTQFf5p6PMkSSjdg\njyNC50hZ+OMxH3LV3TfPlOS5CoNbiVeWQxpQiTNWgyRxpNuf4pGkeBVeJ1zQeMEc\nzFBEH6dD/EM3BqIcPZ0rvAWcOVieCCDxtV8WqTGg1ArctyHaJ5q3p4ClpH2M/3D2\nUUMvD044m1MJhXmYYD6fDLtUDQKBgQC97lStZaHbcwgtmex7wkR09OyBsCMX7V3k\ns6p5F/am9W78Gd6vIAtUHrDzu8cD+twF6MbzSpTCwThdJXQ+gqMIxp+OZt+DTBpP\nUaQ36oJh/dY5vnijnVnGP+2hGkKb4yNWyFKGs+uF2Z9457c+9SndlfYBJdHRJw1D\nGETjQBdIiQKBgAuI+DyPjdagTpRvnJbZpcVwacz6BIHDZRbgEZlsq/jeyxko3jlH\nDTg9H4B6LPqhd/qE8Ai+EGnV6tTfxBCkCbcsoA3qrrkdqdcRy7+ho7dyudtfju6l\nQ4vpWwBo250pB3W1ecN86c2X6MCtCtd+00acsPTLxTWXQO1w3yWiFBM5AoGAG6r7\nZOMYSAqi11nD7GdpZ4xCY8YP5q1qbyWJIOjPwpSgXVM7cFF/tPpflrH1FOxXXvkA\n+nIT56cUGeWZ4H1RWLbuiWUNDGhqsMFY5dhgs/uxWGoZ0uPaLxoi+MQFjgXxoPO/\nqeXN2orQQ2Gl/SLjvWbaFmK3BPvmX67KYjx059kCgYEArNO4wKoJMqr+sdA743KS\n3OTDNmaGR7bh3ueQHlqks7GwwFTdZbT9k8dOzK/7ObB2zRLfmoCC2C+wQwy/1Nce\nIy7E49jEyKB3h4Sb7WvWCzmsddyYZRNZLrPZefHGxe/EXIN9iXjEz765J3FCT7Z7\nCcN9dxBiL5FYHGDHpBywRAc=\n-----END PRIVATE KEY-----\n", "client_email": "firebase-adminsdk-llsy6@speechmate-39a12.iam.gserviceaccount.com", "client_id": "113511997947689605968", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-llsy6%40speechmate-39a12.iam.gserviceaccount.com", "universe_domain": "googleapis.com"}#json.loads(os.getenv("FIREBASE_CERTIFICATE_CONTENT"))
BUCKET_NAME = 'speechmate-39a12.appspot.com' #os.getenv("BUCKET_NAME")
UPDATE_PROJECT_URL = 'https://us-central1-speechmate-39a12.appspot.com.cloudfunctions.net/updateTranslatedProject'#os.getenv("UPDATE_PROJECT_URL")
UPDATE_USER_TOKENS_URL = 'https://us-central1-speechmate-39a12.appspot.com.cloudfunctions.net/updateUserTokens'#os.getenv("UPDATE_USER_TOKENS_URL")
SEND_EMAIL_URL = 'http://localhost:3000/api/emails/send'#os.getenv("SEND_EMAIL_URL")

# Stripe
STRIPE_SECRET_KEY = 'sk_test_51NQDKwLMDoxZURVeyZKHOh4oAsG0XNaYIkRSmDZdIUb5YlsZkz0Aoese7r2siF39mMeCZWFeZ3PTaK44Ir9R7u1C00NdPTpkWT'#os.getenv("STRIPE_SECRET_KEY")

# Sentry
SENTRY_DSN = 'https://8668768c7701e239cda90731a47620d5@o4506121795010560.ingest.sentry.io/4506121795207168'
#os.getenv("SENTRY_DSN")