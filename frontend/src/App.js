import './App.css';
import {About,Footer,Header,Skills,Testimonial,Work } from './conainer'
import {Navbar} from './component'
import './app.scss'

function App() {
  return (
    <>
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      {/* <Testimonial/> */}
      <Footer/>
    </div>
    </>
  );
}

export default App;
