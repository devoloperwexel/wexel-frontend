/**
 * .env file related keys are defined here
 */

// =========================================================
type Environment = {
  SESSION_REFRESH_TIME: string;
};
// =========================================================

const ENVIRONMENT: Environment = {
  SESSION_REFRESH_TIME: process.env.NEXT_PUBLIC_SESSION_REFRESH_TIME!,
};
//
export default ENVIRONMENT;
