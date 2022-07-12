import React, { useState } from 'react';
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
import * as UI from './style';

function UsersLogin({}) {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <UI.Container>
      <Form>
        <FormHeader title={'로그인'} />
        <FormItem>
          <FormInput htmlFor={'inputId'} labelTitle={'아이디'}>
            <InputText
              id={'inputId'}
              onChange={(e) => setUserId(e.target.value)}
              placeholder={'elice@gmail.com'}
            />
          </FormInput>
          <FormError message={'이메일 형식이 아닙니다.'} />
        </FormItem>
        <FormItem>
          <FormInput htmlFor={'inputPassword'} labelTitle={'비밀번호'}>
            <InputText
              id={'inputPassword'}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={'최소 8자 이상의 비밀번호를 입력해 주세요'}
            />
          </FormInput>
          <FormError message={'비밀번호 형식이 아닙니다.'} />
        </FormItem>
        <FormFooter>
          <Button component={'primary'} size={'large'} block>
            로그인
          </Button>
        </FormFooter>
      </Form>
      <UI.JoinContainer>
        <Typography>TEAM3의 회원이 아니신가요?</Typography>
        <ButtonText component='primary'>회원가입</ButtonText>
      </UI.JoinContainer>
    </UI.Container>
  );
}

export default UsersLogin;
