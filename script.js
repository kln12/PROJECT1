document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("changeColorButton");
    button.addEventListener("click", changeBackgroundColor);

    function changeBackgroundColor() {
        const body = document.body;
        const currentColor = body.style.backgroundColor;

        // Change background color between two predefined colors
        if (currentColor === "rgb(240, 240, 240)") {
            body.style.backgroundColor = "#f0f0ff";
        } else {
            body.style.backgroundColor = "#f0f0f0";
        }
    }
});
