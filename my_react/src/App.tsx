import classes from './App.module.css';
import Navigation from './components/Navigation/index';
import Header from './components/Header/index';
import Service from './components/Service/index';
import Provider from './components/Provider/index';
import Download from './components/Download/index';
import Slider from './components/Slider/index';
import LatestArticle from './components/LatestArticle/LatestArticle';

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
      {/* <p className="read-the-docs"> 
        Click on the Vite and React logos to learn more YEEEAG
      </p>

      <p className={classes.doc_sss}> 
        Click on the Vite and React logos to learn more LOL
      </p>
       */}
       

      
    </>
  )
}

export default App
