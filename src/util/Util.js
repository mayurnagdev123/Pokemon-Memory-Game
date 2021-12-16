//export const ALL_ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const ALL_ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const map = new Map();
map.set('A', 'arbok.png');
map.set('B', 'bulbasaur.png');
map.set('C', 'charmander.png');
map.set('D', 'squirtle.png');
map.set('E', 'pikachu.png');
map.set('F', 'mewto.png');
map.set('G', 'pidgeotto.png');
map.set('H', 'laprus.png');
map.set('I', 'psyduck.png');
map.set('J', 'scyther.png');
map.set('K', 'gengar.png');
map.set('L', 'hitmonchan.png');

export function getImageBasedOnKey(alphabet) {

    return map.get(alphabet);

}
export function createRandomString(len, callback) {
    //len should be an even number
    var strOfHalflength = ALL_ALPHABETS.substr(0, len / 2);
    var strOfDesiredLength = strOfHalflength + strOfHalflength;
    var randomStr = "";
    for (var i = 0; i < len; i++) {
        var random = Math.floor(Math.random() * strOfDesiredLength.length);
        var ch = strOfDesiredLength.charAt(random);
        randomStr += ch;
        strOfDesiredLength = strOfDesiredLength.substring(0, random) + strOfDesiredLength.substr(random + 1);
    }
    callback(randomStr);
}

export function formatTime(time) {
    return String(time).padStart(2, '0');
}


