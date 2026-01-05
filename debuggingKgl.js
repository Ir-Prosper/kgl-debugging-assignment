// ======================================================
// BUG 1: TONNAGE VALIDATION (Logical Error)
// ======================================================

// Incorrect
function validateTonnage_BUG(tonnage) {
  if (tonnage < 1000) {
    return "Minimum 1000kg required";
  }
  return true; // Wrong: should return empty string when valid
}

// Corrected
function validateTonnage(tonnage) {
  if (tonnage < 1000) {
    return "Minimum 1000kg required";
  }
  return ""; // Correct: empty string means "no error"
}

console.log("Bug 1:", validateTonnage(200)); // Expect "" (valid)


// ======================================================
// BUG 2: PHONE VALIDATION (Runtime Error)
// ======================================================

// Incorrect
function validatePhone_BUG(phone) {
  return phone.match(/^07\d{8}$/); // Crashes if phone is null or undefined
}

// Corrected
function validatePhone(phone) {
  if (typeof phone !== "string") {
    return "Invalid phone number"; // Prevents runtime crash
  }
  return phone.match(/^07\d{8}$/) ? "" : "Phone number must start with 07 and be 10 digits";
}

console.log("Bug 2:", validatePhone("078063408")); 


// ======================================================
// BUG 3: NIN VALIDATION (Logical Error)
// ======================================================

// Incorrect
function validateNIN_BUG(nin) {
  if (nin.length != 14) { // Wrong: != instead of !==
    return true; // Wrong meaning
  }
  return false;
}

// Corrected
function validateNIN(nin) {
  if (nin.length !== 14) {
    return "NIN must be 14 characters"; // Clear error message
  }
  return ""; // Valid
}

console.log("Bug 3:", validateNIN("CM12345678902")); 


// ======================================================
// BUG 4: PRICE VALIDATION (this is not Syntax Error, but it's Logical)
// ======================================================

// Incorrect
function validatePrice_BUG(price) {
  return price > 10000; // No type checking
}

// Corrected
function validatePrice(price) {
  if (typeof price !== "number") {
    return "Price must be a number"; // Prevents comparing text to numbers
  }
  if (price < 10000) {
    return "Minimum price is 10000";
  }
  return ""; // Valid
}

console.log("Bug 4:", validatePrice(500)); 


// ======================================================
// BUG 5: EMPTY FIELD CHECK (Logical Error)
// ======================================================

// Incorrect
function isNotEmpty_BUG(value) {
  return value.length > 0; // Crashes if value is a number or null
}

// Corrected
function isNotEmpty(value) {
  if (value === null || value === undefined) return false;
  return String(value).trim().length > 0; 
  // Converts safely to string and trims spaces
}

console.log("Bug 5:", isNotEmpty("Maize")); 


// ======================================================
// BUG 6: DATE VALIDATION (Runtime Error)
// ======================================================

// Incorrect
function validateDate_BUG(dateString) {
  let date = new Date(dateString);
  return date.getTime() > 0; // Crashes if invalid date
}

// Corrected
function validateDate(dateString) {
  let date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid date"; // Prevents runtime crash
  }
  return ""; // Valid
}

console.log("Bug 6:", validateDate("2024-13-10")); 