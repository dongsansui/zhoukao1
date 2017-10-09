/**
 * Created by John on 2017/10/9.
 */
//去重2
var arr = [1,5,3,5,3,5,7,8];
function quchong(arr){
    var arr1 = arr.sort();
    var newArr = [];
    for(var i=0;i<arr1.length;i++){
        if(arr1[i] != arr1[i+1]){
            newArr.push(arr1[i]);
        }
    }
    return newArr
}
console.log(quchong(arr));