import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {
  //BEST WAY TO PROVE TDD
  convert(num) {
    var arrayOfRomans = ['no entra en la lista', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX', 'XXXI', 'XXXII', 'XXXIII', 'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXIX', 'XL', 'XLI', 'XLII', 'XLIII', 'XLIV', 'XLV', 'XLVI', 'XLVII', 'XLVIII', 'XLIX', 'L', 'LI', 'LII', 'LIII', 'LIV', 'LV', 'LVI', 'LVII', 'LVIII', 'LIX', 'LX', 'LXI', 'LXII', 'LXIII', 'LXIV', 'LXV', 'LXVI', 'LXVII', 'LXVIII', 'LXIX', 'LXX', 'LXXI', 'LXXII', 'LXXIII', 'LXXIV', 'LXXV', 'LXXVI', 'LXXVII', 'LXXVIII', 'LXXIX', 'LXXX', 'LXXXI', 'LXXXII', 'LXXXIII', 'LXXXIV', 'LXXXV', 'LXXXVI', 'LXXXVII', 'LXXXVIII', 'LXXXIX', 'XC', 'XCI', 'XCII', 'XCIII', 'XCIV', 'XCV', 'XCVI', 'XCVII', 'XCVIII', 'XCIX', 'C', 'CI', 'CII', 'CIII', 'CIV', 'CV', 'CVI', 'CVII', 'CVIII', 'CIX', 'CX', 'CXI', 'CXII', 'CXIII', 'CXIV', 'CXV', 'CXVI', 'CXVII', 'CXVIII', 'CXIX', 'CXX', 'CXXI', 'CXXII', 'CXXIII', 'CXXIV', 'CXXV', 'CXXVI', 'CXXVII', 'CXXVIII', 'CXXIX', 'CXXX', 'CXXXI', 'CXXXII', 'CXXXIII', 'CXXXIV', 'CXXXV', 'CXXXVI', 'CXXXVII', 'CXXXVIII', 'CXXXIX', 'CXL', 'CXLI', 'CXLII', 'CXLIII', 'CXLIV', 'CXLV', 'CXLVI', 'CXLVII', 'CXLVIII', 'CXLIX', 'CL', 'CLI', 'CLII', 'CLIII', 'CLIV', 'CLV', 'CLVI', 'CLVII', 'CLVIII', 'CLIX', 'CLX', 'CLXI', 'CLXII', 'CLXIII', 'CLXIV', 'CLXV', 'CLXVI', 'CLXVII', 'CLXVIII', 'CLXIX', 'CLXX', 'CLXXI', 'CLXXII', 'CLXXIII', 'CLXXIV', 'CLXXV', 'CLXXVI', 'CLXXVII', 'CLXXVIII', 'CLXXIX', 'CLXXX', 'CLXXXI', 'CLXXXII', 'CLXXXIII', 'CLXXXIV', 'CLXXXV', 'CLXXXVI', 'CLXXXVII', 'CLXXXVIII', 'CLXXXIX', 'CXC', 'CXCI', 'CXCII', 'CXCIII', 'CXCIV', 'CXCV', 'CXCVI', 'CXCVII', 'CXCVIII', 'CXCIX', 'CC', 'CCI', 'CCII', 'CCIII', 'CCIV', 'CCV', 'CCVI', 'CCVII', 'CCVIII', 'CCIX', 'CCX', 'CCXI', 'CCXII', 'CCXIII', 'CCXIV', 'CCXV', 'CCXVI', 'CCXVII', 'CCXVIII', 'CCXIX', 'CCXX', 'CCXXI', 'CCXXII', 'CCXXIII', 'CCXXIV', 'CCXXV', 'CCXXVI', 'CCXXVII', 'CCXXVIII', 'CCXXIX', 'CCXXX', 'CCXXXI', 'CCXXXII', 'CCXXXIII', 'CCXXXIV', 'CCXXXV', 'CCXXXVI', 'CCXXXVII', 'CCXXXVIII', 'CCXXXIX', 'CCXL', 'CCXLI', 'CCXLII', 'CCXLIII', 'CCXLIV', 'CCXLV', 'CCXLVI', 'CCXLVII', 'CCXLVIII', 'CCXLIX', 'CCL', 'CCLI', 'CCLII', 'CCLIII', 'CCLIV', 'CCLV', 'CCLVI', 'CCLVII', 'CCLVIII', 'CCLIX', 'CCLX', 'CCLXI', 'CCLXII', 'CCLXIII', 'CCLXIV', 'CCLXV', 'CCLXVI', 'CCLXVII', 'CCLXVIII', 'CCLXIX', 'CCLXX', 'CCLXXI', 'CCLXXII', 'CCLXXIII', 'CCLXXIV', 'CCLXXV', 'CCLXXVI', 'CCLXXVII', 'CCLXXVIII', 'CCLXXIX', 'CCLXXX', 'CCLXXXI', 'CCLXXXII', 'CCLXXXIII', 'CCLXXXIV', 'CCLXXXV', 'CCLXXXVI', 'CCLXXXVII', 'CCLXXXVIII', 'CCLXXXIX', 'CCXC', 'CCXCI', 'CCXCII', 'CCXCIII', 'CCXCIV', 'CCXCV', 'CCXCVI', 'CCXCVII', 'CCXCVIII','CCXCIX', 'CCC', 'CCCI', 'CCCII', 'CCCIII', 'CCCIV', 'CCCV', 'CCCVI', 'CCCVII', 'CCCVIII', 'CCCIX', 'CCCX', 'CCCXI', 'CCCXII', 'CCCXIII', 'CCCXIV', 'CCCXV', 'CCCXVI', 'CCCXVII', 'CCCXVIII', 'CCCXIX', 'CCCXX', 'CCCXXI', 'CCCXXII', 'CCCXXIII', 'CCCXXIV', 'CCCXXV', 'CCCXXVI', 'CCCXXVII', 'CCCXXVIII', 'CCCXXIX', 'CCCXXX','CCCXXXI', 'CCCXXXII', 'CCCXXXIII', 'CCCXXXIV','CCCXXXV', 'CCCXXXVI', 'CCCXXXVII', 'CCCXXXVIII', 'CCCXXXIX', 'CCCXL', 'CCCXLI', 'CCCXLII', 'CCCXLIII', 'CCCXLIV', 'CCCXLV', 'CCCXLVI', 'CCCXLVII', 'CCCXLVIII', 'CCCXLIX', 'CCCL', 'CCCLI', 'CCCLII', 'CCCLIII', 'CCCLIV', 'CCCLV', 'CCCLVI', 'CCCLVII', 'CCCLVIII', 'CCCLIX', 'CCCLX', 'CCCLXI', 'CCCLXII', 'CCCLXIII', 'CCCLXIV', 'CCCLXV', 'CCCLXVI', 'CCCLXVII', 'CCCLXVIII', 'CCCLXIX', 'CCCLXX', 'CCCLXXI', 'CCCLXXII', 'CCCLXXIII', 'CCCLXXIV', 'CCCLXXV', 'CCCLXXVI', 'CCCLXXVII', 'CCCLXXVIII', 'CCCLXXIX', 'CCCLXXX', 'CCCLXXXI', 'CCCLXXXII', 'CCCLXXXIII', 'CCCLXXXIV', 'CCCLXXXV', 'CCCLXXXVI', 'CCCLXXXVII','CCCLXXXVIII', 'CCCLXXXIX', 'CCCXC', 'CCCXCI', 'CCCXCII', 'CCCXCIII', 'CCCXCIV', 'CCCXCV', 'CCCXCVI', 'CCCXCVII', 'CCCXCVIII', 'CCCXCIX', 'CD', 'CDI', 'CDII', 'CDIII', 'CDIV', 'CDV', 'CDVI', 'CDVII', 'CDVIII', 'CDIX', 'CDX', 'CDXI', 'CDXII', 'CDXIII', 'CDXIV', 'CDXV', 'CDXVI', 'CDXVII', 'CDXVIII', 'CDXIX', 'CDXX', 'CDXXI', 'CDXXII', 'CDXXIII', 'CDXXIV', 'CDXXV', 'CDXXVI', 'CDXXVII', 'CDXXVIII', 'CDXXIX', 'CDXXX', 'CDXXXI', 'CDXXXII', 'CDXXXIII', 'CDXXXIV', 'CDXXXV', 'CDXXXVI', 'CDXXXVII', 'CDXXXVIII', 'CDXXXIX', 'CDXL', 'CDXLI', 'CDXLII', 'CDXLIII', 'CDXLIV', 'CDXLV', 'CDXLVI', 'CDXLVII', 'CDXLVIII', 'CDXLIX', 'CDL', 'CDLI', 'CDLII', 'CDLIII', 'CDLIV', 'CDLV', 'CDLVI', 'CDLVII', 'CDLVIII', 'CDLIX', 'CDLX', 'CDLXI', 'CDLXII', 'CDLXIII', 'CDLXIV', 'CDLXV', 'CDLXVI', 'CDLXVII', 'CDLXVIII', 'CDLXIX', 'CDLXX', 'CDLXXI', 'CDLXXII', 'CDLXXIII', 'CDLXXIV', 'CDLXXV', 'CDLXXVI', 'CDLXXVII', 'CDLXXVIII', 'CDLXXIX', 'CDLXXX', 'CDLXXXI', 'CDLXXXII', 'CDLXXXIII', 'CDLXXXIV', 'CDLXXXV', 'CDLXXXVI', 'CDLXXXVII', 'CDLXXXVIII', 'CDLXXXIX', 'CDXC', 'CDXCI', 'CDXCII', 'CDXCIII', 'CDXCIV', 'CDXCV', 'CDXCVI', 'CDXCVII', 'CDXCVIII', 'CDXCIX', 'D', 'DI', 'DII', 'DIII', 'DIV', 'DV', 'DVI', 'DVII', 'DVIII', 'DIX', 'DX', 'DXI', 'DXII', 'DXIII', 'DXIV', 'DXV', 'DXVI', 'DXVII', 'DXVIII', 'DXIX', 'DXX', 'DXXI', 'DXXII', 'DXXIII', 'DXXIV', 'DXXV', 'DXXVI', 'DXXVII', 'DXXVIII', 'DXXIX', 'DXXX', 'DXXXI', 'DXXXII', 'DXXXIII', 'DXXXIV', 'DXXXV', 'DXXXVI', 'DXXXVII', 'DXXXVIII', 'DXXXIX', 'DXL', 'DXLI', 'DXLII', 'DXLIII', 'DXLIV', 'DXLV'];
    var roman = arrayOfRomans[num];
    return roman;


    //INITIAL SETUP
    // var baseNumbers = { I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, XC: 90, C: 100, CD: 400, D: 500, CM: 900, M: 1000 };
    // var roman = '';
    // if (num == 1) {
    //   roman = 'I';
    // } else if (num == 2) {
    //   roman = 'II';
    // } else if (num == 3) {
    //   roman = 'III';
    // } else if (num == 4) {
    //   roman = 'IV';
    // } else if (num == 5) {
    //   roman = 'V';
    // } else if (num == 6) {
    //   roman = 'VI';
    // }

    // return roman;


    //INTERNET IMPELMENTATION
    // var lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 },
    //   roman = '',
    //   i;
    // for (i in lookup) {
    //   while (num >= lookup[i]) {
    //     roman += i;
    //     num -= lookup[i];
    //   }
    // }
    // return roman;
  }

  constructor() { }
}
