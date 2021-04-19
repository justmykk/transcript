import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { storeService } from '../services/store';

export const CommonAppBar = () => {
  const [user, setUser] = useState({ firstName: '', lastName: '' });

  useEffect(() => {
    setUser(storeService.getUser());
  }, []);

  return (
    <>
      <nav className="commonNav">
        <div className="commonNav__div">
          <Link href="/dashboard">
            <a>
              <img src="/white_logo.svg" alt="logo" height={30} />
            </a>
          </Link>

          <div className="commonNav__right">
            <img src="/notify.svg" alt="notification" />
            <img
              src="/avatar2.svg"
              alt="avatar"
              style={{ marginLeft: 50, marginRight: 15 }}
            />
            <p>
              {user.firstName} {user.lastName}
            </p>
          </div>
        </div>
      </nav>

      <style jsx>
        {`
          .commonNav {
            height: 80px;
            background-color: var(--primary-color);
          }

          .commonNav__div {
            height: 100%;
            width: 100%;
            display: flex;
            padding: 0 20px;
            justify-content: space-between;
            align-items: center;
          }

          .commonNav__right {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .commonNav__right > p {
            color: #fff;
            font-size: 16px;
            font-weight: 500;
          }
        `}
      </style>
    </>
  );
};
