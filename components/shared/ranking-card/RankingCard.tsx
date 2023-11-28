import { useGetRanking } from "@/apollo/actions/ranking";
import { Hito } from "@/core/models/home/index.model";
import Image from "next/image";
import AppLink from "../AppLink";
import styles from "./RankingCard.module.scss";

interface Props {
  hito: Hito;
}
const RankingCard = ({ hito }: Props) => {
  const { data } = useGetRanking(hito.hitoId);

  const image = data?.ranking[0].items[0].snippet.thumbnails.medium;

  return (
    <div className={styles.link}>
      <AppLink
        key={hito.hitoId}
        href={`/ranking/${hito.hitoId}`}
        className="card-link"
      >
        <Image
          src={image?.url}
          width={image?.width}
          height={image?.height}
          alt="Picture of the author"
        />
        <span> {hito.label}</span>
      </AppLink>
    </div>
  );
};

export default RankingCard;
