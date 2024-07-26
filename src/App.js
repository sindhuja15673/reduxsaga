import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Hello from './Hello';
import Users from './Users';
import './App.css';
import getStore from './store';

const store = getStore();

function App() {
  const [name, setName] = useState('React');
  const [users, setUsers] = useState([]);

  return (
    <Provider store={store}>
      <div className='msg'>
        <Hello name={name} />
        <p>Start editing to see some magic happen :)</p>
        <Users users={users}/>
      </div>
    </Provider>
  );
}

export default App;
