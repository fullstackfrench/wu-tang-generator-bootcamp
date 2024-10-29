//User answers questions 
//User hit submit button
//Each answer corresponds to a value 
//If the sum of the values is even it selects from the even first name and last name arrays
//If the sum of the values is odd it selects from the odd first name and last name arrays  

document.querySelector('button').addEventListener('click', submitForm)


    

function submitForm(){
    
    let arrayOfAnswerValues = [] 

    const nodeList = document.getElementsByName('season')
    for (let i = 0; i < nodeList.length; i++ ){
        if(nodeList[i].checked) {
            arrayOfAnswerValues.push(Number(nodeList[i].value))
        }
    }
    
    const nodeListTwo = document.getElementsByName('superpower')
    for (let i = 0; i < nodeListTwo.length; i++ ){
        if(nodeListTwo[i].checked) {
            arrayOfAnswerValues.push(Number(nodeListTwo[i].value))
        }
    }

    const nodeListThree = document.getElementsByName('genre')
    for (let i = 0; i < nodeListThree.length; i++ ){
        if(nodeListThree[i].checked) {
            arrayOfAnswerValues.push(Number(nodeListThree[i].value))
        }
    }
    
    const nodeListFour = document.getElementsByName('month')
    for (let i = 0; i < nodeListFour.length; i++ ){
        if(nodeListFour[i].checked) {
            arrayOfAnswerValues.push(Number(nodeListFour[i].value))
        }
    }

    const nodeListFive = document.getElementsByName('month')
    for (let i = 0; i < nodeListFive.length; i++ ){
        if(nodeListFive[i].checked) {
            arrayOfAnswerValues.push(Number(nodeListFive[i].value))
        }
    }

    console.log(arrayOfAnswerValues)


    let sumOfAnswerValues = arrayOfAnswerValues.reduce((acc, curr) => acc + curr, 0)
    
    console.log(sumOfAnswerValues)
    
    let wuTangName = wuTangFirstNames[sumOfAnswerValues] + ' ' + wuTangLastNames[sumOfAnswerValues]
       console.log(wuTangName)

    document.querySelector('h2').innerText = wuTangName
       
    document.querySelector('form').reset();
}


    
    
let wuTangFirstNames = ['Ghost', 'Rhyme', 'Iron', 'Supreme', 'Phantom', 'Rebel', 'Mystic', 'Shadow', 'Blaze', 'Liquid', 'Thunder', 'Wise', 'Viper', 'Savage', 'Frost', 'Zen', 'Wild', 'Oracle', 'Quest', 'Rumble']

let wuTangLastNames = ['Blade', 'Dragon', 'Clan', 'Warrior', 'Storm', 'Beast', 'Soul', 'Hawk', 'Ghostface','Assassin', 'Master', 'King', 'Vision', 'Fury', 'Prophet', 'Element', 'Guardian', 'Knight', 'Cipher', 'Rebel']
