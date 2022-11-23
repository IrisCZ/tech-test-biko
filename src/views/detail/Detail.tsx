import { useParams } from "react-router";
import { Header } from "../../components/Header";

export const Detail: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <div>Detail {id}</div>
    </>
  );
};
