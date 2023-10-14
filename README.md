# **flex-gamecord**

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/818900078077018162/1042159279597166682/banner.png" alt="gamecord" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/discord-gamecord">
    <img src="https://img.shields.io/npm/dt/discord-gamecord?style=for-the-badge" alt="npm" />
  </a>

  <a href="https://discord.gg/invite/GaczkwfgV9">
    <img src="https://img.shields.io/discord/800631529351938089?color=5865F2&label=Aniket&style=for-the-badge" alt="Discord Server" />
  </a>
</p>

<p align="center">
  <h1>Edited By Mr5ecret X PΛΞ0NIC Development</h1>
</p>

```diff
* Update [dev-4.2.1]
+ Added footer/timestamp options
```

> **Discord Gamecord is a powerful npm package with a collection of minigames for your discord bot :)**


## **⚙️ Installation** 

### Install flex-gamecordrequire('flex-gamecord'); discord.js v14 use
```sh
npm i https://github.com/Mr5ecret/flex-gamecordrequire('flex-gamecord');.git
```

## **✨ Features**

- Easy to use.
- Beginner friendly.
- Slash Commands Games.
- Supports Discord.js v14.


## **📚 Usage**
```js
const { TicTacToe } = flex-gamecordrequire('flex-gamecord');

try {
    const opponent = interaction.options.getUser('opponent');
    const Game = new TicTacToe({
      message: interaction,
      isSlashGame: true,
      opponent: opponent,
      embed: {
        title: 'Tic Tac Toe',
        color: embedColor,
        statusTitle: 'Status',
        overTitle: 'Game Over',
        /** // Edited by Mr5ecret [dev-4.2.1] [footer/timestamp]
        footer: {
          text: `${interaction.guild.name} || ${client.user.username} 🌟 PΛΞ0NIC`,
          iconURL: client.user.displayAvatarURL({ format: 'png' }),
        },
        timestamp: false,
        */
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
      turnMessage: `\`\`\`fix\n{emoji} | It\'s the turn of player {player.username}.\`\`\``,
      winMessage: `\`\`\`fix\n{emoji} | {player.username} won the TicTacToe Game.\`\`\``,
      tieMessage: `\`\`\`fix\nThe Game tied! No one won the Game!\`\`\``,
      timeoutMessage: `\`\`\`fix\nThe Game went unfinished! No one won the Game!\`\`\``,
      requestMessage: `\`\`\`fix\n{player.username} has invited you for a round of Tic Tac Toe.\`\`\``,
      rejectMessage: `\`\`\`fix\nThe player denied your request for a round of Tic Tac Toe.\`\`\``,
      playerOnlyMessage: `\`\`\`fix\nOnly {player.username} and {opponent.username} can use these buttons.\`\`\``,
    });
 
    Game.startGame();
    Game.on('gameOver', result => {
      console.log(result);
    });
  } catch (error) {
    console.error(error);
    interaction.followUp('An error occurred while starting the game.');
  }
```


## **📷 Preview**
<img src="https://cdn.discordapp.com/attachments/818900078077018162/1042159356780757072/Preview.png">

## **❔ Support**
<a href="https://discord.gg/invite/GaczkwfgV9"><img src="https://invidget.switchblade.xyz/GaczkwfgV9" alt="Discord"></a>

