"use strict";
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
        const success = true; // Change this to false to test rejection
        if (success) {
            resolve("The task succeeded!");
        }
        else {
            reject("The task failed.");
        }
    }, 2000);
}).then((result) => {
    console.log(result); // Output: "The task succeeded!" (after 2 seconds)
}).catch((error) => {
    console.error(error); // Output: "The task failed." (if it fails)
});
;
