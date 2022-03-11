import {ProductCard as ProductCardHOC} from './ProductCard';
import { ProducButtons } from './ProducButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardHOCProps } from '../../interfaces/ProductInterfaces';


export{
    ProducButtons,
    ProductImage,
    ProductTitle
}

const ProductCard:ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProducButtons
})

export default ProductCard;