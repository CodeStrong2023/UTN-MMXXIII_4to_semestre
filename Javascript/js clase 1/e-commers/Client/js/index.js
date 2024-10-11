const shopContent = document.getElementById('shop-content');


productos.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
    <img src="${product.image}" alt="${product.productName}">
    <h3>${product.productName}</h3>
    <p>${product.price}</p>
    `;
    shopContent.appendChild(div);
});