import { GET_RANKING } from "@/apollo/queries/ranking";
import { useQuery } from "@apollo/react-hooks";

export const useGetRanking = (id: string) =>
  useQuery(GET_RANKING, {
    variables: { id },
  });
