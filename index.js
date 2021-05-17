// Write your solution in this file!
const driver = {};
let newDriver = {};
let deleteDriver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    newDriver = Object.assign({}, driver);
    newDriver[key] = value
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
  
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    deleteDriver = Object.assign({}, driver)
    delete deleteDriver[key]
  
    return deleteDriver;
}
  
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];

    return driver;
}