const translations = {
	pl: {
		title: 'Wyjątkowy prezent dla Ciebie 🎁',
		description:
			'Wyjątkowy prezent czeka na odkrycie! Kliknij, aby zobaczyć specjalną wiadomość!',
		login: 'Zaloguj się przez Google',
		logout: 'Wyloguj',
		settings: 'Ustawienia Strony',
		music: 'Ustawienia Dźwięku',
		backgroundMusic: 'Muzyka w tle:',
		countdown: 'Ustawienia Odliczania',
		countdownTime: 'Czas odliczania:',
		matrix: 'Ustawienia Efektu Deszczu Znaków',
		matrixText: 'Główny tekst tła:',
		matrixColor1: 'Kolor znaków 1:',
		matrixColor2: 'Kolor znaków 2:',
		sequence: 'Ustawienia Głównego Tekstu',
		sequenceText: 'Treść głównego tekstu:',
		sequenceColor: 'Kolor głównego tekstu:',
		gift: 'Ustawienia Animacji (GIF)',
		giftImage: 'Animacja (opcjonalnie):',
		enableBook: 'Pokaż książkę:',
		book: 'Ustawienia Stron Książki',
		enableHeart: 'Pokaż efekt spadających serc:',
		apply: 'Zastosuj Ustawienia',
		fullscreen: 'Pełny ekran',
		copyLink: '📋 Kopiuj Link',
		viewWebsite: '🔗 Zobacz Stronę',
		close: '✖ Zamknij',
		shareLink: 'Link do udostępnienia:',
		copySuccess: 'Link skopiowany!',
		error: '❌ Wystąpił błąd!',
		invalidPage:
			'❌ Nieprawidłowa struktura stron! Obecnie jest {pages} stron. Dodaj lub usuń 1 stronę.',
		uploading: '📤 Przesyłanie zdjęć...',
		creating: '🌐 Tworzenie strony...',
		copyShare: '📋 Skopiuj link',
		copied: '✅ Skopiowano!',
		copyToClipboard: '📋 Link skopiowany do schowka!',
		copyFail: '❌ Nie udało się skopiować linku!',

		validCoverOnly: '✅ Prawidłowo (tylko okładka)',
		validCoverAndPairs: '✅ Prawidłowo (okładka + pary stron)',
		invalidMissingPage: '❌ Błąd (brakuje 1 strony do pary)',
		bookPageInfo: 'Informacje o stronie:',
		totalPages: 'Wszystkie strony',
		status: 'Status',
		structure: 'Struktura',
		coverOnly: 'Tylko okładka',
		coverAndPairs: 'Okładka (1) + {pairs} pary stron{extra}',
		plusOneExtra: ' + 1 dodatkowa strona',
		pageTitleCover: 'Strona {num} (Okładka)',
		pageTitle: 'Strona {num}',
		imageLabel: 'Zdjęcie:',
		coverPlaceholder: 'Okładka Książki',
		pagePlaceholder: 'Strona {num}',
		noImageAlt: 'Brak zdjęcia - {placeholder}',
		contentLabel: 'Treść:',
		contentPlaceholder: 'Wpisz treść dla strony {num}',
		addNewPage: '➕ Dodaj Nową Stronę',
		emptyPage: 'Pusta strona',
		endOfBook: 'Koniec książki',
		loading: 'Przygotowywanie czegoś specjalnego...',
		waitingIsHappiness: 'Dobre rzeczy wymagają czasu!',
		invalidPageStructure: 'Nieprawidłowa struktura stron!',
		currentPages: 'Obecnie jest {total} stron.',
		bookStructureGuide:
			'Wymagana struktura książki:\n- Strona 1: Okładka\n- Od strony 2: Pary stron (2-3, 4-5, 6-7...)',
		pleaseAddOrRemovePage:
			'Dodaj lub usuń 1 stronę, aby zachować prawidłową strukturę.',
		fullscreenNotSupported:
			'Twoja przeglądarka nie obsługuje trybu pełnoekranowego!',
		noteSequence:
			'Uwaga: używaj znaku | aby oddzielić słowa. Unikaj zbyt długich linii.',
		on: 'Włącz',
		off: 'Wyłącz',
		sec3: '3 sekundy',
		sec5: '5 sekund',
		sec10: '10 sekund',
		noGif: 'Brak',
		colorTheme: 'Wybierz motyw:',
		settingsHint: 'Kliknij tutaj, aby dostosować ustawienia',
		pinkTheme: 'Słodki Róż',
		blueTheme: 'Chłodny Niebieski',
		purpleTheme: 'Rozmarzony Fiolet',
		customTheme: 'Kolor Niestandardowy',
	},
};

function setLanguage() {
	const lang = 'pl-PL';
	document.documentElement.lang = lang;
	document.title = translations[lang].title;
	const metaDesc = document.querySelector('meta[name="description"]');
	if (metaDesc)
		metaDesc.setAttribute('content', translations[lang].description);

	document.querySelectorAll('[data-i18n]').forEach((el) => {
		const key = el.getAttribute('data-i18n');
		if (translations[lang][key]) {
			if (
				translations[lang][key].includes('<b>') ||
				translations[lang][key].includes('<a')
			) {
				el.innerHTML = translations[lang][key];
			} else {
				el.innerText = translations[lang][key];
			}
		}
	});

	document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
		const key = el.getAttribute('data-i18n-placeholder');
		if (translations[lang][key]) {
			el.setAttribute('placeholder', translations[lang][key]);
		}
	});
}

document.addEventListener('DOMContentLoaded', () => {
	setLanguage();
});

function t(key, vars = {}) {
	let str = (translations['pl'] && translations['pl'][key]) || key;
	Object.keys(vars).forEach((k) => {
		str = str.replace(`{${k}}`, vars[k]);
	});
	return str;
}
