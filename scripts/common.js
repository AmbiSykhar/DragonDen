function getRandomNumber(min, max) {
    return (max - min) * Math.random() + min;
}

fetch("/assets/templates/navbar.html")
    .then(data => { return data.text(); })
    .then(data => { document.getElementById("navbar").innerHTML = data; });

fetch("/assets/templates/settings.html")
    .then(data => { return data.text(); })
    .then(data => { document.getElementById("settings").innerHTML = data; })
    .then(() => {
        document.getElementById("lightning-toggle").checked = localStorage.lightning;
        document.getElementById("rain-toggle").checked = localStorage.rain;
    });

fetch("/assets/templates/last-updated.html")
    .then(data => { return data.text(); })
    .then(data => { document.getElementById("last-updated").innerHTML = data; });
