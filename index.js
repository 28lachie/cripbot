const G = require('gizoogle');

const Discord = require('discord.js');

const token = "NjI5NTc4NTQ0MDQ1MDk2OTcw.XZb0tw.fsd_ws8g2yepKaAI15kVcBQSPfA";

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is now connected');
    //client.channels.find(x => x.name === 'g-channel').send(TranslateCheck)
});


G.string('Hello good sir, I want your finest coffee')



client.on('message', (message) =>{
    if (message.author.id !== client.user.id && message.content){
        message.channel.send(message.content, {
            tts:false
        });
        message.delete(500);
    }
})

client.login(token);