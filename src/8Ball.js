const { EmbedBuilder } = require('discord.js');
const events = require('events');

module.exports = class MagicEightBall extends events {
  constructor(options = {}) {

    if (!options.isSlashGame) options.isSlashGame = false;
    if (!options.message) throw new TypeError('NO_MESSAGE: No message option was provided.');
    if (typeof options.message !== 'object') throw new TypeError('INVALID_MESSAGE: message option must be an object.');
    if (typeof options.isSlashGame !== 'boolean') throw new TypeError('INVALID_COMMAND_TYPE: isSlashGame option must be a boolean.');

    if (!options.embed) options.embed = {};
    if (!options.embed.title) options.embed.title = '🎱 Magic 8-Ball';
    if (!options.embed.color) options.embed.color = '#5865F2';
    if (!options.embed.description) options.embed.description = 'Your question: *{question}*\nMagic 8-Ball says: **{answer}**';
    if (!options.responses) options.responses = ['Yes', 'Maybe', 'No'];

    if (typeof options.embed !== 'object') throw new TypeError('INVALID_EMBED: embed option must be an object.');
    if (typeof options.embed.title !== 'string') throw new TypeError('INVALID_EMBED: embed title must be a string.');
    if (typeof options.embed.color !== 'string') throw new TypeError('INVALID_EMBED: embed color must be a string.');
    if (typeof options.embed.description !== 'string') throw new TypeError('INVALID_DESCRIPTION: embed description must be a string.');
    if (!Array.isArray(options.responses)) throw new TypeError('INVALID_RESPONSES: responses option must be an array.');

    super();
    this.options = options;
    this.originalMessage = options.message;
    this.interaction = this.options.isSlashGame ? options.message : null;
  }

  async startGame() {
    if (this.options.isSlashGame) {
      if (!this.interaction.deferred) await this.interaction.deferReply().catch(e => { });
      this.question = this.interaction.options.getString('question');
    } else {
      this.question = this.originalMessage.content.split(' ').slice(1).join(' ');
    }

    if (!this.question) {
      return this.sendMessage("Please ask a question.");
    }

    const randomResponse = this.options.responses[Math.floor(Math.random() * this.options.responses.length)];
    const embed = new EmbedBuilder()
      .setColor(this.options.embed.color)
      .setTitle(this.options.embed.title)
      .setDescription(this.options.embed.description.replace('{question}', this.question).replace('{answer}', randomResponse));

    if (this.options.embed.timestamp) {
      embed.setTimestamp();
    }

    if (this.options.embed.footerEnabled) {
      const footerOptions = { text: this.options.embed.footer.text };
      if (this.options.embed.footer.iconURL) {
        footerOptions.iconURL = this.options.embed.footer.iconURL;
      }
      embed.setFooter(footerOptions);
    }

    return this.sendMessage({ embeds: [embed] });
  }

  sendMessage(content) {
    if (this.options.isSlashGame) {
      return this.interaction.editReply(content);
    } else {
      return this.originalMessage.channel.send(content);
    }
  }
}