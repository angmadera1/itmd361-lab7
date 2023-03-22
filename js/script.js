function init(){
    let button = document.getElementById('entrybutton');

    function alertButton() {
    let text = document.getElementById("entryinput").value;
    document.getElementById('textoutput').innerText = text;
    alert("Angelica Madera: " + text);
    }

    button.addEventListener('click', alertButton);

} 

window.addEventListener('load', init);