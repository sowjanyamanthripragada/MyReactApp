import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
