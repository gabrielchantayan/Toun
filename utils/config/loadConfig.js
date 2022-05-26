import { readFile } from 'fs/promises';
import checkFileExists from '../files/checkFileExists.js';

// Load config file
const loadConfig = async () => {

    // Check if config exists
    const configExists = await checkFileExists('data/config.json');

    // If it doesnt, copy config to data
    if (!configExists) {
        await createConfig();
    }

    // Read and config file
    const config = await readFile('data/config.json', 'utf-8');
    const parsedConfig = JSON.parse(config);

    // Return parsed config
    return parsedConfig;
};

export default loadConfig;