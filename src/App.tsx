import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import './App.scss';
import Header from "./components/Header";
import Main from "./components/Main";

// https://www.w3schools.com/css/css3_flexbox_responsive.asp

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
