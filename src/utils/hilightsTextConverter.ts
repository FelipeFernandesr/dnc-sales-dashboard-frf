/**
 * Convert text from hilight api
 * @param text - Text to be converted
 * @returns The converted text
 */
export function hilightsTextConverter(text: string): string {
    switch(text){
        case 'alert':
            return '* Meta longe de ser batida'
        case 'success':
            return '* A meta do mês foi batida! Parabens!'
        case 'warning':
            return '* Falta pouco, vamos lá!'
        default:
            return '* Sem dados no momento'
    }
}