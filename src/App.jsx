import { useEffect, useState } from 'react'
import MovieList from './components/MovieList'
import Header from './components/Header'
import './App.css'


function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue,setSearchValue]= useState('');
  const [submittedSearchValue, setSubmittedSearchValue] = useState('');
  const [favourites,setFavourites] = useState([])


  const getMovieRequest = async (searchValue)=>{
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=e678b47f`
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
  }
  const submitHandler = (event) => {
    event.preventDefault();
    setSubmittedSearchValue(searchValue);
  };
  useEffect(() => {
    if (submittedSearchValue !== '') {
      getMovieRequest(submittedSearchValue);
    }
  }, [submittedSearchValue]);

  const addFavouriteMovie = (movie) =>{
    const newFavouriteList = [...favourites,movie];
    setFavourites(newFavouriteList)
    console.log(newFavouriteList);
  }

  const deleteFavouriteMovie = (movie) =>{
    const newFavouriteList = favourites.filter(
      (favourite)=> favourite.imdbID !== movie.imdbID
      );
    setFavourites(newFavouriteList);
  }

  return (
    <>
    <Header searchValue={searchValue} setSearchValue={setSearchValue} submitHandler={submitHandler}></Header>
    <MovieList handleFavouritesClick={addFavouriteMovie} movies={movies} name='Movies' AddOrDel="Add to favourites"/>
    <MovieList movies={favourites} handleFavouritesClick={deleteFavouriteMovie} name='Favourites' AddOrDel="Delete from favourites"></MovieList>
      
    </>
  )
}

export default App
