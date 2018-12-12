const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');
const fs = require('fs')
const ascii = require('ascii-art') 
const TOKEN = (process.env.TOKEN)
const ytdl = require('ytdl-core');
const queue = new Map();


const prefix = "+";

client.login(TOKEN)


client.on('ready', () => {
  console.log('Le bot est prêt pour de nouvelles aventures !');
  setInterval(changing_status, 5000);

  function changing_status() {
    let status = [`+help | ${client.guilds.size} serveurs`, "Merci de m'avoir utilisé !",  "Besoin d'aide ?",  `+help | Version [1.8.5]`]
    let random = status[Math.floor(Math.random() * status.length)]
    client.user.setActivity(random)
}

});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



                      // PING //

                      client.on('message', async message => { 
    if(message.content === prefix + "vérifier"){
    if (message.channel.type === "dm") return;

    const role = message.guild.roles.find("name",  "vérifier")
    if(!roles) return message.channel.send("verifier")
    member.addRole(role)
    }
    

                          // KICK //

                         if(message.content.startsWith(prefix + "kick")) {
                            if (message.channel.type === "dm") return;
                            message.delete()
                              if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
                               return message.channel.send("***:x: Vous n'avez pas la permission pour kick un utilisateur !***")
                      
                              if(message.mentions.users.size === 0) {
return message.channel.send("**<:No:519493878085189653> Vous devez mentionnez une personne pour kick !**")
                              
                              }
                      
                              var kick = message.guild.member(message.mentions.users.first());
                              if(!kick) {
                                const embed = new Discord.RichEmbed()
                                .setDescription(`${message.author} `, message.author.avatarURL)
                                .addField("", "<:No:519493878085189653> Vous devez mentionnez une personne !")
                                .setColor(0xff0000)
                                .setTimestamp()
                                message.channel.send(embed);
                              }
                      
                              if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
                                const embed = new Discord.RichEmbed()
                                .setDescription(`${message.author} `, message.author.avatarURL)
                                .addField("", "<:No:519493878085189653> Vous devez mentionnez une personne !")
                                .setColor(0xff0000)
                                .setTimestamp()
                                message.channel.send(embed);
                              
                              }
                      
                              
                      
                              kick.kick().then(member => {
                                  message.channel.send(`** <:Yes:519769663136071681> ${member.user.username} a été kick avec succés !**`)
                                  message.mentions.users.first().send(`** <:Boite:519925991154384910>  Vous avez été expluser dans ${message.guild.name} par ${message.author.username}***`)

                              });
                          }
                      
                                                // BAN //
                      
                          if(message.content.startsWith(prefix + "ban")) {
                            if (message.channel.type === "dm") return;
                            message.delete()
                              if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**<:No:519493878085189653> Vous n'avez pas la permission !**");
                      
                              if(message.mentions.users.size === 0) {
                                  return message.channel.send("**<:No:519493878085189653> Vous devez mentionnez une personne pour ban !**")
                              }
                      
                              var ban = message.guild.member(message.mentions.users.first());
                              if(!ban) {
                                  return message.channel.send("**<:No:519493878085189653> L'utilisateur est introuvable !**")
                              }
                      
                              if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
                                  return message.channel.send("**<:No:519493878085189653> Je n'ai pas la permission de ban cet utilisateur !**")
                              }

                              
                      
                              ban.ban().then(member => {
                                message.channel.send(`**<:Yes:519769663136071681> ${member.user.username} a été ban avec succés !**`)   
                              
                              message.mentions.users.first().send(`** <:Boite:519925991154384910>  Vous avez été banni dans ${message.guild.name} par ${message.author.username}***`)              
                              });
                            }

                                                

    

                      // CLEAR //

    if(message.content.startsWith(prefix + "clear")) {
      if (message.channel.type === "dm") return;
      message.delete()
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("***:x: Vous n'avez pas la permission.***")

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("**<:No:519493878085189653> Tu dois préciser un nombre de message à supprimer !**")
        message.channel.bulkDelete(args[0]).then(() => { 
            message.channel.send(`** <:Yes:519769663136071681> ${args[0]} messages ont été supprimé avec succés.**`)
            message.delete()

        })
    }



    let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
 
