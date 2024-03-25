# Approfondimento Vue
<br>


## Vue Introduction
###  Cos'è Vue?

Vue è un framework che permette di creare pagine web semplici o complesse, sfruttando principalmente Java Script: <br>
Anche scrivendo nella pagina HTML, si utilizza sintassi di Java Script. 

Due delle sue principali funzionalità sono il suo <strong>Rendering Dichiarativo</strong> e la sua <strong>Reattività</strong>:

-  <strong>Rendering Dichiarativo:</strong>
    - Come già accennato in precedenza, Vue permette di scrivere all'interno dell'HTML utilizzando una sintassi che ci permette di descrivere lo stato dell'elemento HTML all'interno di variabili presenti in Java Script, ad esempio, tramite la funzione "data" presente nel file Java Script, si possono dichiarare infinite proprietà da poi collegare agli elementi presenti in HTML. Ovviamente bisogna conoscere la sintassi corretta. Un'esempio è l'assegnazione di una classe o un id: noi possiamo assegnare un id o una classe come proprietà di una delle chiavi dell'oggetto all'interno della funzione "data" nel nostro foglio JavaScript, poi utilizzando l'attributo v-bind, possiamo assegnare tale id o classi (o entrambi) al nostro elemento all'interno dell'HTML. <br>
    È ovviamente possibile far tutto all'interno dell'HTML utilizzando uno \<script>\</script>. <br>
    Così come è possibile creare una sezione \<style>\</style> nell'HTML dedicata al CSS da usare.

-   <strong>Reattività</strong>
    - La reattività è una diretta conseguenza del Rendering Dichiarativo: per come viene gestito il rapporto tra HTML, CSS e Java Script da Vue, avremo una modifica istantanea della nostra pagina in base ai nostri valori espressi all'interno della nostra sezione Java Script. Questo perchè è Vue stesso a rintracciare eventuali cambiamenti ed applicarli automaticamente al DOM.


<br>
<br>
<br>

###  Single File Component (SFC /.*Vue files) 

Uno degli usi di Vue sono i SFC, ovvero un particolare formato in cui si possono scrivere dei componenti in un unico file, includendo HTML, CSS e Java Script tutti insieme, separati da alcuni tag: 
- Il primo contiene al suo interno le regole CSS:  \<script>\</script>

- Il secondo contiene al suo interno la parte relativa all'HTML: \<template>\</template>

- Infine il terzo contiene al suo interno le regole CSS:  \<style>\</style> 

L'ordine di questi tre tag non è importante. <br> 

Il "problema", con i Single File Component è che non possono essere utilizzati direttamente, ma vanno pre-compilati utilizzando uno speciale compilatore Vue, richiedono quindi un Set Up particolare. Ma dovrebbero esistere anche strumenti in grado di facilitare questa compilazione e successiva implementazione, come Vue CLI o Vite.



<br>
<br>
<br>

###  Vue Application Programming Interface (API)


Esistono due stili per quanto riguarda l'API di Vue: <br>
la <strong>Option</strong> API e la <strong>Composition</strong> API:

-  <strong>Option API:</strong> <br>
    Con questo stile si utilizzano due oggetti:

        • uno viene creato all'interno di una funzione "data()" e contiene tutte le proprietà che verranno poi utilizzate per la creazione della pagina HTML. 

        • Il secondo oggetto chiamato "methods" andrà invece a contenere tutte le funzioni da utilizzare all'interno del nostro progetto.

        • Infine il tutto viene mostrato in sul web utilizzando la funzione mounted o mount a seconda dello stile con cui si sta scrivendo.
    
    Per riferirsi ai vari elementi all'interno dello scope, si utilizza il this, quindi nel caso volessi accedere alla proprietà <strong>"distance"</strong> all'interno dell'oggetto che si trova all'interno della funzione "data()" dovrei scrivere <strong>this.distance</strong>. <br>
     


<br>

-   <strong>Composition API</strong>
    Questo stile viene spesso utilizzato in combinazinoe con i Single File Components. È un modo molto più avanzato rispetto allo stile Option di sfruttare le varie funzionalità di Vue. Dovrebbe permettere una maggiore complessità nella logica che si va a creare, oltre ad un maggiore riutilizzo della logica. Tuttavia per essere utilizzato al meglio, è fondamentale la comprensione di come funziona la logica di Vue.




<br>
<br>
<br>
<br>


## Vue Template Syntax 
###  Cosa fa Vue?
Vue utilizza una sintassi che si basa sull'associare una serie di "regole" alla parte del DOM che viene a crearsi nel browser. La parte HTML viene quindi manipolata dallo stesso Vue nella maniera più efficiente possibile ogniqualvolta noi andiamo a modificare la logica Java Script. Ad esempio è lui a procurarsi gli elementi del DOM ed applicare eventuali modifiche secondo le nostre direttive. 


