import React from 'react';
import * as UI from './style';

interface Props {
  id: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  maxLength?: number;
  name: string;
  value: string;
  readOnly?: boolean | undefined;
  onChange?: (e: any) => void;
}
const InputText = ({
  id,
  type,
  placeholder,
  autoComplete,
  maxLength,
  name,
  value,
  readOnly,
  onChange,
}: Props) => {
  console.log(readOnly);
  return (
    <UI.Container>
      <UI.Input
        type={type}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        name={name}
        value={value}
        maxLength={maxLength}
      />
    </UI.Container>
  );
};
InputText.defaultProps = {
  type: 'text',
  autoComplete: 'off',
  placeholder: '',
};

export default InputText;
