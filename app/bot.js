/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require("discord.js");
const GuildMember = Discord.GuildMember;
// Create an instance of a Discord client
const client = new Discord.Client();
const axios = require('axios')
const express = require('express');
const keepalive = require('express-glitch-keepalive');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
client.on('message', async message => {
//NjczMDcwODcyNTc1MjEzNTg4.XnV5hQ.ox2BdDXevIYElyvzpWVLS7dL0eM
	// ...
});  
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on("ready", () => {
  console.log("I am ready!");
});
client.login('NjczMDcwODcyNTc1MjEzNTg4.XnkjlA.Py_T-05fwW0A0FUzRqV3CGj6t9Y');


// Create an event listener for messages
client.on("message", message => {
  // If the message is "ping"
  if (message.content === "ping") {
    // Send "pong" to the same channel
    message.channel.send("Hi");
  }
});

client.on("message", message => {
  if (message.content === "test") {
    // Send "pong" to the same channel
    message.channel.send("working");
  }
});
client.on("message", message => {
  if (message.content === "-blacknigga") {
    // Send "pong" to the same channel
    message.channel.send(
      "Miss me wit dat gay shit"
    );
  }
});
client.on("message", message => {
  if (message.content === "askdaskdsk") {
    // Send "pong" to the same channel
    message.channel.send(
      "Really Nigga 🙄 https://cdn.discordapp.com/attachments/622505883787591682/673246592928579608/REALLY.gif"
    );
  }
});
//cdn.discordapp.com/attachments/672935035686354954/672937217198653490/EPpHEXrWAAIb6jv.png
client.on("message", message => {
  if (message.content === "-huncho") {
    // Send "pong" to the same channel
    message.channel.send(
      "https://cdn.discordapp.com/attachments/672935035686354954/672937217198653490/EPpHEXrWAAIb6jv.png"
    );
  }
});
client.on("message", message => {
  if (message.content === "-cmds") {
    // Send "pong" to the same channel
    message.channel.send(
      ""
    );
  }
});

client.on("message", message => {
  if (message.content === "-firenigga") {
    // Send "pong" to the same channel
    message.channel.send(
      "https://media.discordapp.net/attachments/296056831514509312/670380085240397845/image0-3-3-1.gif"
    );
  }
});

client.on("message", message => {
  if (message.content === "-nigel") {
    // Send "pong" to the same channel
    message.channel.send(
      "https://cdn.discordapp.com/attachments/651515917632798742/673741038807941120/0397b8a67f88dcbd82086c6ed8a61e07.png"
    );
  }
});
client.on("message", message => {
  if (message.content === "-soz") {
    // Send "pong" to the same channel
    message.channel.send("Soz..");
  }
});

client.on("message", message => {
  if (message.content === "-spiffy") {
    // Send "pong" to the same channel
    message.channel.send(
      "https://tr.rbxcdn.com/94127b4e7057964adeba1e0aa506bea4/352/352/Avatar/Png"
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith("-stfu")) {
    var member = message.mentions.members.first();
    message.channel.send("Shut the fuck up " + member.displayName);
  }
});

client.on("message", message => {
  if (message.content.startsWith("-ping")) {
    message.channel.send(
      new Date().getTime() -
        message.createdTimestamp +
        "ms potato wifi havin ass nigga"
    );
  }
});
client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if(message.content.startsWith('-say')) {
        message.delete()
        var saytext = args.join(" ");
        message.channel.send(saytext)
  }
}) 

client.on("message", message => {
  if (message.content === "-paw") {
    // Send "pong" to the same channel
    message.channel.send("No one fucking cares @Fawful#6498");
  }
});
     // Log our bot in using the token from https://discordapp.com/developers/applications/me

client.on("message", message => {
  if (message.content.startsWith("-tfup")) {
    var member = message.mentions.members.first();
    message.channel.send("Tf up " + member.displayName);
  }
});

