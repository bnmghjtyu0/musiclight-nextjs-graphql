import {
  CREATE_PORTFOLIO,
  DELETE_PORTFOLIO,
  GET_PORTFOLIOS,
  UPDATE_PORTFOLIO,
} from "@/apollo/queries";
import PortfolioCard from "@/components/portfolios/PortfolioCard";
import AppLink from "@/components/shared/AppLink";
import withApollo from "@/core/hoc/withApollo";
import {
  Portfolio,
  PortfoliosResponse,
} from "@/core/models/api/portfolio.model";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { getDataFromTree } from "@apollo/react-ssr";

const Home = () => {
  const { data } = useQuery(GET_PORTFOLIOS);
  const [deletePortfolio] = useMutation(DELETE_PORTFOLIO, {
    update(cache, { data }) {
      const { portfolios }: any = cache.readQuery({ query: GET_PORTFOLIOS });
      const newPortfolios = portfolios.filter(
        (d: any) => d._id != data.deletePortfolio
      );
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: newPortfolios },
      });
    },
  });
  const [updatePortfolio] = useMutation(UPDATE_PORTFOLIO, {
    update(cache, { data: updatePortfolio }) {
      const { portfolios }: any = cache.readQuery({ query: GET_PORTFOLIOS });
      const index = portfolios.findIndex(
        (d: any) => d._id === updatePortfolio._id
      );
      const newPortfolios = [...portfolios];
      newPortfolios[index] = data;
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: newPortfolios },
      });
    },
  });
  // 新增有 cache
  const [createPortfolio] = useMutation(CREATE_PORTFOLIO, {
    update(cache, { data }) {
      const portfolios: PortfoliosResponse | null = cache.readQuery({
        query: GET_PORTFOLIOS,
      });
      if (portfolios) {
        cache.writeQuery({
          query: GET_PORTFOLIOS,
          data: {
            portfolios: [...portfolios.portfolios, data.createPortfolio],
          },
        });
      }
    },
  });

  const portfolios: Portfolio[] = data?.portfolios ?? [];

  return (
    <>
      <h1>首頁</h1>
      <div className="container">
        <div className="row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => createPortfolio()}
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
                  onClick={() =>
                    updatePortfolio({ variables: { id: portfolio._id } })
                  }
                >
                  update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    deletePortfolio({ variables: { id: portfolio._id } })
                  }
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

export default withApollo(Home, { getDataFromTree });
