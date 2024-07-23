// 1) Do the  below programs in anonymous function & IIFE
        //  a) Print odd numbers in an array

        var oddnumbers = [1, 2, 3, 4, 5];

        (function(arr) {
             arr.forEach(num => { if(num % 2 !== 0) console.log(num); });
            })(oddnumbers);

    //b) Convert all the strings to title caps in a string array
        
        var strings = ["hello", "world"];
        (function(arr) { arr.forEach(str => { console.log(str.charAt(0).toUpperCase() + str.slice(1)); }); })(strings);


    // c) Sum of all numbers in an array
        
        var numbers = [1, 2, 3, 4, 5];
        var sum = (function(arr) { return arr.reduce((acc, curr) => acc + curr, 0); })(numbers);
        console.log(sum);


    // d) Return all the prime numbers in an array
        var numbers = [1, 2, 3, 4, 5];
        var primes = (function(arr) { return arr.filter(num => { for (let i = 2; i <= Math.sqrt(num); i++) { if (num % i === 0) return false; } return num > 1; }); })(numbers);
        console.log(primes);


    // e) Return all the palindromes in an array
            
            var string = ["level", "hello", "radar"];
            var palindromes = (function(arr) { return arr.filter(str => str === str.split('').reverse().join('')); })(string);
            console.log(palindromes);
    

    // f) Return median of two sorted arrays of the same size
            var arr1 = [1, 3, 5];
            var arr2 = [2, 4, 6];
            var median = (function(arr1, arr2) { return (arr1[arr1.length / 2 - 1] + arr2[arr2.length / 2 - 1]) / 2; })(arr1, arr2);
            console.log(median);


    // g) Remove duplicates from an array
            var numbers = [1, 2, 2, 3, 4, 4, 5];
            var uniqueNumbers = (function(arr) { return arr.filter((num, index) => arr.indexOf(num) === index); })(numbers);
            console.log(uniqueNumbers);



    // h) Rotate an array by k times
            var numbers = [1, 2, 3, 4, 5];
            var k = 2;
            var rotatedArray = (function(arr, k) { return arr.slice(k).concat(arr.slice(0, k)); })(numbers, k);
            console.log(rotatedArray);    
            
            


// 2) Do the below programs in arrow functions.


    // a) Print odd numbers in an array

            var numbers = [1, 2, 3, 4, 5];
            numbers.forEach(function(num) { if (num % 2 !== 0) console.log(num); });
    

    // b) Convert all the strings to title caps in a string array

            var strings = ["hello", "world"];
            strings.forEach(function(str) { console.log(str.charAt(0).toUpperCase() + str.slice(1)); });
    

    // c) Sum of all numbers in an array

            var numbers = [1, 2, 3, 4, 5];
            var sum = numbers.reduce(function(acc, curr) { return acc + curr; }, 0);
            console.log(sum);

    // d) Return all the prime numbers in an array

            var numbers = [1, 2, 3, 4, 5];
            var primes = numbers.filter(function(num) { for (var i = 2; i <= Math.sqrt(num); i++) { if (num % i === 0) return false; } return num > 1; });
            console.log(primes);

    // e) Return all the palindromes in an array
    
            var strings = ["level", "hello", "radar"];
            var palindromes = strings.filter(function(str) { return str === str.split('').reverse().join(''); });
            console.log(palindromes);