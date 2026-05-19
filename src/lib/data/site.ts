/**
 * Modifica questo file per personalizzare testi, immagini e link del portfolio.
 * Le immagini usano placeholder Picsum: sostituisci `src` con i tuoi file in `static/`
 * (es. `/foto/mio-progetto.jpg`) o URL esterni.
 */

export type GalleryItem = {
	id: string;
	src: string;
	alt: string;
	caption?: string;
};

export type Project = {
	id: string;
	title: string;
	tagline: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	href?: string;
	year?: string;
};

export type SocialLink = {
	label: string;
	href: string;
};

export const siteMeta = {
	title: 'Portfolio — Fotografia',
	shortTitle: 'Nome Cognome',
	description:
		'Portfolio fotografico minimalista: progetti editoriali, ritratti e still life.',
	author: 'Nome Cognome',
	locale: 'it-IT'
} as const;

export const heroContent = {
	eyebrow: 'Fotografia',
	headline: 'Luce, spazio, silenzio',
	subtitle:
		'Una selezione curata di immagini e progetti. Estetica essenziale, attenzione al dettaglio.',
	primaryCta: { label: 'Vedi la galleria', href: '#gallery' },
	secondaryCta: { label: 'Contatti', href: '#contact' }
} as const;

/** Immagini demo (Picsum). Sostituisci con le tue foto. */
export const galleryItems: GalleryItem[] = [
	{ id: '1', src: 'https://picsum.photos/id/1011/1200/1500', alt: 'Onde al tramonto', caption: 'Mare' },
	{ id: '2', src: 'https://picsum.photos/id/1003/1200/900', alt: 'Paesaggio montano', caption: 'Alpi' },
	{ id: '3', src: 'https://picsum.photos/id/1025/1200/1200', alt: 'Dettaglio urbano', caption: 'Città' },
	{ id: '4', src: 'https://picsum.photos/id/1060/1200/1400', alt: 'Ritratto in studio', caption: 'Studio' },
	{ id: '5', src: 'https://picsum.photos/id/1080/1200/1000', alt: 'Natura macro', caption: 'Macro' },
	{ id: '6', src: 'https://picsum.photos/id/1043/1200/1300', alt: 'Foresta nebbiosa', caption: 'Nebbia' },
	{ id: '7', src: 'https://picsum.photos/id/1036/1200/1100', alt: 'Architettura', caption: 'Linee' },
	{ id: '8', src: 'https://picsum.photos/id/1050/1200/1500', alt: 'Costa rocciosa', caption: 'Costa' }
];

export const projects: Project[] = [
	{
		id: 'p1',
		title: 'Serie “Orizzonti”',
		tagline: 'Editoriale · 2025',
		description:
			'Un viaggio visivo tra coste e cieli, con palette ridotta e composizioni orizzontali dominanti.',
		imageSrc: 'https://picsum.photos/id/1069/900/600',
		imageAlt: 'Copertina progetto Orizzonti',
		href: '#gallery',
		year: '2025'
	},
	{
		id: 'p2',
		title: 'Ritratti in penombra',
		tagline: 'Commission · 2024',
		description:
			'Ritratti ambientati con luce naturale filtrata. Focus su texture della pelle e sguardi.',
		imageSrc: 'https://picsum.photos/id/64/900/600',
		imageAlt: 'Ritratto in penombra',
		year: '2024'
	},
	{
		id: 'p3',
		title: 'Still life “Materia”',
		tagline: 'Personale · 2024',
		description:
			'Oggetti quotidiani isolati su fondi neutri. Studio delle superfici e delle ombre morbide.',
		imageSrc: 'https://picsum.photos/id/225/900/600',
		imageAlt: 'Still life materico',
		href: '#gallery',
		year: '2024'
	}
];

export const aboutContent = {
	heading: 'Chi sono',
	lead: 'Fotografo tra Milano e il mare. Mi interessa la quiete nelle immagini.',
	paragraphs: [
		'Lavoro su progetti editoriali, brand culturali e ritratti. Prediligo la luce naturale, tempi lunghi e una post-produzione discreta.',
		'Collaboro con studi creativi e artisti. Disponibile per commissioni e workshop.'
	],
	highlights: ['Editoriale', 'Ritratti', 'Still life', 'Architettura']
} as const;

export const contactContent = {
	heading: 'Contatti',
	intro: 'Per collaborazioni, stampe o semplicemente un caffè virtuale.',
	email: 'ciao@tuodominio.it',
	social: [
		{ label: 'Instagram', href: 'https://instagram.com/' },
		{ label: 'Behance', href: 'https://behance.net/' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/' }
	] satisfies SocialLink[]
} as const;

export const navLinks = [
	{ href: '#hero', label: 'Home' },
	{ href: '#gallery', label: 'Galleria' },
	{ href: '#projects', label: 'Progetti' },
	{ href: '#about', label: 'About' },
	{ href: '#contact', label: 'Contatti' }
] as const;
