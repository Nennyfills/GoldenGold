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

