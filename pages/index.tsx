interface Data {
  testingData: string;
}

const Home = ({ data }: { data: Data }) => (
  <>
    <h1>首頁</h1>

    {data?.testingData}
  </>
);

Home.getInitialProps = async () => {
  const data = await apiCall();
  return { data };
};

export default Home;

const apiCall = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ testingData: "Just some testing data" });
    }, 200);
  });
