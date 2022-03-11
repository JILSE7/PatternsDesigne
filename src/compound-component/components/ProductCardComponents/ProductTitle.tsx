import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../../styles/styles.module.css';
import { IProductTitleProps } from '../../interfaces/ProductInterfaces';




export const ProductTitle = ({title = '', className, style}: IProductTitleProps) => {
    const {product:{nameProduct}} = useContext(ProductContext);
    return (
      <span className={`${styles.productDescription} ${className}`} style={style}>{title ? title : nameProduct}</span>
    )
  }
  