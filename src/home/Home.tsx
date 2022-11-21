import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <header className="home__header">
        <img src="flower-icon.png" alt="flower" className="home__header__img" />
        <Title variant={"h5"} gutterBottom>
          Floristería Dulces Pétalos
        </Title>
      </header>
    </>
  );
}

const Title = styled(Typography)`
  display: inline-block;
  font-weight: 300;
`;
