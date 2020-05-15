import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyles from './styles/global';

import ToastContainer from './components/ToastContainer';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <ToastContainer />
    <GlobalStyles />
  </>
);

export default App;
