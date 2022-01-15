const  { Client, Intents,  MessageEmbed, Collection } = require('discord.js')
const { token, clientId, prefix } = require('../config.json')
const akaneko = require('akaneko');
const ping = require('../commands/ping')

const imageBotUrl = 'http://pm1.narvii.com/6513/ad8683b99788d94e10d497cb1fee859aa49e55a5_00.jpg'

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on("ready", () => {
    console.log('ready')
})

client.on("messageCreate", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const embed = new MessageEmbed()
    console.log(command);
    console.log(args);
    if (message.author.id !== clientId) return;

    if (command === 'maid') {
        embed
            .setTitle('Maid')
            .setImage(await akaneko.nsfw.maid())
            .setAuthor({
                name: 'Kanao',
                iconURL: imageBotUrl
            })
            .setThumbnail(imageBotUrl)

        message.channel.send({ embeds: [embed] })
    } else if(command === 'ass'){
        embed
        .setTitle('Ass')
        .setImage(await akaneko.nsfw.ass())
        .setAuthor({
            name: 'Kanao',
            iconURL: imageBotUrl
        })
        .setThumbnail(imageBotUrl)
        message.channel.send({ embeds: [embed] })
    }
    else if(command === 'succubus'){
        embed
        .setTitle('Succubus')
        .setImage(await akaneko.nsfw.succubus())
        .setAuthor({
            name: 'Kanao',
            iconURL: imageBotUrl
        })
        .setThumbnail(imageBotUrl)
        message.channel.send({ embeds: [embed] })
    }else if(command === "ping"){
        message.ping
    }
});


client.login(token) 