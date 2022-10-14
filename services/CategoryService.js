import HttpService from "./HttpService.js";

const uri = 'categories'
export default class CategoryService {
    async getAll() {
        return await HttpService.prototype.getAll(uri)
    }
    async getOne(id) {
        return await HttpService.prototype.getOne(uri,id)
    }
    async getAllProducts(id) {
        let custom_uri = `${uri}/${id}/products`
        return await HttpService.prototype.getAll(custom_uri)
    }
}