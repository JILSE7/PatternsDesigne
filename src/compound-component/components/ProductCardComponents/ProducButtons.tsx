import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../../styles/styles.module.css';
import { IProductButtonsProps } from '../../interfaces/ProductInterfaces';

export const ProducButtons = ({className, style}:IProductButtonsProps) => {
    const {counter, increasyBy, maxCount} = useContext(ProductContext);

    const maxCountReaced = useCallback(
      () => !!maxCount && counter === maxCount ,
      [counter,maxCount],
    )
    
    console.log(!!maxCount);

  return(
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
          <button className={styles.buttonMinus} onClick={() => increasyBy(-1)}>-</button>

          <div className={styles.countLabel}>{counter}</div>

          <button className={`${styles.buttonAdd} ${maxCountReaced() && styles.disabled}`}  onClick={() => increasyBy(1)}>+</button>
        </div>
  )
}


//other solution

/* const maxCountReaced = useCallback(
  () => {
    if(counter === maxCount) return true;
    else return false;
  },
  [counter,maxCount],
) */
