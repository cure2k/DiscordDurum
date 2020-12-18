# Discord Animasyonlu Durum

## İndirme Aşaması
```bash
git clone https://github.com/cure2k/DiscordDurum.git
cd DiscordDurum
sudo npm install
```

## Kurulum
Kurulumu yapmanız için gereken 2 temel adım var. Öncelikle UserToken'i almanız gerek bunun için [Discord Web Arayüzü](https://discord.com/channels/@me) üzerinden "F11" tuşundan konsolu açmanız gerek, daha sonrasında alttaki komutu yazmanız size Token'i verecektir.
```javascript
var req=webpackJsonp.push([[],{extra_id:(e,r,t)=>e.exports=t},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let r=req.c[e].exports;if(r&&r.__esModule&&r.default)for(let e in r.default)"getToken"===e&&console.log(r.default.getToken())}
```
Token'i aldıktan sonra, "config.json" üzerinden "TOKEN" alanını doldurun.

Animasyon tarafındaki her {} alan 1 framedir ve Timeout ise her frame arasındaki geçiş aralığıdır. Bunları kendinize göre ayarlamanız yeterlidir.

Emoji ID(Sayı Değerleri) ile Emoji İsmi(:emoji:) gibi değerlerdir. Bunları almanız için "Google" üzerinden arama yapmanız yeterlidir.
```json
{
	"token": "[USER TOKEN / NOT BOT TOKEN]",
	"animation": [
		{
			"text": "T",
			"emojiID": "000000000000000000",
			"emojiName": "emojiName",
			"timeout": 100
		},
		{
			"text": "TE",
			"emojiID": "000000000000000000",
			"emojiName": "emojiName",
			"timeout": 100
		},
		{
			"text": "TES",
			"emojiID": "000000000000000000",
			"emojiName": "emojiName",
			"timeout": 100
		},
		{
			"text": "TEST",
			"emojiID": "000000000000000000",
			"emojiName": "emojiName",
			"timeout": 100
		},
	]
}
```

## Başlatmak
Devam eden süreçte Terminal üzerinden aşşağıdaki komutu yazmanız, botu başlatmanız için yeterlidir.

```bash
node index.js
```

## Lisans
[MIT](https://choosealicense.com/licenses/mit/)
