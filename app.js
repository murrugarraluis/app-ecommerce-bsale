import CategoryService from "./services/CategoryService.js";
import ProductService from "./services/ProductService.js";

async function getCategories() {
    await CategoryService.prototype.getAll().then(async data => {
        await data.map((category) => {
            const option = `<option value="${category.id}">${category.name}</option>`
            document.getElementById('dropdown').innerHTML += option;
        })
    });
}

async function getProducts(categoryId) {
    loading();
    await CategoryService.prototype.getAllProducts(categoryId ? categoryId : "1").then(async data => {
        document.getElementById('container').innerHTML = '';
        await data.map((product) => {
            insertCard(product)
        });
    });
}

function insertCard(product) {
    const card = `
                <div class="card" style="width: 18rem;">
                    <img src="${product.urlImage}" alt="${product.name}-image" class="card-img-top">
                      <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <div class="d-flex">
                            <p class="card-text text-black-50" style="text-decoration:line-through;">$${product.price}</p>
                            <p class="card-text mx-2">-${product.discount}%</p class="card-text">
                        </div>
                        <p class="card-text text-danger fs-4 fw-semibold">$${product.discount > 0 ? product.price - (product.price * (product.discount / 100)) : product.price}</p>
                        <div class="d-flex justify-content-center pt-4">
                            <a href="#" class="btn btn-primary">
                                <i class="bi bi-cart"></i>
                                Add Cart
                            </a>
                        </div>
                      </div>
                </div>
            `
    document.getElementById('container').innerHTML += card;
}

function loading() {
    document.getElementById('container').innerHTML = `
            <div class="d-flex justify-content-center align-items-center" style="height: 80vh">
                <div class="spinner-border text-secondary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

        `;
}

function search(e) {
    let input = document.getElementById("search");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            let {value} = input;
            if (value.length > 0) {
                loading();
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
        getProducts(dropdown.value)
    });
}

function main() {
    getCategories();
    getProducts()
    search();
    select();
}

main();