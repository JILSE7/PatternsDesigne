import styles from '../../styles/styles.module.css';

import useCount from '../../hooks/useCount';
import { createContext } from 'react';
import { IProductContext, IPropsProductCardComponent } from '../../interfaces/ProductInterfaces';



export const ProductContext = createContext({} as IProductContext);
const {Provider} = ProductContext;

export const ProductCard = ({product, children, className, style, onChange, value, initialValues}:IPropsProductCardComponent) => {
    
  

  const {counter, increasyBy, maxCount, isMaxCountReached, reset} = useCount({onChange, product,value, initialValues})

  return (
    <Provider value={{counter, increasyBy, product, maxCount}}>
      
        <div className={`${styles.productCard} ${className}`} style={style}>

            {
           
                  children({count:counter,increasyBy,isMaxCountReached,maxCount: maxCount!, reset, product})
               
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


