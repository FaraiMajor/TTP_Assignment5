const addRowEl = document.getElementById('row-btn');
const removeRowEl = document.getElementById('remove-row');
const addColumnEl = document.getElementById('column-btn');
const removeColumnEl = document.getElementById('remove-column');
const colorSelectEl = document.getElementById('color-el');
const uncoloredFillerEl = document.getElementById('fillUncolored');
const fillEl = document.getElementById('fillAll');
const clearEl = document.getElementById('clearAll');

let defaultColor = 'white'

function pickColor() {
    defaultColor = colorSelectEl.value;
}