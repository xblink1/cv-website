import './App.css';
import Footer from './components/Footer';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  return (
    <>
      <div className='container'>
        <Left />
        <Right />  
      </div>
      <Footer /> 
    </>
  );
}

export default App;
