import CarItem from "./CarItem";
import styles from "./carlist.module.css";
export default function CarLists({ carList, setCarList }) {
  return (
    <div className={styles.listbox}>
      {carList.map((item) => (
        <CarItem
          key={item}
          item={item}
          carList={carList}
          setCarList={setCarList}
        />
      ))}
    </div>
  );
}
