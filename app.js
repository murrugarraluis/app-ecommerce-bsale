import CategoryService from "./services/CategoryService.js";
import ProductService from "./services/ProductService.js";

function insertCard(product) {
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
}

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
        document.getElementById('container').innerHTML = '';
        await data.map((product) => {
            insertCard(product)
        });
    });
}

function search(e) {
    let input = document.getElementById("search");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            let {value} = input;
            if (value.length > 0) {
                ProductService.prototype.getAllFilter(value)
                    .then(async data => {
                        document.getElementById('container').innerHTML = '';
                        await data.map((product) => {
                            insertCard(product)
                        });
                    });
            }
        }
    });
}

function select(e) {
    let dropdown = document.getElementById("dropdown");
    dropdown.addEventListener("change", function (event) {
        CategoryService.prototype.getAllProducts(dropdown.value)
            .then(async data => {
                document.getElementById('container').innerHTML = '';
                await data.map((product) => {
                    insertCard(product)
                });
            });
    });
}

function main() {
    getCategories();
    getProducts()
    search();
    select();
}

main();