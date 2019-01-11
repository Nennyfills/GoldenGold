export  function getonebyid (url, id) {
     return fetch(url + "/" + id).then(response => response.json())
    .then(data => {    
      return data;
    }).catch((err) => {
        return {}
    })
}


export  function getall (url) {
    return fetch(url).then(response => response.json())
   .then(data => {    
     return data;
   }).catch((err) => {
       return []
   })
}



export function postRequest(url, data) {
    return fetch(url,
        {
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
    return fetch(url,
        {
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
