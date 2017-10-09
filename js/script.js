/**
 * Created by John on 2017/10/9.
 */
//去重1
var arr = [1,5,3,5,3,5,7,8];
function quchong(arr){
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i]) == -1){
            newArr.push(arr[i]);
        }
    }
    return newArr
}
console.log(quchong(arr));