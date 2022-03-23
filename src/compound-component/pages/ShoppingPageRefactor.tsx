import ProductCard from '../components/ProductCardComponents/';
import { products } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';



const product = products[0]


const ShoppingPageRefactor = () => {




  return (
    <div >
      

      <div style={{display:"flex", width:"80vw", flexFlow:"row wrap", justifyContent:"space-around"}}>
   


            <ProductCard product={product} className="bg-dark" initialValues={{count:4, maxCount:10}}>
              {
                ({count,increasyBy,isMaxCountReached,reset}) => {
                  //console.log(initialValues, "jajajaj");
                  return(
                    <>
                      <ProductCard.Image className='custom-image'/>
                      <ProductCard.Title title="Coffe Cup" className='text-white'/>
                      <ProductCard.Buttons className='text-white' style={{justifyContent:"center"}}/>
                      <button onClick={() => reset()}>reset</button>

                      <button onClick={() => increasyBy(+2)}>-2</button>

                      {
                          !isMaxCountReached && <button onClick={() => increasyBy(+2)}>+2</button>
                      }

                      <span>{count}</span>


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