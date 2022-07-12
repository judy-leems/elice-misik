import React from 'react';
import * as UI from './style';

interface Props {
  id?: string;
  onClick?: (e: any) => void;
  onChange: (e: any) => void;
}
const InputText = ({ id, onClick, onChange }: Props) => {
  return (
    <UI.Container>
      <UI.Input type='text' id={id} onClick={onClick} onChange={onChange} />
    </UI.Container>
  );
};

export default InputText;
