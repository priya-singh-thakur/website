module.exports = {
    "extends": "airbnb",
    "env":{
        "browser":true
    },
    "plugins":[
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules" :{
        "comma-dangle": ["off"],
        "no-plusplus": ["off"],
        "no-continue": ["off"],
        "no-await-in-loop": ["off"],
        "no-console":["error",{allow:["warn","error"]}],
        "indent": ["error", 4],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        // Indent JSX with 4 spaces
        "react/jsx-indent": ["error", 4],
        // Indent props with 4 spaces
        "react/jsx-indent-props": ["error", 4],
    }
 };