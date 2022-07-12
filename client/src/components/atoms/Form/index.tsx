import React from 'react';
import * as UI from './style';

interface Props {
  children?: React.ReactNode | string;
}

const Form = ({ children }: Props) => {
  return (
    <UI.Form>
      <UI.Fieldset>{children}</UI.Fieldset>
    </UI.Form>
  );
};

export default Form;
