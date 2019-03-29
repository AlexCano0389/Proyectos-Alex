
function main() {
    let arr = [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12]
    ];
    var output = DiagonalDifference(arr);
    console.log("The absolute difference is: " + output);
}

function DiagonalDifference(arr) {
    
    let diag1 = 0;
    let diag2 = 0;
    for (let i = 0; i < arr.length; i++) {
       
        diag1 = diag1 + arr[i][i];
        diag2 = diag2 + arr[arr.length - 1][i]
    }
    
    return Math.abs(diag1 - diag2)

}

main()
