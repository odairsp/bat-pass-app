export default function generatePassword() {

    let password: string = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$';
    let passwordLength = 10;


    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(
            Math.floor(
                Math.random() * characters.length
            )
        );
    }


    return password;
}