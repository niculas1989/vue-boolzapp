console.log('JS Ok');
console.log('Vue ok', Vue);

dayjs.extend(dayjs_plugin_customParseFormat);

Vue.config.devtools = true;

const newText = (text, status) => {
    this.contacts[this.currentIndex].messages.push({ text, date: dayjs().format('DD/MM/YYYY HH:mm:ss'), status });
}

/*
MILESTONE DI OGGI //! DAY ONE
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
Consigli e raccomandazioni:
Spendiamo un po' di tempo per quel che riguarda l'analisi del layout prima di buttarci subito sul codice
Cerchiamo di mettere in pratica tutte le best practice imparate a partire dalla centralizzazione.
Se lo ritenete potete utilizzare Bootstrap nella misura che ritenete opportuna
Completiamo la grafica prima di passare alla logica di vue
Note:
All'interno della cartella trovate le immagini che vi servono e la struttura dati necessaria per la milestone di oggi. Per la struttura dati, ritagliate l'oggetto fornito e inseritelo nel vostro data di Vue!
Sono a disposizione per i ticket fino alle 13 e nel pomeriggio i tutor saranno disponibili dallle 15 alle 18
NON MODIFICATE LA STRUTTURA DATI FORNITA
*/



/*
MILESTONE DI OGGI //! DAY TWO
Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
*/

/*
MILESTONE DEL GIORNO: //! DAY THREE
Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato (vedi immagine in allegato)
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 
*/


const root = new Vue({
    el: '#root',
    data: {
        newMessageElement: '',
        newAnswerElement: '',
        currentIndex: 0,
        search: '',
        user: {
            name: 'Clara',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Marco',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Claudio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Aurelio',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Ugo',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
        ]
    },
    methods: {
        setCurrentChat(index) {
            this.currentIndex = index;
        },
        //agginta nuovo messaggio in conversazione
        newMessage() {
            const listElement = this.newMessageElement.trim();

            if (listElement) {
                this.contacts[this.currentIndex].messages.push({ text: listElement, date: dayjs().format('DD/MM/YYYY HH:mm:ss'), status: 'sent' });

                setTimeout(() => {
                    let randomAnswer = ['Si, va bene', 'Ok', 'Ci vediamo dopo', "Fantastico! Non vedo l'ora", 'Non lo so'];


                    this.contacts[this.currentIndex].messages.push({
                        text: randomAnswer[Math.floor(Math.random() * randomAnswer.length)],
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        status: 'received'
                    });
                }, 2000)

            }
            this.newMessageElement = '';
        },
        // ricerca di un contatto
        contactSearch() {
            const newSearch = this.search.trim().toLowerCase();
            //# serve davvero il filter?
            //# implementare con un forEach

            //! RAGIONARE MEGLIO SU QUELLO CHE SI FA

            this.contacts.forEach((contact) => {
                if (contact.name.toLowerCase().includes(newSearch)) {
                    return contact.visible = true;
                }
                return contact.visible = false;
            });
        },
        deleteText(index) {
            this.contacts[this.currentIndex].messages = this.contacts[this.currentIndex].messages.filter((item, i) => {
                if (index === i) return false
                return true
            })
            this.isClicked = false;
        },
    },
});
