## Demo av nav frontend for sommerstudenter
Et veldig enkelt oppsett med create-react app for å kunne ta ibruk komponenter fra nav-frontend.

### Sette opp prosjekt
https://github.com/facebook/create-react-app
Lagde prosjekt vha: 
```
create-react-app appname --typescript
```

### Less-støtte
Bruker craco:
```
npm i @craco/craco craco-less
```

legger til craco.config.js:
```
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {plugin: CracoLessPlugin},
    ]
};
```

bytter ut scripts i package.json:
```
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
```

Good to go!

Finn komponenter på https://design.nav.no