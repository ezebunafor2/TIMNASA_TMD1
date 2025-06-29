const {
  timoth
} = require(__dirname + '/../timnasa/timoth');
const os = require('os');
const moment = require('moment-timezone');
const s = require(__dirname + '/../set');
const more = String.fromCharCode(0x200e);
const readmore = more.repeat(0xfa1);
timoth({
  'nomCom': 'menu',
  'categorie': "Menu"
}, async (_0x2dc8f4, _0x3ab269, _0x358c83) => {
  let {
    ms: _0x4616e5,
    repondre: _0x3defe0,
    prefixe: _0x51d70c,
    nomAuteurMessage: _0x1d7557,
    mybotpic: _0x801c4
  } = _0x358c83;
  let {
    cm: _0x24c5f6
  } = require(__dirname + "/../timnasa//timoth");
  var _0x59747f = {};
  var _0x39afc8 = 'public';
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0x39afc8 = "private";
  }
  _0x24c5f6.map(async (_0x38c000, _0x7c382e) => {
    if (!_0x59747f[_0x38c000.categorie]) {
      _0x59747f[_0x38c000.categorie] = [];
    }
    _0x59747f[_0x38c000.categorie].push(_0x38c000.nomCom);
  });
  moment.tz.setDefault('Etc/GMT');
  const _0x45bd1c = moment().format("DD/MM/YYYY");
  let _0x12cada = "\n\n╭▱▰「 *" + s.BOT + "* 」▱▰❂\n\n┃⊛╭▰▱▰▱▰▱▰▱➻\n\n┃⊛│◆ 𝙾𝚠𝚗𝚎𝚛 : " + s.OWNER_NAME + "\n\n┃⊛│◆ 𝙿𝚛𝚎𝚏𝚒𝚡 : [ " + s.PREFIXE + " ] \n\n┃⊛│◆ 𝙼𝚘𝚍𝚎 : *" + _0x39afc8 + "*\n\n┃⊛│◆ 𝚁𝚊𝚖  : 𝟴/𝟭𝟯𝟮 𝗚𝗕\n\n┃⊛│◆ 𝙳𝚊𝚝𝚎  : *" + _0x45bd1c + "* \n\n┃⊛│◆ 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : " + os.platform() + "\n\n┃⊛│◆ 𝙲𝚛𝚎𝚊𝚝𝚘𝚛 : timnasa\n\n┃⊛│◆ 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜 : " + _0x24c5f6.length + "\n\n┃⊛│◆ 𝚃𝚑𝚎𝚖𝚎 : timnasa\n\n┃⊛└▰▱▰▱▰▱▰▱➻\n\n╰▱▰▱▰▱▰⊷▱▰▱▰▱❂\n" + readmore;
  let _0x410c19 = "timnasa 𝙲𝚖𝚍";
  for (const _0x136fb9 in _0x59747f) {
    _0x410c19 += "\n\n╭▱▱▱✺ *" + _0x136fb9 + "* ✺▰▰▰⊷ \n\n┊│࿌┌▰▱▰⊷•∞•⊷▱▰▱⊛\n\n┊│࿌┊\n\n┌┤࿌┊ ";
    for (const _0xccc6b3 of _0x59747f[_0x136fb9]) {
      _0x410c19 += "          \n\n┊│࿌┊࿊  *" + _0xccc6b3 + '*';
    }
    _0x410c19 += "\n\n┊│࿌└▰▱▰⊷•∞•⊷▱▰▱⊛  \n\n╰▰▰▰═⊷✺•∞•✺⊷═▱▱▱⊷";
  }
  _0x410c19 += "\n\n> Made By timnasa\n\n\n";
  try {
    await _0x3ab269.sendMessage(_0x2dc8f4, {
      'image': {
        'url': "https://files.catbox.moe/6bmuh8.jpg"
      },
      'caption': _0x12cada + _0x410c19,
      'contextInfo': {
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363332512801418@newsletter",
          'newsletterName': "ᴛɪᴍɴᴀsᴀ ᴛᴍᴅ",
          'serverMessageId': -0x1
        },
        'forwardingScore': 0x3e7,
        'externalAdReply': {
          'title': "☢️𝚻𝚰𝚳𝚴𝚫𝐒𝚫-𝚻𝚳𝐃☢️",
          'body': "🧃Command List",
          'thumbnailUrl': "https://files.catbox.moe/xxq3w7.jpg",
          'sourceUrl': "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31",
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    });
    await _0x3ab269.sendMessage(_0x2dc8f4, {
      'audio': {
        'url': "https://files.catbox.moe/ocyosy.mp3"
      },
      'mimetype': 'audio/mp4',
      'ptt': true,
      'caption': "TIMNASA TMD SONG",
      'contextInfo': {
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363332512801418@newsletter",
          'newsletterName': "timoth",
          'serverMessageId': -0x1
        },
        'forwardingScore': 0x3e7,
        'externalAdReply': {
          'body': "𝚃𝙸𝙼𝙽𝙰𝚂𝙰-𝙼𝙴𝙽𝚄",
          'thumbnailUrl': "https://files.catbox.moe/6bmuh8.jpg",
          'sourceUrl': "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31",
          'rendersmallThumbnail': false
        }
      }
    });
  } catch (_0x1e1b3c) {
    const {
      timoth: _0x72b381
    } = require(__dirname + "/../timnasa/timoth");
    const _0x7cdd4d = require('os');
    const _0x41523e = require("moment-timezone");
    const _0x3730ec = require(__dirname + "/../set");
    const _0x59f59b = String.fromCharCode(0x200e);
    const _0x799099 = _0x59f59b.repeat(0xfa1);
    _0x72b381({
      'nomCom': 'menu2',
      'categorie': 'Menu'
    }, async (_0x137bf9, _0x31af17, _0x4187e6) => {
      let {
        ms: _0x23b8c3,
        repondre: _0x449ff5,
        prefixe: _0x4a0fd6,
        nomAuteurMessage: _0x5b8a4c,
        mybotpic: _0x1b835e
      } = _0x4187e6;
      let {
        cm: _0x30c9c0
      } = require(__dirname + "/../timnasa//timoth");
      var _0xd44133 = {};
      var _0x40f96f = "public";
      if (_0x3730ec.MODE.toLocaleLowerCase() != "yes") {
        _0x40f96f = "private";
      }
      _0x30c9c0.map(async (_0x1897f3, _0xafd142) => {
        if (!_0xd44133[_0x1897f3.categorie]) {
          _0xd44133[_0x1897f3.categorie] = [];
        }
        _0xd44133[_0x1897f3.categorie].push(_0x1897f3.nomCom);
      });
      _0x41523e.tz.setDefault("Etc/GMT");
      const _0x286984 = _0x41523e().format("DD/MM/YYYY");
      let _0x271acf = "\n\n╭▱▰「 *" + _0x3730ec.BOT + "* 」▱▰❂\n\n┃⊛╭▰▱▰▱▰▱▰▱➻\n\n┃⊛│◆ 𝙾𝚠𝚗𝚎𝚛 : " + _0x3730ec.OWNER_NAME + "\n\n┃⊛│◆ 𝙿𝚛𝚎𝚏𝚒𝚡 : [ " + _0x3730ec.PREFIXE + " ] \n\n┃⊛│◆ 𝙼𝚘𝚍𝚎 : *" + _0x40f96f + "*\n\n┃⊛│◆ 𝚁𝚊𝚖  : 𝟴/𝟭𝟯𝟮 𝗚𝗕\n\n┃⊛│◆ 𝙳𝚊𝚝𝚎  : *" + _0x286984 + "* \n\n┃⊛│◆ 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : " + _0x7cdd4d.platform() + "\n\n┃⊛│◆ 𝙲𝚛𝚎𝚊𝚝𝚘𝚛 : timnasa\n\n┃⊛│◆ 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜 : " + _0x30c9c0.length + "\n\n┃⊛│◆ 𝚃𝚑𝚎𝚖𝚎 : timnasa\n\n┃⊛└▰▱▰▱▰▱▰▱➻\n\n╰▱▰▱▰▱▰⊷▱▰▱▰▱❂\n" + _0x799099;
      let _0x3c69e7 = "timnasa 𝙲𝚖𝚍";
      for (const _0x34d8d1 in _0xd44133) {
        _0x3c69e7 += "\n\n╭▱▱▱✺ *" + _0x34d8d1 + "* ✺▰▰▰⊷ \n\n┊│࿌┌▰▱▰⊷•∞•⊷▱▰▱⊛\n\n┊│࿌┊\n\n┌┤࿌┊ ";
        for (const _0x45c9dc of _0xd44133[_0x34d8d1]) {
          _0x3c69e7 += "          \n\n┊│࿌┊࿊  *" + _0x45c9dc + '*';
        }
        _0x3c69e7 += "\n\n┊│࿌└▰▱▰⊷•∞•⊷▱▰▱⊛  \n\n╰▰▰▰═⊷✺•∞•✺⊷═▱▱▱⊷";
      }
      _0x3c69e7 += "\n\n> Made By timnasa\n\n\n";
      try {
        await _0x31af17.sendMessage(_0x137bf9, {
          'image': {
            'url': "https://files.catbox.moe/xxq3w7.jpg"
          },
          'caption': _0x271acf + _0x3c69e7,
          'contextInfo': {
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': "120363332512801418@newsletter",
              'newsletterName': "ᴛɪᴍɴᴀsᴀ ᴛᴍᴅ",
              'serverMessageId': -0x1
            },
            'forwardingScore': 0x3e7,
            'externalAdReply': {
              'title': "☢️𝚻𝚰𝚳𝚴𝚫𝐒𝚫-𝚻𝚳𝐃☢️",
              'body': "🧃Command List",
              'thumbnailUrl': 'https://files.catbox.moe/6bmuh8.jpg',
              'sourceUrl': "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31",
              'mediaType': 0x1,
              'renderLargerThumbnail': true
            }
          }
        });
        await _0x31af17.sendMessage(_0x137bf9, {
          'audio': {
            'url': "https://files.catbox.moe/i8ks0j.mp3"
          },
          'mimetype': "audio/mp4",
          'ptt': true,
          'caption': "TIMNASA TMD SONG",
          'contextInfo': {
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': "120363332512801418@newsletter",
              'newsletterName': "𝚻𝚰𝚳𝚴𝚫𝐒𝚫-𝚻𝚳𝐃",
              'serverMessageId': -0x1
            },
            'forwardingScore': 0x3e7,
            'externalAdReply': {
              'body': "𝚃𝙸𝙼𝙽𝙰𝚂𝙰-𝙼𝙴𝙽𝚄",
              'thumbnailUrl': 'https://files.catbox.moe/xxq3w7.jpg',
              'sourceUrl': "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31",
              'rendersmallThumbnail': false
            }
          }
        });
      } catch (_0xf54cc) {
        console.log("🥵🥵 Menu erreur " + _0xf54cc);
        _0x449ff5("🥵🥵 Menu erreur " + _0xf54cc);
      }
    });
    console.log("🥵🥵 Menu erreur " + _0x1e1b3c);
    _0x3defe0("🥵🥵 Menu erreur " + _0x1e1b3c);
  }
});
