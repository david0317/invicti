export interface Config {
  capabilities: {
    browser: 'chrome' | 'firefox';
    browserName: 'chrome' | 'firefox';
    name?: string;
    project?: string;
    build?: string
    server?: string;
    os?: string;
    os_version?: string;
    resolution?: string;
    chromeOptions?: object;
    failure_url?: string
    device?: string;
  }
}
