import React, { FC } from 'react';

export const AppError: FC<{ error?: string }> = ({ error }) => {
  return <p className="error-message">{error}</p>;
};
