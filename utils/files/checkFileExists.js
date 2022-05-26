import fs from 'fs'

// Check if a file exists
const checkFileExists = (path) => {
  return fs.promises
    .access(path, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
};

export default checkFileExists;