import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";

/**
 * Middleware to log and handle rejected actions from RTK Query
 */
const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    // Check if the action is rejected with a value
    if (isRejectedWithValue(action)) {
      const status = (action?.payload as any).status;
      if(status===401){
        window.location.reload();
      }
    }
    return next(action);
  };
//
export default rtkQueryErrorLogger;
