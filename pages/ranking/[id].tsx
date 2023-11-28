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
    <div className="mt-5">
      <ul className="list-group">
        {ranking.map((rank) => {
          return (
            <li key={rank.etag} className="list-group-item">
              {rank.items?.[0]?.snippet?.title ?? ""}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

RankingDetail.getInitialProps = async ({ query }: Props) => {
  return { query };
};

export default withApollo(RankingDetail, { getDataFromTree });