if (message.content.startsWith(prefix + "warn")){
 
if (message.channel.type === "dm") return;
 
var mentionned = message.mentions.users.first();
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
if(message.mentions.users.size === 0) {
 
  return message.channel.send("**<:No:519493878085189653> Vous n'avez mentionnée aucun utilisateur**");
 
}else{
 
    const args = message.content.split(' ').slice(1);
 
    const mentioned = message.mentions.users.first();
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          if (args.slice(1).length != 0) {
 
            const date = new Date().toUTCString();
 
            if (warns[message.guild.id] === undefined)
 
              warns[message.guild.id] = {};
 
            if (warns[message.guild.id][mentioned.id] === undefined)
 
              warns[message.guild.id][mentioned.id] = {};
 
            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
 
            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
 
              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
 
            } else {
 
              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
 
                time: date,
 
                user: message.author.id};
               

            }
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
message.delete();
 
            message.channel.send(':warning: | **'+mentionned.tag+' à été averti**'); 
 
message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
 
          } else {
 
            message.channel.send("***:x: Erreur mauvais usage: "+prefix+"warn <user> <raison>***");
 
          }
 
        } else {
 
          message.channel.send("***:x: Erreur mauvais usage: "+prefix+"warn <user> <raison>***");
 
        }
 
      } else {
 
        message.channel.send("***:x: Erreur mauvais usage: "+prifx+"warn <user> <raison>***");
 
      }
 
    } else {
 
      message.channel.send("***:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur***");
 
    }
 
  }
 
}
 
 
 
  if (message.content.startsWith(prefix +"voirwarns")||message.content === prefix +"voirwarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
    const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size !== 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          try {
 
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              message.channel.send("**"+mentioned.tag+"** n'a aucun warn <:yeux:519926096334946316>");
 
              return;
 
            }
 
          } catch (err) {
 
            message.channel.send("**"+mentioned.tag+"** n'a aucun warn <:yeux:519926096334946316>");
 
            return;
 
          }
 
          let arr = [];
 
          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns <:yeux:519926096334946316>");
 
          for (var warn in warns[message.guild.id][mentioned.id]) {
 
            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+
 
            "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
 
          }
 
          message.channel.send(arr.join('\n'));
 
        } else {
 
          message.channel.send("**<:No:519493878085189653> Erreur mauvais usage: "+prefix+"seewarns <user> <raison>**");
 
          console.log(args);
 
        }
 
      } else {
 
        message.channel.send("***<:No:519493878085189653> Erreur mauvais usage: "+prefix+"seewarns <user> <raison>***");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
 
 
 
 
  if (message.content.startsWith(prefix +"effacewarns")||message.content=== prefix + "effacewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
   const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    const arg2 = Number(args[1]);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
 
          if (!isNaN(arg2)) {
 
            if (warns[message.guild.id][mentioned.id] === undefined) {
 
              message.channel.send(mentioned.tag+" n'a aucun warn <:yeux:519926096334946316>");
 
              return;
 
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
 
              message.channel.send("**:x: Ce warn n'existe pas**");
 
              return;
 
            }
 
            delete warns[message.guild.id][mentioned.id][arg2];
 
            var i = 1;
 
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
 
              var val=warns[message.guild.id][mentioned.id][key];
 
              delete warns[message.guild.id][mentioned.id][key];
 
              key = i;
 
              warns[message.guild.id][mentioned.id][key]=val;
 
              i++;
 
            });
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              delete warns[message.guild.id][mentioned.id];
 
            }
 
            message.channel.send(`***:white_check_mark: Le warn de ${mentioned.tag}\': ${args[1]} a été enlevé avec succès!***`);
 
            return;
 
          } if (args[1] === "tout") {
 
            delete warns[message.guild.id][mentioned.id];
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            message.channel.send(`**<:Yes:519769663136071681> Les warns de ${mentioned.tag} a été enlevé avec succès !**`);
 
            return;
 
          } else {
 
            message.channel.send("** <:No:519493878085189653> Erreur mauvais usage: "+prefix+"effacewarns <utilisateur> <nombre>**");
 
          }
 
        } else {
 
          message.channel.send("**<:No:519493878085189653> Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre>**");
 
        }
 
      } else {
 
       message.channel.send("**<:No:519493878085189653> Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre>**");
 
      }
 
    } else {
 
      message.channel.send("**<:No:519493878085189653> Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }

  const réponse = JSON.parse(fs.readFileSync('./eightball.json', "utf8"));

  if (message.content.startsWith(prefix + "8ball")) {
  
    var args = message.content.split(' ').join(' ').slice(6);
  
    if(!args) return message.channel.send("**<:No:519493878085189653> Tu dois me poser une question !**")
  
    var ball_embed = new Discord.RichEmbed()
    .setColor('0x200ff')
    .setTitle(':8ball: 8ball')
    .addField('Question :', `${args}`)
    .addField('Réponse', réponse[Math.round(Math.random() * réponse.length)])
    message.channel.send(ball_embed);
  }


  
  
                    // INVITE //



                  // SUPPORT //

  if (message.content === prefix + 'support') {
    if (message.channel.type === "dm") return;
    message.mentions.users.first() 
    const embed = new RichEmbed()
    .addField("Inviter le bot : ", " `Case #1` <:Yes:519769663136071681> Lien pour inviter le bot  https://discordapp.com/oauth2/authorize?client_id=512288418823405579&scope=bot&permissions=8")
    .addField("Notre serveur officiel :","  `Case #1` <:Yes:519769663136071681> Lien pour rejoindre notre discord https://discord.gg/zPQWSTA")
    .setColor(0xFF0000)
    message.channel.send(embed);

       }

});

           // SET ACTIVITY //

  
             // HELP //

  client.on('message', message => {
    if (message.content === prefix + 'help') {
      if (message.channel.type === "dm") return;
      const embed = new RichEmbed()
        .setTitle('**<:Yes:519769663136071681> __Liste des commandes disponible__ [17]**', true)
        .addField('**<:Telechargement:519926079822233620> • __Administration__ [2]**', '`+clear, +giveaways`', true)
        .addField('**<:Moderation:519926051305160715> • __Modération__ [6]**', '`+kick, +ban, +warn, +effacerwarns, +voirwarns`')
        .addField('**<:Photo1:519926025316991010> • __Fun__  [5]** ', '`+ping, +8ball, +inter, +ascii, +inter` ')
        .addField('** <:yeux:519926096334946316> • __Utilitaires__  [3]**', '`+serverinfo, +say, +support`')
        .addField("**<:image1:519926126898970640> • __Images__ [2]**", "`+chien, +chat`")
        .setColor(0xFF0000)
        .setTimestamp()
        .setFooter('Zombie | Aide ', message.author.avatarURL)
        

      message.channel.send(embed);
    }
  });

             // MESSAGE DE BIENVENUE //


             client.on('guildMemberAdd', member => {
              let channel = member.guild.channels.find('name', '👋▸bienvenue-aurevoir');
              let memberavatar = member.user.avatarURL
                  if (!channel) return;
                  let embed = new Discord.RichEmbed()
                  .setColor(0xFF0000)
                  .setThumbnail(memberavatar)
                  .addField(':bust_in_silhouette: • **__Pseudo :__** ', `${member}`)
                  .addField(':microphone2: • **__Bienvenue !__**', `Bienvenue dans le serveur, ${member}`)
                  .addField(':id: • **__User :__**', "**" + `${member.id}` + "**")
                  .addField('👤 • **__Tu es le membre N°__**', `${member.guild.memberCount}`)
                  .addField("Name", `<@` + `${member.id}` + `>`, true)
                  .addField('Server', `${member.guild.name}`, true )
                  .setFooter(`${member.guild.name}`)
                  .setTimestamp()
          
                  channel.sendEmbed(embed);
          });

  client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '🎊•bienvenue');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: • **__Pseudo :__** ', `${member}`)
        .addField(':microphone2: • **__Bienvenue !__**', `Bienvenue dans le serveur, ${member}`)
        .addField(':id: • **__User :__**', "**" + `${member.id}` + "**")
        .addField('👤 • **__Tu es le membre N°__**', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', 'bienvenue-aurevoir');
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor(0xFF0000)
      .setThumbnail(memberavatar)
      .addField(':bust_in_silhouette: • **__Pseudo :__** ', `${member}`)
      .addField(':microphone2: • **__Bienvenue !__**', `Bienvenue dans le serveur, ${member}`)
      .addField(':id: • **__User :__**', "**" + `${member.id}` + "**")
      .addField('👤 • **__Tu es le membre N°__**', `${member.guild.memberCount}`)
      .addField("Name", `<@` + `${member.id}` + `>`, true)
      .addField('Server', `${member.guild.name}`, true )
      .setFooter(`${member.guild.name}`)
      .setTimestamp()

      channel.sendEmbed(embed);
});

