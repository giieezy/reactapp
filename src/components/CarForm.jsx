import { useState } from "react";
import styles from "./form.module.css";
export default function CarForm({ carList, setCarList }) {
  const [carName, setCarName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setCarList([...carList, carName]);
    setCarName("");
  }
  return (
    <form className={styles.addcarform} onSubmit={handleSubmit}>
      <input
        className={styles.inputField}
        onChange={(e) => setCarName(e.target.value)}
        value={carName}
        type="text"
        placeholder="Enter Manufacturer's Name"
      ></input>
      <button className={styles.addcarbut} type="submit">
        Add
      </button>
    </form>
  );
}
