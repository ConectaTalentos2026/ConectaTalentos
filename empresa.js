document.addEventListener("DOMContentLoaded", () => {
    const btnPerfil = document.getElementById("btn-perfil");
    const menuCorporativo = document.getElementById("menu-corporativo");
    const setaMenu = document.getElementById("seta-menu");

    // Função para alternar visibilidade do menu (Subir / Descer)
    btnPerfil.addEventListener("click", (e) => {
        e.stopPropagation(); // Impede de fechar imediatamente pelo clique no document
        menuCorporativo.classList.toggle("ativo");
        setaMenu.classList.toggle("girar");
    });

    // Fechar o menu ao clicar em qualquer outro lugar da tela
    document.addEventListener("click", (e) => {
        if (!menuCorporativo.contains(e.target) && !btnPerfil.contains(e.target)) {
            menuCorporativo.classList.remove("ativo");
            setaMenu.classList.remove("girar");
        }
    });

    // Evita fechar o menu ao clicar dentro dele
    menuCorporativo.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});