const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');

const sassTestFiles = glob.sync(path.resolve(process.cwd(), 'tests/**/*.spec.scss'));

sassTestFiles.forEach(file =>
    sassTrue.runSass({ file }, { describe, it })
);
