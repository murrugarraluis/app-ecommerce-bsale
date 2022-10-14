async function getCategories() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    await fetch("http://127.0.0.1:8000/api/v1/categories", requestOptions)
        .then(response => response.json())
        .then(async data => {
            // console.log(data.data)
            const arrayCategories = data.data;
            await arrayCategories.map((category) => {
                const option = `
                <option value="${category.id}">${category.name}</option>
            `
                document.getElementById('dropdown').innerHTML += option;
            })
        })
        .catch(error => console.log('error', error));
}

async function getProducts() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    await fetch("http://127.0.0.1:8000/api/v1/products", requestOptions)
        .then(response => response.json())
        .then(async data => {
            const arrayProducts = data.data;
            await arrayProducts.map((product) => {
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
            })
        })
        .catch(error => console.log('error', error));
}
function main(){
    getCategories();
    getProducts()
}
main();