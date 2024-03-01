// standard in
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const ur_name = process.stdin.read();

  if (ur_name) {
    process.stdout.write(`Your name is: ${ur_name}`);
  }
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
