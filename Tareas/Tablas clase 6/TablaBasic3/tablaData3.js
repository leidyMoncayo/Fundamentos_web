const tableBodyData =[{num:1, First:'Mark',Last:'Otto',Handle:'@mdo'},
                      {num:2, First:'Jacob',Last:'Thornton',Handle:'@Gre'},
                      {num:3, First:'Larry',Last:'the Bird',Handle:'@fat'},
                      {num:4, First:'Johnito',Last:'Doe',Handle:'@jhdoe'},
                       
]
function loadTableData() {

  const tableBody = document.getElementById('table3BodyDataBasic');
  tableBody.innerHTML=" " ;

  tableBodyData.forEach(data => {
    
    const row = document.createElement('tr');
    row.innerHTML =`
      <td>${data.num}</td>
      <td>${data.First}</td>
      <td>${data.Last}</td>
      <td>${data.Handle}</td>
      `;
    tableBody.appendChild(row);
  });
}

