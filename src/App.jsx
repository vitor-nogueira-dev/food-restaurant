import './App.css'
import Employees from './components/Employees/Employees'
import Feedbacks from './components/Feedbacks/Feedbacks'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu'
import Promotions from './components/Promotions/Promotions'
import { Services } from './components/Services/Services'

import AOS from 'aos'
import NavBar from './components/NavBar/NavBar.jsx'

function App() {

  AOS.init();
  return (
    <div>
      <NavBar />
      <Hero />
      <Services />
      <Menu />
      <Promotions />
      <Employees />
      <Feedbacks />
      <Footer />
    </div>
  );
}

export default App;
