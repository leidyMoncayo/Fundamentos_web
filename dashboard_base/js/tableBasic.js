const tableBodyBasic = [
    {num: "Marck", First: "Otto" ,First:"iguachu", Handle: "$12,234"},
    {num: "jenifer acosta", First: "junior javaScript Developer" ,First:"iguachu", Handle: "$12,234"},
    {num: "jenifer acosta", First: "junior javaScript Developer" ,First:"iguachu", Handle: "$12,234"},
    
];
function loadTableData(){
    const tableBody= document.getElementById('tableBodyBasic');
    tableBodyBasic.forEach(data=> {
    const row = document.createElement('tr')

    row.innerHTML = `
    <td>${data.num}</td>
    <td>${data.First}</td>
    <td>${data.First}</td>
    <td>${data.Handle}</td>

    `;
    tableBody.appendChild(row);
    });

                            
}