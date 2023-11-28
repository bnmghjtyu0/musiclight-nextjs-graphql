import AppLink from "@/components/shared/AppLink";
import withApollo from "@/core/hoc/withApollo";
import { Hito } from "@/core/models/home/index.model";
import { getDataFromTree } from "@apollo/react-ssr";

const Home = () => {
  const hitoList: Hito[] = [
    {
      hitoId: "144",
      label: "華語排行",
    },
    {
      hitoId: "155",
      label: "日語排行",
    },
    {
      hitoId: "164",
      label: "英文排行",
    },
    {
      hitoId: "174",
      label: "韓語排行",
    },
  ];
  return (
    <>
      <h1>首頁</h1>
      <div className="container">
        <div className="row">
          {hitoList.map((hito) => {
            return (
              <AppLink
                key={hito.hitoId}
                href={`/ranking/${hito.hitoId}`}
                className="card-link"
              >
                {hito.label}
              </AppLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default withApollo(Home, { getDataFromTree });
