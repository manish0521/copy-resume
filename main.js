window.onload = init;

function init() {
    
    displayAll();
}



function displayAll() {

    // for(let i = 0; i < manish.bio.length; i++) {
        display(manish);
        quotesDisplay();
        myIntro () ;
    // }

    
}

function display(profile) {
    const bioUl = document.querySelector('#bio');
    const skillsUl = document.querySelector('#skill');
    const experienceUl = document.querySelector('#experience');
    const educationUl = document.querySelector('#education');
    


    

  
    for(let i = 0; i < manish.bio.length; i++){

        const textLi = document.createElement('li');
        // const bioData = document.createElement('ul');
        textLi.innerText = profile.bio ;
        // textLi.appendChild(bioData);
        bioUl.appendChild(textLi);
    }
        
    for(let i = 0; i < manish.skills.length; i++){

        
        const skillsLi = document.createElement('li');
        // const skillsData = document.createElement('ul');
        skillsLi.innerText = profile.skills[i] ;
        // skillsLi.appendChild(skillsData);
        skillsUl.appendChild(skillsLi);
        
    }

    for(let i = 0; i < manish.experience.length; i++){

        const experienceLi = document.createElement('li');
        // const bioData = document.createElement('ul');
        experienceLi.innerText = profile.experience[i] ;
        // textLi.appendChild(bioData);
        experienceUl.appendChild(experienceLi);
    }
        
    for(let i = 0; i < manish.education.length; i++){

        
        const educationLi = document.createElement('li');
        // const skillsData = document.createElement('ul');
        educationLi.innerText = profile.education[i] ;
        // skillsLi.appendChild(skillsData);
        educationUl.appendChild(educationLi);
        
    }
    
}


function quotesDisplay () {
    let randomNum = Math.floor(Math.random()) * quotes.length;
    document.getElementById('quote').innerHTML = quotes[randomNum];
    


}

function myIntro () {
    const introSelector = document.querySelector('#intro');

       
     // const bioData = document.createElement('ul');
        // // style.listStyle = 'none'
        Object.values(intro).forEach(
            (data) => {
                const introLi = document.createElement('p')
                introLi.innerText = data ;
                introSelector.appendChild(introLi);
            }
        )
       
}

// function clear(){
//     const newlist = document.querySelector('#todo-list');

//     while(newlist.hasChildNodes()) {
//         newlist.removeChild(newlist.firstChild);
//     }
// } 
