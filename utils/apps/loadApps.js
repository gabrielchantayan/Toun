import { readFile } from 'fs/promises';

const loadApps = async () => {

    const apps = await readFile('data/apps.json', 'utf-8');
    const parsedApps = JSON.parse(apps);

    return parsedApps;
};

export default loadApps;