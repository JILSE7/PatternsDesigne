import ProductCard from '../components/ProductCardComponents/';
import { IProduct} from '../interfaces/ProductInterfaces';
import '../styles/custom-styles.css';
import useShoppingCart from '../hooks/useShoppingCart';





const ShoppingPageRefactor = () => {


    const {products,shoppingCart,handleCartChange} = useShoppingCart()

  return (
    <div >
      ShoppingPage

      <div style={{display:"flex", width:"80vw", flexFlow:"row wrap", justifyContent:"space-around"}}>
   

        {/*MOSTRAR PRODUCTOS */}
        {products.map((product,i) => {
          return (
            <ProductCard product={product} value={shoppingCart[product.id]?.count || 0} className="bg-dark" key={i + product.id} onChange={(evento) => handleCartChange(evento)}>
              <ProductCard.Image className='custom-image'/>
              <ProductCard.Title title="Coffe Cup" className='text-white'/>
              <ProductCard.Buttons className='text-white' style={{justifyContent:"center"}}/>
            </ProductCard> 
          )
        })}
        
      </div>
      {/*MOSTRAR CARRITO */}
      <div className='shopping-center'>
        {
          Object.entries(shoppingCart).map((product,i) => {
            return(
              <ProductCard product={product[1]} value={product[1].count} className="bg-dark" key={i + product[0]}  style={{width:"100px"}} onChange={(evento) => handleCartChange(evento)}>
                <ProductCard.Image className='custom-image'/>
                <ProductCard.Title title="Coffe Cup" className='text-white'/>
                <ProductCard.Buttons className='text-white' style={{justifyContent:"center"}}/>
            </ProductCard> 
            )
          })
        }
      </div>
      

    </div>
  )
}

export default ShoppingPageRefactor;