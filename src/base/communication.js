import config from './config.json'

export function CallPOST(endPoint, data) {
    return (
        fetch(config.communication.api + endPoint, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    )
}