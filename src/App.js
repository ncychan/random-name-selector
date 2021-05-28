import { useState } from 'react';
import './App.css';

const App = () => {
  const [nameBlock, setNameBlock] = useState('');
  const [selectedName, setSelectedName] = useState();

  const handleDrawName = () => {
    const nameList = nameBlock.split(/[\r\n]+/)
    const randomIndex = Math.floor(Math.random() * nameList.length)
    setSelectedName(nameList[randomIndex])
  }

  const handleNameBlockChange = (evt) => {
    const newValue = evt.target.value;
    setNameBlock(newValue);
  }

  const handleClear = () => {
    setNameBlock('')
    setSelectedName(undefined)
  }

  // disable when nameBlock is undefined or empty string
  const isDrawDisabled = !Boolean(nameBlock)

  return (
    <div className="App">
      <button disabled={isDrawDisabled} onClick={handleDrawName}>{Boolean(selectedName) ? 'Redraw Name' : 'Draw Name'}</button>
      {(Boolean(nameBlock) || Boolean(selectedName)) && <button onClick={handleClear}>Clear</button>}

      <textarea placeholder="Enter Names" value={nameBlock} onChange={handleNameBlockChange} />
      { Boolean(selectedName) && <p>{selectedName}</p>}
    </div>
  );
}

export default App;


/**
 * false && * => false
 * true && false => false
 * true && true => true
 *
 * if selectedName is defined => Redraw Name, else => Draw Name
 *
 * condition ? true val : false val
 *
 * Boolean(selectedName) ? 'Redraw Name' : 'Draw Name'
 *
 * if nameBlock is defined || if selectedName is defined
 * then Clear appear
 *
 * (Boolean(nameBlock) || Boolean(selectedName)) && <button>Clear</button>
 *
 * nameBlock === undefined || nameBlock === ''
 * 
 */