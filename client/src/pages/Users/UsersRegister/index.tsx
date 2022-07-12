import React, { useState, useEffect } from 'react';
import InputText from '../../../components/atoms/InputText';
import Form from '../../../components/atoms/Form';
import FormHeader from '../../../components/molecules/FormHeader';
import FormItem from '../../../components/molecules/FormItem';
import FormInput from '../../../components/molecules/FormInput';
import FormError from '../../../components/molecules/FromError';
import FormFooter from '../../../components/molecules/FormFooter';
import Button from '../../../components/atoms/Button';
import { PAGES } from '../../../constants/title';
import { LABELTITLE, PLACEHOLDER } from '../../../constants/input';
import { validateEmail } from '../../../functions';
import * as UI from './style';

type valueObject = {
  [key: string]: any;
};

const UsersRegister = () => {
  const initialValue: valueObject = { inputId: '', inputPassword: '' };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState<valueObject>({});
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

  const inputData = [
    {
      htmlFor: 'inputId',
      labelTitle: LABELTITLE.ID,
      type: 'text',
      id: 'inputId',
      name: 'inputId',
      value: formValues.inputId,
      maxLength: undefined,
      autoComplete: undefined,
      onChange: handleChange,
      placeholder: PLACEHOLDER.ID,
      error: formErrors.inputId,
    },
    {
      htmlFor: 'inputPassword',
      labelTitle: LABELTITLE.PASSWORD,
      type: 'password',
      id: 'inputPassword',
      name: 'inputPassword',
      value: formValues.inputPassword,
      maxLength: 20,
      autoComplete: 'current-password',
      onChange: handleChange,
      placeholder: PLACEHOLDER.PASSWORD,
      error: formErrors.inputPassword,
    },
  ];

  return (
    <UI.Container>
      <Form onSubmit={handleSubmit}>
        <FormHeader title={PAGES.USER_REGISTER} />
        {inputData.map((item, index) => {
          return (
            <FormItem key={index}>
              <FormInput htmlFor={item.htmlFor} labelTitle={item.labelTitle}>
                <InputText
                  type={item.type}
                  id={item.id}
                  name={item.name}
                  value={item.value}
                  maxLength={item.maxLength}
                  autoComplete={item.autoComplete}
                  onChange={item.onChange}
                  placeholder={item.placeholder}
                />
              </FormInput>
              {item.error ? <FormError message={item.error} /> : null}
            </FormItem>
          );
        })}
        <FormFooter>
          <Button component={'primary'} size={'large'} block>
            회원가입
          </Button>
        </FormFooter>
      </Form>
    </UI.Container>
  );
};

export default UsersRegister;
