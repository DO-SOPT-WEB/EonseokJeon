import * as S from './style';

const Input = ({ label, placeholder, type, onKeyDown, onChange }) => {
  return (
    <S.InputBox>
      <S.LabelCSS>{label}</S.LabelCSS>
      <S.InputCSS type={type} placeholder={placeholder} onKeyDown={onKeyDown} onChange={onChange} />
    </S.InputBox>
  );
};

export default Input;
