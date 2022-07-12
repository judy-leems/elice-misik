import React from 'react';
import * as UI from './style';

interface Props {
  component?: string;
  size?: string;
  block?: boolean;
  children?: React.ReactNode | string;
  to?: string;
  href?: string;
  onClick?: (e: any) => void;
}

const Button = ({
  component,
  size,
  block,
  children,
  to,
  href,
  onClick,
}: Props) => {
  if (to) {
    return (
      <UI.ButtonLink
        type='button'
        component={component}
        size={size}
        to={to}
        href={href}
        block={block!}
        onClick={onClick}
      >
        {children}
      </UI.ButtonLink>
    );
  } else {
    return (
      <UI.Button
        component={component}
        size={size}
        block={block!}
        onClick={onClick}
      >
        {children}
      </UI.Button>
    );
  }
};

Button.defulatProps = {
  component: 'default', // default, primary, info, disable
  size: 'default', // default, small, medium, large
  block: false,
};

export default Button;
