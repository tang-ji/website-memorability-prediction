const puppeteer = require('puppeteer');

takeScreenshot()
    .then(() => {
        console.log("Screenshot taken");
    })
    .catch((err) => {
        console.log("Error occured!");
        console.dir(err);
    });

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
} 

async function takeScreenshot() {
    const browser = await puppeteer.launch({executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"});
    const page = await browser.newPage();
    await page.goto("https://www.tripadvisor.com/", {
        waitUntil: 'networkidle2',
        args: ["--app-shell-host-window-size=1920x1920"]
    });
    await page.setViewport({
        width: 1920,
        height: 1920
    });

    await sleep(1000);
    await page.evaluate(async () => {
        for(var svgs=document.getElementsByTagName("svg"),i=0,len=svgs.length;i<len;i++){var node=document.createElement("defs");node.innerHTML='<filter id="f1"><feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur"/></filter>',svgs[i].appendChild(node)}for(i=0,len=(paths=document.getElementsByTagName("path")).length;i<len;i++)paths[i].style.filter=paths[i].style["-webkit-filter"]="url(#f1)";for(i=0,len=(paths=document.getElementsByTagName("rect")).length;i<len;i++)paths[i].style.filter=paths[i].style["-webkit-filter"]="url(#f1)";for(i=0,len=(paths=document.getElementsByTagName("circle")).length;i<len;i++)paths[i].style.filter=paths[i].style["-webkit-filter"]="url(#f1)";var paths;for(i=0,len=(paths=document.getElementsByTagName("line")).length;i<len;i++)paths[i].style.filter=paths[i].style["-webkit-filter"]="url(#f1)";// !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).blurify=t()}(this,function(){"use strict";function e(t){if(void 0===t&&(t={blur:6,mode:"auto",images:[]}),!(this instanceof e))return new e(t);"number"==typeof t&&(t={blur:t,images:arguments[1],mode:"auto"}),this.options=t,this.blur=t.blur||6,this.mode=t.mode||"css",console.log(t.images),this.$els=1==t.images.nodeType?[t.images]:[].slice.call(t.images),"auto"==this.mode?!function(e,t){var o=document.createElement("div");switch(arguments.length){case 1:return e in o.style;case 2:return o.style[e]=t,!!o.style[e];default:return!1}}("filter","blur(1px)")?this.useCanvasMode():this.useCSSMode():"css"==this.mode?(this.blur=this.blur/2,this.useCSSMode()):this.useCanvasMode()}return e.prototype.useCSSMode=function(){var e=this;console.log(this.$els),this.$els.map(function(t){console.log("el",t),t.style.filter=t.style["-webkit-filter"]="blur("+e.blur+"px)"})},e.prototype.useCanvasMode=function(){var e=this;this.imageType=this.options.imageType||"image/jpeg",function(e){var t=[],o=0,s=function(e){};function i(){++o==e.length&&s(t)}return 0===(e="object"!=typeof e?[e]:e).length&&s(t),e.map(function(e){var o=new Image;o.crossOrigin="*",console.log(e.dataset.src),o.src=e.dataset?e.dataset.src:e.getAttribute("src"),o.onload=i,o.onerror=i,t.push(o)}),{done:function(e){s=arguments[0]||s}}}(this.$els).done(function(t){t.map(function(t,o){e.$els[o].src=e.getDataURL(t)})})},e.prototype.blurify=function(e,t){var o=e.getContext("2d");o.globalAlpha=1/(2*+t);for(var s=-t;s<=t;s+=2)for(var i=-t;i<=t;i+=2)o.drawImage(e,i,s),i>=0&&s>=0&&o.drawImage(e,-(i-1),-(s-1));o.globalAlpha=1},e.prototype.getDataURL=function(e){var t=document.createElement("canvas"),o=t.getContext("2d");return t.width=e.width,t.height=e.height,o.drawImage(e,0,0),this.blurify(t,this.blur),t.toDataURL(this.imageType)},e}),new blurify({images:document.querySelectorAll("img"),blur:30,mode:"css"});
        !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).blurify=t()}(this,function(){"use strict";function e(t){if(void 0===t&&(t={blur:6,mode:"auto",images:[]}),!(this instanceof e))return new e(t);"number"==typeof t&&(t={blur:t,images:arguments[1],mode:"auto"}),this.options=t,this.blur=t.blur||6,this.mode=t.mode||"css",console.log(t.images),this.$els=1==t.images.nodeType?[t.images]:[].slice.call(t.images),"auto"==this.mode?!function(e,t){var o=document.createElement("div");switch(arguments.length){case 1:return e in o.style;case 2:return o.style[e]=t,!!o.style[e];default:return!1}}("filter","blur(1px)")?this.useCanvasMode():this.useCSSMode():"css"==this.mode?(this.blur=this.blur/2,this.useCSSMode()):this.useCanvasMode()}return e.prototype.useCSSMode=function(){var e=this;console.log(this.$els),this.$els.map(function(t){t.style.filter=t.style["-webkit-filter"]="blur("+e.blur+"px)"})},e.prototype.useCanvasMode=function(){var e=this;this.imageType=this.options.imageType||"image/jpeg",function(e){var t=[],o=0,i=function(e){};function s(){++o==e.length&&i(t)}return 0===(e="object"!=typeof e?[e]:e).length&&i(t),e.map(function(e){var o=new Image;o.crossOrigin="*",console.log(e.dataset.src),o.src=e.dataset?e.dataset.src:e.getAttribute("src"),o.onload=s,o.onerror=s,t.push(o)}),{done:function(e){i=arguments[0]||i}}}(this.$els).done(function(t){t.map(function(t,o){e.$els[o].src=e.getDataURL(t)})})},e.prototype.blurify=function(e,t){var o=e.getContext("2d");o.globalAlpha=1/(2*+t);for(var i=-t;i<=t;i+=2)for(var s=-t;s<=t;s+=2)o.drawImage(e,s,i),s>=0&&i>=0&&o.drawImage(e,-(s-1),-(i-1));o.globalAlpha=1},e.prototype.getDataURL=function(e){var t=document.createElement("canvas"),o=t.getContext("2d");return t.width=e.width,t.height=e.height,o.drawImage(e,0,0),this.blurify(t,this.blur),t.toDataURL(this.imageType)},e}),new blurify({images:document.querySelectorAll("img"),blur:30,mode:"css"});
    });

    const buffer = await page.screenshot({
		path: './screenshot6.png'
    });

    await page.close();
    await browser.close();
}
