let temp
let savearray=["","","","","","","","","","","","","","","","","","","","","","","","","",];
let i=0;
let id;
let storage=["","",""];
localStorage.clear();

function trainerselect(tempid)
{
     document.getElementById("trainerselectdiv").style.display="block";
     document.getElementById("trainerselectdiv").style.display="block";
     id=tempid;
    
}

function saveTable()
{
    localStorage.setItem("savearray",JSON.stringify(savearray));
    
    var trainer = document.getElementById("classroomselect");
    storage[trainer.selectedIndex] = 1;
    
}

function viewinConsole()
{
    save = JSON.parse(localStorage.getItem("savearray"));
    console.log(save.length);
}

function setTrainer()
{

    document.getElementById("trainerselectdropdown")
    var trainer = document.getElementById("trainerselectdropdown");
    var selectedOption = trainer.options[trainer.selectedIndex];
    var mailValue = selectedOption.value;

    document.getElementById("subjectname").value =mailValue;
    temp=""
    temp=selectedOption.innerHTML+"/"+mailValue;

    
    document.getElementById(id).innerHTML=temp;
    
    savearray.splice(id,1,temp);

    
        
}






const renderTable = ()=>{
    const rows = renderRows();

    var trainer = document.getElementById("classroomselect");
    var selectedOption = trainer.selectedIndex;

    if(storage[selectedOption]!=1)
    {

    document.getElementById("timetable").innerHTML = 
    

   
    
    `
    <table class="table table-bordered table-responsive-md table-striped text-center" style="width: 750px" style="height:750px ">
        <thead>
          <tr>
            <th>DAY / TIME</th>
            <th class="text-center">MONDAY</th>
            <th class="text-center">TUESDAY</th>
            <th class="text-center">WEDNESDAY</th>
            <th class="text-center">THURSDAY</th>
            <th class="text-center">FRIDAY</th>
          </tr>

          <tbody>
            <tr>
            <th class="text-center">10-11</th> 
            <td id=1 class="pt-3-half" contenteditable="true" onclick="trainerselect(1)"></td>
            <td id=2 class="pt-3-half" contenteditable="true" onclick="trainerselect(2)"></td>
            <td id=3 class="pt-3-half" contenteditable="true" onclick="trainerselect(3)"></td>
            <td id=4 class="pt-3-half" contenteditable="true" onclick="trainerselect(4)"></td>
            <td id=5 class="pt-3-half" contenteditable="true" onclick="trainerselect(5)"></td>
            </tr>

            <tr>
            <th class="text-center">11-12</th> 
            <td id=6 class="pt-3-half" contenteditable="true" onclick="trainerselect(6)"></td>
            <td id=7 class="pt-3-half" contenteditable="true" onclick="trainerselect(7)"></td>
            <td id=8 class="pt-3-half" contenteditable="true" onclick="trainerselect(8)"></td>
            <td id=9 class="pt-3-half" contenteditable="true" onclick="trainerselect(9)"></td>
            <td id=10 class="pt-3-half" contenteditable="true" onclick="trainerselect(10)"></td>
            </tr>

            <tr>
            <th class="text-center">12-01</th>
            <td id=11 class="pt-3-half" contenteditable="true" onclick="trainerselect(11)"></td>
            <td id=12 class="pt-3-half" contenteditable="true" onclick="trainerselect(12)"></td>
            <td id=13 class="pt-3-half" contenteditable="true" onclick="trainerselect(13)"></td>
            <td id=14 class="pt-3-half" contenteditable="true" onclick="trainerselect(14)"></td>
            <td id=15 class="pt-3-half" contenteditable="true" onclick="trainerselect(15)"></td>
            </tr>


            <tr>
            <th class="text-center">01-02</th> 
            <td id=16 class="pt-3-half" contenteditable="true" onclick="trainerselect(16)"></td>
            <td id=17 class="pt-3-half" contenteditable="true" onclick="trainerselect(17)"></td>
            <td id=18 class="pt-3-half" contenteditable="true" onclick="trainerselect(18)"></td>
            <td id=19 class="pt-3-half" contenteditable="true" onclick="trainerselect(19)"></td>
            <td id=20 class="pt-3-half" contenteditable="true" onclick="trainerselect(20)"></td>
            </tr>


            <tr>
            <th class="text-center">02-03</th> 
            <td id=21 class="pt-3-half" contenteditable="true" onclick="trainerselect(21)"></td>
            <td id=22 class="pt-3-half" contenteditable="true" onclick="trainerselect(22)"></td>
            <td id=23 class="pt-3-half" contenteditable="true" onclick="trainerselect(23)"></td>
            <td id=24 class="pt-3-half" contenteditable="true" onclick="trainerselect(24)"></td>
            <td id=25 class="pt-3-half" contenteditable="true" onclick="trainerselect(25)"></td>
            </tr>


          </tbody>

                                                    
                                                     
   </table>`;
}
else
{
    save = JSON.parse(localStorage.getItem("savearray"));
    console.log(save.length)
    for(let i= 0;i<save.length;i++)
        document.getElementById(i+1).innerHTML=save[i];
}

}



const renderRows = (value) =>{
    let rows = '';
    // alert("inside renderrows");
    // users.forEach(e=>{
        rows += `<tr>
                    
                  
                </tr>`;
    // });
}