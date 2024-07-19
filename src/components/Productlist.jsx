import React, { useEffect, useState } from 'react'
import Paginacion from './Paginacion.jsx'

const Productlist = () => {
    const [products, setProducts] = useState([])

    const totalProducts = products.length

    const [productsPorPage, setProductsPorPage ] = useState(6)
    const [currentPage, setCurrentPage] =useState(1)


    const productList = async() => {
        const data = await fetch('https://fakestoreapi.com/products')
        const products = await data.json()
        
        setProducts(products)

    }

    useEffect(()=>{
        productList()
    },[])
    
    return (
    <>
        <div className="container-products">
            {products.map(product =>(
                <div className="card-product" key={product.id}>
                    <figure className="container-img">
                        <img src={product.image} alt={product.title} />
                    </figure>
                    <div className="info-product">
                        <h3>{product.title}</h3>
                        <p className='price'>$ {product.price}</p>
                        <button>Añadir al carrito</button>
                    </div>
                </div>
            ))}
        </div>
        <Paginacion 
        productsPorPage={productsPorPage} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}/>
    </>
  )
}

export default Productlist
