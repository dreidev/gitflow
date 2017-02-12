#! /usr/bin/env node
'use strict';

var vorpal = require('vorpal')(),
    chalk = require('chalk'),
    duckCount = 0,
    wabbitCount = 0;

// duck
vorpal
      .command('setup', 'Initialize the plugin')
      .action(require('./setup'));
vorpal
      .command('init', 'Initialize a new git repo with support for the branching model.')
      .action(require('./init'));
vorpal
      .command('feature', 'Manage your feature branches.')
      .action(require('./feature'));
vorpal
      .command('release', 'Manage your release branches.')
      .action(require('./release'));
vorpal
      .command('hotfix', 'Manage your hotfix branches.')
      .action(require('./hotfix'));
vorpal
      .command('support', 'Manage your support branches')
      .action(require('./support'));
vorpal
      .command('bugfix', 'Manage your bugfix branches')
      .action(require('./bugfix'));
vorpal
      .command('version', 'Shows version information')
      .action(require('./version'));
// vorpal
//       .command('init', '')
//       .action(require('./init'));
// vorpal
//       .command('init', '')
//       .action(require('./init'));
// vorpal
//       .command('init', '')
//       .action(require('./init'));
// vorpal
//   .command('duck season', 'Outputs "rabbit season"')
//   .action(function(args, callback) {
//     duckCount++;
//     this.log('Wabbit season');
//     callback();
//   });

// // wabbit
// vorpal
//     .command('wabbit', 'Outputs "duck"')
//     .action(function(args, callback) {
//       this.log('Duck');
//       callback();
//     });
// vorpal
//     .command('wabbit season', 'Outputs "duck season"')
//     .action(function(args, callback) {
//       // no cheating
//       if (duckCount < 2) {
//         duckCount = 0;
//         this.log('You\'re despicable');
//         callback();
//       }
//       else if (wabbitCount === 0) {
//         wabbitCount++;
//         this.log('Duck season');
//         callback();
//       }
//       // doh!
//       else {
//         this.log('I say it\'s duck season. And I say fire!');
//         vorpal.ui.cancel();
//       }
//     });

    

vorpal
  .delimiter(chalk.cyan('flow$'))
  .show();







// echo "usage: git flow <subcommand>"
// 	echo
// 	echo "Available subcommands are:"
// 	echo "   init     ."
// 	echo "   feature   "
// 	echo "   release   "
// 	echo "   hotfix    "
// 	echo "   support  ."
// 	echo "   version   ."
// 	echo
// 	echo "Try 'git flow <subcommand> help' for details."