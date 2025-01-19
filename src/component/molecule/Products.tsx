import React from 'react'
import './Products.css'
import ProductAtom from '../atom/ProductAtom'

function Products() {
  return (
    <>
    <div className="row product-genel-row">
      <div className="col product-genel-col">
        <h1 className='product-genel-head'>Ürünlerimizi hemen keşfedin.</h1>
        <span className='product-genel-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eaque exercitationem, repellendus sint delectus reprehenderit, sed iusto, doloribus necessitatibus officiis hic reiciendis ducimus dolore voluptas! Impedit quam non quisquam libero?
        Saepe explicabo error rerum rem quasi. Architecto error consectetur sit dolorem! Harum doloremque sapiente ad. Reprehenderit, fuga? Sint praesentium sit quae autem, dolore facere provident nihil mollitia. Perferendis, quod aut?</span>
      </div>
    </div>
      <ProductAtom header='URUN-1' detail='lorem ipsum' image='https://picsum.photos/600/400'/>
      <ProductAtom header='URUN-1' detail='lorem ipsum' image='https://picsum.photos/600/400'/>
    </>
  )
}

export default Products