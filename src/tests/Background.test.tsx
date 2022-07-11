import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { Background } from "../components/Background/Background"

describe('App Tests', () => {
    test('should render background', () => {
        render(<Background />)
        const bg = screen.getByTestId('background')
        expect(bg).toBeInTheDocument()
    })
    test('should fit background', () => {
        window.innerHeight = 1000
        window.innerWidth = 320
        render(<Background />)
        const h = screen.getByTestId('h-orientated')
        expect(h).toBeInTheDocument()
        window.innerHeight = 320
        window.innerWidth = 1000
        render(<Background />)
        const w = screen.getByTestId('w-orientated')
        expect(w).toBeInTheDocument()
    })
})