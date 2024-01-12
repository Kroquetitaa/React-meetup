import { createContext, useState } from "react";

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const addFavorites = () => setFavorites(prevFavorites => [...prevFavorites, item]);

    const removeFavorites = () => setFavorites(prevFavorites => prevFavorites.filter(favItem => favItem !== item))

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorites, removeFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavorites() {
    return useContext(FavoritesContext);
}