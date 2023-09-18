const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'G-';
require('dotenv').config();

// Import Tic-Tac-Toe game logic and Magic 8-Ball command handler
// const { handleTicTacToe } = require('./commands/tictactoe');
const { handleMagic8Ball } = require('./commands/magic8ball');

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === '8ball') {
        if (args.length === 0) {
            return message.channel.send(`Please ask a question to the Magic 8-Ball, e.g., '${prefix}8ball Will it rain tomorrow?'`)
        }else {
            handleMagic8Ball(message);
        }
    } else if (command === 'start') {
        // Handle the start command logic
    } else if (command === 'help') {
        // Send a message with a list of available commands and their usage
        message.channel.send('Here are the available commands:\n' +
            '!8ball - Ask the Magic 8-Ball a question\n');

            // +
            // '!start @player2 - Start a Tic-Tac-Toe game with another player\n' +
            // '!move row col - Make a move in the Tic-Tac-Toe game'
    } else {
        message.channel.send(`Command not recognized. Type '${prefix}help' to see available commands.`);
    }


    // // Check for and handle Magic 8-Ball command
    // if (command === '8ball') {
    //     handleMagic8Ball(message, args);
    // }

    // // Check for and handle Tic-Tac-Toe commands
    // if (command === 'start' || command === 'move') {
    //     handleTicTacToe(message, command, args);
    // }
});

client.login(process.env.TOKEN);
