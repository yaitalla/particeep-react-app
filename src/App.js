import React, { useReducer } from 'react';
import { reducer, initialStore, Context } from './reducer';
import Landing from './containers/Landing';

const App = () => {
  const [store, dispatch] = useReducer(reducer, initialStore);
  return (
    <Context.Provider value={{store, dispatch}} >
      <Landing />
    </Context.Provider>
  );
}

export default App;
