import { useState } from "react";
import Header from "./components/Header";
import ListCard from "./components/ListCard";
import Modal from "./components/Modal";
import { store } from "./store";
import { Container } from "./styles";
import { Provider } from 'react-redux'

function App() {

  const [ modalIsOpen, setModalIsOpen ] = useState(true)
  return (
    <>
      <Provider store={store}>
        <Container/>
        <div className="backgroundColor">
          <div className="container">
            {modalIsOpen ? (<Modal onClick={() => setModalIsOpen(false)}/>) : (<Header/>)}
            <ListCard/>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
