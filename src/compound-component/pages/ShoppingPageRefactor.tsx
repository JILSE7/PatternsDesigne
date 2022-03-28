import ProductCard from '../components/ProductCardComponents/';
import { products } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';



const product = products[0]


const ShoppingPageRefactor = () => {




  return (
    <div >
      

      <div style={{display:"flex", width:"80vw", flexFlow:"row wrap", justifyContent:"space-around"}}>
   


            <ProductCard product={product} initialValues={{count:4, maxCount:10}}>
              {
                ({count,increasyBy,isMaxCountReached,reset}) => {

                  return(
                    <>
                      <ProductCard.Image />
                      <ProductCard.Title />
                      <ProductCard.Buttons />
                  
                    </>
                )
                }
              }
            </ProductCard> 
          

        
      </div>
     
      

    </div>
  )
}

export default ShoppingPageRefactor;