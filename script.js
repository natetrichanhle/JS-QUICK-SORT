const partition = (arr,left,right) =>{
    let pivot = arr[Math.floor((left + right)/2)];  
    let i = left;
    let j = right;

    while(i <= j){
        while(arr[i] < pivot){
            i++;
        }
        
        while(arr[j] > pivot){
            j--;
        }

        if(i <= j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}

const quicksort = (arr,left,right) => {
    if(arr.length > 1){
        let partitionIndex = partition(arr,left,right);
        if(left < partitionIndex - 1){
            quicksort(arr,left,partitionIndex-1);
        }
        if(partitionIndex < right){
            quicksort(arr,partitionIndex,right);
        }
    }
    return arr;
}
let newArr = [1,3,5,2,4,9,8,7,6,10];
let sortedArr = quicksort(newArr, 0, newArr.length - 1);
console.log(sortedArr);