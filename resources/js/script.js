const nameElement = document.getElementById('name');
const colorElement = document.getElementById('color');
const colorNameElement = document.getElementById('colorName');
const fontFamilyElement = document.getElementById('fontFamily');
const fontWeightElement = document.getElementById('fontWeight');
const fontSizeElement = document.getElementById('fontSize');
const marginElement = document.getElementById('margin');
const paddingElement = document.getElementById('padding');
const displayElement = document.getElementById('display');
const h1s = document.querySelectorAll('h1');
const h2s = document.querySelectorAll('h2');
const ps = document.querySelectorAll('p');
const links = document.querySelectorAll('a');
const icons = document.querySelectorAll('i');
const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
const forms = document.querySelectorAll('form');
let stylesArray;

function getStyles(element) {
    let activeElement = document.querySelector(element);
    let elementStyles = getComputedStyle(activeElement);
    let elementName = element;
    let elementColor = elementStyles.color;
    let elementFontFamily = elementStyles.fontFamily;
    let elementFontWeight = elementStyles.fontWeight;
    let elementFontSize = elementStyles.fontSize;
    let elementMargin = elementStyles.margin;
    let elementPadding = elementStyles.padding;
    let elementDisplay = elementStyles.display;
    stylesArray = [elementName, elementColor, elementFontFamily, elementFontWeight, elementFontSize, elementMargin, elementPadding, elementDisplay];
    return stylesArray;
}

const updateSidebarValues = () => {
    nameElement.innerText = stylesArray[0];
    colorElement.style.backgroundColor = stylesArray[1];
    colorNameElement.innerText = stylesArray[1];
    fontFamilyElement.innerText = stylesArray[2];
    fontWeightElement.innerText = stylesArray[3];
    fontSizeElement.innerText = stylesArray[4];
    marginElement.innerText = stylesArray[5];
    paddingElement.innerText = stylesArray[6];
    displayElement.innerText = stylesArray[7];
}

const getTargetStyles = (evt) => {
    let currEventTarget = evt.currentTarget.tagName;
    getStyles(currEventTarget);
    updateSidebarValues();
}

function addListeners() {
    h1s.forEach(elem => elem.addEventListener('mouseover', getTargetStyles));
    h2s.forEach(elem => elem.addEventListener('mouseover', getTargetStyles));
    ps.forEach(elem => elem.addEventListener('mouseover', getTargetStyles));
    links.forEach(elem => elem.addEventListener('mouseover', getTargetStyles));
    icons.forEach(elem => elem.addEventListener('mouseover', getTargetStyles));
    labels.forEach(elem => elem.addEventListener('mouseover', getTargetStyles));
    inputs.forEach(elem => elem.addEventListener('mouseover', getTargetStyles));
    forms.forEach(elem => elem.addEventListener('mouseover', getTargetStyles));
}

addListeners();