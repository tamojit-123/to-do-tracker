(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/positioning'), require('rxjs'), require('@angular/animations'), require('@angular/forms'), require('ngx-bootstrap/component-loader'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/typeahead', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'ngx-bootstrap/positioning', 'rxjs', '@angular/animations', '@angular/forms', 'ngx-bootstrap/component-loader', 'rxjs/operators', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].typeahead = {}), global.ng.core, global.utils, global.positioning, global.rxjs, global.ng.animations, global.ng.forms, global.componentLoader, global.rxjs.operators, global.ng.common));
}(this, (function (exports, i0, utils, positioning, rxjs, animations, forms, componentLoader, operators, common) { 'use strict';

    var latinMap = {
        'Á': 'A',
        'Ă': 'A',
        'Ắ': 'A',
        'Ặ': 'A',
        'Ằ': 'A',
        'Ẳ': 'A',
        'Ẵ': 'A',
        'Ǎ': 'A',
        'Â': 'A',
        'Ấ': 'A',
        'Ậ': 'A',
        'Ầ': 'A',
        'Ẩ': 'A',
        'Ẫ': 'A',
        'Ä': 'A',
        'Ǟ': 'A',
        'Ȧ': 'A',
        'Ǡ': 'A',
        'Ạ': 'A',
        'Ȁ': 'A',
        'À': 'A',
        'Ả': 'A',
        'Ȃ': 'A',
        'Ā': 'A',
        'Ą': 'A',
        'Å': 'A',
        'Ǻ': 'A',
        'Ḁ': 'A',
        'Ⱥ': 'A',
        'Ã': 'A',
        'Ꜳ': 'AA',
        'Æ': 'AE',
        'Ǽ': 'AE',
        'Ǣ': 'AE',
        'Ꜵ': 'AO',
        'Ꜷ': 'AU',
        'Ꜹ': 'AV',
        'Ꜻ': 'AV',
        'Ꜽ': 'AY',
        'Ḃ': 'B',
        'Ḅ': 'B',
        'Ɓ': 'B',
        'Ḇ': 'B',
        'Ƀ': 'B',
        'Ƃ': 'B',
        'Ć': 'C',
        'Č': 'C',
        'Ç': 'C',
        'Ḉ': 'C',
        'Ĉ': 'C',
        'Ċ': 'C',
        'Ƈ': 'C',
        'Ȼ': 'C',
        'Ď': 'D',
        'Ḑ': 'D',
        'Ḓ': 'D',
        'Ḋ': 'D',
        'Ḍ': 'D',
        'Ɗ': 'D',
        'Ḏ': 'D',
        'ǲ': 'D',
        'ǅ': 'D',
        'Đ': 'D',
        'Ƌ': 'D',
        'Ǳ': 'DZ',
        'Ǆ': 'DZ',
        'É': 'E',
        'Ĕ': 'E',
        'Ě': 'E',
        'Ȩ': 'E',
        'Ḝ': 'E',
        'Ê': 'E',
        'Ế': 'E',
        'Ệ': 'E',
        'Ề': 'E',
        'Ể': 'E',
        'Ễ': 'E',
        'Ḙ': 'E',
        'Ë': 'E',
        'Ė': 'E',
        'Ẹ': 'E',
        'Ȅ': 'E',
        'È': 'E',
        'Ẻ': 'E',
        'Ȇ': 'E',
        'Ē': 'E',
        'Ḗ': 'E',
        'Ḕ': 'E',
        'Ę': 'E',
        'Ɇ': 'E',
        'Ẽ': 'E',
        'Ḛ': 'E',
        'Ꝫ': 'ET',
        'Ḟ': 'F',
        'Ƒ': 'F',
        'Ǵ': 'G',
        'Ğ': 'G',
        'Ǧ': 'G',
        'Ģ': 'G',
        'Ĝ': 'G',
        'Ġ': 'G',
        'Ɠ': 'G',
        'Ḡ': 'G',
        'Ǥ': 'G',
        'Ḫ': 'H',
        'Ȟ': 'H',
        'Ḩ': 'H',
        'Ĥ': 'H',
        'Ⱨ': 'H',
        'Ḧ': 'H',
        'Ḣ': 'H',
        'Ḥ': 'H',
        'Ħ': 'H',
        'Í': 'I',
        'Ĭ': 'I',
        'Ǐ': 'I',
        'Î': 'I',
        'Ï': 'I',
        'Ḯ': 'I',
        'İ': 'I',
        'Ị': 'I',
        'Ȉ': 'I',
        'Ì': 'I',
        'Ỉ': 'I',
        'Ȋ': 'I',
        'Ī': 'I',
        'Į': 'I',
        'Ɨ': 'I',
        'Ĩ': 'I',
        'Ḭ': 'I',
        'Ꝺ': 'D',
        'Ꝼ': 'F',
        'Ᵹ': 'G',
        'Ꞃ': 'R',
        'Ꞅ': 'S',
        'Ꞇ': 'T',
        'Ꝭ': 'IS',
        'Ĵ': 'J',
        'Ɉ': 'J',
        'Ḱ': 'K',
        'Ǩ': 'K',
        'Ķ': 'K',
        'Ⱪ': 'K',
        'Ꝃ': 'K',
        'Ḳ': 'K',
        'Ƙ': 'K',
        'Ḵ': 'K',
        'Ꝁ': 'K',
        'Ꝅ': 'K',
        'Ĺ': 'L',
        'Ƚ': 'L',
        'Ľ': 'L',
        'Ļ': 'L',
        'Ḽ': 'L',
        'Ḷ': 'L',
        'Ḹ': 'L',
        'Ⱡ': 'L',
        'Ꝉ': 'L',
        'Ḻ': 'L',
        'Ŀ': 'L',
        'Ɫ': 'L',
        'ǈ': 'L',
        'Ł': 'L',
        'Ǉ': 'LJ',
        'Ḿ': 'M',
        'Ṁ': 'M',
        'Ṃ': 'M',
        'Ɱ': 'M',
        'Ń': 'N',
        'Ň': 'N',
        'Ņ': 'N',
        'Ṋ': 'N',
        'Ṅ': 'N',
        'Ṇ': 'N',
        'Ǹ': 'N',
        'Ɲ': 'N',
        'Ṉ': 'N',
        'Ƞ': 'N',
        'ǋ': 'N',
        'Ñ': 'N',
        'Ǌ': 'NJ',
        'Ó': 'O',
        'Ŏ': 'O',
        'Ǒ': 'O',
        'Ô': 'O',
        'Ố': 'O',
        'Ộ': 'O',
        'Ồ': 'O',
        'Ổ': 'O',
        'Ỗ': 'O',
        'Ö': 'O',
        'Ȫ': 'O',
        'Ȯ': 'O',
        'Ȱ': 'O',
        'Ọ': 'O',
        'Ő': 'O',
        'Ȍ': 'O',
        'Ò': 'O',
        'Ỏ': 'O',
        'Ơ': 'O',
        'Ớ': 'O',
        'Ợ': 'O',
        'Ờ': 'O',
        'Ở': 'O',
        'Ỡ': 'O',
        'Ȏ': 'O',
        'Ꝋ': 'O',
        'Ꝍ': 'O',
        'Ō': 'O',
        'Ṓ': 'O',
        'Ṑ': 'O',
        'Ɵ': 'O',
        'Ǫ': 'O',
        'Ǭ': 'O',
        'Ø': 'O',
        'Ǿ': 'O',
        'Õ': 'O',
        'Ṍ': 'O',
        'Ṏ': 'O',
        'Ȭ': 'O',
        'Ƣ': 'OI',
        'Ꝏ': 'OO',
        'Ɛ': 'E',
        'Ɔ': 'O',
        'Ȣ': 'OU',
        'Ṕ': 'P',
        'Ṗ': 'P',
        'Ꝓ': 'P',
        'Ƥ': 'P',
        'Ꝕ': 'P',
        'Ᵽ': 'P',
        'Ꝑ': 'P',
        'Ꝙ': 'Q',
        'Ꝗ': 'Q',
        'Ŕ': 'R',
        'Ř': 'R',
        'Ŗ': 'R',
        'Ṙ': 'R',
        'Ṛ': 'R',
        'Ṝ': 'R',
        'Ȑ': 'R',
        'Ȓ': 'R',
        'Ṟ': 'R',
        'Ɍ': 'R',
        'Ɽ': 'R',
        'Ꜿ': 'C',
        'Ǝ': 'E',
        'Ś': 'S',
        'Ṥ': 'S',
        'Š': 'S',
        'Ṧ': 'S',
        'Ş': 'S',
        'Ŝ': 'S',
        'Ș': 'S',
        'Ṡ': 'S',
        'Ṣ': 'S',
        'Ṩ': 'S',
        'Ť': 'T',
        'Ţ': 'T',
        'Ṱ': 'T',
        'Ț': 'T',
        'Ⱦ': 'T',
        'Ṫ': 'T',
        'Ṭ': 'T',
        'Ƭ': 'T',
        'Ṯ': 'T',
        'Ʈ': 'T',
        'Ŧ': 'T',
        'Ɐ': 'A',
        'Ꞁ': 'L',
        'Ɯ': 'M',
        'Ʌ': 'V',
        'Ꜩ': 'TZ',
        'Ú': 'U',
        'Ŭ': 'U',
        'Ǔ': 'U',
        'Û': 'U',
        'Ṷ': 'U',
        'Ü': 'U',
        'Ǘ': 'U',
        'Ǚ': 'U',
        'Ǜ': 'U',
        'Ǖ': 'U',
        'Ṳ': 'U',
        'Ụ': 'U',
        'Ű': 'U',
        'Ȕ': 'U',
        'Ù': 'U',
        'Ủ': 'U',
        'Ư': 'U',
        'Ứ': 'U',
        'Ự': 'U',
        'Ừ': 'U',
        'Ử': 'U',
        'Ữ': 'U',
        'Ȗ': 'U',
        'Ū': 'U',
        'Ṻ': 'U',
        'Ų': 'U',
        'Ů': 'U',
        'Ũ': 'U',
        'Ṹ': 'U',
        'Ṵ': 'U',
        'Ꝟ': 'V',
        'Ṿ': 'V',
        'Ʋ': 'V',
        'Ṽ': 'V',
        'Ꝡ': 'VY',
        'Ẃ': 'W',
        'Ŵ': 'W',
        'Ẅ': 'W',
        'Ẇ': 'W',
        'Ẉ': 'W',
        'Ẁ': 'W',
        'Ⱳ': 'W',
        'Ẍ': 'X',
        'Ẋ': 'X',
        'Ý': 'Y',
        'Ŷ': 'Y',
        'Ÿ': 'Y',
        'Ẏ': 'Y',
        'Ỵ': 'Y',
        'Ỳ': 'Y',
        'Ƴ': 'Y',
        'Ỷ': 'Y',
        'Ỿ': 'Y',
        'Ȳ': 'Y',
        'Ɏ': 'Y',
        'Ỹ': 'Y',
        'Ź': 'Z',
        'Ž': 'Z',
        'Ẑ': 'Z',
        'Ⱬ': 'Z',
        'Ż': 'Z',
        'Ẓ': 'Z',
        'Ȥ': 'Z',
        'Ẕ': 'Z',
        'Ƶ': 'Z',
        'Ĳ': 'IJ',
        'Œ': 'OE',
        'ᴀ': 'A',
        'ᴁ': 'AE',
        'ʙ': 'B',
        'ᴃ': 'B',
        'ᴄ': 'C',
        'ᴅ': 'D',
        'ᴇ': 'E',
        'ꜰ': 'F',
        'ɢ': 'G',
        'ʛ': 'G',
        'ʜ': 'H',
        'ɪ': 'I',
        'ʁ': 'R',
        'ᴊ': 'J',
        'ᴋ': 'K',
        'ʟ': 'L',
        'ᴌ': 'L',
        'ᴍ': 'M',
        'ɴ': 'N',
        'ᴏ': 'O',
        'ɶ': 'OE',
        'ᴐ': 'O',
        'ᴕ': 'OU',
        'ᴘ': 'P',
        'ʀ': 'R',
        'ᴎ': 'N',
        'ᴙ': 'R',
        'ꜱ': 'S',
        'ᴛ': 'T',
        'ⱻ': 'E',
        'ᴚ': 'R',
        'ᴜ': 'U',
        'ᴠ': 'V',
        'ᴡ': 'W',
        'ʏ': 'Y',
        'ᴢ': 'Z',
        'á': 'a',
        'ă': 'a',
        'ắ': 'a',
        'ặ': 'a',
        'ằ': 'a',
        'ẳ': 'a',
        'ẵ': 'a',
        'ǎ': 'a',
        'â': 'a',
        'ấ': 'a',
        'ậ': 'a',
        'ầ': 'a',
        'ẩ': 'a',
        'ẫ': 'a',
        'ä': 'a',
        'ǟ': 'a',
        'ȧ': 'a',
        'ǡ': 'a',
        'ạ': 'a',
        'ȁ': 'a',
        'à': 'a',
        'ả': 'a',
        'ȃ': 'a',
        'ā': 'a',
        'ą': 'a',
        'ᶏ': 'a',
        'ẚ': 'a',
        'å': 'a',
        'ǻ': 'a',
        'ḁ': 'a',
        'ⱥ': 'a',
        'ã': 'a',
        'ꜳ': 'aa',
        'æ': 'ae',
        'ǽ': 'ae',
        'ǣ': 'ae',
        'ꜵ': 'ao',
        'ꜷ': 'au',
        'ꜹ': 'av',
        'ꜻ': 'av',
        'ꜽ': 'ay',
        'ḃ': 'b',
        'ḅ': 'b',
        'ɓ': 'b',
        'ḇ': 'b',
        'ᵬ': 'b',
        'ᶀ': 'b',
        'ƀ': 'b',
        'ƃ': 'b',
        'ɵ': 'o',
        'ć': 'c',
        'č': 'c',
        'ç': 'c',
        'ḉ': 'c',
        'ĉ': 'c',
        'ɕ': 'c',
        'ċ': 'c',
        'ƈ': 'c',
        'ȼ': 'c',
        'ď': 'd',
        'ḑ': 'd',
        'ḓ': 'd',
        'ȡ': 'd',
        'ḋ': 'd',
        'ḍ': 'd',
        'ɗ': 'd',
        'ᶑ': 'd',
        'ḏ': 'd',
        'ᵭ': 'd',
        'ᶁ': 'd',
        'đ': 'd',
        'ɖ': 'd',
        'ƌ': 'd',
        'ı': 'i',
        'ȷ': 'j',
        'ɟ': 'j',
        'ʄ': 'j',
        'ǳ': 'dz',
        'ǆ': 'dz',
        'é': 'e',
        'ĕ': 'e',
        'ě': 'e',
        'ȩ': 'e',
        'ḝ': 'e',
        'ê': 'e',
        'ế': 'e',
        'ệ': 'e',
        'ề': 'e',
        'ể': 'e',
        'ễ': 'e',
        'ḙ': 'e',
        'ë': 'e',
        'ė': 'e',
        'ẹ': 'e',
        'ȅ': 'e',
        'è': 'e',
        'ẻ': 'e',
        'ȇ': 'e',
        'ē': 'e',
        'ḗ': 'e',
        'ḕ': 'e',
        'ⱸ': 'e',
        'ę': 'e',
        'ᶒ': 'e',
        'ɇ': 'e',
        'ẽ': 'e',
        'ḛ': 'e',
        'ꝫ': 'et',
        'ḟ': 'f',
        'ƒ': 'f',
        'ᵮ': 'f',
        'ᶂ': 'f',
        'ǵ': 'g',
        'ğ': 'g',
        'ǧ': 'g',
        'ģ': 'g',
        'ĝ': 'g',
        'ġ': 'g',
        'ɠ': 'g',
        'ḡ': 'g',
        'ᶃ': 'g',
        'ǥ': 'g',
        'ḫ': 'h',
        'ȟ': 'h',
        'ḩ': 'h',
        'ĥ': 'h',
        'ⱨ': 'h',
        'ḧ': 'h',
        'ḣ': 'h',
        'ḥ': 'h',
        'ɦ': 'h',
        'ẖ': 'h',
        'ħ': 'h',
        'ƕ': 'hv',
        'í': 'i',
        'ĭ': 'i',
        'ǐ': 'i',
        'î': 'i',
        'ï': 'i',
        'ḯ': 'i',
        'ị': 'i',
        'ȉ': 'i',
        'ì': 'i',
        'ỉ': 'i',
        'ȋ': 'i',
        'ī': 'i',
        'į': 'i',
        'ᶖ': 'i',
        'ɨ': 'i',
        'ĩ': 'i',
        'ḭ': 'i',
        'ꝺ': 'd',
        'ꝼ': 'f',
        'ᵹ': 'g',
        'ꞃ': 'r',
        'ꞅ': 's',
        'ꞇ': 't',
        'ꝭ': 'is',
        'ǰ': 'j',
        'ĵ': 'j',
        'ʝ': 'j',
        'ɉ': 'j',
        'ḱ': 'k',
        'ǩ': 'k',
        'ķ': 'k',
        'ⱪ': 'k',
        'ꝃ': 'k',
        'ḳ': 'k',
        'ƙ': 'k',
        'ḵ': 'k',
        'ᶄ': 'k',
        'ꝁ': 'k',
        'ꝅ': 'k',
        'ĺ': 'l',
        'ƚ': 'l',
        'ɬ': 'l',
        'ľ': 'l',
        'ļ': 'l',
        'ḽ': 'l',
        'ȴ': 'l',
        'ḷ': 'l',
        'ḹ': 'l',
        'ⱡ': 'l',
        'ꝉ': 'l',
        'ḻ': 'l',
        'ŀ': 'l',
        'ɫ': 'l',
        'ᶅ': 'l',
        'ɭ': 'l',
        'ł': 'l',
        'ǉ': 'lj',
        'ſ': 's',
        'ẜ': 's',
        'ẛ': 's',
        'ẝ': 's',
        'ḿ': 'm',
        'ṁ': 'm',
        'ṃ': 'm',
        'ɱ': 'm',
        'ᵯ': 'm',
        'ᶆ': 'm',
        'ń': 'n',
        'ň': 'n',
        'ņ': 'n',
        'ṋ': 'n',
        'ȵ': 'n',
        'ṅ': 'n',
        'ṇ': 'n',
        'ǹ': 'n',
        'ɲ': 'n',
        'ṉ': 'n',
        'ƞ': 'n',
        'ᵰ': 'n',
        'ᶇ': 'n',
        'ɳ': 'n',
        'ñ': 'n',
        'ǌ': 'nj',
        'ó': 'o',
        'ŏ': 'o',
        'ǒ': 'o',
        'ô': 'o',
        'ố': 'o',
        'ộ': 'o',
        'ồ': 'o',
        'ổ': 'o',
        'ỗ': 'o',
        'ö': 'o',
        'ȫ': 'o',
        'ȯ': 'o',
        'ȱ': 'o',
        'ọ': 'o',
        'ő': 'o',
        'ȍ': 'o',
        'ò': 'o',
        'ỏ': 'o',
        'ơ': 'o',
        'ớ': 'o',
        'ợ': 'o',
        'ờ': 'o',
        'ở': 'o',
        'ỡ': 'o',
        'ȏ': 'o',
        'ꝋ': 'o',
        'ꝍ': 'o',
        'ⱺ': 'o',
        'ō': 'o',
        'ṓ': 'o',
        'ṑ': 'o',
        'ǫ': 'o',
        'ǭ': 'o',
        'ø': 'o',
        'ǿ': 'o',
        'õ': 'o',
        'ṍ': 'o',
        'ṏ': 'o',
        'ȭ': 'o',
        'ƣ': 'oi',
        'ꝏ': 'oo',
        'ɛ': 'e',
        'ᶓ': 'e',
        'ɔ': 'o',
        'ᶗ': 'o',
        'ȣ': 'ou',
        'ṕ': 'p',
        'ṗ': 'p',
        'ꝓ': 'p',
        'ƥ': 'p',
        'ᵱ': 'p',
        'ᶈ': 'p',
        'ꝕ': 'p',
        'ᵽ': 'p',
        'ꝑ': 'p',
        'ꝙ': 'q',
        'ʠ': 'q',
        'ɋ': 'q',
        'ꝗ': 'q',
        'ŕ': 'r',
        'ř': 'r',
        'ŗ': 'r',
        'ṙ': 'r',
        'ṛ': 'r',
        'ṝ': 'r',
        'ȑ': 'r',
        'ɾ': 'r',
        'ᵳ': 'r',
        'ȓ': 'r',
        'ṟ': 'r',
        'ɼ': 'r',
        'ᵲ': 'r',
        'ᶉ': 'r',
        'ɍ': 'r',
        'ɽ': 'r',
        'ↄ': 'c',
        'ꜿ': 'c',
        'ɘ': 'e',
        'ɿ': 'r',
        'ś': 's',
        'ṥ': 's',
        'š': 's',
        'ṧ': 's',
        'ş': 's',
        'ŝ': 's',
        'ș': 's',
        'ṡ': 's',
        'ṣ': 's',
        'ṩ': 's',
        'ʂ': 's',
        'ᵴ': 's',
        'ᶊ': 's',
        'ȿ': 's',
        'ɡ': 'g',
        'ᴑ': 'o',
        'ᴓ': 'o',
        'ᴝ': 'u',
        'ť': 't',
        'ţ': 't',
        'ṱ': 't',
        'ț': 't',
        'ȶ': 't',
        'ẗ': 't',
        'ⱦ': 't',
        'ṫ': 't',
        'ṭ': 't',
        'ƭ': 't',
        'ṯ': 't',
        'ᵵ': 't',
        'ƫ': 't',
        'ʈ': 't',
        'ŧ': 't',
        'ᵺ': 'th',
        'ɐ': 'a',
        'ᴂ': 'ae',
        'ǝ': 'e',
        'ᵷ': 'g',
        'ɥ': 'h',
        'ʮ': 'h',
        'ʯ': 'h',
        'ᴉ': 'i',
        'ʞ': 'k',
        'ꞁ': 'l',
        'ɯ': 'm',
        'ɰ': 'm',
        'ᴔ': 'oe',
        'ɹ': 'r',
        'ɻ': 'r',
        'ɺ': 'r',
        'ⱹ': 'r',
        'ʇ': 't',
        'ʌ': 'v',
        'ʍ': 'w',
        'ʎ': 'y',
        'ꜩ': 'tz',
        'ú': 'u',
        'ŭ': 'u',
        'ǔ': 'u',
        'û': 'u',
        'ṷ': 'u',
        'ü': 'u',
        'ǘ': 'u',
        'ǚ': 'u',
        'ǜ': 'u',
        'ǖ': 'u',
        'ṳ': 'u',
        'ụ': 'u',
        'ű': 'u',
        'ȕ': 'u',
        'ù': 'u',
        'ủ': 'u',
        'ư': 'u',
        'ứ': 'u',
        'ự': 'u',
        'ừ': 'u',
        'ử': 'u',
        'ữ': 'u',
        'ȗ': 'u',
        'ū': 'u',
        'ṻ': 'u',
        'ų': 'u',
        'ᶙ': 'u',
        'ů': 'u',
        'ũ': 'u',
        'ṹ': 'u',
        'ṵ': 'u',
        'ᵫ': 'ue',
        'ꝸ': 'um',
        'ⱴ': 'v',
        'ꝟ': 'v',
        'ṿ': 'v',
        'ʋ': 'v',
        'ᶌ': 'v',
        'ⱱ': 'v',
        'ṽ': 'v',
        'ꝡ': 'vy',
        'ẃ': 'w',
        'ŵ': 'w',
        'ẅ': 'w',
        'ẇ': 'w',
        'ẉ': 'w',
        'ẁ': 'w',
        'ⱳ': 'w',
        'ẘ': 'w',
        'ẍ': 'x',
        'ẋ': 'x',
        'ᶍ': 'x',
        'ý': 'y',
        'ŷ': 'y',
        'ÿ': 'y',
        'ẏ': 'y',
        'ỵ': 'y',
        'ỳ': 'y',
        'ƴ': 'y',
        'ỷ': 'y',
        'ỿ': 'y',
        'ȳ': 'y',
        'ẙ': 'y',
        'ɏ': 'y',
        'ỹ': 'y',
        'ź': 'z',
        'ž': 'z',
        'ẑ': 'z',
        'ʑ': 'z',
        'ⱬ': 'z',
        'ż': 'z',
        'ẓ': 'z',
        'ȥ': 'z',
        'ẕ': 'z',
        'ᵶ': 'z',
        'ᶎ': 'z',
        'ʐ': 'z',
        'ƶ': 'z',
        'ɀ': 'z',
        'ﬀ': 'ff',
        'ﬃ': 'ffi',
        'ﬄ': 'ffl',
        'ﬁ': 'fi',
        'ﬂ': 'fl',
        'ĳ': 'ij',
        'œ': 'oe',
        'ﬆ': 'st',
        'ₐ': 'a',
        'ₑ': 'e',
        'ᵢ': 'i',
        'ⱼ': 'j',
        'ₒ': 'o',
        'ᵣ': 'r',
        'ᵤ': 'u',
        'ᵥ': 'v',
        'ₓ': 'x'
    };

    var TypeaheadOptions = /** @class */ (function () {
        function TypeaheadOptions(options) {
            this.placement = options.placement;
            this.animation = options.animation;
            this.typeaheadRef = options.typeaheadRef;
        }
        return TypeaheadOptions;
    }());

    var TypeaheadMatch = /** @class */ (function () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function TypeaheadMatch(item, value, header) {
            if (value === void 0) { value = item; }
            if (header === void 0) { header = false; }
            this.item = item;
            this.value = value;
            this.header = header;
        }
        TypeaheadMatch.prototype.isHeader = function () {
            return this.header;
        };
        TypeaheadMatch.prototype.toString = function () {
            return this.value;
        };
        return TypeaheadMatch;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    function latinize(str) {
        if (!str) {
            return '';
        }
        return str.replace(/[^A-Za-z0-9[\] ]/g, function (a) {
            return latinMap[a] || a;
        });
    }
    function escapeRegexp(queryToEscape) {
        // Regex: capture the whole query string and replace it with the string
        // that will be used to match the results, for example if the capture is
        // 'a' the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters, delimitersForMultipleSearch) {
        if (wordRegexDelimiters === void 0) { wordRegexDelimiters = ' '; }
        if (phraseRegexDelimiters === void 0) { phraseRegexDelimiters = ''; }
        var result = [];
        if (!delimitersForMultipleSearch) {
            result = tokenizeWordsAndPhrases(str, wordRegexDelimiters, phraseRegexDelimiters);
        }
        else {
            var multipleSearchRegexStr = "([" + delimitersForMultipleSearch + "]+)";
            var delimitedTokens = str.split(new RegExp(multipleSearchRegexStr, 'g'));
            var lastToken = delimitedTokens[delimitedTokens.length - 1];
            if (lastToken > '') {
                if (wordRegexDelimiters && phraseRegexDelimiters) {
                    result = tokenizeWordsAndPhrases(lastToken, wordRegexDelimiters, phraseRegexDelimiters);
                }
                else {
                    result.push(lastToken);
                }
            }
        }
        return result;
    }
    function tokenizeWordsAndPhrases(str, wordRegexDelimiters, phraseRegexDelimiters) {
        var result = [];
        var regexStr = "(?:[" + phraseRegexDelimiters + "])([^" + phraseRegexDelimiters + "]+)" +
            ("(?:[" + phraseRegexDelimiters + "])|([^" + wordRegexDelimiters + "]+)");
        var preTokenized = str.split(new RegExp(regexStr, 'g'));
        var preTokenizedLength = preTokenized.length;
        var token;
        var replacePhraseDelimiters = new RegExp("[" + phraseRegexDelimiters + "]+", 'g');
        for (var i = 0; i < preTokenizedLength; i += 1) {
            token = preTokenized[i];
            if (token && token.length && token !== wordRegexDelimiters) {
                result.push(token.replace(replacePhraseDelimiters, ''));
            }
        }
        return result;
    }
    // eslint-disable-next-line
    function getValueFromObject(object, option) {
        var e_1, _a;
        if (!option || typeof object !== 'object') {
            return object.toString();
        }
        if (option.endsWith('()')) {
            var functionName = option.slice(0, option.length - 2);
            return object[functionName]().toString();
        }
        var properties = option
            .replace(/\[(\w+)\]/g, '.$1')
            .replace(/^\./, '');
        var propertiesArray = properties.split('.');
        try {
            for (var propertiesArray_1 = __values(propertiesArray), propertiesArray_1_1 = propertiesArray_1.next(); !propertiesArray_1_1.done; propertiesArray_1_1 = propertiesArray_1.next()) {
                var property = propertiesArray_1_1.value;
                if (property in object) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    object = object[property];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (propertiesArray_1_1 && !propertiesArray_1_1.done && (_a = propertiesArray_1.return)) _a.call(propertiesArray_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!object) {
            return '';
        }
        return object.toString();
    }

    var TYPEAHEAD_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
    var typeaheadAnimation = animations.trigger('typeaheadAnimation', [
        animations.state('animated-down', animations.style({ height: '*', overflow: 'hidden' })),
        animations.transition('* => animated-down', [
            animations.style({ height: 0, overflow: 'hidden' }),
            animations.animate(TYPEAHEAD_ANIMATION_TIMING)
        ]),
        animations.state('animated-up', animations.style({ height: '*', overflow: 'hidden' })),
        animations.transition('* => animated-up', [
            animations.style({ height: '*', overflow: 'hidden' }),
            animations.animate(TYPEAHEAD_ANIMATION_TIMING)
        ]),
        animations.transition('* => unanimated', animations.animate('0s'))
    ]);

    var nextWindowId = 0;
    var TypeaheadContainerComponent = /** @class */ (function () {
        function TypeaheadContainerComponent(positionService, renderer, element, changeDetectorRef) {
            var _this = this;
            var _a;
            this.positionService = positionService;
            this.renderer = renderer;
            this.element = element;
            this.changeDetectorRef = changeDetectorRef;
            // eslint-disable-next-line @angular-eslint/no-output-rename
            this.activeChangeEvent = new i0.EventEmitter();
            this.isFocused = false;
            this.positionServiceSubscription = new rxjs.Subscription();
            this.height = 0;
            this.popupId = "ngb-typeahead-" + nextWindowId++;
            this._matches = [];
            this.renderer.setAttribute(this.element.nativeElement, 'id', this.popupId);
            this.positionServiceSubscription.add((_a = this.positionService.event$) === null || _a === void 0 ? void 0 : _a.subscribe(function () {
                if (_this.isAnimated) {
                    _this.animationState = _this.isTopPosition ? 'animated-up' : 'animated-down';
                    _this.changeDetectorRef.detectChanges();
                    return;
                }
                _this.animationState = 'unanimated';
                _this.changeDetectorRef.detectChanges();
            }));
        }
        Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
            get: function () {
                return !utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadTemplateMethods", {
            get: function () {
                return {
                    selectMatch: this.selectMatch.bind(this),
                    selectActive: this.selectActive.bind(this),
                    isActive: this.isActive.bind(this)
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "active", {
            get: function () {
                return this._active;
            },
            set: function (active) {
                this._active = active;
                this.activeChanged();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
            get: function () {
                return this._matches;
            },
            set: function (value) {
                var _this = this;
                var _a;
                this.positionService.setOptions({
                    modifiers: { flip: { enabled: this.adaptivePosition } },
                    allowedPositions: ['top', 'bottom']
                });
                this._matches = value;
                this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
                if (this.typeaheadScrollable) {
                    setTimeout(function () {
                        _this.setScrollableMode();
                    });
                }
                if (this.typeaheadIsFirstItemActive && this._matches.length > 0) {
                    this.setActive(this._matches[0]);
                    if ((_a = this._active) === null || _a === void 0 ? void 0 : _a.isHeader()) {
                        this.nextActiveMatch();
                    }
                }
                if (this._active && !this.typeaheadIsFirstItemActive) {
                    var concurrency = this._matches.find(function (match) { var _a; return match.value === ((_a = _this._active) === null || _a === void 0 ? void 0 : _a.value); });
                    if (concurrency) {
                        this.selectActive(concurrency);
                        return;
                    }
                    this.active = void 0;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "isTopPosition", {
            get: function () {
                return this.element.nativeElement.classList.contains('top');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
            get: function () {
                return this.parent ? this.parent.optionsListTemplate : undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "isAnimated", {
            get: function () {
                return this.parent ? this.parent.isAnimated : false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "adaptivePosition", {
            get: function () {
                return this.parent ? this.parent.adaptivePosition : false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadScrollable", {
            get: function () {
                return this.parent ? this.parent.typeaheadScrollable : false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadOptionsInScrollableView", {
            get: function () {
                return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadIsFirstItemActive", {
            get: function () {
                return this.parent ? this.parent.typeaheadIsFirstItemActive : true;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            get: function () {
                return this.parent ? this.parent.typeaheadItemTemplate : undefined;
            },
            enumerable: false,
            configurable: true
        });
        TypeaheadContainerComponent.prototype.selectActiveMatch = function (isActiveItemChanged) {
            var _a, _b;
            if (this._active && ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.typeaheadSelectFirstItem)) {
                this.selectMatch(this._active);
            }
            if (!((_b = this.parent) === null || _b === void 0 ? void 0 : _b.typeaheadSelectFirstItem) && isActiveItemChanged) {
                this.selectMatch(this._active);
            }
        };
        TypeaheadContainerComponent.prototype.activeChanged = function () {
            if (!this._active) {
                return;
            }
            var index = this.matches.indexOf(this._active);
            this.activeChangeEvent.emit(this.popupId + "-" + index);
        };
        TypeaheadContainerComponent.prototype.prevActiveMatch = function () {
            if (!this._active) {
                return;
            }
            var index = this.matches.indexOf(this._active);
            this.setActive(this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1]);
            if (this._active.isHeader()) {
                this.prevActiveMatch();
            }
            if (this.typeaheadScrollable) {
                this.scrollPrevious(index);
            }
        };
        TypeaheadContainerComponent.prototype.nextActiveMatch = function () {
            var _a;
            var index = this._active ? this.matches.indexOf(this._active) : -1;
            this.setActive(this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1]);
            if ((_a = this._active) === null || _a === void 0 ? void 0 : _a.isHeader()) {
                this.nextActiveMatch();
            }
            if (this.typeaheadScrollable) {
                this.scrollNext(index);
            }
        };
        TypeaheadContainerComponent.prototype.selectActive = function (value) {
            this.isFocused = true;
            this.setActive(value);
        };
        TypeaheadContainerComponent.prototype.highlight = function (match, query) {
            var itemStr = match.value;
            var itemStrHelper = (this.parent && this.parent.typeaheadLatinize
                ? latinize(itemStr)
                : itemStr).toLowerCase();
            var startIdx;
            var tokenLen;
            // Replaces the capture string with the same string inside of a "strong" tag
            if (typeof query === 'object') {
                var queryLen = query.length;
                for (var i = 0; i < queryLen; i += 1) {
                    // query[i] is already latinized and lower case
                    startIdx = itemStrHelper.indexOf(query[i]);
                    tokenLen = query[i].length;
                    if (startIdx >= 0 && tokenLen > 0) {
                        itemStr =
                            itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                                ("" + itemStr.substring(startIdx + tokenLen));
                        itemStrHelper =
                            itemStrHelper.substring(0, startIdx) + "        " + ' '.repeat(tokenLen) + "         " +
                                ("" + itemStrHelper.substring(startIdx + tokenLen));
                    }
                }
            }
            else if (query) {
                // query is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query);
                tokenLen = query.length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr =
                        itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                            ("" + itemStr.substring(startIdx + tokenLen));
                }
            }
            return itemStr;
        };
        TypeaheadContainerComponent.prototype.focusLost = function () {
            this.isFocused = false;
            this.setActive(void 0);
        };
        TypeaheadContainerComponent.prototype.isActive = function (value) {
            return this.active === value;
        };
        TypeaheadContainerComponent.prototype.selectMatch = function (value, event) {
            var _this = this;
            var _a;
            if (event) {
                event.stopPropagation();
                event.preventDefault();
            }
            (_a = this.parent) === null || _a === void 0 ? void 0 : _a.changeModel(value);
            setTimeout(function () { var _a; return (_a = _this.parent) === null || _a === void 0 ? void 0 : _a.typeaheadOnSelect.emit(value); }, 0);
            return false;
        };
        TypeaheadContainerComponent.prototype.setScrollableMode = function () {
            var _a;
            if (!this.ulElement) {
                this.ulElement = this.element;
            }
            if ((_a = this.liElements) === null || _a === void 0 ? void 0 : _a.first) {
                var ulStyles = utils.Utils.getStyles(this.ulElement.nativeElement);
                var liStyles = utils.Utils.getStyles(this.liElements.first.nativeElement);
                var ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '')
                    .replace('px', ''));
                var ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0')
                    .replace('px', ''));
                var optionHeight = parseFloat((liStyles.height ? liStyles.height : '0')
                    .replace('px', ''));
                var height = this.typeaheadOptionsInScrollableView * optionHeight;
                this.guiHeight = height + ulPaddingTop + ulPaddingBottom + "px";
            }
            this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
        };
        TypeaheadContainerComponent.prototype.scrollPrevious = function (index) {
            if (index === 0) {
                this.scrollToBottom();
                return;
            }
            if (this.liElements && this.ulElement) {
                var liElement = this.liElements.toArray()[index - 1];
                if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                    this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
                }
            }
        };
        TypeaheadContainerComponent.prototype.scrollNext = function (index) {
            if (index + 1 > this.matches.length - 1) {
                this.scrollToTop();
                return;
            }
            if (this.liElements && this.ulElement) {
                var liElement = this.liElements.toArray()[index + 1];
                if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                    this.ulElement.nativeElement.scrollTop =
                        liElement.nativeElement.offsetTop -
                            Number(this.ulElement.nativeElement.offsetHeight) +
                            Number(liElement.nativeElement.offsetHeight);
                }
            }
        };
        TypeaheadContainerComponent.prototype.ngOnDestroy = function () {
            this.positionServiceSubscription.unsubscribe();
        };
        TypeaheadContainerComponent.prototype.setActive = function (value) {
            var _a;
            this._active = value;
            var preview;
            if (!(this._active == null || this._active.isHeader())) {
                preview = value;
            }
            (_a = this.parent) === null || _a === void 0 ? void 0 : _a.typeaheadOnPreview.emit(preview);
        };
        TypeaheadContainerComponent.prototype.isScrolledIntoView = function (elem) {
            if (!this.ulElement) {
                return false;
            }
            var containerViewTop = this.ulElement.nativeElement.scrollTop;
            var containerViewBottom = containerViewTop + Number(this.ulElement.nativeElement.offsetHeight);
            var elemTop = elem.offsetTop;
            var elemBottom = elemTop + elem.offsetHeight;
            return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
        };
        ;
        TypeaheadContainerComponent.prototype.scrollToBottom = function () {
            var _a;
            if (!((_a = this.ulElement) === null || _a === void 0 ? void 0 : _a.nativeElement)) {
                return;
            }
            this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
        };
        TypeaheadContainerComponent.prototype.scrollToTop = function () {
            var _a;
            if (!((_a = this.ulElement) === null || _a === void 0 ? void 0 : _a.nativeElement)) {
                return;
            }
            this.ulElement.nativeElement.scrollTop = 0;
        };
        return TypeaheadContainerComponent;
    }());
    TypeaheadContainerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'typeahead-container',
                    template: "<!-- inject options list template -->\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\n             [ngTemplateOutletContext]=\"{\n               matches: matches,\n               itemTemplate: itemTemplate || bsItemTemplate,\n               query: query,\n               $implicit: typeaheadTemplateMethods\n             }\">\n</ng-template>\n\n<!-- default options item template -->\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\">\n  <span [innerHtml]=\"highlight(match, query)\"></span>\n</ng-template>\n\n<!-- Bootstrap 3 options list template -->\n<ng-template #bs3Template>\n  <ul class=\"dropdown-menu\"\n      #ulElement\n      role=\"listbox\"\n      [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\"\n      [style.height]=\"needScrollbar ? guiHeight: 'auto'\">\n    <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n      <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li>\n      <li #liElements\n          *ngIf=\"!match.isHeader()\"\n          [id]=\"popupId + '-' + i\"\n          role=\"option\"\n          [@typeaheadAnimation]=\"animationState\"\n          [class.active]=\"isActive(match)\"\n          (mouseenter)=\"selectActive(match)\">\n\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                       [ngTemplateOutletContext]=\"{item: match.item, index: i, match: match, query: query}\">\n          </ng-template>\n        </a>\n      </li>\n    </ng-template>\n  </ul>\n</ng-template>\n\n<!-- Bootstrap 4 options list template -->\n<ng-template #bs4Template>\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n    <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6>\n    <ng-template [ngIf]=\"!match.isHeader()\">\n      <button #liElements\n              [id]=\"popupId + '-' + i\"\n              role=\"option\"\n              [@typeaheadAnimation]=\"animationState\"\n              class=\"dropdown-item\"\n              (click)=\"selectMatch(match, $event)\"\n              (mouseenter)=\"selectActive(match)\"\n              [class.active]=\"isActive(match)\">\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                     [ngTemplateOutletContext]=\"{item: match.item, index: i, match: match, query: query}\">\n        </ng-template>\n      </button>\n    </ng-template>\n  </ng-template>\n</ng-template>\n",
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        class: 'dropdown open bottom',
                        '[class.dropdown-menu]': 'isBs4',
                        '[style.height]': "isBs4 && needScrollbar ? guiHeight: 'auto'",
                        '[style.visibility]': "'inherit'",
                        '[class.dropup]': 'dropup',
                        style: 'position: absolute;display: block;',
                        '[attr.role]': "isBs4 ? 'listbox' : null "
                    },
                    animations: [typeaheadAnimation],
                    styles: ["\n    :host.dropdown {\n      z-index: 1000;\n    }\n\n    :host.dropdown-menu, .dropdown-menu {\n      overflow-y: auto;\n      height: 100px;\n    }\n  "]
                },] }
    ];
    TypeaheadContainerComponent.ctorParameters = function () { return [
        { type: positioning.PositioningService },
        { type: i0.Renderer2 },
        { type: i0.ElementRef },
        { type: i0.ChangeDetectorRef }
    ]; };
    TypeaheadContainerComponent.propDecorators = {
        activeChangeEvent: [{ type: i0.Output, args: ['activeChange',] }],
        ulElement: [{ type: i0.ViewChild, args: ['ulElement', { static: false },] }],
        liElements: [{ type: i0.ViewChildren, args: ['liElements',] }],
        focusLost: [{ type: i0.HostListener, args: ['mouseleave',] }, { type: i0.HostListener, args: ['blur',] }]
    };

    /** Default values provider for typeahead */
    var TypeaheadConfig = /** @class */ (function () {
        function TypeaheadConfig() {
            /** sets use adaptive position */
            this.adaptivePosition = false;
            /** turn on/off animation */
            this.isAnimated = false;
            /** used to hide results on blur */
            this.hideResultsOnBlur = true;
            /** if true, typeahead will cancel async request on blur */
            this.cancelRequestOnFocusLost = false;
            /** used to choose the first item in typeahead container */
            this.selectFirstItem = true;
            /** used to active/inactive the first item in typeahead container */
            this.isFirstItemActive = true;
            /** used to choose set minimal no of characters that needs to
             * be entered before typeahead kicks-in
             */
            this.minLength = 1;
        }
        return TypeaheadConfig;
    }());
    TypeaheadConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function TypeaheadConfig_Factory() { return new TypeaheadConfig(); }, token: TypeaheadConfig, providedIn: "root" });
    TypeaheadConfig.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];

    var TypeaheadDirective = /** @class */ (function () {
        function TypeaheadDirective(cis, config, changeDetection, element, ngControl, renderer, viewContainerRef) {
            this.changeDetection = changeDetection;
            this.element = element;
            this.ngControl = ngControl;
            this.renderer = renderer;
            /** minimal no of characters that needs to be entered before
             * typeahead kicks-in. When set to 0, typeahead shows on focus with full
             * list of options (limited as normal by typeaheadOptionsLimit)
             */
            this.typeaheadMinLength = 1;
            /** sets use adaptive position */
            this.adaptivePosition = false;
            /** turn on/off animation */
            this.isAnimated = false;
            /** minimal wait time after last character typed before typeahead kicks-in */
            this.typeaheadWaitMs = 0;
            /** match latin symbols.
             * If true the word súper would match super and vice versa.
             */
            this.typeaheadLatinize = true;
            /** Can be use to search words by inserting a single white space between each characters
             *  for example 'C a l i f o r n i a' will match 'California'.
             */
            this.typeaheadSingleWords = true;
            /** should be used only in case typeaheadSingleWords attribute is true.
             * Sets the word delimiter to break words. Defaults to space.
             */
            this.typeaheadWordDelimiters = ' ';
            /** should be used only in case typeaheadMultipleSearch attribute is true.
             * Sets the multiple search delimiter to know when to start a new search. Defaults to comma.
             * If space needs to be used, then explicitly set typeaheadWordDelimiters to something else than space
             * because space is used by default OR set typeaheadSingleWords attribute to false if you don't need
             * to use it together with multiple search.
             */
            this.typeaheadMultipleSearchDelimiters = ',';
            /** should be used only in case typeaheadSingleWords attribute is true.
             * Sets the word delimiter to match exact phrase.
             * Defaults to simple and double quotes.
             */
            this.typeaheadPhraseDelimiters = '\'"';
            /** specifies if typeahead is scrollable  */
            this.typeaheadScrollable = false;
            /** specifies number of options to show in scroll view  */
            this.typeaheadOptionsInScrollableView = 5;
            /** fired when an options list was opened and the user clicked Tab
             * If a value equal true, it will be chosen first or active item in the list
             * If value equal false, it will be chosen an active item in the list or nothing
             */
            this.typeaheadSelectFirstItem = true;
            /** makes active first item in a list */
            this.typeaheadIsFirstItemActive = true;
            /** fired when 'busy' state of this component was changed,
             * fired on async mode only, returns boolean
             */
            this.typeaheadLoading = new i0.EventEmitter();
            /** fired on every key event and returns true
             * in case of matches are not detected
             */
            this.typeaheadNoResults = new i0.EventEmitter();
            /** fired when option was selected, return object with data of this option. */
            this.typeaheadOnSelect = new i0.EventEmitter();
            /** fired when option was previewed, return object with data of this option. */
            this.typeaheadOnPreview = new i0.EventEmitter();
            /** fired when blur event occurs. returns the active item */
            this.typeaheadOnBlur = new i0.EventEmitter();
            /** This attribute indicates that the dropdown should be opened upwards */
            this.dropup = false;
            this.isOpen = false;
            this.list = 'list';
            this.isActiveItemChanged = false;
            this.isFocused = false;
            this.cancelRequestOnFocusLost = false;
            this.keyUpEventEmitter = new i0.EventEmitter();
            this.placement = 'bottom left';
            this._matches = [];
            this._subscriptions = [];
            this._outsideClickListener = function () { return void 0; };
            this._typeahead = cis.createLoader(element, viewContainerRef, renderer)
                .provide({ provide: TypeaheadConfig, useValue: config });
            Object.assign(this, {
                typeaheadHideResultsOnBlur: config.hideResultsOnBlur,
                cancelRequestOnFocusLost: config.cancelRequestOnFocusLost,
                typeaheadSelectFirstItem: config.selectFirstItem,
                typeaheadIsFirstItemActive: config.isFirstItemActive,
                typeaheadMinLength: config.minLength,
                adaptivePosition: config.adaptivePosition,
                isAnimated: config.isAnimated
            });
        }
        Object.defineProperty(TypeaheadDirective.prototype, "matches", {
            get: function () {
                return this._matches;
            },
            enumerable: false,
            configurable: true
        });
        TypeaheadDirective.prototype.ngOnInit = function () {
            this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
            this.typeaheadMinLength =
                this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
            // async should be false in case of array
            if (this.typeaheadAsync === undefined && !(rxjs.isObservable(this.typeahead))) {
                this.typeaheadAsync = false;
            }
            if (rxjs.isObservable(this.typeahead)) {
                this.typeaheadAsync = true;
            }
            if (this.typeaheadAsync) {
                this.asyncActions();
            }
            else {
                this.syncActions();
            }
            this.checkDelimitersConflict();
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        TypeaheadDirective.prototype.onInput = function (e) {
            // For `<input>`s, use the `value` property. For others that don't have a
            // `value` (such as `<span contenteditable="true">`), use either
            // `textContent` or `innerText` (depending on which one is supported, i.e.
            // Firefox or IE).
            var value = e.target.value !== undefined
                ? e.target.value
                : e.target.textContent !== undefined
                    ? e.target.textContent
                    : e.target.innerText;
            if (value != null && value.trim().length >= this.typeaheadMinLength) {
                this.typeaheadLoading.emit(true);
                this.keyUpEventEmitter.emit(e.target.value);
            }
            else {
                this.typeaheadLoading.emit(false);
                this.typeaheadNoResults.emit(false);
                this.hide();
            }
        };
        TypeaheadDirective.prototype.onChange = function (event) {
            if (this._container) {
                // esc
                if (event.keyCode === 27 || event.key === 'Escape') {
                    this.hide();
                    return;
                }
                // up
                if (event.keyCode === 38 || event.key === 'ArrowUp') {
                    this.isActiveItemChanged = true;
                    this._container.prevActiveMatch();
                    return;
                }
                // down
                if (event.keyCode === 40 || event.key === 'ArrowDown') {
                    this.isActiveItemChanged = true;
                    this._container.nextActiveMatch();
                    return;
                }
                // enter
                if (event.keyCode === 13 || event.key === 'Enter') {
                    this._container.selectActiveMatch();
                    return;
                }
            }
        };
        TypeaheadDirective.prototype.onFocus = function () {
            var _this = this;
            this.isFocused = true;
            // add setTimeout to fix issue #5251
            // to get and emit updated value if it's changed on focus
            setTimeout(function () {
                if (_this.typeaheadMinLength === 0) {
                    _this.typeaheadLoading.emit(true);
                    _this.keyUpEventEmitter.emit(_this.element.nativeElement.value || '');
                }
            }, 0);
        };
        TypeaheadDirective.prototype.onBlur = function () {
            var _a;
            this.isFocused = false;
            if (this._container && !this._container.isFocused) {
                this.typeaheadOnBlur.emit(this._container.active);
            }
            if (!this.container && ((_a = this._matches) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                this.typeaheadOnBlur.emit(new TypeaheadMatch(this.element.nativeElement.value, this.element.nativeElement.value, false));
            }
        };
        TypeaheadDirective.prototype.onKeydown = function (event) {
            // no container - no problems
            if (!this._container) {
                return;
            }
            if (event.keyCode === 9 || event.key === 'Tab') {
                this.onBlur();
            }
            if (event.keyCode === 9 || event.key === 'Tab' || event.keyCode === 13 || event.key === 'Enter') {
                event.preventDefault();
                if (this.typeaheadSelectFirstItem) {
                    this._container.selectActiveMatch();
                    return;
                }
                if (!this.typeaheadSelectFirstItem) {
                    this._container.selectActiveMatch(this.isActiveItemChanged);
                    this.isActiveItemChanged = false;
                    this.hide();
                }
            }
        };
        TypeaheadDirective.prototype.changeModel = function (match) {
            var _a;
            if (!match) {
                return;
            }
            var valueStr;
            if (this.typeaheadMultipleSearch && this._allEnteredValue) {
                var tokens = this._allEnteredValue.split(new RegExp("([" + this.typeaheadMultipleSearchDelimiters + "]+)"));
                this._allEnteredValue = tokens.slice(0, tokens.length - 1).concat(match.value).join('');
                valueStr = this._allEnteredValue;
            }
            else {
                valueStr = match.value;
            }
            this.ngControl.viewToModelUpdate(valueStr);
            (_a = this.ngControl.control) === null || _a === void 0 ? void 0 : _a.setValue(valueStr);
            this.changeDetection.markForCheck();
            this.hide();
        };
        TypeaheadDirective.prototype.show = function () {
            var _this = this;
            this._typeahead
                .attach(TypeaheadContainerComponent)
                .to(this.container)
                .position({ attachment: (this.dropup ? 'top' : 'bottom') + " left" })
                .show({
                typeaheadRef: this,
                placement: this.placement,
                animation: false,
                dropup: this.dropup
            });
            this._outsideClickListener = this.renderer
                .listen('document', 'click', function (event) {
                if (_this.typeaheadMinLength === 0 && _this.element.nativeElement.contains(event.target)) {
                    return;
                }
                if (!_this.typeaheadHideResultsOnBlur || _this.element.nativeElement.contains(event.target)) {
                    return;
                }
                _this.onOutsideClick();
            });
            if (!this._typeahead.instance || !this.ngControl.control) {
                return;
            }
            this._container = this._typeahead.instance;
            this._container.parent = this;
            // This improves the speed as it won't have to be done for each list item
            var normalizedQuery = (this.typeaheadLatinize
                ? latinize(this.ngControl.control.value)
                : this.ngControl.control.value)
                .toString()
                .toLowerCase();
            this._container.query = this.tokenizeQuery(normalizedQuery);
            this._container.matches = this._matches;
            this.element.nativeElement.focus();
            this._container.activeChangeEvent.subscribe(function (activeId) {
                _this.activeDescendant = activeId;
                _this.changeDetection.markForCheck();
            });
            this.isOpen = true;
        };
        TypeaheadDirective.prototype.hide = function () {
            if (this._typeahead.isShown) {
                this._typeahead.hide();
                this._outsideClickListener();
                this._container = void 0;
                this.isOpen = false;
                this.changeDetection.markForCheck();
            }
            this.typeaheadOnPreview.emit();
        };
        TypeaheadDirective.prototype.onOutsideClick = function () {
            if (this._container && !this._container.isFocused) {
                this.hide();
            }
        };
        TypeaheadDirective.prototype.ngOnDestroy = function () {
            var e_1, _b;
            try {
                // clean up subscriptions
                for (var _c = __values(this._subscriptions), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var sub = _d.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this._typeahead.dispose();
        };
        TypeaheadDirective.prototype.asyncActions = function () {
            var _this = this;
            this._subscriptions.push(this.keyUpEventEmitter
                .pipe(operators.debounceTime(this.typeaheadWaitMs), operators.tap(function (value) { return _this._allEnteredValue = value; }), operators.switchMap(function () {
                if (!_this.typeahead) {
                    return rxjs.EMPTY;
                }
                return _this.typeahead;
            }))
                .subscribe(function (matches) {
                _this.finalizeAsyncCall(matches);
            }));
        };
        TypeaheadDirective.prototype.syncActions = function () {
            var _this = this;
            this._subscriptions.push(this.keyUpEventEmitter
                .pipe(operators.debounceTime(this.typeaheadWaitMs), operators.mergeMap(function (value) {
                _this._allEnteredValue = value;
                var normalizedQuery = _this.normalizeQuery(value);
                if (!_this.typeahead) {
                    return rxjs.EMPTY;
                }
                var typeahead = rxjs.isObservable(_this.typeahead) ? _this.typeahead : rxjs.from(_this.typeahead);
                return typeahead
                    .pipe(operators.filter(function (option) {
                    return !!option && _this.testMatch(_this.normalizeOption(option), normalizedQuery);
                }), operators.toArray());
            }))
                .subscribe(function (matches) {
                _this.finalizeAsyncCall(matches);
            }));
        };
        TypeaheadDirective.prototype.normalizeOption = function (option) {
            var optionValue = getValueFromObject(option, this.typeaheadOptionField);
            var normalizedOption = this.typeaheadLatinize
                ? latinize(optionValue)
                : optionValue;
            return normalizedOption.toLowerCase();
        };
        TypeaheadDirective.prototype.tokenizeQuery = function (currentQuery) {
            var query = currentQuery;
            if (this.typeaheadMultipleSearch && this.typeaheadSingleWords) {
                if (!this.haveCommonCharacters("" + this.typeaheadPhraseDelimiters + this.typeaheadWordDelimiters, this.typeaheadMultipleSearchDelimiters)) {
                    // single words and multiple search delimiters are different, can be used together
                    query = tokenize(query, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters, this.typeaheadMultipleSearchDelimiters);
                }
            }
            else if (this.typeaheadSingleWords) {
                query = tokenize(query, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters);
            }
            else {
                // multiple searches
                query = tokenize(query, void 0, void 0, this.typeaheadMultipleSearchDelimiters);
            }
            return query;
        };
        TypeaheadDirective.prototype.normalizeQuery = function (value) {
            // If singleWords, break model here to not be doing extra work on each iteration
            var normalizedQuery = (this.typeaheadLatinize
                ? latinize(value)
                : value)
                .toString()
                .toLowerCase();
            normalizedQuery = this.tokenizeQuery(normalizedQuery);
            return normalizedQuery;
        };
        TypeaheadDirective.prototype.testMatch = function (match, test) {
            var spaceLength;
            if (typeof test === 'object') {
                spaceLength = test.length;
                for (var i = 0; i < spaceLength; i += 1) {
                    if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                        return false;
                    }
                }
                return true;
            }
            return match.indexOf(test) >= 0;
        };
        TypeaheadDirective.prototype.finalizeAsyncCall = function (matches) {
            this.prepareMatches(matches || []);
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(!this.hasMatches());
            if (!this.hasMatches()) {
                this.hide();
                return;
            }
            if (!this.isFocused && this.cancelRequestOnFocusLost) {
                return;
            }
            if (this._container && this.ngControl.control) {
                // fix: remove usage of ngControl internals
                var _controlValue = (this.typeaheadLatinize
                    ? latinize(this.ngControl.control.value)
                    : this.ngControl.control.value) || '';
                // This improves the speed as it won't have to be done for each list item
                var normalizedQuery = _controlValue.toString().toLowerCase();
                this._container.query = this.tokenizeQuery(normalizedQuery);
                this._container.matches = this._matches;
            }
            else {
                this.show();
            }
        };
        TypeaheadDirective.prototype.prepareMatches = function (options) {
            var _this = this;
            var limited = options.slice(0, this.typeaheadOptionsLimit);
            var sorted = !this.typeaheadOrderBy ? limited : this.orderMatches(limited);
            if (this.typeaheadGroupField) {
                var matches_1 = [];
                // extract all group names
                var groups = sorted
                    .map(function (option) { return getValueFromObject(option, _this.typeaheadGroupField); })
                    .filter(function (v, i, a) { return a.indexOf(v) === i; });
                groups.forEach(function (group) {
                    // add group header to array of matches
                    matches_1.push(new TypeaheadMatch(group, group, true));
                    // add each item of group to array of matches
                    matches_1 = matches_1.concat(sorted
                        .filter(function (option) { return getValueFromObject(option, _this.typeaheadGroupField) === group; })
                        .map(function (option) { return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField)); }));
                });
                this._matches = matches_1;
            }
            else {
                this._matches = sorted.map(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                function (option) { return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField)); });
            }
        };
        TypeaheadDirective.prototype.orderMatches = function (options) {
            if (!options.length) {
                return options;
            }
            if (this.typeaheadOrderBy !== null
                && this.typeaheadOrderBy !== undefined
                && typeof this.typeaheadOrderBy === 'object'
                && Object.keys(this.typeaheadOrderBy).length === 0) {
                console.error('Field and direction properties for typeaheadOrderBy have to be set according to documentation!');
                return options;
            }
            var _b = (this.typeaheadOrderBy || {}), field = _b.field, direction = _b.direction;
            if (!direction || !(direction === 'asc' || direction === 'desc')) {
                console.error('typeaheadOrderBy direction has to equal "asc" or "desc". Please follow the documentation.');
                return options;
            }
            if (typeof options[0] === 'string') {
                return direction === 'asc' ? options.sort() : options.sort().reverse();
            }
            if (!field || typeof field !== 'string') {
                console.error('typeaheadOrderBy field has to set according to the documentation.');
                return options;
            }
            return options.sort(function (a, b) {
                var stringA = getValueFromObject(a, field);
                var stringB = getValueFromObject(b, field);
                if (stringA < stringB) {
                    return direction === 'asc' ? -1 : 1;
                }
                if (stringA > stringB) {
                    return direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        };
        TypeaheadDirective.prototype.hasMatches = function () {
            return this._matches.length > 0;
        };
        TypeaheadDirective.prototype.checkDelimitersConflict = function () {
            if (this.typeaheadMultipleSearch && this.typeaheadSingleWords
                && (this.haveCommonCharacters("" + this.typeaheadPhraseDelimiters + this.typeaheadWordDelimiters, this.typeaheadMultipleSearchDelimiters))) {
                throw new Error("Delimiters used in typeaheadMultipleSearchDelimiters must be different\n          from delimiters used in typeaheadWordDelimiters (current value: " + this.typeaheadWordDelimiters + ") and\n          typeaheadPhraseDelimiters (current value: " + this.typeaheadPhraseDelimiters + ").\n          Please refer to the documentation");
            }
        };
        TypeaheadDirective.prototype.haveCommonCharacters = function (str1, str2) {
            for (var i = 0; i < str1.length; i++) {
                if (str1.charAt(i).indexOf(str2) > -1) {
                    return true;
                }
            }
            return false;
        };
        return TypeaheadDirective;
    }());
    TypeaheadDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[typeahead]',
                    exportAs: 'bs-typeahead',
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        '[attr.aria-activedescendant]': 'activeDescendant',
                        '[attr.aria-owns]': 'isOpen ? this._container.popupId : null',
                        '[attr.aria-expanded]': 'isOpen',
                        '[attr.aria-autocomplete]': 'list'
                    }
                },] }
    ];
    TypeaheadDirective.ctorParameters = function () { return [
        { type: componentLoader.ComponentLoaderFactory },
        { type: TypeaheadConfig },
        { type: i0.ChangeDetectorRef },
        { type: i0.ElementRef },
        { type: forms.NgControl },
        { type: i0.Renderer2 },
        { type: i0.ViewContainerRef }
    ]; };
    TypeaheadDirective.propDecorators = {
        typeahead: [{ type: i0.Input }],
        typeaheadMinLength: [{ type: i0.Input }],
        adaptivePosition: [{ type: i0.Input }],
        isAnimated: [{ type: i0.Input }],
        typeaheadWaitMs: [{ type: i0.Input }],
        typeaheadOptionsLimit: [{ type: i0.Input }],
        typeaheadOptionField: [{ type: i0.Input }],
        typeaheadGroupField: [{ type: i0.Input }],
        typeaheadOrderBy: [{ type: i0.Input }],
        typeaheadAsync: [{ type: i0.Input }],
        typeaheadLatinize: [{ type: i0.Input }],
        typeaheadSingleWords: [{ type: i0.Input }],
        typeaheadWordDelimiters: [{ type: i0.Input }],
        typeaheadMultipleSearch: [{ type: i0.Input }],
        typeaheadMultipleSearchDelimiters: [{ type: i0.Input }],
        typeaheadPhraseDelimiters: [{ type: i0.Input }],
        typeaheadItemTemplate: [{ type: i0.Input }],
        optionsListTemplate: [{ type: i0.Input }],
        typeaheadScrollable: [{ type: i0.Input }],
        typeaheadOptionsInScrollableView: [{ type: i0.Input }],
        typeaheadHideResultsOnBlur: [{ type: i0.Input }],
        typeaheadSelectFirstItem: [{ type: i0.Input }],
        typeaheadIsFirstItemActive: [{ type: i0.Input }],
        typeaheadLoading: [{ type: i0.Output }],
        typeaheadNoResults: [{ type: i0.Output }],
        typeaheadOnSelect: [{ type: i0.Output }],
        typeaheadOnPreview: [{ type: i0.Output }],
        typeaheadOnBlur: [{ type: i0.Output }],
        container: [{ type: i0.Input }],
        dropup: [{ type: i0.Input }],
        onInput: [{ type: i0.HostListener, args: ['input', ['$event'],] }],
        onChange: [{ type: i0.HostListener, args: ['keyup', ['$event'],] }],
        onFocus: [{ type: i0.HostListener, args: ['click',] }, { type: i0.HostListener, args: ['focus',] }],
        onBlur: [{ type: i0.HostListener, args: ['blur',] }],
        onKeydown: [{ type: i0.HostListener, args: ['keydown', ['$event'],] }]
    };

    var TypeaheadModule = /** @class */ (function () {
        function TypeaheadModule() {
        }
        TypeaheadModule.forRoot = function () {
            return {
                ngModule: TypeaheadModule,
                providers: [componentLoader.ComponentLoaderFactory, positioning.PositioningService]
            };
        };
        return TypeaheadModule;
    }());
    TypeaheadModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [TypeaheadContainerComponent, TypeaheadDirective],
                    exports: [TypeaheadContainerComponent, TypeaheadDirective],
                    entryComponents: [TypeaheadContainerComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TypeaheadConfig = TypeaheadConfig;
    exports.TypeaheadContainerComponent = TypeaheadContainerComponent;
    exports.TypeaheadDirective = TypeaheadDirective;
    exports.TypeaheadMatch = TypeaheadMatch;
    exports.TypeaheadModule = TypeaheadModule;
    exports.TypeaheadOptions = TypeaheadOptions;
    exports.escapeRegexp = escapeRegexp;
    exports.getValueFromObject = getValueFromObject;
    exports.latinMap = latinMap;
    exports.latinize = latinize;
    exports.tokenize = tokenize;
    exports.ɵa = typeaheadAnimation;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-typeahead.umd.js.map
