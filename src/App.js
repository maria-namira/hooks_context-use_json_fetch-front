import React, { Fragment } from 'react';
import Data from './components/Data/Data';
import Error from './components/Error/Error';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <>
      <Data />
      <Loading />
      <Error />
    </>
  )
}

export default App;