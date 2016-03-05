exports.translations = {
	commands: {
		/*
		* Misc Commands
		*/
		pick: {'pick': 'Scelta a caso', 'err': 'Devi impostare almeno due opzioni valide'},
		randomanswer: {
			'answers': [
				'Eh, è un pò coglione',
				'Sì.',
				'Risposta dubbia, ritenta.',
				'Senza dubbio.',
				'Le mie fonti dicono no',
				'Per come la vedo io, sì.',
				'Puoi contarci.',
				'Concentrati e riprova.',
				'Non il massimo.',
				'Decisamente.',
				'Meglio non dirtelo, per ora.',
				'Molto incerto.',
				'Sì - sicuramente.',
				'È evidente.',
				'Non si può sapere al momento.',
				'Molto probabilmente.',
				'Richiedi più tardi.',
				'La mia risposta è no.',
				'Non male.',
				'Non contarci.'
			]
		},
		regdate: {
			'inv': 'Nome utente non valido',
			'busy': 'Al momento i dati sono in caricamento, riprovare di nuovo tra pochi secondi',
			'err': 'Impossibile ottenere i dati di',
			'user': 'Utente',
			'not': 'non è registrato',
			'regtime1': 'è stato registrato',
			'regtime2': 'fa',
			'regdate': 'si è registrato il'
		},
		/*
		* Smogon
		*/
		usage: {
			'in': 'in',
			'stats': 'Statistiche di utilizzo',
			'data': 'Dati di utilizzo',
			'usage': 'Uso corretto',
			'tiererr1': 'Tier o formato',
			'tiererr2': 'non trovato',
			'tiererr3': 'non disponibile',
			'err': 'Impossibile ottenere i dati di utilizzo di',
			'busy': 'Download dei dati di utilizzo. Riprovare tra pochi secondi',
			'pokeerr1': 'Pokemon',
			'pokeerr2': 'non disponibile in',
			'pokeerr3': 'dati di utilizzo',
			'pokeerr4': 'statistiche di utilizzo',
			'notfound': 'Dati non trovati per',
			'usagedata1': '#NAME di ',
			'usagedata2': '',
			'pokeusage': 'Uso',
			'pokeraw': 'Raw',
			'abilities': 'Abilità',
			'items': 'Strumenti',
			'moves': 'Mosse',
			'spreads': 'Spreads',
			'teammates': 'Mates'
		},
		suspect: {
			'tiererr1': 'Tier',
			'tiererr2': 'non trovato',
			'in': 'in',
			'nosuspect': 'Non sono stati trovati dati di alcun Suspect Test per questa tier',
			'aux1': 'Usa',
			'aux2': 'per registrare i dati necessari.'
		},
		setsuspect: {
			'usage': 'Uso corretto',
			'tier': 'Tier',
			'notfound': 'non trovato',
			'd1': 'I dati dei Suspect Test di questa Tier',
			'd2': 'è stato rimosso'
		},
		deftier: {
			'usage': 'Uso corretto',
			'notchat': 'Questo comando è solo disponibile nelle chat room',
			'tiererr1': 'Tier',
			'tiererr2': 'non trovato',
			'set': 'La tier di default per questa room è adesso'
		},
		/*
		* Quotes & Jokes
		*/
		quote: {
			'u1': 'Usage',
			'u2': '[id], [citazione]',
			'empty': 'Il Database è vuoto',
			'noid': 'È necessario specificare un documento valido',
			'quote': 'Citazione',
			'n': 'non esiste',
			'd': 'è stata eliminata con successo',
			'already': 'esiste già',
			'modified': 'è stata modificata con successo',
			'created': 'è stata creata con successo'
		},
		listquotes: {
			'empty': 'L\'Elenco di citazioni è vuoto',
			'list': 'Lista di citazioni',
			'err': 'Errore: non sono riuscito a caricare le virgolette per Hastebin'
		},
		joke: {
			'u1': 'Usage',
			'u2': '[id], [battuta]',
			'empty': 'Il Database è vuoto',
			'noid': 'È necessario specificare un documento valido',
			'joke': 'Battuta',
			'n': 'non esiste',
			'd': 'è stata eliminata con successo',
			'already': 'esiste già',
			'modified': 'è stata modificata con successo',
			'created': 'è stata creata con successo'
		},
		listjokes: {
			'empty': 'L\'Elenco di battute è vuota',
			'list': 'L\'Elenco di battute',
			'err': 'Errore: non sono riuscito a caricare gli scherzi su Hastebin'
		},
		/*
		* Pokemon Commands
		*/
		translate: {
			'u1': 'Usage',
			'u2': '[parola], (lingua di partenza), (lingua di arrivo)',
			'lnot1': 'Lingua',
			'lnot2': 'non disponibile. Lingue disponibili',
			'not1': 'Pokemon, abilità, oggetto, mossa o natura chiamata',
			'not2': 'non trovata o non disponibile nelle traduzioni',
			'not3': 'non trovata',
			'tra': 'Traduzione di',
			'pokemon': 'Pokemon',
			'abilities': 'Abilità',
			'items': 'Oggetto',
			'moves': 'Mossa',
			'natures': 'Natura'
		},
		randompokemon: {'err': 'C\'è stato un errore, riprova più tardi'},
		gen: {
			'err': 'C\'è stato un errore, riprova più tardi',
			'err2': 'Devi specificare un pokemon, una mossa, uno strumento, o un\' abilità',
			'nfound': 'Pokemon, mossa, strumento, o abilità non trovata',
			'g': 'Generazione di'
		},
		randommoves: {
			'err': 'C\'è stato un errore, riprova più tardi',
			'err2': 'Devi specificare un Pokemon',
			'r': 'Mosse in Random Singles',
			'rd': 'Mosse in Random Doubles / Triples',
			'nfound': 'Pokemon non trovato'
		},
		heavyslam: {
			'err': 'C\'è stato un errore, riprova più tardi',
			'err2': 'Devi specificare 2 Pokemon',
			'n1': 'Pokemon Attaccante non trovato',
			'n2': 'Pokemon Difensore non trovato',
			's': 'Heavy slam/Heat crash base power'
		},
		prevo: {
			'err': 'C\'è stato un errore, riprova più tardi',
			'p1': 'Pokemon',
			'p2': 'non ha pre-evo',
			'nfound': 'Pokemon non trovato'
		},
		priority: {
			'err': 'C\'è stato un errore, riprova più tardi',
			'err2': 'Pokemon non trovato',
			'err3': 'Nessuna mossa trovata'
		},
		boosting: {
			'err': 'C\'è stato un errore, riprova più tardi',
			'err2': 'Pokemon non trovato',
			'err3': 'Nessuna mossa trovata'
		},
		recovery: {
			'err': 'C\'è stato un errore, riprova più tardi',
			'err2': 'Pokemon non trovato',
			'err3': 'Nessuna mossa trovata'
		},
		hazard: {
			'err': 'C\'è stato un errore, riprova più tardi',
			'err2': 'Pokemon non trovato',
			'err3': 'Nessuna mossa trovata'
		}
	}
};
