import React from 'react';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';

function App() {

  return (
    <div className="App">
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
