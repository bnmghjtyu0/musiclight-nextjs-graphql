import { GET_PORTFOLIOS } from "@/apollo/queries";
import PortfolioCard from "@/components/portfolios/PortfolioCard";
import AppLink from "@/components/shared/AppLink";
import { Portfolio } from "@/core/models/api/portfolio.model";
import { PortfolioApi } from "@/core/services/api/portfolio";
import { useLazyQuery } from "@apollo/react-hooks";
import { useEffect, useState } from "react";

const Home = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [getPortfolios, { loading, data }] = useLazyQuery(GET_PORTFOLIOS);

  useEffect(() => {
    getPortfolios();
  }, []);

  if (data && data.portfolios.length > 0 && portfolios.length === 0) {
    setPortfolios(data.portfolios);
  }

  if (loading) {
    return <span>Loading ...</span>;
  }

  const createPortfolio = async () => {
    const portfolioApi = new PortfolioApi();
    const newPortfolio = await portfolioApi.createPortfolio();
    const newPortfolios: Portfolio[] = [
      ...portfolios,
      newPortfolio.createPortfolio,
    ];

    setPortfolios(newPortfolios);
  };

  const updatePortfolio = async (id: string) => {
    const portfolioApi = new PortfolioApi();
    const updatePortfolio = await portfolioApi.updatePortfolio(id);
    const index = portfolios.findIndex((d) => d._id === id);
    const newPortfolios: any = portfolios.slice();
    newPortfolios[index] = updatePortfolio;
    setPortfolios(newPortfolios);
  };

  const deletePortfolio = async (id: string) => {
    const portfolioApi = new PortfolioApi();
    const deleteId = await portfolioApi.deletePortfolio(id);
    const index = portfolios.findIndex(
      (d) => d._id === deleteId.deletePortfolio
    );
    const newPortfolios: any = portfolios.slice();
    newPortfolios.splice(index, 1);
    setPortfolios(newPortfolios);
  };

  return (
    <>
      <h1>首頁</h1>
      <div className="container">
        <div className="row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={createPortfolio}
          >
            create portfolio
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {portfolios.map((portfolio) => {
            return (
              <div key={portfolio._id} className="col-md-4">
                <AppLink
                  href={`/portfolio/${portfolio._id}`}
                  className="card-link"
                >
                  <PortfolioCard portfolio={portfolio} />
                </AppLink>

                <button
                  className="btn btn-primary"
                  onClick={() => updatePortfolio(portfolio._id)}
                >
                  update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePortfolio(portfolio._id)}
                >
                  刪除
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
