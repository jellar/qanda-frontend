import React from "react";
import user from "./user.svg";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const UserIcon = () => (
  <img
    css={css`
      opacity: 0.6;
      width: 12px;
    `}
    src={user}
    alt="user icon"
  />
);
