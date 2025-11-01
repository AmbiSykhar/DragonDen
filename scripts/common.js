function getRandomNumber(min, max) {
    return (max - min) * Math.random() + min;
}

if (localStorage.lightning === undefined) localStorage.lightning = false; // default false
if (localStorage.rain === undefined) localStorage.rain = true; // default true

if (document.getElementById("navbar") !== null) {
    fetch("/assets/templates/navbar.html")
        .then(data => { return data.text(); })
        .then(data => { document.getElementById("navbar").innerHTML = data; });
}
if (document.getElementById("settings") !== null) {
    fetch("/assets/templates/settings.html")
        .then(data => { return data.text(); })
        .then(data => { document.getElementById("settings").innerHTML = data; })
        .then(() => {
            document.getElementById("lightning-toggle").checked = localStorage.lightning;
            document.getElementById("rain-toggle").checked = localStorage.rain;
        });
}
if (document.getElementById("last-updated") !== null) {
    fetch("/assets/templates/last-updated.html")
        .then(data => { return data.text(); })
        .then(data => { document.getElementById("last-updated").innerHTML = data; });
}
