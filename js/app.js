/*====================================
    Load Components
====================================*/

const isHomePage = window.location.pathname.endsWith("index.html") ||
                   window.location.pathname === "/";

const componentPath = isHomePage
    ? "components/"
    : "../components/";

includeComponent("navbar", componentPath + "navbar.html");
includeComponent("footer", componentPath + "footer.html");