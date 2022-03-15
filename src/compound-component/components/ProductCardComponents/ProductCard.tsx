import styles from '../../styles/styles.module.css';

import useCount from '../../hooks/useCount';
import { createContext } from 'react';
import { IProductContext, IPropsProductCardComponent } from '../../interfaces/ProductInterfaces';



export const ProductContext = createContext({} as IProductContext);
const {Provider} = ProductContext;

export const ProductCard = ({product, children, className, style, onChange, value}:IPropsProductCardComponent) => {
    
  

  const {counter, increasyBy} = useCount({onChange, product,value})

  return (
    <Provider value={{counter, increasyBy, product}}>
      
        <div className={`${styles.productCard} ${className}`} style={style}>

            {
              children
            }

        </div>

    </Provider>
  )
}

//*OTRA FORMA DE EXPORTAR LOS COMPONENTES PARA QUE SE MIREN DE LA SIGUIENTE FORMA
//?PASAMOS DE ESTO, QUE NO ESTA MAL, SOLO ES UNA FORMA 
{/* <ProductCard product={product}>
  <ProductImage/>
  <ProductTitle title="Coffe Cup"/>
  <ProducButtons counter={counter} increasyBy={increasyBy}/>
</ProductCard> */}

//?PASAMOS A PONERLE MAS PROPIEDADES AL COMPONENTE
 //* <ProductCard product={product}>
      //?<ProductCard.Image/>
      //?<ProductCard.Title title="Coffe Cup"/>
      //?<ProductCard.Buttons counter={counter} increasyBy={increasyBy}/>
//* </ProductCard> 

//*ASIGNAMOS LAS PROPIEDADES


