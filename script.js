fetch("all_English_Names.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data){
        console.log(data["jkac"])
    })