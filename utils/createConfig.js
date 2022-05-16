import { copyFile, readFile, writeFile } from 'fs/promises';
import checkFileExists from './checkFileExists.js';
import defaultConfig from '../defaults/config.json' assert {type: "json"};

const createConfig = async () => {
  const configExists = await checkFileExists('data/config.json');

  if (!configExists) {
    console.log('Creating config...')
    await copyFile('defaults/config.json', 'data/config.json');
  }

  const existingConfig = await readFile('data/config.json', 'utf-8');
  const parsedConfig = JSON.parse(existingConfig);

  // Add new config pairs if necessary
  for (let key in defaultConfig) {
    if (!Object.keys(parsedConfig).includes(key)) {
      parsedConfig[key] = defaultConfig[key];
    }
  }

  await writeFile('data/config.json', JSON.stringify(parsedConfig), null, 4);
};

export default createConfig;