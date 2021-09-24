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
 * DESCRIPTION: This function is to make a deep copy of a given array.
 * The function has an Array (A) as input and will return a copy of A, not a reference to A.
 * deepCloneArrayElements will return false if the input parameter is not an array.
 * 
*/
function deepCloneArrayElements(A){
    if(Array.isArray(A)){
        var deepCloneArray = [];
        for(var i=0; i<A.length; i++){
            deepCloneArray.push(A[i]);
        }
        return deepCloneArray;  
    } else return false;   
}
//////////////////////////////////////////////


/**
 * FUNCTION NAME: findValueOccurences
 * 
 * AUTHOR: Mamadou Ben TRAORE
 * 
 * CREATION DATE: 09242021
 * 
 * LAST MODIFICATION DATE: 09242021
 * 
 * VERSION: 1.0.0 .
 * 
 * 
 * DESCRIPTION: This function is to make a research of a 'value' into an array 'A'.
 * The function has an array 'A' and a 'value' as inputs and will return an object of 3 properties.
 * 'valueToFind': is the value you are looking for into A.
 * 'arrayOfPositions': is an array of indexes of A where you can find the value you are looking for.
 * 'occurencesNumber': is the number of occurences of the value you are looking for.
 * findValueOccurences will return false if the first parameter is not an array.
 * 
*/
function findValueOccurences(A, value){
    if(Array.isArray(A)){
        var resultObject = {};
        resultObject.valueToFind = value;
        resultObject.arrayOfPositions=[];
        for(var i=0; i<A.length; i++){
            if(A[i] == value){
                resultObject.arrayOfPositions.push(i);
            }
        }
        resultObject.occurencesNumber = resultObject.arrayOfPositions.length;
        return resultObject; 
    } else return false;   
}
//////////////////////////////////////////////