import TypeNull from './type';
/**
 * check if value is null or delegate checking to given validator
 */
export default function Nullable<Type>(
    value : any,
    notnull : (value : any) => value is Type
) : value is Type|null {
    
    return TypeNull(value) || notnull(value);
}

