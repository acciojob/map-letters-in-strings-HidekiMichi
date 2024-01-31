//your JS code here. If required.
function mapLetters(letter) {
	let obj = {};
    let map = new Map();
    for (let i = 0; i < letter.length; i++) {
        if (map.has(letter[i])) {
            map.get(letter[i]).push(i);
        } else {
            map.set(letter[i], [i]);
        }
    }
    for (let key of map.keys()) {
        obj[key] = map.get(key);
    }
    return obj;
}

console.log(mapLetters("dodo"));
console.log(mapLetters("froggy"));
console.log(mapLetters("grapes"));

