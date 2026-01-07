/* eslint-disable no-unused-vars */

// ======================================================
// BUG 1: TONNAGE VALIDATION (Logical Error)
// ======================================================

// Incorrect
function validateTonnage_BUG(tonnage) {
  if (tonnage < 1000) {
    return 'Minimum 1000kg required'
  }
  return true
}

// Corrected
function validateTonnage(tonnage) {
  if (tonnage < 1000) {
    return 'Minimum 1000kg required'
  }
  return ''
}

console.log('Bug 1:', validateTonnage(200))

// ======================================================
// BUG 2: PHONE VALIDATION (Runtime Error)
// ======================================================

// Incorrect
function validatePhone_BUG(phone) {
  return phone.match(/^07\d{8}$/)
}

// Corrected
function validatePhone(phone) {
  if (typeof phone !== 'string') {
    return 'Invalid phone number'
  }
  return phone.match(/^07\d{8}$/)
    ? ''
    : 'Phone number must start with 07 and be 10 digits'
}

console.log('Bug 2:', validatePhone('078063408'))

// ======================================================
// BUG 3: NIN VALIDATION (Logical Error)
// ======================================================

// Incorrect
function validateNIN_BUG(nin) {
  if (nin.length != 14) {
    return true
  }
  return false
}

// Corrected
function validateNIN(nin) {
  if (nin.length !== 14) {
    return 'NIN must be 14 characters'
  }
  return ''
}

console.log('Bug 3:', validateNIN('CM12345678902'))

// ======================================================
// BUG 4: PRICE VALIDATION (Logical Error)
// ======================================================

// Incorrect
function validatePrice_BUG(price) {
  return price > 10000
}

// Corrected
function validatePrice(price) {
  if (typeof price !== 'number') {
    return 'Price must be a number'
  }
  if (price < 10000) {
    return 'Minimum price is 10000'
  }
  return ''
}

console.log('Bug 4:', validatePrice(500))

// ======================================================
// BUG 5: EMPTY FIELD CHECK (Logical Error)
// ======================================================

// Incorrect
function isNotEmpty_BUG(value) {
  return value.length > 0
}

// Corrected
function isNotEmpty(value) {
  if (value === null || value === undefined) return false
  return String(value).trim().length > 0
}

console.log('Bug 5:', isNotEmpty('Maize'))

// ======================================================
// BUG 6: DATE VALIDATION (Runtime Error)
// ======================================================

// Incorrect
function validateDate_BUG(dateString) {
  let date = new Date(dateString)
  return date.getTime() > 0
}

// Corrected
function validateDate(dateString) {
  let date = new Date(dateString)
  if (isNaN(date.getTime())) {
    return 'Invalid date'
  }
  return ''
}

console.log('Bug 6:', validateDate('2024-13-10'))
