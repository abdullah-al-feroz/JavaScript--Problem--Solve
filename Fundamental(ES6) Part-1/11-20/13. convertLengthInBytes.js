
// To achieve this we have two ways the first one is using the Blob API and the second is Buffer API, 
// the first one works with the browser, and the second works with the Node.js environment. 
// blob object is simply a group of bytes that holds the data stored in a file. 
// To read the bytes of a string using blog we create a new instance of Blob object then 
// we pass the string inside it and by using the size property we can get the bytes of a string.


const byte_Size = str => new Blob([str]).size;
console.log(byte_Size('programming'));


// ################## OR ################
const len = (str) => {
    let size = Buffer.from(str).length;
    return size;
  } 
    
  console.log(len("programming"))