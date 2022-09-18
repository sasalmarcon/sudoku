const construct2DArray = (original, m, n) =>{
    if (original.length !== (m*n)) return []
    let result = []
    let arr = []
    for (let i = 0; i < original.length; i++){
        arr.push(original[i])
        if (arr.length === n){
            result.push(arr)
            arr = []
        }
    }
    return result
};

export default construct2DArray;