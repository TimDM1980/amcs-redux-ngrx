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
  * of: `return createStore(combineReducers<ApplicationState>(ROOT_REDUCER));`

* bij het opstarten via ng serve zie ik trouwens ook:
```
WARNING in ./src/app/components/status.component.ts
41:82-87 "export 'Store' was not found in 'redux'
```
* gedispatchte actions passeren in ALLE reducers!
  * we hebben een testje gedaan en een 2e reducer bijgeschreven
  * onze action passeerder ook in deze reducer
  * dwz dat een default path in de switch van een reducer er ALTIJD moet zijn!!!

## Ex 3 Action creators

* Is er een verschil tussen het exporten van een functie of van een const?
Zie vote-actions.ts...

## Ex 4 Middleware

* De uitleg in de slides is niet goed.
Je kan beter kijken naar de [uitleg van redux zelf](http://redux.js.org/docs/advanced/Middleware.html). Hier wordt het duidelijk waarom next zelf ook nog wordt doorgegeven, nl omdat next niet altijd zal verwijzen naar store.dispatch omdat je een chain van middleware aan het opbouwen bent en next is dus de volgende in de chain.

* Dit riekt naar currying en in de uitleg van redux staat er ook een verwijzing. Redux zal dus onze logger functie oproepen met 3 argumenten: store, next en action. Maar ipv gewoon 3 argumenten mee te geven, is het een cascade van functies die elk 1 argument nemen.

* In de logging zie je de ajuinenschil. De loggings van crashreporter zitten genest in die van logger. Da's ook wel een beetje jammer, zou je het ook kunnen chainen zonder te nesten?