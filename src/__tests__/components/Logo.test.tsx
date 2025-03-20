import '@testing-library/jest-dom'
import 'jest-styled-components'
import { Logo } from '@/components'
import { pxToRem } from '@/utils'
import { render } from '@testing-library/react'
import { Theme } from '@/types'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@/resources/themesList'

describe('Logo', () => {
    const renderComponent = (theme: Theme, width?: number, height?: number) => render(
        <ThemeProvider theme={theme}>
            <Logo height={height ?? 32} width={width ?? 32} />
        </ThemeProvider>
    )

    themesList.forEach(({name, theme}) => {
        describe(`${name}`, () => {
            it('shold apply the correct background image', () => {
                const { container } = renderComponent(theme)
                expect(container.firstChild).toHaveStyleRule(
                    'background-image',
                    `url(/${theme.appLogo})`
                )
            })
            it('shold apply the correct heigth and width', () => {
                const { container } = renderComponent(theme, 40, 40)
                expect(container.firstChild).toHaveStyleRule(
                    'height',
                    pxToRem(40)
                )
                expect(container.firstChild).toHaveStyleRule(
                    'width',
                    pxToRem(40)
                )
            })
            
        })
    })

    it('should correctly convert pixels to rem for positive values', () => {
        expect(pxToRem(16)).toBe('1rem')
        expect(pxToRem(32)).toBe('2rem')
        expect(pxToRem(8)).toBe('0.5rem')
    })
})