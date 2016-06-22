module.exports.grid = function(div, options) {

    var gridContainer = document.createElement('div');
    var table = document.createElement('table');
    var tableRow = document.createElement('tr');

    for(var x = 0; x < 5; x++) {
        for(var y = 0; y < 5; y++){
            tableRow.appendChild(document.createElement('td'));
        }
        table.appendChild(tableRow);
        tableRow = document.createElement('tr');
    }

    table.classList.add('gridTable');
    gridContainer.classList.add('gridContainer');
    gridContainer.appendChild(table);
    div.appendChild(gridContainer);

}
