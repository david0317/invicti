const commonOptions = `--format summary --require-module ts-node/register --require tests/step_definitions/*.ts --fail-fast --publish-quiet`;
const common = `${commonOptions}`;

  module.exports = {
    'default': common
  };
  