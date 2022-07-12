import React, { useState } from 'react';
import InputText from '../../../components/atoms/InputText';
import Form from '../../../components/atoms/Form';
import FormHeader from '../../../components/molecules/FormHeader';
import FormInput from '../../../components/molecules/FormInput';
import FormItem from '../../../components/molecules/FormItem';
import FormFooter from '../../../components/molecules/FormFooter';
import Button from '../../../components/atoms/Button';
import * as UI from './style';

function Login({}) {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <UI.Container>
      <Form>
        <FormHeader />
        <FormItem>
          <FormInput htmlFor={'inputId'} labelTitle={'아이디'}>
            <InputText
              id={'inputId'}
              onChange={(e) => setUserId(e.target.value)}
            />
          </FormInput>
        </FormItem>
        <FormItem>
          <FormInput htmlFor={'inputPassword'} labelTitle={'비밀번호'}>
            <InputText
              id={'inputPassword'}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormInput>
        </FormItem>
        <FormFooter>
          <Button component={'primary'} size={'large'} block>
            로그인
          </Button>
        </FormFooter>
      </Form>
    </UI.Container>
  );
}

export default Login;
