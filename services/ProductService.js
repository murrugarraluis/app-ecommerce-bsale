import HttpService from "./HttpService.js";

const uri = 'products'
export default class ProductService {
    async getAll() {
        return await HttpService.prototype.getAll(uri)
    }
    async getAllFilter(value) {
        let custom_uri = `${uri}?name=${value}`
        return await HttpService.prototype.getAll(custom_uri)
    }
    async getOne(id) {
        return await HttpService.prototype.getOne(uri,id)
    }
}