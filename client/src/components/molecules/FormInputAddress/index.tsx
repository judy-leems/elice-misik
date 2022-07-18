import React from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput';
import FormItem from '../FormItem';
import FormError from '../FromError';
import InputText from '../../atoms/InputText';
import ButtonText from '../../atoms/ButtonText';
import * as UI from './style';
import FormInputTextHorizontal from '../FormInputTextHorizontal';

interface Props {
  postalCode: any;
  address1: any;
  address2: any;
  onChange: (e: any) => void;
}

const FormInputAddress = ({
  postalCode,
  address1,
  address2,
  onChange,
}: Props) => {
  return (
    <UI.Container>
      <FormItem>
        <FormInputTextHorizontal htmlFor='inputPostNumber' labelTitle='주소'>
          <InputText
            type='text'
            id='inputPostNumber'
            name='inputPostNumber'
            value={postalCode}
            readOnly
          />
        </FormInputTextHorizontal>
        <ButtonText>우편번호 검색</ButtonText>
      </FormItem>
      <FormItem>
        <InputText
          type='text'
          id='inputAddres1'
          name='inputAddres1'
          value={address1}
          placeholder=''
          onChange={onChange}
        />
      </FormItem>
      <FormItem>
        <InputText
          type='text'
          id='inputAddres2'
          name='inputAddres2'
          value={address2}
          placeholder=''
          onChange={onChange}
        />
      </FormItem>
    </UI.Container>
  );
};

export default FormInputAddress;
