// wrap in UMD
(function(factory) {
    if (typeof module === "object" && module.exports) module.exports = factory(); else window.intlIdInput = factory();
})(function(undefined) {
    "use strict";
    return function() {
        // Array of country objects for the flag dropdown.
        // Here is the criteria for the plugin to support a given country/territory
        // - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
        // - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
        // - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
        // - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
        // Each country array has the following information:
        // [
        //    Country name,
        //    iso2 code,
        //    International dial code,
        //    Order (if >1 country with same dial code),
        //    Area codes
        // ]
        var allCountries = [ [ "Afghanistan", "af", "93" ], [ "Albania", "al", "355" ], [ "Algeria", "dz", "213" ], [ "American Samoa", "as", "1", 5, [ "684" ] ], [ "Andorra", "ad", "376" ], [ "Angola", "ao", "244" ], [ "Anguilla", "ai", "1", 6, [ "264" ] ], [ "Antigua & Barbuda", "ag", "1", 7, [ "268" ] ], [ "Argentina", "ar", "54" ], [ "Armenia", "am", "374" ], [ "Aruba", "aw", "297" ], [ "Ascension Island", "ac", "247" ], [ "Australia", "au", "61", 0 ], [ "Austria", "at", "43" ], [ "Azerbaijan", "az", "994" ], [ "Bahamas", "bs", "1", 8, [ "242" ] ], [ "Bahrain", "bh", "973" ], [ "Bangladesh", "bd", "880" ], [ "Barbados", "bb", "1", 9, [ "246" ] ], [ "Belarus", "by", "375" ], [ "Belgium", "be", "32" ], [ "Belize", "bz", "501" ], [ "Benin", "bj", "229" ], [ "Bermuda", "bm", "1", 10, [ "441" ] ], [ "Bhutan", "bt", "975" ], [ "Bolivia", "bo", "591" ], [ "Bosnia & Herzegovina", "ba", "387" ], [ "Botswana", "bw", "267" ], [ "Brazil", "br", "55" ], [ "British Indian Ocean Territory", "io", "246" ], [ "British Virgin Islands", "vg", "1", 11, [ "284" ] ], [ "Brunei", "bn", "673" ], [ "Bulgaria", "bg", "359" ], [ "Burkina Faso", "bf", "226" ], [ "Burundi", "bi", "257" ], [ "Cambodia", "kh", "855" ], [ "Cameroon", "cm", "237" ], [ "Canada", "ca", "1", 1, [ "204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ], [ "Cape Verde", "cv", "238" ], [ "Caribbean Netherlands", "bq", "599", 1, [ "3", "4", "7" ] ], [ "Cayman Islands", "ky", "1", 12, [ "345" ] ], [ "Central African Republic", "cf", "236" ], [ "Chad", "td", "235" ], [ "Chile", "cl", "56" ], [ "China", "cn", "86" ], [ "Christmas Island", "cx", "61", 2, [ "89164" ] ], [ "Cocos (Keeling) Islands", "cc", "61", 1, [ "89162" ] ], [ "Colombia", "co", "57" ], [ "Comoros", "km", "269" ], [ "Congo - Brazzaville", "cg", "242" ], [ "Congo - Kinshasa", "cd", "243" ], [ "Cook Islands", "ck", "682" ], [ "Costa Rica", "cr", "506" ], [ "Côte d’Ivoire", "ci", "225" ], [ "Croatia", "hr", "385" ], [ "Cuba", "cu", "53" ], [ "Curaçao", "cw", "599", 0 ], [ "Cyprus", "cy", "357" ], [ "Czech Republic", "cz", "420" ], [ "Denmark", "dk", "45" ], [ "Djibouti", "dj", "253" ], [ "Dominica", "dm", "1", 13, [ "767" ] ], [ "Dominican Republic", "do", "1", 2, [ "809", "829", "849" ] ], [ "Ecuador", "ec", "593" ], [ "Egypt", "eg", "20" ], [ "El Salvador", "sv", "503" ], [ "Equatorial Guinea", "gq", "240" ], [ "Eritrea", "er", "291" ], [ "Estonia", "ee", "372" ], [ "Eswatini", "sz", "268" ], [ "Ethiopia", "et", "251" ], [ "Falkland Islands", "fk", "500" ], [ "Faroe Islands", "fo", "298" ], [ "Fiji", "fj", "679" ], [ "Finland", "fi", "358", 0 ], [ "France", "fr", "33" ], [ "French Guiana", "gf", "594" ], [ "French Polynesia", "pf", "689" ], [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ], [ "Georgia", "ge", "995" ], [ "Germany", "de", "49" ], [ "Ghana", "gh", "233" ], [ "Gibraltar", "gi", "350" ], [ "Greece", "gr", "30" ], [ "Greenland", "gl", "299" ], [ "Grenada", "gd", "1", 14, [ "473" ] ], [ "Guadeloupe", "gp", "590", 0 ], [ "Guam", "gu", "1", 15, [ "671" ] ], [ "Guatemala", "gt", "502" ], [ "Guernsey", "gg", "44", 1, [ "1481", "7781", "7839", "7911" ] ], [ "Guinea", "gn", "224" ], [ "Guinea-Bissau", "gw", "245" ], [ "Guyana", "gy", "592" ], [ "Haiti", "ht", "509" ], [ "Honduras", "hn", "504" ], [ "Hong Kong", "hk", "852" ], [ "Hungary", "hu", "36" ], [ "Iceland", "is", "354" ], [ "India", "in", "91" ], [ "Indonesia", "id", "62" ], [ "Iran", "ir", "98" ], [ "Iraq", "iq", "964" ], [ "Ireland", "ie", "353" ], [ "Isle of Man", "im", "44", 2, [ "1624", "74576", "7524", "7924", "7624" ] ], [ "Israel", "il", "972" ], [ "Italy", "it", "39", 0 ], [ "Jamaica", "jm", "1", 4, [ "876", "658" ] ], [ "Japan", "jp", "81" ], [ "Jersey", "je", "44", 3, [ "1534", "7509", "7700", "7797", "7829", "7937" ] ], [ "Jordan", "jo", "962" ], [ "Kazakhstan", "kz", "7", 1, [ "33", "7" ] ], [ "Kenya", "ke", "254" ], [ "Kiribati", "ki", "686" ], [ "Kosovo", "xk", "383" ], [ "Kuwait", "kw", "965" ], [ "Kyrgyzstan", "kg", "996" ], [ "Laos", "la", "856" ], [ "Latvia", "lv", "371" ], [ "Lebanon", "lb", "961" ], [ "Lesotho", "ls", "266" ], [ "Liberia", "lr", "231" ], [ "Libya", "ly", "218" ], [ "Liechtenstein", "li", "423" ], [ "Lithuania", "lt", "370" ], [ "Luxembourg", "lu", "352" ], [ "Macau", "mo", "853" ], [ "Madagascar", "mg", "261" ], [ "Malawi", "mw", "265" ], [ "Malaysia", "my", "60" ], [ "Maldives", "mv", "960" ], [ "Mali", "ml", "223" ], [ "Malta", "mt", "356" ], [ "Marshall Islands", "mh", "692" ], [ "Martinique", "mq", "596" ], [ "Mauritania", "mr", "222" ], [ "Mauritius", "mu", "230" ], [ "Mayotte", "yt", "262", 1, [ "269", "639" ] ], [ "Mexico", "mx", "52" ], [ "Micronesia", "fm", "691" ], [ "Moldova", "md", "373" ], [ "Monaco", "mc", "377" ], [ "Mongolia", "mn", "976" ], [ "Montenegro", "me", "382" ], [ "Montserrat", "ms", "1", 16, [ "664" ] ], [ "Morocco", "ma", "212", 0 ], [ "Mozambique", "mz", "258" ], [ "Myanmar (Burma)", "mm", "95" ], [ "Namibia", "na", "264" ], [ "Nauru", "nr", "674" ], [ "Nepal", "np", "977" ], [ "Netherlands", "nl", "31" ], [ "New Caledonia", "nc", "687" ], [ "New Zealand", "nz", "64" ], [ "Nicaragua", "ni", "505" ], [ "Niger", "ne", "227" ], [ "Nigeria", "ng", "234" ], [ "Niue", "nu", "683" ], [ "Norfolk Island", "nf", "672" ], [ "North Korea", "kp", "850" ], [ "North Macedonia", "mk", "389" ], [ "Northern Mariana Islands", "mp", "1", 17, [ "670" ] ], [ "Norway", "no", "47", 0 ], [ "Oman", "om", "968" ], [ "Pakistan", "pk", "92" ], [ "Palau", "pw", "680" ], [ "Palestine", "ps", "970" ], [ "Panama", "pa", "507" ], [ "Papua New Guinea", "pg", "675" ], [ "Paraguay", "py", "595" ], [ "Peru", "pe", "51" ], [ "Philippines", "ph", "63" ], [ "Poland", "pl", "48" ], [ "Portugal", "pt", "351" ], [ "Puerto Rico", "pr", "1", 3, [ "787", "939" ] ], [ "Qatar", "qa", "974" ], [ "Réunion", "re", "262", 0 ], [ "Romania", "ro", "40" ], [ "Russia", "ru", "7", 0 ], [ "Rwanda", "rw", "250" ], [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ], [ "São Tomé & Príncipe", "st", "239" ], [ "Saudi Arabia", "sa", "966" ], [ "Senegal", "sn", "221" ], [ "Serbia", "rs", "381" ], [ "Seychelles", "sc", "248" ], [ "Sierra Leone", "sl", "232" ], [ "Singapore", "sg", "65" ], [ "Sint Maarten", "sx", "1", 21, [ "721" ] ], [ "Slovakia", "sk", "421" ], [ "Slovenia", "si", "386" ], [ "Solomon Islands", "sb", "677" ], [ "Somalia", "so", "252" ], [ "South Africa", "za", "27" ], [ "South Korea", "kr", "82" ], [ "South Sudan", "ss", "211" ], [ "Spain", "es", "34" ], [ "Sri Lanka", "lk", "94" ], [ "St Barthélemy", "bl", "590", 1 ], [ "St Helena", "sh", "290" ], [ "St Kitts & Nevis", "kn", "1", 18, [ "869" ] ], [ "St Lucia", "lc", "1", 19, [ "758" ] ], [ "St Martin", "mf", "590", 2 ], [ "St Pierre & Miquelon", "pm", "508" ], [ "St Vincent & Grenadines", "vc", "1", 20, [ "784" ] ], [ "Sudan", "sd", "249" ], [ "Suriname", "sr", "597" ], [ "Svalbard & Jan Mayen", "sj", "47", 1, [ "79" ] ], [ "Sweden", "se", "46" ], [ "Switzerland", "ch", "41" ], [ "Syria", "sy", "963" ], [ "Taiwan", "tw", "886" ], [ "Tajikistan", "tj", "992" ], [ "Tanzania", "tz", "255" ], [ "Thailand", "th", "66" ], [ "Timor-Leste", "tl", "670" ], [ "Togo", "tg", "228" ], [ "Tokelau", "tk", "690" ], [ "Tonga", "to", "676" ], [ "Trinidad & Tobago", "tt", "1", 22, [ "868" ] ], [ "Tunisia", "tn", "216" ], [ "Turkey", "tr", "90" ], [ "Turkmenistan", "tm", "993" ], [ "Turks & Caicos Islands", "tc", "1", 23, [ "649" ] ], [ "Tuvalu", "tv", "688" ], [ "Uganda", "ug", "256" ], [ "Ukraine", "ua", "380" ], [ "United Arab Emirates", "ae", "971" ], [ "United Kingdom", "gb", "44", 0 ], [ "United States", "us", "1", 0 ], [ "Uruguay", "uy", "598" ], [ "US Virgin Islands", "vi", "1", 24, [ "340" ] ], [ "Uzbekistan", "uz", "998" ], [ "Vanuatu", "vu", "678" ], [ "Vatican City", "va", "39", 1, [ "06698" ] ], [ "Venezuela", "ve", "58" ], [ "Vietnam", "vn", "84" ], [ "Wallis & Futuna", "wf", "681" ], [ "Western Sahara", "eh", "212", 1, [ "5288", "5289" ] ], [ "Yemen", "ye", "967" ], [ "Zambia", "zm", "260" ], [ "Zimbabwe", "zw", "263" ], [ "Åland Islands", "ax", "358", 1, [ "18" ] ] ];
        // loop over all of the countries above, restructuring the data to be objects with named keys
        for (var i = 0; i < allCountries.length; i++) {
            var c = allCountries[i];
            allCountries[i] = {
                name: c[0],
                iso2: c[1],
                dialCode: c[2],
                priority: c[3] || 0,
                areaCodes: c[4] || null,
                nodeById: {}
            };
        }
        "use strict";
        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                })), keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
                    _defineProperty(target, key, source[key]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
            return target;
        }
        function _defineProperty(obj, key, value) {
            key = _toPropertyKey(key);
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
            return arr2;
        }
        function _iterableToArrayLimit(arr, i) {
            var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
            if (null != _i) {
                var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
                try {
                    if (_x = (_i = _i.call(arr)).next, 0 === i) {
                        if (Object(_i) !== _i) return;
                        _n = !1;
                    } else for (;!(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) ;
                } catch (err) {
                    _d = !0, _e = err;
                } finally {
                    try {
                        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
        }
        function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function _toPropertyKey(arg) {
            var key = _toPrimitive(arg, "string");
            return typeof key === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
            if (typeof input !== "object" || input === null) return input;
            var prim = input[Symbol.toPrimitive];
            if (prim !== undefined) {
                var res = prim.call(input, hint || "default");
                if (typeof res !== "object") return res;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (hint === "string" ? String : Number)(input);
        }
        var intlIdInputGlobals = {
            getInstance: function getInstance(input) {
                var id = input.getAttribute("data-intl-id-input-id");
                return window.intlIdInputGlobals.instances[id];
            },
            instances: {},
            // using a global like this allows us to mock it in the tests
            documentReady: function documentReady() {
                return document.readyState === "complete";
            }
        };
        if (typeof window === "object") {
            window.intlIdInputGlobals = intlIdInputGlobals;
        }
        // these vars persist through all instances of the plugin
        var id = 0;
        var defaults = {
            // whether or not to allow the dropdown
            allowDropdown: true,
            // add a country search input at the top of the dropdown
            countrySearch: true,
            // Inject a hidden input with the name returned from this function, and on submit, populate it with the result of iso2.
            hiddenInput: null,
            // initial country
            initialCountry: "",
            // display only these countries
            onlyCountries: [],
            // bypass validation for these countries
            bypassValidationForCountries: [],
            // use full screen popup instead of dropdown for country list
            useFullscreenPopup: typeof navigator !== "undefined" && typeof window !== "undefined" ? // we cannot just test screen size as some smartphones/website meta tags will report desktop
            // resolutions
            // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
            /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 500 : false
        };
        // run a method on each instance of the plugin
        var forEachInstance = function forEachInstance(method) {
            var instances = window.intlIdInputGlobals.instances;
            Object.values(instances).forEach(function(instance) {
                return instance[method]();
            });
        };
        // this is our plugin class that we will create an instance of
        // eslint-disable-next-line no-unused-vars
        var Iii = /*#__PURE__*/ function() {
            function Iii(input) {
                var customOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                _classCallCheck(this, Iii);
                this.id = id++;
                this.idInput = input;
                this.activeItem = null;
                this.highlightedItem = null;
                // process specified options / defaults
                this.options = Object.assign({}, defaults, customOptions);
                this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
            }
            _createClass(Iii, [ {
                key: "_init",
                value: function _init() {
                    var _this = this;
                    // if showing fullscreen popup, do not fix the width
                    if (this.options.useFullscreenPopup) {
                        this.options.fixDropdownWidth = false;
                    }
                    // when search enabled, we must fix the width else it would change with different results
                    if (this.options.countrySearch && !this.options.useFullscreenPopup) {
                        this.options.fixDropdownWidth = true;
                    }
                    // check if input has one parent with RTL
                    this.isRTL = !!this.idInput.closest("[dir=rtl]");
                    // these promises get resolved when their individual requests complete
                    // this way the dev can do something like iii.promise.then(...) to know when all requests are
                    // complete
                    var autoCountryPromise = new Promise(function(resolve, reject) {
                        _this.resolveAutoCountryPromise = resolve;
                        _this.rejectAutoCountryPromise = reject;
                    });
                    this.promise = Promise.all([ autoCountryPromise ]);
                    // in various situations there could be no country selected initially, but we need to be able
                    // to assume this variable exists
                    this.selectedCountryData = {};
                    // process all the data: onlyCountries, excludeCountries, bypassValidationForCountries etc
                    this._processCountryData();
                    // generate the markup
                    this._generateMarkup();
                    // set the initial state of the input value and the selected flag
                    this._setInitialState();
                    // start all of the event listeners: input keydown, selectedFlag click
                    this._initListeners();
                }
            }, {
                key: "_processCountryData",
                value: function _processCountryData() {
                    // process onlyCountries or excludeCountries array if present
                    this._processAllCountries();
                    // sort countries by name
                    if (this.options.onlyCountries.length) {
                        this.countries.sort(this._countryNameSort);
                    }
                }
            }, {
                key: "_processAllCountries",
                value: function _processAllCountries() {
                    if (this.options.onlyCountries.length) {
                        var lowerCaseOnlyCountries = this.options.onlyCountries.map(function(country) {
                            return country.toLowerCase();
                        });
                        this.countries = allCountries.filter(function(country) {
                            return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
                        });
                    } else {
                        this.countries = allCountries;
                    }
                }
            }, {
                key: "_countryNameSort",
                value: function _countryNameSort(a, b) {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                }
            }, {
                key: "_createEl",
                value: function _createEl(name, attrs, container) {
                    var el = document.createElement(name);
                    if (attrs) {
                        Object.entries(attrs).forEach(function(_ref) {
                            var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
                            return el.setAttribute(key, value);
                        });
                    }
                    if (container) {
                        container.appendChild(el);
                    }
                    return el;
                }
            }, {
                key: "_generateMarkup",
                value: function _generateMarkup() {
                    this.idInput.classList.add("iii__id-input");
                    // if autocomplete does not exist on the element and its form, then
                    // prevent autocomplete as there's no safe, cross-browser event we can react to, so it can
                    // easily put the plugin in an inconsistent state e.g. the wrong flag selected for the
                    // autocompleted number, which on submit could mean wrong number is saved
                    if (!this.idInput.hasAttribute("autocomplete") && !(this.idInput.form && this.idInput.form.hasAttribute("autocomplete"))) {
                        this.idInput.setAttribute("autocomplete", "off");
                    }
                    var _this$options = this.options, allowDropdown = _this$options.allowDropdown, useFullscreenPopup = _this$options.useFullscreenPopup, countrySearch = _this$options.countrySearch, hiddenInput = _this$options.hiddenInput;
                    // containers (mostly for positioning)
                    var parentClass = "iii";
                    if (allowDropdown) {
                        parentClass += " iii--allow-dropdown";
                    }
                    parentClass += " iii--show-flags";
                    if (!useFullscreenPopup) {
                        parentClass += " iii--inline-dropdown";
                    }
                    var wrapper = this._createEl("div", {
                        "class": parentClass
                    });
                    this.idInput.parentNode.insertBefore(wrapper, this.idInput);
                    this.flagsContainer = this._createEl("div", {
                        "class": "iii__flag-container"
                    }, wrapper);
                    // selected flag (displayed on left of input while allowDropdown is enabled, otherwise to right)
                    // when countrySearch disabled: using Aria tags for "Select-Only Combobox Example"
                    // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
                    this.selectedFlag = this._createEl("div", _objectSpread({
                        "class": "iii__selected-flag"
                    }, allowDropdown && _objectSpread({
                        role: "button",
                        "aria-expanded": "false",
                        "aria-label": "Selected country",
                        "aria-haspopup": countrySearch ? "true" : "listbox",
                        "aria-controls": countrySearch ? "iii-".concat(this.id, "__dropdown-content") : "iii-".concat(this.id, "__country-listbox")
                    }, countrySearch || {
                        role: "combobox"
                    })), this.flagsContainer);
                    // we now include the selected flag element even when showFlags is disabled,
                    // as need to show globe icon for showSelectedDialCode empty state
                    this.selectedFlagInner = this._createEl("div", null, this.selectedFlag);
                    this.selectedFlagA11yText = this._createEl("span", {
                        "class": "iii__a11y-text"
                    }, this.selectedFlagInner);
                    wrapper.appendChild(this.idInput);
                    if (this.selectedFlag && this.idInput.disabled) {
                        this.selectedFlag.setAttribute("aria-disabled", "true");
                    }
                    if (allowDropdown) {
                        if (!this.idInput.disabled) {
                            // make element focusable and tab navigable
                            this.selectedFlag.setAttribute("tabindex", "0");
                        }
                        this.dropdownArrow = this._createEl("div", {
                            "class": "iii__arrow",
                            "aria-hidden": "true"
                        }, this.selectedFlag);
                        var extraClasses = "iii--flexible-dropdown-width";
                        this.dropdownContent = this._createEl("div", {
                            id: "iii-".concat(this.id, "__dropdown-content"),
                            "class": "iii__dropdown-content iii__hide ".concat(extraClasses)
                        });
                        if (countrySearch) {
                            this.searchInput = this._createEl("input", {
                                type: "text",
                                "class": "iii__search-input",
                                placeholder: "Search",
                                role: "combobox",
                                "aria-expanded": "true",
                                "aria-label": "Search",
                                "aria-controls": "iii-".concat(this.id, "__country-listbox"),
                                "aria-autocomplete": "list",
                                autocomplete: "off"
                            }, this.dropdownContent);
                            this.searchResultsA11yText = this._createEl("span", {
                                "class": "iii__a11y-text"
                            }, this.dropdownContent);
                        }
                        // country list: preferred countries, then divider, then all countries
                        this.countryList = this._createEl("ul", {
                            "class": "iii__country-list",
                            id: "iii-".concat(this.id, "__country-listbox"),
                            role: "listbox",
                            "aria-label": "List of countries"
                        }, this.dropdownContent);
                        this._appendListItems(this.countries, "iii__standard");
                        if (countrySearch) {
                            this._updateSearchResultsText();
                        }
                        this.flagsContainer.appendChild(this.dropdownContent);
                    }
                    if (hiddenInput) {
                        const idInputName = this.idInput.getAttribute("name") || "";
                        const names = hiddenInput(idInputName);
                        if (names.id) {
                          this.hiddenInput = this._createEl("input", {
                            type: "hidden",
                            name: names.id
                          });
                          wrapper.appendChild(this.hiddenInput);
                        }
                        if (names.country) {
                          this.hiddenInputCountry = this._createEl("input", {
                            type: "hidden",
                            name: names.country
                          });
                          wrapper.appendChild(this.hiddenInputCountry);
                        }
                    }
                }
            }, {
                key: "_appendListItems",
                value: function _appendListItems(countries, className, preferred) {
                    for (var i = 0; i < countries.length; i++) {
                        var c = countries[i];
                        var idSuffix = preferred ? "-preferred" : "";
                        var listItem = this._createEl("li", {
                            id: "iii-".concat(this.id, "__item-").concat(c.iso2).concat(idSuffix),
                            "class": "iii__country ".concat(className),
                            tabindex: "-1",
                            role: "option",
                            "data-country-code": c.iso2,
                            "aria-selected": "false"
                        }, this.countryList);
                        // store this for later use e.g. country search filtering
                        c.nodeById[this.id] = listItem;
                        var content = "";
                        // add the flag
                        content += "<div class='iii__flag-box'><div class='iii__flag iii__".concat(c.iso2, "'></div></div>");
                        // and the country name
                        content += "<span class='iii__country-name'>".concat(c.name, "</span>");
                        listItem.insertAdjacentHTML("beforeend", content);
                    }
                }
            }, {
                key: "_setInitialState",
                value: function _setInitialState() {
                    var overrideAutoCountry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    // fix firefox bug: when first load page (with input with value set to number with intl dial
                    // code) and initialising plugin removes the dial code from the input, then refresh page,
                    // and we try to init plugin again but this time on number without dial code so get grey flag
                    var attributeValue = this.idInput.getAttribute("value");
                    var inputValue = this.idInput.value;
                    var useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
                    var val = useAttribute ? attributeValue : inputValue;
                    var initialCountry = this.options.initialCountry;
                    // if we already have a dial code, and it's not a regionlessNanp, we can go ahead and set the
                    // flag, else fall back to the default country
                    if (initialCountry !== "auto" || overrideAutoCountry) {
                        var lowerInitialCountry = initialCountry ? initialCountry.toLowerCase() : "";
                        var isValidInitialCountry = lowerInitialCountry && this._getCountryData(lowerInitialCountry, true);
                        // see if we should select a flag
                        if (isValidInitialCountry) {
                            this._setCountry(lowerInitialCountry);
                        } else {
                            // display the empty state (globe icon)
                            this._setCountry();
                        }
                    }
                    // NOTE: if initialCountry is set to auto, that will be handled separately
                }
            }, {
                key: "_initListeners",
                value: function _initListeners() {
                    if (this.options.allowDropdown) {
                        this._initDropdownListeners();
                    }
                    if ((this.hiddenInput || this.hiddenInputCountry) && this.idInput.form) {
                        this._initHiddenInputListener();
                    }
                }
            }, {
                key: "_initHiddenInputListener",
                value: function _initHiddenInputListener() {
                    this._handleHiddenInputSubmit = () => {
                        if (this.hiddenInput) {
                          this.hiddenInput.value = this.selectedCountryData.iso2;
                        }
                        if (this.hiddenInputCountry) {
                          this.hiddenInputCountry.value = this.selectedCountryData.iso2 || "";
                        }
                        debugger;
                    };
                    this.idInput.form?.addEventListener(
                        "submit",
                        this._handleHiddenInputSubmit
                    );
                }
            }, {
                key: "_initDropdownListeners",
                value: function _initDropdownListeners() {
                    var _this3 = this;
                    // hack for input nested inside label (which is valid markup): clicking the selected-flag to
                    // open the dropdown would then automatically trigger a 2nd click on the input which would
                    // close it again
                    this._handleLabelClick = function(e) {
                        // if the dropdown is closed, then focus the input, else ignore the click
                        if (_this3.dropdownContent.classList.contains("iii__hide")) {
                            _this3.idInput.focus();
                        } else {
                            e.preventDefault();
                        }
                    };
                    var label = this.idInput.closest("label");
                    if (label) {
                        label.addEventListener("click", this._handleLabelClick);
                    }
                    // toggle country dropdown on click
                    this._handleClickSelectedFlag = function() {
                        // only intercept this event if we're opening the dropdown
                        // else let it bubble up to the top ("click-off-to-close" listener)
                        // we cannot just stopPropagation as it may be needed to close another instance
                        if (_this3.dropdownContent.classList.contains("iii__hide") && !_this3.idInput.disabled && !_this3.idInput.readOnly) {
                            _this3._openDropdown();
                        }
                    };
                    this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag);
                    // open dropdown if selected flag is focused and they press up/down/space/enter
                    this._handleFlagsContainerKeydown = function(e) {
                        var isDropdownHidden = _this3.dropdownContent.classList.contains("iii__hide");
                        if (isDropdownHidden && [ "ArrowUp", "ArrowDown", " ", "Enter" ].includes(e.key)) {
                            // prevent form from being submitted if "ENTER" was pressed
                            e.preventDefault();
                            // prevent event from being handled again by document
                            e.stopPropagation();
                            _this3._openDropdown();
                        }
                        // allow navigation from dropdown to input on TAB
                        if (e.key === "Tab") {
                            _this3._closeDropdown();
                        }
                    };
                    this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
                }
            }, {
                key: "_translateCursorPosition",
                value: function _translateCursorPosition(relevantChars, formattedValue, prevCaretPos, isDeleteForwards) {
                    // if the first char is a formatting char, and they backspace delete it:
                    // cursor should stay at the start (pos 0), rather than stick to the first digit (pos 1)
                    if (prevCaretPos === 0 && !isDeleteForwards) {
                        return 0;
                    }
                    var count = 0;
                    for (var i = 0; i < formattedValue.length; i++) {
                        if (/[+0-9]/.test(formattedValue[i])) {
                            count++;
                        }
                        // normal case: stop when you hit the right number of relevant chars
                        // (cursor will be just after the final relevant char)
                        if (count === relevantChars && !isDeleteForwards) {
                            return i + 1;
                        }
                        // spacial case: delete forwards (fn + delete on a mac):
                        // wait until hit one extra relevant char, and put the cursor just before it (after any formatting chars)
                        if (isDeleteForwards && count === relevantChars + 1) {
                            return i;
                        }
                    }
                    return formattedValue.length;
                }
            }, {
                key: "_cap",
                value: function _cap(number) {
                    var max = this.idInput.getAttribute("maxlength");
                    return max && number.length > max ? number.substr(0, max) : number;
                }
            }, {
                key: "_trigger",
                value: function _trigger(name) {
                    var e = new Event(name, {
                        bubbles: true,
                        cancelable: true
                    });
                    this.idInput.dispatchEvent(e);
                }
            }, {
                key: "_openDropdown",
                value: function _openDropdown() {
                    var _this$options2 = this.options, countrySearch = _this$options2.countrySearch;
                    this.dropdownContent.classList.remove("iii__hide");
                    this.selectedFlag.setAttribute("aria-expanded", "true");
                    this._setDropdownPosition();
                    // if we have previously selected a country (and countrySearch is disabled), then highlight that item and scroll to it
                    // else highlight the first item and scroll to top (even if countrySearch is disabled e.g. on init, showing globe icon)
                    if (this.activeItem && !countrySearch) {
                        // update highlighting and scroll to active list item
                        this._highlightListItem(this.activeItem, false);
                        this._scrollTo(this.activeItem, true);
                    } else {
                        // start by highlighting the first item in the list
                        var firstElementChild = this.countryList.firstElementChild;
                        if (firstElementChild) {
                            this._highlightListItem(firstElementChild, false);
                            this.countryList.scrollTop = 0;
                        }
                        if (countrySearch) {
                            this.searchInput.focus();
                        }
                    }
                    // bind all the dropdown-related listeners: mouseover, click, click-off, keydown
                    this._bindDropdownListeners();
                    // update the arrow
                    this.dropdownArrow.classList.add("iii__arrow--up");
                    this._trigger("open:countrydropdown");
                }
            }, {
                key: "_toggleClass",
                value: function _toggleClass(el, className, shouldHaveClass) {
                    if (shouldHaveClass && !el.classList.contains(className)) {
                        el.classList.add(className);
                    } else if (!shouldHaveClass && el.classList.contains(className)) {
                        el.classList.remove(className);
                    }
                }
            }, {
                key: "_setDropdownPosition",
                value: function _setDropdownPosition() {
                    var _this7 = this;
                    if (!this.options.useFullscreenPopup) {
                        var pos = this.idInput.getBoundingClientRect();
                        // windowTop from https://stackoverflow.com/a/14384091/217866
                        var windowTop = document.documentElement.scrollTop;
                        var inputTop = pos.top + windowTop;
                        var dropdownHeight = this.dropdownContent.offsetHeight;
                        // dropdownFitsBelow = (dropdownBottom < windowBottom)
                        var dropdownFitsBelow = inputTop + this.idInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
                        var dropdownFitsAbove = inputTop - dropdownHeight > windowTop;
                        // dont allow positioning above when country search enabled as the search box jumps around as you filter countries
                        var positionDropdownAboveInput = !this.options.countrySearch && !dropdownFitsBelow && dropdownFitsAbove;
                        // by default, the dropdown will be below the input. If we want to position it above the
                        // input, we add the dropup class.
                        this._toggleClass(this.dropdownContent, "iii__dropdown-content--dropup", positionDropdownAboveInput);
                    }
                }
            }, {
                key: "_bindDropdownListeners",
                value: function _bindDropdownListeners() {
                    var _this8 = this;
                    // when mouse over a list item, just highlight that one
                    // we add the class "highlight", so if they hit "enter" we know which one to select
                    this._handleMouseoverCountryList = function(e) {
                        // handle event delegation, as we're listening for this event on the countryList
                        var listItem = e.target.closest(".iii__country");
                        if (listItem) {
                            _this8._highlightListItem(listItem, false);
                        }
                    };
                    this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                    // listen for country selection
                    this._handleClickCountryList = function(e) {
                        var listItem = e.target.closest(".iii__country");
                        if (listItem) {
                            _this8._selectListItem(listItem);
                        }
                    };
                    this.countryList.addEventListener("click", this._handleClickCountryList);
                    // click off to close
                    // (except when this initial opening click is bubbling up)
                    // we cannot just stopPropagation as it may be needed to close another instance
                    var isOpening = true;
                    this._handleClickOffToClose = function() {
                        if (!isOpening) {
                            _this8._closeDropdown();
                        }
                        isOpening = false;
                    };
                    document.documentElement.addEventListener("click", this._handleClickOffToClose);
                    // listen for up/down scrolling, enter to select, or escape to close
                    // use keydown as keypress doesn't fire for non-char keys and we want to catch if they
                    // just hit down and hold it to scroll down (no keyup event).
                    // listen on the document because that's where key events are triggered if no input has focus
                    var query = "";
                    var queryTimer = null;
                    this._handleKeydownOnDropdown = function(e) {
                        // prevent down key from scrolling the whole page,
                        // and enter key from submitting a form etc
                        if ([ "ArrowUp", "ArrowDown", "Enter", "Escape" ].includes(e.key)) {
                            e.preventDefault();
                            e.stopPropagation();
                            // up and down to navigate
                            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                                _this8._handleUpDownKey(e.key);
                            } else if (e.key === "Enter") {
                                _this8._handleEnterKey();
                            } else if (e.key === "Escape") {
                                _this8._closeDropdown();
                            }
                        }
                        // alpha chars to perform search
                        // regex allows one latin alpha char or space, based on https://stackoverflow.com/a/26900132/217866)
                        if (!_this8.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
                            e.stopPropagation();
                            // jump to countries that start with the query string
                            if (queryTimer) {
                                clearTimeout(queryTimer);
                            }
                            query += e.key.toLowerCase();
                            _this8._searchForCountry(query);
                            // if the timer hits 1 second, reset the query
                            queryTimer = setTimeout(function() {
                                query = "";
                            }, 1e3);
                        }
                    };
                    document.addEventListener("keydown", this._handleKeydownOnDropdown);
                    if (this.options.countrySearch) {
                        var doFilter = function doFilter() {
                            var inputQuery = _this8.searchInput.value.trim();
                            if (inputQuery) {
                                _this8._filterCountries(inputQuery);
                            } else {
                                _this8._filterCountries("", true);
                            }
                        };
                        var keyupTimer = null;
                        this._handleSearchChange = function() {
                            // filtering country nodes is expensive (lots of DOM manipulation), so rate limit it
                            if (keyupTimer) {
                                clearTimeout(keyupTimer);
                            }
                            keyupTimer = setTimeout(function() {
                                doFilter();
                                keyupTimer = null;
                            }, 100);
                        };
                        this.searchInput.addEventListener("input", this._handleSearchChange);
                        // stop propagation on search input click, so doesn't trigger click-off-to-close listener
                        this.searchInput.addEventListener("click", function(e) {
                            return e.stopPropagation();
                        });
                    }
                }
            }, {
                key: "_normaliseString",
                value: function _normaliseString() {
                    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                }
            }, {
                key: "_filterCountries",
                value: function _filterCountries(query) {
                    var isReset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    var isFirst = true;
                    this.countryList.innerHTML = "";
                    var normalisedQuery = this._normaliseString(query);
                    for (var i = 0; i < this.countries.length; i++) {
                        var c = this.countries[i];
                        var normalisedCountryName = this._normaliseString(c.name);
                        if (isReset || normalisedCountryName.includes(normalisedQuery) || c.iso2.includes(normalisedQuery)) {
                            this.countryList.appendChild(c.nodeById[this.id]);
                            // highlight the first item
                            if (isFirst) {
                                this._highlightListItem(c.nodeById[this.id], false);
                                isFirst = false;
                            }
                        }
                    }
                    // scroll to top (useful if user had previously scrolled down)
                    this.countryList.scrollTop = 0;
                    this._updateSearchResultsText();
                }
            }, {
                key: "_updateSearchResultsText",
                value: function _updateSearchResultsText() {
                    var count = this.countryList.childElementCount;
                    var searchText;
                    if (count === 0) {
                        searchText = "No results found";
                    } else {
                        // eslint-disable-next-line no-template-curly-in-string
                        searchText = "".concat(count, " results found");
                    }
                    this.searchResultsA11yText.textContent = searchText;
                }
            }, {
                key: "_handleUpDownKey",
                value: function _handleUpDownKey(key) {
                    var next = key === "ArrowUp" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                    if (next) {
                        // skip the divider
                        if (next.classList.contains("iii__divider")) {
                            next = key === "ArrowUp" ? next.previousElementSibling : next.nextElementSibling;
                        }
                    } else if (this.countryList.childElementCount > 1) {
                        // otherwise, we must be at the end, so loop round again
                        next = key === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild;
                    }
                    if (next) {
                        // make sure the next item is visible
                        // (before calling focus(), which can cause the next item to scroll to the middle of the dropdown, which is jarring)
                        this._scrollTo(next, false);
                        // if country search enabled, dont lose focus from the search input on up/down
                        var doFocus = !this.options.countrySearch;
                        this._highlightListItem(next, doFocus);
                    }
                }
            }, {
                key: "_handleEnterKey",
                value: function _handleEnterKey() {
                    if (this.highlightedItem) {
                        this._selectListItem(this.highlightedItem);
                    }
                }
            }, {
                key: "_searchForCountry",
                value: function _searchForCountry(query) {
                    for (var i = 0; i < this.countries.length; i++) {
                        if (this._startsWith(this.countries[i].name, query)) {
                            var listItem = this.countries[i].nodeById[this.id];
                            // update highlighting and scroll
                            this._highlightListItem(listItem, false);
                            this._scrollTo(listItem, true);
                            break;
                        }
                    }
                }
            }, {
                key: "_updateValFromNumber",
                value: function _updateValFromNumber(number) {
                    this.idInput.value = number;
                }
            }, {
                key: "_startsWith",
                value: function _startsWith(a, b) {
                    return a.substr(0, b.length).toLowerCase() === b;
                }
            }, {
                key: "_highlightListItem",
                value: function _highlightListItem(listItem, shouldFocus) {
                    var prevItem = this.highlightedItem;
                    if (prevItem) {
                        prevItem.classList.remove("iii__highlight");
                        prevItem.setAttribute("aria-selected", "false");
                    }
                    this.highlightedItem = listItem;
                    this.highlightedItem.classList.add("iii__highlight");
                    this.highlightedItem.setAttribute("aria-selected", "true");
                    this.selectedFlag.setAttribute("aria-activedescendant", listItem.getAttribute("id"));
                    if (this.options.countrySearch) {
                        this.searchInput.setAttribute("aria-activedescendant", listItem.getAttribute("id"));
                    }
                    if (shouldFocus) {
                        this.highlightedItem.focus();
                    }
                }
            }, {
                key: "_getCountryData",
                value: function _getCountryData(iso2, allowFail) {
                    for (var i = 0; i < this.countries.length; i++) {
                        if (this.countries[i].iso2 === iso2) {
                            return this.countries[i];
                        }
                    }
                    if (allowFail) {
                        return null;
                    }
                    throw new Error("No country data for '".concat(iso2, "'"));
                }
            }, {
                key: "_setCountry",
                value: function _setCountry(iso2) {
                    var _this$options3 = this.options, allowDropdown = _this$options3.allowDropdown, countrySearch = _this$options3.countrySearch;
                    var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                    // do this first as it will throw an error and stop if iso2 is invalid
                    this.selectedCountryData = iso2 ? this._getCountryData(iso2, false) : {};
                    // update the defaultCountry - we only need the iso2 from now on, so just store that
                    if (this.selectedCountryData.iso2) {
                        this.defaultCountry = this.selectedCountryData.iso2;
                    }
                    // update the flag class and the a11y text
                    if (this.selectedFlagInner) {
                        var flagClass = "";
                        var a11yText = "";
                        if (iso2) {
                            flagClass = "iii__flag iii__".concat(iso2);
                            a11yText = this.selectedCountryData.name;
                        } else {
                            flagClass = "iii__flag iii__globe";
                            a11yText = "No country selected";
                        }
                        this.selectedFlagInner.className = flagClass;
                        this.selectedFlagA11yText.textContent = a11yText;
                    }
                    this._setSelectedCountryFlagTitleAttribute(iso2);
                    // update the active list item (only if country search disabled, as country search doesn't store the active item)
                    if (allowDropdown && !countrySearch) {
                        var prevItem = this.activeItem;
                        if (prevItem) {
                            prevItem.classList.remove("iii__active");
                            prevItem.setAttribute("aria-selected", "false");
                        }
                        if (iso2) {
                            // check if there is a preferred item first, else fall back to standard
                            var nextItem = this.countryList.querySelector("#iii-".concat(this.id, "__item-").concat(iso2, "-preferred")) || this.countryList.querySelector("#iii-".concat(this.id, "__item-").concat(iso2));
                            nextItem.setAttribute("aria-selected", "true");
                            nextItem.classList.add("iii__active");
                            this.activeItem = nextItem;
                        }
                    }
                    // return if the flag has changed or not
                    return prevCountry.iso2 !== iso2;
                }
            }, {
                key: "_setSelectedCountryFlagTitleAttribute",
                value: function _setSelectedCountryFlagTitleAttribute(iso2) {
                    if (!this.selectedFlag) {
                        return;
                    }
                    var title;
                    if (iso2) {
                        // For screen reader output, we don't want to include the dial code in the reader output twice
                        // so just use the selected country name here:
                        title = this.selectedCountryData.name;
                    } else {
                        title = "Unknown";
                    }
                    this.selectedFlag.setAttribute("title", title);
                }
            }, {
                key: "_selectListItem",
                value: function _selectListItem(listItem) {
                    // update selected flag and active list item
                    var flagChanged = this._setCountry(listItem.getAttribute("data-country-code"));
                    this._closeDropdown();
                    // focus the input
                    this.idInput.focus();
                    if (flagChanged) {
                        this._triggerCountryChange();
                    }
                }
            }, {
                key: "_closeDropdown",
                value: function _closeDropdown() {
                    this.dropdownContent.classList.add("iii__hide");
                    this.selectedFlag.setAttribute("aria-expanded", "false");
                    this.selectedFlag.removeAttribute("aria-activedescendant");
                    if (this.highlightedItem) {
                        this.highlightedItem.setAttribute("aria-selected", "false");
                    }
                    if (this.options.countrySearch) {
                        this.searchInput.removeAttribute("aria-activedescendant");
                    }
                    // update the arrow
                    this.dropdownArrow.classList.remove("iii__arrow--up");
                    // unbind key events
                    document.removeEventListener("keydown", this._handleKeydownOnDropdown);
                    if (this.options.countrySearch) {
                        this.searchInput.removeEventListener("input", this._handleSearchChange);
                    }
                    document.documentElement.removeEventListener("click", this._handleClickOffToClose);
                    this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
                    this.countryList.removeEventListener("click", this._handleClickCountryList);
                    // remove menu from container
                    if (this.options.dropdownContainer) {
                        if (!this.options.useFullscreenPopup) {
                            window.removeEventListener("scroll", this._handleWindowScroll);
                        }
                        if (this.dropdown.parentNode) {
                            this.dropdown.parentNode.removeChild(this.dropdown);
                        }
                    }
                    this._trigger("close:countrydropdown");
                }
            }, {
                key: "_scrollTo",
                value: function _scrollTo(element, middle) {
                    var container = this.countryList;
                    // windowTop from https://stackoverflow.com/a/14384091/217866
                    var windowTop = document.documentElement.scrollTop;
                    var containerHeight = container.offsetHeight;
                    var containerTop = container.getBoundingClientRect().top + windowTop;
                    var containerBottom = containerTop + containerHeight;
                    var elementHeight = element.offsetHeight;
                    var elementTop = element.getBoundingClientRect().top + windowTop;
                    var elementBottom = elementTop + elementHeight;
                    var newScrollTop = elementTop - containerTop + container.scrollTop;
                    var middleOffset = containerHeight / 2 - elementHeight / 2;
                    if (elementTop < containerTop) {
                        // scroll up
                        if (middle) {
                            newScrollTop -= middleOffset;
                        }
                        container.scrollTop = newScrollTop;
                    } else if (elementBottom > containerBottom) {
                        // scroll down
                        if (middle) {
                            newScrollTop += middleOffset;
                        }
                        var heightDifference = containerHeight - elementHeight;
                        container.scrollTop = newScrollTop - heightDifference;
                    }
                }
            }, {
                key: "_triggerCountryChange",
                value: function _triggerCountryChange() {
                    this._trigger("countrychange");
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    if (this.options.allowDropdown) {
                        // make sure the dropdown is closed (and unbind listeners)
                        this._closeDropdown();
                        this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
                        this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                        // label click hack
                        var label = this.idInput.closest("label");
                        if (label) {
                            label.removeEventListener("click", this._handleLabelClick);
                        }
                    }
                    if (this._handleHiddenInputSubmit && this.idInput) {
                        this.idInput.removeEventListener("submit", this._handleHiddenInputSubmit);
                    }
                    // unbind key events, and cut/paste events
                    this.idInput.removeEventListener("input", this._handleKeyEvent);
                    // remove attribute of id instance: data-intl-id-input-id
                    this.idInput.removeAttribute("data-intl-id-input-id");
                    // remove markup (but leave the original input)
                    var wrapper = this.idInput.parentNode;
                    wrapper.parentNode.insertBefore(this.idInput, wrapper);
                    wrapper.parentNode.removeChild(wrapper);
                    delete window.intlIdInputGlobals.instances[this.id];
                }
            }, {
                key: "getNumber",
                value: function getNumber() {
                    return this.idInput.value;
                }
            }, {
                key: "getSelectedCountryData",
                value: function getSelectedCountryData() {
                    return this.selectedCountryData;
                }
            }, {
                key: "isValid",
                value: function isValid() {
                    if(this.options.bypassValidationForCountries.length && this.options.bypassValidationForCountries.includes(this.selectedCountryData.iso2.toUpperCase())){
                        return true;
                    }

                    return validate(this.idInput.value, this.selectedCountryData.iso2)
                }
            }, {
                key: "setCountry",
                value: function setCountry(iso2) {
                    var iso2Lower = iso2.toLowerCase();
                    // check if already selected
                    if (this.selectedCountryData.iso2 !== iso2Lower) {
                        this._setCountry(iso2Lower);
                        this._updateDialCode(this.selectedCountryData.dialCode);
                        this._triggerCountryChange();
                    }
                }
            }, {
                key: "setNumber",
                value: function setNumber(number) {
                    this._updateValFromNumber(number);
                }
            } ]);
            return Iii;
        }();
        /********************
        *  STATIC METHODS
        ********************/
        // get the country data object
        intlIdInputGlobals.getCountryData = function() {
            return allCountries;
        };
        // default options
        intlIdInputGlobals.defaults = defaults;

        // convenience wrapper
        return function(input, options) {
            var iii = new Iii(input, options);
            iii._init();
            input.setAttribute("data-intl-id-input-id", iii.id);
            window.intlIdInputGlobals.instances[iii.id] = iii;
            return iii;
        };
    }();
});
//Validation section
function validate(val, iso2){
    try{
        const ruleset = validationRuleset[iso2];
    
        if (!ruleset) {
            throw new Error(`Ruleset not found for ISO2: ${iso2}`);
        }

        if(ruleset.numeric){
            if(isNaN(parseFloat(val)) || !isFinite(val)){
                return false;
            }
        }
    
        if(ruleset.minLength){
            const length = val.length;
            if(length < ruleset.minLength || length > ruleset.minLength + ruleset.lengthDelta){
                return false;
            }
        }
    
        if(ruleset.dateFormat){
            if(!dateValidation(val.substr(ruleset.dateIndex, ruleset.dateLength), ruleset.dateFormat)){
                return false;
            }
        }
    
        if(ruleset.specialValidation){
            if(!specialValidation(val, ruleset.specialValidation)){
                return false;
            }
        }
    }
    catch(error){
        console.error(error.message);
        return false;
    }

    return true;
}
function dateValidation(val, format, dob = null){
    switch(format){
        case 'yyMMdd':
            const year20 = parseInt(val.substr(0, 2)) + 1900; //20th century year
            const year21 = year20 + 100; //21st century year
            const month = parseInt(val.substr(2, 2)) - 1;
            const day = parseInt(val.substr(4, 2));

            const date20 = new Date(year20, month, day);
            const date21 = new Date(year21, month, day);

            if (isNaN(date20.getTime()) && isNaN(date21.getTime())) {
                return false;
            }

            if (date20.getMonth() !== month && date21.getMonth() !== month) {
                return false;
            }
            
            if(dob){
                //check that either date20 or date21 match the specified dob
            }

            return true;
    }
}
function specialValidation(val, specialCase){
    switch (specialCase) {
        case 'SZ_checksum':
        case 'ZA_checksum':
            let oddCheck = 0;
            let evenResultAdd = 0;
    
            for (let i = 0; i < 12; i += 2) {
                oddCheck += parseInt(val[i]);
            }
            
            let evenCheckNum = '';
            for (let i = 1; i < 12; i += 2) {
                evenCheckNum += val[i];
            }
            
            evenCheckNum = parseInt(evenCheckNum) * 2;
            evenCheckNum.toString().split('').forEach(digit => evenResultAdd += parseInt(digit));
            
            let addChecks = oddCheck + evenResultAdd;
            
            let lastDigitCheck = 10 - (addChecks % 10);
            
            if (lastDigitCheck >= 10) {
                lastDigitCheck %= 10;
            }
            
            return lastDigitCheck === parseInt(val[12]);
        default:
            return false;
    }  
}
//Validation rules in the following order:
// iso2 code, numeric, minimum length, difference to maximum length, dateFormat, dateIndex, dateLength, special validation cases
const validationRulesets = [ 
    [ "bw", true, 9, 0, null, null, null, null ], 
    [ "sz", true, 13, 0, "yyMMdd", 0, 6, "SZ_checksum" ], 
    [ "ls", true, 12, 0, null, null, null, null ], 
    [ "na", true, 11, 0, "yyMMdd", 0, 6, null ], 
    [ "za", true, 13, 0, "yyMMdd", 0, 6, "ZA_checksum" ] 
];

const validationRuleset = {};
validationRulesets.forEach(item => {
    const iso2 = item[0];
    const values = {
        numeric: item[1],
        minLength: item[2],
        lengthDelta: item[3],
        dateFormat: item[4],
        dateIndex: item[5],
        dateLength: item[6],
        specialValidation: item[7]
    };
    validationRuleset[iso2] = values;
});
