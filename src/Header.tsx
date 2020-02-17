import React from "react";
import { UserIcon } from "./Icons";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { fontSize } from "./styles";
export const Header = () => (
  <div
    css={css`
      font-family: Arial, Helvetica, sans-serif;
      font-size: ${fontSize};
      background-color: #5c5c5a;
    `}
  >
    <a href="./">Q&A</a>
    <input type="text" placeholder="search..." />
    <a href="./signin">
      <UserIcon />
      Sign In
    </a>
  </div>
);
