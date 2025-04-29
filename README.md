# Intl-Id-Input

A JavaScript plugin for entering and validating international ID and passport numbers with country selection.

## Features

- Country selection dropdown with flags
- ID number validation based on country-specific rules
- Supports over 240 countries and territories
- Mobile and desktop-friendly UI
- Accessible design (ARIA-compliant)
- Customizable options

## Installation

### self hosted

```html
<link rel="stylesheet" href="path/to/intlIdInput.css">
<script src="path/to/intlIdInput.js"></script>
```

## Usage

### Basic Usage

```html
<input type="text" id="id-input">

<script>
  var input = document.querySelector("#id-input");
  window.intlIdInput(input);
</script>
```

### With Options

```javascript
var input = document.querySelector("#id-input");
window.intlIdInput(input, {
  initialCountry: "za", // South Africa
  onlyCountries: ["bw", "sz", "ls", "na", "za", "zw"], // Southern African countries
  countrySearch: true,
  useFullscreenPopup: false
});
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `allowDropdown` | boolean | `true` | Whether to allow the dropdown selection of countries |
| `countrySearch` | boolean | `true` | Add a search field to filter countries |
| `hiddenInput` | function | `null` | Function that returns object with field names for hidden inputs to store ISO country code |
| `initialCountry` | string | `""` | Initial country selection (ISO2 code) |
| `onlyCountries` | array | `[]` | List of country codes to appear in the dropdown |
| `bypassValidationForCountries` | array | `[]` | List of country codes to bypass validation |
| `useFullscreenPopup` | boolean | auto | Use fullscreen popup on mobile devices |

## Methods

| Method | Description |
|--------|-------------|
| `getNumber()` | Get the current ID number |
| `getSelectedCountryData()` | Get the currently selected country data |
| `isValid()` | Validate the current ID number against the selected country's rules |
| `setCountry(iso2)` | Set the country selection |
| `setNumber(number)` | Set the ID number |
| `destroy()` | Destroy the instance and remove all event listeners |

## Validation Rules

Currently supports validation for:
- Botswana (`bw`)
- Eswatini (`sz`)
- Lesotho (`ls`)
- Namibia (`na`)
- South Africa (`za`)
- Zimbabwe (`zw`)

## Events

| Event | Description |
|-------|-------------|
| `countrychange` | Triggered when the selected country changes |

## Example with Hidden Inputs

```javascript
var input = document.querySelector("#id-input");
window.intlIdInput(input, {
  hiddenInput: function(inputName) {
    return {
      id: inputName + "_id", 
      country: inputName + "_country"
    };
  }
});
```

## Browser Support

- Chrome, Firefox, Safari, Opera, Microsoft Edge
- IE11+ with appropriate polyfills

## License

[License information]

## Acknowledgements

This project is inspired by the design patterns of international telephone input libraries.
