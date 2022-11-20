import './about.css';

function About(props) {
  props.main('About...');
  return (
    <>
      {props.file ? <img src={'img/'+props.file}/> : <p>about</p>}
    </>
  );
}

export default About;
