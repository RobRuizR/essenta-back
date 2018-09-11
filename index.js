require('dotenv').config();
require('./docs/jsdocTypedef');
const { 
  validateConektaCustomer,
  validateConektaPaymentData
} = require('./conektaApi');

/**
 * @param {Array.<EssentaProduct>} essentaProductList
 * @param {Array.<ConektaCustomer>} customerData 
 * @param {Array.<ConektaPaymentData>} paymentData 
 */
function createEssentaOrder(essentaProductList, customerData, paymentData) {
  return new Promise(function(resolve, reject) {
    const productValidation = validateProductList(essentaProductList);
    const customerValidation = validateConektaCustomer(customerData);
    const paymentDataValidation = validateConektaPaymentData(paymentData);

    if(!productValidation.valid || 
      !customerValidation.valid || 
      !paymentDataValidation.valid) {
        reject({
          reasons: [
            productValidation.reason,
            customerValidation.reason,
            paymentDataValidation.reason
          ]
        });
      }

    const conektaReadyProducts = createConektaReadyProducts(essentaProductList);
  });
}

function createConektaReadyProducts(essentaProductList) {
  return essentaProductList.map(product => {
    const sizeData = getDataById(product.sizeId);

    return {
      name: `${product.productTypeName} ${product.fraganceName} ${sizeData.sizeName}`,
      unit_price: sizeData.sizePrice,
      quantity: product.amount,
      description: `${product.amount} ${product.productTypeName} ${product.fraganceName} ${sizeData.sizeName} ${product.colorName}`
    };
  });
}

function validateProductList(productList) {
  if(!productList.length || productList.length === 0) {
    return {
      valid: false,
      reason: "There should be at least one product"
    }
  }

  let productListValidation = {
    valid: true,
    reason: null
  };

  productList.forEach((product) => {
    if(!!product.colorId &&
        !!product.sizeId &&
        !!product.fraganceId &&
        !!product.productTypeId) {
      return;
    }

    productListValidation = {
      valid: false,
      reason: "The structure of at least one product is invalid."
    };
  });

  return productListValidation;
}

module.exports = {
  createEssentaOrder
};