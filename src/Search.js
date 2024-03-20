
async function Search (){
    const inputValue = document.querySelector('input').value; //first need to get the data from the input box 
    console.log(`searched up   ${inputValue}`)//showing whats being returned on the line above
    const response = await(await fetch(`https://www.omdbapi.com/?t=${inputValue.replaceAll(' ', '+')}&apikey=7236f328`)).json()//the replace all was added to combate the url needing pluses inbetween everything instead of spaces
    console.log(response)
    return(
      <div>
        <img src={response.Poster} alt={response.Title}/>
        <>
        <h2>{response.Title}</h2>
        </>
        

      </div>
    )
  }




export default Search;