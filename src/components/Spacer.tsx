import React from 'react';

interface Props {
  all?: Boolean;
  top?: Boolean | number;
  left?: Boolean | number;
  right?: Boolean | number;
  bottom?: Boolean | number;
  children?: React.ReactElement | React.ReactElement[];
}

export const Spacer = ({
  all,
  left,
  right,
  top,
  bottom,
  children,
  ...customProps
}: Props) => {
  let marginLeft = 0;
  let marginRight = 0;
  let marginTop = 0;
  let marginBottom = 0;

  if (all) {
    marginLeft = 20;
    marginRight = 20;
    marginTop = 20;
    marginBottom = 20;
  }

  if (left === true) {
    marginLeft = 20;
  } else if (typeof left === 'number') {
    marginLeft = left * 20;
  }

  if (right === true) {
    marginRight = 20;
  } else if (typeof right === 'number') {
    marginRight = right * 20;
  }

  if (top === true) {
    marginTop = 20;
  } else if (typeof top === 'number') {
    marginTop = top * 20;
  }

  if (bottom === true) {
    marginBottom = 20;
  } else if (typeof bottom === 'number') {
    marginBottom = bottom * 20;
  }

  return (
    <div
      style={{ marginLeft, marginRight, marginTop, marginBottom }}
      {...customProps}
    >
      {children}
    </div>
  );
};
