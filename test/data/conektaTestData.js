const testConektaCustomer = {
  name: 'Mario Perez',
  email: 'usuario@example.com',
  phone: '+5215555555555',
  payment_sources: [{
    token_id: 'tok_test_visa_4242',
    type: 'card',
    default: true
  }],
  shipping_contacts: [{
    phone: "+5215555555555",
    receiver: "Marvin Fuller",
    address: {
      street1: "Nuevo Leon 4",
      country: "MX",
      postal_code: "06100"
    }
  }]
};

const cardlessCustomer = {
  name: 'Cardless Customer',
  email: 'usuario@example.com',
  phone: '+5215555555555',
  payment_sources: [],
  shipping_contacts: [{
    phone: "+5215555555555",
    receiver: "Marvin Fuller",
    address: {
      street1: "Nuevo Leon 4",
      country: "MX",
      postal_code: "06100"
    }
  }]
};

const noAddressCustomer = {
  name: 'Mario Perez',
  email: 'usuario@example.com',
  phone: '+5215555555555',
  payment_sources: [{
    token_id: 'tok_test_visa_4242',
    type: 'card'
  }],
  shipping_contacts: []
};

const testOrderData = {
  "currency": "MXN",
  "customer_info": {
    name: 'Mario Perez',
    email: 'usuario@example.com',
    phone: '+5215555555555',
    shipping_contacts: [{
      phone: "+5215555555555",
      receiver: "Marvin Fuller",
      address: {
        street1: "Nuevo Leon 4",
        country: "MX",
        postal_code: "06100"
      }
    }]
  },
  "line_items": [{
    "name": "Box of Cohiba S1s",
    "unit_price": 35000,
    "quantity": 1
  }],
  "charges": [{
    "payment_method": {
      "type": "card",
      "token_id": 'tok_test_visa_4242'
    }
  }]
}

module.exports = {
  testConektaCustomer,
  cardlessCustomer,
  noAddressCustomer,
  testOrderData
};