module.exports = {
  production: {
    account: 'bm92016',
    username: 'SARRAAKRT',
    password: 'Test123456',
    region: 'switzerland-north.azure',
  },
  development: {
    account: 'bm92016',
    username: 'SARRAAKRT',
    password: 'Test123456',
    region: 'switzerland-north.azure',
  },
  test: {
    account: process.env.SN_TEST_ACCOUNT || 'oz26185',
    username: process.env.SN_TEST_USERNAME || 'saif1991',
    password: process.env.SN_TEST_PASSWORD || 'Admin123456*',
    region: process.env.SN_TEST_REGION || 'switzerland-north.azure',
  },
};
