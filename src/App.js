import { useEffect, useState } from 'react';
import './App.scss';
import DevSample from './dev/dev';


function App() {
  const HEADER_HEIHHT = 80;
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', ()=>{setInnerWidth(window.innerWidth)});
    return () => { // cleanup 
      window.removeEventListener('resize', ()=>{setInnerWidth(window.innerWidth)});
    }
  }, []);

  const banner = [
    <banner style={{width:innerWidth+'px'}}><img src={'img/img1.jpg'} alt={'img/img1.jpg'}/></banner>,
    <banner style={{width:innerWidth+'px'}}><img src={'img/img2.jpg'} alt={'img/img2.jpg'}/></banner>,
    <banner style={{width:innerWidth+'px'}}><img src={'img/img3.jpg'} alt={'img/img3.jpg'}/></banner>
  ];

  let index=0;
  const carousel = document.querySelector('.carousel');
  const carouselMove = (type) => {
    console.log(type);
    if (type === 'prev') {
      if (index === 0) return;
      index -= 1;
      carousel.style.transform = `translate3d(-${innerWidth * index}px, 0, 0)`;
    } else {
      if (index === (banner.length)) return;
      index += 1;
      carousel.style.transform = `translate3d(-${innerWidth * index}px, 0, 0)`;
    }
  };
  /*
  useEffect(()=>{
    const timer = setInterval(()=>{
      carouselMove('prev');
    }, 2500);
    return () => {
      clearInterval(timer);
    };
  });
  */

  return (
    <main>
      <header style={{height:HEADER_HEIHHT+'px'}}>
        <logo>로고</logo>
        <nav>
          <div>게임</div>
          <div>회사</div>
          <div>로드맵</div>
          <div>팀원</div>
          <div>파트너</div>
        </nav>
        <metamask>
          메타마스크
        </metamask>
      </header>
      <section style={{marginTop:HEADER_HEIHHT+'px'}}>
        <div className='carousel-wrapper'>
          <div className='carousel-control'>
            <button style={{width:'80px', opacity:.2}} onClick={(e) => carouselMove('prev')}>{'<'}</button>
            <button style={{width:'80px', opacity:.2}} onClick={(e) => carouselMove('next')}>{'>'}</button>
          </div>
          <div className='carousel'>{banner}{banner[0]}</div>
        </div>
        <div>게임소개</div>
        <div>회사소개</div>
        <div>로드맵</div>
        <div>팀원</div>
        <div>파트너</div>
      </section>
      <footer>
        푸터
      </footer>
    </main>
  );
}
// $('header').css('height')
export default App;
