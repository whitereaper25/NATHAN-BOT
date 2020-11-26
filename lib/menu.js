const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/TierGans

Instagram: https://instagram.com/muh.tier_sinyo_77788896

Best regards, TierKun.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
❉──────────────────❉
  Hi, ${pushname}! 👋️
Wellcome To NATHANBOT
❉──────────────────❉
╔══✪〘 INFORMATION 〙✪══
║
╠➥ NATHAN BOT
╠➥ 2.0
╠➥ CREATOR : TierGanz
╠➥ wa.me/6282134580805
║
╠══✪〘 CREATOR 〙✪══
║
╠❥ *${prefix}sticker*
╠❥ *${prefix}stickergif*
╠❥ *${prefix}stickergiphy*
╠❥ *${prefix}meme*
╠❥ *${prefix}quotemaker*
╠❥ *${prefix}nulis*
║
╠══✪〘 ISLAMIC 〙✪══
║
╠❥ *${prefix}infosurah*
╠❥ *${prefix}surah*
╠❥ *${prefix}tafsir*
╠❥ *${prefix}ALaudio*
╠❥ *${prefix}jsolat*
║
╠══✪〘 18+ 〙✪══
║
╠❥ *${prefix}nekopoi*
║
╠══✪〘 FUNMENU 〙✪══
║
╠❥ *${prefix}simisimi*
╠❥ *${prefix}katakasar*
╠❥*${prefix}klasmen*
║
╠══✪〘 DOWNLOAD 〙✪══
║
╠❥ *${prefix}instagram*
╠❥ *${prefix}ytmp3*
╠❥ *${prefix}ytmp4*
╠❥ *${prefix}facebook*
║
╠══✪〘 PRIMBON 〙✪══
║
╠❥ *${prefix}artinama*
╠❥ *${prefix}cekjodoh*
║
╠══✪〘 SEARCH 〙✪══
║
╠❥ *${prefix}images*
╠❥ *${prefix}sreddit*
╠❥ *${prefix}resep*
╠❥ *${prefix}stalkig*
╠❥ *${prefix}wiki*
╠❥ *${prefix}cuaca*
╠❥ *${prefix}chord*
╠❥ *${prefix}lirik*
╠❥ *${prefix}ss*
╠❥ *${prefix}play*
╠❥ *${prefix}movie*
╠❥ *${prefix}whatanime*
║
╠══✪〘 RANDOM 〙✪══
║
╠❥ *${prefix}fakta*
╠❥ *${prefix}pantun*
╠❥ *${prefix}katabijak*
╠❥ *${prefix}quote*
║
╠══✪〘 IMAGES 〙✪══
║
╠❥ *${prefix}anime*
╠❥ *${prefix}kpop*
╠❥ *${prefix}memes*
║
╠══✪〘 LAIN-LAIN  〙✪══
║
╠❥ *${prefix}tts*
╠❥ *${prefix}translate*
╠❥ *${prefix}resi*
╠❥ *${prefix}covidindo*
╠❥ *${prefix}ceklokasi*
╠❥ *${prefix}shortlink*
╠❥ *${prefix}bapakfont*
║
╠══✪〘TENTANG BOT〙✪══
║
╠❥ *${prefix}tnc*
╠❥ *${prefix}donasi*
╠❥ *${prefix}botstat*
╠❥ *${prefix}ownerbot*
╠❥ *${prefix}join*
║
╠══✪〘 OWNER 〙✪══
║
╠❥ *${prefix}ban* - banned
╠❥ *${prefix}bc* - promosi
╠❥ *${prefix}leaveall* - keluar semua grup
╠❥ *${prefix}clearall* - hapus semua chat
╠❥ *${prefix}reset*
║
╚═〘 NATHAN BOT〙
Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `

╔══✪〘 ADMIN 〙✪══
║
╠❥ *${prefix}add*
╠❥ *${prefix}kick* @tag
╠❥ *${prefix}promote* @tag
╠❥ *${prefix}demote* @tag
╠❥ *${prefix}tagall*
╠❥ *${prefix}del*
║
╠══✪〘 OWNER GRUP 〙✪══
║
╠❥ *${prefix}kickall*
╠ *Owner Group adalah pembuat grup.*
╚═〘 NATHAN BOT〙 
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

http://saweria.co/SinchanBot

*[Ovo/GoPay/DANA/Pulsa]* : 082134580805

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -TierKun`
}
