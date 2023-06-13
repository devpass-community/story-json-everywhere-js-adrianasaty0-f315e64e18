async function getProduct(productId) {
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;
    console.log('apiUrl')
    fetch(apiUrl)
        .then(response => {
            return response
        })
}

module.exports = getProduct;
