# Pitsakuttide Pitsaresto (PkPR)

## Veebilehe struktuur
---
Veebileht koosneb 4st leheküljest:

- Avaleht (index.html) - "Pitsakuttide Pitsa Resto"
- Broneerimise leht koos asukoha infoga (broneering.html) - "Broneerimine"
- Hindade info koos pitsade piltidega (hinnikiri.html) - "Hinnakiri"
- Galerii pitsarestoranist (galerii.html) - "PKPR Galerii"


## Tehniline info
---
Tehniline info all kajastame kuidas oleme rakendanud JS, HTML ja CSSi erinevate veebilehtede loomisel



### HTML
---
Veebileht koosneb 4st HTML failist, mainitud eespool "Veebilehe struktuuri juures".

Iga lehe juures on HTML "snippetid" `<nav-bar>` ja `<foot-bar>` kasutusel navigeerimise eesmärgil.

`<nav-bar>` - asub failis "components/navbar.js"

`<foot-bar>` - asub failis "components/foot.js"

Aga ka lehel `broneering.html` on kasutusel `<booking-system>`, mis on broneerimise süsteemi jaoks.


### Javascript
---
Javascripti faile oleme kasutanud 5:

- `booking.js` hõlmab loogikat aja broneerimiseks broneerimise lehel `broneering.html`. See genereerib juhuslikult vabad broneerimise ajad vaikekuupäeva jaoks ning klõpsates teise kuupäevade jaoks genereerib uued nendele (juba genereeritud kuudele uusi aegu ei genereerita). Broneerimise ajale klõpsamine võimaldab seda "broneerida". Broneerides kuupäeva säilitab süsteem info ning liikudes edasi-tagasi kuude vahel jääb broneeritud kuupäev ka edaspidi broneerituks.

- `navbar.js` on vähem funktsionaalne HTML snippet kui `booking.js`, see-eest hoiab see infot navigeerimisvõimalustest ja kajastab seda lehe ülaosas ja võimaldab klõpsates sellele soovitud aadressile liikuda. Võimaldab liikuda lehe osadesse täpsemalt - `hinnakiri.html` näitel valida _dropdown_ menüü abil konkreetseid pitsasid.

- `foot.js` põhimõttelt nagu `navbar.js`, ent asub lehe allosas ja ei võimalda liikuda konkreetsemalt lehe osadesse.

- `map.js` kasutusel asukoha näitamisel kasutades OpenStreetMapi. Antud failiga seame esialgse kaardi suurendus ja asukoha (Tartu raekoja platsi keskele) ning markeri asukoha meie pitsarestorani asukohale kui ka valime kaardi (tiles), mida kuvame.

- `ordering.js` abil määrame _callback_-id, mis avavad modaalse kuva (_modal_) veebilehe peale, mis avab pitsa tellimise valikud, ning eduka tellimise sooritamisel avavad teise kuva, mis näitavad pileti numbrit ja pitsa saabumise kellaaega antud tellimusele. 

- `gallery.js ` seeläbi saame `galerii.html` lehel vahetada fookuses olevat pilti pildigalerii loetelust

### CSS
---
CSS faile oleme kasutanud 1 + 4 + 5 ehk:
- 1 fail igal lehel kasutusel olevat stiili `master.css` kasutame fondi üheseks määramiseks

- 4 faili iga lehe jaoks
    
    - `index.css` avalehe kujunduse loomiseks
    - `hinnakiri.css` hinnakirja jaoks
    - `galerii.css` galerii jaoks
    - `broneering.css` broneerimise lehe jaoks

- 5 faili erinevate HTML snippeti jaoks

    - `ordering.css` on tellimise stiil, tellimine asub `index.html` lehel
    - `navbar.css` on ülemise navigatsioonirea still, see on kasutusel igal lehel
    - `booking.css` on aja broneerimise stiili, mis kasutatakse lehel `broneering.html`
    - `foot.css` sanraselt `navbar.css`ile
    - `map.css` on vajalik ainult kaardi kuvamise jaoks, see määrab kaardi suuruse vastava _parent_ elemendi sees


### Pildid
---
Pildid on võetud valdavalt pexels.com leheküljelt ja Google otsingu mootorist.

Need asuvad kaustas `images/`.

Nende hulgas on ka favicon




## Lehe spetsiifika e. funktsionaalsus
---
Lehe spetsiifika all selgitame, mis eesmärgiga iga leht on loodud.

### Avaleht
---
Avalehele eesmärk on suunata klienti vastavatele alamlehekülgedele nagu Broneerimine, Hinnastus või Galerii, selleks on seal loetletud erinevad valikud mugavate kastikeste abil, millese on "motiveeriv" sisu kirjutatud ja kiire suunamisega nupp pandud. 

Lisaks on kojutellimise valik lehe all osas väljatoodud. See avab pitsade valiku koos teiste kojutellimise valikutega ja selle täitmisel annab lisainfo tellimuse kohta


### Broneerimine
---
Broneerimise lehel on esimese asjana näidatud asukoht interaktiivse kaardiga.

Liikudes lehe alla on loetletud lahtioleku ajad koos broneeritavate kuupäevade loeteluga. Kuupäeva klõpsamisel annab leht teada edukast broneerimisest ja broneeritud kuupäevast.

### Hinnakiri
---
Hinnakiri loetleb 8 erinevat pitsavalikut koos hindade ja koostisosade kirjeldusega

### Galerii 
---
Galeriis on välja toodud erinevad pildid restoranist ja valikus olevatest pitsadest 
