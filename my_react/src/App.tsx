import classes from './App.module.css';
import Navigation from './components/Navigation/index';
import Header from './components/Header/index';
import Service from './components/Service/index';
import Provider from './components/Provider/index';
import Download from './components/Download/index';
import Slider from './components/Slider/index';
import LatestArticle from './components/LatestArticle/LatestArticle';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Navigation />
      <Header />
      <Service />
      <Provider />
      <Download />
      <Slider />
      <LatestArticle />
      <Footer />
    </>
  );
}

export default App
