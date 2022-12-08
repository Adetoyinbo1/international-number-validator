// JavaScript Document
// npm i phone
const { phone } = require('phone');

exports.InternationalNumberValidate = async function (options) {
    // parsing whole options once so no need to do again for each params
    options = this.parse(options);

    //Parse data
    const number = phone(options.phone_number, { country: options.country_code });

    const res = {};
    res.PhoneNumber = number.phoneNumber
    res.IsValid = number.isValid
    res.CountryIso2 = number.countryIso2
    res.CountryIso3 = number.countryIso3
    res.CountryCode = number.countryCode
    return res;

}