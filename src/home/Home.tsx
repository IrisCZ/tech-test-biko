import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ListItem } from "../domain/ListItem";
import { GetListItemsUseCase } from "../useCases/GetListItemsUseCase";
import { GetListItemsByNameUseCase } from "../useCases/GetListItemsByNameUseCase";
import { SearchBar } from "./SearchBar";

export const Home: React.FC = () => {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [filterByName, setFilterByName] = useState("");

  useEffect(() => {
    async function run() {
      const data = filterByName?.length
        ? await new GetListItemsByNameUseCase().execute(filterByName)
        : await new GetListItemsUseCase().execute().then((data) => data);
      setListItems(data);
    }
    run();
  }, [filterByName]);

  return (
    <>
      <Header>
        <HeaderImg src="flower-icon.png" alt="flower" />
        <Title variant={"h1"} gutterBottom>
          Floristería Dulces Pétalos
        </Title>
      </Header>
      <div className="home__list_view">
        <SearchBarContainer>
          <SearchBar onChange={setFilterByName} />
        </SearchBarContainer>
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
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 2rem;
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const HeaderImg = styled.img`
  margin-right: 1rem;
  max-width: 2rem;
`;

const ListViewItems = styled.div`
  --n: 5; /* The maximum number of columns */
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(
    auto-fill,
    minmax(max(200px, 100% / var(--n)), 1fr)
  );
  height: 100%;
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

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  width: 100%;
`;
