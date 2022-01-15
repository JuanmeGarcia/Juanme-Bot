const {MessageEmbed} = require('discord.js')
const akaneko = require('akaneko')
const image = require('../assets/image')

exports.run = async (client, message, args) =>{
    const embed = new MessageEmbed()
    embed
        .setTitle('Maid')
        .setImage(await akaneko.nsfw.maid())
        .setAuthor({
            name: 'Kanao',
            iconURL: image
        })
        .setThumbnail(image)
        message.channel.send({ embeds: [embed] })
}