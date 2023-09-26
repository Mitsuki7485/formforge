function createInput() {
    var elementType = document.getElementById("tex").value;
    var container = document.getElementById("div1");
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", elementType);
    inputElement.id = "rex";
    container.innerHTML = ''; 
    container.appendChild(inputElement);
    showStylingInputs();
}

function showStylingInputs() {
    var stylingInputs = document.querySelectorAll("#text1, #text2, #text3, #text4, #text5, #text6");
    stylingInputs.forEach(function (input) {
        input.style.display = "block";
    });
}

function applyWidth() {
    var width = document.getElementById("text1").value;
    var rex = document.getElementById("rex");
    rex.style.width = width;
}

function applyHeight() {
    var height = document.getElementById("text2").value;
    var rex = document.getElementById("rex");
    rex.style.height = height;
}

function applyFontSize() {
    var fontSize = document.getElementById("text3").value;
    var rex = document.getElementById("rex");
    rex.style.fontSize = fontSize;
}

function applyBackgroundColor() {
    var bgColor = document.getElementById("text4").value;
    var rex = document.getElementById("rex");
    rex.style.backgroundColor = bgColor;
}

function applyBorderRadius() {
    var borderRadius = document.getElementById("text5").value;
    var rex = document.getElementById("rex");
    rex.style.borderRadius = borderRadius ;
}

function applyText() {
    var text = document.getElementById("text6").value;
    var rex = document.getElementById("rex");
    rex.value = text;
}
       
function generateCode() {
    var rex = document.getElementById("rex");
    var inputType = rex.getAttribute("type");
    var width = rex.style.width;
    var height = rex.style.height;
    var fontSize = rex.style.fontSize;
    var bgColor = rex.style.backgroundColor;
    var borderRadius = rex.style.borderRadius;
    var text = rex.value;

    var code = '<input type="' + inputType + '"';
    code += '  style="';
    if (width) {
        code += 'width: ' + width + ';';
    }

    if (height) {
        code += 'height: ' + height + ';';
    }

    if (fontSize) {
        code += 'font-size: ' + fontSize + ';';
    }

    if (bgColor) {
        code += 'background-color: ' + bgColor + ';';
    }

    if (borderRadius) {
        code += 'border-radius: ' + borderRadius + ';';
    }

    code +=  '">';

    document.getElementById("abc").textContent = "Code:\n\n" + code;
}
