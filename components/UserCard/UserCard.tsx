import Link from "next/link";
import styles from "./UserCard.module.css";

type Props = {
  id: string;
  name: string | null;
  image: string | null;
  age: number | null;
};
const UserCard = ({ id, name, image, age }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image ?? "/mememan.webp"} alt={name ?? "avatar"} />
      </div>
      <div className="cardContent">
        <h3>
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
};
export default UserCard;
