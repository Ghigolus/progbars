const chalk = require("chalk");

const progressBar = function (currentTick, maxTicks, barLength) {
  let prog = Math.floor((barLength * currentTick) / maxTicks);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progressString(currentTick, maxTicks, prog, barLength));
};

const timeBar = function (tickDuration, maxTicks, barLength) {
  let currentTick = 0;
  const progress = setInterval(() => {
    progressBar(currentTick, maxTicks, barLength);
    currentTick++;
    if (currentTick > maxTicks) {
      clearInterval(progress);
    }
  }, tickDuration);
};

const progressString = (currentTick, maxTicks, prog, barLength) => {
  return (
    chalk.white.bold("[ ") +
    chalk.white.bold(Math.floor((currentTick / maxTicks) * 100) + "%") +
    chalk.white.bold(" ]") +
    chalk.blue.bold("==") +
    chalk.white.bold("[") +
    chalk.green.bold("#".repeat(prog)) +
    chalk.red.bold("-".repeat(barLength - prog)) +
    chalk.white.bold("]")
  );
};

module.exports = { progressBar, timeBar };
