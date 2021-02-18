const reverse = (x) => {
    // convert number to string
    let reversedNumber = x.toString().split('').reverse().join('')

    // parseInt = passes string we created (reversed number) into an int
    // Math.sign = passes +/-, depending on what is entered as the parameter
    let finalNumber = parseInt(reversedNumber) * Math.sign(x)

    // if/else statement 
    // If reversing x causes the value 
    // to go outside the signed 32-bit 
    // integer range [-2^31, 2^31 - 1], 
    // then return 0 
    if (finalNumber >= (Math.pow(-2, 31)) && finalNumber <= (Math.pow(2, 31) - 1)) {
        console.log(finalNumber)
    } else(
        console.log(0)
    )

}
reverse(123) // 321
reverse(-321) // -123 
reverse(120) // 21  
reverse(1534236469) // 0 