import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Testing the GiftExpertApp component', () => {

    test('should not set the category if already exist in categories', () => {
        render(<GifExpertApp/>)
        screen.debug()
    })

    test('should', () => {

    })
})