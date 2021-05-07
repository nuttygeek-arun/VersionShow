const path = require('path');
const fs = require('fs');
const appVersion = require('../package.json').version;

const versionFilePath = path.join(__dirname + '/src/environments/version.ts');
    console.log(' :: versionFile Path', versionFilePath);
const src = `export const version = '${appVersion}';`;

// ensure version module pulls value from package.json
fs.writeFile(versionFilePath, src, { flat: 'w' }, function (err) {
    if (err) {
        return console.log(err);
    }
});