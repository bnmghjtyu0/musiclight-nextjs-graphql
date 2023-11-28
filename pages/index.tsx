import RankingCard from "@/components/shared/ranking-card/RankingCard";
import withApollo from "@/core/hoc/withApollo";
import { Hito } from "@/core/models/home/index.model";
import { getDataFromTree } from "@apollo/react-ssr";

const Home = () => {
  const hitoList: Hito[] = [
    {
      hitoId: "144",
      label: "華語排行",
      img: {
        url: "/assets/images/rank_empty.png",
        width: 220,
        height: 130,
      },
    },
    {
      hitoId: "155",
      label: "日語排行",
      img: {
        url: "/assets/images/rank_empty.png",
        width: 220,
        height: 130,
      },
    },
    {
      hitoId: "164",
      label: "英文排行",
      img: {
        url: "/assets/images/rank_empty.png",
        width: 220,
        height: 130,
      },
    },
    {
      hitoId: "174",
      label: "韓語排行",
      img: {
        url: "/assets/images/rank_empty.png",
        width: 220,
        height: 130,
      },
    },
  ];

  return (
    <div className="mt-5">
      <h1>排行榜</h1>
      <div className="row">
        {hitoList.map((hito) => (
          <div key={hito.hitoId} className="col-3">
            <RankingCard hito={hito} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default withApollo(Home, { getDataFromTree });
