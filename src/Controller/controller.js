function searchObjectListbyid(list, key) {
  return list.filter(item => (item.id = key));
}

function searchObjectListbyvalue(list, values = {}) {
  var results = [];
  Object.keys(values).forEach(async function eachKey(key) {
    var r = await list.filter(item => {
      if (item[key].includes(values[key])) {
        results.push(item);
      } else {
      }
    });
  });

  return results;
}

const searchBy = query => {
  return function(x) {
    return x.name.toLowerCase().includes(query.toLowerCase()) || !query;
  };
};
function addObjecttoList(list, key, val) {}

export { searchBy, searchObjectListbyid, searchObjectListbyvalue };
