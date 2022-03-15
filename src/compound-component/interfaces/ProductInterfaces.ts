export interface IPropsProductCardComponent {
    product: IProduct,
    children: JSX.Element | JSX.Element[],
    className?: string,
    style?: React.CSSProperties,
    value?:number,
    onChange?:(args:IOnChangeArgs) => void,
  }


  export interface IOnChangeArgs {
    product: IProduct,
    count: number
  }
  
  export interface IProduct {
    id: string
    nameProduct: string,
    img?: string,
    
  }
  
  export interface IProductButtonsProps {
    className?:string,
    style?: React.CSSProperties
 
  }

  export interface IProductImageProps {
    img?:string, 
    className?:string,
    style?: React.CSSProperties
  }

  export interface IProductTitleProps {
    title?: string, 
    className?:string,
    style?: React.CSSProperties
  }
  

  export interface IProductContext {
    product: IProduct,
    counter: number,
    increasyBy: (increment:number)=> void,
  }



export interface ProductCardHOCProps{
    ({ product, children }: IPropsProductCardComponent):JSX.Element;
    Title: (Props: IProductTitleProps) => JSX.Element;
    Image: (Props: IProductImageProps) => JSX.Element;
    Buttons: (Props:IProductButtonsProps) => JSX.Element;
}