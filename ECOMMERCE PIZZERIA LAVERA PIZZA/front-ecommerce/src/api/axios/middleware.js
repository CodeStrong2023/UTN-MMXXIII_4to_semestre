

export const mapProductData = (product) => {
    return {
        id: product.id,
        name: product.name.toUpperCase(),
        image: product.image,
        price: product.price.toLocaleString('de-DE'),
        category: product.category.name,
        description: product.description,
        priceCalc: product.price,
    };
};

