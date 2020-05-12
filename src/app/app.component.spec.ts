import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RomanNumeralsService } from './roman-numerals.service';

describe('AppComponent', () => {
  let romanService: RomanNumeralsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    TestBed.configureTestingModule({ providers: [RomanNumeralsService] });
  }));

  beforeEach(() => {
    romanService = TestBed.inject(RomanNumeralsService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should change 1', () => {

    expect(romanService.convert(1)).toBe('I');
  });

  it('should change 2', () => {

    expect(romanService.convert(2)).toBe('II');
  });

  it('should change 3', () => {

    expect(romanService.convert(3)).toBe('III');
  });

  it('should change 4', () => {

    expect(romanService.convert(4)).toBe('IV');
  });

  it('should change 5', () => {

    expect(romanService.convert(5)).toBe('V');
  });

  it('should change 6', () => {

    expect(romanService.convert(6)).toBe('VI');
  });

  it('should change 7', () => {

    expect(romanService.convert(7)).toBe('VII');
  });

  it('should change 8', () => {

    expect(romanService.convert(8)).toBe('VIII');
  });

  it('should change 9', () => {

    expect(romanService.convert(9)).toBe('IX');
  });

  it('should change 10', () => {

    expect(romanService.convert(10)).toBe('X');
  });

  it('should change 11', () => {

    expect(romanService.convert(11)).toBe('XI');
  });

  it('should change 12', () => {

    expect(romanService.convert(12)).toBe('XII');
  });

  it('should change 13', () => {

    expect(romanService.convert(13)).toBe('XIII');
  });

  it('should change 14', () => {

    expect(romanService.convert(14)).toBe('XIV');
  });

  it('should change 15', () => {

    expect(romanService.convert(15)).toBe('XV');
  });

  it('should change 16', () => {

    expect(romanService.convert(16)).toBe('XVI');
  });

  it('should change 17', () => {

    expect(romanService.convert(17)).toBe('XVII');
  });

  it('should change 18', () => {

    expect(romanService.convert(18)).toBe('XVIII');
  });

  it('should change 19', () => {

    expect(romanService.convert(19)).toBe('XIX');
  });

  it('should change 20', () => {

    expect(romanService.convert(20)).toBe('XX');
  });

  it('should change 21', () => {

    expect(romanService.convert(21)).toBe('XXI');
  });

  it('should change 22', () => {

    expect(romanService.convert(22)).toBe('XXII');
  });

  it('should change 23', () => {

    expect(romanService.convert(23)).toBe('XXIII');
  });

  it('should change 24', () => {

    expect(romanService.convert(24)).toBe('XXIV');
  });

  it('should change 25', () => {

    expect(romanService.convert(25)).toBe('XXV');
  });

  it('should change 26', () => {

    expect(romanService.convert(26)).toBe('XXVI');
  });

  it('should change 27', () => {

    expect(romanService.convert(27)).toBe('XXVII');
  });

  it('should change 28', () => {

    expect(romanService.convert(28)).toBe('XXVIII');
  });

  it('should change 29', () => {

    expect(romanService.convert(29)).toBe('XXIX');
  });

  it('should change 30', () => {

    expect(romanService.convert(30)).toBe('XXX');
  });

  it('should change 31', () => {

    expect(romanService.convert(31)).toBe('XXXI');
  });

  it('should change 32', () => {

    expect(romanService.convert(32)).toBe('XXXII');
  });

  it('should change 34', () => {
    expect(romanService.convert(34)).toBe('XXXIV');
  });

  it('should change 35', () => {
    expect(romanService.convert(35)).toBe('XXXV');
  });

  it('should change 36', () => {
    expect(romanService.convert(36)).toBe('XXXVI');
  });

  it('should change 37', () => {
    expect(romanService.convert(37)).toBe('XXXVII');
  });

  it('should change 38', () => {
    expect(romanService.convert(38)).toBe('XXXVIII');
  });

  it('should change 39', () => {
    expect(romanService.convert(39)).toBe('XXXIX');
  });

  it('should change 40', () => {
    expect(romanService.convert(40)).toBe('XL');
  });

  it('should change 41', () => {
    expect(romanService.convert(41)).toBe('XLI');
  });

  it('should change 42', () => {
    expect(romanService.convert(42)).toBe('XLII');
  });

  it('should change 43', () => {
    expect(romanService.convert(43)).toBe('XLIII');
  });

  it('should change 44', () => {
    expect(romanService.convert(44)).toBe('XLIV');
  });

  it('should change 45', () => {
    expect(romanService.convert(45)).toBe('XLV');
  });

  it('should change 46', () => {
    expect(romanService.convert(46)).toBe('XLVI');
  });

  it('should change 47', () => {
    expect(romanService.convert(47)).toBe('XLVII');
  });

  it('should change 48', () => {
    expect(romanService.convert(48)).toBe('XLVIII');
  });

  it('should change 49', () => {
    expect(romanService.convert(49)).toBe('XLIX');
  });

  it('should change 50', () => {
    expect(romanService.convert(50)).toBe('L');
  });

  it('should change 51', () => {
    expect(romanService.convert(51)).toBe('LI');
  });

  it('should change 52', () => {
    expect(romanService.convert(52)).toBe('LII');
  });

  it('should change 53', () => {
    expect(romanService.convert(53)).toBe('LIII');
  });

  it('should change 54', () => {
    expect(romanService.convert(54)).toBe('LIV');
  });

  it('should change 55', () => {
    expect(romanService.convert(55)).toBe('LV');
  });

  it('should change 56', () => {
    expect(romanService.convert(56)).toBe('LVI');
  });

  it('should change 57', () => {
    expect(romanService.convert(57)).toBe('LVII');
  });

  it('should change 58', () => {
    expect(romanService.convert(58)).toBe('LVIII');
  });

  it('should change 59', () => {
    expect(romanService.convert(59)).toBe('LIX');
  });

  it('should change 60', () => {
    expect(romanService.convert(60)).toBe('LX');
  });

  it('should change 61', () => {
    expect(romanService.convert(61)).toBe('LXI');
  });

  it('should change 62', () => {
    expect(romanService.convert(62)).toBe('LXII');
  });

  it('should change 63', () => {
    expect(romanService.convert(63)).toBe('LXIII');
  });

  it('should change 64', () => {
    expect(romanService.convert(64)).toBe('LXIV');
  });

  it('should change 65', () => {
    expect(romanService.convert(65)).toBe('LXV');
  });

  it('should change 66', () => {
    expect(romanService.convert(66)).toBe('LXVI');
  });

  it('should change 67', () => {
    expect(romanService.convert(67)).toBe('LXVII');
  });

  it('should change 68', () => {
    expect(romanService.convert(68)).toBe('LXVIII');
  });

  it('should change 69', () => {
    expect(romanService.convert(69)).toBe('LXIX');
  });

  it('should change 70', () => {
    expect(romanService.convert(70)).toBe('LXX');
  });

  it('should change 71', () => {
    expect(romanService.convert(71)).toBe('LXXI');
  });

  it('should change 72', () => {
    expect(romanService.convert(72)).toBe('LXXII');
  });

  it('should change 73', () => {
    expect(romanService.convert(73)).toBe('LXXIII');
  });

  it('should change 74', () => {
    expect(romanService.convert(74)).toBe('LXXIV');
  });

  it('should change 75', () => {
    expect(romanService.convert(75)).toBe('LXXV');
  });

  it('should change 76', () => {
    expect(romanService.convert(76)).toBe('LXXVI');
  });

  it('should change 77', () => {
    expect(romanService.convert(77)).toBe('LXXVII');
  });

  it('should change 78', () => {
    expect(romanService.convert(78)).toBe('LXXVIII');
  });

  it('should change 79', () => {
    expect(romanService.convert(79)).toBe('LXXIX');
  });

  it('should change 80', () => {
    expect(romanService.convert(80)).toBe('LXXX');
  });

  it('should change 81', () => {
    expect(romanService.convert(81)).toBe('LXXXI');
  });

  it('should change 82', () => {
    expect(romanService.convert(82)).toBe('LXXXII');
  });

  it('should change 83', () => {
    expect(romanService.convert(83)).toBe('LXXXIII');
  });

  it('should change 84', () => {
    expect(romanService.convert(84)).toBe('LXXXIV');
  });

  it('should change 85', () => {
    expect(romanService.convert(85)).toBe('LXXXV');
  });

  it('should change 86', () => {
    expect(romanService.convert(86)).toBe('LXXXVI');
  });

  it('should change 87', () => {
    expect(romanService.convert(87)).toBe('LXXXVII');
  });

  it('should change 88', () => {
    expect(romanService.convert(88)).toBe('LXXXVIII');
  });

  it('should change 89', () => {
    expect(romanService.convert(89)).toBe('LXXXIX');
  });

  it('should change 90', () => {
    expect(romanService.convert(90)).toBe('XC');
  });

  it('should change 91', () => {
    expect(romanService.convert(91)).toBe('XCI');
  });

  it('should change 92', () => {
    expect(romanService.convert(92)).toBe('XCII');
  });

  it('should change 93', () => {
    expect(romanService.convert(93)).toBe('XCIII');
  });

  it('should change 94', () => {
    expect(romanService.convert(94)).toBe('XCIV');
  });

  it('should change 95', () => {
    expect(romanService.convert(95)).toBe('XCV');
  });

  it('should change 96', () => {
    expect(romanService.convert(96)).toBe('XCVI');
  });

  it('should change 97', () => {
    expect(romanService.convert(97)).toBe('XCVII');
  });

  it('should change 98', () => {
    expect(romanService.convert(98)).toBe('XCVIII');
  });

  it('should change 99', () => {
    expect(romanService.convert(99)).toBe('XCIX');
  });

  it('should change 100', () => {
    expect(romanService.convert(100)).toBe('C');
  });

  it('should change 101', () => {
    expect(romanService.convert(101)).toBe('CI');
  });

  it('should change 102', () => {
    expect(romanService.convert(102)).toBe('CII');
  });

  it('should change 103', () => {
    expect(romanService.convert(103)).toBe('CIII');
  });

  it('should change 104', () => {
    expect(romanService.convert(104)).toBe('CIV');
  });

  it('should change 105', () => {
    expect(romanService.convert(105)).toBe('CV');
  });

  it('should change 106', () => {
    expect(romanService.convert(106)).toBe('CVI');
  });

  it('should change 107', () => {
    expect(romanService.convert(107)).toBe('CVII');
  });

  it('should change 108', () => {
    expect(romanService.convert(108)).toBe('CVIII');
  });

  it('should change 109', () => {
    expect(romanService.convert(109)).toBe('CIX');
  });

  it('should change 110', () => {
    expect(romanService.convert(110)).toBe('CX');
  });

  it('should change 111', () => {
    expect(romanService.convert(111)).toBe('CXI');
  });

  it('should change 112', () => {
    expect(romanService.convert(112)).toBe('CXII');
  });

  it('should change 113', () => {
    expect(romanService.convert(113)).toBe('CXIII');
  });

  it('should change 114', () => {
    expect(romanService.convert(114)).toBe('CXIV');
  });

  it('should change 115', () => {
    expect(romanService.convert(115)).toBe('CXV');
  });

  it('should change 116', () => {
    expect(romanService.convert(116)).toBe('CXVI');
  });

  it('should change 117', () => {
    expect(romanService.convert(117)).toBe('CXVII');
  });

  it('should change 118', () => {
    expect(romanService.convert(118)).toBe('CXVIII');
  });

  it('should change 114', () => {
    expect(romanService.convert(114)).toBe('CXIV');
  });

  it('should change 119', () => {
    expect(romanService.convert(119)).toBe('CXIX');
  });

  it('should change 120', () => {
    expect(romanService.convert(120)).toBe('CXX');
  });

  it('should change 121', () => {
    expect(romanService.convert(121)).toBe('CXXI');
  });

  it('should change 122', () => {
    expect(romanService.convert(122)).toBe('CXXII');
  });

  it('should change 123', () => {
    expect(romanService.convert(123)).toBe('CXXIII');
  });

  it('should change 124', () => {
    expect(romanService.convert(124)).toBe('CXXIV');
  });

  it('should change 125', () => {
    expect(romanService.convert(125)).toBe('CXXV');
  });

  it('should change 126', () => {
    expect(romanService.convert(126)).toBe('CXXVI');
  });

  it('should change 127', () => {
    expect(romanService.convert(127)).toBe('CXXVII');
  });

  it('should change 128', () => {
    expect(romanService.convert(128)).toBe('CXXVIII');
  });

  it('should change 129', () => {
    expect(romanService.convert(129)).toBe('CXXIX');
  });

  it('should change 130', () => {
    expect(romanService.convert(130)).toBe('CXXX');
  });

  it('should change 131', () => {
    expect(romanService.convert(131)).toBe('CXXXI');
  });

  it('should change 132', () => {
    expect(romanService.convert(132)).toBe('CXXXII');
  });

  it('should change 133', () => {
    expect(romanService.convert(133)).toBe('CXXXIII');
  });

  it('should change 134', () => {
    expect(romanService.convert(134)).toBe('CXXXIV');
  });

  it('should change 135', () => {
    expect(romanService.convert(135)).toBe('CXXXV');
  });

  it('should change 136', () => {
    expect(romanService.convert(136)).toBe('CXXXVI');
  });

  it('should change 137', () => {
    expect(romanService.convert(137)).toBe('CXXXVII');
  });

  it('should change 138', () => {
    expect(romanService.convert(138)).toBe('CXXXVIII');
  });

  it('should change 139', () => {
    expect(romanService.convert(139)).toBe('CXXXIX');
  });

  it('should change 140', () => {
    expect(romanService.convert(140)).toBe('CXL');
  });

  it('should change 141', () => {
    expect(romanService.convert(141)).toBe('CXLI');
  });

  it('should change 142', () => {
    expect(romanService.convert(142)).toBe('CXLII');
  });

  it('should change 143', () => {
    expect(romanService.convert(143)).toBe('CXLIII');
  });

  it('should change 144', () => {
    expect(romanService.convert(144)).toBe('CXLIV');
  });

  it('should change 145', () => {
    expect(romanService.convert(145)).toBe('CXLV');
  });

  it('should change 146', () => {
    expect(romanService.convert(146)).toBe('CXLVI');
  });

  it('should change 147', () => {
    expect(romanService.convert(147)).toBe('CXLVII');
  });

  it('should change 148', () => {
    expect(romanService.convert(148)).toBe('CXLVIII');
  });

  it('should change 149', () => {
    expect(romanService.convert(149)).toBe('CXLIX');
  });

  it('should change 150', () => {
    expect(romanService.convert(150)).toBe('CL');
  });

  it('should change 151', () => {
    expect(romanService.convert(151)).toBe('CLI');
  });

  it('should change 152', () => {
    expect(romanService.convert(152)).toBe('CLII');
  });

  it('should change 153', () => {
    expect(romanService.convert(153)).toBe('CLIII');
  });

  it('should change 154', () => {
    expect(romanService.convert(154)).toBe('CLIV');
  });

  it('should change 155', () => {
    expect(romanService.convert(155)).toBe('CLV');
  });

  it('should change 156', () => {
    expect(romanService.convert(156)).toBe('CLVI');
  });

  it('should change 157', () => {
    expect(romanService.convert(157)).toBe('CLVII');
  });

  it('should change 158', () => {
    expect(romanService.convert(158)).toBe('CLVIII');
  });

  it('should change 159', () => {
    expect(romanService.convert(159)).toBe('CLIX');
  });

  it('should change 160', () => {
    expect(romanService.convert(160)).toBe('CLX');
  });

  it('should change 161', () => {
    expect(romanService.convert(161)).toBe('CLXI');
  });

  it('should change 162', () => {
    expect(romanService.convert(162)).toBe('CLXII');
  });

  it('should change 163', () => {
    expect(romanService.convert(163)).toBe('CLXIII');
  });

  it('should change 164', () => {
    expect(romanService.convert(164)).toBe('CLXIV');
  });

  it('should change 165', () => {
    expect(romanService.convert(165)).toBe('CLXV');
  });

  it('should change 166', () => {
    expect(romanService.convert(166)).toBe('CLXVI');
  });

  it('should change 167', () => {
    expect(romanService.convert(167)).toBe('CLXVII');
  });

  it('should change 168', () => {
    expect(romanService.convert(168)).toBe('CLXVIII');
  });

  it('should change 169', () => {
    expect(romanService.convert(169)).toBe('CLXIX');
  });

  it('should change 170', () => {
    expect(romanService.convert(170)).toBe('CLXX');
  });

  it('should change 171', () => {
    expect(romanService.convert(171)).toBe('CLXXI');
  });

  it('should change 172', () => {
    expect(romanService.convert(172)).toBe('CLXXII');
  });

  it('should change 173', () => {
    expect(romanService.convert(173)).toBe('CLXXIII');
  });

  it('should change 174', () => {
    expect(romanService.convert(174)).toBe('CLXXIV');
  });

  it('should change 175', () => {
    expect(romanService.convert(175)).toBe('CLXXV');
  });

  it('should change 176', () => {
    expect(romanService.convert(176)).toBe('CLXXVI');
  });

  it('should change 177', () => {
    expect(romanService.convert(177)).toBe('CLXXVII');
  });

  it('should change 178', () => {
    expect(romanService.convert(178)).toBe('CLXXVIII');
  });

  it('should change 179', () => {
    expect(romanService.convert(179)).toBe('CLXXIX');
  });

  it('should change 180', () => {
    expect(romanService.convert(180)).toBe('CLXXX');
  });

  it('should change 181', () => {
    expect(romanService.convert(181)).toBe('CLXXXI');
  });

  it('should change 182', () => {
    expect(romanService.convert(182)).toBe('CLXXXII');
  });

  it('should change 183', () => {
    expect(romanService.convert(183)).toBe('CLXXXIII');
  });

  it('should change 184', () => {
    expect(romanService.convert(184)).toBe('CLXXXIV');
  });

  it('should change 185', () => {
    expect(romanService.convert(185)).toBe('CLXXXV');
  });

  it('should change 186', () => {
    expect(romanService.convert(186)).toBe('CLXXXVI');
  });

  it('should change 187', () => {
    expect(romanService.convert(187)).toBe('CLXXXVII');
  });

  it('should change 188', () => {
    expect(romanService.convert(188)).toBe('CLXXXVIII');
  });

  it('should change 189', () => {
    expect(romanService.convert(189)).toBe('CLXXXIX');
  });

  it('should change 190', () => {
    expect(romanService.convert(190)).toBe('CXC');
  });

  it('should change 191', () => {
    expect(romanService.convert(191)).toBe('CXCI');
  });

  it('should change 192', () => {
    expect(romanService.convert(192)).toBe('CXCII');
  });

  it('should change 193', () => {
    expect(romanService.convert(193)).toBe('CXCIII');
  });

  it('should change 194', () => {
    expect(romanService.convert(194)).toBe('CXCIV');
  });

  it('should change 195', () => {
    expect(romanService.convert(195)).toBe('CXCV');
  });

  it('should change 196', () => {
    expect(romanService.convert(196)).toBe('CXCVI');
  });

  it('should change 197', () => {
    expect(romanService.convert(197)).toBe('CXCVII');
  });

  it('should change 198', () => {
    expect(romanService.convert(198)).toBe('CXCVIII');
  });

  it('should change 199', () => {
    expect(romanService.convert(199)).toBe('CXCIX');
  });

  it('should change 200', () => {
    expect(romanService.convert(200)).toBe('CC');
  });

  it('should change 201', () => {
    expect(romanService.convert(201)).toBe('CCI');
  });

  it('should change 202', () => {
    expect(romanService.convert(202)).toBe('CCII');
  });

  it('should change 203', () => {
    expect(romanService.convert(203)).toBe('CCIII');
  });

  it('should change 204', () => {
    expect(romanService.convert(204)).toBe('CCIV');
  });

  it('should change 205', () => {
    expect(romanService.convert(205)).toBe('CCV');
  });

  it('should change 206', () => {
    expect(romanService.convert(206)).toBe('CCVI');
  });

  it('should change 207', () => {
    expect(romanService.convert(207)).toBe('CCVII');
  });

  it('should change 208', () => {
    expect(romanService.convert(208)).toBe('CCVIII');
  });

  it('should change 209', () => {
    expect(romanService.convert(209)).toBe('CCIX');
  });

  it('should change 210', () => {
    expect(romanService.convert(210)).toBe('CCX');
  });

  it('should change 211', () => {
    expect(romanService.convert(211)).toBe('CCXI');
  });

  it('should change 212', () => {
    expect(romanService.convert(212)).toBe('CCXII');
  });

  it('should change 213', () => {
    expect(romanService.convert(213)).toBe('CCXIII');
  });

  it('should change 214', () => {
    expect(romanService.convert(214)).toBe('CCXIV');
  });

  it('should change 215', () => {
    expect(romanService.convert(215)).toBe('CCXV');
  });

  it('should change 216', () => {
    expect(romanService.convert(216)).toBe('CCXVI');
  });

  it('should change 217', () => {
    expect(romanService.convert(217)).toBe('CCXVII');
  });

  it('should change 218', () => {
    expect(romanService.convert(218)).toBe('CCXVIII');
  });

  it('should change 219', () => {
    expect(romanService.convert(219)).toBe('CCXIX');
  });

  it('should change 220', () => {
    expect(romanService.convert(220)).toBe('CCXX');
  });

  it('should change 221', () => {
    expect(romanService.convert(221)).toBe('CCXXI');
  });

  it('should change 222', () => {
    expect(romanService.convert(222)).toBe('CCXXII');
  });

  it('should change 223', () => {
    expect(romanService.convert(223)).toBe('CCXXIII');
  });

  it('should change 224', () => {
    expect(romanService.convert(224)).toBe('CCXXIV');
  });

  it('should change 225', () => {
    expect(romanService.convert(225)).toBe('CCXXV');
  });

  it('should change 226', () => {
    expect(romanService.convert(226)).toBe('CCXXVI');
  });

  it('should change 227', () => {
    expect(romanService.convert(227)).toBe('CCXXVII');
  });

  it('should change 228', () => {
    expect(romanService.convert(228)).toBe('CCXXVIII');
  });

  it('should change 229', () => {
    expect(romanService.convert(229)).toBe('CCXXIX');
  });

  it('should change 230', () => {
    expect(romanService.convert(230)).toBe('CCXXX');
  });

  it('should change 231', () => {
    expect(romanService.convert(231)).toBe('CCXXXI');
  });

  it('should change 232', () => {
    expect(romanService.convert(232)).toBe('CCXXXII');
  });

  it('should change 233', () => {
    expect(romanService.convert(233)).toBe('CCXXXIII');
  });

  it('should change 234', () => {
    expect(romanService.convert(234)).toBe('CCXXXIV');
  });

  it('should change 235', () => {
    expect(romanService.convert(235)).toBe('CCXXXV');
  });

  it('should change 236', () => {
    expect(romanService.convert(236)).toBe('CCXXXVI');
  });

  it('should change 237', () => {
    expect(romanService.convert(237)).toBe('CCXXXVII');
  });

  it('should change 238', () => {
    expect(romanService.convert(238)).toBe('CCXXXVIII');
  });

  it('should change 239', () => {
    expect(romanService.convert(239)).toBe('CCXXXIX');
  });

  it('should change 240', () => {
    expect(romanService.convert(240)).toBe('CCXL');
  });

  it('should change 241', () => {
    expect(romanService.convert(241)).toBe('CCXLI');
  });

  it('should change 242', () => {
    expect(romanService.convert(242)).toBe('CCXLII');
  });

  it('should change 243', () => {
    expect(romanService.convert(243)).toBe('CCXLIII');
  });

  it('should change 244', () => {
    expect(romanService.convert(244)).toBe('CCXLIV');
  });

  it('should change 245', () => {
    expect(romanService.convert(245)).toBe('CCXLV');
  });

  it('should change 246', () => {
    expect(romanService.convert(246)).toBe('CCXLVI');
  });

  it('should change 247', () => {
    expect(romanService.convert(247)).toBe('CCXLVII');
  });

  it('should change 248', () => {
    expect(romanService.convert(248)).toBe('CCXLVIII');
  });

  it('should change 249', () => {
    expect(romanService.convert(249)).toBe('CCXLIX');
  });

  it('should change 250', () => {
    expect(romanService.convert(250)).toBe('CCL');
  });

  it('should change 251', () => {
    expect(romanService.convert(251)).toBe('CCLI');
  });

  it('should change 252', () => {
    expect(romanService.convert(252)).toBe('CCLII');
  });

  it('should change 253', () => {
    expect(romanService.convert(253)).toBe('CCLIII');
  });

  it('should change 254', () => {
    expect(romanService.convert(254)).toBe('CCLIV');
  });

  it('should change 255', () => {
    expect(romanService.convert(255)).toBe('CCLV');
  });

  it('should change 256', () => {
    expect(romanService.convert(256)).toBe('CCLVI');
  });

  it('should change 257', () => {
    expect(romanService.convert(257)).toBe('CCLVII');
  });

  it('should change 258', () => {
    expect(romanService.convert(258)).toBe('CCLVIII');
  });

  it('should change 259', () => {
    expect(romanService.convert(259)).toBe('CCLIX');
  });

  it('should change 260', () => {
    expect(romanService.convert(260)).toBe('CCLX');
  });

  it('should change 261', () => {
    expect(romanService.convert(261)).toBe('CCLXI');
  });

  it('should change 262', () => {
    expect(romanService.convert(262)).toBe('CCLXII');
  });

  it('should change 263', () => {
    expect(romanService.convert(263)).toBe('CCLXIII');
  });

  it('should change 264', () => {
    expect(romanService.convert(264)).toBe('CCLXIV');
  });

  it('should change 265', () => {
    expect(romanService.convert(265)).toBe('CCLXV');
  });

  it('should change 266', () => {
    expect(romanService.convert(266)).toBe('CCLXVI');
  });

  it('should change 267', () => {
    expect(romanService.convert(267)).toBe('CCLXVII');
  });

  it('should change 268', () => {
    expect(romanService.convert(268)).toBe('CCLXVIII');
  });

  it('should change 269', () => {
    expect(romanService.convert(269)).toBe('CCLXIX');
  });

  it('should change 270', () => {
    expect(romanService.convert(270)).toBe('CCLXX');
  });

  it('should change 271', () => {
    expect(romanService.convert(271)).toBe('CCLXXI');
  });

  it('should change 272', () => {
    expect(romanService.convert(272)).toBe('CCLXXII');
  });

  it('should change 273', () => {
    expect(romanService.convert(273)).toBe('CCLXXIII');
  });

  it('should change 274', () => {
    expect(romanService.convert(274)).toBe('CCLXXIV');
  });

  it('should change 275', () => {
    expect(romanService.convert(275)).toBe('CCLXXV');
  });

  it('should change 276', () => {
    expect(romanService.convert(276)).toBe('CCLXXVI');
  });

  it('should change 277', () => {
    expect(romanService.convert(277)).toBe('CCLXXVII');
  });

  it('should change 278', () => {
    expect(romanService.convert(278)).toBe('CCLXXVIII');
  });

  it('should change 279', () => {
    expect(romanService.convert(279)).toBe('CCLXXIX');
  });

  it('should change 280', () => {
    expect(romanService.convert(280)).toBe('CCLXXX');
  });

  it('should change 281', () => {
    expect(romanService.convert(281)).toBe('CCLXXXI');
  });

  it('should change 282', () => {
    expect(romanService.convert(282)).toBe('CCLXXXII');
  });

  it('should change 283', () => {
    expect(romanService.convert(283)).toBe('CCLXXXIII');
  });

  it('should change 284', () => {
    expect(romanService.convert(284)).toBe('CCLXXXIV');
  });

  it('should change 285', () => {
    expect(romanService.convert(285)).toBe('CCLXXXV');
  });

  it('should change 286', () => {
    expect(romanService.convert(286)).toBe('CCLXXXVI');
  });

  it('should change 287', () => {
    expect(romanService.convert(287)).toBe('CCLXXXVII');
  });

  it('should change 288', () => {
    expect(romanService.convert(288)).toBe('CCLXXXVIII');
  });

  it('should change 289', () => {
    expect(romanService.convert(289)).toBe('CCLXXXIX');
  });

  it('should change 290', () => {
    expect(romanService.convert(290)).toBe('CCXC');
  });

  it('should change 291', () => {
    expect(romanService.convert(291)).toBe('CCXCI');
  });

  it('should change 292', () => {
    expect(romanService.convert(292)).toBe('CCXCII');
  });

  it('should change 293', () => {
    expect(romanService.convert(293)).toBe('CCXCIII');
  });

  it('should change 294', () => {
    expect(romanService.convert(294)).toBe('CCXCIV');
  });

  it('should change 295', () => {
    expect(romanService.convert(295)).toBe('CCXCV');
  });

  it('should change 296', () => {
    expect(romanService.convert(296)).toBe('CCXCVI');
  });

  it('should change 297', () => {
    expect(romanService.convert(297)).toBe('CCXCVII');
  });

  it('should change 298', () => {
    expect(romanService.convert(298)).toBe('CCXCVIII');
  });

  it('should change 299', () => {
    expect(romanService.convert(299)).toBe('CCXCIX');
  });

  it('should change 300', () => {
    expect(romanService.convert(300)).toBe('CCC');
  });

  it('should change 301', () => {
    expect(romanService.convert(301)).toBe('CCCI');
  });

  it('should change 302', () => {
    expect(romanService.convert(302)).toBe('CCCII');
  });

  it('should change 303', () => {
    expect(romanService.convert(303)).toBe('CCCIII');
  });

  it('should change 304', () => {
    expect(romanService.convert(304)).toBe('CCCIV');
  });

  it('should change 305', () => {
    expect(romanService.convert(305)).toBe('CCCV');
  });

  it('should change 306', () => {
    expect(romanService.convert(306)).toBe('CCCVI');
  });

  it('should change 307', () => {
    expect(romanService.convert(307)).toBe('CCCVII');
  });

  it('should change 308', () => {
    expect(romanService.convert(308)).toBe('CCCVIII');
  });

  it('should change 309', () => {
    expect(romanService.convert(309)).toBe('CCCIX');
  });

  it('should change 310', () => {
    expect(romanService.convert(310)).toBe('CCCX');
  });

  it('should change 311', () => {
    expect(romanService.convert(311)).toBe('CCCXI');
  });

  it('should change 312', () => {
    expect(romanService.convert(312)).toBe('CCCXII');
  });

  it('should change 313', () => {
    expect(romanService.convert(313)).toBe('CCCXIII');
  });

  it('should change 314', () => {
    expect(romanService.convert(314)).toBe('CCCXIV');
  });

  it('should change 315', () => {
    expect(romanService.convert(315)).toBe('CCCXV');
  });

  it('should change 316', () => {
    expect(romanService.convert(316)).toBe('CCCXVI');
  });

  it('should change 317', () => {
    expect(romanService.convert(317)).toBe('CCCXVII');
  });

  it('should change 318', () => {
    expect(romanService.convert(318)).toBe('CCCXVIII');
  });

  it('should change 319', () => {
    expect(romanService.convert(319)).toBe('CCCXIX');
  });

  it('should change 320', () => {
    expect(romanService.convert(320)).toBe('CCCXX');
  });

  it('should change 321', () => {
    expect(romanService.convert(321)).toBe('CCCXXI');
  });

  it('should change 322', () => {
    expect(romanService.convert(322)).toBe('CCCXXII');
  });

  it('should change 323', () => {
    expect(romanService.convert(323)).toBe('CCCXXIII');
  });

  it('should change 324', () => {
    expect(romanService.convert(324)).toBe('CCCXXIV');
  });

  it('should change 325', () => {
    expect(romanService.convert(325)).toBe('CCCXXV');
  });

  it('should change 326', () => {
    expect(romanService.convert(326)).toBe('CCCXXVI');
  });

  it('should change 327', () => {
    expect(romanService.convert(327)).toBe('CCCXXVII');
  });

  it('should change 328', () => {
    expect(romanService.convert(328)).toBe('CCCXXVIII');
  });

  it('should change 329', () => {
    expect(romanService.convert(329)).toBe('CCCXXIX');
  });

  it('should change 330', () => {
    expect(romanService.convert(330)).toBe('CCCXXX');
  });

  it('should change 331', () => {
    expect(romanService.convert(331)).toBe('CCCXXXI');
  });

  it('should change 332', () => {
    expect(romanService.convert(332)).toBe('CCCXXXII');
  });

  it('should change 333', () => {
    expect(romanService.convert(333)).toBe('CCCXXXIII');
  });

  it('should change 334', () => {
    expect(romanService.convert(334)).toBe('CCCXXXIV');
  });

  it('should change 335', () => {
    expect(romanService.convert(335)).toBe('CCCXXXV');
  });

  it('should change 336', () => {
    expect(romanService.convert(336)).toBe('CCCXXXVI');
  });

  it('should change 337', () => {
    expect(romanService.convert(337)).toBe('CCCXXXVII');
  });

  it('should change 338', () => {
    expect(romanService.convert(338)).toBe('CCCXXXVIII');
  });

  it('should change 339', () => {
    expect(romanService.convert(339)).toBe('CCCXXXIX');
  });

  it('should change 340', () => {
    expect(romanService.convert(340)).toBe('CCCXL');
  });

  it('should change 341', () => {
    expect(romanService.convert(341)).toBe('CCCXLI');
  });

  it('should change 342', () => {
    expect(romanService.convert(342)).toBe('CCCXLII');
  });

  it('should change 343', () => {
    expect(romanService.convert(343)).toBe('CCCXLIII');
  });

  it('should change 344', () => {
    expect(romanService.convert(344)).toBe('CCCXLIV');
  });

  it('should change 345', () => {
    expect(romanService.convert(345)).toBe('CCCXLV');
  });

  it('should change 346', () => {
    expect(romanService.convert(346)).toBe('CCCXLVI');
  });

  it('should change 347', () => {
    expect(romanService.convert(347)).toBe('CCCXLVII');
  });

  it('should change 348', () => {
    expect(romanService.convert(348)).toBe('CCCXLVIII');
  });

  it('should change 349', () => {
    expect(romanService.convert(349)).toBe('CCCXLIX');
  });

  it('should change 350', () => {
    expect(romanService.convert(350)).toBe('CCCL');
  });

  it('should change 351', () => {
    expect(romanService.convert(351)).toBe('CCCLI');
  });

  it('should change 352', () => {
    expect(romanService.convert(352)).toBe('CCCLII');
  });

  it('should change 353', () => {
    expect(romanService.convert(353)).toBe('CCCLIII');
  });

  it('should change 354', () => {
    expect(romanService.convert(354)).toBe('CCCLIV');
  });

  it('should change 355', () => {
    expect(romanService.convert(355)).toBe('CCCLV');
  });

  it('should change 356', () => {
    expect(romanService.convert(356)).toBe('CCCLVI');
  });

  it('should change 357', () => {
    expect(romanService.convert(357)).toBe('CCCLVII');
  });

  it('should change 358', () => {
    expect(romanService.convert(358)).toBe('CCCLVIII');
  });

  it('should change 359', () => {
    expect(romanService.convert(359)).toBe('CCCLIX');
  });

  it('should change 360', () => {
    expect(romanService.convert(360)).toBe('CCCLX');
  });

  it('should change 361', () => {
    expect(romanService.convert(361)).toBe('CCCLXI');
  });

  it('should change 362', () => {
    expect(romanService.convert(362)).toBe('CCCLXII');
  });

  it('should change 363', () => {
    expect(romanService.convert(363)).toBe('CCCLXIII');
  });

  it('should change 364', () => {
    expect(romanService.convert(364)).toBe('CCCLXIV');
  });

  it('should change 365', () => {
    expect(romanService.convert(365)).toBe('CCCLXV');
  });

  it('should change 366', () => {
    expect(romanService.convert(366)).toBe('CCCLXVI');
  });

  it('should change 367', () => {
    expect(romanService.convert(367)).toBe('CCCLXVII');
  });

  it('should change 368', () => {
    expect(romanService.convert(368)).toBe('CCCLXVIII');
  });

  it('should change 369', () => {
    expect(romanService.convert(369)).toBe('CCCLXIX');
  });

  it('should change 370', () => {
    expect(romanService.convert(370)).toBe('CCCLXX');
  });

  it('should change 371', () => {
    expect(romanService.convert(371)).toBe('CCCLXXI');
  });

  it('should change 372', () => {
    expect(romanService.convert(372)).toBe('CCCLXXII');
  });

  it('should change 373', () => {
    expect(romanService.convert(373)).toBe('CCCLXXIII');
  });

  it('should change 374', () => {
    expect(romanService.convert(374)).toBe('CCCLXXIV');
  });

  it('should change 375', () => {
    expect(romanService.convert(375)).toBe('CCCLXXV');
  });

  it('should change 376', () => {
    expect(romanService.convert(376)).toBe('CCCLXXVI');
  });

  it('should change 377', () => {
    expect(romanService.convert(377)).toBe('CCCLXXVII');
  });

  it('should change 378', () => {
    expect(romanService.convert(378)).toBe('CCCLXXVIII');
  });

  it('should change 379', () => {
    expect(romanService.convert(379)).toBe('CCCLXXIX');
  });

  it('should change 380', () => {
    expect(romanService.convert(380)).toBe('CCCLXXX');
  });

  it('should change 381', () => {
    expect(romanService.convert(381)).toBe('CCCLXXXI');
  });

  it('should change 382', () => {
    expect(romanService.convert(382)).toBe('CCCLXXXII');
  });

  it('should change 383', () => {
    expect(romanService.convert(383)).toBe('CCCLXXXIII');
  });

  it('should change 384', () => {
    expect(romanService.convert(384)).toBe('CCCLXXXIV');
  });

  it('should change 385', () => {
    expect(romanService.convert(385)).toBe('CCCLXXXV');
  });

  it('should change 386', () => {
    expect(romanService.convert(386)).toBe('CCCLXXXVI');
  });

  it('should change 387', () => {
    expect(romanService.convert(387)).toBe('CCCLXXXVII');
  });

  it('should change 388', () => {
    expect(romanService.convert(388)).toBe('CCCLXXXVIII');
  });

  it('should change 389', () => {
    expect(romanService.convert(389)).toBe('CCCLXXXIX');
  });

  it('should change 390', () => {
    expect(romanService.convert(390)).toBe('CCCXC');
  });

  it('should change 391', () => {
    expect(romanService.convert(391)).toBe('CCCXCI');
  });

  it('should change 392', () => {
    expect(romanService.convert(392)).toBe('CCCXCII');
  });

  it('should change 393', () => {
    expect(romanService.convert(393)).toBe('CCCXCIII');
  });

  it('should change 394', () => {
    expect(romanService.convert(394)).toBe('CCCXCIV');
  });

  it('should change 395', () => {
    expect(romanService.convert(395)).toBe('CCCXCV');
  });

  it('should change 396', () => {
    expect(romanService.convert(396)).toBe('CCCXCVI');
  });

  it('should change 397', () => {
    expect(romanService.convert(397)).toBe('CCCXCVII');
  });

  it('should change 398', () => {
    expect(romanService.convert(398)).toBe('CCCXCVIII');
  });

  it('should change 399', () => {
    expect(romanService.convert(399)).toBe('CCCXCIX');
  });

  it('should change 400', () => {
    expect(romanService.convert(400)).toBe('CD');
  });

  it('should change 401', () => {
    expect(romanService.convert(401)).toBe('CDI');
  });

  it('should change 402', () => {
    expect(romanService.convert(402)).toBe('CDII');
  });

  it('should change 403', () => {
    expect(romanService.convert(403)).toBe('CDIII');
  });

  it('should change 404', () => {
    expect(romanService.convert(404)).toBe('CDIV');
  });

  it('should change 405', () => {
    expect(romanService.convert(405)).toBe('CDV');
  });

  it('should change 406', () => {
    expect(romanService.convert(406)).toBe('CDVI');
  });

  it('should change 407', () => {
    expect(romanService.convert(407)).toBe('CDVII');
  });

  it('should change 408', () => {
    expect(romanService.convert(408)).toBe('CDVIII');
  });

  it('should change 409', () => {
    expect(romanService.convert(409)).toBe('CDIX');
  });

  it('should change 410', () => {
    expect(romanService.convert(410)).toBe('CDX');
  });

  it('should change 411', () => {
    expect(romanService.convert(411)).toBe('CDXI');
  });

  it('should change 412', () => {
    expect(romanService.convert(412)).toBe('CDXII');
  });

  it('should change 413', () => {
    expect(romanService.convert(413)).toBe('CDXIII');
  });

  it('should change 414', () => {
    expect(romanService.convert(414)).toBe('CDXIV');
  });

  it('should change 415', () => {
    expect(romanService.convert(415)).toBe('CDXV');
  });

  it('should change 416', () => {
    expect(romanService.convert(416)).toBe('CDXVI');
  });

  it('should change 417', () => {
    expect(romanService.convert(417)).toBe('CDXVII');
  });

  it('should change 418', () => {
    expect(romanService.convert(418)).toBe('CDXVIII');
  });

  it('should change 419', () => {
    expect(romanService.convert(419)).toBe('CDXIX');
  });

  it('should change 420', () => {
    expect(romanService.convert(420)).toBe('CDXX');
  });

  it('should change 421', () => {
    expect(romanService.convert(421)).toBe('CDXXI');
  });

  it('should change 422', () => {
    expect(romanService.convert(422)).toBe('CDXXII');
  });

  it('should change 423', () => {
    expect(romanService.convert(423)).toBe('CDXXIII');
  });

  it('should change 424', () => {
    expect(romanService.convert(424)).toBe('CDXXIV');
  });

  it('should change 425', () => {
    expect(romanService.convert(425)).toBe('CDXXV');
  });

  it('should change 426', () => {
    expect(romanService.convert(426)).toBe('CDXXVI');
  });

  it('should change 427', () => {
    expect(romanService.convert(427)).toBe('CDXXVII');
  });

  it('should change 429', () => {
    expect(romanService.convert(429)).toBe('CDXXIX');
  });

  it('should change 430', () => {
    expect(romanService.convert(430)).toBe('CDXXX');
  });

  it('should change 431', () => {
    expect(romanService.convert(431)).toBe('CDXXXI');
  });

  it('should change 432', () => {
    expect(romanService.convert(432)).toBe('CDXXXII');
  });

  it('should change 433', () => {
    expect(romanService.convert(433)).toBe('CDXXXIII');
  });

  it('should change 434', () => {
    expect(romanService.convert(434)).toBe('CDXXXIV');
  });

  it('should change 435', () => {
    expect(romanService.convert(435)).toBe('CDXXXV');
  });

  it('should change 436', () => {
    expect(romanService.convert(436)).toBe('CDXXXVI');
  });

  it('should change 437', () => {
    expect(romanService.convert(437)).toBe('CDXXXVII');
  });

  it('should change 438', () => {
    expect(romanService.convert(438)).toBe('CDXXXVIII');
  });

  it('should change 439', () => {
    expect(romanService.convert(439)).toBe('CDXXXIX');
  });

  it('should change 440', () => {
    expect(romanService.convert(440)).toBe('CDXL');
  });

  it('should change 441', () => {
    expect(romanService.convert(441)).toBe('CDXLI');
  });

  it('should change 442', () => {
    expect(romanService.convert(442)).toBe('CDXLII');
  });

  it('should change 443', () => {
    expect(romanService.convert(443)).toBe('CDXLIII');
  });

  it('should change 444', () => {
    expect(romanService.convert(444)).toBe('CDXLIV');
  });

  it('should change 445', () => {
    expect(romanService.convert(445)).toBe('CDXLV');
  });

  it('should change 446', () => {
    expect(romanService.convert(446)).toBe('CDXLVI');
  });

  it('should change 447', () => {
    expect(romanService.convert(447)).toBe('CDXLVII');
  });

  it('should change 448', () => {
    expect(romanService.convert(448)).toBe('CDXLVIII');
  });

  it('should change 449', () => {
    expect(romanService.convert(449)).toBe('CDXLIX');
  });

  it('should change 450', () => {
    expect(romanService.convert(450)).toBe('CDL');
  });

  it('should change 451', () => {
    expect(romanService.convert(451)).toBe('CDLI');
  });

  it('should change 452', () => {
    expect(romanService.convert(452)).toBe('CDLII');
  });

  it('should change 453', () => {
    expect(romanService.convert(453)).toBe('CDLIII');
  });

  it('should change 454', () => {
    expect(romanService.convert(454)).toBe('CDLIV');
  });

  it('should change 455', () => {
    expect(romanService.convert(455)).toBe('CDLV');
  });

  it('should change 456', () => {
    expect(romanService.convert(456)).toBe('CDLVI');
  });

  it('should change 457', () => {
    expect(romanService.convert(457)).toBe('CDLVII');
  });

  it('should change 458', () => {
    expect(romanService.convert(458)).toBe('CDLVIII');
  });

  it('should change 459', () => {
    expect(romanService.convert(459)).toBe('CDLIX');
  });

  it('should change 460', () => {
    expect(romanService.convert(460)).toBe('CDLX');
  });

  it('should change 461', () => {
    expect(romanService.convert(461)).toBe('CDLXI');
  });

  it('should change 462', () => {
    expect(romanService.convert(462)).toBe('CDLXII');
  });

  it('should change 463', () => {
    expect(romanService.convert(463)).toBe('CDLXIII');
  });

  it('should change 464', () => {
    expect(romanService.convert(464)).toBe('CDLXIV');
  });

  it('should change 465', () => {
    expect(romanService.convert(465)).toBe('CDLXV');
  });

  it('should change 466', () => {
    expect(romanService.convert(466)).toBe('CDLXVI');
  });

  it('should change 467', () => {
    expect(romanService.convert(467)).toBe('CDLXVII');
  });

  it('should change 468', () => {
    expect(romanService.convert(468)).toBe('CDLXVIII');
  });

  it('should change 469', () => {
    expect(romanService.convert(469)).toBe('CDLXIX');
  });

  it('should change 470', () => {
    expect(romanService.convert(470)).toBe('CDLXX');
  });

  it('should change 471', () => {
    expect(romanService.convert(471)).toBe('CDLXXI');
  });

  it('should change 472', () => {
    expect(romanService.convert(472)).toBe('CDLXXII');
  });

  it('should change 473', () => {
    expect(romanService.convert(473)).toBe('CDLXXIII');
  });

  it('should change 474', () => {
    expect(romanService.convert(474)).toBe('CDLXXIV');
  });

  it('should change 475', () => {
    expect(romanService.convert(475)).toBe('CDLXXV');
  });

  it('should change 476', () => {
    expect(romanService.convert(476)).toBe('CDLXXVI');
  });

  it('should change 477', () => {
    expect(romanService.convert(477)).toBe('CDLXXVII');
  });

  it('should change 478', () => {
    expect(romanService.convert(478)).toBe('CDLXXVIII');
  });

  it('should change 479', () => {
    expect(romanService.convert(479)).toBe('CDLXXIX');
  });

  it('should change 480', () => {
    expect(romanService.convert(480)).toBe('CDLXXX');
  });

  it('should change 481', () => {
    expect(romanService.convert(481)).toBe('CDLXXXI');
  });

  it('should change 482', () => {
    expect(romanService.convert(482)).toBe('CDLXXXII');
  });

  it('should change 483', () => {
    expect(romanService.convert(483)).toBe('CDLXXXIII');
  });

  it('should change 484', () => {
    expect(romanService.convert(484)).toBe('CDLXXXIV');
  });

  it('should change 485', () => {
    expect(romanService.convert(485)).toBe('CDLXXXV');
  });

  it('should change 486', () => {
    expect(romanService.convert(486)).toBe('CDLXXXVI');
  });

  it('should change 487', () => {
    expect(romanService.convert(487)).toBe('CDLXXXVII');
  });

  it('should change 488', () => {
    expect(romanService.convert(488)).toBe('CDLXXXVIII');
  });

  it('should change 489', () => {
    expect(romanService.convert(489)).toBe('CDLXXXIX');
  });

  it('should change 490', () => {
    expect(romanService.convert(490)).toBe('CDXC');
  });

  it('should change 491', () => {
    expect(romanService.convert(491)).toBe('CDXCI');
  });

  it('should change 492', () => {
    expect(romanService.convert(492)).toBe('CDXCII');
  });

  it('should change 493', () => {
    expect(romanService.convert(493)).toBe('CDXCIII');
  });

  it('should change 494', () => {
    expect(romanService.convert(494)).toBe('CDXCIV');
  });

  it('should change 495', () => {
    expect(romanService.convert(495)).toBe('CDXCV');
  });

  it('should change 496', () => {
    expect(romanService.convert(496)).toBe('CDXCVI');
  });

  it('should change 497', () => {
    expect(romanService.convert(497)).toBe('CDXCVII');
  });

  it('should change 498', () => {
    expect(romanService.convert(498)).toBe('CDXCVIII');
  });

  it('should change 499', () => {
    expect(romanService.convert(499)).toBe('CDXCIX');
  });

  it('should change 500', () => {
    expect(romanService.convert(500)).toBe('D');
  });

  it('should change 501', () => {
    expect(romanService.convert(501)).toBe('DI');
  });

  it('should change 502', () => {
    expect(romanService.convert(502)).toBe('DII');
  });

  it('should change 503', () => {
    expect(romanService.convert(503)).toBe('DIII');
  });

  it('should change 504', () => {
    expect(romanService.convert(504)).toBe('DIV');
  });

  it('should change 505', () => {
    expect(romanService.convert(505)).toBe('DV');
  });

  it('should change 506', () => {
    expect(romanService.convert(506)).toBe('DVI');
  });

  it('should change 507', () => {
    expect(romanService.convert(507)).toBe('DVII');
  });

  it('should change 508', () => {
    expect(romanService.convert(508)).toBe('DVIII');
  });

  it('should change 509', () => {
    expect(romanService.convert(509)).toBe('DIX');
  });

  it('should change 510', () => {
    expect(romanService.convert(510)).toBe('DX');
  });

  it('should change 511', () => {
    expect(romanService.convert(511)).toBe('DXI');
  });

  it('should change 512', () => {
    expect(romanService.convert(512)).toBe('DXII');
  });

  it('should change 513', () => {
    expect(romanService.convert(513)).toBe('DXIII');
  });

  it('should change 514', () => {
    expect(romanService.convert(514)).toBe('DXIV');
  });

  it('should change 515', () => {
    expect(romanService.convert(515)).toBe('DXV');
  });

  it('should change 516', () => {
    expect(romanService.convert(516)).toBe('DXVI');
  });

  it('should change 517', () => {
    expect(romanService.convert(517)).toBe('DXVII');
  });

  it('should change 518', () => {
    expect(romanService.convert(518)).toBe('DXVIII');
  });

  it('should change 519', () => {
    expect(romanService.convert(519)).toBe('DXIX');
  });

  it('should change 520', () => {
    expect(romanService.convert(520)).toBe('DXX');
  });

  it('should change 521', () => {
    expect(romanService.convert(521)).toBe('DXXI');
  });

  it('should change 522', () => {
    expect(romanService.convert(522)).toBe('DXXII');
  });

  it('should change 523', () => {
    expect(romanService.convert(523)).toBe('DXXIII');
  });

  it('should change 524', () => {
    expect(romanService.convert(524)).toBe('DXXIV');
  });

  it('should change 525', () => {
    expect(romanService.convert(525)).toBe('DXXV');
  });

  it('should change 526', () => {
    expect(romanService.convert(526)).toBe('DXXVI');
  });

  it('should change 527', () => {
    expect(romanService.convert(527)).toBe('DXXVII');
  });

  it('should change 528', () => {
    expect(romanService.convert(528)).toBe('DXXVIII');
  });

  it('should change 529', () => {
    expect(romanService.convert(529)).toBe('DXXIX');
  });

  it('should change 530', () => {
    expect(romanService.convert(530)).toBe('DXXX');
  });

  it('should change 531', () => {
    expect(romanService.convert(531)).toBe('DXXXI');
  });

  it('should change 532', () => {
    expect(romanService.convert(532)).toBe('DXXXII');
  });

  it('should change 533', () => {
    expect(romanService.convert(533)).toBe('DXXXIII');
  });

  it('should change 534', () => {
    expect(romanService.convert(534)).toBe('DXXXIV');
  });

  it('should change 535', () => {
    expect(romanService.convert(535)).toBe('DXXXV');
  });

  it('should change 536', () => {
    expect(romanService.convert(536)).toBe('DXXXVI');
  });

  it('should change 537', () => {
    expect(romanService.convert(537)).toBe('DXXXVII');
  });

  it('should change 538', () => {
    expect(romanService.convert(538)).toBe('DXXXVIII');
  });

  it('should change 539', () => {
    expect(romanService.convert(539)).toBe('DXXXIX');
  });

  it('should change 540', () => {
    expect(romanService.convert(540)).toBe('DXL');
  });

  it('should change 541', () => {
    expect(romanService.convert(541)).toBe('DXLI');
  });

  it('should change 542', () => {
    expect(romanService.convert(542)).toBe('DXLII');
  });

  it('should change 543', () => {
    expect(romanService.convert(543)).toBe('DXLIII');
  });

  it('should change 544', () => {
    expect(romanService.convert(544)).toBe('DXLIV');
  });

  it('should change 545', () => {
    expect(romanService.convert(545)).toBe('DXLV');
  });

});
