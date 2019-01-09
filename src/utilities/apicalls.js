var getfunction = (url) => {
    console.log(url)
    fetch(url).then(response => response.json())
    .then(data => {
      return data;
    }).catch((err) => {
        console.log(url)
        return []
    })
}

module.exports = {
    getlist : (url)=> { console.log(url); getfunction(url)}
}