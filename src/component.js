export default (text = "Hello, Webpack! from Janitha") => {
    const element = document.createElement("h1");

    element.innerHTML = text;

    return element;
};

