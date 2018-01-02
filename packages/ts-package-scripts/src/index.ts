import * as program from 'commander';
import './scripts/build';

const pkg = require('../package.json');

program.version(pkg.version);

program.parse(process.argv);
