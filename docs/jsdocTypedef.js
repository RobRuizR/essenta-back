/**
* @typedef EssentaProduct
* @property {string} colorId - Id of the Contentful color object.
* @property {string} sizeId - Id of the Contentful size object.
* @property {string} fraganceId - Id of the Contentful fragance object.
* @property {string} productTypeId - Id of the Contentful product object.
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