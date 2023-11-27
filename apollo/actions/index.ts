import { PortfoliosResponse } from "@/core/models/api/portfolio.model";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  CREATE_PORTFOLIO,
  DELETE_PORTFOLIO,
  GET_PORTFOLIO,
  GET_PORTFOLIOS,
  UPDATE_PORTFOLIO,
} from "../queries";

export const useGetPortfolios = () => useQuery(GET_PORTFOLIOS);
export const useGetPortfolio = (id: string) =>
  useQuery(GET_PORTFOLIO, {
    variables: { id },
  });
export const useCreatePortfolio = () =>
  useMutation(CREATE_PORTFOLIO, {
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

export const useUpdatePortfolio = () =>
  useMutation(UPDATE_PORTFOLIO, {
    update(cache, { data: updatePortfolio }) {
      const { portfolios }: any = cache.readQuery({ query: GET_PORTFOLIOS });
      const index = portfolios.findIndex(
        (d: any) => d._id === updatePortfolio._id
      );
      const newPortfolios = [...portfolios];
      newPortfolios[index] = updatePortfolio;
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: newPortfolios },
      });
    },
  });

export const useDeletePortfolio = () =>
  useMutation(DELETE_PORTFOLIO, {
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
