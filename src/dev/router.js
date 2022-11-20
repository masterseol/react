import './router.css';
import Home from './home';
import About from './about';
import Game from './game';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function Router(props) {
  return (
    <BrowserRouter>
      <nav className='nav'>
        <NavLink className={({isActive})=> 'item' + (isActive ? ' on' : ' off')} to='/'>Home</NavLink>
        <NavLink className={({isActive})=> 'item' + (isActive ? ' on' : ' off')} to='about'>About</NavLink>
        <NavLink className={({isActive})=> 'item' + (isActive ? ' on' : ' off')} to='game'>game</NavLink>
      </nav>
      <div style={{width: '100%'}}>
        <Routes>
          <Route path='/' element={<Home file='img1.jpg' main={(val)=>{props.main(val);}}/>}></Route>
          <Route path='about' element={<About file='img2.jpg' main={(val)=>{props.main(val);}}/>}></Route>
          <Route path='game' element={<Game file='img3.jpg' main={(val)=>{props.main(val);}}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    );
}

export default Router;
