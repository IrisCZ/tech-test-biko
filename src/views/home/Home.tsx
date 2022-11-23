import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ListItem } from "../../domain/ListItem";
import { GetListItemsUseCase } from "../../useCases/GetListItemsUseCase";
import { GetListItemsByNameUseCase } from "../../useCases/GetListItemsByNameUseCase";
import { SearchBar } from "./SearchBar";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router";

export const Home: React.FC = () => {
  const navigate = useNavigate();
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
      <Header />
      <div className="home__list_view">
        <SearchBarContainer>
          <SearchBar onChange={setFilterByName} />
        </SearchBarContainer>
        <ListViewItems>
          {listItems?.map((item) => (
            <Card key={item.id} onClick={() => navigate(`/detail/${item.id}`)}>
              <ImgContainer>
                <CardImg src={item.imgUrl} alt={item.name} />
              </ImgContainer>
              <CardTitle>{item.name}</CardTitle>
            </Card>
          ))}
        </ListViewItems>
      </div>
    </>
  );
};

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
