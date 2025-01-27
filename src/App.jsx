import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components for login and signup
import View from './Components/View';
import Form from './Components/Form';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
