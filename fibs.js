function fibs(n){

    let array = [0,1];

    if (n<2) {
    return array;    
    } 
    else{
    for (let i = 2; i < n; i++) {
        array.push(array[i-2]+array[i-1]);
    }

    return array;
}

}

console.log(fibs(8));