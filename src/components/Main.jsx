import React from 'react';
import './Main.css';

const Main = () => {
  const items = [
    { title: 'Card 1', description: 'This is the description for Card 1.' },
    { title: 'Card 2', description: 'This is the description for Card 2.' },
    { title: 'Card 3', description: 'This is the description for Card 3.' },
  ];

  return (
    <>
      <main>
        {items.map((item) => {
          const key = `${item.title}-${item.description}`;
          return (
            <div key={key} className='card_div'>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </main>
    </>
  );
};
export default Main;
