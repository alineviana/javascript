// Example 1
console.log(name);

const name = 'Aline Viana';

console.log('Keep going...')


// Example 2
try {
    console.log(name);
    const name = 'Aline Viana';
} catch(err) {
    console.log('Error: ', err);
}

console.log('Keep going...')


// Example 3
try {
    console.log(name);
    const name = 'Aline Viana';
} catch (err) {
    console.log('Error: ', err); 
} finally {
    console.log('Keep going...');
}

// Example 4
try {
    const name = 'Aline Viana';

    const myError = new Error('Custom message');

    throw myError;

} catch (err) {
    console.log('Error: ', err); 
} finally {
    console.log('Keep going...');
}


// Example 5
class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try {
    const name = 'Aline Viana';

    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });

    throw myError;

} catch (err) {
    console.log(err);
    console.log(err.data); 
} finally {
    console.log('Keep going...');
}

