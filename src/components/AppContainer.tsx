import React from 'react';

interface Props {
  children?: React.ReactElement;
}

export const AppContainer = ({ children, ...customProps }: Props) => (
  <div style={{ paddingLeft: '40px', paddingRight: '40px' }} {...customProps}>
    {children}
  </div>
);
