import Header from "./Header";
import StarRating from "./StarRating";
import { ContextProvider } from "./context/DataContext";

function App() {
  return (

    <div className="App">

      <ContextProvider>

        <Header></Header>
        <StarRating></StarRating>

      </ContextProvider>
      
    </div>

  );

}

export default App;
