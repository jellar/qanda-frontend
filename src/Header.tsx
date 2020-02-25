import React, { ChangeEvent, FC, useState, FormEvent } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { UserIcon } from './Icons';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { gray1, gray2, gray5 } from './styles';
export const Header: FC<RouteComponentProps> = ({ history, location }) => {
  const searchParams = new URLSearchParams(location.search);
  const criteria = searchParams.get('criteria') || '';
  const [search, setSearch] = useState(criteria);

  const handleSeachInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/search?criteria=${search}`);
  };
  return (
    <div
      css={css`
        position: fixed;
        box-sizing: border-box;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #fff;
        border-bottom: solid 1px ${gray5};
        box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
      `}
    >
      <Link
        to="/"
        css={css`
          font-size: 24px;
          font-weight: bold;
          color: ${gray1};
          text-decoration: none;
        `}
      >
        Q&A
      </Link>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="search..."
          value={search}
          css={css`
            box-sizing: border-box;
            padding: 8px 10px;
            border: 1px solid ${gray5};
            border-radius: 3px;
            color: ${gray2};
            background-color: white;
            width: 200px;
            height: 30px;
            :focus {
              outline-color: ${gray5};
            }
          `}
          onChange={handleSeachInputChange}
        />
      </form>
      <Link
        to="/signin"
        css={css`
          padding: 5px 10px;
          background-color: transparent;
          color: ${gray2};
          text-decoration: none;
          cursor: pointer;
          span {
            margin-left: 10px;
          }
          :focus {
            outline-color: ${gray5};
          }
        `}
      >
        {' '}
        <UserIcon /> <span>Sign In</span>
      </Link>
    </div>
  );
};

export const HeaderWithRouter = withRouter(Header);
