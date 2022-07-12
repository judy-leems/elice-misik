import React from 'react';
import * as UI from './style';

interface Props {
  id?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  maxLength?: number;
  onClick?: (e: any) => void;
  onChange: (e: any) => void;
}
const InputText = ({
  id,
  type,
  placeholder,
  autoComplete,
  maxLength,
  onClick,
  onChange,
}: Props) => {
  return (
    <UI.Container>
      <UI.Input
        type={type}
        id={id}
        onClick={onClick}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
      />
    </UI.Container>
  );
};
InputText.defaultProps = {
  type: 'text',
  autoComplete: 'off',
};

export default InputText;
