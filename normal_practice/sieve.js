function sieve(n){
    let prime = new Array(n+1).fill(true);

    prime[0] = false;
    prime[1] = false;

    for(let p =2 ; p*p <= n; p++) {
        if(prime[p] == true) {
            for(let multiple = p*p;multiple <= n;multiple += p) {
                prime[multiple] = false;
            }
        }
    }

    const primeNumbers = [];
    for(let i = 2; i <= n; i++) {
        if(prime[i] == true) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

console.log(sieve(10));