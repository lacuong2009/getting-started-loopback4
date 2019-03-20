import {GettingStartedApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {GettingStartedApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new GettingStartedApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
