import Menu from './Containers/Menu';
import Body1 from './Containers/Body1/Body1';
import Body2 from './Containers/Body2/Body2';
import OurStaff from './Containers/OurStaff/OurStaff';
import ServicePrice from './Containers/Service-price/ServicePrice';
import OurCustomer from './Containers/OurCustomer/OurCusromer'
import Auth from './Containers/Auth/Auth'
import Footer from './Containers/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Body1 />
      <Body2 />
      <OurStaff />
      <ServicePrice />
      <OurCustomer />
      <Auth />
      <Footer />
    </div>
  );
}

export default App;
