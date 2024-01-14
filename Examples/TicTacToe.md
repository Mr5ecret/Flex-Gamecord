<div align="center">
  <img src="https://github.com/Paeonic-Development/.github/blob/main/images/Paeonic.png" alt="PΛΞ0NIC Development Banner">
</div>

<div align="center">
  <h3>🔖 Tic Tac Toe</h3>
  <h4>Simple TicTacToe Game with Discord Buttons</h4>
  <h4><code>/tictaktoe @[user]</code></h4>
  <h4><ins>Edited: Version 4.2.3</ins></h4>
</div>

---
```js
const { TicTacToe } = require('flex-gamecord');

const Game = new TicTacToe({
  message: message,
  isSlashGame: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Tic Tac Toe',
    color: '#5865F2',
    statusTitle: 'Status',
    overTitle: 'Game Over',
    footerEnabled: false,
    footer: {
      text: `PΛΞ0NIC Development`,
      // iconURL: 'someIconURL', // If you want to add iconURL then remove the comment and add working url!
    },
    timestamp: false,
  },
  emojis: {
    xButton: '❌',
    oButton: '🔵',
    blankButton: '➖'
  },
  mentionUser: true,
  timeoutTime: 60000,
  xButtonStyle: 'DANGER',
  oButtonStyle: 'PRIMARY',
  turnMessage: '{emoji} | Its turn of player {player.displayName}.', // {player.tag} {player} {player.displayName} 
  winMessage: '{emoji} | {player.displayName} won the TicTacToe Game.',
  tieMessage: 'The Game tied! No one won the Game!',
  timeoutMessage: 'The Game went unfinished! No one won the Game!',
  playerOnlyMessage: 'Only {player.displayName} and {opponent.displayName} can use these buttons',
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

## **`v4.2.3`**
```diff
+ Added option to disable footer
```

## **`v4.2.1-dev`**
```diff
+ Added footer/timestamp options
```
---