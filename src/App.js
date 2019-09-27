import React from 'react';
import './App.sass';
import routes from './routes';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
