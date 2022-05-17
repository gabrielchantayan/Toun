# Toun
A [SUI](https://github.com/jeroenpardon/sui)-inspired start page built in React

### Features
- Localization


### TODO
- Add version numbers to bookmarks and apps
- Add app categories
- Add search
- Add modals



### API Documentation

#### Apps
`/api/apps/get` Gets apps list

#### Bookmarks
`/api/bookmarks/get` Gets localized bookmarks

#### Config
`/api/config/get` Gets the entire config
`/api/config/get/:key` Gets a key from the config

#### Locales
`/api/locale/get/:locale` Gets a locale file. Enter `default` to get the default locale
`/api/locale/entry/:cat/:subcat` Gets a locale entry. `:subcat` optional

#### Search
`/api/search/get` Gets search options

#### Themes
`/api/themes/names` Gets localized theme names
`/api/themes/get` Gets theme file
`/api/themes/getCSS` Generates then gets theme CSS