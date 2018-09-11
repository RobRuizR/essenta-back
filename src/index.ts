import dotenv = require('dotenv');
import { getDataById } from './contentfulApi';
import { 
  EssentaProduct, 
  ConektaCustomer, 
  ConektaPaymentData 
} from './types';
import { 
  validateConektaCustomer,
  validateConektaPaymentData
} from './conektaApi';

dotenv.config();

function createEssentaOrder(
  essentaProductList: Array<EssentaProduct>, 
  customerData: Array<ConektaCustomer>, 
  paymentData: Array<ConektaPaymentData>
) : Promise<any> {
  return new Promise(function(resolve: Function, reject: Function) {
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

function createConektaReadyProducts(
  essentaProductList: Array<EssentaProduct>
) {
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

function validateProductList(
  productList: any
) {
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

  productList.forEach((product: any) => {
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