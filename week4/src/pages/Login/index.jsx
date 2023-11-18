import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reqAPI from '@apis/reqAPI';
import Button from '@components/Button';
import Card from '@components/Card';
import Input from '@components/Input';
import Modal from '@components/Modal';
import * as S from './style';
import useModal from '../../hooks/useModal';

const Login = () => {
  const [enteredID, setEnteredID] = useState('');
  const [enteredPW, setEnteredPW] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { showModal, showModalHandler } = useModal();

  const router = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await reqAPI.post('/api/v1/members/sign-in', {
        username: enteredID,
        password: enteredPW,
      });

      router(`/mypage/${data.data.id}`);
    } catch (e) {
      setErrorMessage(e.response.data.message);

      showModalHandler();
    }
  };

  const loginHandler = (e) => {
    if (e.key === 'Enter') {
      submitHandler();
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <Card>
          <h1>Login</h1>
          <S.InputBox>
            <Input
              label="ID"
              type="text"
              placeholder="아이디를 입력해"
              onKeyDown={loginHandler}
              onChange={(e) => {
                setEnteredID(e.target.value);
              }}
            />
            <Input
              label="PASSWORD"
              type="password"
              placeholder="비밀번호 입력해"
              onKeyDown={loginHandler}
              onChange={(e) => {
                setEnteredPW(e.target.value);
              }}
            />
          </S.InputBox>
          <div>
            <Button as="button" type="submit">
              로그인
            </Button>
            <Button to="/signup">회원가입</Button>
          </div>
        </Card>
      </form>
      {showModal && <Modal>{errorMessage}</Modal>}
    </>
  );
};

export default Login;
