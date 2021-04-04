import React from 'react';
import RouterBoss from './router/router_boss';
import GlobalState from './state_manage/global_state';
import './App.css'

const App = () => {
  return (
    <GlobalState>
      <RouterBoss />
    </GlobalState>
  );
}

export default App;
