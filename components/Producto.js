import Image from 'next/image'
import { formaterDinero } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'

const  Producto = ({producto}) =>  {
  const { handleSetProducto, handleChangeModal } = useQuiosco()
  const { nombre, imagen, precio } = producto

    
  return (
    <div className="border p-3">
      <Image 
        src={`/assets/img/${imagen}.jpg`} 
        alt={`Imagen Platillo ${nombre}`}
        width={300}
        height={300}
      />
      <div className='p-5'>
        <h3 className='text-2xl font-bold'>{nombre}</h3>
        <p className='mt-5 font-black text-4xl text-purple-500'>
          {formaterDinero(precio)}
        </p>
        <button 
        type='button'
        className='bg-violet-600 hover:bg-violet-800 text-white w-full mt-5 p-3 uppercase font-bold'
        onClick={() => {
          handleSetProducto(producto),
          handleChangeModal()
        } }
        >
          Agregar
        </button>
      </div>
    </div>
  )
}

export default Producto
