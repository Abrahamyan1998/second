// program to generate fibonacci series up to n terms

// take input from the user


const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}


// ++++++++++++++





for (let i = 10; i < 100; i++){
    if (i%2==0){
        console.log(`${i}-zuyg tiv e`);
    }
else {console.log(`${i}-kent tiv e`);}
}



   
    
