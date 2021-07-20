export default function Test(){

    return (
        <>
          <form className="form">
            <label htmlFor="query"></label>
            <input type="text" name="query" placeholder="searchMe"></input>
            <button className="button" type="submit"></button>
          </form>
        </>
    )
}

//to create the SearchMovies component
//form with a class of form
//label with htmlFor="query" and a class of Label
//input of type text with a name of "query" and a placeholder
//button class of button and a type of submit