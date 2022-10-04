import Board from "./Board";
import Spinner from "./Spinner";

const App = () => {
  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
      <Board />
      <Spinner />
    </div>
  );
}

export default App;
