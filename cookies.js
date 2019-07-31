function changepref() {
    chrome.cookies.set({
        "url": "https://www.youtube.com/",
        "name": "PREF",
        "value": "f6=8"
        })
}
changepref()