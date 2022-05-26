# Toun
A [SUI](https://github.com/jeroenpardon/sui)-inspired start page built in React

### Features
- Localization

### DOTENVS
```
SERVER_PORT = 3010              # Port the express server runs on
CLIENT_PORT = 3009              # Port the react client runs on (DEVELOPMENT ONLY)

LOG_INIT_LANGCREATE = false     # Logs locale create files
LOG_INIT_CONFIG = false         # Logs config creation/key updates
LOG_INIT_CREATE = false         # Logs creation of any other files during initialization
LOG_FILE_TREE = false           # Logs file tree

PASSWORD = "password"           # Admin password, set to anything you want

NODE_ENV = "development"        # Sets node environment (development/public)
```


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