<div align="center">
  <img src="https://github.com/Paeonic-Development/.github/blob/main/images/Paeonic.png" alt="PΛΞ0NIC Development Banner">
</div>

<div align="center">
  <h3>🔢 Connect 4</h3>
  <h4>Simple connect 4 game with buttons</h4>
  <h4><code>/connect4 @[user]</code></h4>
  <h4><ins>Edited: Version 4.2.5</ins></h4>
</div>

---
```js
const { Connect4 } = require('flex-gamecord');

const Game = new Connect4({
  message: message,
  isSlashGame: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Connect4 Game',
    statusTitle: 'Status',
    color: '#5865F2',
    footerEnabled: false,
    footer: {
      text: `PΛΞ0NIC Development`,
      // iconURL: 'someIconURL', // If you want to add iconURL then remove the comment and add working url!
    },
    timestamp: false,
  },
  emojis: {
    board: '⚪',
    player1: '🔴',
    player2: '🟡'
  },
  mentionUser: true,
  timeoutTime: 60000,
  buttonStyle: 'PRIMARY',
  turnMessage: '{emoji} | Its turn of player **{player}**.',
  winMessage: '{emoji} | **{player}** won the Connect4 Game.',
  tieMessage: 'The Game tied! No one won the Game!',
  timeoutMessage: 'The Game went unfinished! No one won the Game!',
  playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
});

Game.startGame();
Game.on('gameOver', result => {
  console.log(result);  // =>  { result... }
});
```
---
<div align="center">
  <h3>/ Slash Commands</h3>
</div>

```js
message: interaction,
isSlashGame: true,
opponent: interaction.options.getUser('user')
```

---
<div align="center">
  <h3>Updates</h3>
</div>

## **`v4.2.5`**
```diff
+ Added footer/timeStamp option
+ Added option to disable footer
+ Added fields option
```
---