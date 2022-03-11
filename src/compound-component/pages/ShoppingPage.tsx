import ProductCard, { ProducButtons, ProductImage, ProductTitle } from '../components/ProductCardComponents/';
import logo from '../../../public/coffee-mug.png';
const product = {
  id:'1',
  nameProduct: "coffe card",
  img: logo
}

const product2 = {
  id:'1',
  nameProduct: "coffe card opt",
}


const ShoppingPage = () => {

  return (
    <div>
      ShoppingPage

      <div style={{display:"flex", width:"100vw", flexFlow:"row wrap", justifyContent:"center"}}>
        <ProductCard product={product}>
          <ProductImage/>
          <ProductTitle />
          <ProducButtons />
        </ProductCard>

        {/* COMPONENTE CON PROPIEDADES */}
        <ProductCard product={product2}>
          <ProductCard.Image/>
          <ProductCard.Title title="Coffe Cup"/>
          <ProductCard.Buttons />
        </ProductCard>
        
      </div>
      
      
    </div>
  )
}

export default ShoppingPage