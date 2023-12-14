import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reqAPI from '@apis/reqAPI';
import Button from '@components/Button';
import Card from '@components/Card';
import Input from '@components/Input';
import * as S from './style';

const SignUp = () => {
  const [enteredID, setEnteredID] = useState('');
  const [enteredPW, setEnteredPW] = useState('');
  const [enteredNickName, setEnteredNickName] = useState('');
  const [buttonColor, setButtonColor] = useState('black');
  const isAble =
    enteredID.trim().length !== 0 &&
    enteredPW.trim().length !== 0 &&
    enteredNickName.trim().length !== 0 &&
    buttonColor === 'green';

  const router = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await reqAPI.post('/api/v1/members', {
        username: enteredID,
        password: enteredPW,
        nickname: enteredNickName,
      });

      router('/login');
    } catch (e) {
      console.error(e);
    }
  };

  const signUpHandler = (e) => {
    if (e.key === 'Enter') {
      submitHandler();
    }
  };

  const duplicateHandler = async () => {
    try {
      const res = await reqAPI.get('/api/v1/members/check', {
        params: {
          username: enteredID,
        },
      });

      if (!res.data.isExist) {
        return setButtonColor('green');
      }
      if (!!res.data.isExist) {
        return setButtonColor('red');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Card>
        <h1>Sign Up</h1>
        <S.InputBox>
          <S.IdDuplicateCheckBox>
            <Input
              label="ID"
              type="text"
              placeholder="아이디를 입력해"
              onChange={(e) => {
                setEnteredID(e.target.value);
                setButtonColor('black');
              }}
            />
            <S.DuplicateCheckButton
              width="10rem"
              onClick={duplicateHandler}
              button_color={buttonColor}
            >
              중복체크
            </S.DuplicateCheckButton>
          </S.IdDuplicateCheckBox>
          <Input
            label="PASSWORD"
            type="password"
            placeholder="비밀번호 입력해"
            onKeyDown={signUpHandler}
            onChange={(e) => {
              setEnteredPW(e.target.value);
            }}
          />
          <Input
            label="PASSWORD CONFIRM"
            type="password"
            placeholder="비밀번호 한 번 더 입력해"
            onKeyDown={signUpHandler}
          />
          <Input
            label="NICKNAME"
            type="text"
            placeholder="닉네임 입력해"
            onKeyDown={signUpHandler}
            onChange={(e) => {
              setEnteredNickName(e.target.value);
            }}
          />
        </S.InputBox>
        <Button as="button" type="submit" disabled={!isAble}>
          회원가입
        </Button>
      </Card>
    </form>
  );
};

export default SignUp;
