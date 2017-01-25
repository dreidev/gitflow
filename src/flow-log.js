require('shelljs/global');
const program = require('commander');
program.parse(process.argv);
var args = program.args;

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}


exec('git flow log '+args,{silent:true}, function(code, stdout, stderr) {
  console.log(stdout.replace("git ",""));
  console.log(stderr);
});

