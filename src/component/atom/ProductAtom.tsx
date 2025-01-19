import React from 'react'
import './ProductAtom.css'
interface IProductDetails {
    header: string,
    detail: string,
    image: string
}
function ProductAtom(props:IProductDetails) {
    const {header, detail, image} = props;
  return (
    <div className="row product-row">
    <div className="col-6 product-text-col">
        <div className="product-head-row">
            <h3 className="product-head">{header}</h3>
        </div>
        <div className="product-text-row">
            <div className="product-inner-col">
                <span className="product-text">
                    {detail}
                </span>
            </div>
        </div>
        <div className="product-btn-row">
            <button className="btn btn-success btn-siparis">Hemen Sipariş</button>
        </div>
    </div>
    <div className="col-6 product-img-col">
        <img className="product-img" src={image} alt="Product" />
    </div>
</div>

  )
}

export default ProductAtom