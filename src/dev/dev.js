import './dev.scss'
import Home from './home';
import About from './about';
import Game from './game';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function DevSample() {
  let [testVal, setTestval] = useState('테스트용 입니다.');
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='dev'>
      <div style={{height: '10vh'}}>
        <nav className={(menuOpen ? 'active' : '')}>
          <a>Home</a>
          <a>About</a>
          <a>Game</a>
          <button onClick={()=>{setMenuOpen(menuOpen => !menuOpen)}}>{menuOpen ? '<' : '>'}</button>
        </nav>
        <button onClick={()=>{setMenuOpen(menuOpen => !menuOpen)}}>{menuOpen ? 'Close' : 'Open'}</button>
      </div>

      <BrowserRouter>
        <div className='navRouter'>
          <NavLink className={({isActive})=> 'item' + (isActive ? ' on' : ' off')} to='/'>Home</NavLink>
          <NavLink className={({isActive})=> 'item' + (isActive ? ' on' : ' off')} to='about'>About</NavLink>
          <NavLink className={({isActive})=> 'item' + (isActive ? ' on' : ' off')} to='game'>game</NavLink>
        </div>
        <div style={{width: '100%'}}>
          <Routes>
            <Route path='/' element={<Home file='img1.jpg' main={(val)=>{setTestval(val);}}/>}></Route>
            <Route path='about' element={<About file='img2.jpg' main={(val)=>{setTestval(val);}}/>}></Route>
            <Route path='game' element={<Game file='img3.jpg' main={(val)=>{setTestval(val);}}/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <div style={{}}>
        <h1>h1 테그로 생성된 텍스트 : {testVal}</h1>
        <p>p 테그로 생성된 텍스트 : {testVal}</p>
      </div>
    </div>
  );
}

export default DevSample;