client.on("message", message => {
  if (message.content === "-spiffy2") {
    // Send "pong" to the same channel
    message.channel.send(
      "https://tr.rbxcdn.com/0f869fc1e593a262993cfa7003dad56b/352/352/Avatar/Png"
    );
  }
});


client.on("message", message => {
  if (message.content === "Hi") {
    // Send "pong" to the same channel
    message.channel.send(
      "Hey"
    );
  }
});

client.on("message", message => {
if (message.content.startsWith("-avatar")) {
      var member = message.mentions.members.first()
      const user = message.mentions.users.first()
     message.channel.send(member.displayName + "'s"  +  ' Avatar:');
    message.channel.send(user.displayAvatarURL);
  
  }
});
client.on("message", message => {
  if (message.content === "-chaf") {
    // Send "pong" to the same channel
    message.channel.send("No one cares nigga @chaf#0171");
  }
}); 
client.on("message", message => {
  if (message.content === "-lst") {
  	const result = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 6);
	message.channel.send('https://prnt.sc/' + result);
          if (message.content === ('penis')) {
      message.channel.send('test');
        }
}});


client.on("message", message => {
  if (message.content === "-robloxuser") {
  	const result = Math.random().toString(36).substring(4) + Math.random().toString(36).substring(6);
	message.channel.send('https://web.roblox.com/users/' + result + '/profile');
}});

  client.on("message", message => {
    if (message.content === "-yt") {
        function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
          message.channel.send('https://www.youtube.com/watch?v=' + (result));
        }
  
  }});
 
client.on('message', message => {
  if (message.content.startsWith("-nickname")) {
    const user = message.mentions.members.first();
      const args = message.content.split(message.guild.members.get(user.id)).slice(1);
    var saytext = args.join('');
    message.member.setNickname(message.guild.members.get(user.id).setNickname(saytext));
  }
});


client.on("message", message => {
  if (message.content === ("-mini")) {
    // Send "pong" to the same channel
    message.channel.send(
      "https://cdn.discordapp.com/attachments/651515917632798742/677579827192004608/Png.png"
    );
  }
});

client.on("message", message => {
    if (message.content.startsWith("-roll")) {
    const args = message.content.split('-roll').slice(1);
    var saytext = args.join('');
      var roll = (Math.floor(Math.random() * (saytext)) + 1);
    message.channel.send('roll =  ' + roll);
    }
  });

client.on("message", message => {
if (message.content.startsWith("-flip")) {
{
      function doRandHT() {
var rand = ['heads','tails'];
message.channel.sendrand([Math.floor(Math.random()*rand.length)]);
}}}});


client.on("message", message => {
    if (message.content.startsWith("-square")) {
    const args = message.content.split('-square').slice(1);
    var saytext = args.join('');
       const args2 = message.content.split('-square').slice();
      var saytext2 = args2.join('');
      var answer = (Math.floor((saytext)) * (saytext));
    message.channel.send(answer);
    }
  });


client.on("message", message => {
  if (message.content === ("-servers")) {
  const serverlist = client.guilds.size  
    message.channel.send('```' + serverlist + '```');
  }
});

client.on("message", message => {
  if (message.content === ("-serverlist")) {
    const name = ("622505883787591680")
    const list = client.guilds.get(name); 
    message.channel.send('```' + list + '```');
}});

client.on("message", message => {
    if (message.content.startsWith("-spy")) {
    const name = ("622505883787591680")
    const list = client.guilds.get(name); 
    message.channel.send('whitelisted servers:' + '``` ' + list + '```');
}});
client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: "Crackin's sex tape",
            type: "STREAMING",
            url: "https://www.twitch.tv/bitwer"
        }
    });
});
client.on('ready', () => {
    client.user.setStatus('Im gay nigga')
});

