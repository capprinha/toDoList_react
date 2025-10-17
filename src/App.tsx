import Header from "./components/Header";
import ListCard from "./components/ListCard";
import { store } from "./store";
import { Container } from "./styles";
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Provider store={store}>
        <Container/>
        <div className="backgroundColor">
          <div className="container">
            <Header/>
            <ListCard/>
          </div>
        </div>
      </Provider>
      </>
  );
}

export default App;
