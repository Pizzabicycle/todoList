"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store"; // store 경로 수정
import {ReduxProviderType} from "@/types/types";

export default function ReduxProvider({ children }: ReduxProviderType) {
    return <Provider  store={store}>{children}</Provider >;
}