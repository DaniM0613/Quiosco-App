import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';

const Categoria = ({categoria}) => {
    const { categoriaActual, handleClickCategoria } = useQuiosco()

    const { nombre, icono, id } = categoria
    
  return (   
   <div className={`${categoriaActual.id === id ? 'bg-amber-400' : ""} flex items-center gap-4 w-full border p-5 hover:bg-violet-500`}
   >
      <Image
        width={100}
        height={100}
        src={`/assets/img/icono_${icono}.svg`}
        alt='Imagen Icono'
       
      />
      <button
        type='button' className='text-2x1 font-bold hover:cursor-pointer' onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  )
}

export default Categoria
