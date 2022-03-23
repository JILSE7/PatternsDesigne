

import { useState } from 'react';
import { IOnChangeArgs, IProduct } from '../interfaces/ProductInterfaces';

export interface IProductShoppingCart extends IProduct{
    count: number
}

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
  
  export let products:IProduct[] = [product, product2];

const useShoppingCart = () => {
  //{[key]:{propuct}}
  const [shoppingCart, setshoppingCart] = useState<{[key:string]:IProductShoppingCart}>({});

  const handleCartChange = ({product,count}:IOnChangeArgs) => {

    setshoppingCart( oldShoppingCart => {

        const productInCart: IProductShoppingCart = oldShoppingCart[product.id] || { ...product, count: 0 };

        if( Math.max( productInCart.count + count, 0 ) > 0 ) {
            productInCart.count += count;
            return {
                ...oldShoppingCart,
                [product.id]: productInCart
            }
        }

        //Borrar el producto
        const {[product.id]:eliminar, ...rest} = shoppingCart
        return {...rest}

        

    })

  }

  return{
      products,
      shoppingCart,
      handleCartChange
  }
}

export default useShoppingCart