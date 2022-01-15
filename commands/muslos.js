const {MessageEmbed} = require('discord.js')
const akaneko = require('akaneko')
const image = require('../assets/image')

exports.run = async (client, message, args) =>{
    const embed = new MessageEmbed()
    embed
        .setTitle('Muslitos uwu >.<')
        .setImage(await akaneko.nsfw.thighs())
        .setAuthor({
            name: 'Kanao',
            iconURL: image
        })
        .setThumbnail(image)
        message.channel.send({ embeds: [embed] })
}