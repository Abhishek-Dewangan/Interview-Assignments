import './App.css';
import MainBody from './Components/MainBody';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div id='body'>
        <SideBar />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
