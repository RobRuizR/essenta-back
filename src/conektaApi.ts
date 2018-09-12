//@ts-ignore
import conekta from 'conekta';
import { Promise } from 'es6-promise';
import { ConektaCustomer } from './types';

conekta.api_key = process.env.CONEKTA_API_KEY || "key_eYvWV7gSDkNYXsmr";

export function createConektaCustomer(customerData: ConektaCustomer) {
  return new Promise(function(resolve: Function, reject: Function) {
    const hasValidAddressData =
      customerHasValidShippingAddressData(customerData.shipping_contacts);
      
    const hasValidPaymentData = 
      customerPaymentDataIsValid(customerData.payment_sources);

    if(!hasValidAddressData || !hasValidPaymentData) {
      return reject({
        errorCode: 400,
        data: "Customer data should include at least one shipping address and a valid payment source"
      });
    }

    conekta.Customer.create(customerData, function(error: any, customer: any) {
      if(error) {
        return reject(error);
      }

      resolve(customer.toObject());
    })
  });
}

function customerPaymentDataIsValid(
  customerPaymentData: Array<any>
) {
  return !!customerPaymentData && customerPaymentData.length > 0;
}

function customerHasValidShippingAddressData(
  customerShippingAddressData: Array<any>
) {
  return !!customerShippingAddressData && customerShippingAddressData.length > 0;
}

// Es posible crear una orden directamente, sin necesidad de crear un cliente antes.
function createConektaOrder(orderData: any): Promise<any> {
  return new Promise(function(resolve: Function, reject: Function) {
    conekta.Order.create(orderData, function(error: any, order: any) {
      if(error) {
        return reject(error);
      }

      resolve(order.toObject());
    })
  });
}

// Todo
export function validateConektaCustomer(customer: Object) : Object{
  return {
    valid: true,
    reason: null,
  };
}

// Todo
export function validateConektaPaymentData(paymentData: Object) : Object {
  return {
    valid: true,
    reason: null,
  };
}

// Todo
export function paymentAcceptedWebhook() {
  
}
