import { ApiClient } from "@/core/models/api/common-api";
import { Ranking } from "@/core/models/api/ranking.model";

const rankingQueries = {
  ranking: async (root: any, { id }: { id: string }): Promise<Ranking[]> => {
    const res = await fetch(
      `https://musiclight-pochange.tw/api/kkbox/ranking?hitoId=${id}`
    );
    const json = (await res.json()) as ApiClient<Ranking[]>;

    return json.retVal;
  },
};

const rankingMutations = {};

export { rankingMutations, rankingQueries };
