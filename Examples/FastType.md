<div align="center">
  <img src="https://github.com/Paeonic-Development/.github/blob/main/images/Paeonic.png" alt="PΛΞ0NIC Development Banner">
</div>

<div align="center">
  <h3>📝 Fast Type</h3>
  <p>Simple Fast Type game that counts wpm</p>
  <p><code>/fasttype</code></p>
  <p><ins>Edited: Version 4.2.6.1</ins></p>
</div>

---
```js
const { FastType } = require('flex-gamecord');

const Game = new FastType({
  message: message,
  isSlashGame: true,
  timeoutTime: 60000,
  embed: {
    title: 'Fast Type',
    color: '#5865F2',
    description: 'You have {time} seconds to type the sentence below.',
    footerEnabled: false,
    footer: {
      text: `PΛΞ0NIC Development`,
      // iconURL: 'someIconURL', // If you want to add iconURL then remove the comment and add working url!
    },
    timestamp: false,
    description: 'Your question: {question}\nMagic 8-Ball says: {answer}',
  },
  sentence: ['Some really cool sentence to fast type.', 'Another cool sentence.'],
  winMessage: 'You won! You finished the type race in {time} seconds with wpm of {wpm}.',
  loseMessage: 'You lost! You didn\'t type the correct sentence in time.',
});

Game.startGame();
```
---
<div align="center">
  <h3>📝 / Slash Commands</h3>
</div>

```js
message: interaction,
isSlashGame: true,
```

---
<div align="center">
  <h3>🆕 Updates</h3>
</div>

```diff
*** v4.2.6.1
+ Added footer option to FastType
+ Added timestamp option to FastType
+ Added option to use array of sentences to FastType
```
---
