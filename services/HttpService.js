const apiHost = "https://api-ecommerce-bsale.herokuapp.com/api/v1"
export default class HttpService {

    async getAll(uri) {
        return await httpService(`${apiHost}/${uri}`, {
            method: 'GET',
        }).then(res => {
            return res.json()
        }).then(d => d.data)
    }

    async getOne(uri, id) {
        return await httpService(`${apiHost}/${uri}/${id}`, {
            method: 'GET',
        }).then(res => {
            return res.json()
        }).then(d => d.data);
    }
}

function httpService(url, options) {
    return fetch(url, options);
}
