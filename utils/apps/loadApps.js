import { readFile } from 'fs/promises';

// Load apps
const loadApps = async () => {

    // Load and parse apps file
    const apps = await readFile('data/apps.json', 'utf-8');
    const parsedApps = JSON.parse(apps);

    // Return parsed file
    return parsedApps;
};

export default loadApps;