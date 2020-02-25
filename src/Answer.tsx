import React, { FC } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { gray3 } from "./styles";
import { AnswerData } from "./QuestionsData";

interface Props {
  answer: AnswerData;
}

export const Answer: FC<Props> = ({ answer }) => (
  <div
    css={css`
      padding: 10px 0;
    `}
  >
    <div
      css={css`
        padding: 10px 0;
        font-size: 13px;
      `}
    >
      {answer.content}
    </div>
    <div
      css={css`
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
      `}
    >
      {`Answered by ${answer.userName} on
      ${answer.created.toLocaleDateString()}
      ${answer.created.toLocaleTimeString()}`}
    </div>
  </div>
);
