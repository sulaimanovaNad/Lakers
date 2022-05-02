import './App.css';
import { Button } from './components/Button/Button';
import { Description } from './components/Description/Description';
import { Img } from './components/Img/Img';
import { Title } from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <div className='card bg-green'>
        <Img/>
        <Title/>
        <Description/>
        <Button />
      </div>
      <div className='card bg-blue'>
        <Img/>
        <Title/>
        <Description/>
        <Button />
      </div>
      <div className='card bg-red'>
        <Img/>
        <Title/>
        <Description/>
        <Button />
      </div>
    </div>
  );
}

export default App;
