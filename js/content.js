/* ==========================================================================
   CONTENT — the single place to edit text, experience, projects and skills.
   Every visible string is { en: "...", de: "..." } so both languages stay in sync.
   To add an entry, copy an existing object in the list and change its fields.
   Dates use "YYYY-MM". Leave `to` empty ("") for "present".
   ========================================================================== */
window.SITE = {

  /* ------------------------------- UI TEXT ------------------------------- */
  ui: {
    en: {
      'skip': 'Skip to content',
      'nav.about': 'About', 'nav.experience': 'Experience', 'nav.projects': 'Projects',
      'nav.skills': 'Skills', 'nav.direction': 'Direction', 'nav.contact': 'Contact',
      'nav.menu': 'Menu',
      'hero.eyebrow': 'Portfolio · Berlin',
      'hero.h1a': 'Creative mind.', 'hero.h1b': 'Business focus.', 'hero.h1c': 'Digital future.',
      'hero.lede': "I'm Seif Elemam, a Master's student in European Business Management in Berlin. I bring hands-on experience in operations, customer service and sales from Egypt and Germany, and I'm building my path in digital marketing and business.",
      'hero.cta1': 'See my route', 'hero.cta2': 'Get in touch',
      'label.aria': 'Quick facts about Seif Elemam',
      'label.from': 'From', 'label.to': 'To',
      'label.studying': 'Studying', 'label.studying.v': 'MA European Business Management',
      'label.languages': 'Languages', 'label.languages.v': 'Arabic · English · German',
      'label.experience': 'Experience', 'label.experience.v': '2016–2024 · 5 organisations',
      'photo.alt': 'Portrait of Seif Elemam: a smiling man with glasses and a beard, wearing a dark suit and a blue tie.',

      'about.eyebrow': 'About',
      'about.title': 'Background first, direction second.',
      'about.p1': 'My working life started in Mansoura, Egypt, in jobs where you deal with people all day: a dental office front desk, a restaurant till, a telecom sales team. I studied Accounting at Mansoura University at the same time and volunteered with AIESEC on participant experience.',
      'about.p2': 'Since 2021 I have worked in Berlin. At Flink SE I was a rider, a warehouse assistant and an inbound and outbound coordinator, while I studied Sustainable Resources Engineering in Magdeburg and then European Business Management in Wildau.',
      'about.p3': "Today I'm doing my Master's at TH Wildau, in a programme that covers business, administration and law with marketing and advertising as its field of study. I haven't chosen a specialization yet, and I'd rather say so than pretend otherwise.",
      'about.view.title': 'What is different about my view',
      'about.view': 'Most of my experience sits on the operational side of a business, where you see how orders, people and information really move. I now study marketing and strategy with that practical view in mind.',
      'about.outside': 'Outside work: sports, travelling and cultural exchange.',

      'exp.eyebrow': 'Experience',
      'exp.title': 'The route so far',
      'exp.lede': 'Work and study, newest stop first.',
      'exp.f.all': 'All', 'exp.f.work': 'Work', 'exp.f.edu': 'Education',
      'exp.work': 'Work', 'exp.edu': 'Education',
      'exp.present': 'Present',
      'exp.cv': 'Open my CV (PDF)',

      'proj.eyebrow': 'Projects',
      'proj.title': 'Selected work',
      'proj.lede': 'Two projects so far. More will be added as I build them.',

      'skills.eyebrow': 'Skills',
      'skills.title': 'What I can show, and what I am still learning',
      'skills.lede': 'Grouped by how I came to know each one. I leave out skill bars on purpose.',
      'skills.langs': 'Languages',
      'skills.scale': 'CEFR scale, A1 to C2',

      'dir.eyebrow': 'Direction',
      'dir.title': "Three routes I'm testing",
      'dir.lede': "I haven't chosen a specialization yet. These are the routes I'm weighing, and what each one rests on.",
      'dir.next': 'Next stop',
      'dir.next.v': 'A role, internship or working-student position where I can test one of these routes in practice.',

      'contact.eyebrow': 'Contact',
      'contact.title': "Let's talk.",
      'contact.lede': "If you're hiring, building a team or just curious about my path, write to me.",
      'contact.email': 'Email', 'contact.linkedin': 'LinkedIn', 'contact.location': 'Based in',
      'contact.location.v': 'Berlin, Germany',
      'contact.copy': 'Copy', 'contact.copied': 'Copied', 'contact.copyfail': 'Select and copy',

      'foot.rights': '© 2026 Seif Elemam',
      'foot.top': 'Back to top',
      'foot.impressum': 'Impressum', 'foot.privacy': 'Datenschutz',
      'legal.back': 'Back to the site'
    },
    de: {
      'skip': 'Zum Inhalt springen',
      'nav.about': 'Über mich', 'nav.experience': 'Werdegang', 'nav.projects': 'Projekte',
      'nav.skills': 'Fähigkeiten', 'nav.direction': 'Richtung', 'nav.contact': 'Kontakt',
      'nav.menu': 'Menü',
      'hero.eyebrow': 'Portfolio · Berlin',
      'hero.h1a': 'Kreatives Denken.', 'hero.h1b': 'Wirtschaftlicher Fokus.', 'hero.h1c': 'Digitale Zukunft.',
      'hero.lede': 'Ich bin Seif Elemam, Masterstudent im Studiengang European Business Management in Berlin. Ich bringe praktische Erfahrung in Betrieb, Kundenservice und Vertrieb aus Ägypten und Deutschland mit und gehe meinen Weg in Digital Marketing und Wirtschaft.',
      'hero.cta1': 'Meinen Weg ansehen', 'hero.cta2': 'Kontakt aufnehmen',
      'label.aria': 'Kurzfakten zu Seif Elemam',
      'label.from': 'Von', 'label.to': 'Nach',
      'label.studying': 'Studium', 'label.studying.v': 'MA European Business Management',
      'label.languages': 'Sprachen', 'label.languages.v': 'Arabisch · Englisch · Deutsch',
      'label.experience': 'Erfahrung', 'label.experience.v': '2016–2024 · 5 Organisationen',
      'photo.alt': 'Porträt von Seif Elemam: ein lächelnder Mann mit Brille und Bart in dunklem Anzug und blauer Krawatte.',

      'about.eyebrow': 'Über mich',
      'about.title': 'Erst der Hintergrund, dann die Richtung.',
      'about.p1': 'Mein Berufsleben begann in Mansoura, Ägypten, in Jobs mit ständigem Kontakt zu Menschen: am Empfang einer Zahnarztpraxis, an der Restaurantkasse, in einem Telekom-Vertriebsteam. Gleichzeitig habe ich an der Mansoura University Accounting studiert und mich bei AIESEC ehrenamtlich um die Teilnehmererfahrung gekümmert.',
      'about.p2': 'Seit 2021 arbeite ich in Berlin. Bei Flink SE war ich Fahrer, Lagerhelfer und Koordinator für Wareneingang und Warenausgang, während ich in Magdeburg Sustainable Resources Engineering und anschließend in Wildau European Business Management studiert habe.',
      'about.p3': 'Heute absolviere ich meinen Master an der TH Wildau, in einem Studiengang, der Wirtschaft, Verwaltung und Recht abdeckt und Marketing und Werbung als Studienfeld hat. Eine Spezialisierung habe ich noch nicht gewählt und sage das lieber offen, als etwas vorzutäuschen.',
      'about.view.title': 'Was meinen Blick besonders macht',
      'about.view': 'Den größten Teil meiner Erfahrung habe ich auf der operativen Seite eines Unternehmens gesammelt, dort, wo man sieht, wie Aufträge, Menschen und Informationen wirklich fließen. Mit diesem praktischen Blick studiere ich jetzt Marketing und Strategie.',
      'about.outside': 'Außerhalb der Arbeit: Sport, Reisen und kultureller Austausch.',

      'exp.eyebrow': 'Werdegang',
      'exp.title': 'Der Weg bis hierher',
      'exp.lede': 'Arbeit und Studium, die jüngste Station zuerst.',
      'exp.f.all': 'Alle', 'exp.f.work': 'Arbeit', 'exp.f.edu': 'Ausbildung',
      'exp.work': 'Arbeit', 'exp.edu': 'Ausbildung',
      'exp.present': 'heute',
      'exp.cv': 'Lebenslauf öffnen (PDF)',

      'proj.eyebrow': 'Projekte',
      'proj.title': 'Ausgewählte Arbeiten',
      'proj.lede': 'Bisher zwei Projekte. Weitere kommen dazu, sobald ich sie umsetze.',

      'skills.eyebrow': 'Fähigkeiten',
      'skills.title': 'Was ich zeigen kann und was ich noch lerne',
      'skills.lede': 'Gruppiert danach, wie ich die jeweilige Fähigkeit kennengelernt habe. Auf Kompetenzbalken verzichte ich bewusst.',
      'skills.langs': 'Sprachen',
      'skills.scale': 'GER-Skala, A1 bis C2',

      'dir.eyebrow': 'Richtung',
      'dir.title': 'Drei Wege, die ich teste',
      'dir.lede': 'Eine Spezialisierung habe ich noch nicht gewählt. Das sind die Wege, die ich abwäge, und worauf jeder beruht.',
      'dir.next': 'Nächster Halt',
      'dir.next.v': 'Eine Stelle, ein Praktikum oder eine Werkstudententätigkeit, in der ich einen dieser Wege praktisch ausprobieren kann.',

      'contact.eyebrow': 'Kontakt',
      'contact.title': 'Sprechen wir.',
      'contact.lede': 'Wenn Sie einstellen, ein Team aufbauen oder einfach neugierig auf meinen Weg sind, schreiben Sie mir.',
      'contact.email': 'E-Mail', 'contact.linkedin': 'LinkedIn', 'contact.location': 'Wohnort',
      'contact.location.v': 'Berlin, Deutschland',
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

  /* ------------------- EXPERIENCE & EDUCATION (Route) ------------------- */
  /* type: "work" | "edu". The list sorts itself by `from`, newest first. */
  experience: [
    { type: 'edu', from: '2025-09', to: '',
      org: { en: 'TH Wildau', de: 'TH Wildau' },
      place: 'Wildau, DE',
      role: { en: 'Master of Arts, European Business Management', de: 'Master of Arts, European Business Management' },
      bullets: [
        { en: 'Field of study: marketing and advertising, within an interdisciplinary programme covering business, administration and law.',
          de: 'Studienfeld: Marketing und Werbung, in einem interdisziplinären Studiengang mit Wirtschaft, Verwaltung und Recht.' }
      ] },
    { type: 'edu', from: '2024-09', to: '2025-08',
      org: { en: 'Technische Hochschule Wildau', de: 'Technische Hochschule Wildau' },
      place: 'Wildau, DE',
      role: { en: 'Bachelor of Arts, European Business Management', de: 'Bachelor of Arts, European Business Management' },
      bullets: [] },
    { type: 'edu', from: '2023-04', to: '2024-09',
      org: { en: 'Hochschule Magdeburg-Stendal', de: 'Hochschule Magdeburg-Stendal' },
      place: 'Magdeburg, DE',
      role: { en: 'Bachelor of Engineering, Sustainable Resources Engineering & Management', de: 'Bachelor of Engineering, Sustainable Resources Engineering & Management' },
      bullets: [
        { en: 'Research paper on cutting supply chain costs while improving operational performance, graded 2.3.',
          de: 'Forschungsarbeit zur Senkung von Lieferkettenkosten bei gleichzeitig besserer operativer Leistung, Note 2,3.' }
      ] },
    { type: 'work', from: '2021-12', to: '2024-11',
      org: { en: 'Flink SE', de: 'Flink SE' },
      place: 'Berlin, DE',
      role: { en: 'Inbound & Outbound Coordinator · Warehouse Assistant · Rider', de: 'Koordinator Wareneingang & Warenausgang · Lagerhelfer · Fahrer' },
      bullets: [
        { en: 'Managed incoming and outgoing goods, processed shipments and coordinated with suppliers and delivery services.',
          de: 'Wareneingang und Warenausgang gesteuert, Sendungen bearbeitet und mit Lieferanten und Zustelldiensten abgestimmt.' },
        { en: 'Organised and maintained stock, supported daily warehouse operations and kept the space clean and in order.',
          de: 'Bestand organisiert und gepflegt, den täglichen Lagerbetrieb unterstützt und für Sauberkeit und Ordnung gesorgt.' },
        { en: 'Delivered products to customers on time, with safe handling.',
          de: 'Produkte pünktlich und sicher an Kundinnen und Kunden ausgeliefert.' },
        { en: 'Assisted with onboarding and guidance of new employees.',
          de: 'Bei der Einarbeitung und Begleitung neuer Mitarbeitender unterstützt.' }
      ] },
    { type: 'work', from: '2021-01', to: '2021-09',
      org: { en: 'Etisalat Telecom Corporation', de: 'Etisalat Telecom Corporation' },
      place: 'Mansoura, EG',
      role: { en: 'Sales Representative (Team Leader)', de: 'Vertriebsmitarbeiter (Teamleiter)' },
      bullets: [
        { en: 'Prospecting and lead generation, and building customer relationships.',
          de: 'Kundenakquise und Lead-Generierung sowie Aufbau von Kundenbeziehungen.' },
        { en: 'Negotiating pricing and closing reports.',
          de: 'Preisverhandlungen und Abschlussberichte.' },
        { en: 'Resolving issues to keep customers satisfied.',
          de: 'Probleme gelöst, um die Kundenzufriedenheit zu sichern.' }
      ] },
    { type: 'work', from: '2019-02', to: '2021-03',
      org: { en: 'AIESEC', de: 'AIESEC' },
      place: 'Mansoura, EG',
      role: { en: 'Volunteer, Customer Experience', de: 'Ehrenamtlich, Customer Experience' },
      bullets: [
        { en: 'Welcomed participants and answered questions about products, services and events.',
          de: 'Teilnehmende begrüßt und Fragen zu Produkten, Services und Veranstaltungen beantwortet.' },
        { en: 'Engaged with participants during events and reported maintenance or safety issues.',
          de: 'Teilnehmende bei Veranstaltungen betreut und Wartungs- oder Sicherheitsmängel gemeldet.' },
        { en: 'Supported recruitment and event organisation, and worked with international teams.',
          de: 'Rekrutierung und Eventorganisation unterstützt und mit internationalen Teams zusammengearbeitet.' }
      ] },
    { type: 'work', from: '2018-09', to: '2020-01',
      org: { en: 'Chick Restaurant', de: 'Chick Restaurant' },
      place: 'Mansoura, EG',
      role: { en: 'Cashier', de: 'Kassierer' },
      bullets: [
        { en: 'Helped customers with questions and resolved issues.',
          de: 'Kundinnen und Kunden bei Fragen geholfen und Probleme gelöst.' },
        { en: 'Handled cash transactions accurately, including change and receipts.',
          de: 'Barzahlungen korrekt abgewickelt, inklusive Wechselgeld und Belegen.' },
        { en: 'Followed company procedures and worked with the team to keep operations efficient.',
          de: 'Unternehmensabläufe eingehalten und im Team für effiziente Abläufe gesorgt.' }
      ] },
    { type: 'edu', from: '2016-09', to: '2020-07',
      org: { en: 'Mansoura University', de: 'Mansoura University' },
      place: 'Mansoura, EG',
      role: { en: 'Bachelor of Commerce, Accounting (English section)', de: 'Bachelor of Commerce, Accounting (englischsprachiger Zweig)' },
      bullets: [] },
    { type: 'work', from: '2016-08', to: '2018-09',
      org: { en: 'Talla Dental Center', de: 'Talla Dental Center' },
      place: 'Mansoura, EG',
      role: { en: "Dentist's Assistant (Secretary)", de: 'Zahnarztassistent (Sekretariat)' },
      bullets: [
        { en: 'Managed the appointment calendar, answered phone calls and handled patient scheduling.',
          de: 'Terminkalender geführt, Anrufe beantwortet und Patiententermine koordiniert.' },
        { en: 'Handled billing and insurance claims and processed payments.',
          de: 'Abrechnung und Versicherungsansprüche bearbeitet und Zahlungen verbucht.' },
        { en: 'Supported patient care and kept equipment sterilised and maintained.',
          de: 'Patientenversorgung unterstützt sowie Geräte sterilisiert und gewartet.' }
      ] }
  ],

  /* ------------------------------- PROJECTS ------------------------------- */
  /* Only fields that are documented are shown. Add `facts` rows as you gather details
     (role, approach, tools, outcome, what you learned). */
  projects: [
    { id: 'paper', kind: 'paper',
      label: { en: 'Academic research', de: 'Akademische Forschung' },
      title: { en: 'Cutting Supply Chain Costs While Improving Operational Performance', de: 'Cutting Supply Chain Costs While Improving Operational Performance' },
      stat: { value: '2.3', de_value: '2,3',
              label: { en: 'Grade, German scale (1.0 is best)', de: 'Note, deutsche Skala (1,0 ist die beste)' } },
      summary: { en: 'A research paper that weighs inventory, classification, network and planning methods for a supply chain that has to cost less and perform better.',
                 de: 'Eine Forschungsarbeit, die Methoden für Bestand, Klassifizierung, Netzwerk und Planung abwägt, damit eine Lieferkette günstiger wird und besser läuft.' },
      facts: [
        { k: { en: 'Type', de: 'Art' }, v: { en: 'Research paper', de: 'Forschungsarbeit' } },
        { k: { en: 'Context', de: 'Kontext' }, v: { en: 'Sustainable Resources Engineering & Management, Hochschule Magdeburg-Stendal', de: 'Sustainable Resources Engineering & Management, Hochschule Magdeburg-Stendal' } },
        { k: { en: 'Focus', de: 'Schwerpunkt' }, v: { en: 'Just-in-time inventory systems, ABC classification, network topology, predictive demand planning', de: 'Just-in-time-Bestandssysteme, ABC-Klassifizierung, Netzwerktopologie, prädiktive Bedarfsplanung' } }
      ] },
    { id: 'pharaohs', kind: 'brand',
      label: { en: 'Personal project', de: 'Persönliches Projekt' },
      title: { en: 'Berliner Pharaohs', de: 'Berliner Pharaohs' },
      image: 'assets/berliner-pharaohs-emblem.jpg',
      imageAlt: { en: 'Round embroidered-style emblem reading Berliner Pharaohs, est. 2026, with a gold pharaoh mask beside a gold eagle on a red, black and white field.',
                  de: 'Rundes Emblem im Stickpatch-Stil mit der Aufschrift Berliner Pharaohs, est. 2026, mit goldener Pharaonenmaske neben einem goldenen Adler auf rotem, schwarzem und weißem Grund.' },
      summary: { en: 'An emblem that joins an Egyptian pharaoh mask and a German eagle in red, gold, black and white, drawn in the style of an embroidered patch.',
                 de: 'Ein Emblem, das eine ägyptische Pharaonenmaske und einen deutschen Adler in Rot, Gold, Schwarz und Weiß verbindet, im Stil eines gestickten Patches.' },
      facts: [
        { k: { en: 'Type', de: 'Art' }, v: { en: 'Brand identity', de: 'Markenidentität' } },
        { k: { en: 'Year', de: 'Jahr' }, v: { en: '2026', de: '2026' } },
        { k: { en: 'Colours', de: 'Farben' }, v: { en: 'Red, gold, black, white', de: 'Rot, Gold, Schwarz, Weiß' } }
      ] }
  ],

  /* -------------------------------- SKILLS -------------------------------- */
  skills: [
    { id: 'hands-on', title: { en: 'Hands-on experience', de: 'Praktische Erfahrung' },
      note: { en: 'Used in real jobs.', de: 'In echten Jobs angewendet.' },
      items: [
        { en: 'Customer service', de: 'Kundenservice' },
        { en: 'Sales and lead generation', de: 'Vertrieb und Lead-Generierung' },
        { en: 'Inbound and outbound coordination', de: 'Koordination von Wareneingang und Warenausgang' },
        { en: 'Warehouse operations', de: 'Lagerbetrieb' },
        { en: 'Scheduling and documentation', de: 'Terminplanung und Dokumentation' },
        { en: 'Cash handling and billing', de: 'Kassen- und Abrechnungsarbeit' },
        { en: 'Leading a sales team', de: 'Leitung eines Vertriebsteams' }
      ] },
    { id: 'studied', title: { en: 'Studied', de: 'Studiert' },
      note: { en: 'Learned through my degrees.', de: 'Im Studium gelernt.' },
      items: [
        { en: 'Supply chain management', de: 'Supply Chain Management' },
        { en: 'Inventory control and demand planning', de: 'Bestandsführung und Bedarfsplanung' },
        { en: 'Accounting', de: 'Rechnungswesen' },
        { en: 'European business management', de: 'European Business Management' },
        { en: 'Marketing and advertising', de: 'Marketing und Werbung' }
      ] },
    { id: 'toolkit', title: { en: 'Toolkit', de: 'Werkzeuge' },
      note: { en: 'Named on my CV.', de: 'In meinem Lebenslauf genannt.' },
      items: [
        { en: 'Microsoft Office (Word, Excel, PowerPoint)', de: 'Microsoft Office (Word, Excel, PowerPoint)' },
        { en: 'Python', de: 'Python' }, { en: 'SQL', de: 'SQL' }, { en: 'MATLAB', de: 'MATLAB' }
      ] },
    { id: 'exploring', title: { en: 'Exploring', de: 'Ich erkunde' }, dashed: true,
      note: { en: 'Interests, not claims of expertise.', de: 'Interessen, kein Expertenanspruch.' },
      items: [
        { en: 'Branding', de: 'Branding' },
        { en: 'Content creation and social media', de: 'Content-Erstellung und Social Media' },
        { en: 'Digital strategy', de: 'Digitalstrategie' },
        { en: 'Analytics', de: 'Analytics' },
        { en: 'Performance marketing', de: 'Performance Marketing' },
        { en: 'Business development', de: 'Business Development' },
        { en: 'HR: recruitment, onboarding, talent development', de: 'HR: Recruiting, Onboarding, Talententwicklung' }
      ] }
  ],

  /* Languages. `step` is the CEFR position 1 (A1) to 6 (C2); `native` fills the whole bar. */
  languages: [
    { name: { en: 'Arabic', de: 'Arabisch' }, native: true, level: { en: 'Native', de: 'Muttersprache' } },
    { name: { en: 'English', de: 'Englisch' }, step: 5, level: { en: 'C1', de: 'C1' } },
    { name: { en: 'German', de: 'Deutsch' }, step: 4, level: { en: 'B2', de: 'B2' } }
  ],

  /* ------------------------ PROFESSIONAL DIRECTION ------------------------ */
  routes: [
    { name: { en: 'Marketing & digital', de: 'Marketing & Digitales' },
      text: { en: "My Master's field of study is marketing and advertising. I'm curious about branding, content, social media and analytics.",
              de: 'Das Studienfeld meines Masters ist Marketing und Werbung. Mich interessieren Branding, Content, Social Media und Analytics.' },
      basis: { en: 'Based on: Master at TH Wildau, the Berliner Pharaohs emblem',
               de: 'Grundlage: Master an der TH Wildau, das Berliner-Pharaohs-Emblem' } },
    { name: { en: 'People & HR', de: 'Menschen & HR' },
      text: { en: 'My CV points toward HR: recruitment support, onboarding and employee administration.',
              de: 'Mein Lebenslauf weist in Richtung HR: Recruiting-Unterstützung, Onboarding und Personaladministration.' },
      basis: { en: 'Based on: onboarding support at Flink SE, recruitment support at AIESEC',
               de: 'Grundlage: Einarbeitung bei Flink SE, Recruiting-Unterstützung bei AIESEC' } },
    { name: { en: 'Operations & business', de: 'Betrieb & Wirtschaft' },
      text: { en: 'Years of coordination and logistics work, plus a research paper on supply chain costs.',
              de: 'Jahre praktischer Koordinations- und Logistikarbeit, dazu eine Forschungsarbeit zu Lieferkettenkosten.' },
      basis: { en: 'Based on: Flink SE, Etisalat, the 2.3 research paper',
               de: 'Grundlage: Flink SE, Etisalat, die Forschungsarbeit mit Note 2,3' } }
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
      en: 'Portfolio of Seif Elemam, Master’s student in European Business Management in Berlin, with experience in operations, customer service and sales.',
      de: 'Portfolio von Seif Elemam, Masterstudent European Business Management in Berlin, mit Erfahrung in Betrieb, Kundenservice und Vertrieb.'
    }
  }
};
