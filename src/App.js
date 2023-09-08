import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import WatchList from './components/WatchList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className='m-0 p-0 bg-black h-screen'>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/watchlist' element={ <WatchList />}/>
        <Route path=':id' element={ <MovieDetails />}/>
      </Routes>
     
    </div>
  );
}

export default App;
