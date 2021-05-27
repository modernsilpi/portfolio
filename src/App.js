import "./App.css";
import Portfolio from "../src/components/portfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar1 from "../src/components/navbar/navbar";
import Cyber from "../src/components/cyber";
import Webdev from "../src/components/webDev";
import Networks from "../src/components/Networks";
// import Contact from "../src/components/contact"

const Routing = () => {
  return (
  <>
  <Switch>
    <Route exact path="/" component={ Portfolio } />
    <Route path="/cyber-security" component={ Cyber } />
    <Route path="/networks" component={ Networks } />
    <Route path="/web-design" component={ Webdev } />
    {/* <Route path="/contact" component={ Contact } /> */}
  </Switch>
</>
  )
}

function App() {
  return (
   <BrowserRouter>
   {/* <Navbar1 /> */}
   <Routing />
   </BrowserRouter>
  );
}

export default App;
