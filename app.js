import CategoryService from "./services/CategoryService.js";
import ProductService from "./services/ProductService.js";

async function getCategories() {
    await CategoryService.prototype.getAll().then(async data => {
        await data.map((category) => {
            const option = `
                    <option value="${category.id}">${category.name}</option>
                `
            document.getElementById('dropdown').innerHTML += option;
        })
    });
}

async function getProducts() {
    await ProductService.prototype.getAll().then(async data => {
        await data.map((product) => {
            const card = `
                <div class="card">
                    <img src="${product.urlImage}" alt="${product - name}-image">
                    <h3 class="title">${product.name}</h3>
                    <hr>
                    <div>
                        <h4>$${product.price}</h4>
                        <button type="submit"></button>
                    </div>
                </div>
            `
            document.getElementById('container').innerHTML += card;
        });
    });
}

function main() {
    getCategories();
    getProducts()
}

main();