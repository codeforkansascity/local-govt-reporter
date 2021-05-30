import React from 'react';
import { Spacer } from './Spacer';

interface Props {
  children?: React.ReactElement | React.ReactElement[];
}

export const AppContainer = ({ children, ...customProps }: Props) => (
  <Spacer left={2} right={2} {...customProps}>
    {children}
  </Spacer>
);
