import { LengthOptions } from "../shared/models/length.interface";
import { ValidatorFn } from "./validatorFn";

const _lengthValidator:ValidatorFn = (text:string,options?: LengthOptions): boolean => {
    const textLength = text.trim().length;
    if(options?.min && textLength < options.min) return false;
    if(options?.max && textLength > options.max) return false;
    return true;
}

export const validatePasswordLength: ValidatorFn = (text:string):boolean => _lengthValidator(text, {min:6,max:20});
export const validateNameLength: ValidatorFn = (text:string): boolean => _lengthValidator(text,{min:2});
export const validateBirthdayLength: ValidatorFn = (text:string):boolean => _lengthValidator(text,{min:2})