import { GET_PORTFOLIO } from "@/apollo/queries";
import { Portfolio } from "@/core/models/api/portfolio.model";
import { useLazyQuery } from "@apollo/react-hooks";
import { useEffect, useState } from "react";

const PortfolioDetail = ({ query }: any) => {
  const id = query.id;
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [getPortfolio, { loading, data }] = useLazyQuery(GET_PORTFOLIO);

  useEffect(() => {
    getPortfolio({ variables: { id } });
  }, [getPortfolio, id]);

  if (data && !portfolio) {
    setPortfolio(data.portfolio);
  }

  if (loading || !portfolio) {
    return <span>Loading ...</span>;
  }

  return (
    <>
      <h1>Iam detail page with ID: {id} </h1>
      <p>title: {portfolio.title}</p>
    </>
  );
};

PortfolioDetail.getInitialProps = async ({
  query,
}: {
  query: { id: string };
}) => {
  return { query };
};
export default PortfolioDetail;
