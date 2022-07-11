import { Background } from './components/Background/Background';
import { Container } from './components/Container/Container';
import SwiperCore, { Autoplay, Keyboard, Mousewheel } from 'swiper';

function App() {
  SwiperCore.use([Keyboard, Mousewheel, Autoplay])
  return (
    <>
      <Background />
      <Container />
    </>
  );
}

export default App;
