import styles from "./caritem.module.css";
export default function CarItem({ item, carList, setCarList }) {
  function handleDelete() {
    console.log("deleted", item);
    setCarList(carList.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        {item}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deletebutton}
          >
            x
          </button>
        </span>
      </div>
    </div>
  );
}
