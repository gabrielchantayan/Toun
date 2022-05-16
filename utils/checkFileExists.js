import fs from 'fs'

const checkFileExists = (path) => {
  return fs.promises
    .access(path, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
};

export default checkFileExists;