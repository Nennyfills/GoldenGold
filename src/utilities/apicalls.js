

export function getonebyid(url, id) {
    return fetch(url + "/" + id).then(response => response.json())
        .then(data => {
            return data;
        }).catch((err) => {
            return {}
        })
}


export function getall(url) {
    return fetch(url).then(response => response.json())
        .then(data => {
            return data;
        }).catch((err) => {
            return []
        })
}


export function login(url, data) {
    var logindata = {"username" : data.username , "password":data.password}
    return fetch(url, {
            method: 'POST',
            body: JSON.stringify(logindata),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
        .then(response => {
            if (response.status > 399) {
                return "Invalid username and password"  
            } else {
                return response.json()

            }
        })
}


export function postRequest(url, data) {
    return fetch(url, {
            method: 'POST',
            body: data,
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
        .then(response => {
            if (response.status > 399) {
                return true

            } else {
                return false

            }
        })
}
export function updateRequest(url, data) {
    return fetch(url, {
            method: 'PUT',
            body: data,
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
        .then(response => {
            if (response.status > 399) {
                return true

            } else {
                return false

            }
        })
}