export function textSlicer(text: string, max: number = 50) {
    if (text.length >= max)
        return `${text.slice(0, max)} ...`;
    return text
}



export function priceValidation(value: number) {
    return `$${value?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`

}