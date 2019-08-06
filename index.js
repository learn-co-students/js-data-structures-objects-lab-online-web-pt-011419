// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    newDriver = {...driver} 
    newDriver.key = value
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver.key = value
}

