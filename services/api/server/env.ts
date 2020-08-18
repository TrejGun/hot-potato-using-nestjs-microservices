import {config} from "dotenv";


config({
  path: `.env.${process.env.NODE_ENV}`,
  debug: (process.env.DEBUG as any) as boolean,
});

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test" | "staging";
      PORT: number;
      HOST: string;
      DEBUG: string;

      RMQ_URL: string;
      RMQ_QUEUE: string;
    }
  }
}
