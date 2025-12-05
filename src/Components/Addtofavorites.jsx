import React, { useState, useEffect } from 'react';

export function AddToFavorites({ itemId }) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.includes(itemId));
    }, [itemId]);

    const toggleFavorite = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (isFavorite) {
            favorites = favorites.filter(id => id !== itemId);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(false);
        } else {
            favorites.push(itemId);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };
    function follow() {
        return (
            <img src='t.png' className='Rectangle2'/>
        )
    }
    function unFollow() {
        return (
            <img src="Rectangle1.png" className='Rectangle1'/>
        )
    }
    return (
        <button onClick={toggleFavorite}>
            {isFavorite ? follow() : unFollow()}
        </button>
    );
}
