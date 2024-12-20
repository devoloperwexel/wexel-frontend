import { createSelector } from "@reduxjs/toolkit";

import { initialState } from "./slice";
import { RootState } from "../types";

const selectDomain = (state: RootState) => state.storeState || initialState;
