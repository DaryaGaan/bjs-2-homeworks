function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
    return true;
  } else {
return false;
}
}

function getUsersNamesInAgeRange(users, gender) {
  if ((users.length == 0) || !((gender === "мужской") || (gender === "женский"))) {
    return 0;
  }

  if (gender === "мужской") {
    let result = users.filter(user => user.gender === "мужской").map(user => user.age)
    return result.reduce((acc, item) => acc + item) / result.length;
  }
    else if (gender === "женский") {
      let result = users.filter(user => user.gender === "женский").map(user => user.age)
    return result.reduce((acc, item) => acc + item) / result.length;
  } 
}
