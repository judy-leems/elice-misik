import React, { useState, useEffect } from 'react';
import InputText from '../../../components/atoms/InputText';
import Form from '../../../components/atoms/Form';
import FormHeader from '../../../components/molecules/FormHeader';
import FormItem from '../../../components/molecules/FormItem';
import FormInput from '../../../components/molecules/FormInput';
import FormError from '../../../components/molecules/FromError';
import FormFooter from '../../../components/molecules/FormFooter';
import Button from '../../../components/atoms/Button';
import ButtonText from '../../../components/atoms/ButtonText';
import Typography from '../../../components/atoms/Typography';
import { validateEmail } from '../../../functions';
import * as UI from './style';

type valueObject = {
  [key: string]: any;
};

function UsersLogin({}) {
  const initialValue: valueObject = { inputId: '', inputPassword: '' };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values: any) => {
    const errors: valueObject = {};

    const isInputIdValue = values.inputId;
    const isInputPasswordValue = values.inputPassword;
    const isValidEmail = validateEmail(values.inputId);
    const isMinPasswordLength = isInputPasswordValue.length >= 8;

    if (!isInputIdValue) {
      errors.inputId = '이메일을 입력해주세요';
    } else if (!isValidEmail) {
      errors.inputId = '이메일 형식이 아닙니다.';
    }
    if (!isInputPasswordValue) {
      errors.inputPassword = '비밀번호를 입력해주세요';
    } else if (!isMinPasswordLength) {
      errors.inputPassword = '비밀번호는 최소8자 입니다';
    }
    return errors;
  };

  return (
    <UI.Container>
      <Form onSubmit={handleSubmit}>
        <FormHeader title={'로그인'} />

        {/* <FormItem>
          <FormInput htmlFor={'inputId'} labelTitle={'아이디'}>
            <InputText
              id={'inputId'}
              name={'inputId'}
              value={formValues.inputId}
              onChange={handleChange}
              placeholder={'elice@gmail.com'}
            />
          </FormInput>
          {formErrors.inputId && <FormError message={formErrors.inputId} />}
        </FormItem>
        <FormItem>
          <FormInput htmlFor={'inputPassword'} labelTitle={'비밀번호'}>
            <InputText
              type={'password'}
              id={'inputPassword'}
              name={'inputPassword'}
              value={formValues.inputPassword}
              maxLength={20}
              autoComplete={'current-password'}
              onChange={handleChange}
              placeholder={'최소 8자 이상의 비밀번호를 입력해 주세요'}
            />
          </FormInput>
          {formErrors.inputPassword && (
            <FormError message={formErrors.inputPassword} />
          )}
        </FormItem> */}

        <FormFooter>
          <Button component={'primary'} size={'large'} block>
            로그인
          </Button>
        </FormFooter>
      </Form>
      <UI.JoinContainer>
        <Typography>TEAM3의 회원이 아니신가요?</Typography>
        <ButtonText component='primary' to={'/users/register'}>
          회원가입
        </ButtonText>
      </UI.JoinContainer>
    </UI.Container>
  );
}

export default UsersLogin;
