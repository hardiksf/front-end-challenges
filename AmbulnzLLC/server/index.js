
function component() {
    let element = document.createElement('div');
    let button = document.createElement('button');
    let br = document.createElement('br');
    button.innerHTML = 'Click me and look at the console!';
    element.appendChild(br);
    element.appendChild(button);

   

    return element;
}


document.body.appendChild(component());