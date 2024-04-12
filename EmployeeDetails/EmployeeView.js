function Employee(id, name, city) {
    this.id = id;
    this.name = name;
    this.city = city;
}

e1 = new Employee(1, "naushad", "mumbai");
e2 = new Employee(2, "Akhtar", "pune");
e3 = new Employee(3, "Sudipta", "Kolkata");
employees = [e1, e2,e3]
//---------------------------------------------------------------------------------------------------------//
function None(){
    document.getElementById('updateUser').style.display='none'
    document.getElementById('deleteUser').style.display='none'
    document.getElementById('addUser').style.display='none'
    document.getElementById('viewUser').style.display='none'
    document.getElementById('viewAll').style.display='none'
}
//---------------------------------------------------------------------------------------------------------//
function showAllUser() {
    None();
    document.getElementById("viewAll").replaceChildren()
    document.getElementById("viewAll").style.display='block';
    table=document.getElementById("viewAll");
    for (user of employees) {
        
        tr = document.createElement("tr")
        td1 = document.createElement("td");
        td1.textContent=user.id;
        tr.appendChild(td1);        
        
        td2 = document.createElement("td");
        td2.textContent=user.name
        tr.appendChild(td2); 
       
        td3 = document.createElement("td");
        td3.textContent=user.city
        tr.appendChild(td3); 
        table.appendChild(tr)
       
    }
}
//---------------------------------------------------------------------------------------------------------//
function saveUser() {

    var userid = document.getElementById("uid").value;
    var uname = document.getElementById("uname").value;
    var city = document.getElementById("ucity").value;
    employees.push(new Employee(userid, uname, city))
    alert("Employee Added Succesfully!!!!!!!!")
}
function showAddUser() {
    None();
    document.getElementById("addUser").style.display = 'block'
}
//---------------------------------------------------------------------------------------------------------//
function showDeleteUser(){
    None();
    document.getElementById("deleteUser").style.display = "block" 

}
function deleteUser(){
    let idD=document.getElementById("delid").value;
    for(item of employees)
    {
        if(item.id==idD)
        {
            employees.splice(employees.indexOf(item),1);
            console.log(employees.indexOf(item))
            alert("Employee Data Deleted Succesfully!!!!!!!!")
        }
    }
}
//---------------------------------------------------------------------------------------------------------//
function showUpdateUser(){
    None();
    document.getElementById("updateUser").style.display = "block"
}
function updateUser(){
    let idu=document.getElementById("upid").value;
    let nameu=document.getElementById("upname").value;
    let cityu=document.getElementById("upcity").value;
    for(item of employees)
    {
        if(item.id==idu)
        {
            item.name=nameu;
            item.city=cityu;
            alert("Employee Data Updated Succesfully!!!!!!!!")
        }
    }
}
//---------------------------------------------------------------------------------------------------------//
function showViewById(){
    None();
    document.getElementById("viewUser").style.display = "block"
}
function viewById(){
    document.getElementById("viewUser").replaceChildren()
    tableP=document.getElementById("viewAll");
    let idv=document.getElementById("vid").value;
    for(item of employees){
        if(item.id==idv){
            let tr=document.createElement('tr')
            let td1=document.createElement('td');
            td1.textContent=item.id;
            tr.appendChild(td1);    

            let td2=document.createElement('td');
            td2.textContent=item.name;
            tr.appendChild(td2);  
            
            let td3=document.createElement('td');
            td3.textContent=item.city;
            tr.appendChild(td3);  

            tableP.appendChild(tr);
        
        }
    }
}
//-----------------------------E   N   D-----------------------------------------------------------------------//