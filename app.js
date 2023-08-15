const locations = [
    '🏛️', '🏥', '🏭', '🏖️', '🏫'
]

const people = [{
        name: 'Jimbo',
        picture: '🤵',
        location: '🏛️'
    },
    {
        name: 'EsPablo',
        picture: '🙆‍♀️',
        location: '🏫'
    },
    {
        name: 'Bob The Builder',
        picture: '👷',
        location: '🏫'
    },
    {
        name: 'Roberto',
        picture: '👷',
        location: '🏥'
    },
    {
        name: 'Esperanda',
        picture: '🤴',
        location: '🏥',
    },
    {
        name: 'Billian',
        picture: '🕵️',
        location: '🏥',
    },
    {
        name: 'Vanilla',
        picture: '👩‍🍳',
        location: '🏭',
    },
    {
        name: 'Pluma',
        picture: '💂',
        location: '🏭'
    },
    {
        name: 'Peso',
        picture: '🧜‍♂️',
        location: '🏭',
    },
    {
        name: 'Rocky',
        picture: '🏐',
        location: '🏖️',
    },
    {
        name: 'Lizzy',
        picture: '👩‍⚕️',
        location: '🏖️',
    },
    {
        name: 'Eslabon',
        picture: '🦹',
        location: '🏖️',
    }
]

for(let i = 0; i < people.length; i++){
    let singlePerson = people[i]
    // console.log(singlePerson.name)
}


function drawPeople(){
locations.forEach((location) => {
    console.log(location)
    let inLocation = people.filter((peep) => peep.location == location)
    let selfie = inLocation.map((peep) => peep.picture + peep.name)
    console.log(selfie)
    document.getElementById(location).innerText = selfie.join(', ')
})
}

function makeVamps(){
 let inLocation = people.filter(peep => peep.location == '🏖️')
}


function checkBeach(){
let inLocation = people.filter(peep => {
        
       if (peep.location == '🏖️'){
           console.log('Bats', peep)
           peep.picture = '🦇'
           return peep
       }
        })
        console.log(inLocation)
      
    
    startRunning()
}

function checkSchool(){
let inLocation = people.filter(peep => {
        
       if (peep.location == '🏫'){
           console.log('Bats', peep)
           peep.picture = '🦇'
           return peep
       }
        })
        console.log(inLocation)
      
    
    startRunning()
}



function checkFactory(){
    let inLocation = people.filter(peep => {
        
       if (peep.location == '🏭'){
           console.log('Bats', peep)
           peep.picture = '🦇'
           return peep
       }
        })
        console.log(inLocation)
      
    
    startRunning()
}



function checkHospital(){
    let inLocation = people.filter(peep => {
        
       if (peep.location == '🏥'){
           console.log('Bats', peep)
           peep.picture = '🦇'
           return peep
       }
        })
        console.log(inLocation)
      
    
    startRunning()
}





function checkTownHall(){


    let inLocation = people.filter(peep => {
        
       if (peep.location == '🏛️'){
           console.log('Bats', peep)
           peep.picture = '🦇'
           return peep
       }
        })
        console.log(inLocation)
      
    
    startRunning()
}


function startRunning(){
    people.forEach(peep => {
       
            let randomIndex = Math.floor(Math.random()* locations.length) 
            console.log(randomIndex)
            let newLocation = locations[randomIndex]
            peep.location = newLocation
        }
        
        
     )

    drawPeople()

    }









drawPeople()


