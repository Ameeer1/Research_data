function change_Mode()
{
    var mode = document.body;
    mode.classList.toggle("dark_Mode");
    var colors = document.getElementsByClassName("color");
    for (const key in colors) {
        const element = colors[key];
        element.classList.toggle("dark_Color");
    }
        
}