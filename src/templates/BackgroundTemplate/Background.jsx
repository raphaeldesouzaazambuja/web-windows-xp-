import React, { useState } from 'react';
import './Background.css';
import WallpaperImg from '../../assets/wallpaper.jpg';
import CalculatorImg from '../../assets/calculator.png';
import { Calculator } from '../CalculatorTemplate/Calculator';

function Background() {
  const [showCalculator, setShowCalculator] = useState(false);

  const handleClickCalculator = () => {
    setShowCalculator(true);
  };

  const handleCloseCalculator = () => {
    setShowCalculator(false);
  };

  return (
    <div className="screen">
      <img className="wallpaper" src={WallpaperImg} alt="Wallpaper" />
      <img className="calculator-icon" src={CalculatorImg} onClick={handleClickCalculator} />

      {showCalculator && <Calculator onClose={handleCloseCalculator} />}
    </div>
  );
}

export {Background};
