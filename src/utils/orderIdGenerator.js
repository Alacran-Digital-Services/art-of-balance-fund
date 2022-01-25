export function generateOrderId() {
    var result = '';
    var length = 9;
    const characterSet = '0123456789';

    for (var i = 0; i < length; i++) {
        result += characterSet[Math.floor(Math.random() * characterSet.length)];
    }

    return result
}
