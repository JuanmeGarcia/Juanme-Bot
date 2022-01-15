const {MessageEmbed} = require('discord.js')
const akaneko = require('akaneko')
const image = require('../assets/image')

exports.run = async (client, message, args) =>{
    const embed = new MessageEmbed()
    embed
        .setTitle('Fap')
        .setImage(await akaneko.nsfw.masturbation())
        .setAuthor({
            name: 'Kanao',
            iconURL: image
        })
        .setThumbnail(image)
        message.channel.send({ embeds: [embed] })
}