import './App.css';
import AddTodo from './components/AddTodo';
import Navbar from './components/Navbar';
import {Outlet} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <h1> TODO REACT + TYPESCRIPT</h1>
        <Navbar />
        <AddTodo />
        <Outlet />
    </div>
  );
}

export default App;
