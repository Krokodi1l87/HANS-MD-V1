const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');

zokou({ 
  nomCom: 'ping',
  desc: 'To check ping with random values and photo',
  Categorie: 'General',
  reaction: '🚀', 
  fromMe: 'true', 
},
async (dest, zk, commandeOptions) => {
  const { ms, arg, repondre } = commandeOptions;
  const start = new Date().getTime();
  
  // Generate a random ping time between 50ms and 500ms for fun
  const randomPing = Math.floor(Math.random() * (500 - 50 + 1)) + 50;

  // Owner's photo URL (replace this with the actual URL or path to the photo)
  const ownerPhotoUrl = "https://example.com/owner-photo.jpg";  // Replace with the actual image URL

  // Send the random ping time with a photo
  await repondre(`
    *ʜɪ ✌️ ʜᴀɴs-ᴍᴅ-sᴘᴇᴇᴅ-ɪs*\n
    *Ping*: \`\`\`${randomPing} ms\`\`\`
    *ᴏᴡɴᴇʀ'𝑠 ᴘʜᴏᴛᴏ:*\n
    ![Owner's photo](${ownerPhotoUrl})
  `);
  
  const end = new Date().getTime();
  await zokou.sendMessage('*Pong!*\n ```' + (end - start) + '``` *ms*');
}
);