/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(string) {
    const stack = [];
    let i = 0;
    
    // use while loop to iterate over entire string
    while (i < string.length) {
        // push stuff to stack as long as it's not ]
        if (string[i] !== ']') {
            stack.push(string[i]);
            i++;
        // when we reach a ] then we know that we have the complete repeat string available in the array
        } else {
            // now, create an empty string variable, so we can build the repeat string
            let currentStr = '';
            // we are going to use pop to cut away from the stack until we reach [
            // while stack has length and the last element of stack (or only element) is not [
            while (stack.length && stack[stack.length - 1] !== '[') {
                // add stack.pop to the beginning of the string
                currentStr = stack.pop() + currentStr; 
            }
            // after the while loop ends, pop off the [
            stack.pop();

            // then we are going to get the number from stack, also using pop
            // creat an empty num string variable
            let num = '';
            // while stack still has length and the current index is not NaN,
            while (stack.length && !isNaN(stack[stack.length - 1])) {
              // then pop that number and add it to the beginning of the num variable
                num = stack.pop() + num;
            }

            // Then we can take our current string, repeat it the number of times, and push that to the stack
            stack.push(currentStr.repeat(Number(num)));
            i++;
        }
    }
    // in the end, we will join the elements of the stack array and return it
    return stack.join('');   
};