import ProductoImagen from "../ProductoImagen/ProductoImagen";
import ProductoInfo from "../ProductoInfo/ProductoInfo";
import ProductoBoton from "../ProductoBoton/ProductoBoton";

const ProductoCard = () => {
  return (
    <div>
        <ProductoImagen/>
        <ProductoInfo/>
        <ProductoBoton/>
    </div>
  )
}

export default ProductoCard