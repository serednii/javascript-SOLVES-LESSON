// Вивести координати миші відносно блока, в момент руху курсора миші в середині блока.Координати виводити під блоком.

// Output the coordinates of the mouse relative to the block, at the moment of movement of the mouse cursor in the middle of the block. Display the coordinates under the block.

document.querySelector('#test').onmousemove = function (event) {
    event = event || windows.event; // Для старих браузерів 
    // console.log(event);
    document.querySelector('#X').innerHTML = event.offsetX;
    document.querySelector('#Y').innerHTML = event.offsetX;
}