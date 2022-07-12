import React from 'react';
import * as UI from './style';

interface Props {
  id?: string;
  placeholder?: string;
  onClick?: (e: any) => void;
  onChange: (e: any) => void;
}
const InputText = ({ id, placeholder, onClick, onChange }: Props) => {
  return (
    <UI.Container>
      <UI.Input
        type='text'
        id={id}
        onClick={onClick}
        onChange={onChange}
        placeholder={placeholder}
      />
    </UI.Container>
  );
};

export default InputText;
