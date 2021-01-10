import Button from "./Button"

const Nominees = ({nominees, setNominees}) => {
  return (
    <div className="nominees wrapper">
      <h1>Nominees</h1>
      {nominees.length === 0 && <h2>No nominees selected.</h2>}
      <ul>{nominees.map(n => {
          return (
            <div className="results__result">
            <li key={n.imdbID}>
              <h3>{n.Title}</h3>
              <p>({n.Year})</p>
            </li>
            <>
              <Button onClick={()=>setNominees()}>Remove</Button>
            </>
          </div>
          )
      })}</ul>
      
    </div>
  );
};

export default Nominees;