client.on('guildMemberAdd', member => {

    console.log(`${member}`, "a rejoin" + `${member.guild.name}`)

    const role = member.guild.roles.find('name', 'Membre')
    member.addRole(role)

});

client.on('guildMemberAdd', member => {

  const role = member.guild.roles.find('name', '=+= [ Défaut ] =+=')
  member.addRole(role)

});

  /////////////////////////////////////////////////////////////////    // MESSAGE DE BYE BYE //  ///////////////////////////////////////////////////////////////


  client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '🎊•aurevoir');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed() 
        .setColor(0xFF0000)
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Pseudo :', `${member}`)
        .addField(':wave: | Bye Bye :(',' Tu nous manque déjà ;(')
        .addField(':arrows_counterclockwise: | Le serveur est maintenant à', `${member.guild.memberCount}` + " membres...")
        .setFooter(`${member.guild.name}`)
        .setTimestamp()
        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '👋▸bienvenue-aurevoir');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed() 
        .setColor(0xFF0000)
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Pseudo :', `${member}`)
        .addField(':wave: | Bye Bye :(',' Tu nous manque déjà ;(')
        .addField(':arrows_counterclockwise: | Le serveur est maintenant à', `${member.guild.memberCount}` + " membres...")
        .setFooter(`${member.guild.name}`)
        .setTimestamp()
        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
  let channel = member.guild.channels.find('name', 'bienvenue-aurevoir');
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed() 
      .setColor(0xFF0000)
      .setThumbnail(memberavatar)
      .addField(':bust_in_silhouette: | Pseudo :', `${member}`)
      .addField(':wave: | Bye Bye :(',' Tu nous manque déjà ;(')
      .addField(':arrows_counterclockwise: | Le serveur est maintenant à', `${member.guild.memberCount}` + " membres...")
      .setFooter(`${member.guild.name}`)
      .setTimestamp()
      channel.sendEmbed(embed);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('guildMemberRemove', member => {
    console.log(`${member}` + "a quitter" + `${member.guild.name}` + "Sending leave message now")
    console.log("Bye Bye message envoyé à l'utilisateur qui a quitter.")
});


