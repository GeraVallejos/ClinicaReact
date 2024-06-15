import {useForm} from 'react-hook-form'
import { usuarioRegister } from '../api/usuario.api';



const UsuarioRegister = () => {

  const {register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = handleSubmit(async data => {
    await usuarioRegister(data);
    
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
      <input type="text" 
        placeholder='Usuario'
        {...register('username', {required: true}) }
        />
      <input type="text" 
        placeholder='Nombre'
        {...register('first_name', {required: true})}
        />
        {errors.codigo && <span>El código es requerido</span>}
        <input type="text" 
        placeholder='Apellido'
        {...register('last_name', {required: true})}
        />
        <input type="text" 
        placeholder='Email'
        {...register('email', {required: true})}
        />
        <input type="text" 
        placeholder='Cargo'
        {...register('cargo', {required: true})}
        />
        <input type="text" 
        placeholder='Password'
        {...register('password', {required: true})}
        />
        <input type="checkbox" 
        placeholder='Super User'
        {...register('is_superuser', {required: true})}
        />
        <input type="checkbox" 
        placeholder='Staff'
        {...register('is_staff', {required: true})}
        />
        <input type="checkbox" 
        placeholder='Activo'
        {...register('is_active', {required: true})}
        />
        <button>Guardar</button>
      </form>
    </div>
  )
}

export default UsuarioRegister