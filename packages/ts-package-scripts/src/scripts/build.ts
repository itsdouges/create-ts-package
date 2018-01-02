import * as program from 'commander';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

program
  .command('build')
  .description('Compiles ts to js.')
  .action(async () => {
    await exec('tsc');
  });