client.on('message', message => {
  if (message.content === prefix + 'ayoublegros') {
    const embed = new RichEmbed()
    .addField('Ayoub Le Gros', "Ayoub tu es tellement gros que quand tu sautes dans la piscine les gens sont au sec")
    .setTimestamp()
    message.channel.send(embed);
   }
  });

  client.on('message', message => {
    if (message.content === prefix + 'ayoublegro') {
      const embed = new RichEmbed()
      .addField('Ayoub Le Gros', "t'es tellement gros que quand tu te mets sur un escalator il s'arrête")
      .setTimestamp()
      message.channel.send(embed);
     }
    });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 
client.on('message', message => {
  if (message.channel.type === "dm") return;
  if (message.content === prefix + 'servercount') {
    const embed = new RichEmbed()
    .setTitle(`Le bot est dans ${client.guilds.size} serveurs \:No: ` )
    message.channel.send(embed);
  }
});


//////////////////////////////////////////////////////////////////////////// // TEST // //////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.channel.type === "dm") return;
if (message.content.startsWith(prefix + 'serverinfo')) {
  const embed = new Discord.RichEmbed()
  .setTitle("**:globe_with_meridians: • __Info Du Serveur__**")
  .addField('**👤 • __Nombres De Membres__**', message.guild.memberCount, true)
  .addField('**:name_badge: • __Nom Du Serveur __**', message.guild.name, true)
  .addField('**:flag_eu: • __Region__**', message.guild.region, true)
  .addField('**:crown: • __Créateur du Serveur__**', message.guild.owner, true)
  .addField('**:id: • __ID Du serveur__**', message.guild.id, true)
  .addField("**<:Telechargement:519926079822233620> • __Role__**", message.guild.roles.size, true)
  .setColor(0xFF0000)
  .setThumbnail(message.guild.iconURL)
  message.channel.send(embed);
}


  if (message.content === prefix + 'ping') {
    if (message.channel.type === "dm") return; ("tg")
    message.channel.send("Pong ! :ping_pong:, L'**API** à mis ` \ "  + client.ping + "ms\ ` Pour répondre ! ")
  }
});

