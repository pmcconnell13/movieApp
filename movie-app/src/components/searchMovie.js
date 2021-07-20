import { useState } from 'react';
import Card from './card';

export default function SearchMovie(){

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=4fd50d9704b2f645d20747e085895b5a&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data  = await res.json();
      setMovies(data.results)
      console.log(data);
  }catch(err){
      console.error(err);
  }
  console.log('movies', movies)
  }

  return (
      <>
        <form className="form" onSubmit={searchMovies}>
          <label className="label" htmlFor="query">Movie Name</label>
          <input className="input" type="text" name="query" placeholder="searchMe" value={query} onChange={(e) => setQuery(e.target.value)} />
          <button className="button" type="submit">Search</button>
        </form>
        <div className="card-list">
          {movies.filter(movie => movie.poster_path).map(movie => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </>
  )
}