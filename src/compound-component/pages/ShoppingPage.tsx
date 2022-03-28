import { useState } from 'react';
import ProductCard from '../components/ProductCardComponents/';
import { IProduct, IOnChangeArgs } from '../interfaces/ProductInterfaces';
import '../styles/custom-styles.css';


const product = {
  id:'1',
  nameProduct: "coffe card",
  img: "/coffee-mug.png"
}

const product2 = {
  id:'2',
  nameProduct: "coffe card opt",
  img: "/coffee-mug2.png"
}

let products:IProductShoppingCart[] = [product, product2];


interface IProductShoppingCart extends IProduct{
  count?: number
}

const ShoppingPage = () => {

  //{[key]:{propuct}}
  const [shoppingCart, setshoppingCart] = useState<{[key:string]:IProductShoppingCart}>({});

  const handleCartChange = ({product,count}:IOnChangeArgs) => {
    
/*    products = products.map(pro => {
     if(pro.id === product.id){
       pro.count = count
     }

     return pro;
   })  */

    if(count === 0){
      //1 WAY
      const {[product.id]:eliminar, ...rest} = shoppingCart

      setshoppingCart({...rest});
      return;
      //SECOND WAY
     /*  const newCart = {...shoppingCart}
      delete newCart[product.id]

      setshoppingCart({...newCart})
      return; */
    }

    //Construyendo el nuevo articulo
    const newArticle:IProductShoppingCart = {
      ...product,
         count
    }

    setshoppingCart({...shoppingCart, [product.id]: newArticle});
  }


  return (
    <div >
      ShoppingPage

      <div style={{display:"flex", width:"80vw", flexFlow:"row wrap", justifyContent:"space-around"}}>
   

        {/*MOSTRAR PRODUCTOS */}
        {/* {products.map((product,i) => {
          return (
            <ProductCard product={product} value={shoppingCart[product.id]?.count || 0} className="bg-dark" key={i + product.id} onChange={(evento) => handleCartChange(evento)}>
              <ProductCard.Image className='custom-image'/>
              <ProductCard.Title title="Coffe Cup" className='text-white'/>
              <ProductCard.Buttons className='text-white' style={{justifyContent:"center"}}/>
            </ProductCard> 
          )
        })} */}
        
      </div>
      
      <div className='shopping-center'>
       {/*  {
          Object.entries(shoppingCart).map((product,i) => {
            return(
              <ProductCard product={product[1]} value={product[1].count} className="bg-dark" key={i + product[0]}  style={{width:"100px"}} onChange={(evento) => handleCartChange(evento)}>
                <ProductCard.Image className='custom-image'/>
                <ProductCard.Title title="Coffe Cup" className='text-white'/>
                <ProductCard.Buttons className='text-white' style={{justifyContent:"center"}}/>
            </ProductCard> 
            )
          })
        } */}
      </div>
      
        {

        }
    </div>
  )
}

export default ShoppingPage