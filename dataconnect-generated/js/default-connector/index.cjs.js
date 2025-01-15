const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'a-cordial-invitation',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

