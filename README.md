# Toun
A [SUI](https://github.com/jeroenpardon/sui)-inspired start page built in React

### Features
- Localization



### API Documentation

#### Config
`/api/config/get` Gets the entire config
`/api/config/get/:key` Gets a key from the config

#### Locales
`/api/locale/:locale` Gets a locale file. Enter `default` to get the default locale

#### Themes
`/api/themes/names` Gets localized theme names
`/api/themes/get` Gets theme file
`/api/themes/getCSS` Generates then gets theme CSS