let pw = 'pratiksHa'
let hasDigit, hasLower, hasUpper;

let valid;
function pwValidation() {
    if (pw.length >= 8) {
        for (let char of pw) {
            if (char >= 'a' && char <= 'z') {
                hasLower = true;
            } else if (char >= 'A' && char <= 'Z') {
                hasUpper = true;
            } else if (char >= '0' && char <= '9') {
                hasDigit = true;
            }
        }
        if (hasLower) {
            if (hasUpper) {
                if (hasDigit) {
                    console.log('The pw is valid !!');
                }
                else {
                    console.log('The pw should contain atleast one digit !!')
                }

            }
            else {
                console.log('The pw should contain atleast one upper case !!')
            }
        }
        else {
            console.log('The pw should contain atleast one lower case !!')
        }
    }
    else {
        console.log('PW should contain atleast 8 characters!!')
    }
}
pwValidation();