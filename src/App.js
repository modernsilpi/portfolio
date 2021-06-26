import "./App.css";
import Portfolio from "../src/components/portfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar1 from "../src/components/navbar/navbar";
import Illustrator from "../src/components/illustrator";
import Adobexd from "../src/components/adobexd";
import Photoshop from "../src/components/photoshop";
import Aftereffects from '../src/components/afterEffects';
import Art from '../src/components/art-2d';
import Spotmiescard from "./components/spotmiescards";
import Onboard from "./components/onboard";
import Dream from "./components/dream";
import Space from "./components/space";
// import Contact from "../src/components/contact"

const Routing = () => {
  return (
  <>
  <Switch>
    <Route exact path="/" component={ Portfolio } />
    <Route path="/portfolio" component= { Portfolio} />
    <Route path="/Illustrator" component={ Illustrator } />
    <Route path="/Photoshop" component={ Photoshop } />
    <Route path="/Adobe-xd" component={ Adobexd } />
    <Route path="/After-effects" component={ Aftereffects } />
    <Route path="/Art" component={Art} />
    <Route path="/spotmiescard" component={Spotmiescard} />
    <Route path="/Onboard" component={Onboard} />
    <Route path="/dream" component={Dream} />
    <Route path="/space" component={Space} />
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
