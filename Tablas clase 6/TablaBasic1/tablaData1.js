const tableBodyData =[{num:1, Avatar:'1.jpg',ID:'#5469',name:'Louis Stanley', Produc:'iMax', Quantity: 231,Status:'completed'},
                      {num:2, Avatar:'2.jpg',ID:'#2344',name:'Gregory Dixon', Produc:'	iPad', Quantity: 251,Status:'completed'},
                      {num:3, Avatar:'3.jpg',ID:'#4354',name:'Catherine Dixon', Produc:'SSD', Quantity: 251,Status:'completed'},
                      {num:4, Avatar:'4.jpg',ID:'#5433',name:'Mary Silva', Produc:'Magic Mouse', Quantity: 251,Status:'Pending'},
                      {num:5, Avatar:'6.jpg',ID:'#5445',name:'Anamaria Reyes', Produc:'Tablet', Quantity: 255,Status:'Pending'}

]
function loadTableData() {

  const tableBody = document.getElementById('table1BodyDataBasic');
  tableBody.innerHTML=" " ;

  tableBodyData.forEach(data => {
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="serial">${data.num}.</td>
      <td class="avatar">
          <div class="round-img">
              <a href="#"><img class="rounded-circle" src="../dashboard_base/images/avatar/${data.Avatar}" alt=""></a>
          </div>
      </td>
      <td> ${data.ID} </td>
      <td>  <span class="name">${data.name}</span> </td>
      <td> <span class="product">${data.Produc}</span> </td>
      <td><span class="count">${data.Quantity}</span></td>
      <td>
          <span class="badge badge-${data.Status === 'completed' ? 'complete' : 'pending'}">${data.Status}</span>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

                 