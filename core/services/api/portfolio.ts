import { ApiClient } from "@/core/models/api/common-api";
import {
  DeletePortfolioResponse,
  PortfolioByIdResponse,
  PortfoliosResponse,
  UpdatePortfolioResponse,
} from "@/core/models/api/portfolio.model";

/** 取得 portfolio */
export class PortfolioApi {
  /** 取得全部資料 */
  fetchPortfolios = (): Promise<PortfoliosResponse> => {
    const query = `
          query Portfolios {
            portfolios {
              _id, title,description,jobTitle,startDate,endDate
            }
          }
        `;
    return fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => {
        return res.json() as Promise<ApiClient<PortfoliosResponse>>;
      })
      .then((json) => {
        return json.data;
      });
  };

  /** 取得單筆資料 */
  fetchPortfolioById(id: string): Promise<PortfolioByIdResponse> {
    const query = `
    query Portfolio($id: ID) {
      portfolio(id: $id) {
        _id, title,description,jobTitle,startDate,endDate
      }
    }
  `;

    const variables = { id };
    return fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json() as Promise<ApiClient<PortfolioByIdResponse>>;
      })
      .then((json) => {
        return json.data ?? null;
      });
  }

  /** 取得單筆資料 */
  updatePortfolio(id: string): Promise<UpdatePortfolioResponse> {
    const query = `
            mutation UpdatePortfolio {
              updatePortfolio(id: "${id}",
                input: {
                  title: "Job666"
                }
              ) {
                title
              }
            }
          `;

    return fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json() as Promise<ApiClient<UpdatePortfolioResponse>>;
      })
      .then((json) => {
        return json.data;
      });
  }
  /** 刪除資料 */
  deletePortfolio(id: string): Promise<DeletePortfolioResponse> {
    const query = `
          mutation DeletePortfolio {
            deletePortfolio(id: "${id}")
          }
          `;

    return fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json() as Promise<ApiClient<DeletePortfolioResponse>>;
      })
      .then((json) => {
        return json.data;
      });
  }
}
