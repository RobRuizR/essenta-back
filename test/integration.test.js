require('dotenv').config();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

// Chai configuration
const expect = chai.expect;
chai.use(chaiAsPromised);
chai.should();

describe('Integrating Conekta with Contentful', () => {
  describe('Order creation Api', () => {
    it('Places an order correctly', async () => {
      
    });

    it('Rejects orders with no products', async () => {
      
    });

    it('Rejects orders with invalid product structure', async () => {

    });

    it('Rejects orders with no customer data', async () => {
      
    });
  });
});