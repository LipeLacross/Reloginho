import React, { useState } from 'react';
import './App.css';
import ClockGame from './ClockGame';
import { Howl } from 'howler';

const spinSound = new Howl({ src: ['spin.mp3'], volume: 0.5 });
const winSound = new Howl({ src: ['win.mp3'], volume: 0.8 });
const loseSound = new Howl({ src: ['lose.mp3'], volume: 0.8 });

const hourOptions = [
  { value: 6, multiplier: 5 },
  { value: 12, multiplier: 10 },
  { value: 24, multiplier: 20 },
  { value: 60, multiplier: 50 },
];

function App() {
  const [hours, setHours] = useState(hourOptions[0].value);
  const [selectedHour, setSelectedHour] = useState(1);
  const [betAmount, setBetAmount] = useState(10);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSpin = () => {
    if (betAmount <= 0) {
      alert("Por favor, insira um valor válido para apostar.");
      return;
    }

    setLoading(true);
    spinSound.play();

    setTimeout(() => {
      const outcome = Math.floor(Math.random() * hours) + 1;
      spinSound.stop();
      if (outcome === selectedHour) {
        const multiplier = hourOptions.find(option => option.value === hours).multiplier;
        const winnings = betAmount * multiplier;
        setResult({ message: `Parabéns! Você acertou e ganhou R$${winnings}!`, type: 'win' });
        winSound.play();
      } else {
        setResult({ message: `Você perdeu. O ponteiro parou na hora ${outcome}.`, type: 'lose' });
        loseSound.play();
      }
      setLoading(false);
    }, 3000);
  };

  return (
      <div className="App">
        <h1 className="title">Reloginho</h1>
        <div className="game-controls">
          <div className="field">
            <label className="label">Número de horas:</label>
            <div className="control">
              <div className="select">
                <select
                    value={hours}
                    onChange={(e) => {
                      setHours(Number(e.target.value));
                      setSelectedHour(1);
                    }}
                >
                  {hourOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.value} horas (Multiplicador: {option.multiplier}x)
                      </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Escolha uma hora:</label>
            <div className="control">
              <input
                  className="input"
                  type="number"
                  min="1"
                  max={hours}
                  value={selectedHour}
                  onChange={(e) => setSelectedHour(Math.max(1, Math.min(hours, Number(e.target.value))))}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Valor da aposta (R$):</label>
            <div className="control">
              <input
                  className="input"
                  type="number"
                  min="0"
                  value={betAmount}
                  onChange={(e) => setBetAmount(Number(e.target.value))}
              />
            </div>
          </div>
          <button
              className={`button is-warning ${loading ? 'is-loading' : ''}`}
              onClick={handleSpin}
              disabled={loading}
          >
            {loading ? 'Girando...' : 'Girar Ponteiro'}
          </button>
        </div>
        <ClockGame hours={hours} selectedHour={selectedHour} onSpin={loading} />
        {result && (
            <div className={`result-message ${result.type}`}>
              {result.message}
            </div>
        )}
        <div className="bonus-info">
          <h2 className="subtitle is-4">Bonificações</h2>
          <p>Escolha entre as opções de horas disponíveis para multiplicar seus ganhos:</p>
          <ul>
            {hourOptions.map(option => (
                <li key={option.value}>
                  Relógio com {option.value} horas: {option.multiplier}x o valor apostado
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
}

export default App;
