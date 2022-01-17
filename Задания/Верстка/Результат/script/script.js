/**
 * sum of numbers through currying
 * @param {number} x 
 * @returns sum of number
 */
const sum = function (x) {
  if (typeof x !== "number") return false;
  let sum = x;
  function currying(y) {
    // console.log( y );
    if (typeof y !== "number" || arguments.length < 1) return sum; 
    sum += y;
    return currying;
  }
  currying.toString = () => sum;
  return currying;
};

  // sum(1)(2)(3)
// sum(1)(2)(3)(4)(5)(6)(); 




/**
 * GET request used object XMLHttpRequest
 * @param {string} url url address
 * @param {string} method GET
 * @returns Promise
 */
const requestXml = (url, method , type) => {
  return new Promise((resolve,reject)=>{
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.responseType = type;
      xhr.send();

      xhr.onload = () => {
        if (xhr.status !== 200) {
          reject(`Error ${xhr.status}: ${xhr.statusText}`); 
        }
        else {
          resolve(xhr.response)
        }
      };
      xhr.onerror = (e) => {reject("Connection error ");};
  })
}

// requestXml("https://jsonplaceholder.typicode.com/posts", "GET", "json")
//   .then(console.log)
//   .catch(console.log);


/**
 * GET request used method Fetch
 * @param {string} url address
 * @returns Promise
 */
const requestFetch = async (url, options = {} ) => {
  try {
    const request = await fetch(url, options);
    if (request.ok) {
      return (json = await request.json());
    } else {
      return `Error : ${request.status}`;
    }
  } 
  catch (error) {
    return "Connection error ";
  }
}

// requestFetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
//   .then(console.log)
//   .catch(console.log);




/**
 * recursion factorial
 * @param {number} n factorial
 * @returns number
 */
const recursion = n => {
  if (typeof n !== "number") { throw new TypeError("not a number"); }
  const iter = (count, acc) => {
    if (count === 1) return acc
    return iter(count - 1, acc * count);
  }

  return  iter(n, 1)
}

// console.log(recursion(3));
// console.log(recursion('3'));



