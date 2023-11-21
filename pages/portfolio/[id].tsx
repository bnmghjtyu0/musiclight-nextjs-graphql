import { PortfolioApi } from "@/core/services/api/portfolio";

const PortfolioDetail = ({ query, portfolio }: any) => {
  const id = query.id;
  return (
    <>
      <h1>Iam detail page with ID: {id} </h1>
      {JSON.stringify(portfolio)}
    </>
  );
};

PortfolioDetail.getInitialProps = async ({
  query,
}: {
  query: { id: string };
}) => {
  const portfolioApi = new PortfolioApi();
  const portfolio = await portfolioApi.fetchPortfolioById(query.id);
  return { query, portfolio };
};
export default PortfolioDetail;
