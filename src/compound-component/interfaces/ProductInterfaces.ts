export interface IPropsProductCardComponent {
    product: IProduct,
    children: JSX.Element | JSX.Element[]
  }
  
  export interface IProduct {
    id: string
    nameProduct: string,
    img?: string,
  }
  
  export interface IProductButtonsProps {
    counter: number,
    increasyBy: (increment:number)=> void
  }
  
  
  
  export interface IProductContext  extends IProductButtonsProps{
    product: IProduct
  }


export interface ProductCardHOCProps{
    ({ product, children }: IPropsProductCardComponent):JSX.Element;
    Title: ({ title }: { title?: string}) => JSX.Element;
    Image: ({ img }: { img?: string }) => JSX.Element;
    Buttons: () => JSX.Element;
}