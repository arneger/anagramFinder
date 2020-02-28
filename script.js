function getRadioInput(){
    var rd1 = document.getElementById("words");
    if (rd1.checked){
        return true;
    }
    else {
        return false;
    }
}

function test(){
    var radioInput = getRadioInput();
    if (radioInput){
        callJson("all_English_Words.json", "Word");
    }
    else {
        callJson("all_English_Names.json", "Name");
    }
}

function getInput(){
    var input2 = document.getElementById("anagramInput").value;
    document.getElementById("anagramInput").value = '';
    return input2;
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
                        wordOutput += words[i];
                    }
                    else {
                        wordOutput += "<br>" + words[i];
                    }
                }
                document.getElementById("anagramMatch").innerHTML = valueType+' anagrams found for ' + '"'+anagram+'"';
                document.getElementById("wordMatches").innerHTML = wordOutput;
            }
            catch(err) {
                document.getElementById("wordMatches").innerHTML = '';
                document.getElementById("anagramMatch").innerHTML = valueType + ' anagrams for ' + '"'+anagram+'"' + ' was not found';
                console.log(err);
            }
        })
    }
