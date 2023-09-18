// commands/magic8ball.js

// Define your Magic 8-Ball responses
const magic8Responses = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes - definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
];

// Export the Magic 8-Ball command handler
module.exports = {
    name: '8ball',
    description: 'Ask the Magic 8-Ball a question!',
    execute(message) {
        // Generate a random response from the array
        const randomResponse = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];

        // Send the Magic 8-Ball's response
        message.channel.send(`🎱 ${randomResponse}`);
    },
};
