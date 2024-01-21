<div align="center">
  <img src="https://github.com/Paeonic-Development/.github/blob/main/images/Paeonic.png" alt="PΛΞ0NIC Development Banner">
</div>

<div align="center">
  <h3>🤖 Prefix Command</h3>
  <p>Simple Prefix Command for you to try!</p>
  <p><code>/8ball [question]</code></p>
  <p><ins>Created: Version 4.2.6.1</ins></p>
</div>

---
```js
const { Client, codeBlock } = require('discord.js'); // npm i discord.js
const client = new Client({ intents: [1, 512, 4096, 32768] }); // You can add more intents if you want
const { MagicEightBall } = require('flex-gamecord'); // npm i flex-gamecord

let prefix = "!"; // Your prefix
client.on("messageCreate", (message) => { // Message event
  if (!message.content.startsWith(prefix) || message.author.bot) return; // If message doesn't start with prefix or if author is bot return
  
if (message.content.startsWith(`${prefix}8ball`)) { // If message starts with prefix and command is 8ball

    const Game = new MagicEightBall({
      message: message, // Message
      isSlashGame: false, // If you want to use slash commands then make it true
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
        footerEnabled: true, // If you want to add footer then make it true
        footer: {
          text: `${message.guild.name} || ${client.user.username} 🌟 PΛΞ0NIC`,
          // iconURL: client.user.displayAvatarURL({ format: 'png' }), // If you want to add iconURL then remove the comment and add working url!
        },
        timestamp: true, // If you want to add timestamp then make it true
        description: codeBlock('txt', 'Your question: {question}\n') + codeBlock('txt', 'Magic 8-Ball says: {answer}'), // You can add your own description
      },
    });
    Game.startGame();
  }
});

client.login('TOKEN'); // Replace TOKEN with your bot token
client.on('ready', () => console.log('Ready!')); // Ready event
client.on('error', console.error); // Error event
```
---