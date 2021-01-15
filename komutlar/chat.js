const Discord = require("discord.js");

const get = require("request")

exports.run = async (client, message, args) => {

let soru = args.join(' ');

if(!soru) return message.reply('Hey birşeyler yaz!')

let encodedsoru = encodeURI(soru)

get(`https://cb.totallyusefulapi.ml/${encodedsoru}`, async function (err, resp, body) { 

body = JSON.parse(body); 

if(err) return message.channel.send('Yapay zeka sistemi geçici olarak kapılır.')

message.channel.send(body.reply)

    }) 

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["sor"],

  permLevel: 0

};

exports.help = {

  name: "sor",

  description: "bota soru sorarsınız",

  usage: "sor"

};