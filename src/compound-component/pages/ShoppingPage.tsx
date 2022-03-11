import ProductCard, { ProducButtons, ProductImage, ProductTitle } from '../components/ProductCardComponents/';
import logo from '../../../public/coffee-mug.png';

import '../styles/custom-styles.css';
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
    <div >
      ShoppingPage

      <div style={{display:"flex", width:"80vw", flexFlow:"row wrap", justifyContent:"space-around"}}>
        <ProductCard product={product} className="bg-dark" style={{backgroundColor:"red"}}>
          <ProductImage className="custom-image" style={{boxShadow:"1px 5px 1px 1px  black"}}/>
          <ProductTitle className="text-white" />
          <ProducButtons className="buttonsStyle"/>
        </ProductCard>

        {/* COMPONENTE CON PROPIEDADES */}
        <ProductCard product={product2} className="bg-dark">
          <ProductCard.Image className='custom-image'/>
          <ProductCard.Title title="Coffe Cup" className='text-white'/>
          <ProductCard.Buttons className='buttonsStyle' style={{justifyContent:"end"}}/>
        </ProductCard>
        
      </div>
      
      
    </div>
  )
}

export default ShoppingPage