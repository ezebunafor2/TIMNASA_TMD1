const { timoth } = require("../timnasa/timoth")
//const { getGroupe } = require("../database/groupe")
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const {ajouterOuMettreAJourJid,mettreAJourAction,verifierEtatJid} = require("../data/antilien")
const {atbajouterOuMettreAJourJid,atbverifierEtatJid} = require("../data/antibot")
const { search, download } = require("aptoide-scraper");
const fs = require("fs-extra");
const conf = require("../set");
const { default: axios } = require('axios');
const {ajouterUtilisateurAvecWarnCount , getWarnCountByJID , resetWarnCountByJID} = require('../data/warn')
const s = require("../set")
//const { uploadImageToImgur } = require('../timnasa/imgur');


timoth({ nomCom: 'vcf_10',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '📄', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_please wait..._*`) 

   


  }
);


timoth({ nomCom: 'sendall',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '♻️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_timnasa send all members_*`) 

   


  }
);



timoth({ nomCom: 'channel2',
    desc: 'To check runtime',
    Categorie: 'My Contact',
    reaction: '🐞', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`Support Here My Owner By Follow This Channel Please :https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f`) 

   


  }
);


//timoth({ nomCom: 'luckytgc',
  //  desc: 'To check runtime',
 //   Categorie: 'My Contact',
 //   reaction: '🤭', 
 //   fromMe: 'true', 


  },
//  async (dest, zk, commandeOptions) => {
   // const { ms, arg, repondre } = commandptions;

           //      await repondre(`*Tap Here To Join LUCKY MD Telegram Chatroom* https://t.me/+u3zlb5y6OfxhOTdk`) 

   


  }
);


timoth({ nomCom: 'update',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '⚙️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_Timnasa Tmd is running on its latest vision_*`) 

   


  }
);


timoth({ nomCom: 'vision',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🔎', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_Timnasa Tmd v8&V9_*`) 

   


  }
);


  
timoth({ nomCom: 'timnasawagc',
    desc: 'To check runtime',
    Categorie: 'My Contact',
    reaction: '♻️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*Tap To Join TimnasaTech Md WhatsApp Chartroom Group* https://chat.whatsapp.com/JazGLNBxW5XDVEst3PN4kj`) 

   


  }
)


timoth({ nomCom: 'hackyou',
    desc: 'To check runtime',
    Categorie: 'My Contact',
    reaction: '🐅', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`Injecting Malware",
    " █ 10%",
    " █ █ 20%",
    " █ █ █ 30%",
    " █ █ █ █ 40%",
    " █ █ █ █ █ 50%",
    " █ █ █ █ █ █ 60%",
    " █ █ █ █ █ █ █ 70%",
    " █ █ █ █ █ █ █ █ 80%",
    " █ █ █ █ █ █ █ █ █ 90%",
    " █ █ █ █ █ █ █ █ █ █ 100%",
    "System hijacking on process..\nConnecting to Server error to find 404",
    "Device successfully connected...\nReceiving data...",
    "Data hijacked from device 100% completed\nKilling all evidence, killing all malwares...",
    "HACKING COMPLETED",
    "SENDING LOG DOCUMENTS...",
    "SUCCESSFULLY SENT DATA AND Connection disconnected",
    "BACKLOGS CLEARED",
    "POWERED BY 𝚻𝚰𝚳𝚴𝚫𝐒𝚫-𝚻𝚳𝐃",
    "By TimnasaTech`) 

   


  }
)
