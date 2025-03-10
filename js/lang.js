let langpack_name = document.getElementById('langpackbox').value;

async function loadLang(lang) {
    try {
        const response = await fetch('/lang/' + lang + ".js");
        const langData = await response.text();
        eval(langData);
    } catch (error) {
        console.error("Error loading language pack:", error);
    }
}

const sysLang = navigator.language || navigator.userLanguage;
if (sysLang.toLowerCase() === "cs") {
    loadLang("cs-cz");
} else {
    
}

function changeLang() {
    langpack_name = document.getElementById('langpackbox').value;
    loadLang(langpack_name);
}
