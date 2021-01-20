import Header from './components/Header/Header';
import Functions from './components/Functions/Functions';
import Search from './components/Search/Search';
import Ads from './components/Ads/Ads';
import Topics from './components/Topics/Topics';

function App() {

  const adsImg = 'https://cdn.pixabay.com/photo/2020/01/04/18/40/trees-4741364_960_720.png';
  const adsLink = 'http://ya.ru';


  return (
    <div className="App">
      <Header />
      <Functions />
      <Search />
      <Ads img={adsImg} link={adsLink}/>
      <Topics />
    </div>
  );
}

export default App;
