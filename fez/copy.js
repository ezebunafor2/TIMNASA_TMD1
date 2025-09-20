const {
  timoth
} = require("../timnasa/timoth");
const axios = require("axios");
const ytSearch = require("yt-search");
const conf = require(__dirname + "/../set");
const getContextInfo = (_0x21b2e3 = '', _0x2db8aa = '', _0x55d756 = '') => ({
  'mentionedJid': [_0x2db8aa],
  'forwardingScore': 0x3e7,
  'isForwarded': true,
  'forwardedNewsletterMessageInfo': {
    'newsletterJid': "120363345407274799@newsletter",
    'newsletterName': "╭••➤𝚻𝚰𝚳𝚴𝚫𝐒𝚫_𝚻𝚳𝐃1",
    'serverMessageId': Math.floor(100000 + Math.random() * 900000)
  },
  'externalAdReply': {
    'showAdAttribution': true,
    'title': conf.BOT || "YouTube Downloader",
    'body': _0x21b2e3 || "Media Downloader",
    'thumbnailUrl': _0x55d756 || conf.URL || '',
    'sourceUrl': conf.GURL || '',
    'mediaType': 0x1,
    'renderLargerThumbnail': false
  }
});
async function searchYouTube(_0x571dc3) {
  try {
    const _0x18f5b3 = await ytSearch(_0x571dc3);
    if (!_0x18f5b3?.["videos"]?.["length"]) {
      throw new Error("No video found for the specified query.");
    }
    return _0x18f5b3.videos[0];
  } catch (_0x286d8f) {
    console.error("YouTube search error:", _0x286d8f);
    throw new Error("YouTube search failed: " + _0x286d8f.message);
  }
}
async function downloadFromApis(_0x114155) {
  for (const _0x508750 of _0x114155) {
    try {
      const _0x4498f1 = await axios.get(_0x508750, {
        'timeout': 0x3a98
      });
      if (_0x4498f1.data?.["success"]) {
        return _0x4498f1.data;
      }
    } catch (_0x2f9929) {
      console.warn("API " + _0x508750 + " failed:", _0x2f9929.message);
      continue;
    }
  }
  throw new Error("Failed to retrieve download URL from all sources.");
}
timoth({
  'nomCom': "play",
  'aliases': ["song", "playdoc", "audio", "mp3"],
  'categorie': "download",
  'reaction': '🎸'
}, async (_0x51fb91, _0x25e8bc, _0x3dfaa9) => {
  const {
    arg: _0xca13eb,
    ms: _0x56078c,
    userJid: _0x4b1c5c
  } = _0x3dfaa9;
  try {
    if (!_0xca13eb[0]) {
      return repondre(_0x25e8bc, _0x51fb91, _0x56078c, "Please provide a song name.");
    }
    const _0x18285c = _0xca13eb.join(" ");
    const _0x10d512 = await searchYouTube(_0x18285c);
    await _0x25e8bc.sendMessage(_0x51fb91, {
      'text': "> *1[don't do risk just wait]*\n> *2YouTube channel download*\n> *3wait are second to download you audio*\n> •\n> *4repo url github.com/Next5x*",
      'contextInfo': getContextInfo("Downloading", _0x4b1c5c, _0x10d512.thumbnail)
    }, {
      'quoted': _0x56078c
    });
    const _0x486d62 = ["https://api.davidcyriltech.my.id/download/ytmp3?url=" + encodeURIComponent(_0x10d512.url), "https://www.dark-yasiya-api.site/download/ytmp3?url=" + encodeURIComponent(_0x10d512.url), "https://api.giftedtech.web.id/api/download/dlmp3?url=" + encodeURIComponent(_0x10d512.url) + "&apikey=gifted-md", "https://api.dreaded.site/api/ytdl/audio?url=" + encodeURIComponent(_0x10d512.url)];
    const _0xfa48e3 = await downloadFromApis(_0x486d62);
    const {
      download_url: _0x2b908c,
      title: _0x44991e
    } = _0xfa48e3.result;
    const _0x2481f0 = [{
      'audio': {
        'url': _0x2b908c
      },
      'mimetype': "audio/mp4",
      'caption': "🎵 *" + _0x44991e + '*',
      'contextInfo': getContextInfo(_0x44991e, _0x4b1c5c, _0x10d512.thumbnail)
    }];
    for (const _0x26b281 of _0x2481f0) {
      await _0x25e8bc.sendMessage(_0x51fb91, _0x26b281, {
        'quoted': _0x56078c
      });
    }
  } catch (_0x1b00b2) {
    console.error("Audio download error:", _0x1b00b2);
    repondre(_0x25e8bc, _0x51fb91, _0x56078c, "Download failed: " + _0x1b00b2.message);
  }
});
timoth({
  'nomCom': "video",
  'aliases': ["videodoc", "film", "mp4"],
  'categorie': "download",
  'reaction': '🎬'
}, async (_0x996bcb, _0x196609, _0x30a173) => {
  const {
    arg: _0x4223a7,
    ms: _0x59afa6,
    userJid: _0x387818
  } = _0x30a173;
  try {
    if (!_0x4223a7[0]) {
      return repondre(_0x196609, _0x996bcb, _0x59afa6, "Please provide a video name.");
    }
    const _0xb29864 = _0x4223a7.join(" ");
    const _0x104ff4 = await searchYouTube(_0xb29864);
    await _0x196609.sendMessage(_0x996bcb, {
      'text': " *1[don't do risk just wait]*\n> *2YouTube channel download*\n> *3wait are second to download you video*\n> •\n> *4repo url github.com/Next5x*",
      'contextInfo': getContextInfo("Downloading", _0x387818, _0x104ff4.thumbnail)
    }, {
      'quoted': _0x59afa6
    });
    const _0x20c749 = ["https://api.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0x104ff4.url), "https://www.dark-yasiya-api.site/download/ytmp4?url=" + encodeURIComponent(_0x104ff4.url), "https://api.giftedtech.web.id/api/download/dlmp4?url=" + encodeURIComponent(_0x104ff4.url) + "&apikey=gifted-md", "https://api.dreaded.site/api/ytdl/video?url=" + encodeURIComponent(_0x104ff4.url)];
    const _0x15892f = await downloadFromApis(_0x20c749);
    const {
      download_url: _0x1ac7b4,
      title: _0x1a1867
    } = _0x15892f.result;
    const _0x22b1fb = [{
      'video': {
        'url': _0x1ac7b4
      },
      'mimetype': "video/mp4",
      'caption': "🎥 *" + _0x1a1867 + '*',
      'contextInfo': getContextInfo(_0x1a1867, _0x387818, _0x104ff4.thumbnail)
    }];
    for (const _0x41f029 of _0x22b1fb) {
      await _0x196609.sendMessage(_0x996bcb, _0x41f029, {
        'quoted': _0x59afa6
      });
    }
  } catch (_0x133864) {
    console.error("Video download error:", _0x133864);
    repondre(_0x196609, _0x996bcb, _0x59afa6, "Download failed: " + _0x133864.message);
  }
});
