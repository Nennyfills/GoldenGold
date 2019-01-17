export var valid = (original) => {
    if (original["firstname"] == undefined ||
        original["lastname"] == undefined ||
        original["email"] == undefined ||
        original["phones"] == undefined ||
        original["type"] == undefined ||
        original["address"] == undefined
    ) {
        return false;
    }
    else {
        return true
    }
}

export var validservice = (original) => {
  
        return true
    
}



export var randomid = (lenght)=> new Promise(function(resolve, reject) {
   var text ="" ;
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
     for (var i = 0; i < lenght; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    resolve(text)
  });
  
  



