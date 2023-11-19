interface Portfolio {
  _id: string;
  title: string;
}

const fetchData = () => {
  const query = `
    query Portfolios {
      portfolios {
        _id, title
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
      {JSON.stringify(portfolios)}
    </>
  );
};

Home.getInitialProps = async (): Promise<Props> => {
  const portfolios = await fetchData();
  return { portfolios };
};

export default Home;
