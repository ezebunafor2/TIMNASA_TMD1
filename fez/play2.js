const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');

// ... Msimbo wako mwingine hapa ...

timoth({
  nomCom: "play2",
  aliases: ["song", "playdoc", "audio", "mp3"],
  categorie: "download",
  reaction: "🎧"
}, async (dest, zk, commandOptions) => {
  const { arg, ms, repondre } = commandOptions;

  if (!arg[0]) {
    return repondre("Tafadhali toa jina la wimbo.");
  }

  const query = arg.join(" ");

  try {
    const searchResults = await ytSearch(query);
    if (!searchResults || !searchResults.videos.length) {
      return repondre('Hakuna wimbo uliopatikana.');
    }

    const firstVideo = searchResults.videos[0];
    const videoUrl = firstVideo.url;

    // Kuanza kupakua wimbo
    repondre("Pakua wimbo unaendelea, tafadhali subiri...");

    const audioStream = ytdl(videoUrl, { filter: 'audioonly', quality: 'highestaudio' });
    const outputFilePath = path.join(__dirname, `${firstVideo.videoId}.mp3`);

    await new Promise((resolve, reject) => {
      ffmpeg(audioStream)
        .audioBitrate(128)
        .save(outputFilePath)
        .on('end', () => resolve())
        .on('error', (err) => reject(new Error("Shida wakati wa kubadilisha faili.")));
    });

    const stats = fs.statSync(outputFilePath);
    if (stats.size > 200 * 1024 * 1024) { // 200 MB limit for WhatsApp
      fs.unlinkSync(outputFilePath); // Futa faili kubwa
      return repondre("Wimbo ni mkubwa sana, tafadhali jaribu wimbo mwingine.");
    }
    
    // Tuma wimbo kwa kutumia sendDocument
    await zk.sendMessage(dest, {
        document: fs.readFileSync(outputFilePath),
        mimetype: 'audio/mpeg',
        fileName: `${firstVideo.title}.mp3`,
        caption: `🎶 *Wimbo umetolewa na:*\n\n*Jina:* ${firstVideo.title}\n*Imechapishwa:* ${firstVideo.ago}\n*Muda:* ${firstVideo.timestamp}\n\n*Tunduma - Tanzania*\n> _Timnasa-TMD_`,
        contextInfo: {
            externalAdReply: {
                title: conf.BOT,
                body: firstVideo.title,
                mediaType: 1,
                sourceUrl: videoUrl,
                thumbnailUrl: firstVideo.thumbnail,
                renderLargerThumbnail: false,
                showAdAttribution: true,
            },
        },
    }, { quoted: ms });

    // Futa faili ya muziki baada ya kutumwa
    fs.unlinkSync(outputFilePath);

  } catch (error) {
    console.error('Kuna hitilafu wakati wa mchakato:', error);
    return repondre(`Upakuaji umeshindwa kwa sababu ya hitilafu: ${error.message || error}`);
  }
});
