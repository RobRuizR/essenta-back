/**
* @typedef EssentaProduct
* @property {string} sizeId - Id of the Contentful size object.
* @property {string} fraganceName - Name of the Contentful fragance object.
* @property {string} colorName - Name of the Contentful color object.
* @property {string} productTypeName - Name of the Contentful product object.
* @property {number} amount - Amount of products requested by the customer.
*/

/**
 * @typedef ConektaCustomer
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 */

/**
 * @typedef ConektaPaymentData
 * @property {string} type - A string containing either 'card', 'spei' or 
*                           'oxxo_cash'
 * @property {?string} payment_source_id - A string containing an identifier for
 *                                        the card token. Tokenized via the 
 *                                        conekta tokenization library.
 */

 /**
  * @typedef ConektaProduct
  * @property {string} name
  * @property {number} unit_price
  * @property {number} quantity
  * @property {string} description - Less than 250 characters. Includes all data
  *                                 for the current product
  */