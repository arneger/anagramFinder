function getInput(){
    var input2 = document.getElementById("anagramInput").value;
    document.getElementById("anagramInput").value = '';
    return input2;
    }

function callJson(){
    var anagram = getInput();
    var anagramLower = anagram.toLowerCase();
    anagramLower = anagramLower.replace(/\s/g, "");
    var anagram2 = anagramLower.split('').sort().join('');
    fetch("all_English_Words.json")
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data){
            var words = data[anagram2];
            var wordOutput = "";
            for(let i = 0; i < words.length; i++){
                wordOutput += "<br>" + words[i];
            }
            document.getElementById("anagramMatch").innerHTML = "Anagrams found for " + anagram;
            document.getElementById("wordMatches").innerHTML = wordOutput;
        })
    }
