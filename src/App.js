import './App.css';
import React from 'react';
import AddComponent from './Components/AddComponent';
import ListComponent from './Components/ListComponent';
import {Provider} from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddComponent />
        <ListComponent />
      </Provider>
      
    </div>
  );
}

export default App;
