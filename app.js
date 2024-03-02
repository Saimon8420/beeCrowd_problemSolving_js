function setCookie(cname, cvalue, expdays) {
    const d = new Date();
    d.setMinutes(d.getMinutes() + expdays);
    console.log(d);
    let expires = "expires=" + d.toUTCString();
    console.log(expires);

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie() {
    console.log(document.cookie);
}

setInterval(() => {
    getCookie();
}, [1000 * 60])
