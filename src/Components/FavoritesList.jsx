import React, { useState, useEffect } from 'react';

export function FavoritesList(){
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    
        // Обработчик для обновления при изменении localStorage
        const handleStorageChange = () => {
            const updatedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
            setFavorites(updatedFavorites);
        };

        window.addEventListener('storage', handleStorageChange);

        // Убираем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const removeFavorite = (itemId) => {
        const updatedFavorites = favorites.filter(id => id !== itemId);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
    };

    return (
        <div>
            {favorites.length === 0 ? (
                <p>Нет избранных проектов.</p>
            ) : (
                <div>
                    {favorites.map(itemId => (
                        <p key={itemId} className='favoriteItem'>
                            {itemId}
                            <button onClick={() => removeFavorite(itemId)} className='unfavoriteItemBtn'><img src="Rectangle2.png" alt=""  className='Rectangle1313'/></button>
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}



/*
            <div className='card-row'>
                <div className='Card-block'>
                    <div className='card'>
                        <img src='taskflow.jpg' alt="" className='card-img'/>
                        <h3 className='Card-title'>TaskFlow — умный менеджер задач для удалённых команд</h3>
                        <p className='Card-desc'>Мы делаем инструмент, который помогает распределять задачи по энергии, а не только по времени. Уже есть прототип, бэкенд на Python, готовы к фазе сборки интерфейса.
                        </p>
                    </div>
                    <div className="addToFavoritesBtn">
                        <AddToFavorites itemId={'TaskFlow — умный менеджер задач для удалённых команд'} />
                    </div>
                </div>
                <div className='Card-block'>
                    <div className='card'>
                        <img src='MindMap.jpg' alt="" className='card-img'/>
                        <h3 className='Card-title'>MindMap — совместная визуализация идей в реальном времени</h3>
                        <p className='Card-desc'>Платформа для создания интерактивных ментальных карт, где команда может одновременно редактировать, добавлять заметки и голосовые комментарии. Бэкенд на Node.js, базовая архитектура готова.
                        </p>
                    </div>
                    <div className="addToFavoritesBtn">
                        <AddToFavorites itemId={'MindMap — совместная визуализация идей в реальном времени'} />
                    </div>
                </div>
                <div className='Card-block'>
                    <div className='card'>
                        <img src='LocalEats.jpg' alt="" className='card-img'/>
                        <h3 className='Card-title'>LocalEats — агрегатор фудтраков и домашних кухонь в вашем районе</h3>
                        <p className='Card-desc'>Помогаем малым кулинарным бизнесам находить аудиторию. Уже собраны первые 50 точек, есть Figma-дизайн и API-спецификация.
                        </p>
                    </div>
                    <div className="addToFavoritesBtn">
                        <AddToFavorites itemId={'LocalEats — агрегатор фудтраков и домашних кухонь'} />
                    </div>
                </div>
                {/* Добавьте другие товары здесь *//*}
            </div>
            <div className='card-row'>  
                <div className='Card-block'>
                    <div className='card'>
                        <img src='CodeQuest.jpg' alt="" className='card-img'/>
                        <h3 className='Card-title'>CodeQuest — обучающая игра по программированию для подростков</h3>
                        <p className='Card-desc'>Игроки решают задачи на Python/JS, чтобы прокачивать персонажа и исследовать виртуальный мир. Геймдизайн и сюжет — готовы.
                        </p>
                    </div>
                    <div className="addToFavoritesBtn">
                        <AddToFavorites itemId={'CodeQuest — обучающая игра по программированию для подростков'} />
                    </div>
                </div>
                <div className='Card-block'>
                    <div className='card'>
                        <img src='Flow.jpg' alt="" className='card-img'/>
                        <h3 className='Card-title'>Flow — аналитика для креативных команд (дизайнеры, копирайтеры, продюсеры)</h3>
                        <p className='Card-desc'>Сервис, который автоматически собирает данные из Notion, Trello, Figma и показывает, где «горят» ресурсы. MVP частично запущен.
                        </p>
                    </div>
                    <div className="addToFavoritesBtn">
                        <AddToFavorites itemId={'Flow — аналитика для креативных команд (дизайнеры, копирайтеры, продюсеры'} />
                    </div>
                </div>
                <div className='Card-block'>
                    <div className='card'>
                        <img src='GreenRoute.jpg' alt="" className='card-img'/>
                        <h3 className='Card-title'>GreenRoute — навигатор с учётом экологичности маршрута</h3>
                        <p className='Card-desc'>Приложение предлагает не самый быстрый, а самый «чистый» путь: пешком, на велике или общественном транспорте. Данные от OpenStreetMap + углеродный калькулятор.
                        </p>
                    </div>
                    <div className="addToFavoritesBtn">
                        <AddToFavorites itemId={'GreenRoute — навигатор с учётом экологичности маршрута'} />
                    </div>
                </div>
                {/* Добавьте другие товары здесь *//*}
            </div>
*/
