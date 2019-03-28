var number = prompt("Introduce un número");

var n = parseInt(number);

var res = IsReversible(n);

function IsReversible(n)
{ 
        let n1; 
	n = n + "";
	n1 = n.split("").reverse().join("");
        let sum = number+n1;
        let sum1 = sum.split('');
        for(let each in sum1) {
           var dig = sum1[each].split(",");
         }
        for (i = 0; i < dig.length; i++) {
             
           if(dig % 2 != 0 && n.length == n1.length) {
           return true;
           }else{

           return false;
           }
         }
        
  
}


console.log(res);
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