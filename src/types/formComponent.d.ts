export type InputProps = React.InputHTMLAttributes<HtmlHTMLAttributes>
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type MessageProps = {
    msg: string
    type: 'error' | 'success'
}

export interface FormComponentsProps {
    inputs: InputProps[]
    buttons:ButtonProps[]
    message?: MessageProps
}