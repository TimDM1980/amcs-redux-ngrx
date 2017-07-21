# REDUX

## Ex 2 Use the Redux API

* convention?
  * is dat convention dat de state gepushed wordt in het `votes` stukje van de ApplicationState?
  * is dat omdat er een reducer gehit wordt die in de ROOT_REDUCER map met key `votes` steekt?

* generics bij Store
  * als ik de store wat wil typeren, bvb in de constructor van VoterComponent, dan moet ik een `<type>` meegeven.
  * ik denk dat die `<ApplicationState>` moet zijn, en dat blijkt ook te werken.
  * maar in de factory method voor de store werkt dit niet: `Type 'Store<{}>' is not assignable to type 'Store<ApplicationState>'.`
  * oplossing: `return createStore(...) as Store<ApplicationState>;`
  * bij het opstarten via ng serve zie ik trouwens ook:
```
WARNING in ./src/app/components/status.component.ts
41:82-87 "export 'Store' was not found in 'redux'
```

