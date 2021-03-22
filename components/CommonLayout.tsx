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

          {props.children}
        </div>
      </main>
    </>
  );
};
