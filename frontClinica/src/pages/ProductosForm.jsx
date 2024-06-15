import {useForm} from 'react-hook-form'
import { productosCrear } from '../api/producto.api';



const ProductosForm = () => {

  const {register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = handleSubmit(async data => {
    await productosCrear(data);
  });

  const nombreUsuario = 'GeraVallejos'

  return (
    <div>
      <form onSubmit={onSubmit}>
      <input type="text" 
        placeholder='Usuario' hidden={true} defaultValue={nombreUsuario}
        {...register('usuario', {required: true}) }
        />
      <input type="text" 
        placeholder='Codigo'
        {...register('codigo', {required: true})}
        />
        {errors.codigo && <span>El código es requerido</span>}
        <input type="text" 
        placeholder='Nombre'
        {...register('nombre', {required: true})}
        />
        <input type="text" 
        placeholder='Unidad'
        {...register('unidad', {required: true})}
        />
        <input type="text" 
        placeholder='Stock'
        {...register('cantidad_stock', {required: true})}
        />
        <input type="text" 
        placeholder='Inventario'
        {...register('cantidad_inventario', {required: true})}
        />
        <input type="text" 
        placeholder='Costo Compra'
        {...register('costo_compra', {required: true})}
        />
        <input type="text" 
        placeholder='Costo Venta'
        {...register('costo_venta', {required: true})}
        />
        <input type="text" 
        placeholder='Clase 1'
        {...register('clase1')}
        />
        <input type="text" 
        placeholder='Clase 2'
        {...register('clase2')}
        />
        <input type="text" 
        placeholder='Bodega'
        {...register('bodega', {required: true})}
        />
        <input type="text" 
        placeholder='Proveedor'
        {...register('proveedor', {required: true})}
        />
        <input type="text" 
        placeholder='Descripcion'
        {...register('descripcion', {required: true})}
        />
        <input type="checkbox" 
        placeholder='Obsoleto' hidden={true}
        {...register('obsoleto')}
        />
        <button>Guardar</button>
      </form>
    </div>
  )
}

export default ProductosForm