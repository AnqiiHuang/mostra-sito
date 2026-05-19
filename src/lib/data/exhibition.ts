export type ExhibitionPhoto = {
	src: string;
	alt: string;
	caption?: string;
};

export type ExhibitionAudio = {
	src: string;
	title: string;
	description?: string;
};

export type ExhibitionSpectrogram = {
	src: string;
	alt: string;
	caption?: string;
};

export type Tappa = {
	id: string;
	number: number;
	eyebrow: string;
	title: string;
	lead: string;
	paragraphs: string[];
	keywords: string[];
	photos: ExhibitionPhoto[];
	spectrogram: ExhibitionSpectrogram;
	audio: ExhibitionAudio;
};

export const exhibitionMeta = {
	title: 'Botanica Sonora',
	subtitle: 'Un percorso in sei tappe tra fotografia, paesaggio vegetale e sound design',
	intro: [
		'Una mostra immersiva che attraversa serra, radici e nebbia: immagini, spettrogrammi e paesaggi acustici costruiscono una narrazione verticale, tappa dopo tappa.',
		'Scorri lentamente. Ogni sezione accoglie una stazione del percorso — botanica, luce, frequenza — con fotografie, testi e ascolto.'
	],
	themes: ['botanica', 'fotografia', 'sound design', 'spettrogrammi', 'mappa', '6 tappe']
} as const;

