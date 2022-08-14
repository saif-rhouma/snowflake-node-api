module.exports = {
  production: {
    account: process.env.SN_ACCOUNT || 'oz26185',
    username: process.env.SN_USERNAME || 'saif1991',
    password: process.env.SN_PASSWORD || 'Admin123456*',
    region: process.env.SN_REGION || 'switzerland-north.azure',
  },
  development: {
    account: process.env.SN_DEV_ACCOUNT || 'oz26185',
    username: process.env.SN_DEV_USERNAME || 'saif1991',
    password: process.env.SN_DEV_PASSWORD || 'Admin123456*',
    region: process.env.SN_DEV_REGION || 'switzerland-north.azure',
  },
  test: {
    account: process.env.SN_TEST_ACCOUNT || 'oz26185',
    username: process.env.SN_TEST_USERNAME || 'saif1991',
    password: process.env.SN_TEST_PASSWORD || 'Admin123456*',
    region: process.env.SN_TEST_REGION || 'switzerland-north.azure',
  },
};
