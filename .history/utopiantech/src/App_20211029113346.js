import React from 'react';
import './App.css';

import Shop from "./components/Shop";


function App() {
  const [text, setText] = React.useState(false)

  return (
    <div>
      <Shop />
    </div>
  );
}

export default App;