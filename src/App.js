import React from 'react';
import './App.sass';
import routes from './routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
