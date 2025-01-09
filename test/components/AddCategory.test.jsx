import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Testing AddCategory Component', () => { 

    test('should change text box value', () => {
        render( <AddCategory onNewCategory={ () => {} }/> )
        
        const input = screen.getByRole('textbox')

        fireEvent.input( input, { target: { value: 'Saitama' } } )

        expect(input.value).toBe('Saitama')
    })

    test('Should call component if the input has a value', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory={ onNewCategory }/> )

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue } } )
        fireEvent.submit(form)

        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)

    })

    test('Should not to call component if the input is empty', () => {
        const inputValue = ''
        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory={ onNewCategory }/> )

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue } } )
        fireEvent.submit(form)

        expect(onNewCategory).toHaveBeenCalledTimes(0)

    })
})