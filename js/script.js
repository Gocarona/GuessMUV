//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}
let que_count1 = 0;
let timeValue =  20;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue =20; 
    que_count1 = 0;
    que_count = Math.floor(Math.random() * 53);
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count1 < 4){ //if question count is less than total question length
        que_count1++;
        que_count = Math.floor(Math.random() * 53); //increment the que_count value
        //que_count1++;
         que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    const count = questions[index].numb;
    var que_tag;
    //creating a new span and div tag for question and option and passing the value using array index
    switch(count){
        case 1:
            que_tag = '<span>'+ '<img src="Q1nuvve nuvve.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 2:
            que_tag = '<span>'+ '<img src="Q2.jpg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 3:
            que_tag = '<span>'+ '<img src="Q3Avengers.jpg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 4:
            que_tag = '<span>'+ '<img src="Q4Hello.jpg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 5:
            que_tag = '<span>'+ '<img src="Q5love story.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 6:
            que_tag = '<span>'+ '<img src="Q6Oopiri.jpg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 7:
            que_tag = '<span>'+ '<img src="Q7fidaa.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 8:
            que_tag = '<span>'+ '<img src="Q8Ageofultron.jpg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 9:
            que_tag = '<span>'+ '<img src="Q9nijam.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 10:
            que_tag = '<span>'+ '<img src="Q10kabaadi.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 11:
            que_tag = '<span>'+ '<img src="Q11bommarillu.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 12:
            que_tag = '<span>'+ '<img src="Q12pellichoopulu.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 13:
            que_tag = '<span>'+ '<img src="Q13snehithudu.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 14:
            que_tag = '<span>'+ '<img src="Q14spyder.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 15:
            que_tag = '<span>'+ '<img src="Q15happy birthday.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 16:
            que_tag = '<span>'+ '<img src="Q16middle class melodies.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 17:
            que_tag = '<span>'+ '<img src="Q17saahasam.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 18:
            que_tag = '<span>'+ '<img src="Q18.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 19:
            que_tag = '<span>'+ '<img src="Q19ala.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 20:
            que_tag = '<span>'+ '<img src="Q20lingaa.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 21:
            que_tag = '<span>'+ '<img src="Q21vedam.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 22:
            que_tag = '<span>'+ '<img src="Q22nuvve kavali.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 23:
            que_tag = '<span>'+ '<img src="Q23prema katha chithram.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 24:
            que_tag = '<span>'+ '<img src="Q24khadi.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 25:
            que_tag = '<span>'+ '<img src="Q25mahanati.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 26:
            que_tag = '<span>'+ '<img src="Q26hit the 1st case.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 27:
            que_tag = '<span>'+ '<img src="Q27satyam.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 28:
            que_tag = '<span>'+ '<img src="Q28ninne premistha.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 29:
            que_tag = '<span>'+ '<img src="Q29vakeel saab.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 30:
            que_tag = '<span>'+ '<img src="Q30f3.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 31:
            que_tag = '<span>'+ '<img src="Q31devudu chesina manushuluu.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 32:
            que_tag = '<span>'+ '<img src="Q32shatamanam bhavati.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 33:
            que_tag = '<span>'+ '<img src="Q33nannaku prematho.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 34:
            que_tag = '<span>'+ '<img src="Q34gruham.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 35:
            que_tag = '<span>'+ '<img src="Q35chalo.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 36:
            que_tag = '<span>'+ '<img src="Q36kshanam.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 37:
            que_tag = '<span>'+ '<img src="Q37dj.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 38:
            que_tag = '<span>'+ '<img src="Q38baahubali the conclusion.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 39:
            que_tag = '<span>'+ '<img src="Q39gentleman.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 40:
            que_tag = '<span>'+ '<img src="Q40orey bujjiga.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 41:
            que_tag = '<span>'+ '<img src="Q41yevade subramanyam.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 42:
            que_tag = '<span>'+ '<img src="Q42bheemla nayak.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 43:
            que_tag = '<span>'+ '<img src="Q43.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 44:
            que_tag = '<span>'+ '<img src="Q45Rocketry.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 45:
            que_tag = '<span>'+ '<img src="Q44Major.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 46:
            que_tag = '<span>'+ '<img src="Q46Color.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 47:
            que_tag = '<span>'+ '<img src="Q47Radhe.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 48:
            que_tag = '<span>'+ '<img src="Q48Sneham.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 49:
            que_tag = '<span>'+ '<img src="Q49Rajachora.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 50:
            que_tag = '<span>'+ '<img src="Q50Malleswari.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 51:
            que_tag = '<span>'+ '<img src="Q51manmadhudu.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 52:
            que_tag = '<span>'+ '<img src="Q52Swamy.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        case 53:
            que_tag = '<span>'+ '<img src="Q53.jpeg" alt="He is angry,Intellegent,Ranker,Lover" width="100%" height="75">'+'</span>';
            break;
        default: 
            que_tag = '<span>'+'<h1>Something went wrong</h1>'+'<span>'

    }
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    // if(userAns == correcAns){ //if user selected option is equal to array's correct answer
    //     userScore += 1; //upgrading score value with 1
    //     answer.classList.add("correct"); //adding green color to correct selected option
    //     answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    //     console.log("Correct Answer");
    //     console.log("Your correct answers = " + userScore);
    // }
    if(userAns!="")
    {
        answer.classList.add("correct"); //adding green color to correct selected option
        if(userAns == correcAns){
        userScore+=1;}
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
    // else{
    //     answer.classList.add("incorrect"); //adding red color to correct selected option
    //     answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    //     console.log("Wrong Answer");

    //     for(i=0; i < allOptions; i++){
    //         if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
    //             option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
    //             option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
    //             console.log("Auto selected correct answer.");
    //         }
    //     }
    // }

 }

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! ????, You got <p>'+ userScore +'</p> out of <p>'+ 5 +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice ????, You got <p>'+ userScore +'</p> out of <p>'+ 5 +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry ????, You got only <p>'+ userScore +'</p> out of <p>'+ 5 +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            next_btn.classList.add("show"); //show the next button if user selected any option
            for(i=0; i < 4; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            timeText.textContent = "Time Off"; //change the time text to time off
            //const allOptions = option_list.children.length; //getting all option items
            // let correcAns = questions[que_count].answer; //getting correct answer from array
            // for(i=0; i < allOptions; i++){
            //     if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
            //         option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
            //         option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
            //         console.log("Time Off: Auto selected correct answer.");
            //     }
            // }
 
            
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 60);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ 5 +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
