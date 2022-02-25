# How?

Install eslint and prettier

Open command pallete > `Preferences: Open Settings (JSON)`

```json
{
  "files.exclude": {
    "**/.git": true, // this is a default value
    "**/.DS_Store": true, // this is a default value
    "**/node_modules": true, // this excludes all folders
    // named "node_modules" from
    // the explore tree
    // alternative version
    "node_modules": true // this excludes the folder
    // only from the root of
    // your workspace
  },
  "editor.rulers": [
      80
  ],
  // "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "editor.formatOnSave": false,
  // Enable per-language
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]":  {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[typescript]":  {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[typescriptreact]":  {
    "editor.formatOnSave":  true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
}
```