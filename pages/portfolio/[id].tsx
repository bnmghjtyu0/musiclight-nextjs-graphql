import { useGetPortfolio } from "@/apollo/actions";
import withApollo from "@/core/hoc/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";

interface Props {
  query: {
    id: string;
  };
}

const PortfolioDetail: any = ({ query }: Props) => {
  const { data } = useGetPortfolio(query.id);

  const portfolio = (data && data.portfolio) || {};

  return (
    <>
      <h1>Iam detail page with ID: {query.id} </h1>
      <p>title: {portfolio.title}</p>
    </>
  );
};

PortfolioDetail.getInitialProps = async ({ query }: Props) => {
  return { query };
};

export default withApollo(PortfolioDetail, { getDataFromTree });
