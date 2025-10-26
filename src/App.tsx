import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import ListCard from "./components/ListCard";
import Modal from "./components/Modal";

import { RootReducer } from "./store";
import { Container } from "./styles";

function App() {

  const [ modalIsOpen, setModalIsOpen ] = useState(true)

  const { nameUser } = useSelector((state: RootReducer) => state.task)
  return (
    <>
      <Container/>
      <div className="backgroundColor">
        <div className="container">
          {modalIsOpen ? (
            <Modal onClick={() => {
              if( nameUser === ''){
                alert('Por favor, insira seu nome')
              }
              else {
                setModalIsOpen(false)
              }
            } }/>) 
            : 
            (<Header/>)}
          <ListCard/>
        </div>
      </div>
    </>
  );
}

export default App;
