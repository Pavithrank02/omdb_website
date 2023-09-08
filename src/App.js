import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WatchList from './pages/WatchList';
import MovieDetails from './pages/MovieDetails';

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
