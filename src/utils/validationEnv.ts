import { cleanEnv, port, str } from "envalid";

export const validationEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
  });
};
