export const cart=[{
    productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity : 2,
},{
    productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity : 1,
}
];

export function addToCart(productId){
     let matchingItem = cart.find((item) => item.productId === productId);

    // Get selected quantity from the dropdown
    const selector = document.querySelector(`.js-quantity-selecor-${productId}`);
    const selectedQuantity = Number(selector.value);

    if (matchingItem) {
      matchingItem.quantity += selectedQuantity;
    } else {
      cart.push({
        productId: productId,
        quantity: selectedQuantity
      });
    }
}