import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"

import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Testing GifGrid Component', () => {

    const category = 'One Punch'

    test('should show the loading message at the begining', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render( <GifGrid category={category}/> )

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })

    test('should show items when images are loading from the useFetchGifs custom hook', () => {
        //Paso 1 simulamos el objeto de los gifs
        const gifs = [
            {
                id: 'ABD12389D',
                title: 'Saitama Punch',
                url: 'http://img.com/saitamapunch.jgp',
            },
            {
                id: 'ZFFFD',
                title: 'Valorant Shot',
                url: 'http://img.com/ValorantShot.jgp',
            }
        ]

        //Paso 2 hacemos que el mock retorne los gifs simulados y la bandera en falso
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        //Paso 3 hacemos las pruebas esperadas
        render(<GifGrid category={category}/>)

        expect( screen.getAllByRole('img').length ).toBe(2)
        

    })
})