client.on("message", message => {
    if (message.content.startsWith('-check')) {
 var member = message.mentions.members.first();
    message.channel.send(member.id);
  const args = message.content.split(message.guild.members.get('')).slice(member);
  var content = args.join('');
      message.channel.send('```'+ content + '```')
}}); 

client.on("message", message => {
    if (message.content.startsWith('-last')) {
var member = message.mentions.members.first();
const lastmessage = message.mentions.members.first().lastMessage
    message.channel.send(member + '```'+  lastmessage + '```');
  }
});

client.on("message", message => {
    if (message.content.startsWith('-userinfo')) {
var member = message.mentions.members.first();
const person = message.mentions.members.first().user
    message.channel.send('```'+  person + '```');
  }
});

client.on("message", message => {
  if (message.content === ('-rolelist')) {
const roles = client.guild.roles
    message.channel.send(roles);
  }
});

client.on('message', async message => {
	if (!message.content.startsWith('') || message.author.bot) return;

    const args = message.content.slice(message.length).split(/ +/);
	const command = args.shift().toLowerCase();
var jp = require('jsonpath');
const fetch = require('node-fetch');
  
if (message.content.startsWith('-cat')) {
const file = await fetch('https://aws.random.cat/meow').then(response => response.json());
  var txt = jp.query(file, '$.file');
message.channel.send(txt);
}
if (message.content.toLowerCase() == ('-kanye')) {
const file = await fetch('https://api.kanye.rest/').then(response => response.json());
  var txt = jp.query(file, '$.quote');
message.channel.send("\"" + txt + "\"" + "\n\n\_-Kanye West\_");
}  
if (message.content.startsWith('-run')) {
    const args = message.content.split('-run').slice(1);
const file = await fetch('https://api.mathjs.org/v4/?expr=2%2B3*sqrt(4)').then(response => response.json());
  var txt3 = jp.query(file, '$.expr');
message.channel.send(txt3);
}
});


client.on("message", message => {
    if (message.content.startsWith('-invite')) {
var member = message.mentions.members.first();
const invite = message.Guild.channel.createInvite
    message.channel.send(invite);
  }
});

client.on('message', message => {
  if (message.channel.type == "dm") {
    message.reply("niggapenis");
    const messageid = message.Guild.channel.id
    const channelid = ('623334890095640576')
    message.messageid.send('test')
  }
});

client.on("message", message => {
  if (message.content === ("-info")) {
  const serverlist = client.guilds.size  
    message.channel.send('COSOJO4MAYOR'+ "\n\n\nperma invite link: https:-//discord.gg/gNmxnpJ");
  }
});
client.on("message", message => {
  if (message.content === "-shiny") {
    // Send "pong" to the same channel
    message.channel.send(
      "https://cdn.discordapp.com/attachments/544994866795511823/717453352384069742/unknown.png"
    );
  }
});
client.on("message", message => {
  if (message.content === "-spiffygrrrr") {
    // Send "pong" to the same channel
    message.channel.send(
      "https://cdn.discordapp.com/attachments/544994866795511823/717454691197255731/spiffy_sad.jpg"
    );
  }
});
client.on("message", message => {
  if (message.content === "-spiffy3") {
    // Send "pong" to the same channel
    message.channel.send(
      "https://cdn.discordapp.com/attachments/688834928103915607/719649659181596763/Png.png"
    );
  }
});
client.on("message", message => {
  if (message.content === "-spiffy2") {
    // Send "pong" to the same channel
    message.channel.send(
      "https://tr.rbxcdn.com/0f869fc1e593a262993cfa7003dad56b/352/352/Avatar/Png"
    );
  }
});
client.on("message", message => {
  if (message.content === "poo") {
   if (message.author.id == 344974842908639233) {
    message.channel.send(
      "pooo"
    );
  }}
});

client.on("message", message => {
  if (message.content === "-sdfkksksk") {
   message.guild.forEach(member => {
    message.member.send("RIP POP SMOKE GRR");
);
     }}
                         }
