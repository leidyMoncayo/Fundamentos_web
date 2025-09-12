const tableBodyData = [
    {name: "jenifer acosta", position: "junior javaScript Developer" ,office:"iguachu", salari: "$12,234"},
    {name: "Carlos acosta", position: " junior javaScript Developer" ,office:"iguachu", salari: "$12,234"},
    {name: "Freddy rebelde", position: "junior javaScript Developer" ,office:"iguachu", salari: "$12,234"},
];
function loadTableData(){
    const tableBody= document.getElementById('tableBodyData');
    tableBodyData.forEach(data=> {
    const row = document.createElement('tr')

    row.innerHTML = `
     <td>${data.name}</td>
    <td>${data.position}</td>
     <td>${data.office}</td>
   <td>${data.salari}</td>

    `;
    tableBody.appendChild(row);
    });

                            
}