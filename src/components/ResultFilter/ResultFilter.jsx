import React from 'react'
import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/UserContext/ProductContext/ProductState'



const ResultFilter = () => {
    const {products, getByCategory} = useContext(ProductContext)
    const [filter, setFilter] = useState('All');

    
    


  return (
    <div>ResultFilter</div>
  )
}

export default ResultFilter