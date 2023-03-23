const question =[
    {
        'que': 'DESCRIBE YOUR CURRENT MOOD',
        'A': 'Pretty happy', //1pt
        'B': 'I am worried about some things', //2pt
        'C': 'Antisocial', //3pt
        'D': "Terrible, I'm fed up" //4pt
    },
    {
        'que': 'HOW DO PEOPLE DESCRIBE YOU?',
        'A': "Happy", //1
        'B': 'Socially Awkward', //2
        'C': 'Cold', //3
        'D': 'Unhappy' //4 
    },
    {
        'que': 'DO YOU THINK YOU HAVE A MENTAL HEALTH ISSUE?',
        'A': "I don't think so", //1
        'B': "I'm worried that I'm too anxious", // 2
        'C': "I think I'm too antisocial", //3 
        'D': "Well, I feel very sad a lot of the time" //4
    },
    {
        'que':"WHAT'S YOUR ROLE IN YOUR FAMILY?",
        'A':"The fun, sociable one", //1
        'B':"The sensible one", //2
        'C':"I don't have a role, I'm an outsider", //3
        'D':"The quiet one" //4
    },
    {
        'que':"DO YOU LIKE TO SOCIALIZE?",
        'A':"Yes, I love hanging out", //1
        'B':"Yes, if it's with people I know", //2
        'C':"No, , I like being alone", //3
        'D':"If I can avoid it, I will"  //4
    },
    {
        'que':"CHOOSE A QUOTE",
        'A':"Always look on the bright side of life", //1
        'B':"Worrying is as productive chewing gum", //2
        'C':"Life's a bitch, then you die", //3
        'D':"Hard times reveal true friends" //4
    },
    {
        'que':"ARE YOU IN CONTROL OF YOUR EMOTIONS?",
        'A':"Yes, pretty much all of the time", //1
        'B':"Not really, no", //2
        'C':"I don't really have emotions", //3
        'D':"Yes, I'd say so" //4
    },
    {
        'que':"HOW DO YOU SPEND YOUR FREE TIME?",
        'A':"Seeing friends and family", //1
        'B':"Thinking about things", //2
        'C':"I love to watch horror movies", //3
        'D':"Listening to music" //4
    },
    {
        'que':"CHOOSE ONE WISH",
        'A':"To always be this happy", //1
        'B':"To be able to stop worrying", //2
        'C':"To be on my own more", //3
        'D':"To at least feel content" //4
    },
    {
        'que':"DO YOU LOVE LIFE?",
        'A':"Yes, I really do", //1
        'B':"I do, but I wish it was easier", //2
        'C':"No, not really", //3
        'D':"I try, but it's a struggle for me", //4
    }

    //     10-16 POINTS
    // DISORDER FREE You don't seem to be suffering from any symptons, and overall you are balanced and happy. Remember that mental health issues affect a lot of people, so keep an eye on your friends and family to make sure
    // they're well and happy.

    //     17-24 POINTS
    // ANXIETY You are a serious worrier, and you fear that a panic attack could strike at any time. This holds you back
    // from living your life to the full. Confiding in those around you and talking about your worries can help, and meditation and breathing
    // exercises may calm your racing mind.

    //     25-32 POINTS
    // ANTISOCIAL You prefer to be on your own and you struggle to develop relationships with others. You lack empathy and
    // you don"t exhibit any emotions. Getting to the root of this problem
    // will help you to understand it and tackle it, so speak up.

    //     33-40 POINTS
    // DEPRESSION You are burdened by feelings of hopelessness and helplessness, and you aren't truly engaged in life. You deserve to be happy and healthy, and talking to a doctor could go a long way towards getting you to a more
    // content place.


]
let index = 0;
let total= question.length;
let score=0 ;
const quesBox = document.getElementById("quesBox")

const optionInputs = document.querySelectorAll('.options')

const loadQuestion = () => {
    if(index == total){
        return endQuiz();
    }
    else{
        reset();
        const data = question[index]
        quesBox.innerText = `${index+1}. ${data.que}`;
        optionInputs[0].nextElementSibling.innerText = data.A;
        optionInputs[1].nextElementSibling.innerText = data.B;
        optionInputs[2].nextElementSibling.innerText = data.C;
        optionInputs[3].nextElementSibling.innerText = data.D;

    }
    
}
const submitQuiz = () => {
    const data = question[index]
    const ans = getAnswer()
    if(ans === '0'){
        alert("Please select any of the following option!");
    }
    else if(ans === 'A'){
        score+=1;
        index++;
    }
    else if(ans === 'B'){
        score+=2;
        index++;
    }
    else if(ans === 'C'){
        score+=3;
        index++;
    }
    else if(ans === 'D'){
        score+=4;
        index++;
    }
    loadQuestion();
    
    
    
}

const getAnswer = () => {
    let Answer ='0';
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                Answer = input.value;   
            }    
        }
    )
    return Answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) =>{
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    if(score>= 10 && score<=16){
        document.getElementById('box').innerHTML = `
        <h2>DISORDER FREE</h2>  
        <p>You don't seem to be suffering from any symptons, and overall you are balanced and happy. Remember that mental health issues affect a lot of people, so keep an eye on your friends and family to make sure they're well and happy.</p>
        `
    }
    else if(score>=17 && score<=24){
        document.getElementById('box').innerHTML = `
        <h2>ANXIETY</h2>  
        <p>You are a serious worrier, and you fear that a panic attack could strike at any time. This holds you back from living your life to the full. Confiding in those around you and talking about your worries can help, and meditation and breathing exercises may calm your racing mind.</p>
        `
    }
    else if(score>=25 && score<=32){
        document.getElementById('box').innerHTML = `
        <h2>ANTISOCIAL</h2>  
        <p>You prefer to be on your own and you struggle to develop relationships with others. You lack empathy and you don"t exhibit any emotions. Getting to the root of this problem will help you to understand it and tackle it, so speak up.`
    }
    else if(score>=33 && score<=40){
        document.getElementById('box').innerHTML = `
        <h2>DEPRESSION</h2>  
        <p>You are a serious worrier, and you fear that a panic attack could strike at any time. This holds you back from living your life to the full. Confiding in those around you and talking about your worries can help, and meditation and breathing exercises may calm your racing mind.</p>
        `
    }
    
    
}

loadQuestion();
