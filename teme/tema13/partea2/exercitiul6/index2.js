function setCookie(cookieName, cookieValue, daysToExpire) {
    // create date
    // create cookie 
    let date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
}
function getCookie(cookieName) {
    // access cookie
    let name = cookieName + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function verifiyCookie() {
    // verify cookie
    // use prompt messages 
    // if cookie doesnt exist use prompt to show message "Hello, 
    // please insert your name"
    // if cookie exist show message "Hello {name}"
    let user = getCookie("userName");
    if (user != "") {
        alert("Hello " + user);
    } else {
        user = prompt("Hello, please insert your name:", "");
        if (user != "" && user != null) {
            setCookie("userName", user, 365);
        }
    }
}
setCookie("Adrian", "Adi", 29);