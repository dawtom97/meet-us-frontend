import { ValidatorFn } from "./validatorFn";

export const validateEmail: ValidatorFn = (email:string):boolean => {
    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return reg.test(email.trim());
}