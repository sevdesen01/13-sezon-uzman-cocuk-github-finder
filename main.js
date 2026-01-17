import getUser from "./api.js";
import { uiElements } from "./ui.js";

uiElements.form.addEventListener("submit", (e) => {
    // Sayfanın yenilenmesini engellemek için
    e.preventDefault();

    // Form içerisindeki input değerlerine erişebilmek için
    const userName = e.target[0].value;

    if(!userName) {
        alert(`Kullanıcı adı girilmelidir!!!`);

        return;
    }


    getUser(userName);
})