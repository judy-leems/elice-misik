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

const ButtonText = ({
  component,
  size,
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
        onClick={onClick}
      >
        {children}
      </UI.ButtonLink>
    );
  } else {
    return (
      <UI.Button
        type='button'
        component={component}
        size={size}
        onClick={onClick}
      >
        {children}
      </UI.Button>
    );
  }
};

ButtonText.defulatProps = {
  component: 'default', // default, primary, info, disable
  size: 'default', // default, small, medium, large
};

export default ButtonText;
