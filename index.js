import "babel-polyfill";
const stormCDN = 'https://raw.githubusercontent.com/HelloWorld017/restaurance/master/resources/'
const stormImage = stormCDN + 'spin.png';
const stormBack = stormCDN + 'bg.png';
const stormIsBest = stormCDN + 'storm-best.mp3';
const stormLove = stormCDN + 'storm-love.mp3';
const stormBG = stormCDN + 'hos.png';

const $$ = document.querySelectorAll.bind(document);

const animationContent = [
`@-webkit-keyframes sigong {
	0% {
		transform: rotate(1deg);
	}

	50% {
		transform: rotate(-1deg);
	}

	100% {
		transform: rotate(1deg);
	}
}`,

`@keyframes sigong {
	0% {
		transform: rotate(1deg);
	}

	50% {
		transform: rotate(-1deg);
	}

	100% {
		transform: rotate(1deg);
	}
}`,

`@-webkit-keyframes sigong-text {
	100% {
		opacity: 1;
	}
}`,

`@keyframes sigong-text {
	100% {
		opacity: 1;
	}
}`,
`@-webkit-keyframes sigong-loop {
	0% {
		transform: scale(0.7) translate(50px, -50px) rotate(0deg);
	}

	100% {
		transform: scale(0.7) translate(50px, -50px) rotate(360deg);
	}
}`,

`@keyframes sigong-loop {
	0% {
		transform: scale(0.7) translate(50px, -50px) rotate(0deg);
	}

	100% {
		transform: scale(0.7) translate(50px, -50px) rotate(360deg);
	}
}`];

const stylesheet = document.createElement('style');
document.head.appendChild(stylesheet);
animationContent.forEach((rule) => {
	try{
		stylesheet.sheet.insertRule(rule, stylesheet.sheet.cssRules.length);
	}catch(e){
		//Maybe old ie or because of -webkit-?
	}
});

const stormText = '♚♚히어로즈 오브 더 스☆톰♚♚가입시$$전원 카드팩☜☜뒷면100%증정※' +
'♜월드오브 워크래프트♜펫 무료증정￥ 특정조건 §§디아블로3§§★공허의유산★초상화획득기회@@' +
'즉시이동';
const stormLink = 'https://battle.net/heroes';

const sigong = (x, y, elem, duration) => {
	const elemBox = elem.getBoundingClientRect();

	const xDisp = x - (elemBox.left + elemBox.right) / 2;
	const yDisp = y - (elemBox.top + elemBox.bottom) / 2;

	elem.style.transitionProperty = `transform`;
	elem.style.position = 'relative';
	elem.style.zIndex = 2;
	elem.style.transform =
		`translate(${xDisp}px, ${yDisp}px)` +
		`rotateX(${duration * (Math.random() * 30 + 20)}deg)` +
		`rotateY(${duration * (Math.random() * 30 + 20)}deg)` +
		`rotateZ(${duration * (Math.random() * 30 + 20)}deg)` +
		`scale(0)`;

	elem.style.transitionTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`;
	let length = Math.random() * duration / 3 + duration * 2 / 3 - 2;
	elem.style.transitionDuration = length + 's';
	elem.style.transitionDelay = (Math.random() * (duration - length - 2) + 2) + 's';
};

const restaurance = async ({x, y, width, height}, elems, duration) => {
	if(width === undefined) width = 150;
	if(height === undefined) height = 150;
	if(x === undefined) x = (window.innerWidth - width) / 2;
	if(y === undefined) y = (window.innerHeight - height) / 2;
	if(duration === undefined) duration = 30;
	if(elems === undefined) elems = Array.prototype.filter.call(
		$$('*'), (v) => v.children.length <= 0
	);

	const storm = document.createElement('img');
	const storm2 = document.createElement('img');
	const bigPicture = document.createElement('img');

	const setStorm = (storm) => {
		storm.style.position = 'fixed';
		storm.style.left = `${x}px`;
		storm.style.top = `${y}px`;
		storm.style.width = `${width}px`;
		storm.style.height = `${height}px`;
		storm.style.transition = `transform ${duration - 2}s ease 2s`;
	};

	setStorm(storm);
	setStorm(storm2);

	setTimeout(() => {
		storm.style.transform = `rotate(${duration * 360}deg) scale(5)`;
		storm2.style.transform = `scale(5)`;
	}, 500);

	const body = document.body;
	body.style.animationName = 'sigong';
	body.style.animationDuration = '.2s';
	body.style.animationIterationCount = `${duration / 0.2}`;

	body.appendChild(bigPicture);
	body.appendChild(storm2);
	body.appendChild(storm);

	bigPicture.style.position = 'fixed';
	bigPicture.style.left = '50vw';
	bigPicture.style.top = '50vh';
	bigPicture.style.transform = 'translate(-50%, -50%)';
	bigPicture.style.opacity = 0;

	const centerX = x + width / 2;
	const centerY = y + height / 2;

	storm.src = stormImage;
	storm2.src = stormBack;
	bigPicture.src = stormBG;

	const extraElems = [];

	elems.filter((v) => {
		if(typeof v === 'string'){
			extraElems.push(...$$(v));
			return false;
		}
		return v;
	}).concat(extraElems).forEach((v) => {
		sigong(centerX, centerY, v, duration);
	});

	const textView = document.createElement('div');
	textView.innerText = stormText;
	textView.style.opacity = '0';
	textView.style.position = 'fixed';
	textView.style.top = 'calc(50vh + 100px)';
	textView.style.left = '50vw';
	//Kong-Kong Color
	textView.style.background = '#222222';
	textView.style.color = '#f0f1f2';
	textView.style.transform = 'translate(-50%, -50%)';

	const setSigongText = (textView) => {
		textView.style.animationName = 'sigong-text';
		textView.style.animationDuration = '.4s';
		textView.style.animationDelay = `${duration - 0.4}s`;
		textView.style.animationFillMode = 'forwards';
	};
	setSigongText(textView);
	setSigongText(bigPicture);

	//Uther: Well Met!
	const kidnap = document.createElement('a');
	kidnap.href = stormLink;
	kidnap.innerText = stormLink;

	textView.appendChild(kidnap);

	const sib = document.createElement('audio');
	sib.autoplay = true;
	sib.src = stormIsBest;

	const sil = document.createElement('audio');
	sil.autoplay = true;
	sil.src = stormLove;

	[textView, sib, sil].forEach((v) => document.body.appendChild(v));

	console.log(`${stormText}${stormLink}`);

	setTimeout(() => {
		[storm, storm2].forEach((v) => {
			v.style.transition = `transform 1s ease`;
		});
		storm.style.transform = `rotate(${duration * 360}deg) scale(0.7) translate(50px, -50px)`;
		storm2.style.transform = `rotate(${(duration + 1) * 360}deg) scale(0.7) translate(50px, -50px)`;

		setTimeout(() => {
			storm.style.transform = '';
			storm.style.transition = 'initial';
			storm.style.animationName = 'sigong-loop';
			storm.style.animationDuration = '4s';
			storm.style.animationFillMode = 'forwards';
			storm.style.animationTimingFunction = 'linear';
			storm.style.animationIterationCount = 'infinite';
		}, 1000);
	}, duration * 1000);
};

module.exports = restaurance;
