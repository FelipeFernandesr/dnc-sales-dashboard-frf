import { CardComponent } from '@/components'
import { render } from '@testing-library/react'
import { Theme } from '@/types'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@/resources/themesList'

describe('CardComponent', () => {
    const renderComponent = (theme: Theme, className?: string) => render(
        <ThemeProvider theme={theme}>
            <CardComponent className={className} />
        </ThemeProvider>
    )

    themesList.forEach(({name, theme}) => {
        describe(`${name}`, () => {
            it('shold match the snapchat without any class', () => {
                const { asFragment } = renderComponent(theme)
                expect(asFragment()).toMatchSnapshot()
            })

            it('shold match the snapchat with alert class', () => {
                const { asFragment } = renderComponent(theme, 'alert')
                expect(asFragment()).toMatchSnapshot()
            })

            it('shold match the snapchat with success class', () => {
                const { asFragment } = renderComponent(theme, 'success')
                expect(asFragment()).toMatchSnapshot()
            })

            it('shold match the snapchat with warning class', () => {
                const { asFragment } = renderComponent(theme, 'warning')
                expect(asFragment()).toMatchSnapshot()
            })

        })
    })
})