import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ListItem } from "../domain/ListItem";
import { GetListItemsUseCase } from "../useCases/GetListItemsUseCase";

export const Home: React.FC = () => {
  const [listItems, setListItems] = useState<ListItem[]>([]);

  useEffect(() => {
    new GetListItemsUseCase().execute().then((data) => {
      setListItems(data);
    });
  }, []);

  return (
    <>
      <Header>
        <HeaderImg src="flower-icon.png" alt="flower" />
        <Title variant={"h5"} gutterBottom>
          Floristería Dulces Pétalos
        </Title>
      </Header>
      <div className="home__list_view">
        <ListViewItems>
          {listItems?.map((item) => (
            <Card key={item.id}>
              <ImgContainer>
                <CardImg
                  className="home__list_view__card__img"
                  src={item.imgUrl}
                  alt={item.name}
                />
              </ImgContainer>
              <CardTitle>{item.name}</CardTitle>
            </Card>
          ))}
        </ListViewItems>
      </div>
    </>
  );
};

const Title = styled(Typography)`
  display: inline-block;
  font-weight: 300;
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding: 1rem;
`;

const HeaderImg = styled.img`
  margin-right: 1rem;
  max-width: 2rem;
`;

const ListViewItems = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  height: 100%;
  width: 100%;
`;

const Card = styled.div`
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: 190px;
  width: 100%;
`;

const CardImg = styled.img`
  width: 100%;
`;

const CardTitle = styled.p`
  margin: 1rem;
`;
