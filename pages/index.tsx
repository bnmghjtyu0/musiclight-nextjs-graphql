import PortfolioCard from '@/components/portfolios/PortfolioCard';
import AppLink from '@/components/shared/AppLink';
import { Portfolio } from '@/core/models/api/portfolio.model';
import { PortfolioApi } from '@/core/services/api/portfolio';

interface Props {
  portfolios: Portfolio[];
}

const Home = ({ portfolios }: Props) => {
  return (
    <>
      <h1>首頁</h1>
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
  return { portfolios: res.portfolios };
};

export default Home;
