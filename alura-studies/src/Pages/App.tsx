import React from "react";
import Formulario from "../Components/Formulario";
import Lista from "../Components/Lista";
import styles from "./style.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
