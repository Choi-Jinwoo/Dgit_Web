import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import RankPage from '../pages/RankPage';


import '../style/common.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={RankPage} />
    </BrowserRouter>
  );
}

export default App;
