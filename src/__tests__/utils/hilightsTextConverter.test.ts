import { hilightsTextConverter } from '@/utils'

describe('hilightsTextConverter', () => {
  it('should return the correct text for "alert"', () => {
    expect(hilightsTextConverter('alert')).toBe('* Meta longe de ser batida')
  })

  it('should return the correct text for "success"', () => {
    expect(hilightsTextConverter('success')).toBe(
      '* A meta do mês foi batida! Parabens!'
    )
  })

  it('should return the correct text for "warning"', () => {
    expect(hilightsTextConverter('warning')).toBe('* Falta pouco, vamos lá!')
  })

  it('should return the correct text for "unknown input"', () => {
    expect(hilightsTextConverter('un')).toBe('* Sem dados no momento')
  })
})
