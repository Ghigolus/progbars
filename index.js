const chalk = require("chalk");

// PROGBARS EXPORT API #####################################################

const progressBar = function (currentTick, maxTicks, barLength) {
  let prog = Math.floor((barLength * currentTick) / maxTicks);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(
    percentBlock(currentTick, maxTicks) +
      separatorBlock() +
      barBlock(prog, barLength)
  );
};

const countBar = function (currentTick, maxTicks, barLength) {
  let prog = Math.floor((barLength * currentTick) / maxTicks);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(
    countBlock(currentTick, maxTicks) +
      separatorBlock() +
      barBlock(prog, barLength)
  );
};

const logBar = function (currentTick, maxTicks, logText) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(
    countBlock(currentTick, maxTicks) + separatorBlock() + logBlock(logText)
  );
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

// BLOCKS #####################################################

percentBlock = (currentTick, maxTicks) => {
  return (
    chalk.white.bold("[ ") +
    chalk.white.bold(Math.floor((currentTick / maxTicks) * 100) + "%") +
    chalk.white.bold(" ]")
  );
};

separatorBlock = () => {
  return chalk.blue.bold("==");
};

barBlock = (prog, barLength) => {
  return (
    chalk.white.bold("[") +
    chalk.green.bold("#".repeat(prog)) +
    chalk.red.bold("-".repeat(barLength - prog)) +
    chalk.white.bold("]")
  );
};

const countBlock = (currentTick, maxTicks) => {
  return (
    chalk.white.bold("[ ") +
    chalk.white.bold(currentTick + "/" + maxTicks) +
    chalk.white.bold(" ]")
  );
};

const logBlock = (logText) => {
  return (
    chalk.white.bold("[ ") + chalk.green.bold(logText) + chalk.white.bold(" ]")
  );
};

module.exports = { progressBar, countBar, logBar, timeBar };
