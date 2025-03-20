import { StyledButton } from '@/components'
import { render } from '@testing-library/react'
import { Theme } from '@/types'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@/resources/themesList'

describe('StyledButton', () => {
    const renderComponent = (theme: Theme, className?: string, props={}) => render(
        <ThemeProvider theme={theme}>
            <StyledButton className={className} {...props} />
        </ThemeProvider>
    )

    themesList.forEach(({name, theme}) => {
        describe(`${name}`, () => {
            it('shold match the snapchat with alert class', () => {
                const { asFragment } = renderComponent(theme, 'alert')
                expect(asFragment()).toMatchSnapshot()
            })

            it('shold match the snapchat with primary class', () => {
                const { asFragment } = renderComponent(theme, 'primary')
                expect(asFragment()).toMatchSnapshot()
            })

            it('shold match the snapchat with borderless alert class', () => {
                const { asFragment } = renderComponent(theme, 'borderless-alert')
                expect(asFragment()).toMatchSnapshot()
            })

            it('shold match the snapchat with disabled status', () => {
                const { asFragment } = renderComponent(theme, 'primary', { disabled: true})
                expect(asFragment()).toMatchSnapshot()
            })

        })
    })
})