import { AddToFavorites } from '../Components/Addtofavorites';
import React, { useState } from 'react';

export function Page1() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const openModal = (card) => {
        setSelectedCard(card);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const cards1 = [
        {
            imgSrc: 'taskflow.jpg',
            title: 'TaskFlow — умный менеджер задач для удалённых команд',
            desc: 'Мы делаем инструмент, который помогает распределять задачи по энергии, а не только по времени. Уже есть прототип, бэкенд на Python, готовы к фазе сборки интерфейса.',
            extraInfo: 'Нужен: Frontend-разработчик (React, опыт с drag-and-drop интерфейсами приветствуется)Формат: Удалёнка, 10–15 ч/неделю. Возможна оплата после первого релиза или доля в проекте.Сроки: Старт — в ближайшие 2 недели'
        },
        {
            imgSrc: 'MindMap.jpg',
            title: 'MindMap — совместная визуализация идей в реальном времени',
            desc: 'Платформа для создания интерактивных ментальных карт, где команда может одновременно редактировать, добавлять заметки и голосовые комментарии. Бэкенд на Node.js, базовая архитектура готова.',
            extraInfo: 'Нужен: Frontend-разработчик (React + WebSocket / Realtime-библиотеки). Формат: Удалёнка, 10–12 ч/неделю. Варианты: фиксированная оплата после MVP или 2–5% доли. Сроки: Старт разработки интерфейса — в течение 10 дней.'
        },
        {
            imgSrc: 'LocalEats.jpg',
            title: 'LocalEats — агрегатор фудтраков и домашних кухонь в вашем районе',
            desc: 'Помогаем малым кулинарным бизнесам находить аудиторию. Уже собраны первые 50 точек, есть Figma-дизайн и API-спецификация.',
            extraInfo: 'Нужен: Mobile-разработчик (React Native или Flutter). Формат: Гибрид/удалёнка, 8–12 ч/неделю. Готовы обсуждать оплату или equity. Сроки: Тестовая версия — к концу января 2025. '
        },
        // Добавьте другие карточки аналогично
    ];

    const cards2 = [
        {
            imgSrc: 'CodeQuest.jpg',
            title: 'CodeQuest — обучающая игра по программированию для подростков',
            desc: 'Игроки решают задачи на Python/JS, чтобы прокачивать персонажа и исследовать виртуальный мир. Геймдизайн и сюжет — готовы.',
            extraInfo: 'Нужен: Game developer (Unity или Godot) + базовые знания веб-API. Формат: Удалёнка, 12–20 ч/неделю. Оплата по этапам или доля в образовательном стартапе. Сроки: Альфа-версия — к февралю 2026. '
        },
        {
            imgSrc: 'Flow.jpg',
            title: 'Flow — аналитика для креативных команд (дизайнеры, копирайтеры, продюсеры)',
            desc: 'Сервис, который автоматически собирает данные из Notion, Trello, Figma и показывает, где «горят» ресурсы. MVP частично запущен.',
            extraInfo: 'Нужен: Backend-разработчик (Python + integrations via OAuth/API). Формат: Удалёнка, гибкий график. Рассматриваем как контракт, так и со-основание. Сроки: Интеграция с 3 новыми инструментами — за 4 недели. '
        },
        {
            imgSrc: 'GreenRoute.jpg',
            title: 'GreenRoute — навигатор с учётом экологичности маршрута',
            desc: 'Приложение предлагает не самый быстрый, а самый «чистый» путь: пешком, на велике или общественном транспорте. Данные от OpenStreetMap + углеродный калькулятор.',
            extraInfo: 'Нужен: Mobile UX/UI-дизайнер (опыт с картами и навигацией). Формат: Удалёнка, 8–10 ч/неделю. Проект поддержан экологическим фондом. Сроки: Дизайн-система и экраны для iOS — за 3 недели. '
        },
        // Добавьте другие карточки аналогично
    ];

    return (
        <>
            <div className='card-row'>
                {cards1.map((card, index) => (
                    <div className='Card-block' key={index}>
                        <div className='card' onClick={() => openModal(card)}>
                            <img src={card.imgSrc} alt={card.title} className='card-img' />
                            <h3 className='Card-title'>{card.title}</h3>
                            <p className='Card-desc'>{card.desc}</p>
                        </div>
                        <div className="addToFavoritesBtn">
                            <AddToFavorites itemId={card.title} />
                        </div>
                    </div>
                ))}
            </div>
            <div className='card-row'>
                {cards2.map((card, index) => (
                    <div className='Card-block' key={index}>
                        <div className='card' onClick={() => openModal(card)}>
                            <img src={card.imgSrc} alt={card.title} className='card-img' />
                            <h3 className='Card-title'>{card.title}</h3>
                            <p className='Card-desc'>{card.desc}</p>
                        </div>
                        <div className="addToFavoritesBtn">
                            <AddToFavorites itemId={card.title} />
                        </div>
                    </div>
                ))}
            </div>

            {modalVisible && (
                <>
                    <div className="blur-background" />
                    <div className="modal" style={{ display: 'flex' }}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div className="modal-content">
                            <img src={selectedCard.imgSrc} alt={selectedCard.title} />
                            <h3>{selectedCard.title}</h3>
                            <p>{selectedCard.desc}</p>
                            <p><strong>Дополнительная информация:</strong> {selectedCard.extraInfo}</p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