export const tappe: Tappa[] = [
	{
		id: 'tappa-1',
		number: 1,
		eyebrow: 'Tappa 01',
		title: 'Radici',
		lead: 'Il sottosuolo come primo archivio: umidità, fibre, respirazione lenta.',
		paragraphs: [
			'Macrofotografie di rizomi e cortecce rivelano texture che ricordano lastre fotografiche in sviluppo. Il suono registra il fruscio del substrato e le vibrazioni impercettibili della crescita.',
			'Lo spettrogramma traduce questa zona in bande basse dense: un drone organico che sostiene l’intero percorso espositivo.'
		],
		keywords: ['rizoma', 'substrato', 'basso continuo'],
		photos: [
			{
				src: 'https://picsum.photos/id/1080/1400/1050',
				alt: 'Dettaglio di radici e terra scura',
				caption: 'Archivio del suolo'
			},
			{
				src: 'https://picsum.photos/id/1050/1400/1050',
				alt: 'Texture legnosa in controluce',
				caption: 'Corteccia · I'
			},
			{
				src: 'https://picsum.photos/id/1036/1400/1050',
				alt: 'Muschio su pietra',
				caption: 'Muschio · II'
			}
		],
		spectrogram: {
			src: 'https://picsum.photos/id/119/1200/400',
			alt: 'Spettrogramma: bande basse e armoniche radice',
			caption: 'Frequenze 20–400 Hz · campo radicale'
		},
		audio: {
			src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
			title: 'Ascolto · Radici',
			description: 'Field recording elaborato · durata 1:42'
		}
	},
	{
		id: 'tappa-2',
		number: 2,
		eyebrow: 'Tappa 02',
		title: 'Licheni',
		lead: 'Simbiosi visibile: il tempo si deposita in chiazze di verde-grigio.',
		paragraphs: [
			'La fotografia ferma l’espansione lenta dei licheni su pietra e metallo. Ogni inquadratura è uno studio di superficie, quasi un campione da museo naturalistico.',
			'Il paesaggio sonoro alterna grani sottili e piccoli crackle: la pelle minerale che “canta” sotto la luce radente.'
		],
		keywords: ['simbiosi', 'macro', 'texture'],
		photos: [
			{
				src: 'https://picsum.photos/id/1025/1400/1050',
				alt: 'Licheni su roccia',
				caption: 'Colonia · I'
			},
			{
				src: 'https://picsum.photos/id/1011/1400/1050',
				alt: 'Superficie minerale con muschio',
				caption: 'Deposito · II'
			}
		],
		spectrogram: {
			src: 'https://picsum.photos/id/120/1200/400',
			alt: 'Spettrogramma: texture ad alta frequenza',
			caption: 'Granulometria 2–12 kHz'
		},
		audio: {
			src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
			title: 'Ascolto · Licheni',
			description: 'Micro-field · durata 2:05'
		}
	},
	{
		id: 'tappa-3',
		number: 3,
		eyebrow: 'Tappa 03',
		title: 'Acque',
		lead: 'Condensa, gocce, superfici riflettenti: la serra respira.',
		paragraphs: [
			'Sequenze fotografiche seguono il percorso dell’acqua sul vetro e sulle foglie. Il ritmo visivo imita quello di un pendolo lento.',
			'Il sound design costruisce uno strato liquido: filtri passa-basso, riverbero lungo, campionamenti di gocce sincronizzati con le immagini.'
		],
		keywords: ['condensa', 'riflesso', 'riverbero'],
		photos: [
			{
				src: 'https://picsum.photos/id/1015/1400/1050',
				alt: 'Gocce su foglia verde',
				caption: 'Condensa · I'
			},
			{
				src: 'https://picsum.photos/id/1018/1400/1050',
				alt: 'Superficie d’acqua in controluce',
				caption: 'Specchio · II'
			},
			{
				src: 'https://picsum.photos/id/1043/1400/1050',
				alt: 'Nebbia tra alberi',
				caption: 'Vapore · III'
			}
		],
		spectrogram: {
			src: 'https://picsum.photos/id/121/1200/400',
			alt: 'Spettrogramma: onde fluide medio-basse',
			caption: 'Modulazione liquida · 200 Hz–3 kHz'
		},
		audio: {
			src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
			title: 'Ascolto · Acque',
			description: 'Paesaggio idrofonico · durata 2:18'
		}
	},
	{
		id: 'tappa-4',
		number: 4,
		eyebrow: 'Tappa 04',
		title: 'Serra',
		lead: 'Geometria di vetro e luce: architettura che incornicia il vegetale.',
		paragraphs: [
			'Scatti in bianco e nero e dettagli a colori descrivono la struttura della serra come camera oscura naturale. Le linee conducono lo sguardo verso il centro della tappa.',
			'Qui lo spettrogramma mostra risonanze metalliche leggere — il “grido” silenzioso della struttura al vento.'
		],
		keywords: ['vetro', 'geometria', 'risonanza'],
		photos: [
			{
				src: 'https://picsum.photos/id/1060/1400/1050',
				alt: 'Struttura di vetro in prospettiva',
				caption: 'Armatura · I'
			},
			{
				src: 'https://picsum.photos/id/1069/1400/1050',
				alt: 'Fogliame dietro pannello trasparente',
				caption: 'Serra · II'
			}
		],
		spectrogram: {
			src: 'https://picsum.photos/id/122/1200/400',
			alt: 'Spettrogramma: risonanze metalliche',
			caption: 'Risonanza strutturale · 400 Hz–8 kHz'
		},
		audio: {
			src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
			title: 'Ascolto · Serra',
			description: 'Risonanze di vetro · durata 1:58'
		}
	},
	{
		id: 'tappa-5',
		number: 5,
		eyebrow: 'Tappa 05',
		title: 'Crepuscolo',
		lead: 'L’ora fragile: il verde diventa inchiostro, le ombre si allungano.',
		paragraphs: [
			'La fotografia lavora con poca luce e alto contrasto. Ogni immagine è un incontro tra silhouette e bagliore residuo.',
			'Il sound design attenua le alte frequenze e introduce un pad caldo: la tappa più “editoriale” del percorso.'
		],
		keywords: ['penombra', 'contrasto', 'silenzio'],
		photos: [
			{
				src: 'https://picsum.photos/id/1040/1400/1050',
				alt: 'Alberi in penombra',
				caption: 'Orizzonte · I'
			},
			{
				src: 'https://picsum.photos/id/1044/1400/1050',
				alt: 'Ramo contro cielo scuro',
				caption: 'Silhouette · II'
			},
			{
				src: 'https://picsum.photos/id/64/1400/1050',
				alt: 'Ritratto vegetale soft focus',
				caption: 'Bagliore · III'
			}
		],
		spectrogram: {
			src: 'https://picsum.photos/id/123/1200/400',
			alt: 'Spettrogramma: gradiente crepuscolare',
			caption: 'Transizione 80 Hz–2 kHz'
		},
		audio: {
			src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
			title: 'Ascolto · Crepuscolo',
			description: 'Pad e field · durata 2:30'
		}
	},
	{
		id: 'tappa-6',
		number: 6,
		eyebrow: 'Tappa 06',
		title: 'Eco',
		lead: 'Sintesi finale: memoria del percorso in un unico respiro visivo e sonoro.',
		paragraphs: [
			'Le ultime fotografie riprendono motivi delle tappe precedenti in una sequenza-riflesso. Il visitatore riconosce forme, suoni, texture già incontrate.',
			'Lo spettrogramma integrato mostra la sovrapposizione di tutte le bande: una partitura per chiudere la mostra.'
		],
		keywords: ['memoria', 'sintesi', 'eco'],
		photos: [
			{
				src: 'https://picsum.photos/id/225/1400/1050',
				alt: 'Composizione finale di foglie e luce',
				caption: 'Ritorno · I'
			},
			{
				src: 'https://picsum.photos/id/1003/1400/1050',
				alt: 'Paesaggio vegetale distante',
				caption: 'Orizzonte · II'
			}
		],
		spectrogram: {
			src: 'https://picsum.photos/id/124/1200/400',
			alt: 'Spettrogramma integrato del percorso',
			caption: 'Spettro complessivo · 20 Hz–16 kHz'
		},
		audio: {
			src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
			title: 'Ascolto · Eco',
			description: 'Finale sonoro · durata 3:12'
		}
	}
];

export type MapStop = {
	number: number;
	label: string;
	tappaId: string;
	x: number;
	y: number;
};

/** Coordinate percentuali su mappa statica (non carousel). */
export const mapStops: MapStop[] = [
	{ number: 1, label: 'Radici', tappaId: 'tappa-1', x: 18, y: 72 },
	{ number: 2, label: 'Licheni', tappaId: 'tappa-2', x: 32, y: 58 },
	{ number: 3, label: 'Acque', tappaId: 'tappa-3', x: 48, y: 44 },
	{ number: 4, label: 'Serra', tappaId: 'tappa-4', x: 58, y: 32 },
	{ number: 5, label: 'Crepuscolo', tappaId: 'tappa-5', x: 72, y: 38 },
	{ number: 6, label: 'Eco', tappaId: 'tappa-6', x: 84, y: 22 }
];

export const mapContent = {
	eyebrow: 'Mappa del percorso',
	title: 'Sei stazioni, un solo itinerario',
	lead: 'La mappa non scorre: è una vista fissa del tragitto espositivo. Ogni punto corrisponde a una tappa — seleziona il numero per saltare alla sezione.'
} as const;
