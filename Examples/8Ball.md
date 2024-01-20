<div align="center">
  <img src="https://github.com/Paeonic-Development/.github/blob/main/images/Paeonic.png" alt="PΛΞ0NIC Development Banner">
</div>

<div align="center">
  <h3>🎱 Magic 8-Ball</h3>
  <p>Simple Q&A game</p>
  <p><code>/8ball [question]</code></p>
  <p><ins>Created: Version 4.2.5</ins></p>
</div>

---
```js
const { MagicEightBall } = require('flex-gamecord');

const Game = new MagicEightBall({
  message: message,
  isSlashGame: true,
  responses: [
    'It is certain.', 'It is decidedly so.', 'Without a doubt.',
    'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.',
    'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.',
    'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.',
    'Cannot predict now.', 'Concentrate and ask again.',
    'Don\'t count on it.', 'My reply is no.', 'My sources say no.',
    'Outlook not so good.', 'Very doubtful.',
  ],
  embed: {
    title: '🎱 Magic 8-Ball',
    color: '#5865F2',
    description: 'Ask the magic 8-ball a question.',
    footerEnabled: false,
    footer: {
      text: `PΛΞ0NIC Development`,
      // iconURL: 'someIconURL', // If you want to add iconURL then remove the comment and add working url!
    },
    timestamp: false,
    description: 'Your question: {question}\nMagic 8-Ball says: {answer}',
  },
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
*** v4.2.5
+ Created game Magic 8-Ball
```
---
