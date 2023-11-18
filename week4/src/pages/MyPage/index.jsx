import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import reqAPI from '@apis/reqAPI';
import Button from '@components/Button';
import Card from '@components/Card';
import * as S from './style';

const MyPage = () => {
  const [userData, setUserData] = useState({ username: '', nickname: '' });

  const { userId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await reqAPI.get(`/api/v1/members/${userId}`);
        setUserData(data.data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchData();
  }, []);

  return (
    <Card>
      <h1>MY PAGE</h1>
      <S.ProfileBox>
        <S.ImageCSS src="/assets/image.png" alt="profile-image" />
        <div>
          <S.ProfileParagraph>ID: {userData.username}</S.ProfileParagraph>
          <S.ProfileParagraph>닉네임: {userData.nickname}</S.ProfileParagraph>
        </div>
      </S.ProfileBox>
      <Button width="10rem" to="/login">
        로그아웃
      </Button>
    </Card>
  );
};

export default MyPage;
