const checkbox = document.querySelector(".check")
// Create a new scanner instance out of the construtor object found on the imported library referenced in the script tag
// Specify the Id where you want the scanner to appear "reader" as 1t arguement
// 2nd argument is an object where you specify how you wnt "reader" to appear 
// To use scanner call the render method on instance created inside make reference to a function
// Create and define a function that will execute when QR code is scanned
// Select element in the div to display 
// Have a success title display 
// Interplate content as result
// On successful scanning end the scanning by removing the instance
// Remove reader element for the DOM

var scanner = new Html5QrcodeScanner("reader", { 
    fps: 20, 
    qrbox:{
        width: 250,
        height: 250, 
    } 
});

scanner.render(onScanSuccess);

function onScanSuccess(decodedText) {
        document.querySelector(".result").innerHTML = `
        <h2>Success</h2>
        <p><a href="${decodedText}">${decodedText}</a></p>
        `
        
        scanner.clear()
        document.querySelector("reader").remove()

}