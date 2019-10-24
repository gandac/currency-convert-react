import React from 'react';
import ConvertorPage from './pages/ConvertorPage';
import Layout from './components/Layout/Layout';
import './App.css';

// App Wrapper
// Here we would wrap with other Higher Order rules for our pages or other lever of abstractions
function App() {
  return (
      <Layout>
          <ConvertorPage />
      </Layout>
  );
}

export default App;
