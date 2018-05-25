const fn = ()=>{
    let foo = {};
        foo.a = 100;
    let arr = [1,2,3,4,5,6];
    let newArr = arr.map((item,index)=>{
        return item*10;
    });
    return newArr;
}
console.log(fn());
