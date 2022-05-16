import loadConfig from './loadConfig.js'

const getConfigEntry = async (entry) => {
    
    // Load config file
    const config = await loadConfig()

    
    // Check if config has entry
    // If so, return entry
    // If not, return undefined
    return((config.hasOwnProperty(entry) ? config[entry] : undefined))
};

export default getConfigEntry;