import React from 'react';

interface Props {
  variant?: 'body' | 'body2' | 'small' | 'header' | 'smallheader';
  font?: 'primary' | 'secondary';
  fontWeight?:
    | 'inherit'
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;
  children?: React.ReactElement | React.ReactElement[];
  isInline?: boolean;
  className?: string;
}

export const Typography = ({
  variant = 'body',
  font = 'secondary',
  fontWeight = 'inherit',
  children,
  isInline = false,
  className,
  ...customProps
}: Props) => {
  let fontSize = 16;

  switch (variant) {
    case 'small':
      fontSize = 12;
      break;
    case 'body2':
      fontSize = 24;
      break;
    case 'header':
      fontSize = 54;
      break;
    case 'smallheader':
      fontSize = 36;
      break;
  }

  let fontFamily = font === 'primary' ? 'Merriweather' : 'Arial';
  const Component = isInline ? 'span' : 'div';

  return (
    <Component
      style={{
        display: isInline ? 'inline-block' : 'block',
        fontFamily,
        fontSize,
        fontWeight,
      }}
      className={className}
      {...customProps}
    >
      {children}
    </Component>
  );
};
