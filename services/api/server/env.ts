import {config} from "dotenv";


config({
  path: `.env.${process.env.NODE_ENV}`,
  debug: (process.env.DEBUG as any) as boolean,
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test" | "staging";
      PORT: number;
      HOST: string;
      DEBUG: string;

      FE_URL: string;
      REDIS_URL: string;
      RMQ_URL: string;
      POSTGRES_URL: string;

      GOOGLE_RECAPTCHA_PRIVATE: string;

      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      GOOGLE_CALLBACK_URL: string;

      FACEBOOK_CLIENT_ID: string;
      FACEBOOK_CLIENT_SECRET: string;
      FACEBOOK_CALLBACK_URL: string;

      COOKIE_SESSION_SECRET: string;

      AWS_S3_BUCKET_NAME: string;
    }
  }
}
