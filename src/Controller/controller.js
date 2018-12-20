

function searchObjectListbyid(list, key){
    return(list.filter(item => item.id = key))
} 

function searchObjectListbyvalue(list, key, val){
    return list.filter(item => item[key].includes(val))
} 

function addObjecttoList(list, key, val){
} 


export{
    searchObjectListbyid, searchObjectListbyvalue
}