const { MessageEmbed } = require("discord.js");

module.exports.run = async(bot,message) => {

    if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'ai pas la __permission:__ __**\"GESTION DES MESSAGES\"**__, je ne peux donc envoyer le *help* !")

const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**__Voici les Commande Disponibles :__**\n\n  ๐ฎโโ๏ธ = **Commandes de Modรฉrations,** \n\n ๐ = **Commandes de Gestion dรป Serveur,** \n\n ๐งฒ = **Commandes de Backup,** \n\n ๐คฃ = **Commandes Fun,** \n\n ๐ = **Commandes Gifs,** \n\n ๐ = **Commandes NSFW,** \n\n ๐ = **Commande Autres,** \n\n ๐ = __**Commande Premium,**__ \n\n โ = **Annulรฉ le Help !**")
    .setFooter('Protect par Darkyo', 'https://cdn.discordapp.com/attachments/1002970295554027630/1004091742074716361/IMG_2403.gif?size=4096')
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/765158755905961984/793187964075114567/help.gif")

    const embed_ban = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('Modรฉration : ๐ฎโโ๏ธ')
    .setDescription("โ `+ban,`\n โ `+tempban,` \n โ `+unban,` \n โ `+kick,` \n โ `+mute,`\n โ `+unmute,` \n โ `+nuke,` \n โ `+warn,` \n โ `+clear,` \n โ `+lock.`")
    .setTimestamp()
    .setFooter('Protect par Darkyo', 'https://cdn.discordapp.com/attachments/1002970295554027630/1004091742074716361/IMG_2403.gif?size=4096')
    .setImage('https://cdn.discordapp.com/attachments/765158755905961984/793190832051191808/Ban.gif')

const embed_gestion = new MessageEmbed()

.setColor("RANDOM")
.setTitle("Gestion du Serveur : ๐")
.setDescription("โ`+members`, \n โ`+vc`, \n โ`+pp`, \nโ`+pp-server`, \nโ`+ui`, \nโ`+si`, \nโ`+say`, \nโ`+embed`, \n โ`+addemoji`, \n โ`+sondage`, \n โ`+rappel` \nโ`+soon`, \n โ`+perm` .")
.setTimestamp()
.setFooter('Protect par Darkyo', 'https://cdn.discordapp.com/attachments/1002970295554027630/1004091742074716361/IMG_2403.gif?size=4096')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/847252877424590878/Hakceur.gif")

const embed_backup = new MessageEmbed()

.setColor("RANDOM")
.setTitle("Backup : ๐งฒ")
.setDescription("โ `+create,` \n โ `+load,` \n โ `+info.`")
.setTimestamp()
.setFooter('Protect par Darkyo', 'https://cdn.discordapp.com/attachments/1002970295554027630/1004091742074716361/IMG_2403.gif?size=4096')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/871115334860558427/Backup.gif")

const embed_jeux = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande Fun : ๐คฃ")
.setDescription("โ`+ban2`\n โ`+report` \nโ`+8ball`, \nโ`+pf`, \nโ`+clyde`, \nโ`+asciify`, \nโ`+captcha`, \nโ`+gay`, \nโ`+lc`, \nโ`+calc`, \nโ`+qr-code`, \nโ`+snapcode`, \nโ`+twitter`, \nโ`+wiki,` \n โ`+search-i`, \n โ`+search-y`, \n โ`+shorturl`, \n โ`+world`.")
.setTimestamp()
.setFooter('Protect par Darkyo', 'https://cdn.discordapp.com/attachments/1002970295554027630/1004091742074716361/IMG_2403.gif?size=4096')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/847253207053762590/Jeux.gif")

const embed_gif = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande Gif : ๐")
.setDescription("โ`+meme`, \nโ`+gif`, \nโ`+dog`, \nโ`+cat`, \nโ`+truck`, \nโ`+koala`, \nโ`+calin`, \nโ`+bisous`, \nโ`+fight`, \nโ`+punch`.")
.setTimestamp()
.setFooter('Protect par Darkyo', 'https://cdn.discordapp.com/attachments/1002970295554027630/1004091742074716361/IMG_2403.gif?size=4096')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865199179163762708/Gif.gif")


const embed_nfsw = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande NFSW : ๐")
.setDescription("โ `+fuck`, \nโ `+sodomie`, \nโ `+nude`, \nโ `+seins`, \nโ `+chatte`.")
.setTimestamp()
.setFooter('Protect par Darkyo', 'https://cdn.discordapp.com/attachments/1002970295554027630/1004091742074716361/IMG_2403.gif?size=4096')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865188112299720704/X.gif")

const embed_autre = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande Autre : ๐")
.setDescription("โ`+add`, \n โ`+ping`, \n โ`+bi`, \nโ`+yt`, \n โ`+discord`, \n โ`+mybot`, \n โ`+stat`, \n โ`+don`. ")
.setTimestamp()
.setFooter('Protect par Darkyo', 'https://cdn.discordapp.com/attachments/1002970295554027630/1004091742074716361/IMG_2403.gif?size=4096')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/793192156214984734/Fun.gif")

const embed_prem = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commandes Premium : ๐")
.setDescription("โ `+dm`, \n โ `+say-p`,\n โ `+embed-p`, \nโ `+join`, \nโ `+elexyr`,\n โ `+meme22`,\n โ `+reel`,\n โ `+dedi`, \nโ `+hack`, \nโ `+first`, \n โ `+bug`.")
.setTimestamp()
.setFooter('Protect par Darkyo', 'https://cdn.discordapp.com/attachments/1002970295554027630/1004091742074716361/IMG_2403.gif?size=4096')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/815257914813710346/Argent.gif")

const embed_down = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Help ร? รฉtรฉ Annulรฉ !")
.setDescription("**Merci de faire : `+help,` pour avoir accรจs ร? la liste des commandes !**")
.setTimestamp()
.setFooter('By Darkyo#0001', 'https://cdn.discordapp.com/attachments/1002970295554027630/1004091742074716361/IMG_2403.gif?size=4096')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865197610768007188/Off.gif")

const embed_timeout = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Help ร? Timeout !")
.setDescription("**Merci de faire : `+help,` pour avoir accรจs ร? la liste des commandes !**")
.setTimestamp()
.setFooter('Protect par Darkyo', 'https://cdn.discordapp.com/attachments/1002970295554027630/1004091742074716361/IMG_2403.gif?size=4096')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865197698155675648/Time_Out.gif")

message.channel.send(embed).then(async msg => {
    const filter = (reaction, user) => (reaction.emoji.name === '๐ฎโโ๏ธ' || reaction.emoji.name === '๐' || reaction.emoji.name === '๐งฒ' || reaction.emoji.name === '๐คฃ' || reaction.emoji.name === '๐' || reaction.emoji.name === '๐' || reaction.emoji.name === '๐' || reaction.emoji.name === '๐' || reaction.emoji.name === '๐' || reaction.emoji.name === 'โ') && user.id === message.author.id;

    const collector = msg.createReactionCollector(filter, { idle: 60000 });

    collector.on('collect', async r => {
        if (r._emoji.name === "๐ฎโโ๏ธ") {
            await r.users.remove(message.author.id)
            msg.edit(embed_ban)

        } else if (r._emoji.name === "๐") {
            await r.users.remove(message.author.id)
            msg.edit(embed_gestion)

        } else if (r._emoji.name === "๐งฒ") {
            await r.users.remove(message.author.id)
            msg.edit(embed_backup)
            
        } else if (r._emoji.name === "๐คฃ") {
            await r.users.remove(message.author.id)
            msg.edit(embed_jeux)

        } else if (r._emoji.name === "๐") {
            await r.users.remove(message.author.id)
            msg.edit(embed_gif)


        } else if (r._emoji.name === "๐") {
            await r.users.remove(message.author.id)
            msg.edit(embed_nfsw)

        } else if (r._emoji.name === "๐") {
            await r.users.remove(message.author.id)
            msg.edit(embed_autre)

        } else if (r._emoji.name === "๐") {
            await r.users.remove(message.author.id)
            msg.edit(embed_prem)

        } else if (r._emoji.name === "โ") {
            await msg.reactions.removeAll();
            msg.edit(embed_down)
        }
    })

    collector.on('end', (collected, reason) => {
        if (reason === 'idle') {
            msg.reactions.removeAll();
            msg.edit(embed_timeout)
        }
    });
    await msg.react('๐ฎโโ๏ธ');
    await msg.react('๐');
    await msg.react('๐งฒ');
    await msg.react('๐คฃ');
    await msg.react('๐');
    await msg.react('๐');
    await msg.react('๐');
    await msg.react('๐');
    await msg.react('โ');
})}
module.exports.config = {
    name: 'help' 
    }