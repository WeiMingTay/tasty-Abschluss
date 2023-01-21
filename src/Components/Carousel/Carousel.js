import React from 'react';
import './Carousel.css';
import Card from '../Card/Card';
import { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Button from '../Button/Button';

const Carousel = ({ data, button, card }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [currentButtonIndex, setCurrentButtonIndex] = useState(0);

    const visibleCards = data?.slice(currentCardIndex, currentCardIndex + 2);
    const visibleButtons = data?.slice(
        currentButtonIndex,
        currentButtonIndex + 3
    );

    function handlePreviousClick() {
        setCurrentCardIndex(currentCardIndex - 2);
    }

    function handleNextClick() {
        setCurrentCardIndex(currentCardIndex + 2);
    }

    function handlePreviousClick1() {
        setCurrentButtonIndex(currentButtonIndex - 3);
    }

    function handleNextClick1() {
        setCurrentButtonIndex(currentButtonIndex + 3);
    }

    return (
        <>
            {data && (
                <div className="carousel-container">
                    {card && (
                        <>
                            <div className="carousel-cards-container">
                                {visibleCards.map((card, index) => (
                                    <Card key={index} card={card} />
                                ))}
                            </div>

                            <button
                                className="previous-btn"
                                onClick={handlePreviousClick}
                                disabled={currentCardIndex === 0}
                            >
                                <GrFormPrevious />
                            </button>
                            <button
                                className="next-btn"
                                onClick={handleNextClick}
                                disabled={currentCardIndex >= data.length - 2}
                            >
                                <GrFormNext />
                            </button>
                        </>
                    )}
                    {button && (
                        <>
                            <div className="carousel-cards-container">
                                {visibleButtons?.map((element, index) => (
                                    <Button
                                        key={index}
                                        button={element.strArea}
                                    />
                                ))}
                            </div>

                            <button
                                className="previous-btn"
                                onClick={handlePreviousClick1}
                                disabled={currentButtonIndex === 0}
                            >
                                <GrFormPrevious />
                            </button>
                            <button
                                className="next-btn"
                                onClick={handleNextClick1}
                                disabled={currentButtonIndex >= data.length - 3}
                            >
                                <GrFormNext />
                            </button>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default Carousel;
