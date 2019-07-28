const driver = {
    name: " ",
    address: " "
};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver};

  newDriver[key] = value;

  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

 return driver;
}

function  deleteFromDriverByKey(driver, key) {
  const nDriver = Object.assign({}, driver);

  nDriver;

  delete nDriver[key];

  return nDriver;

}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  
  return driver;
}
