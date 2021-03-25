let products = document.querySelector(".new-products .row ");
console.log(products);

// onload 
getPros();
// AJAX
function getPros() {
    let url = 'https://fakestoreapi.com/products';

    let xhr = new XMLHttpRequest();

    xhr.open(
        "GET",
        url,
        true
    );

    xhr.onload = function() {
        if (this.status == 200) {
            let results = JSON.parse(this.responseText);

            console.log(results);

            outputPros(results);
        }
    }

    xhr.send();
}

// Functions
function outputPros(listProducts) {
    let output = "";
    let count = 0

    listProducts.forEach((item) => {
        if (count == 4) {
            return;
        }
        output += `
            <div class='pro'>
                <div class='pro-img'>
                    <img src='${item.image}'>
                </div>

                <div class='pro-info'>
                    <h5>${item.title}</h5>
                    <p>${item.price}</p>
                </div>
            </div>
        `;
        count++;
    });

    products.innerHTML = output;
}