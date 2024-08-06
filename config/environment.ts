/**
 * .env file related keys are defined here
 */

// =========================================================
type Environment = {
  SESSION_REFRESH_TIME: string;
  NEXT_PUBLIC_APP_URL: string;
};
// =========================================================

const ENVIRONMENT: Environment = {
  SESSION_REFRESH_TIME: process.env.NEXT_PUBLIC_SESSION_REFRESH_TIME!,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL!,
};
//
export default ENVIRONMENT;
