import CategoryService from "./services/CategoryService.js";
import ProductService from "./services/ProductService.js";

function insertCard(product) {
    const card = `
                <div class="card" style="width: 18rem;">
                    <img src="${product.urlImage}" alt="${product.name}-image" class="card-img-top">
                      <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
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