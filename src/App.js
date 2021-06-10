import { useState } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Button from './components/Button'
import PageHeader from './components/PageHeader';
import Box from './components/Box';

const GlobalStyle = createGlobalStyle`
  body,
  button,
  textarea {
    font-family: "Open Sans";
  }
`;

const AppContainer = styled.div`
  margin: 0 243px;
`;

const App = () => {
  const [nameBlock, setNameBlock] = useState('');
  const [selectedName, setSelectedName] = useState();

  const handleDrawName = () => {
    const nameList = nameBlock.split(/[\r\n]+/);
    const randomIndex = Math.floor(Math.random() * nameList.length);
    setSelectedName(nameList[randomIndex]);
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
    <AppContainer>
      <GlobalStyle/>
      <PageHeader>Name Draw</PageHeader>
      <Box>
        <p>Draw a Name!</p>
        <p>Enter one name per line below</p>
        <Button disabled={isDrawDisabled} onClick={handleDrawName}>{Boolean(selectedName) ? 'Redraw Name' : 'Draw Name'}</Button>
      {(Boolean(nameBlock) || Boolean(selectedName)) && <Button onClick={handleClear}>Clear</Button>}
      <textarea placeholder="Enter Names" value={nameBlock} onChange={handleNameBlockChange} />
      </Box>
      
      { Boolean(selectedName) && <Box><p>{selectedName}</p></Box>}

    </AppContainer>

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