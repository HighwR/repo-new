import React  from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MyContext } from './Components/MyContext';


ReactDOM.render(
  <MyContext > 
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </MyContext>,
  document.getElementById('root')
);

reportWebVitals();
