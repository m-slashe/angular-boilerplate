import '../src/index';

require('angular-mocks');

const context = require.context('../src', true, /\.spec\.ts/);
context.keys().forEach(context);
