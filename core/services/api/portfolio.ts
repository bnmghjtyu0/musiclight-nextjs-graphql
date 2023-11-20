import { ApiClient } from '@/core/models/api/common-api';
import {
  PortfolioByIdResponse,
  PortfoliosResponse,
} from '@/core/models/api/portfolio.model';

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
        return res.json() as Promise<ApiClient<PortfoliosResponse>>;
      })
      .then((json) => {
        return json.data;
      });
  };

  /** 取得單筆資料 */
  fetchPortfolioById(id: string): Promise<PortfolioByIdResponse> {
    const query = `
    query Portfolio {
      portfolio(id: "${id}") {
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
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json() as Promise<ApiClient<PortfolioByIdResponse>>;
      })
      .then((json) => {
        return json.data ?? null;
      });
  }
}
