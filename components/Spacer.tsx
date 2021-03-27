import React, { CSSProperties } from 'react';

interface Props {
  type: 'horizontal' | 'vertical';
  value: number;
}

export const Spacer: React.FC<Props> = ({ type, value }) => {
  const STYLE: CSSProperties = {
    width: type === 'horizontal' ? value : 0,
    height: type === 'vertical' ? value : 0,
  };

  return <div style={STYLE} />;
};
