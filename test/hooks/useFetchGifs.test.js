import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Testing custom Hooks useFetchGifs', () => {

    const category = 'Valorant'

    test('should return the initial state', () => {

        // const { images, isLoading} = useFetchGifs()
        //Render hook regresa 3 cosas
        const { result } = renderHook( () => useFetchGifs( category ) )

        // console.log(result)
        const { images, isLoading } = result.current

        expect( images.length ).toBe( 0 )
        expect( isLoading ).toBeTruthy()
    })

    test('should return an array of images and isLoading flag turns to false', async() => {
        
        const { result } = renderHook( () => useFetchGifs( category ) )

        //Espera a
        await waitFor(
            //Que esta condicion se cumpla
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const { images, isLoading } = result.current

        // console.log(images.length)
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })
})