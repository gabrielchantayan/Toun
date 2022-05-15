let config = require('../../config/config.json');                      // Get config

export function get(value) {
    return config[value];
}