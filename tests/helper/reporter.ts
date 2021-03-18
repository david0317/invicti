const reporter = require('cucumber-html-reporter');
const outputDir = './testoutput';

const options = {
  brandTitle: 'Test Report',
  theme: 'bootstrap',
  jsonFile: 'test/report/cucumber_report.json',
  jsonDir: outputDir,
  output: `${outputDir}/test-report.html`,
  reportSuiteAsScenarsios: true,
  scenarioTimestamp: true,
  launchReport: true,
};

// This generates HTML report.
reporter.generate(options);