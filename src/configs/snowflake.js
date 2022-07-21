module.exports = {
  production: {
    account: 'oz26185',
    username: 'saif1991',
    password: 'Admin123456*',
    region: 'switzerland-north.azure',
  },
  development: {
    account: process.env.SN_ACCOUNT || 'oz26185',
    username: process.env.SN_USERNAME || 'saif1991',
    password: process.env.SN_PASSWORD || 'Admin123456*',
    region: process.env.SN_REGION || 'switzerland-north.azure',
  },
  test: {
    account: process.env.SN_TEST_ACCOUNT || 'oz26185',
    username: process.env.SN_TEST_USERNAME || 'saif1991',
    password: process.env.SN_TEST_PASSWORD || 'Admin123456*',
    region: process.env.SN_TEST_REGION || 'switzerland-north.azure',
  },
};
