
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import ContactUs from "./components/contact.component";
import Laptop from "./components/laptop.component";
import Desktop from "./components/desktop.component";
import Printer from "./components/printer.component";
import Accessories from "./components/accessories.component";
import Networking from "./components/networking.component";




function App() {
  return (
    <Router>
    
      <div>
      
      <Navbar />
      <br/> 
      <Route path="/" exact component={Home}/>
      <Route path="/contactUs" component={ContactUs}/>
      <Route path="/laptops" component={Laptop}/>
      <Route path="/desktops" component={Desktop}/>
      <Route path="/printers" component={Printer}/>
      <Route path="/accessories" component={Accessories}/>
      <Route path="/networkingproducts" component={Networking}/>


      {/* *******************  Footer *********************** */}
      <h5 class="footer">Copyright©️ 2021</h5>
      </div>
    </Router>
    
  );
}

export default App;
