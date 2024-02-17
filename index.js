window.addEventListener("load", function(){
    let newsText = this.document.querySelector("input[type=text]");
    let addBtn = this.document.querySelector("#addBtn");
    let countBtn = this.document.querySelector("#countBtn");
    let tableBody = this.document.querySelector("tbody");
    let counterBox = this.document.querySelector("#counter");
    let counter = 1;

    addBtn.addEventListener("click", function(){
        if(newsText.value.trim())
        {
            let tr = tableBody.insertRow(-1);
            let td = tr.insertCell(-1);
            
            let checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            td.appendChild(checkBox);

            let tdNews = tr.insertCell(-1);
            tdNews.innerHTML = `<b>${newsText.value}</b>`;
        
            let tdDelete = tr.insertCell(-1);

            let deleteBtn = document.createElement("input");
            deleteBtn.type = "button";
            deleteBtn.value = "Delete";
            deleteBtn.classList = "btn btn-danger"

            tdDelete.appendChild(deleteBtn);

            counter++;
        }
    })

    countBtn.addEventListener("click", function(){
        counterBox.innerHTML = counter-1 + " rows";
    })

    tableBody.addEventListener("click", function(e){
        if (e.target.type=="button") {
            if(confirm("Are you sure you want to delete this task?"))
            {
                let rowToDelete = e.target.parentNode.parentNode;
                rowToDelete.remove();
            }
        }

        if (e.target.type=="checkbox") {
            let rowToCheck = e.target.parentNode.parentNode;
            if (e.target.checked) {
                rowToCheck.children[1].style.textDecoration = "line-through"
            } else {
                rowToCheck.children[1].style.textDecoration = "none"
            }
            
        }
    })
})