exports.translations = {
	commands: {
		/*
		* Moderation Commands
		*/
		autoban: {
			'notchat': 'Questo comando è disponibile solo nelle chat',
			'notmod': 'richiede il rank di moderatore per bannare gli utenti.',
			'notarg': 'Devi specificare almeno un user per la banlist',
			'bu': 'Blacklisted user',
			'u': 'User',
			'added': 'aggiunti alla blacklist con successo.',
			'already': 'già nella blacklist.',
			'all': 'Tutti',
			'other': 'Altri',
			'illegal': 'users hanno nick non validi, impossibile aggiungerli.'
		},
		unautoban: {
			'notchat': 'Questo comando è disponibile solo nelle chat',
			'notmod': 'richiede il rank di moderatore per bannare gli utenti.',
			'notarg': 'Devi specificare almeno un user da rimuovere dalla banlist',
			'u': 'User',
			'r': 'rimosso con successo dalla blacklist.',
			'noother': 'Nessun altro',
			'no': 'No',
			'nopresent': 'user specificati non presenti.'
		},
		regexautoban: {
			'notchat': 'Questo comando è disponibile solo nelle chat',
			'notmod': 'richiede il rank di moderatore per bannare gli utenti.',
			'notarg': 'Devi specificare almeno una regex per la banlist',
			're': 'Regular expression',
			'notadd': 'impossibile da aggiungere. Non essere troppo complicato!',
			'already': 'già presente nella blacklist.',
			'addby': 'aggiunto alla blacklist da',
			'add': 'aggiunto alla blacklist.'
		},
		unregexautoban: {
			'notchat': 'Questo comando è disponibile solo nelle chat',
			'notmod': 'richiede il rank di moderatore per bannare gli utenti.',
			'notarg': 'Devi specificare almeno una regex da rimuovere dalla banlist',
			'notpresent': 'non presente nella blacklist.',
			're': 'Regular expression',
			'rby': 'rimosso dalla blacklist da',
			'r': 'rimosso dalla blacklist.'
		},
		viewblacklist: {
			'notchat': 'Questo comando è disponibile solo nelle chat',
			'iu': 'Nickname non valido',
			'u': 'User',
			'currently': 'è al momento',
			'not': 'non',
			'b': 'nella blacklist.',
			'nousers': 'Nessun user nella blacklist',
			'listab': 'I seguenti sono bannati in',
			'listrab': 'Le seguenti regex sono bannate in',
			'err': 'upload fallito, impossibile caricare su hastebin'
		},
		zerotol: {
			'nolevels': 'Non ci sono livelli di tolleranza zero',
			'user': 'User',
			'level': 'Livello',
			'ztl': 'Lista di users in tolleranza zero',
			'empty': 'La lista di tolleranza zero è vuota.',
			'is': '',
			'n': 'NON',
			'y': '',
			'in': 'nella lista di tolleranza zero',
			'u1': 'Usage',
			'u2': '[add/delete], [User:livello]...',
			'users': 'User(s)',
			'add': 'aggiunti alla lista di tolleranza zero',
			'illegal': 'users aveva nick illegali',
			'invalid': 'avevano livelli non validi',
			'already': 'erano già nell\'elenco',
			'removed': 'rimosso dalla lista di tolleranza zero',
			'not': 'users non erano presenti nella lista',
			'err': 'upload fallito, impossibile caricare su hastebin'
		},
		banword: {
			'notchat': 'Questo comando è disponibile solo nelle chat',
			'phrase': 'La frase',
			'already': 'è già bannata.',
			'ban': 'è ora bannata.'
		},
		unbanword: {
			'notchat': 'Questo comando è disponibile solo nelle chat',
			'phrase': 'La frase',
			'not': 'non è bannata.',
			'unban': 'non è più bannata.'
		},
		viewbannedwords: {
			'notchat': 'Questo comando è disponibile solo nelle chat',
			'in': 'in',
			'globally': 'globalmente',
			'phrase': 'La frase',
			'nowords': 'Nessuna frase è bannata nella room.',
			'curr': 'è al momento',
			'not': 'non',
			'banned': 'bannata',
			'list': 'Le seguenti frasi sono bannate',
			'link': 'Frasi bannate',
			'err': 'upload fallito, impossibile caricare su hastebin'
		},
		inapword: {
			'notchat': 'Questo comando è disponibile solo nelle chat',
			'phrase': 'La frase',
			'already': 'è già una frase inappropriata.',
			'ban': 'è ora una frase inappropriata.'
		},
		uninapword: {
			'notchat': 'Questo comando è disponibile solo nelle chat',
			'phrase': 'La frase',
			'not': 'non è una frase inappropriata.',
			'unban': 'non è più una frase inappropriata.'
		},
		viewinapwords: {
			'notchat': 'Questo comando è disponibile solo nelle chat',
			'in': 'in',
			'globally': 'globalmente',
			'phrase': 'La frase',
			'nowords': 'n.',
			'curr': 'è al momento',
			'not': 'non',
			'banned': 'inappropriata',
			'list': 'Le seguenti frasi sono inappropriate',
			'link': 'Frasi inappropriate',
			'err': 'upload fallito, impossibile caricare su hastebin'
		},
		joinphrase: {
			'notchat': 'Questo comando è disponibile solo nelle chat',
			'ae': 'Saluti già abilitati',
			'e': 'Saluti ora abilitati',
			'ad': 'Saluti già abilitati',
			'd': 'Saluti ora disabilitati',
			'u1': 'Usage',
			'u2': '[set/delete], [user], [phrase]',
			'dis': 'Saluti disabilitati',
			'jpfor': 'Saluto dell\'user',
			'modified': 'è stato modificato',
			'globally': 'per tutte le room.',
			'forthis': 'per questa room.',
			'del': 'è stato cancellato',
			'not': 'non esiste'
		},
		viewjoinphrases: {
			'notchat': 'Questo comando è disponibile solo nelle chat',
			'iu': 'Nickname non valido.',
			'not': 'Nessun saluto per',
			'empty': 'Nessuna saluto in questa room.',
			'jp': 'Saluti impostati',
			'globally': 'in tutte le room',
			'in': 'in',
			'err': 'upload fallito, impossibile caricare su hastebin'
		},
		modexception: {
			'notchat': 'Questo comando è disponibile solo nelle chat',
			'all': 'utenti regolari',
			'rank': 'rank',
			'modex-inf1': 'Moderazione automatica è stata disabilitata per la room',
			'modex-inf2': 'o superiore in questa room',
			'modex-set1': 'Moderazione automatica disabilitata è stata attivata per questa room',
			'modex-set2': 'o superiore in questa room',
			'not1': 'Rank',
			'not2': 'non trovato'
		},
		mod: {
			'notchat': 'Questo comando è disponibile solo nelle chat',
			'u1': 'Usage',
			'u2': '(room - optional), [mod], [on/off]',
			'valid': 'Moderazioni abilitate',
			'mod': 'Moderazione per',
			'ae': 'già ON per la room',
			'e': 'ora ON per la room',
			'ad': 'già OFF per la room',
			'd': 'ora OFF per la room'
		}
	},

	moderation: {
		'automod': 'Moderazione automatica',
		//mods
		'fs': 'Flood / Spam',
		'sl': 'Spam di links',
		's': 'Spam',
		'f': 'Flood',
		'possible': 'Possibile spammer',
		'caps': 'Troppo caps',
		'stretch': 'Stretching',
		'spoiler': 'Spoiler vietati',
		'youtube': 'Spam di youtube vietato',
		'server': 'Server privati vietati',
		'inapword': 'Messaggio inappropriato',
		'banword': 'Frase bannata',
		'mult': 'Infrazioni multiple',
		'0tol': '(Tolleranza Zero)',
		//avb
		'caps-0': 'Caps',
		'rep-0': 'Ancora',
		'stretch-0': 'Stretching',
		'flood-0': 'Flood',
		'spoiler-0': 'Spoiler',
		'youtube-0': 'canale Youtube',
		'server-0': 'server privati',
		'inapword-0': 'Inappropiato',
		'banword-0': 'Parole Bannate',
		//autoban
		'ab': 'User nella blacklist'
	}
};
