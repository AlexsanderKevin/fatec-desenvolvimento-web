import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <p>Atividade 9</p>
      <Input placeholder='Nome' />
      <Input placeholder='Email' />
      <Input placeholder='Telefone' />
      <Button>Enviar</Button>
    </div>
  );
}

export default App;
