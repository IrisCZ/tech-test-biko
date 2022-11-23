import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer role="link" onClick={() => navigate("/")}>
      <HeaderImg src="/flower-icon.png" alt="flower" />
      <Title variant={"h1"} gutterBottom>
        Floristería Dulces Pétalos
      </Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const Title = styled(Typography)`
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 2rem;
`;

const HeaderImg = styled.img`
  margin-right: 1rem;
  max-width: 2rem;
`;
