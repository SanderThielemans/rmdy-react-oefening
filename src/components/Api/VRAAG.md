# API

In dit component verwachten we dat u kan werken met api calls in een react component.

Er zijn 2 files
    - Api.service.ts
    - Api.tsx

## De oefening

In het <b>Api.service.ts</b> bestand exporteren we een functie GetRandomUser, deze functie geeft 5 users terug die we verkrijgen van het endpoint. Meegegeven is de interface van 1 User, dit interface bevat niet alle teruggekregen data van het endpoint maar we gaan uiteindelijk ook enkel maar deze data gebruiken.

=> Vul deze functie aan zodat we het endpoint aanroepen en als return value een Array van Users hebben.

Vervolgens gaan we in het <b>Api.tsx</b> bestand de data aanroepen en tonen in de datalist. Er is ook een UserContainer element voorzien, elke User mag van dit type zijn, en je mag alle data uit het interface laten zien.

EXTRA:
    Op basis van het geslacht van een User wil ik als volgende de kleuren van de omranding van de UserContainer: (Male: Blauw) (Female: Rood)

## Resultaat

Als complete oplossing heb ik dus een lijst met 5 users die mij informatie geven over de volledige naam, het geslacht en een thumbnail, bijkomend is de omkadering van de foto afhankelijk van het geslacht