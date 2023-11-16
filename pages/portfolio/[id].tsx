const PortfolioDetail = ({ query }: any) => {
  const id = query.id;
  return <h1>Iam detail page with ID: {id}</h1>;
};

PortfolioDetail.getInitialProps = ({ query }: any) => {
  return { query };
};
export default PortfolioDetail;
