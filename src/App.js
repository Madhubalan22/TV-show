import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import ShowsList from "./components/ShowsList";


const App = () => {
  return (
    <div>
      <Searchbar />
      <ShowsList />     
      <Footer />
    </div>
  )
}

export default App;