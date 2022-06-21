/**
 * validate user login form data
 */
 export const validateFormData = (email, pass, name) =>{
    let errMessages = {}
    const mailFormat = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const nameFormat = /^[a-zA-Z0-9 ]+$/;
    if(!mailFormat.test(email)) errMessages= {...errMessages, mailErr:"Invalid email!"};
    if(pass?.length < 6) errMessages = {...errMessages, passErr: "Invalid password!"}
    if(name) {
        if(!name.match(nameFormat)) errMessages = {...errMessages, nameErr: "Invalid name!"};
    }
    return errMessages;
}