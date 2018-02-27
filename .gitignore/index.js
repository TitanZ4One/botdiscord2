const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("YouPorn");
    console.log("le bot a bien ete connecte")
});

bot.login("NDE4MDk4OTcyMjA5NTc3OTg0.DXcoog.Tbiihstrvr4vABVZahi7LG-W99g");

bot.on('message', message => {
    if (message.content === 'Ping') {
    message.channel.sendMessage('pong');
  }
});
bot.on('message', message => {
    if (message.content === 'Salut') {
    message.channel.sendMessage('salut moi cest Jeff Tuche Heureux dte rencontrer mon ptit gars');
  }
});
bot.on('message', message => {
    if (message.content === 'Sa va') {
    message.channel.sendMessage('bien et toi mon chti gars');
  }
});

