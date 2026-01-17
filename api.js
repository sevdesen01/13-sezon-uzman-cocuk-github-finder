import { renderUser } from "./ui.js";

const getUser = async (userName) => {

    // Kullanıcı adına göre api'e istek atmak için
    const response = await fetch(`https://api.github.com/users/${userName}`);

    // Api'den gelen veriyi JS nesnesine çevirmek için
    const data = await response.json();

    // Api'den gelen verşye göre arayüzü renderlamak yani son haline getirmek için

    renderUser(data);

};

export default getUser;