import React from 'react';

import './ui.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UiProps {}

export const Ui = (props: UiProps) => {
  return (
    <div>
      <h1>Welcome to ui!</h1>
    </div>
  );
};

export default Ui;