//////////////////////////////////////////////////////////////////////////// // SAY // //////////////////////////////////////////////////////////////////////

client.on('message', message => {
 
  if(message.content.startsWith(prefix + "embed"))  {
    if (message.channel.type === "dm") return; 
    let args = message.content.split(" ").slice(1);
         message.delete()
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor(0xff0000)
    message.channel.send(embed);
  } 
});

client.on('message', message => {
  let args = message.content.split(" ").slice(1);
 
  if(message.content.startsWith(prefix + "say"))  {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("**<:No:519493878085189653> Vous n'avez pas la permission !**").catch(console.error);
    if (message.channel.type === "dm") return; 
         message.delete()
    message.channel.send(args.join(" "))
 
     }

     if (message.content.startsWith(prefix + "sondage")) {
       message.delete();
       let args = message.content.split(" ").slice(1);
       if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("**<:No:519493878085189653> Vous n'avez pas la permission !**").catch(console.error);
       const embed = new RichEmbed()
       .setTitle("Sondage")
       .addField(args.join(""), "Réagissez par :white_check_mark: ou :x:")
       message.channel.send(embed);
       message.react("✅")
       message.react("👎")
       


     }


 
});

client.on('message', async message => {
  //1 blacklisted words
  let blacklisted = ['bitch', "Ntm", "fuck", "niggas", "ntm", "ta mère la pute", "ftg", "tg", "ntm", "bite", "zizi", "fdp", "porn", "nudes", "nude"] //words put , after the word

  //2 looking for words
  let foundInText = false;
  for (var i in blacklisted) { // loops through the blacklisted list
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }
  // checks casesensitive words

  //3 deletes and send message
    if (foundInText) {
      if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
      message.delete();
      const embed = new Discord.RichEmbed()
      .addField(`<:insulte:520963325492985867> Qu'avez-vous dit ?`, `<:Moderation:519926051305160715> Une insulte provenant de ${message.author} `)  
      .setColor(0xFF0000)
      message.channel.send(embed);
 

  

  }
});﻿



  client.on('message', async message => {
    if(message.content.startsWith(prefix + "giveaway")) {
      if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**<:No:519493878085189653> Vous n'avez pas la permission !**").catch(console.error);
     
         
     
      var messageArray = message.content.split(" ");
      var time;
      var gagnant;
          gagnant = Number(messageArray[1]);      
          if(!gagnant) return message.reply("**<:No:519493878085189653> ERREUR**\n__MAUVAIS USAGE!__\n**Combien y aura-t-il de gagnants? **\n\nExemple d'utilisation:\n`+giveaways 1 120 un role avec la couleur que vous voulez !`");  // verification pour les gagnants
       if(isNaN(gagnant)) return message.reply("**<:No:519493878085189653> ERREUR**\n__MAUVAIS USAGE!__\n**Combien y aura-t-il de gagnants? **\n\nExemple d'utilisation:\n`+giveaways 1 120 un role avec la couleur que vous voulez !`");
     
          time = Number(messageArray[2]);
          if(!time) return message.reply("**ERREUR**\n__MAUVAIS USAGE!__\nQuel est la durée de votre giveaway en seconde?\n\nExemple d'utilisation:\n`+giveaways 1 120 un role avec la couleur que vous voulez !`")
          if(isNaN(time)) return message.reply("**<:No:519493878085189653> ERREUR**\n__MAUVAIS USAGE!__\nQuel est la durée de votre giveaway en seconde?\n\nExemple d'utilisation:\n`+giveaways 1 120 un role avec la couleur que vous voulez !`")  // verification pour le timer en seconde
     
      let pari = message.content.split(" " + gagnant + " " + time + " ").slice(1);
              var item = pari
              if(!item) return message.reply("**<:No:519493878085189653> ERREUR**\n__MAUVAIS USAGE!__\n**Que voulez-vous faire gagner?**\n\nExemple d'utilisation:\n`+giveaways 1 120 un role avec la couleur que vous voulez !`");  // verification pour le prix (si rien ne se passe il va rien afficher)
     
           
              let member = message.author
              var embedgiveaway = new Discord.RichEmbed() //création de l'embed d'annonce du giveaway
              .setAuthor(member.username, member.displayAvatarURL)
              .addField(":tada: GIVEAWAY ! :tada:", "** **")
              .addField("<:Boite:519925991154384910> Prix:", `** ${item} **`)
              .addField("<:Telechargement:519926079822233620> Nombre de gagnants :", `** ${gagnant} ** gagnant(s)`)
              .addField("<:Camera:519926007701045249> Fin du Giveaway dans:", `**${time}** secondes`)
              .addField("<:Moderation:519926051305160715> Pour participer, réagissez avec :tada: !!", "** **")
              .setFooter(`Giveaway`)
              .setTimestamp()
              var embedgiveawaySent = await message.channel.send(embedgiveaway);
    embedgiveawaySent.react("\uD83C\uDF89"); // un emoji :tada: en unicode
     
              setTimeout(function() {
                embedgiveawaySent.reactions.forEach(r=>r.remove(client.user));
                var peopleReacted = embedgiveawaySent.reactions.get("\uD83C\uDF89").users.array(); // vérification des users dans la liste des réacts
                var winners = embedgiveawaySent.reactions.get("\uD83C\uDF89").count
               var inodex = Math.floor(Math.random() * peopleReacted.length); // tirage au sort
               
               var ggg = [];
               var gggmessage = "";  
               for (var i = 0; i < gagnant; i++){
              ggg.push(peopleReacted[inodex]);
              inodex = Math.floor(Math.random() * peopleReacted.length);
               }
               for (var i = 0; i < ggg.length; i++){
                   if (ggg[i].id === client.user.id){
                   ggg.slice(i, 1);
                       continue;
                   }
                 gggmessage += (ggg[i].toString() + " ");
               }
               
           
               var haveHas = "a";  // changement pour du pluriel si nécessaire
                var Win = ""
                if (ggg.length == 0){
                  haveHas = " error: ";
                var Win = "";
                }
               if (ggg.length == 1){
                   haveHas = " vient de gagner: ";
                 var Win = "";
               }else{
                   haveHas = ", viennent de gagner: ";
                var Win = "";
               }
               let gigg = ggg
               
               if(gagnant > winners) { // si il y a moins de participants que le nombre de winner
                 message.channel.send("Malheureusement, pas assez de personne ont pu être sélectionné,\nVous avez demandé` " + gagnant + " `possibles gagnant(s) mais vous avez eu que `" + winners + "` participant(s)")
               return;
               }
               
               message.channel.send(" \n\n" + gigg  + haveHas + " " + `${item}`);
       }, time * 1000);
     
     
         setTimeout(function() {
      embedgiveawaySent.reactions.forEach(r=>r.remove(client.user));
      }, time * 950)  // pour éviter que le bot s'auto choisit lor du tirage, il retire sa réaction peu avant le tirage, si il n'y a pas de participant il s'auto choisit quand meme!
     
          }
        });

    client.on('message', message => {
      if(message.content.startsWith(prefix + "inter")) {
          message.delete(message.author);
          let argson = message.content.split(" ").slice(1)
          let vcsmsg = argson.join(" ")
          if(!message.guild.channels.find("name",  "inter-zombie")) return message.reply("Erreur, le channel inter-zombie est introuvable !");
          if(message.channel.name !== "inter-zombie") return message.reply("Erreur, merci de vous connecter dans le channel inter-zombie !");
          if(!vcsmsg) return message.reply("Erreur, merci d'entrer un message !");
  
          var replys = [
              '0xFF0000',
              '0xFF0000'

          ];
  
          let reponse = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
          .setColor(reponse)
          .setAuthor("Inter-Serveur", client.user.avatarURL)
          .addField("<:Telechargement:519926079822233620> utilisateur", `${message.author.tag}`, true)
          .addField("<:image1:519926126898970640> Serveur", `**${message.guild.name}**`, true)
          .addField("<:Boite:519925991154384910> Message", `${vcsmsg}`)
          .addField("<:yeux:519926096334946316> ID", `**${message.author.id}**`, true)
          .setFooter("Zombie Merci à [\ XPOL /]")
          .setTimestamp()
          .setThumbnail(message.guild.iconURL)
          client.channels.findAll('name', 'inter-zombie').map(channel => channel.send(embed))
  
      }});


      client.on('message', async (message) => {
        if(message.content.startsWith(prefix + "ascii")){
               var argsa = message.content.split(' ').slice(1, 20).join(' ');
                var figlet = require('figlet');
    
            if(!argsa[0]) return message.channel.send(':x: Erreur ! Veuillez entrer un message !');
    
            figlet(`${argsa}`, function(err, data) {
                if (err) {
                    console.log('Ascii demandée');
                    console.dir(err);
                    return;
                }
    
    
                message.channel.send(`${data}`, {code: 'AsciiArt'});
    
    
            });}})

  client.on('message', async (message) => {


            if (message.content.startsWith(prefix + "userinfo")) {
              let member = message.mentions.users.first() || message.author;
              let userembed = new Discord.RichEmbed()
                  .setColor(message.guild.member(member).highestRole.color)
                  .setThumbnail(member.displayAvatarURL)
                  
                  .setTitle(`**<:Yes:519769663136071681> • Userinfo**`)
                  .addField(`**<:Moderation:519926051305160715> • __Pseudo__ :**`, member.username, true)
                  .addField(`**<:yeux:519926096334946316> • __ID__ :**`, member.id, true)
                  .addField(`**<:Verifier:521662124691554304> • __Bot__ ? :**`, member.bot ? "Affirmatif" : "Négatif", true)
                  .addField("**<:Photo1:519926025316991010> • __Activité__ :**", message.guild.member(member).presence.game ? message.guild.member(member).presence.game.name : "Utilisateur Pas en train de jouer", true) // the ? and : are like an if statement if (msg.guild.member(member).presence.game ) { msg.guild.member(member).presence.game.name } else "Not Playing"
                  .addField("**<:Boite:519925991154384910> • __Pseudo Personnaliser__ (Pseudo du serveur) :**", message.guild.member(member).nickname ? message.guild.member(member).nickname : "Aucun", true )
                  .addField("**<:Camera:519926007701045249> • __Dernier Message__ :**", member.lastMessage, true)
                  .addField(`**<:Telechargement:519926079822233620> • __Roles__ :**`, message.guild.member(member).roles.map(s => s).join(" | "), true)
          
                  message.channel.send(userembed);
          }
          
          if (message.content.startsWith(prefix + `cat`))
          {
          
              const { body } = await snek.get(`http://aws.random.cat/meow`);
              
              let embed = new Discord.RichEmbed()
              .setColor(0xFFFFFF)
              .setImage(body.file)
              .setTitle(`Purr`)
          
              message.channel.send(embed);
          }
          
          if (message.content.startsWith(prefix + "report")) {
            let rUser = message.guild.member(message.mentions.users.first());
            if(rUser.message.mentions.users.size === 0) {
              return message.channel.send("**<:No:519493878085189653> Vous devez mentionnez une personne pour report !**")
            }
            var reason = message.content.split(' ').join(' ').slice(6);
            let reportEmbed = new RichEmbed()
            .setDescription("Report")
            .setColor(0xFF0000)
            .addField("User reporté", `${rUser} Avec l'ID ${rUser.id}` )
            .addField("Reporté par", `${message.author} Avec l'ID ${message.author.id}`)
            .addField("Channel", message.channel)
            .addField("Reason", reason)
            .setTimestamp()

            let reportschannel = message.guild.channels.find(`report`)
            if(!reportschannel) return message.channel.send("Je ne peut pas trouver le channel !")

            reportschannel.send(reportEmbed)
          }

          
          
          if(message.content.startsWith(prefix + 'caca')) { //configurez votre prefix sinon ca va pas aller  ツ
            if(message.author.id === "239739781238620160")  return message.channel.send("Vous ne pouvez pas utiliser la commande car vous ête banni du bot !")

            
          var blackembed = new Discord.RichEmbed() //un embed si tu sais pas ce que c'est ツ
          .setColor("RANDOM")
          .setTitle("Commande impossible à effectuer!")
          .addField("Vous ne pouvez pas m'utiliser car vous êtes banni du bot!")
          .setImage("http://www.parisenligne.com/wp-content/imgs/image-liste-noire-70.jpg")
          message.channel.send(blackembed);
        //vous pouvez en rajouter au fur et à mesure!
        
          }
          
          });
        
          client.on('message', message => {
            if(message.content.startsWith(prefix + "chat")) {

              var chat = [

                  "https://www.atavik.fr/wp-content/uploads/2018/01/atavik-chat-sant%C3%A9-comportement-atavique.jpg",
                  "https://jardinage.lemonde.fr/images/dossiers/2018-02/chat-100848.jpg",
                  "https://jardinage.lemonde.fr/images/dossiers/2017-09/chat-gouttiere-1-111031.jpg",
                  "https://media.nouvelobs.com/referentiel/1200x630/16373966.jpg",
                  "https://www.catizz.com/medias/common/miaulement%20chat%20.jpg",
                  "https://jardinage.lemonde.fr/images/dossiers/2017-10/chat-160446.jpg",
                  "https://www.zoomalia.com/blogz/1006/l_chat-utilise-pas-griffoir.jpg",
                  "https://img.ohmymag.com/article/1280/chat/chat-siberien_8478612cb6a4949645022d4232f1f1d5fd2169b1.jpg",
                  "https://o.aolcdn.com/images/dims3/GLOB/crop/4752x2376+0+396/resize/630x315!/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F2c0dee0b15b86e322034576d14ed28e7%2F205110236%2F138468381.jpg"
              ];

              var chat = chat[Math.floor(Math.random() * chat.length)];

var cat_embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle(':cat: Chat :')
.setImage(chat)
.setFooter("Image de chat ")

message.channel.send(cat_embed)
}});

