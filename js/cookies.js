// document.cookie = "miCookie = deMiguel; max-age = 30";

let btnAceptar = document.querySelector("#cookie button:nth-of-type(1)");
let btnRechazar = document.querySelector("#cookie button:nth-of-type(2)");
let mensajeCookies = document.querySelector("#cookie");

function ponerCookie() {
	// creamos una cookie que durará un mes
	document.cookie = "CookieBy=olga; max-age=" + 60 * 60 * 24 * 30;
	// quitamos el mensaje de las cookies
	mensajeCookies.style.display = "none";
}

btnAceptar.addEventListener("click", ponerCookie);

function quitarMensaje() {
    // quitamos el mensaje de las cookies
    mensajeCookies.style.display = "none";
}
btnRechazar.addEventListener("click", quitarMensaje);


function comprobarCookie() {
    let cookie = document.cookie.indexOf("CookieBy=olga");
    if(cookie != -1) {
        mensajeCookies.style.display = "none";
    }
}
window.addEventListener("load", comprobarCookie);