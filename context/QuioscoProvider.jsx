import { useState, useEffect, createContext } from 'react'
import axios from 'axios'



const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
    const [categorias, setCategorias ] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})

    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias')
        setCategorias(data)

    }
    useEffect(() => {
        obtenerCategorias()
    }, [])

    const handleClickCategoria = id => {
        const categoria = categorias.filter( cat => cat.id === id )
        console.log(id)
    }

    return(
        <QuioscoContext.Provider
           value={{
            categorias,
            categoriaActual,
            handleClickCategoria
           }}
        >

           {children }
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}
export default QuioscoContext