 const buttons = document.querySelectorAll('.button');
 const body = document.getElementById('main')
 const h1 = document.getElementById('heading')
 const colorName = document.getElementById('colorNm')
 

 buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click', function(e){

        buttons.forEach((button)=>{
            button.style.border = 'none';
        });

        // console.log(h1);
        console.log(e.target);
        // console.log(e.target.id);
        // // body.style.backgroundColor = e.target.id;
        // }
        if(e.target.id === 'gray'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = "white";
            button.style.border = "2px solid white"
            colorName.innerText = e.target.id

        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = "green";
            button.style.border = "2px solid green"
            colorName.innerText = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = "pink";
            button.style.border = "2px solid pink"
            colorName.innerText = e.target.id
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = "red";
            button.style.border = "2px solid red"
            colorName.innerText = e.target.id
        }
    })
 })



//  /  const buttons = document.getElementById("color");

//  const body = document.getElementsByTagName('body');

//   buttons.style.color= 'white';
//   buttons.style.backgroundColor= ' green'
//   buttons.style.border = "2px solid red"