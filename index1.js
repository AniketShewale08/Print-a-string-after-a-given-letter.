let sub = document.getElementById("submit");
sub.addEventListener("click", ()=> {
    
    let sentence = document.getElementById("sentence").value;
    let letter = document.getElementById("letter").value;
    let seRe = document.getElementById("seRe");
    let ltRe = document.getElementById("ltRe");
    let re = document.getElementById("re");

    seRe.innerText = sentence;
    ltRe.innerText = letter;
    
    if(sentence.length == 0 || letter.length == 0) {
        re.innerText = "The letter does not exist in the sentence.";
    }

    let count = 0;
    
    for(let i = 0;i < sentence.length - 1; i++){
        if(sentence[i] == letter[0]){
            count++;
            break;
        }
        count += 1;
    }
    
    if(sentence[count - 1] == letter[0] || sentence[count - 1] == letter[0]){
        let res = "";
        for(let j = count; j < sentence.length; j++){
            res += sentence[j]; 
        }  
        re.innerText = res;
    }
    else{
        re.innerText = "The letter does not exist in the sentence."
    }

})