client.on('message', message => {
if(message.content.startsWith(prefix + "chien")) {

  var chien = [

      "https://www.chien.fr/assets/img/000/083/large/choisir-chien-japonais.jpg",
      "http://www.canalvie.com/polopoly_fs/1.1755222.1463763567!/image/chien-otite.png_gen/derivatives/cvlandscape_670_377/chien-otite.png",
      "https://i.ytimg.com/vi/wSTt04rOwa8/maxresdefault.jpg",
      "https://cdnfr1.img.sputniknews.com/images/103138/19/1031381996.jpg",
      "http://www.chroniqueurs.canoe.com/archives/artdevivre/animal/chiens/races/media/2014/01/20140120-083855-g.jpg",
      "http://dauphindu91260.d.a.pic.centerblog.net/bu5xib77.jpg",
      "http://club-canin-arzens.e-monsite.com/medias/images/chien-neige-jouer.14.12.2013.jpg",
      "https://img.20mn.fr/urzDrDIZTnGE7akofCLnTQ/830x532_illustration-chien-train-jouer.jpg",
      "https://www.lemagduchien.com/images/dossiers/2017-09/golden-retriever-1-080550.jpg",
      "https://www.google.fr/search?q=image+de+chien+husky&safe=active&rlz=1C1CAFA_enFR642FR643&tbm=isch&source=iu&ictx=1&fir=rdViSwnVQvuFsM%253A%252C8V-_Y9rcGP-NHM%252C_&usg=AI4_-kStWzV4GWtnj91A1SRBL0V4tF4sow&sa=X&ved=2ahUKEwjLyYuQ5ZXfAhWxxYUKHVYwAMMQ9QEwAHoECAMQBA#imgrc=rdViSwnVQvuFsM:"
  ];

  var chien = chien[Math.floor(Math.random() * chien.length)];

var dog_embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle(':dog: Chien :')
.setImage(chien)
.setFooter("Image de chien ")

message.channel.send(dog_embed)
}});
