import { S } from "./styles";

const PrimaryButton = ({ style, children, onClick, disable }) => {
  return (
    <S.PrimaryCustomButton
      onClick={onClick}
      sx={style}
      disabled={disable ?? false}
    >
      {children}
    </S.PrimaryCustomButton>
  );
};

export default PrimaryButton;
