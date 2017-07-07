import "babel-polyfill";
import stormImage from "./storm-image";

const $$ = document.querySelectorAll.bind(document);

const stylesheet = document.createElement('style');
const animationContent = [
`@-webkit-keyframes sigong {
	0% {
		transform: rotate(10deg);
	}

	50% {
		transform: rotate(-10deg);
	}

	100% {
		transform: rotate(10deg);
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
}`];

const stormText = '♚♚히어로즈 오브 더 스☆톰♚♚가입시$$전원 카드팩☜☜뒷면100%증정※' +
'♜월드오브 워크래프트♜펫 무료증정￥ 특정조건 §§디아블로3§§★공허의유산★초상화획득기회@@' +
'즉시이동';
const stormLink = 'https://battle.net/heroes';

document.head.appendChild(stylesheet);
animationContent.forEach((rule) => {
	try{
		stylesheet.sheet.insertRule(rule, stylesheet.sheet.cssRules.length);
	}catch(e){
		//Maybe old ie or because of -webkit-?
	}
});

const sigong = (x, y, elem, duration) => {
	const elemBox = elem.getBoundingClientRect();

	const xDisp = x - (elemBox.left + elemBox.right) / 2;
	const yDisp = y - (elemBox.top + elemBox.bottom) / 2;

	elem.style.transition = `transform ${duration - 2}s ease 2s`;
	elem.style.transform =
		`translate(${xDisp}px, ${yDisp}px) rotate(${duration * 180}deg) scale(0)`;
};

const restaurance = async ({x, y, width, height} = {}, elems, duration) => {
	if(width === undefined) width = 150;
	if(height === undefined) height = 150;
	if(x === undefined) x = (window.innerWidth - width) / 2;
	if(y === undefined) y = (window.innerHeight - height) / 2;
	if(duration === undefined) duration = 30;
	if(elems === undefined) elems = Array.prototype.filter.call(
		$$('*'), (v) => v.children.length <= 0
	);

	const storm = document.createElement('img');
	storm.style.position = 'fixed';
	storm.style.left = `${x}px`;
	storm.style.top = `${y}px`;
	storm.style.width = `${width}px`;
	storm.style.height = `${height}px`;
	storm.style.transition = `transform ${duration - 2}s ease 2s`;
	setTimeout(() => {
		storm.style.transform = `rotate(${duration * 360}deg)`;
	}, 500);

	const body = document.body;
	body.style.animationName = 'sigong';
	body.style.animationDuration = '.2s';
	body.style.animationIterationCount = `${duration / 0.2}`;

	body.appendChild(storm);

	const centerX = x + width / 2;
	const centerY = y + height / 2;

	await (() => new Promise((resolve) => {
		storm.onload = () => {
			resolve();
		};

		storm.src = stormImage;
	}))();

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
	textView.style.top = '50vh';
	textView.style.left = '50vw';
	//Kong-Kong Color
	textView.style.background = '#222222';
	textView.style.color = '#f0f1f2';
	textView.style.transform = 'translate(-50%, -50%)';
	textView.style.animationName = 'sigong-text';
	textView.style.animationDuration = '.4s';
	textView.style.animationDelay = `${duration - 0.4}s`;
	textView.style.animationFillMode = 'forwards';

	//Uther: Well Met!
	const kidnap = document.createElement('a');
	kidnap.href = stormLink;
	kidnap.innerText = stormLink;

	textView.appendChild(kidnap);

	body.appendChild(textView);
	console.log(`${stormText}${stormLink}`);
};

module.exports = restaurance;
