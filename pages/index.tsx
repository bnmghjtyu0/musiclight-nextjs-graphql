import {
  useCreatePortfolio,
  useDeletePortfolio,
  useUpdatePortfolio,
} from "@/apollo/actions";
import { GET_PORTFOLIOS } from "@/apollo/queries";
import PortfolioCard from "@/components/portfolios/PortfolioCard";
import AppLink from "@/components/shared/AppLink";
import withApollo from "@/core/hoc/withApollo";
import { Portfolio } from "@/core/models/api/portfolio.model";
import { useQuery } from "@apollo/react-hooks";
import { getDataFromTree } from "@apollo/react-ssr";

const Home = () => {
  const { data } = useQuery(GET_PORTFOLIOS);
  const [deletePortfolio] = useDeletePortfolio();
  const [updatePortfolio] = useUpdatePortfolio();
  const [createPortfolio] = useCreatePortfolio();

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
