require('dotenv').config();
require('./docs/jsdocTypedef');
const { 
  validateConektaCustomer,
  validateConektaPaymentData
} = require('./conektaApi');

/**
 * @param {Array.<EssentaProduct>} productList
 * @param {Array.<ConektaCustomer>} customerData 
 * @param {Array.<ConektaPaymentData>} paymentData 
 */
function createEssentaOrder(productList, customerData, paymentData) {
  return new Promise(function(resolve, reject) {
    const productValidation = validateProductList(productList);
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