### Doppi Baffi

Tramite questa sintassi: "{{ nomeProrpietà }}" è possibile effettuare un'interpolazione del testo, dove Vue andrà ad inserire all'interno dell'elemento del DOM il testo che noi avremo salvato come valore di una delle chiavi del nostro "data()". Il dato viene interpretato come testo base e non HTML, quindi dovessimo scrivere elementi html (come un div) non verrebbero riconosciuti. <br>
Per andare ad indicare che il contenuto della proprietà è vero HTML bisogna utilizzare la direttiva v-html.


### Direttive
In Vue le direttive sono sostanzialmente parole scritte dopo "v-" che possiedono attributi speciali ed applicano un comportamento reattivo al DOM. Ce ne sono di diversi tipi, ad oggi abbiamo visto:
-   v-bind: <br>
    Permette di legare attributi (come classe, id), ad un particolare elemento del DOM, si può scrivere sia con sintassi estesa → <b> v-bind:class="className" </b>; sia con sintassi abbreviata → <b> :class="className" </b>. Una funzionalità da segnalare è la possibilità di assegnare più attributi contemporaneamente ad un singolo elemento del DOM, per fa ciò basta assegnare le proprietà ad un oggetto all'interno dell'oggetto all'interno della funzione data(), quindi bindare all'elemento la chiave con cui quest ultimo oggetto è stato chiamato.

-   v-model <br>
    Permette di associare un attributo specifico ad un input all'interno del DOM. Oltre a ciò, una volta assegnato, Vue si occupa di monitorare tale valore e di aggiornarlo ogni volta che viene modificato.

-   v-on <br>
    Permette di assegnare un evento ad un elemento del DOM. Può essere scritto in forma estesa → <b> v-on:click="mina funzione" </b> o abbreviata <b> @clic="miaFunzione" </b>.

Ogni direttiva, fa sempre riferimento alle proprietà o le funzioni che si trovano all'interno del file (o sezione), Java Script, quindi className, nell'esempio relativo al v-bind, dovrebbe essere una delle chiavi presenti nell'oggetto all'interno della funzione "data()"".


### Espressioni

La sintassi di Vue supporta l'utilizzo di espressioni, più o meno complesse all'interno dell'HTML stesso. Questo può precisamente esser fatto o all'interno dei baffi o all'interno del valore dell'attributo di qualsiasi direttiva Vue. <br>

con espressioni si va ad intendere, sia semplici calcoli → {{ randomNumber + 1 }}, sia metodi propri della sintassi base Java Script {{ message.spit('').reverse().join('') }}. Ovviamente bisogna fare attenzione come in Java Script di che il metodo sia supportato da diò che rappresenta la variabile a cui noi lo stiamo assegnando. <br>
Una cosa importante da ricordare è che ogni associazione, può contenere solo una singola espressione. Inoltre non è in grado di accedere ad espressioni che non facciano parte delle espressioni base di Java Script, a meno che non vengano aggiunte ad: <br>
<b>app.config.globalProperties</b>








<br>
<br>
<br>
<br>


##  Considerazioni Personali

A differenza di Bootstrap, che può essere utilizzato insieme al CSS personale credo, almeno per il momento, che Vue vada effettivamente a sostituire la logica Java Script personale: se utilizzo Vue, non ho alcuna necessità di scrivere logica Java Script, all'esterno dello scope Vue. <br>

Detto ciò, per il momento mi trovo abbastanza limitato, ma questo potrebbe essere semplicemente perchè non ho ancora avut modo di approfondire a pieno tutte le sue potenzialità. <br>

Per quanto riguarda i Single File Components, non ho ben chiaro come si faccia a crearli ed integrarli, tuttavia, avendo letto che sono per lo più utilizzati con le Composition API; che a loro volta mi sembrano seguire una logica piuttosto complessa, suppongo abbiano bisogno di una discreta quantità di tempo ad approfondimento. <br>

L'utilizzo dello stile Option, è molto semplice da comprendere ed utilizzare. Almeno per il poco che abbiamo fatto, non sembra richiedere di imparare ulteriore logica rispetto a quella già appresa, ma solo di applicare la giusta sintassi, in modo da ottenere il risultato desiderato. <br>

Infine, considerazione personale, trovo parecchio confuzionario lo scrivere tutto all'interno dello stesso file, nonostante vue lo permetta, ritengo più ordinato (almeno per il mio modo di essere), l'avere comunque un file Java Script, con la logica Vue relativa, un file CSS con lo stile per la pagina e solo la parte HTML all'interno del file HTML.