import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/products')
    .then((response) => {
      setProducts(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  },[])

  return (
    <>
      <h1>Demo frontend</h1>
      <p>Products: {products.length}</p>

      {
        products.map((product, index) => (
            <div key={product.id}>
                <p>{product.name}</p>
            </div>
        ))
      }
    </>
  )
}

export default App
