const gizoogleAPI = require('gizoogle');
const discordAPI = require('discord.js');
const discordToken = "token";
const discordClient = new discordAPI.Client();

discordClient.login(discordToken);

// Discord Event Handling
discordClient.on('ready', () => {
    console.log('Bot is now connected');
});

discordClient.on('message', (message) =>{
    if (message.author.id !== discordClient.user.id && message.content){
        gizoogleAPI.string(message.content,function(error, translation) {
            processTranslationMessage(message, translation)
        });
    }
});

// Functons
function processTranslationMessage(message, translation) {
    message.delete();

    message.channel.send(new discordAPI.RichEmbed()
        .setColor('#ffffff')
        .setDescription(translation)
        .addField("Translation:", message.content, false)
        .setAuthor(message.guild.member(message.author).displayName, message.author.avatarURL))
}


