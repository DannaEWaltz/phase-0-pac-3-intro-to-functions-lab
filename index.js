function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string);
    console.log(string.toUpperCase());
    console.log(string === string.toUpperCase());

}
function logWhisper(string) {
    console.log(string);
    console.log(string.toLowerCase());
    console.log(string === string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    let result;
    if (string === string.toLowerCase()) {
        result = "I can\'t hear you!";
    } else if (string === string.toUpperCase()) {
        result = "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        result = "I would love to!";
    }
    return result;
    
}

console.log(sayHiToHeadphonedRoommate("hello"));
console.log(sayHiToHeadphonedRoommate("HELLO"));
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));


