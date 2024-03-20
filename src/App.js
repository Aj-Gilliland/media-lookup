//note to self if the whole program crashes for no reason check background photo import
import './App.css';
import { useState , useEffect } from 'react';


function App() {
  const [movieData,setMovieData] = useState({});
  const [movieData2,setMovieData2] = useState({});
  const [movieData3,setMovieData3] = useState({});
  const [movieData4,setMovieData4] = useState({});
  const [movieData5,setMovieData5] = useState({});
  const [movieData6,setMovieData6] = useState({});//phat stack of updating the page content
  const [movieData7,setMovieData7] = useState({});
  const [movieData8,setMovieData8] = useState({});
  const [movieData9,setMovieData9] = useState({});
  const [movieData10,setMovieData10] = useState({});
  

  async function search (){//querys the api for data
  const inputValue = document.querySelector('input').value; //first need to get the data from the input box 
  console.log(`searched ${inputValue}`)//showing what was queryed to the api
  const response = await(await fetch(`https://www.omdbapi.com/?s=${inputValue.replaceAll(' ', '+')}&apikey=7236f328`)).json()//the replace all was added to combat the url needing pluses inbetween everything instead of spaces
  console.log(response.Search)//showing api response
  if (response.Search !== undefined){//a little search validation
  setMovieData(response.Search[0])
  if (response.Search[1]){
  setMovieData2(response.Search[1])
  if (response.Search[2]){  
  setMovieData3(response.Search[2])//these all set the default values for each movie box
  if (response.Search[3]){
  setMovieData4(response.Search[3])
  if (response.Search[4]){
  setMovieData5(response.Search[4])
  if (response.Search[5]){
  setMovieData6(response.Search[5])
  if (response.Search[6]){
  setMovieData7(response.Search[6])
  if (response.Search[7]){
  setMovieData8(response.Search[7])
  if (response.Search[8]){
  setMovieData9(response.Search[8])
  if (response.Search[9]){
  setMovieData10(response.Search[9])
    }}}}}}}}}//a phat stack of validation
  }}
 
  function MovieDisplay (props){//movie card maker ;)
    if (props.image != "N/A" && props.image !== undefined){//sprinkling in a little more validation
      return(//this creates the movie cards
        <div className='movieBox toolTipTrigger'>
          <h4 className='turn-off'>{((props.title).length > 11) ? `${props.title.slice(0,8)}...` : `${props.title}` }</h4>
          <div className='contrast-div'>
            <img className='poster' src={props.image} alt="Poster Wasn't Provided"/>
          </div>
          <p className='turn-off'>{props.year}</p>
          <MakeToolTip title = {props.title}/>
        </div>
      )
    }
  }

  function MakeToolTip (props){
    const [tipData,setTipData] = useState({})
    useEffect(() => {
      
      async function getData(title) {
      const response = await(await fetch(`https://www.omdbapi.com/?t=${title.replaceAll(' ', '+')}&apikey=7236f328`)).json()
      .catch(console.error);
      setTipData(response)
      console.log(tipData)}

      getData(props.title)// !!!this function must not be changed from its current syntax, this is because IT IS REQUIRED TO MAKE IT ASYNC
    })//end of use effect
    if (tipData.Type != 'movie'){
      return(
        <div className='its-3am'>
          <p className='toolTip'>{tipData.Title}</p>
          <p className='toolTip'>{tipData.Type}</p>
        </div>
      )
    }else{
      return(
        <div className='its-3am'>
          <p className='toolTip'>{tipData.Title}</p>
          <p className='toolTip'>IMDB Rating: {tipData.imdbRating}</p>
          <p className='toolTip'>Runtime: {tipData.Runtime}</p>
          <p className='toolTip'>Rated: {tipData.Rated}</p>
          <div>
            <p className='toolTip'>{tipData.Plot}</p>
          </div>
        </div>
      )//end of return
    }//end of movie validation
  }//end of makeToolTip()




  return (//this is the App() return
    <div className="App">
      <header className="App-header"> 
        <h1 className='theTitle'>The Media Lookup</h1>
        <div>
          <input className='input-text' type="text" placeholder="Search Game, Movies, TV..." />
          <button className={'search-button'} onClick={() => search()}>Search</button>
        </div>
        <br/>
        <div className='sideways-div'>
          <MovieDisplay //all card components possible to display are given a chance here 
          image = {movieData.Poster}
          type = {movieData.Type}
          year = {movieData.Year}
          title = {movieData.Title}/>
        
          <MovieDisplay 
          image = {movieData2.Poster}
          type = {movieData2.Type}
          year = {movieData2.Year}
          title = {movieData2.Title}/>
      
          <MovieDisplay 
          image = {movieData3.Poster}
          type = {movieData3.Type}
          year = {movieData3.Year}
          title = {movieData3.Title}/>
  
          <MovieDisplay 
          image = {movieData4.Poster}
          type = {movieData4.Type}
          year = {movieData4.Year}
          title = {movieData4.Title}/>
        
          <MovieDisplay 
          image = {movieData5.Poster}
          type = {movieData5.Type}
          year = {movieData5.Year}
          title = {movieData5.Title}/> 
          
          <MovieDisplay 
          image = {movieData6.Poster}
          type = {movieData6.Type}
          year = {movieData6.Year}
          title = {movieData6.Title}/> 

          <MovieDisplay 
          image = {movieData7.Poster}
          type = {movieData7.Type}
          year = {movieData7.Year}
          title = {movieData7.Title}/> 

          <MovieDisplay 
          image = {movieData8.Poster}
          type = {movieData8.Type}
          year = {movieData8.Year}
          title = {movieData8.Title}/> 

          <MovieDisplay 
          image = {movieData9.Poster}
          type = {movieData9.Type}
          year = {movieData9.Year}
          title = {movieData9.Title}/> 

          <MovieDisplay 
          image = {movieData10.Poster}
          type = {movieData10.Type}
          year = {movieData10.Year}
          title = {movieData10.Title}/> 
        </div>
      </header>
    </div>
  );
}













export default App;

