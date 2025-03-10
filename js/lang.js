const langpack_name = document.getElementById('langpackbox').value;

const sysLang = navigator.language || navigator.userLanguage;
if (sysLang.toLowerCase() == "en-us") {
    const langpack = fetch('/lang/en-us.lang');
    eval(langpack);
} else if (sysLang.toLowerCase() == "cs-cz") {
    const langpack = fetch('/lang/cs-cz.lang');
    eval(langpack);
} else {
    const langpack = fetch('/lang/en-us.lang');
    eval(langpack);
}


function changeLang() {
    langpack_name = document.getElementById('langpackbox').value;
    const langpack = fetch('/lang/' + langpack_name + ".lang");
    eval(langpack);
}
//document.getElementById('bodej').innerText = langpack_name;