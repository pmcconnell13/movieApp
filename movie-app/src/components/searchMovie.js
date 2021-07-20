export default function SearchMovie(){

  return (
        <form className="form">
          <label htmlFor="query">Movie Name</label>
          <input type="text" name="query" placeholder="searchMe" />
          <button className="button" type="submit">Search</button>
        </form>
  )
}