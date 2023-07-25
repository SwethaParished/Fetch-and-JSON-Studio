// TODO: add code here
window.addEventListener("load", function(){

    const container = document.getElementById("container");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(data){
            console.log(data);
            
            data.sort(function(a,b){
               return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
            })
            container.innerHTML = `There are totally ${data.length} astronauts.`;
            for (let i=0; i<data.length; i++){
                let activeClass = data[i].active ? "greenColor" : "";
                
                container.innerHTML += `<div class="astronaut">
                <div class="bio">
                    <h3>${data[i].firstName} ${data[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${data[i].hoursInSpace}</li>
                        <li class="${activeClass}">Active: ${data[i].active}</li>
                        <li>Skills: ${data[i].skills}</li>
                    </ul>
                    </div>
                    <img class="avatar" src=${data[i].picture}>
                </div>`
            }
        

        })
    })
})