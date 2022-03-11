import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../../styles/styles.module.css';
import { IProductButtonsProps } from '../../interfaces/ProductInterfaces';

export const ProducButtons = ({className, style}:IProductButtonsProps) => {
    const {counter, increasyBy} = useContext(ProductContext);

  return(
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
          <button className={styles.buttonMinus} onClick={() => increasyBy(-1)}>-</button>

          <div className={styles.countLabel}>{counter}</div>

          <button className={styles.buttonAdd}  onClick={() => increasyBy(1)}>+</button>
        </div>
  )
}
