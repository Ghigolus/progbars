# Progbars

A customizable and colorful set of progressbars for Node.js CLI.

<b>[<span style="color:green"> 40% </span>
]==[
<span style="color:green">########</span>
<span style="color:red">-------------</span>
]</b>

# Installation

```
npm i progbars
```

# Import

```javascript
const { progressBar, timeBar } = require("progbars");
```

# ProgressBars

| Bar Name                                         | Bar Format              |
| ------------------------------------------------ | ----------------------- |
| `progressBar` (currentTick, maxTicks, barLength) | [ 30% ]==[ ###------- ] |
| `timeBar` (tickDuration, maxTicks, barLength)    | [ 30% ]==[ ###------- ] |

# Params

| Parameter      | Type | Description                             |
| -------------- | ---- | --------------------------------------- |
| `currentTick`  | int  | current tick counter. ( --> 3/10 )      |
| `maxTicks`     | int  | max ticks number. ( 3/10 <-- )          |
| `barLength`    | int  | characters bar length displayed on CLI. |
| `tickDuration` | int  | milliseconds between ticks.             |

# Examples

```javascript
var totalTasks = 10;

for (var i = 0; i < totalTasks; i++) {
  // DO A TASK
  progressBar(i + 1, totalTasks, 20);
}
```

# Work In Progress

| Bar Name                                              | Bar Format                                |
| ----------------------------------------------------- | ----------------------------------------- |
| `countBar` (currentTick, maxTicks, barLength)         | [ 3/10 ]==[ ###------- ]                  |
| `logBar` (currentTick, maxTicks, logText )            | [ 3/10 ]==[ The current task is: TASK03 ] |
| `predictionBar` (currentTick, maxTicks, taskDuration) | [ 3/10 ]==[ Time Left: 02:29 ]            |
