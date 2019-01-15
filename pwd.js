module.exports = function pwd(data) {
    process.stdout.write(`Current directory: ${process.cwd()}`);
    process.stdout.write('\nprompt > ');
};



