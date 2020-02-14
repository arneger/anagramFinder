function getInput(){
    var input2 = document.getElementById("anagramInput").value;
    document.getElementById("anagramInput").value = '';
    return input2;

function callJson(){
    var anagram = getInput();
    fetch("all_English_Names.json")
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data){
            var words = data[anagram];
            var wordOutput = "";
            for(let i = 0; i < words.length; i++){
                console.log(words[i]);
                wordOutput += words[i] + "<br>";
            }
            document.getElementById("wordMatches").innerHTML = wordOutput;
        })
    }
}