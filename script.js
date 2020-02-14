fetch("all_English_Names.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data){
        var words = data["abel"]
        for(let i = 0; i < words.length; i++){
            console.log(words[i]);
        }
    })