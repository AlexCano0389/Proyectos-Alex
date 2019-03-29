let reversible = n => {
    let array_n = n.toString().split('')
    let reverse_n = array_n.slice().reverse()
   
    reverse_n = parseInt(reverse_n.join(''))
  
    let array_reverse_n = reverse_n.toString().split('')
   
    if (same_size(array_n, array_reverse_n)) {
        
        let sum = n + reverse_n
      
        let array_sum = sum.toString().split('')

        let filter_sum = array_sum.filter(i => i % 2 == 0)
       
        if (filter_sum.length == 0) {
            return true
        }

    } else {
        return false
    }
    
    return false
}

let same_size = (arr1, arr2) => arr1.length == arr2.length ? true : false
let num_pruebas = [36, 904, 1010, 37, 209, 0]
console.log(num_pruebas)
console.log(num_pruebas.map(prueba => reversible(prueba)))
/*
C#

using System; 
  
class rever { 
      
    // metodo que verifica si es reversible 
    static void checkRever(int n) 
    { 
        int rev = 0, rem = 0; 
      
        // Calcular reverso de n 
        int flag = n; 
        while (flag > 0) 
        { 
            rem = flag % 10; 
            rev *= 10; 
            rev += rem; 
            flag /= 10; 
        } 
      
        // Calculate suma de rever y numero 
        // and its reverse 
        int sum = rev + n; 
      
        // verificar que los digitos de la suma sean impares 
        while (sum > 0 && (rem % 2 != 0)) 
        { 
            rem = sum % 10; 
            sum /= 10; 
        } 
      
        if (sum == 0) 
        Console.WriteLine("numero reversible"); 
        else
        Console.WriteLine("numero no reversible"); 
    } 
      
    // principal
    public static void Main ()  
    { 
        int n = 36; 
          checkRever(n); 
          
    } 
}*/
