import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

    const [ InputValue, setInputValue ] = useState('')

    /* Para poder cambiar el input, ya que sin el onInputChange se renderiza
      como read only, para poderlo cambiar hay que hacer un onChange como abajo */
    /* Hay que pasarle el evento para que pueda seguir escribiendo también */
    const onInputChange = ( event ) => {
        setInputValue( event.target.value )
    }

    const onSubmit = ( event ) => {
        event.preventDefault()
        if( InputValue.trim().length <= 1) return
        // onAddCategories(categories => [...categories, InputValue])
        onNewCategory( InputValue.trim() )
        setInputValue('')
    }

    return (
        <form onSubmit={ (event) => onSubmit(event)} aria-label='form'>
            <input 
            type = "text"
            placeholder = 'Buscar Gifs'
            value = {InputValue}

            /* Tenemos un caso donde estoy mandando una funcion cuyo primer argumento
            es el argumento que estoy mandándole a la function que quiero ejectutar. Por lo tanto, se puede obviar de la siguiente manera:
            onChange = { onInputChange } */
            onChange = { (event) => onInputChange(event) } 
            />
        </form>  
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
