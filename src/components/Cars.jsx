import { useState } from "react";
import CarForm from "./CarForm";
import CarLists from "./CarLists";
import Header from "./Header";

export default function Cars() {
  const [carList, setCarList] = useState([]);
  return (
    <div>
      <Header />
      <CarForm carList={carList} setCarList={setCarList} />
      <CarLists carList={carList} setCarList={setCarList} />
    </div>
  );
}
