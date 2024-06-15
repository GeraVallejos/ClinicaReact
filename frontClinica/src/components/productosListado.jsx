import { useEffect, useState } from "react"
import {productosGet} from "../api/producto.api";
import ProductosCard from "./ProductosCard";


const ProductosListado = () => {

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const cargaProducto = async () => {
            const res =  await productosGet();
            setProducto(res.data)
        }
        cargaProducto();
    }, []);

  return (
    <div>
        {producto.map((p) => (
            <ProductosCard key={p.id} p={p}/>

        ))}
    </div>
  )
}

export default ProductosListado