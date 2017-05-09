import React from 'react';

const HeroesPreview = (hero) => {
  return (
    <div className="HeroesPreview">
      { hero.name }
    </div>
  );
};

export default HeroesPreview;
