import './home.css';

function Home(props) {
  props.main('Home...');
  return (
    <>
      {props.file ? <img src={'img/'+props.file}/> : <p>home</p>}
    </>
  );
}

export default Home;
