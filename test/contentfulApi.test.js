require('dotenv').config();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

// APIs to test
const { getDataById } = require("../dist/contentfulApi");

// Chai configuration
const expect = chai.expect;
chai.use(chaiAsPromised);
chai.should();

// Test data 
const {
  TEST_PRODUCT_ID,
  PRODUCT_SIZE_COLOR_ID,
  TEST_FRAGANCE_ID
} = require('./data/contentfulTestData');

describe('Contentful Api', () => {
  describe('Product fetching', () => {
    it('Gets product size data based on id', async () => {
      const productSizeData = await getDataById(TEST_PRODUCT_ID);
      expect(productSizeData.sizePrice).to.equal(100);
    });
  
    it('Gets product size color data based on id', async () => {
      const productSizeColorData = await getDataById(PRODUCT_SIZE_COLOR_ID);
      expect(productSizeColorData.colorName).to.equal('rojo');
    });
  
    it('Gets fragance data based on id', async () => {
      const fraganceData = await getDataById(TEST_FRAGANCE_ID);
      expect(fraganceData.name).to.equal('BLAU');
    });
  });
});