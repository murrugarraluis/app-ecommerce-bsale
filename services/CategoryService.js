import HttpService from "./HttpService.js";

const uri = 'categories'
export default class CategoryService {
    async getAll() {
        return await HttpService.prototype.getAll(uri)
    }
    async getOne(id) {
        return await HttpService.prototype.getOne(uri,id)
    }
}