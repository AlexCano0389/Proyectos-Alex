
var matrix = new Array(10);

for(var i=0; i<10; i++) {
    matrix[i] = new Array(10);
}

function diferenciaDiag(matrix){
    var n = matrix.length;
    var diag1 = 0;
    var diag2 = 0;
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            // los elementos de la giagonal principal
            if(i === j) { 
                diag1 += matrix[i][j];
            }
            // los elementos de la diagonal secundaria
            if(i + j === n - 1){
                diag2 += matrix[i][j];
            }
        }
    }
    return Math.abs(diag1 - diag2);
}