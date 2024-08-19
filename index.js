function Add(){
    let expense=document.getElementById('product').value;
    let amount=document.getElementById('price').value;
    let category=document.getElementById('options').value;
    let date=document.getElementById('date').value;
    if(expense.trim()!=="" && amount.trim()!=="" && category.trim()!=="" && date.trim()!==""){
        let table_body=document.getElementById('tbody');
        let row=document.createElement('tr');
        let expenseval = document.createElement('td');
        let amountval = document.createElement('td');
        let categoryval = document.createElement('td');
        let dateval = document.createElement('td');
        let action = document.createElement('td');
        let btn_edit=document.createElement('button');
        let btn_delete=document.createElement('button');
        expenseval.innerHTML=expense;
        amountval.innerHTML=amount;
        categoryval.innerHTML=category;
        dateval.innerHTML=date;
        btn_edit.innerHTML="Edit";
        btn_delete.innerHTML="Delete";
        action.appendChild(btn_edit);
        action.appendChild(btn_delete);
        table_body.appendChild(row);
        row.appendChild(expenseval);
        row.appendChild(amountval);
        row.appendChild(categoryval );
        row.appendChild( dateval);
        row.appendChild(action);
        btn_delete.onclick=()=>{
            row.remove();
        }
        btn_edit.onclick=()=>{
            document.getElementById('product').value=expenseval.innerHTML;
            document.getElementById('price').value=amountval.innerHTML;
            document.getElementById('options').value=categoryval.innerHTML;
            document.getElementById('date').value=dateval.innerHTML;

            document.getElementById('addbtn').onclick=()=>{
                expense=document.getElementById('product').value;
                amount=document.getElementById('price').value;
                category=document.getElementById('options').value;
                date=document.getElementById('date').value;
            

            if(expense.trim()!=="" && amount.trim()!=="" && category.trim()!=="" && date.trim()!==""){
                expenseval.innerHTML=expense;
                amountval.innerHTML=amount;
                categoryval.innerHTML=category;
                dateval.innerHTML=date;

                document.getElementById('product').value="";
                document.getElementById('price').value="";
                document.getElementById('options').value="";
                document.getElementById('date').value="";
                document.getElementById('addbtn').onclick=Add;
            }
            else{
                alert("Fill the required details");
            }
        }
        }
        document.getElementById('product').value="";
        document.getElementById('price').value="";
        document.getElementById('options').value="";
        document.getElementById('date').value="";
    }
    else{
        alert("Fill the required details");
    }
}


function Remove(){
    document.getElementById('tbody').innerHTML="";
}

function FilterExpense(){
    let filter=document.getElementById('filter_options').value;
    let row = document.getElementById('tbody').getElementsByTagName('tr');
    for(let i=0;i<row.length;i++)
    {
        let category_filter=row[i].getElementsByTagName('td')[2].innerHTML;
        if(filter==="All"||category_filter===filter){
            row[i].style.display="";
        }
        else{
            row[i].style.display="none";
        }
            
    }
}






