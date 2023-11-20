import PortfolioCard from '@/components/portfolios/PortfolioCard';

interface Portfolio {
  _id: string;
  title: string;
  description: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
}

const fetchData = () => {
  const query = `
    query Portfolios {
      portfolios {
        _id, title,description,jobTitle,startDate,endDate
      }
    }
  `;
  return fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return json.data.portfolios;
    });
};

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
                <PortfolioCard portfolio={portfolio} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

Home.getInitialProps = async (): Promise<Props> => {
  const portfolios = await fetchData();
  return { portfolios };
};

export default Home;
