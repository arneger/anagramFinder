function getInput(){
    var input2 = document.getElementById("anagramInput").value;
    document.getElementById("anagramInput").value = '';
    return input2;
    }

function callJson(){
    var anagram = getInput();
    var anagram2 = anagram.split('').sort().join('');
    fetch("all_English_Words.json")
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data){
            var words = data[anagram2];
            var wordOutput = "";
            for(let i = 0; i < words.length; i++){
                console.log(words[i]);
                wordOutput += words[i] + "<br>";
            }
            document.getElementById("wordMatches").innerHTML = wordOutput;
        })
    }
