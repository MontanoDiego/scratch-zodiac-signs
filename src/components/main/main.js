import React from 'react';
import { zodiacs } from '../../data.js';
import Zodiac from '../../zodiacs/zodiac.js';
import './main.css';

export default function Main() {
  return (
    <main>
      {zodiacs.map((zodiac) => (
        <Zodiac
          key={zodiac.id}
          id={zodiac.id}
          name={zodiac.name}
          dates={zodiac.dates}
          symbol={zodiac.symbol}
        />
      ))}
    </main>
  );
}