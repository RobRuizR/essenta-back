const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

// Apis to test
const { 
  createConektaCustomer,
  createConektaOrder
} = require("../conektaApi");

// Chai configuration
const expect = chai.expect;
chai.use(chaiAsPromised);
chai.should();

// Test data
const { 
  testConektaCustomer,
  cardlessCustomer,
  noAddressCustomer,
  testOrderData
} = require('./data/conektaTestData');

describe('Conekta Api', () => {
  describe('Customer Api', () => {
    it('Creates a Conekta customer', async () => {
      const customerData = await createConektaCustomer(testConektaCustomer);
      expect(customerData.name).to.equal(testConektaCustomer.name);
    });
  
    it('Fails when user has no payment method', async () => {
      createConektaCustomer(cardlessCustomer).should.be.rejected;
    });
  
    it('Fails when user has no valid delivery address', async () => {
      createConektaCustomer(noAddressCustomer).should.be.rejected;
    });
  })

  describe('Order Api', () => {
    it('Creates a product order', async () => {
      const orderData = await createConektaOrder(testOrderData);
      orderData.amount.should.equal(35000);
    });
  });
});