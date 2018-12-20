

function searchObjectListbyid(list, key){
    return(list.filter(item => item.id = key))
} 

function searchObjectListbyvalue(list, key, val){
    return list.filter(item => item[key].includes(val))
} 


export{
    searchObjectListbyid, searchObjectListbyvalue
}