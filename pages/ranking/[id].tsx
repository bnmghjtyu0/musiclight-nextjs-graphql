import { useGetRanking } from "@/apollo/actions/ranking";
import withApollo from "@/core/hoc/withApollo";
import { Ranking } from "@/core/models/api/ranking.model";
import { getDataFromTree } from "@apollo/react-ssr";

interface Props {
  query: {
    id: string;
  };
}

const RankingDetail: any = ({ query }: Props) => {
  const { data } = useGetRanking(query.id);

  const ranking: Ranking[] = data?.ranking ?? [];
  return (
    <div>
      {ranking.map((rank) => {
        return (
          <div key={rank.etag}>{rank.items?.[0]?.snippet?.title ?? ""}</div>
        );
      })}
    </div>
  );
};

RankingDetail.getInitialProps = async ({ query }: Props) => {
  return { query };
};

export default withApollo(RankingDetail, { getDataFromTree });
