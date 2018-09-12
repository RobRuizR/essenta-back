//@ts-ignore
import conekta from 'conekta';
//@ts-ignore
import { Promise } from 'es6-promise';
import '@types/es6-promise';
conekta.api_key = process.env.CONEKTA_API_KEY || "key_eYvWV7gSDkNYXsmr";
export function createConektaCustomer(customerData) {
    return new Promise(function (resolve, reject) {
        const hasValidAddressData = customerHasValidShippingAddressData(customerData.shipping_contacts);
        const hasValidPaymentData = customerPaymentDataIsValid(customerData.payment_sources);
        if (!hasValidAddressData || !hasValidPaymentData) {
            return reject({
                errorCode: 400,
                data: "Customer data should include at least one shipping address and a valid payment source"
            });
        }
        conekta.Customer.create(customerData, function (error, customer) {
            if (error) {
                return reject(error);
            }
            resolve(customer.toObject());
        });
    });
}
function customerPaymentDataIsValid(customerPaymentData) {
    return !!customerPaymentData && customerPaymentData.length > 0;
}
function customerHasValidShippingAddressData(customerShippingAddressData) {
    return !!customerShippingAddressData && customerShippingAddressData.length > 0;
}
// Es posible crear una orden directamente, sin necesidad de crear un cliente antes.
function createConektaOrder(orderData) {
    return new Promise(function (resolve, reject) {
        conekta.Order.create(orderData, function (error, order) {
            if (error) {
                return reject(error);
            }
            resolve(order.toObject());
        });
    });
}
// Todo
export function validateConektaCustomer(customer) {
    return {
        valid: true,
        reason: null,
    };
}
// Todo
export function validateConektaPaymentData(paymentData) {
    return {
        valid: true,
        reason: null,
    };
}
// Todo
export function paymentAcceptedWebhook() {
}