// value : which value we are targetting
// next : fn using which we can get the value property
// done : tells if more value can be fetched on



function customIterator(arr){
let idx = 0;
function next(){
    if(idx == arr.length){return {value:undefined,done:true}}

    const nextElement = arr[idx];
    idx++;
    return {value:nextElement,done:false}
}

return {next};

}


