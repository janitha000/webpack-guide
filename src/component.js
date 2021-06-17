export default (text = "Hello, Webpack! from Janitha") => {
    const element = document.createElement("h1");

    element.innerHTML = text;

    element.onclick = () => {
        import('./lazy').then((lazy) => {
            element.textContent = lazy.default
        })
            .catch((err) => console.log(err))
    }

    return element;
};

