const Menu = document.getElementById("menu_icono");
const cerrar_ventana = document.getElementById("menu_url");


//acciona una clase que tiene una accion, un evento
Menu.addEventListener('click', ()=>{
    cerrar_ventana.classList.toggle("Mayola");
})