import { useFavorites } from "../../context/FavoritesContext"
import Card from "../ui/Card";
import classes from './MeetupFavorites.module.css'

export const MeetupFavorites = () => {

    const { favorites, removeFavorites } = useFavorites();

    const handleRemoveFromFavorites = (favorite) => {
        removeFavorites(favorite)
    }

    return (
        <div>
            <h2>Meetup Favorites</h2>
            {favorites.length > 0 ? (
                <ul className={classes.list}>
                    {favorites.map(fav => (
                        <li key={fav.id} className={classes.item} data-test="meet-up-item">
                            <Card>
                                <div className={classes.image} >
                                    <img src={fav.image} alt={fav.title} />
                                </div>
                                <div className={classes.content}>
                                    <h3>{fav.title}</h3>
                                    <address>{fav.address}</address>
                                    <p>{fav.description}</p>
                                </div>
                                <div className={classes.actions}>
                                    <button onClick={() => handleRemoveFromFavorites(fav)}>
                                        Remove from favorites
                                    </button>
                                </div>
                            </Card>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No favorites</p>
            )}
        </div>
    )
}
