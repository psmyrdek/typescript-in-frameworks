let age = 21
age = '99'

const input: HTMLInputElement = document.querySelector('input[type="text"]')
input.value

// Converts hex to rgb, i.e. #1976d2 => [25, 118, 210]
function toRgb(color: string) {
    if (/^#([a-z0-9]{2}){3}$/.test(color)) {
        return [
            25,
            118,
            210
        ]
    }
    return color;
}

const hex = '#eaeaea';
const asRgb = toRgb(hex);
// const red = asRgb[1] * 0.1;