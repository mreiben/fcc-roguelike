import React, {Component} from 'react';
import Cell from 'Cell';
import Hud from 'Hud';
import Grid from 'Grid';

class Main extends Component {
  constructor(props){
    super(props);
    let newGrid = [];
    for(let i = 0; i < 50; i++){
      let newRow = [];
      for(let x = 0; x < 75; x++){
        newRow.push(1);
      }
      newGrid.push(newRow);
    }
    this.state = {
      health: 100,
      weapon: 'stick',
      level: 1,
      xp: 0,
      playerPosition: [5,5],
      grid: newGrid
    }

  }

  renderCells = () => {
    let myRows = [];
    for(let r = 0; r < this.state.grid.length; r++){
      let newRow = [];
      for(let c = 0; c < this.state.grid[0].length; c++){
        let v = '';
        switch(this.state.grid[r][c]){
          case 1:
          v = "stone";
          break;
          case 2:
          v = "enemy";
          break;
          case 3:
          v = "potion";
          break;
          case 4:
          v = "weapon";
          break;
          case 5:
          v = "player";
          break;
          default:
          v = "empty";
        }
        newRow.push(<Cell value={v}/>)
      }
      myRows.push(<div className="cellRow">{newRow}</div>);
    }
    return(<div className="fullGrid">{myRows}</div>);
  }

  render() {
    return (
      <div>
        <Hud
          health={this.state.health}
          level={this.state.level}
          xp={this.state.xp}
          weapon={this.state.weapon}
          />
        <div className="grid">
          {this.renderCells()}
        </div>
      </div>
    )
  }
}

export default Main;
