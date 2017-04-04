import React from 'react';

const Hud = (props) => {
  const health = props.health;
  const level = props.level;
  const xp = props.xp;
  const weapon = props.weapon;

  return (
    <div className="hud-info">
      <h3>FCC Roguelike Dungeon Crawler</h3>
      <ul>
        <li>Health: {health}</li>
        <li>Level: {level}</li>
        <li>XP: {xp}</li>
        <li>Weapon: {weapon}</li>
      </ul>
    </div>
  )
}

module.exports = Hud;
