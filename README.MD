# cache-manager-dotnet-like

## Aim

The package is giving solution for caching in frontend

## Install

```powershell
npm i cache-manager-dotnet-like
```

## Usage

```JavaScript
import { builder } from "cache-manager-dotnet-like"

  const manager = builder()
    //must be unique for diffrent managers will be identifing keys by that property
    .useNamespace("name")
    //specify storage type to use 
    .useLocalStorage()
    // specify default expiration of caache itema
    .useExpiration((exp) => exp.useSlidingExpiration(5 * 1000).build())
    // how often should cleaning function fire
    .usePeriodicalClean(1000)
    // subscribe to change of any item
    .useSubscribeToChange(console.log)
  .build();
  await manager.emitValuesAsync() // emit initial values found in local storage
  await manager.setItemAsync("blue", {nome:""})
  await manager.setItemAsync("white", {on: {}})
```