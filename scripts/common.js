function checkCookie(name) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split("; ");
    return cookies.find((c) => c.startsWith(`${name}=`)) != undefined;
}

function getCookie(name) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split("; ");
    return cookies.find((c) => c.startsWith(`${name}=`))?.split("=")[1];
}

function setCookie(name, value) {
    document.cookie = `${name}=${value}`;
}

function getRandomNumber(min, max) {
    return (max - min) * Math.random() + min;
}
