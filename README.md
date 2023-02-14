# Progbars

A customizable and colorful set of progressbars for Node.js CLI.

<b>[ 40% ]==[ ######## ------------- ]</b>

# Installation

```
npm i progbars
```

# Import

```javascript
const { progressBar, countBar } = require("progbars");
```

# ProgressBars

| Bar Name                                         | Bar Output                        |
| ------------------------------------------------ | --------------------------------- |
| `progressBar` (currentTick, maxTicks, barLength) | [ 30% ]==[ ###------- ]           |
| `timeBar` (tickDuration, maxTicks, barLength)    | [ 30% ]==[ ###------- ]           |
| `countBar` (currentTick, maxTicks, barLength)    | [ 3/10 ]==[ ###------- ]          |
| `logBar` (currentTick, maxTicks, logText)        | [ 3/10 ]==[ This is a log text! ] |

# Params

| Parameter      | Type   | Description                             |
| -------------- | ------ | --------------------------------------- |
| `currentTick`  | int    | current tick counter. ( --> 3/10 )      |
| `maxTicks`     | int    | max ticks number. ( 3/10 <-- )          |
| `barLength`    | int    | characters bar length displayed on CLI. |
| `tickDuration` | int    | milliseconds between ticks.             |
| `logText`      | string | text message to log.                    |

# Examples

```javascript
var totalTasks = 10;
var barLength = 20;

for (var i = 0; i < totalTasks; i++) {
  // DO A TASK
  progressBar(i + 1, totalTasks, barLength);
}
```
