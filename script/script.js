function getRadioInput(){
    var word = document.getElementById("words");
    if (word.checked){
        return true;
    }
    else {
        return false;
    }
}

function evaluateInput(){
    var radioInput = getRadioInput();
    if (radioInput){
        callJson("json_anagrams/all_English_Words.json", "Word");
    }
    else {
        callJson("json_anagrams/all_English_Names.json", "Name");
    }
}

function getInput(){
    var theInput = document.getElementById("anagramInput").value;
    document.getElementById("anagramInput").value = '';
    return theInput;
    }

function callJson(theJsonFile, valueType){
    var anagram = getInput();
    var anagramLower = anagram.toLowerCase();
    anagramLower = anagramLower.replace(/\s/g, "");
    var anagram2 = anagramLower.split('').sort().join('');
    fetch(theJsonFile)
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data){
            try {
                var words = data[anagram2];
                var wordOutput = "";
                for(let i = 0; i < words.length; i++){
                    if (wordOutput === "") {
                        wordOutput += words[i].toUpperCase();
                    }
                    else {
                        wordOutput += "<br>" + words[i].toUpperCase();
                    }
                }
                document.getElementById("anagramMatch").innerHTML = valueType+' anagrams for ' + '"'+anagram.toUpperCase()+'"';
                document.getElementById("wordMatches").innerHTML = wordOutput;
            }
            catch(err) {
                document.getElementById("wordMatches").innerHTML = '';
                document.getElementById("anagramMatch").innerHTML = valueType + ' anagrams for ' + '"'+anagram.toUpperCase()+'"' + ' was not found';
                console.log(err);
            }
        })
    }

let input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        evaluateInput();
    }
})