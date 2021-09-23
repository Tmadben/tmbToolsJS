/**
 * FUNCTION NAME: getDistinctArrayElements
 * 
 * AUTHOR: Mamadou Ben TRAORE
 * 
 * CREATION DATE: 09222021
 * 
 * LAST MODIFICATION DATE: 09222021
 * 
 * VERSION: 1.0.0 .
 * 
 * 
 * DESCRIPTION: This function has an Array (A) as input and will return another array with only the first occurence of each element of A.
 * getDistinctArrayElements will return false if the input parameter is not an array.
 * getDistinctArrayElements will return [undefined,0] for [,0] as input parameter.
 * 
*/
function getDistinctArrayElements(A){
    if(Array.isArray(A)){
        var distinctElementArray = [];
        for(var i=0; i<A.length; i++){
            if(distinctElementArray.indexOf(A[i]) == -1){
                distinctElementArray.push(A[i]);
            }
        }
        return distinctElementArray;  
    } else return false;   
}
//////////////////////////////////////////////


/**
 * FUNCTION NAME: deepCloneArrayElements
 * 
 * AUTHOR: Mamadou Ben TRAORE
 * 
 * CREATION DATE: 09232021
 * 
 * LAST MODIFICATION DATE: 09232021
 * 
 * VERSION: 1.0.0 .
 * 
 * 
 * DESCRIPTION: This function has an Array (A) as input and will return a copy of A, not a reference to A.
 * deepCloneArrayElements will return false if the input parameter is not an array.
 * 
*/
function deepCloneArrayElements(A){
    if(Array.isArray(A)){
        var distinctElementArray = [];
        for(var i=0; i<A.length; i++){
            distinctElementArray.push(A[i]);
        }
        return distinctElementArray;  
    } else return false;   
}
//////////////////////////////////////////////