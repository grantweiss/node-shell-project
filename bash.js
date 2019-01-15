// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newline
  cmd.split(' ');

  if (cmd[0] === 'pwd') {
    const pwd = require('./pwd');
    pwd();
  } else if (cmd[0] === 'ls'){
      const ls = require('./ls');
      ls();
  } else if (cmd[0] === 'cat') {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  } else {
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\nprompt > ');
  }
});


