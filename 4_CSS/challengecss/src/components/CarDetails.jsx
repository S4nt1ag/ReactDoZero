import styles from "./CarDetails.module.css";

export const CarDetails = ({ name, brand, newCar, year, img }) => {
    return (
        <>
            <div className={styles.container_car}>
                <ul className={styles.list_cars}>
                    <img src={img} alt="logo" />
                    <li>Nome: {name}</li>
                    <li>Marca: {brand}</li>
                    <li>Ano fab: {year}</li>
                    <li>Estado: {newCar}</li>
                </ul>
            </div>
        </>
    )
}
