const formUpload = document.getElementById('form_upload');
const csvFile = document.getElementById('csvFileUpload');
let jsonDict = "";

/*
PREVENT TO SUBMIT
formUpload.addEventListener("submit",function(e){
    e.preventDefault();
})
*/

csvFile.addEventListener("change",function(){
    const input = csvFile.files[0];
    const reader = new FileReader();

    reader.onload = function(e){
        const text = e.target.result;
        const data = csvToArray(text);
        jsonDict = JSON.stringify(data);
        
        let obj = JSON.parse(jsonDict);
 //       console.log(obj.length);
        createTableFromJSON(obj);
    }

    reader.readAsText(input);
})

function csvToArray(str, delimeter=","){
    const headers = str.slice(0,str.indexOf("\n")).split(delimeter);
    const rows = str.slice(str.indexOf("\n")+1).split("\n");

    const arr = rows.map(row => row.split("\t"));
    console.log(arr);
    return arr;
}

function createTableFromJSON(objDict){
    const tableContainer = document.getElementById("preview_table");
    const tableTag = document.createElement('table');
    tableContainer.append(tableTag);
    

    for(row=0;row < objDict.length-1; row++){
        const tableRowTag = document.createElement('tr');
        tableTag.append(tableRowTag);
        const sourceWordColumnTag = document.createElement('td');
        const translatedWordColumnTag = document.createElement('td');
        sourceWordColumnTag.textContent = objDict[row][0];
        translatedWordColumnTag.textContent = objDict[row][1];
        tableRowTag.append(sourceWordColumnTag);
        tableRowTag.append(translatedWordColumnTag);
    }

}