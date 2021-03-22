import React from 'react';
import { CommonAppBar } from './CommonAppBar';
import { TabBar } from './TabBar';

export const CommonLayout: React.FC = (props) => {
  return (
    <>
      <main>
        <div>
          <CommonAppBar />
          <TabBar />
          <div className="content">{props.children}</div>
        </div>
      </main>

      <style jsx>{`
        .content {
          padding: 30px 100px
        }
      `}</style>
    </>
  );
};
