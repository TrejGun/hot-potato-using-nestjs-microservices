declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production" | "test" | "staging";
            PORT: number;
            HOST: string;
            DEBUG: string;
            RMQ_URL: string;
            INSTANCE: string;
        }
    }
}
export {};
