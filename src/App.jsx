import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PreviewPage from './PreviewPage';
import FormComponents from './FormComponets';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormComponents/>} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
