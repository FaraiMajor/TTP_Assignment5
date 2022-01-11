let table = document.getElementById('myTable');

function addRow() {
    if (table.rows.length === 0) {
        let addRow = table.insertRow(0);
        let cell = addRow.insertCell(0)
    } else {
        let addRow = table.insertRow(0);
        let e = table.rows.length - 1;
        let len = table.rows[e].cells.length;

        for (let i = 0; i < len; i++) {
            table.rows[0].insertCell(i);
            table.rows[0].cells[i].innerHTML = "";
        }
    }
}


function addColumn() {
    if (table.rows.length === 0) {
        addRow();
    } else {
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].insertCell(0);
            table.rows[i].cells[0].innerHTML = "";
        }
    }
}

function deleteRow() {
    document.getElementById("myTable").deleteRow(0);
}

function deleteColumn() {
    for (let r = 0; r < table.rows.length; r++) {
        table.rows[r].deleteCell(0); // var table handle
    }
}