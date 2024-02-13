import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title='welcome!'
  const likes=50
  const person={name:'yoshi',age:10}
  const link='http://google.com'
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
