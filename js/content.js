/* ==========================================================================
   CONTENT — the single place to edit text, education, experience, culture,
   travel and skills. Every visible string is { en: "...", de: "..." } so both
   languages stay in sync. To add an entry, copy an existing object in a list
   and change its fields. Dates use "YYYY-MM"; leave `to` empty for "present".
   To add a photo to a card, put the file in assets/ and set image: 'assets/x.jpg'
   plus imageAlt: { en, de }. Cards without `image` render as text-only cards.
   ========================================================================== */
window.SITE = {

  /* ------------------------------- UI TEXT ------------------------------- */
  ui: {
    en: {
      'skip': 'Skip to content',
      'nav.about': 'About', 'nav.education': 'Education', 'nav.experience': 'Experience',
      'nav.creative': 'Creative', 'nav.culture': 'Culture', 'nav.travel': 'Travel',
      'nav.skills': 'Skills', 'nav.contact': 'Contact', 'nav.menu': 'Menu',
      'hero.eyebrow': 'Portfolio · Germany',
      'hero.h1a': 'Creative mind.', 'hero.h1b': 'Business focus.', 'hero.h1c': 'Digital future.',
      'hero.lede': "I'm Seif Elemam, an Egyptian business student in Germany with an accounting background, practical experience across different business environments, and a growing interest in finance, marketing and human resources.",
      'hero.cta1': 'See my route', 'hero.cta2': 'Get in touch',
      'label.aria': 'Quick facts about Seif Elemam',
      'label.from': 'From', 'label.to': 'To',
      'label.studying': 'Studying', 'label.studying.v': 'MA European Business Management',
      'label.languages': 'Languages', 'label.languages.v': 'Arabic · English · German',
      'label.experience': 'Experience', 'label.experience.v': '2016–2024 · 5 organisations',
      'photo.alt': 'Portrait of Seif Elemam: a smiling man with glasses and a beard, wearing a dark suit and a blue tie.',

      'about.eyebrow': 'About',
      'about.title': 'Background first, direction second.',
      'about.p1': 'My working life started in Mansoura, Egypt, in jobs where you deal with people all day: a dental office front desk, a restaurant till, a telecom sales team. In parallel I completed my Bachelor of Commerce in Accounting at Mansoura University and volunteered with AIESEC on participant experience.',
      'about.p2': 'From late 2021 I worked at Flink SE in Germany as a rider, a warehouse assistant and an inbound and outbound coordinator. During those years I took courses in Sustainable Resources Engineering in Magdeburg and in European Business Management in Wildau, where I started my Master\'s in 2025.',
      'about.p3': "Finance, marketing and HR all interest me, and I haven't chosen a specialization yet. I'd rather say so than pretend otherwise.",
      'about.view.title': 'What is different about my view',
      'about.view': 'I am Egyptian, I live in Germany, and I have worked in both countries, mostly on the operational side of a business, where you see how orders, people and information really move. I now study business with that practical, international view in mind.',
      'about.outside': 'Outside work: football, padel and horse riding, and I follow Zamalek SC and Arsenal FC. I love travelling, cultural exchange and bringing people together.',

      'edu.eyebrow': 'Education',
      'edu.title': 'Degrees and coursework, kept apart',
      'edu.lede': 'My only completed degree is the Bachelor of Commerce from Mansoura. The rest is coursework or in progress, and it is labelled that way.',
      'edu.s.done': 'Degree completed', 'edu.s.course': 'Coursework, no degree awarded', 'edu.s.now': 'In progress',

      'exp.eyebrow': 'Experience',
      'exp.title': 'The route so far',
      'exp.lede': 'Employment and volunteering, newest stop first.',
      'exp.work': 'Employment', 'exp.volunteer': 'Volunteer',
      'exp.present': 'Present',

      'cr.eyebrow': 'Creativity',
      'cr.title': 'Marketing, Creativity & Content',
      'cr.lede': 'My interest in marketing grew through hands-on exposure to content. I took part, I shared ideas, and I paid attention to how a story reaches an audience.',
      'cr.how': 'How I worked',
      'cr.take': 'What I take from it',

      'cu.eyebrow': 'Culture & community',
      'cu.title': 'Culture, Connections & International Experiences',
      'cu.lede': 'Representing Egypt, welcoming people from other countries and organising things that bring people together matter a lot to me.',
      'cu.upcoming': 'Upcoming',

      'tr.eyebrow': 'Travel',
      'tr.title': 'Travel & Discovering Cultures',
      'tr.lede': 'Travel is not work experience. It shows what I care about: curiosity, openness and meeting people from different backgrounds.',
      'tr.note': 'Through my own trips and my customer-service background I have learned practical travel planning: visa requirements, flights and bookings. I enjoy helping others prepare for their journeys.',
      'tr.more': 'More to come', 'tr.more.v': 'This list grows with every trip.',

      'skills.eyebrow': 'Skills',
      'skills.title': 'What I can show, and what I am still learning',
      'skills.lede': 'Grouped by how I came to know each one. I leave out skill bars on purpose.',
      'skills.langs': 'Languages',
      'skills.scale': 'CEFR scale, A1 to C2',

      'dir.eyebrow': 'Direction',
      'dir.title': "Three routes I'm exploring",
      'dir.lede': "I haven't chosen a specialization yet. These are the routes I'm weighing, and what each one rests on.",
      'dir.next': 'Next stop',
      'dir.next.v': 'A role, internship or working-student position where I can test one of these routes in practice.',

      'contact.eyebrow': 'Contact',
      'contact.title': "Let's talk.",
      'contact.lede': "If you're hiring, building a team or just curious about my path, write to me.",
      'contact.email': 'Email', 'contact.linkedin': 'LinkedIn', 'contact.location': 'Based in',
      'contact.location.v': 'Germany',
      'contact.copy': 'Copy', 'contact.copied': 'Copied', 'contact.copyfail': 'Select and copy',

      'foot.rights': '© 2026 Seif Elemam',
      'foot.top': 'Back to top',
      'foot.impressum': 'Impressum', 'foot.privacy': 'Datenschutz',
      'legal.back': 'Back to the site'
    },
    de: {
      'skip': 'Zum Inhalt springen',
      'nav.about': 'Über mich', 'nav.education': 'Ausbildung', 'nav.experience': 'Erfahrung',
      'nav.creative': 'Kreatives', 'nav.culture': 'Kultur', 'nav.travel': 'Reisen',
      'nav.skills': 'Fähigkeiten', 'nav.contact': 'Kontakt', 'nav.menu': 'Menü',
      'hero.eyebrow': 'Portfolio · Deutschland',
      'hero.h1a': 'Kreatives Denken.', 'hero.h1b': 'Wirtschaftlicher Fokus.', 'hero.h1c': 'Digitale Zukunft.',
      'hero.lede': 'Ich bin Seif Elemam, ein ägyptischer Wirtschaftsstudent in Deutschland mit Accounting-Hintergrund, praktischer Erfahrung in unterschiedlichen Arbeitsumfeldern und wachsendem Interesse an Finanzen, Marketing und Personalwesen.',
      'hero.cta1': 'Meinen Weg ansehen', 'hero.cta2': 'Kontakt aufnehmen',
      'label.aria': 'Kurzfakten zu Seif Elemam',
      'label.from': 'Von', 'label.to': 'Nach',
      'label.studying': 'Studium', 'label.studying.v': 'MA European Business Management',
      'label.languages': 'Sprachen', 'label.languages.v': 'Arabisch · Englisch · Deutsch',
      'label.experience': 'Erfahrung', 'label.experience.v': '2016–2024 · 5 Organisationen',
      'photo.alt': 'Porträt von Seif Elemam: ein lächelnder Mann mit Brille und Bart in dunklem Anzug und blauer Krawatte.',

      'about.eyebrow': 'Über mich',
      'about.title': 'Erst der Hintergrund, dann die Richtung.',
      'about.p1': 'Mein Berufsleben begann in Mansoura, Ägypten, in Jobs mit ständigem Kontakt zu Menschen: am Empfang einer Zahnarztpraxis, an der Restaurantkasse, in einem Telekom-Vertriebsteam. Parallel habe ich an der Mansoura University meinen Bachelor of Commerce in Accounting abgeschlossen und mich bei AIESEC ehrenamtlich um die Teilnehmererfahrung gekümmert.',
      'about.p2': 'Ab Ende 2021 habe ich in Deutschland bei Flink SE gearbeitet, als Fahrer, Lagerhelfer und Koordinator für Wareneingang und Warenausgang. In dieser Zeit habe ich Kurse in Sustainable Resources Engineering in Magdeburg und in European Business Management in Wildau belegt, wo ich 2025 mein Masterstudium begonnen habe.',
      'about.p3': 'Finanzen, Marketing und Personalwesen interessieren mich gleichermaßen, eine Spezialisierung habe ich noch nicht gewählt. Das sage ich lieber offen, als etwas vorzutäuschen.',
      'about.view.title': 'Was meinen Blick besonders macht',
      'about.view': 'Ich bin Ägypter, lebe in Deutschland und habe in beiden Ländern gearbeitet, meist auf der operativen Seite eines Unternehmens, dort, wo man sieht, wie Aufträge, Menschen und Informationen wirklich fließen. Mit diesem praktischen, internationalen Blick studiere ich jetzt Wirtschaft.',
      'about.outside': 'Außerhalb der Arbeit: Fußball, Padel und Reiten, und ich verfolge Zamalek SC und den FC Arsenal. Ich reise gern, mag kulturellen Austausch und bringe gern Menschen zusammen.',

      'edu.eyebrow': 'Ausbildung',
      'edu.title': 'Abschlüsse und Kurse, sauber getrennt',
      'edu.lede': 'Mein einziger abgeschlossener Abschluss ist der Bachelor of Commerce aus Mansoura. Alles andere sind Kurse oder ein laufendes Studium, und so ist es auch gekennzeichnet.',
      'edu.s.done': 'Abschluss erworben', 'edu.s.course': 'Studienleistungen, kein Abschluss', 'edu.s.now': 'Laufend',

      'exp.eyebrow': 'Erfahrung',
      'exp.title': 'Der Weg bis hierher',
      'exp.lede': 'Anstellungen und ehrenamtliches Engagement, die jüngste Station zuerst.',
      'exp.work': 'Anstellung', 'exp.volunteer': 'Ehrenamt',
      'exp.present': 'heute',

      'cr.eyebrow': 'Kreativität',
      'cr.title': 'Marketing, Kreativität & Content',
      'cr.lede': 'Mein Interesse an Marketing ist durch praktische Berührung mit Content gewachsen. Ich habe mitgewirkt, Ideen eingebracht und darauf geachtet, wie eine Geschichte ihr Publikum erreicht.',
      'cr.how': 'Wie ich gearbeitet habe',
      'cr.take': 'Was ich daraus mitnehme',

      'cu.eyebrow': 'Kultur & Gemeinschaft',
      'cu.title': 'Kultur, Verbindungen & internationale Erfahrungen',
      'cu.lede': 'Ägypten zu vertreten, Menschen aus anderen Ländern willkommen zu heißen und Dinge zu organisieren, die Menschen zusammenbringen, ist mir sehr wichtig.',
      'cu.upcoming': 'Demnächst',

      'tr.eyebrow': 'Reisen',
      'tr.title': 'Reisen & Kulturen entdecken',
      'tr.lede': 'Reisen ist keine Berufserfahrung. Es zeigt, was mir wichtig ist: Neugier, Offenheit und die Begegnung mit Menschen aus verschiedenen Hintergründen.',
      'tr.note': 'Durch eigene Reisen und meinen Kundenservice-Hintergrund habe ich praktische Reiseplanung gelernt: Visabestimmungen, Flüge und Buchungen. Ich helfe gern anderen bei der Vorbereitung ihrer Reisen.',
      'tr.more': 'Es kommt mehr', 'tr.more.v': 'Diese Liste wächst mit jeder Reise.',

      'skills.eyebrow': 'Fähigkeiten',
      'skills.title': 'Was ich zeigen kann und was ich noch lerne',
      'skills.lede': 'Gruppiert danach, wie ich die jeweilige Fähigkeit kennengelernt habe. Auf Kompetenzbalken verzichte ich bewusst.',
      'skills.langs': 'Sprachen',
      'skills.scale': 'GER-Skala, A1 bis C2',

      'dir.eyebrow': 'Richtung',
      'dir.title': 'Drei Wege, die ich erkunde',
      'dir.lede': 'Eine Spezialisierung habe ich noch nicht gewählt. Das sind die Wege, die ich abwäge, und worauf jeder beruht.',
      'dir.next': 'Nächster Halt',
      'dir.next.v': 'Eine Stelle, ein Praktikum oder eine Werkstudententätigkeit, in der ich einen dieser Wege praktisch ausprobieren kann.',

      'contact.eyebrow': 'Kontakt',
      'contact.title': 'Sprechen wir.',
      'contact.lede': 'Wenn Sie einstellen, ein Team aufbauen oder einfach neugierig auf meinen Weg sind, schreiben Sie mir.',
      'contact.email': 'E-Mail', 'contact.linkedin': 'LinkedIn', 'contact.location': 'Wohnort',
      'contact.location.v': 'Deutschland',
      'contact.copy': 'Kopieren', 'contact.copied': 'Kopiert', 'contact.copyfail': 'Markieren und kopieren',

      'foot.rights': '© 2026 Seif Elemam',
      'foot.top': 'Nach oben',
      'foot.impressum': 'Impressum', 'foot.privacy': 'Datenschutz',
      'legal.back': 'Zurück zur Website'
    }
  },

  /* ---------------------- THREE ABOUT "VERBS" (About) --------------------- */
  traits: [
    { word: { en: 'Communicate', de: 'Kommunizieren' },
      text: { en: 'Customer-facing roles at a front desk, a till, in telecom sales and at events.',
              de: 'Kundennahe Rollen am Empfang, an der Kasse, im Telekom-Vertrieb und bei Veranstaltungen.' } },
    { word: { en: 'Calculate', de: 'Kalkulieren' },
      text: { en: 'A Bachelor of Commerce in Accounting and an analytical habit with numbers.',
              de: 'Ein Bachelor of Commerce in Accounting und ein analytischer Blick für Zahlen.' } },
    { word: { en: 'Coordinate', de: 'Koordinieren' },
      text: { en: 'Daily coordination of incoming and outgoing goods, schedules and records at Flink SE.',
              de: 'Tägliche Koordination von Wareneingang, Warenausgang, Terminen und Dokumentation bei Flink SE.' } }
  ],

  /* ------------------------------- EDUCATION ------------------------------- */
  /* status: "done" (degree completed) | "course" (coursework, no degree) | "now" (in progress).
     Dates are optional. Newest first. */
  education: [
    { status: 'now', from: '2025-09', to: '',
      org: { en: 'TH Wildau', de: 'TH Wildau' }, place: 'Germany',
      title: { en: 'Master of Arts, European Business Management', de: 'Master of Arts, European Business Management' },
      bullets: [
        { en: 'Field of study: marketing and advertising, within an interdisciplinary programme covering business, administration and law.',
          de: 'Studienfeld: Marketing und Werbung, in einem interdisziplinären Studiengang mit Wirtschaft, Verwaltung und Recht.' }
      ] },
    { status: 'course',
      org: { en: 'TH Wildau', de: 'TH Wildau' }, place: 'Germany',
      title: { en: 'European Business Management, bachelor-level coursework', de: 'European Business Management, Kurse auf Bachelor-Niveau' },
      bullets: [
        { en: 'Coursework before moving on to the Master\'s programme. No bachelor\'s degree was awarded.',
          de: 'Kurse vor dem Wechsel in den Masterstudiengang. Ein Bachelorabschluss wurde nicht erworben.' }
      ] },
    { status: 'course', from: '2023-04', to: '2024-09',
      org: { en: 'Magdeburg University of Applied Sciences', de: 'Hochschule Magdeburg-Stendal' }, place: 'Germany',
      title: { en: 'Sustainable Resources Engineering & Management, coursework', de: 'Sustainable Resources Engineering & Management, Studienleistungen' },
      bullets: [
        { en: 'Coursework in production and supply chain topics. No bachelor\'s degree was awarded.',
          de: 'Kurse zu Produktions- und Lieferkettenthemen. Ein Bachelorabschluss wurde nicht erworben.' },
        { en: 'Research paper: cutting supply chain costs while improving operational performance. It weighs just-in-time inventory systems, ABC classification, network topology and predictive demand planning.',
          de: 'Forschungsarbeit: Senkung von Lieferkettenkosten bei gleichzeitig besserer operativer Leistung. Sie vergleicht Just-in-time-Bestandssysteme, ABC-Klassifizierung, Netzwerktopologie und prädiktive Bedarfsplanung.' }
      ] },
    { status: 'done', from: '2016-09', to: '2020-07',
      org: { en: 'Mansoura University', de: 'Mansoura University' }, place: 'Egypt',
      title: { en: 'Bachelor of Commerce, Accounting (English section)', de: 'Bachelor of Commerce, Accounting (englischsprachiger Zweig)' },
      bullets: [] }
  ],

  /* ------------------------------- EXPERIENCE ------------------------------- */
  /* type: "work" | "volunteer". Sorted automatically by `from`, newest first. */
  experience: [
    { type: 'work', from: '2021-12', to: '2024-11',
      org: { en: 'Flink SE', de: 'Flink SE' }, place: 'Germany',
      role: { en: 'Inbound & Outbound Coordinator · Warehouse Assistant · Rider', de: 'Koordinator Wareneingang & Warenausgang · Lagerhelfer · Fahrer' },
      bullets: [
        { en: 'Practical exposure to logistics, operations, coordination and teamwork.',
          de: 'Praktische Erfahrung in Logistik, Betrieb, Koordination und Teamarbeit.' },
        { en: 'Handled incoming and outgoing goods, processed shipments and coordinated with suppliers and delivery services.',
          de: 'Wareneingang und Warenausgang bearbeitet, Sendungen abgewickelt und mit Lieferanten und Zustelldiensten abgestimmt.' },
        { en: 'Organised and maintained warehouse stock and supported daily warehouse operations.',
          de: 'Lagerbestand organisiert und gepflegt und den täglichen Lagerbetrieb unterstützt.' },
        { en: 'Delivered products to customers as a rider.',
          de: 'Als Fahrer Produkte an Kundinnen und Kunden ausgeliefert.' },
        { en: 'Assisted with onboarding and guidance of new employees.',
          de: 'Bei der Einarbeitung und Begleitung neuer Mitarbeitender unterstützt.' }
      ] },
    { type: 'work', from: '2021-01', to: '2021-09',
      org: { en: 'Etisalat Telecom Corporation', de: 'Etisalat Telecom Corporation' }, place: 'Egypt',
      role: { en: 'Sales Representative (Team Leader)', de: 'Vertriebsmitarbeiter (Teamleiter)' },
      bullets: [
        { en: 'Prospecting, lead generation and building customer relationships.',
          de: 'Kundenakquise, Lead-Generierung und Aufbau von Kundenbeziehungen.' },
        { en: 'Negotiation and sales activities.',
          de: 'Verhandlungen und Vertriebsaktivitäten.' },
        { en: 'Responded to customer needs and resolved issues to keep customers satisfied.',
          de: 'Auf Kundenbedürfnisse eingegangen und Probleme gelöst, um die Kundenzufriedenheit zu sichern.' }
      ] },
    { type: 'volunteer', from: '2019-02', to: '2021-03',
      org: { en: 'AIESEC', de: 'AIESEC' }, place: 'Egypt',
      role: { en: 'Volunteer, Customer Experience', de: 'Ehrenamtlich, Customer Experience' },
      bullets: [
        { en: 'Welcomed participants and answered their questions.',
          de: 'Teilnehmende begrüßt und ihre Fragen beantwortet.' },
        { en: 'Supported positive participant experiences, activities and events.',
          de: 'Positive Teilnehmererfahrungen, Aktivitäten und Veranstaltungen unterstützt.' },
        { en: 'Communicated with people from different backgrounds and worked with international teams.',
          de: 'Mit Menschen aus unterschiedlichen Hintergründen kommuniziert und mit internationalen Teams zusammengearbeitet.' }
      ] },
    { type: 'work', from: '2018-09', to: '2020-01',
      org: { en: 'Chick Restaurant', de: 'Chick Restaurant' }, place: 'Egypt',
      role: { en: 'Cashier', de: 'Kassierer' },
      bullets: [
        { en: 'Customer service and handling customer inquiries.',
          de: 'Kundenservice und Bearbeitung von Kundenanfragen.' },
        { en: 'Cash transactions, including change and receipts.',
          de: 'Barzahlungen, inklusive Wechselgeld und Belegen.' },
        { en: 'Supported restaurant operations and collaborated with the team.',
          de: 'Den Restaurantbetrieb unterstützt und im Team zusammengearbeitet.' }
      ] },
    { type: 'work', from: '2016-08', to: '2018-09',
      org: { en: 'Talla Dental Center', de: 'Talla Dental Center' }, place: 'Egypt',
      role: { en: "Dentist's Assistant · Administrative Secretary", de: 'Zahnarztassistent · Verwaltungssekretär' },
      bullets: [
        { en: 'Appointment scheduling, answering phone calls and inquiries, and administrative support.',
          de: 'Terminplanung, Annahme von Anrufen und Anfragen sowie administrative Unterstützung.' },
        { en: 'Billing and payment-related tasks.',
          de: 'Abrechnung und zahlungsbezogene Aufgaben.' },
        { en: 'Patient care support, sterilisation and equipment maintenance, and daily office operations.',
          de: 'Unterstützung der Patientenversorgung, Sterilisation und Gerätewartung sowie täglicher Praxisbetrieb.' }
      ] }
  ],

  /* --------------------- MARKETING, CREATIVITY & CONTENT --------------------- */
  creative: {
    partner: { en: 'REACH UP Marketing Agency', de: 'REACH UP Marketing Agency' },
    kind: { en: 'Collaboration', de: 'Zusammenarbeit' },
    items: [
      { en: 'Appearing in promotional videos', de: 'Auftritte in Werbevideos' },
      { en: 'Taking part in restaurant advertising content', de: 'Mitwirkung an Werbeinhalten für ein Restaurant' },
      { en: 'Brainstorming creative ideas with other people', de: 'Kreative Ideen gemeinsam mit anderen entwickelt' },
      { en: 'Contributing to content concepts', de: 'Beiträge zu Content-Konzepten' },
      { en: 'Taking part in producing the promotional videos', de: 'Mitwirkung bei der Umsetzung der Werbevideos' }
    ],
    personal: {
      label: { en: 'Personal', de: 'Persönlich' },
      title: { en: 'Football content during the World Cup', de: 'Fußball-Content während der Weltmeisterschaft' },
      text: { en: 'Informal football videos and posts that I made for fun, without professional editing. I use content like this to show my personality, not as commercial work.',
              de: 'Informelle Fußballvideos und -beiträge, die ich zum Spaß und ohne professionelle Bearbeitung gemacht habe. Solche Inhalte nutze ich, um meine Persönlichkeit zu zeigen, nicht als kommerzielle Arbeit.' }
    },
    how: { en: 'My work was collaborative. Ideas were often shaped in discussion with other people. I have not managed professional marketing campaigns on my own.',
           de: 'Meine Arbeit war kollaborativ. Ideen sind oft im Gespräch mit anderen entstanden. Professionelle Marketingkampagnen habe ich nicht eigenständig geleitet.' },
    takeaways: [
      { en: 'Creativity', de: 'Kreativität' },
      { en: 'Communication', de: 'Kommunikation' },
      { en: 'On-camera confidence', de: 'Sicherheit vor der Kamera' },
      { en: 'Teamwork in brainstorming', de: 'Teamarbeit beim Brainstorming' },
      { en: 'Interest in storytelling and audience engagement', de: 'Interesse an Storytelling und Zielgruppenansprache' }
    ]
  },

  /* ----------------------- CULTURE, CONNECTIONS & COMMUNITY ----------------------- */
  /* size: "wide" spans two columns on large screens. Add `image` to show a photo. */
  culture: [
    { id: 'intl', size: 'wide',
      label: { en: 'TH Wildau', de: 'TH Wildau' },
      title: { en: 'Representing Egypt at International Afternoon', de: 'Ägypten beim International Afternoon vertreten' },
      text: { en: 'I took part in the International Afternoon at TH Wildau on three occasions, in different semesters. Each time I represented Egypt and introduced Egyptian traditions, food and cultural experiences to an international university community.',
              de: 'Ich habe an drei Terminen in verschiedenen Semestern am International Afternoon der TH Wildau teilgenommen. Jedes Mal habe ich Ägypten vertreten und ägyptische Traditionen, Essen und kulturelle Erfahrungen einer internationalen Hochschulgemeinschaft vorgestellt.' },
      facts: [
        { k: { en: 'Took part', de: 'Teilnahme' }, v: { en: 'Three times', de: 'Dreimal' } },
        { k: { en: 'Role', de: 'Rolle' }, v: { en: 'Representing Egyptian culture', de: 'Vertretung der ägyptischen Kultur' } }
      ] },
    { id: 'koshary', size: 'wide', feature: true,
      label: { en: 'University cookbook', de: 'Hochschul-Kochbuch' },
      upcoming: { en: '35th-anniversary International Afternoon · 11 November 2026', de: 'International Afternoon zum 35-jährigen Jubiläum · 11. November 2026' },
      title: { en: 'Best Koshary Ever — Sharing a Taste of Egypt', de: 'Best Koshary Ever — ein Geschmack von Ägypten' },
      text: { en: 'TH Wildau asked me for my Egyptian Koshary recipe and its specially designed presentation template. My contribution was selected for the university cookbook that goes with the 35th-anniversary International Afternoon. It is a cultural contribution, not a claim to be a professional cook.',
              de: 'Die TH Wildau hat mich um mein ägyptisches Koshary-Rezept und die eigens gestaltete Präsentationsvorlage gebeten. Mein Beitrag wurde für das Hochschul-Kochbuch zum International Afternoon zum 35-jährigen Jubiläum ausgewählt. Es ist ein kultureller Beitrag, kein Anspruch, ein professioneller Koch zu sein.' },
      facts: [
        { k: { en: 'Dish', de: 'Gericht' }, v: { en: 'Koshary, a traditional Egyptian dish', de: 'Koshary, ein traditionelles ägyptisches Gericht' } },
        { k: { en: 'Contribution', de: 'Beitrag' }, v: { en: 'Recipe and designed presentation template', de: 'Rezept und gestaltete Präsentationsvorlage' } }
      ] },
    { id: 'aiesec', size: 'half',
      label: { en: 'Volunteering', de: 'Ehrenamt' },
      title: { en: 'AIESEC and cultural exchange', de: 'AIESEC und kultureller Austausch' },
      text: { en: 'As a Customer Experience volunteer at AIESEC I welcomed participants, answered their questions and connected with people from different backgrounds, in a multicultural setting.',
              de: 'Als ehrenamtlicher Customer-Experience-Volunteer bei AIESEC habe ich Teilnehmende begrüßt, ihre Fragen beantwortet und Menschen aus verschiedenen Hintergründen verbunden, in einem multikulturellen Umfeld.' },
      facts: [
        { k: { en: 'Period', de: 'Zeitraum' }, v: { en: '02/2019 – 03/2021', de: '02/2019 – 03/2021' } },
        { k: { en: 'Skills', de: 'Stärken' }, v: { en: 'Communication, welcoming people, teamwork', de: 'Kommunikation, Menschen willkommen heißen, Teamarbeit' } }
      ] },
    { id: 'football', size: 'half',
      image: 'assets/berliner-pharaohs-emblem.jpg',
      imageAlt: { en: 'Round embroidered-style emblem reading Berliner Pharaohs, est. 2026, with a gold pharaoh mask beside a gold eagle on a red, black and white field.',
                  de: 'Rundes Emblem im Stickpatch-Stil mit der Aufschrift Berliner Pharaohs, est. 2026, mit goldener Pharaonenmaske neben einem goldenen Adler auf rotem, schwarzem und weißem Grund.' },
      label: { en: 'Personal initiative', de: 'Persönliche Initiative' },
      title: { en: 'Egyptian football community in Germany', de: 'Ägyptische Fußball-Community in Deutschland' },
      text: { en: 'I started a WhatsApp community that brings Egyptian football enthusiasts together in Germany. The idea is to organise informal matches against other national communities, including Moroccan ones. Long term, I would like to grow it into friendly tournaments and informal leagues, inspired by the Ramadan football tournaments in Egypt. I also designed the emblem and team identity.',
              de: 'Ich habe eine WhatsApp-Community gegründet, die ägyptische Fußballfans in Deutschland zusammenbringt. Die Idee ist, informelle Spiele gegen andere Nationalitäten-Communities zu organisieren, darunter marokkanische. Langfristig möchte ich daraus freundschaftliche Turniere und informelle Ligen entwickeln, inspiriert von den Ramadan-Fußballturnieren in Ägypten. Das Emblem und die Teamidentität habe ich ebenfalls gestaltet.' },
      note: { en: 'An informal community, not a registered club or organisation.', de: 'Eine informelle Community, kein eingetragener Verein und keine Organisation.' },
      facts: [
        { k: { en: 'Shows', de: 'Zeigt' }, v: { en: 'Initiative, community building, organising', de: 'Initiative, Gemeinschaftsbildung, Organisation' } },
        { k: { en: 'Emblem', de: 'Emblem' }, v: { en: 'Berliner Pharaohs, red, gold, black, white', de: 'Berliner Pharaohs, Rot, Gold, Schwarz, Weiß' } }
      ] }
  ],

  /* ---------------------------------- TRAVEL ---------------------------------- */
  /* Add a destination by copying an object. `places` is optional. Add `image` to show a photo. */
  travel: [
    { country: { en: 'United States', de: 'USA' }, region: { en: 'North America', de: 'Nordamerika' },
      places: { en: 'Raleigh · Houston · Virginia · Alabama', de: 'Raleigh · Houston · Virginia · Alabama' } },
    { country: { en: 'Poland', de: 'Polen' }, region: { en: 'Europe', de: 'Europa' } },
    { country: { en: 'Belgium', de: 'Belgien' }, region: { en: 'Europe', de: 'Europa' } },
    { country: { en: 'Albania', de: 'Albanien' }, region: { en: 'Europe', de: 'Europa' } },
    { country: { en: 'Greece', de: 'Griechenland' }, region: { en: 'Europe', de: 'Europa' } },
    { country: { en: 'Tunisia', de: 'Tunesien' }, region: { en: 'Africa', de: 'Afrika' } }
  ],

  /* -------------------------------- SKILLS -------------------------------- */
  skills: [
    { id: 'hands-on', title: { en: 'Hands-on experience', de: 'Praktische Erfahrung' },
      note: { en: 'Used in real jobs and projects.', de: 'In echten Jobs und Projekten angewendet.' },
      items: [
        { en: 'Customer service', de: 'Kundenservice' },
        { en: 'Sales and lead generation', de: 'Vertrieb und Lead-Generierung' },
        { en: 'Inbound and outbound coordination', de: 'Koordination von Wareneingang und Warenausgang' },
        { en: 'Warehouse operations', de: 'Lagerbetrieb' },
        { en: 'Scheduling and documentation', de: 'Terminplanung und Dokumentation' },
        { en: 'Cash handling and billing', de: 'Kassen- und Abrechnungsarbeit' },
        { en: 'Leading a sales team', de: 'Leitung eines Vertriebsteams' },
        { en: 'On-camera and promotional content (collaborative)', de: 'Auftritte vor der Kamera und Werbeinhalte (im Team)' },
        { en: 'Travel planning: visas, flights, bookings', de: 'Reiseplanung: Visa, Flüge, Buchungen' },
        { en: 'Community organising', de: 'Community-Organisation' }
      ] },
    { id: 'studied', title: { en: 'Studied', de: 'Studiert' },
      note: { en: 'Learned through my studies.', de: 'Im Studium gelernt.' },
      items: [
        { en: 'Accounting', de: 'Rechnungswesen' },
        { en: 'Supply chain management', de: 'Supply Chain Management' },
        { en: 'Inventory control and demand planning', de: 'Bestandsführung und Bedarfsplanung' },
        { en: 'European business management', de: 'European Business Management' },
        { en: 'Marketing and advertising', de: 'Marketing und Werbung' }
      ] },
    { id: 'toolkit', title: { en: 'Toolkit', de: 'Werkzeuge' },
      note: { en: 'Named on my CV.', de: 'In meinem Lebenslauf genannt.' },
      items: [
        { en: 'Microsoft Office (Word, Excel, PowerPoint)', de: 'Microsoft Office (Word, Excel, PowerPoint)' },
        { en: 'SQL', de: 'SQL' }, { en: 'Python (basic)', de: 'Python (Grundkenntnisse)' }, { en: 'MATLAB', de: 'MATLAB' }
      ] },
    { id: 'exploring', title: { en: 'Exploring', de: 'Ich erkunde' }, dashed: true,
      note: { en: 'Interests, not claims of expertise.', de: 'Interessen, kein Expertenanspruch.' },
      items: [
        { en: 'Finance', de: 'Finanzen' },
        { en: 'Marketing, branding and content strategy', de: 'Marketing, Branding und Content-Strategie' },
        { en: 'Social media', de: 'Social Media' },
        { en: 'Human resources: recruitment, onboarding, talent development', de: 'Personalwesen: Recruiting, Onboarding, Talententwicklung' },
        { en: 'SAP and ERP systems', de: 'SAP- und ERP-Systeme' }
      ] }
  ],

  languages: [
    { name: { en: 'Arabic', de: 'Arabisch' }, native: true, level: { en: 'Native', de: 'Muttersprache' } },
    { name: { en: 'English', de: 'Englisch' }, step: 5, level: { en: 'C1', de: 'C1' } },
    { name: { en: 'German', de: 'Deutsch' }, step: 4, level: { en: 'B2', de: 'B2' } }
  ],

  /* ------------------------ PROFESSIONAL DIRECTION ------------------------ */
  routes: [
    { name: { en: 'Finance', de: 'Finanzen' },
      text: { en: 'I completed a Bachelor of Commerce in Accounting, handled billing and cash carefully, and enjoy working with numbers. Finance is where I want to look first.',
              de: 'Ich habe einen Bachelor of Commerce in Accounting abgeschlossen, Abrechnung und Kasse sorgfältig geführt und arbeite gern mit Zahlen. Bei Finanzen möchte ich zuerst hinschauen.' },
      basis: { en: 'Based on: Mansoura Accounting degree, billing at Talla Dental Center, cashier work',
               de: 'Grundlage: Accounting-Abschluss in Mansoura, Abrechnung im Talla Dental Center, Kassentätigkeit' } },
    { name: { en: 'Human resources', de: 'Personalwesen' },
      text: { en: 'I like helping people get started and feel welcome. I want practical experience in recruitment, employee administration, onboarding and talent development.',
              de: 'Ich helfe gern, dass Menschen gut ankommen und sich willkommen fühlen. Ich möchte praktische Erfahrung in Recruiting, Personaladministration, Onboarding und Talententwicklung sammeln.' },
      basis: { en: 'Based on: onboarding support at Flink SE, recruitment support at AIESEC',
               de: 'Grundlage: Einarbeitungsunterstützung bei Flink SE, Recruiting-Unterstützung bei AIESEC' } },
    { name: { en: 'Marketing', de: 'Marketing' },
      text: { en: "My Master's field of study is marketing and advertising. I enjoy creative content and want to grow in branding, content strategy and social media.",
              de: 'Das Studienfeld meines Masters ist Marketing und Werbung. Ich arbeite gern kreativ an Inhalten und möchte mich in Branding, Content-Strategie und Social Media weiterentwickeln.' },
      basis: { en: 'Based on: Master at TH Wildau, the REACH UP collaboration, my football community identity',
               de: 'Grundlage: Master an der TH Wildau, die Zusammenarbeit mit REACH UP, die Identität meiner Fußball-Community' } }
  ],

  /* ------------------------ LEGAL PAGES (placeholders) ------------------------ */
  legal: [
    { id: 'impressum',
      title: { en: 'Impressum', de: 'Impressum' },
      body: [
        { en: 'PLACEHOLDER. Before this site goes online, replace this text with your legal notice.',
          de: 'PLATZHALTER. Ersetzen Sie diesen Text vor der Veröffentlichung durch Ihre Anbieterkennzeichnung.' },
        { en: 'German law generally requires a legal notice for professional or business-like websites (§ 5 DDG). It usually includes your full name, a postal address where you can be reached, and an email address. Check whether this applies to your site, and what exactly it must contain.',
          de: 'Das deutsche Recht verlangt für berufliche oder geschäftsmäßige Websites in der Regel eine Anbieterkennzeichnung (§ 5 DDG). Sie enthält meist den vollständigen Namen, eine ladungsfähige Postanschrift und eine E-Mail-Adresse. Prüfen Sie, ob das auf Ihre Seite zutrifft und was genau enthalten sein muss.' },
        { en: '[Full name] · [Street and number] · [Postcode and city] · [Email]',
          de: '[Vollständiger Name] · [Straße und Hausnummer] · [PLZ und Ort] · [E-Mail]' }
      ] },
    { id: 'datenschutz',
      title: { en: 'Datenschutz', de: 'Datenschutz' },
      body: [
        { en: 'PLACEHOLDER. Have this privacy notice checked before publishing.',
          de: 'PLATZHALTER. Lassen Sie diese Datenschutzerklärung vor der Veröffentlichung prüfen.' },
        { en: 'What this site does: it has no contact form, no cookies and no analytics. It saves your language choice in your own browser (local storage). The email address and LinkedIn profile are plain links.',
          de: 'Was diese Website tut: Sie hat kein Kontaktformular, keine Cookies und kein Tracking. Ihre Sprachwahl wird in Ihrem eigenen Browser gespeichert (Local Storage). E-Mail-Adresse und LinkedIn-Profil sind einfache Links.' },
        { en: 'Fonts: the site currently loads its fonts from Google Fonts, which sends the visitor’s IP address to Google. For a German site, host the fonts yourself (see README) and then remove this paragraph.',
          de: 'Schriften: Die Website lädt ihre Schriften derzeit von Google Fonts, wobei die IP-Adresse der Besucher an Google übertragen wird. Für eine deutsche Website sollten Sie die Schriften selbst hosten (siehe README) und diesen Absatz dann entfernen.' },
        { en: 'Hosting: add your hosting provider and its data processing details here.',
          de: 'Hosting: Tragen Sie hier Ihren Hosting-Anbieter und dessen Angaben zur Datenverarbeitung ein.' },
        { en: '[Controller name and contact]',
          de: '[Name und Kontakt des Verantwortlichen]' }
      ] }
  ],

  meta: {
    title: { en: 'Seif Elemam', de: 'Seif Elemam' },
    description: {
      en: 'Portfolio of Seif Elemam, an Egyptian business student in Germany with an accounting background and interests in finance, marketing and HR.',
      de: 'Portfolio von Seif Elemam, ägyptischer Wirtschaftsstudent in Deutschland mit Accounting-Hintergrund und Interesse an Finanzen, Marketing und Personalwesen.'
    }
  }
};
