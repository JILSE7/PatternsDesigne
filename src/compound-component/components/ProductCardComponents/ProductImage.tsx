import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../../styles/styles.module.css';
import noImage from '../../assets/no-image.jpg';
export const ProductImage = ({img = ''}) => {

    const {product:{img:imgContext}} = useContext(ProductContext);
  
    return (
      <img className={styles.productImg} src={(img) ? img : imgContext ?? noImage} alt="Coffe mug"/>
    )
  }