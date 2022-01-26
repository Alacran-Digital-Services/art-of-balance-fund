import { sha512 } from 'js-sha512'

export function generateHash(terminalId, orderId, amount, dateTime, secret) {
    return sha512(terminalId + ":" + orderId + ":" + amount + ":" + dateTime + ":" + secret);
}
