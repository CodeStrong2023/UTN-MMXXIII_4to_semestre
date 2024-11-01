

export const mapProductData = (product) => {
    return {
        id: product.id,
        name: product.name.toUpperCase(),
        image: '/src/assets/images/pizzeria_55.jpg',
        price: product.price.toLocaleString('de-DE'),
        category: product.category.name,
        description: product.description,
        priceCalc: product.price,
    };
};

