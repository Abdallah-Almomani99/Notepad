document.getElementById("myText").innerHTML = "This is a sample text.";

function Bold() {
    const element = document.getElementById("myText");
    element.style.fontWeight = element.style.fontWeight === "bold"? "normal" : "bold";
}

function Italic() {
    const element = document.getElementById("myText");
    element.style.fontStyle = element.style.fontStyle === "italic"? "normal" : "italic";
}

function Underline() {
    const element = document.getElementById("myText");
    element.style.textDecoration = element.style.textDecoration === "underline"? "none" : "underline";
}

function Textleft() {
    const element = document.getElementById("myText");
    element.style.textAlign = "left";
}

function Textcenter() {
    const element = document.getElementById("myText");
    element.style.textAlign = "center";
}

function Textright() {
    const element = document.getElementById("myText");
    element.style.textAlign = "right";
}

function Upper() {
    const element = document.getElementById("myText");
    element.style.textTransform = element.style.textTransform === "uppercase" ? "none" : "uppercase";
}

function Lower() {
    const element = document.getElementById("myText");
    element.style.textTransform = element.style.textTransform === "lowercase"? "none" : "lowercase";
}

function Capitaliz() {
    const element = document.getElementById("myText");
    element.style.textTransform = element.style.textTransform === "capitalize"? "none" : "capitalize";
}

function ClearText() {
    document.getElementById("myText").value = "";
}


function ChangeColor() {
    const element = document.getElementById("myText");
    const color = document.getElementById("fontColor").value;
    element.style.color = color;
}


function ChangeBackgroundColor() {
    const element = document.getElementById("myText");
    const color = document.getElementById("backgroundColor").value;
    element.style.backgroundColor = color;
}


function ChangeFontSize() {
    const element = document.getElementById("myText");
    const fontSize = document.getElementById("fontSize").value;
    element.style.fontSize = fontSize + "px";
}


function ChangeFontFamily() {
    const element = document.getElementById("myText");
    const fontFamily = document.getElementById("fontFamily").value;
    element.style.fontFamily = fontFamily;
}

function Print() {
    const element = document.getElementById("myText");
    const printContent = element.innerHTML;
    const printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write('<html><head><title>Print Text</title>');
    printWindow.document.write('<style>body { font-size: ' + window.getComputedStyle(element).fontSize + 'px; color: ' + window.getComputedStyle(element).color + '; background-color: ' + window.getComputedStyle(element).backgroundColor + '; text-align: ' + window.getComputedStyle(element).textAlign + '; text-transform: ' + window.getComputedStyle(element).textTransform + '; font-weight: ' + window.getComputedStyle(element).fontWeight + '; font-style: ' + window.getComputedStyle(element).fontStyle
    + '; text-decoration: ' + window.getComputedStyle(element).textDecoration + '; } </style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(printContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
}