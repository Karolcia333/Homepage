{
    const welcome = () => {
        console.log("Witam wszystkich developerów🙂");
    };

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const navigation__button = document.querySelector(".js-themeName");
        body.classList.toggle("body--lightBlue")
        navigation__button.innerText = body.classList.contains("body--lightBlue")
            ? "białe"
            : "błękitne";
    };

    const init = () => {
        const button = document.querySelector(".js-navigation__button");
        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}