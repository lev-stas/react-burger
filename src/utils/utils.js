export function checkRespose(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка ${res.status}`)
    }
    return res.json()
};