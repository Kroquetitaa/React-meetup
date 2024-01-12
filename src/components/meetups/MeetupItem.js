import { useFetch } from "./../../util-hooks/useFetch";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useFavorites } from "../../context/FavoritesContext";

export default function MeetupItem() {

  const { favorites, addFavorites, removeFavorites } = useFavorites();

  const { data } = useFetch({
    url: "/data.json",
  });

  if (!data) return <p>Loading...</p>;

  const renderMeetupItem = (item) => {
    const isFavorite = favorites.some((fav) => fav.id === item.id);
    const toggleFavorites = () => !isFavorite ? addFavorites(item) : removeFavorites(item)

    return (
      <li key={item.id} className={classes.item} data-test="meet-up-item">
        <Card>
          <div className={classes.image}>
            <img src={item.image} alt={item.title} />
          </div>
          <div className={classes.content}>
            <h3>{item.title}</h3>
            <address>{item.address}</address>
            <p>{item.description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={toggleFavorites}>
              {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </button>
          </div>
        </Card>
      </li>
    );
  };

  return <div>{data.map(renderMeetupItem)}</div>;
}
