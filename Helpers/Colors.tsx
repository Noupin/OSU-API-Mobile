export function threeHexToSixHex(color: string){
    if (color.length === 3) {
        return color.split('').map(function (hex) {
            return hex + hex;
        }).join('');
    }

    return color;
}