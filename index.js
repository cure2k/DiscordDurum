const request = require("request");
const config = require("./config.json");
const STATUS_URL = "https://discordapp.com/api/v8/users/@me/settings";

// Cure2K

async function loop() {
	for (let anim of config.animation) {
		await doRequest(anim.text, anim.emojiID, anim.emojiName).catch(console.error);
		await new Promise(p => setTimeout(p, anim.timeout));
	}

	loop();
}
console.log("Animasyonlu Durum Aktif. | Cure2K");
loop();

function doRequest(text, emojiID = null, emojiName = null) {
	return new Promise((resolve, reject) => {
		request({
			method: "PATCH",
			uri: STATUS_URL,
			headers: {
				Authorization: config.token
			},
			json: {
				custom_status: {
					text: text,
					emoji_id: emojiID,
					emoji_name: emojiName
				}
			}
		}, (err, res, body) => {
			if (err) {
				reject(err);
				return;
			}

			if (res.statusCode !== 200) {
				reject(new Error("Statü Kodu Hatalı: " + res.statusCode));
				return;
			}

			resolve(true);
		});
	});
}
