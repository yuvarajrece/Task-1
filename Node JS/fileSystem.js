const fs = require('fs');

// Function to read a text file
const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

// Function to write to a text file
const writeFile = (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

// Modify content function
const modifyContent = (content) => {
    // Example modification: converting text to uppercase
    return content.toUpperCase();
};

// Main function
const main = async () => {
    try {
        // Read the content of the input file
        const inputFilePath = 'input.txt';
        const content = await readFile(inputFilePath);

        // Modify the content
        const modifiedContent = modifyContent(content);

        // Write the modified content to a new file
        const outputFilePath = 'output.txt';
        await writeFile(outputFilePath, modifiedContent);

        console.log('File modification completed successfully.');
    } catch (error) {
        console.error('Error:', error);
    }
};

// Call the main function
main();
