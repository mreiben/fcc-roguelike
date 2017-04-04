import React, {Component} from 'react';
import Cell from 'Cell';
import Hud from 'Hud';
import Grid from 'Grid';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      health: 100,
      weapon: 'stick',
      level: 1,
      xp: 0,
      playerPosition: [5,5],
      grid: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,1,1,0,0,1,0,2,0,0],
        [0,3,0,1,1,0,0,2,0,0],
        [0,1,1,0,0,1,0,2,0,0],
        [0,1,1,0,0,1,0,2,0,0],
        [1,1,1,0,0,5,3,3,0,0],
        [0,1,1,0,0,1,0,2,0,0],
        [0,1,1,0,0,1,0,2,4,0],
        [0,1,1,0,0,1,0,2,0,0],
        [0,1,1,0,0,1,0,2,0,0]
      ]
    }
    this.renderCells = this.renderCells.bind(this);
  }

  renderCells = () =>{
    let myRows = [];
    for(let r = 0; r < 10; r++){
      let newRow = [];
      for(let c = 0; c < 10; c++){
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
      myRows.push(newRow);
    }
    return(<div>{myRows}</div>);
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
          {this.renderCells}
        </div>
        <Cell value="player"/>
      </div>
    )
  }
}

export default Main;
