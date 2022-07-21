module.exports = {
  production: {
    account: 'mx85022',
    username: 'tahriAziz',
    password: '(Azerty)  0101',
    region: 'japan-east.azure',
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
