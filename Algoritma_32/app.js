arr = [1, 3, 6, 13, 54,50];

SuperIncreasing(arr);

function SuperIncreasing(arr) {

    for(let i=1; i<arr.length; i++) {
        let sum = subOfSubsets(arr, i);
        
        if(sum <= arr[i]) console.log(false);
    }

    console.log(true);

}

function subOfSubsets(arr, index) {

    let sum = 0;

    for(let j=0; j<index; j++) {
        sum += arr[j];
    }

    console.log(sum)
}