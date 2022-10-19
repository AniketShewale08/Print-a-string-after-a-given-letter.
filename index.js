function appendRow(){
    let cell, fRow, row;
    let table = document.getElementById("table1");
    fRow = table.rows[0];
    row = table.insertRow(-1);
    row.className = "tr";
    cell = row.insertCell(-1);
    
    cell.innerHTML = (table.rows.length - 1);
    for(let i = 1; i< fRow.cells.length; i++){
        cell = row.insertCell(-1)
        switch(i){
            case 1:
                cell.innerHTML = "Tanveer";
                break;
            case 2:
                cell.innerHTML = "Patel";
                break;
            case 3:
                cell.innerHTML = "Mumbai";
                break;
            case 4:
                cell.innerHTML = "India";
                break;    
        }
    }
}


function appendRowAtTop(){
    let cell, fRow, row;
    let table = document.getElementById("table1");
    fRow = table.rows[0];
    row = table.insertRow(1);
    row.className = "tr";
    cell = row.insertCell(-1);
    cell.innerHTML = "1";
    for(let i = 1; i< fRow.cells.length; i++){
        cell = row.insertCell(-1)
        switch(i){
            case 1:
                cell.innerHTML = "Nisarg";
                break;
            case 2:
                cell.innerHTML = "Mehata";
                break;
            case 3:
                cell.innerHTML = "Pune";
                break;
            case 4:
                cell.innerHTML = "India";
                break;    
        }
        
    }
    for(let i = 2; i < table.rows.length; i++){
        table.rows[i].cells[0].innerHTML = i;
    }
}