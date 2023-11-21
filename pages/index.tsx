import PortfolioCard from '@/components/portfolios/PortfolioCard';
import AppLink from '@/components/shared/AppLink';
import {
  Portfolio,
  PortfoliosResponse,
} from '@/core/models/api/portfolio.model';
import { PortfolioApi } from '@/core/services/api/portfolio';
import { useState } from 'react';

interface Props {
  data: PortfoliosResponse;
}

const Home = ({ data }: Props) => {
  const [portfolios, setPortfolios] = useState(data.portfolios);

  const createPortfolio = async () => {
    const portfolioApi = new PortfolioApi();
    const newPortfolio = await portfolioApi.createPortfolio();
    const newPortfolios: Portfolio[] = [
      ...portfolios,
      newPortfolio.createPortfolio,
    ];

    setPortfolios(newPortfolios);
  };
  return (
    <>
      <h1>首頁</h1>
      <div className='container'>
        <div className='row'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={createPortfolio}
          >
            create portfolio
          </button>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {portfolios.map((portfolio) => {
            return (
              <div key={portfolio._id} className='col-md-4'>
                <AppLink
                  href={`/portfolio/${portfolio._id}`}
                  className='card-link'
                >
                  <PortfolioCard portfolio={portfolio} />
                </AppLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

Home.getInitialProps = async (): Promise<Props> => {
  const portfolioApi = new PortfolioApi();
  const res = await portfolioApi.fetchPortfolios();
  return { data: res };
};

export default Home;
