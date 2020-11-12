const fs = require('fs');
const url = require('url');
const http = require('http');
const https = require('https');
const puppeteer = require('puppeteer');
const crypto = require('crypto');

async function run(){
	http.createServer(async function (req, res) {
		await downloadImages(req.url);
		await res.writeHead(200, {"Content-Type": "text/plain"});
		await res.end("All images saved.");
	}).listen(8889);
}

const download = (url, destination) => new Promise((resolve, reject) => {
	var buffer = true;
	try {
		const file = fs.createWriteStream(destination);

		https.get(url, response => {
			response.pipe(file);

			file.on('finish', () => {
				file.close(resolve(true));
			});
		}).on('error', error => {
			fs.unlink(destination);

			reject(error.message);
		});
	} catch (err) {
		console.log(err);
	}
	return buffer;
	
});

async function downloadImages(params) {
	if (!params) return 0;
	let url = params.slice(6);
	try {
		const browser = await puppeteer.launch({
			executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
			headless: false,
		});
		const page = await browser.newPage();
		let result;
		try {
			await page.goto(String(url));
		} catch (err) {}
		// const images = await page.evaluate(() => Array.from(document.images, e => e.src));
		const images = await page.evaluate(() => Array.from(document.images, function(e) {
			try {
				if (e.width >= 300 && e.height >= 300) return e.src;
			} catch (err) {
				console.log(err);
			}
			return null;
		}));
		for (let i = images.length-1; i >= 0; i--) {
			if (images[i]) {
				result = await download(images[i], "Socials/" + crypto.createHash('md5').update(images[i]).digest('hex') + `.png`);
				break;
			}
		}
		await browser.close();
	} catch (err) {
		console.log(err);
	}

}

run();
