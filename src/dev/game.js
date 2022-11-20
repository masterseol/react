import './game.css';

function Game(props) {
  props.main('Game...');
  return (
    <>
      {props.file ? <img src={'img/'+props.file}/> : <p>game</p>}
    </>
  );
}

export default Game;
