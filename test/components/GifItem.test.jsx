import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en GifItem Component', () => {
    const title = 'Saitama'
    const url = 'prueba'

    test('Match with Snapshot', () => {
        const { container }= render( <GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
     })
})