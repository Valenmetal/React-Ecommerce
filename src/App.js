import NavBar from "./components/NavBar";
import "./app/styles.css"
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div className="index__grid-container">
      <div>
        <NavBar />
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
