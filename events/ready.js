const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    ` [${moment().format(
      "YYYY-MM-DD HH:mm:ss"
    )}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    ` [${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("dnd");

  client.user.setActivity("👨‍🎓 GamerWolf Test Bots", {
    type: "PLAYING"
  
  });
  console.log(
    ` [${moment().format("YYYY-MM-DD HH:mm:ss")}] Oyun ismi ayarlandı!`
  );

};
