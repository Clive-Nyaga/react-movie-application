import './App.css'
import MovieCard from './components/MovieCard'

function App() {  
  const movieNumber = 1;

  return (    
      <>
        {movieNumber === 1 ? (
          <MovieCard movie={{title: "NY4G4", release_date: "2026"}} /> 
        ) : (
          <MovieCard movie={{title: "Clive", release_date: "2003"}} /> 
        )}
      </>            
  );
}

export default App
