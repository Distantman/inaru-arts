export type DisciplineCategory =
  | "all"
  | "wedding"
  | "murals"
  | "modeling"
  | "fashion"
  | "workshops"
  | "personal";

export type AspectRatioType =
  | "portrait-tall" // 2:3
  | "portrait" // 3:4
  | "portrait-editorial" // 4:5
  | "square" // 1:1
  | "landscape-classic" // 4:3
  | "landscape-editorial" // 16:10
  | "landscape-wide"; // 16:9

export interface ArtworkItem {
  id: string;
  title: string;
  subtitle?: string;
  category: Exclude<DisciplineCategory, "all">;
  categoryLabel: string;
  medium: string;
  dimensionsOrDuration?: string;
  year: string;
  locationOrClient?: string;
  description: string;
  annotation?: string;
  image: string;
  alt: string;
  aspectRatio: AspectRatioType;
  width: number;
  height: number;
  featuredInArchive?: boolean;
  isSamplePlaceholder: boolean;
}

export interface MuralProject {
  id: string;
  number: string;
  title: string;
  spaceType: string;
  location: string;
  client: string;
  surfaceAndMedium: string;
  dimensions: string;
  year: string;
  description: string;
  curatorNote: string;
  primaryImage: ArtworkItem;
  detailImage: ArtworkItem;
}

export interface WorkshopOffering {
  id: string;
  code: string;
  title: string;
  format: string;
  duration: string;
  groupSize: string;
  level: string;
  description: string;
  curriculumHighlights: string[];
  materialsNote: string;
  inquirySubject: string;
}

export interface ServiceOffering {
  id: string;
  index: string;
  title: string;
  categoryTag: string;
  summary: string;
  deliverables: string[];
  idealFor: string;
  ctaLabel: string;
  inquirySubject: string;
}

export const artistProfile = {
  // Artist name wordmark and studio identity
  name: "Inaru",
  wordmarkSubtitle: "Atelier of Line, Space & Observation",
  siteUrl: "https://inaru-arts.pages.dev",
  headline: "Drawing life as it happens.",
  supportingText:
    "Live illustration, painted spaces, and the art of seeing differently.",
  locationPlaceholder: "Practicing internationally • Available for Commissions & Events Worldwide",
  availabilityBanner:
    "Now welcoming inquiries for 2026–2027 weddings, spatial murals, and studio workshops",
  email: "studio@inaru-arts.com",
  instagramUrl: "https://instagram.com",
  instagramHandle: "@inaru.arts",
  pinterestUrl: "https://pinterest.com",
  substackUrl: "https://substack.com",
  pressKitMailtoSubject: "Inaru Arts — Portfolio & Press Kit Request",
};

export const heroData = {
  issueNumber: "No. IV — Curated Works & Spatial Studies",
  headline: "Drawing life as it happens.",
  supportingText:
    "Live illustration, painted spaces, and the art of seeing differently.",
  primaryCta: {
    label: "Explore the work",
    href: "#work",
  },
  secondaryCta: {
    label: "Let's create something",
    href: "#contact",
  },
  marginalia: [
    "Fig. 01 — Walnut ink, raw pigment & soft graphite on 300g cotton rag",
    "Drawn directly from observation — no preliminary tracing",
    "Scale: intimate paper studies to 12-meter architectural walls",
  ],
  collage: {
    mainArtwork: {
      id: "hero-main",
      title: "Study in Warm Ochre & Charcoal Contour",
      category: "fashion" as const,
      categoryLabel: "Figure & Gesture",
      medium: "Charcoal, walnut ink, and muted terracotta wash on cotton paper",
      year: "2026",
      description:
        "Expressive observational figure drawing capturing movement, posture, and the quiet tension of a single continuous line.",
      annotation: "300gsm cold-press cotton — drawn from life",
      image: "/images/hero-main-sketchbook.jpg",
      alt: "Expressive charcoal and terracotta watercolor figure illustration on textured warm cotton paper",
      aspectRatio: "portrait-editorial" as const,
      width: 1200,
      height: 1500,
      isSamplePlaceholder: true,
    },
    secondaryMural: {
      id: "hero-mural",
      title: "Botanical & Figurative Wall Study for an Artisan Café",
      category: "murals" as const,
      categoryLabel: "Painted Spaces",
      medium: "Mineral silicate paint and raw umber linework on lime plaster",
      year: "2026",
      description:
        "Site-specific architectural mural designed to converse with warm morning daylight, timber tables, and ceramic tableware.",
      annotation: "Site study — mineral wash on plaster",
      image: "/images/hero-mural-detail.jpg",
      alt: "Warm minimalist wall mural inside a sunlit café featuring terracotta and charcoal line art",
      aspectRatio: "portrait-editorial" as const,
      width: 1050,
      height: 1350,
      isSamplePlaceholder: true,
    },
    tertiaryLiveSketch: {
      id: "hero-live-sketch",
      title: "Evening Toast — 4-Minute Live Guest Sketch",
      category: "wedding" as const,
      categoryLabel: "Live Illustration",
      medium: "Fountain pen nib and dusty rose wash on deckle-edge paper",
      year: "2026",
      description:
        "Spontaneous live portrait sketched on location during a candlelit reception dinner.",
      annotation: "Drawn live in 4 mins",
      image: "/images/hero-gesture-study.jpg",
      alt: "Intimate live wedding sketch of two guests in ink and dusty rose watercolor",
      aspectRatio: "portrait" as const,
      width: 900,
      height: 1200,
      isSamplePlaceholder: true,
    },
  },
};

export const weddingSectionData = {
  chapterNumber: "04",
  eyebrow: "Live Wedding & Event Illustration",
  title: "Intimate portraits drawn in the warmth of the moment.",
  lead: "Far more tactile than a photograph, a live illustration captures how an evening felt—the tilt of a shoulder in conversation, the movement of silk, the quiet humor between old friends.",
  description:
    "Working unobtrusively with fountain pens, sable brushes, and custom-mixed palettes on heavyweight cotton rag paper, I draw guests and couples live throughout cocktail hour and dinner. Each portrait takes just a few minutes and becomes a signed, heirloom keepsake your guests carry home that night.",
  highlights: [
    {
      label: "Pace & Rhythm",
      value: "4–6 minutes per individual or couple portrait",
    },
    {
      label: "Paper & Medium",
      value: "Archival 300gsm deckle-edge cotton paper, waterproof ink & watercolor wash",
    },
    {
      label: "Bespoke Touch",
      value: "Custom blind-embossed or calligraphed couple monogram on every sheet",
    },
  ],
  ctaLabel: "Inquire About Wedding Dates",
  inquirySubject: "Live Wedding Illustration Inquiry",
  artworks: [
    {
      id: "wedding-01",
      title: "The First Dance in Silhouette & Wash",
      subtitle: "Couple study on deckle-edge cotton paper",
      category: "wedding",
      categoryLabel: "Live Wedding Illustration",
      medium: "Sepia nib ink, charcoal pencil, and warm ivory gouache",
      dimensionsOrDuration: "21 × 29.7 cm — Sketched live",
      year: "Sample Study",
      locationOrClient: "[Venue / Celebration Placeholder]",
      description:
        "Fluid contour lines and restrained tonal washes capturing the movement of evening attire in motion.",
      annotation: "Fig. 1.1 — Couple's keepsake study",
      image: "/images/wedding-illustration-01.jpg",
      alt: "Expressive ink and watercolor illustration of a wedding couple dancing on textured paper",
      aspectRatio: "portrait",
      width: 1200,
      height: 1600,
      featuredInArchive: true,
      isSamplePlaceholder: true,
    },
    {
      id: "wedding-02",
      title: "Champagne Hour — Guest Trio Study",
      subtitle: "Spontaneous four-minute guest portraits",
      category: "wedding",
      categoryLabel: "Live Wedding Illustration",
      medium: "Walnut ink and dusty rose watercolor wash",
      dimensionsOrDuration: "14.8 × 21 cm (A5) — 5 minutes",
      year: "Sample Study",
      locationOrClient: "[Private Garden Reception Placeholder]",
      description:
        "Quick, observant portraiture focusing on posture, personal style, and expressive line weight rather than stiff posing.",
      annotation: "Fig. 1.2 — Guest portrait series",
      image: "/images/wedding-illustration-02.jpg",
      alt: "Fashion-inspired live wedding guest portrait in ink and muted rose watercolor",
      aspectRatio: "portrait-editorial",
      width: 1200,
      height: 1500,
      featuredInArchive: true,
      isSamplePlaceholder: true,
    },
    {
      id: "wedding-03",
      title: "The Artist's Table at Dusk",
      subtitle: "Brass inkwells, sable brushes, and drying portraits",
      category: "wedding",
      categoryLabel: "Live Wedding Illustration",
      medium: "On-location documentary view of the live drawing setup",
      dimensionsOrDuration: "On-site atelier setup",
      year: "Sample Study",
      locationOrClient: "[Courtyard Dinner Placeholder]",
      description:
        "The live drawing table becomes an intimate gathering point during the celebration—guests watch portraits emerge from blank paper in real time.",
      annotation: "Fig. 1.3 — The portable atelier",
      image: "/images/wedding-illustration-03.jpg",
      alt: "Overhead view of artist's wedding drawing table with watercolor palette, brushes, and portraits",
      aspectRatio: "landscape-editorial",
      width: 1600,
      height: 1000,
      featuredInArchive: false,
      isSamplePlaceholder: true,
    },
    {
      id: "wedding-04",
      title: "Study of Silk Drape & Floral Crown",
      subtitle: "Bridal silhouette from life",
      category: "wedding",
      categoryLabel: "Live Wedding Illustration",
      medium: "Graphite, raw sienna wash, and fine calligraphy nib",
      dimensionsOrDuration: "21 × 29.7 cm — 8 minutes",
      year: "Sample Study",
      locationOrClient: "[Editorial Bridal Study Placeholder]",
      description:
        "Delicate linework emphasizing the architectural drape of fabric and negative space on warm natural paper.",
      annotation: "Fig. 1.4 — Bridal contour study",
      image: "/images/wedding-illustration-04.jpg",
      alt: "Minimalist bridal gown illustration in graphite and warm ochre watercolor",
      aspectRatio: "portrait",
      width: 1200,
      height: 1600,
      featuredInArchive: true,
      isSamplePlaceholder: true,
    },
    {
      id: "wedding-05",
      title: "Monogrammed Envelopes & Palette Notes",
      subtitle: "Tactile presentation details",
      category: "wedding",
      categoryLabel: "Live Wedding Illustration",
      medium: "Blind debossing on cotton rag with hand-mixed mineral washes",
      dimensionsOrDuration: "Custom stationery presentation",
      year: "Sample Study",
      locationOrClient: "[Custom Event Edition Placeholder]",
      description:
        "Each finished illustration is dried, stamped or inscribed with the celebration date, and slipped into a protective archival sleeve.",
      annotation: "Fig. 1.5 — Archival presentation",
      image: "/images/wedding-illustration-05.jpg",
      alt: "Close-up of hand-painted watercolor swatches, nib pen, and monogrammed cotton paper",
      aspectRatio: "square",
      width: 1200,
      height: 1200,
      featuredInArchive: false,
      isSamplePlaceholder: true,
    },
  ] satisfies ArtworkItem[],
};

export const muralSectionData = {
  chapterNumber: "01",
  eyebrow: "Murals & Painted Spaces",
  title: "Hand-painted walls that give architecture a human pulse.",
  lead: "When a drawing leaves the sketchbook and scales to a wall, the brush responds to plaster grain, ceiling height, and the way afternoon light moves across a room.",
  description:
    "I design and hand-paint bespoke murals for independent cafés, specialty coffee roasters, restaurants, creative studios, and private residences. Working without rigid vinyl stencils, every wall preserves the warmth and spontaneity of an original drawing.",
  ctaLabel: "Commission a Painted Space",
  inquirySubject: "Commercial & Interior Mural Inquiry",
  projects: [
    {
      id: "mural-project-01",
      number: "Project I",
      title: "Terra & Line — Morning Light Wall Fresco",
      spaceType: "Specialty Coffee Bar & Bakery",
      location: "Interior Architectural Commission",
      client: "Artisan Coffee Roasters & Bakery",
      surfaceAndMedium:
        "Matte mineral pigment, burnt sienna earth wash, and charcoal acrylic linework on textured lime plaster",
      dimensions: "6.4 m × 3.2 m (Full main dining wall)",
      year: "Architectural Series",
      description:
        "Conceived as an expansive sketchbook page wrapping behind the espresso counter and communal oak table. Organic terracotta shapes anchor the room's acoustic panels while fluid contour drawings of hands, ceramics, and botanical stems invite close inspection from every table.",
      curatorNote:
        "Designed to age gracefully alongside natural wood, brass fixtures, and raw plaster.",
      primaryImage: {
        id: "mural-01",
        title: "Terra & Line — Full Café Interior View",
        category: "murals",
        categoryLabel: "Murals & Painted Spaces",
        medium: "Mineral pigment and charcoal linework on plaster",
        dimensionsOrDuration: "6.4 m × 3.2 m",
        year: "Architectural Series",
        locationOrClient: "Specialty Coffee Bar",
        description:
          "Full-wall composition combining warm terracotta color blocks with continuous figurative and botanical linework in a sunlit café.",
        annotation: "Plate II.a — Architectural context view",
        image: "/images/cafe-mural-01.jpg",
        alt: "View of a warm minimalist café interior with a terracotta and charcoal hand-painted wall mural",
        aspectRatio: "portrait-editorial",
        width: 1080,
        height: 1450,
        featuredInArchive: true,
        isSamplePlaceholder: false,
      },
      detailImage: {
        id: "mural-03",
        title: "Surface Detail — Brushwork & Limewash Grain",
        category: "murals",
        categoryLabel: "Murals & Painted Spaces",
        medium: "Close-up of raw umber drybrush over warm mineral wash",
        dimensionsOrDuration: "Macro surface study",
        year: "Architectural Series",
        locationOrClient: "Specialty Coffee Bar",
        description:
          "Up close, the visible bristle marks and chalky pigment transitions give the wall the tactile intimacy of heavy cotton paper.",
        annotation: "Plate II.b — 1:1 surface detail",
        image: "/images/cafe-mural-03.jpg",
        alt: "Close-up texture detail of hand-painted mural brushwork on rough plaster wall",
        aspectRatio: "portrait-editorial",
        width: 1200,
        height: 1500,
        featuredInArchive: false,
        isSamplePlaceholder: false,
      },
    },
    {
      id: "mural-project-02",
      number: "Project II",
      title: "The Symposium Frieze — Banquette & Alcove Series",
      spaceType: "Bistro, Wine Bar & Creative Studio",
      location: "Hospitality & Studio Interior",
      client: "Independent Bistro & Wine Bar",
      surfaceAndMedium:
        "Faded ochre wash, olive umber, and charcoal oxide on warm chalk-painted drywall",
      dimensions: "4.8 m × 2.6 m (Corner banquette & archway)",
      year: "Architectural Series",
      description:
        "A continuous narrative frieze inspired by Mediterranean vessels, figurative gesture studies, and mid-century European art publications. The composition frames the corner seating alcove and guides the eye toward the open kitchen.",
      curatorNote:
        "Executed over four days on location using low-VOC archival mineral paints.",
      primaryImage: {
        id: "mural-02",
        title: "Corner Banquette Alcove Mural",
        category: "murals",
        categoryLabel: "Murals & Painted Spaces",
        medium: "Ochre and charcoal mineral paint on interior wall",
        dimensionsOrDuration: "4.8 m × 2.6 m",
        year: "Architectural Series",
        locationOrClient: "Neighborhood Bistro",
        description:
          "Contextual view showing how the mural frames the seating banquette and harmonizes with warm pendant lighting.",
        annotation: "Plate II.c — Alcove composition",
        image: "/images/cafe-mural-02.jpg",
        alt: "Restaurant corner booth with an artistic figurative and botanical mural painted on warm ivory walls",
        aspectRatio: "landscape-classic",
        width: 1600,
        height: 1200,
        featuredInArchive: true,
        isSamplePlaceholder: false,
      },
      detailImage: {
        id: "mural-04",
        title: "Panoramic Frieze — Vessels & Gesture Line",
        category: "murals",
        categoryLabel: "Murals & Painted Spaces",
        medium: "Continuous single-line charcoal and muted olive wash",
        dimensionsOrDuration: "Frieze elevation",
        year: "Architectural Series",
        locationOrClient: "Neighborhood Bistro",
        description:
          "Elevation study of the continuous horizontal frieze balancing generous unpainted wall space with rhythmic figurative motifs.",
        annotation: "Plate II.d — Frieze elevation",
        image: "/images/cafe-mural-04.jpg",
        alt: "Mural frieze detail featuring minimalist line art figures, amphorae, and olive branches",
        aspectRatio: "portrait",
        width: 1200,
        height: 1600,
        featuredInArchive: true,
        isSamplePlaceholder: false,
      },
    },
  ] satisfies MuralProject[],
};

export const fashionSectionData = {
  chapterNumber: "05",
  eyebrow: "Fashion & Figure Drawing",
  title: "The anatomy of drape, posture, and the fleeting gesture.",
  lead: "Rooted in classical life drawing and the visual language of independent fashion journals, these works explore how a single decisive line can suggest volume, weight, and stillness.",
  description:
    "Working from live models, runway archives, and quiet studio sessions, I use sumi ink, sanguine chalk, compressed charcoal, and oil sticks on toned and handmade papers. The focus is always on raw immediacy—preserving the pentimenti, construction lines, and paper tooth.",
  ctaLabel: "Commission Editorial or Figurative Work",
  inquirySubject: "Fashion & Figure Illustration Commission",
  artworks: [
    {
      id: "fashion-01",
      title: "Study in Oversized Wool & Sumi Ink",
      subtitle: "Architectural coat silhouette",
      category: "fashion",
      categoryLabel: "Fashion & Figure",
      medium: "Sumi ink with Japanese hake brush and bistre wash on rag paper",
      dimensionsOrDuration: "42 × 59.4 cm (A2)",
      year: "Studio Series",
      description:
        "Broad, dry-brush sumi strokes define the sculptural shoulder line and sweeping hem of an tailored overcoat.",
      annotation: "Plate III.1 — Hake brush & sumi ink",
      image: "/images/fashion-sketch-01.jpg",
      alt: "Tall fashion illustration of a sculptural coat in black sumi ink and warm brown wash on cotton paper",
      aspectRatio: "portrait-tall",
      width: 1000,
      height: 1500,
      featuredInArchive: true,
      isSamplePlaceholder: true,
    },
    {
      id: "fashion-02",
      title: "Three-Minute Standing Contour",
      subtitle: "Life drawing study in sanguine & charcoal",
      category: "fashion",
      categoryLabel: "Fashion & Figure",
      medium: "Sanguine conté chalk and vine charcoal on warm laid paper",
      dimensionsOrDuration: "30 × 40 cm — 3-minute pose",
      year: "Studio Series",
      description:
        "Rapid observational study from a live figure session, emphasizing spinal rhythm and the shift of weight onto one hip.",
      annotation: "Plate III.2 — 180-second live pose",
      image: "/images/fashion-sketch-02.jpg",
      alt: "Expressive sanguine red chalk and charcoal figure study on textured cream paper",
      aspectRatio: "portrait-editorial",
      width: 1200,
      height: 1500,
      featuredInArchive: true,
      isSamplePlaceholder: true,
    },
    {
      id: "fashion-03",
      title: "Pleated Silk in Motion",
      subtitle: "Kinetic gesture & negative space",
      category: "fashion",
      categoryLabel: "Fashion & Figure",
      medium: "Compressed charcoal, graphite, and raw pigment dust",
      dimensionsOrDuration: "35 × 35 cm",
      year: "Studio Series",
      description:
        "An exploration of fabric memory and rotational movement captured through layered gesture lines.",
      annotation: "Plate III.3 — Movement study",
      image: "/images/fashion-sketch-03.jpg",
      alt: "Square charcoal gesture drawing of a flowing pleated garment in motion",
      aspectRatio: "square",
      width: 1200,
      height: 1200,
      featuredInArchive: true,
      isSamplePlaceholder: true,
    },
    {
      id: "fashion-04",
      title: "Profile in Olive & Terracotta Pastel",
      subtitle: "Portrait & collar study",
      category: "fashion",
      categoryLabel: "Fashion & Figure",
      medium: "Oil pastel, fountain pen ink, and solvent wash",
      dimensionsOrDuration: "29.7 × 42 cm (A3)",
      year: "Studio Series",
      description:
        "Combining razor-thin nib lines with velvety smudges of muted olive and terracotta pastel.",
      annotation: "Plate III.4 — Mixed media portrait",
      image: "/images/fashion-sketch-04.jpg",
      alt: "Editorial fashion portrait sketch using fine ink lines and olive and terracotta pastel accents",
      aspectRatio: "portrait",
      width: 1200,
      height: 1600,
      featuredInArchive: true,
      isSamplePlaceholder: true,
    },
    {
      id: "fashion-05",
      title: "Atelier Notebook — Silhouettes & Swatches",
      subtitle: "Double-page linen sketchbook spread",
      category: "fashion",
      categoryLabel: "Fashion & Figure",
      medium: "Walnut ink, gouache swatches, and pencil marginalia",
      dimensionsOrDuration: "42 × 26 cm open spread",
      year: "Studio Series",
      description:
        "Pages from a working studio sketchbook pairing miniature proportion studies with hand-mixed pigment tests.",
      annotation: "Plate III.5 — Sketchbook archive p. 44–45",
      image: "/images/fashion-sketch-05.jpg",
      alt: "Open artist sketchbook spread showing fashion silhouette drawings, handwritten notes, and paint swatches",
      aspectRatio: "landscape-editorial",
      width: 1600,
      height: 1000,
      featuredInArchive: true,
      isSamplePlaceholder: true,
    },
    {
      id: "fashion-06",
      title: "Seated Figure — Umber Drybrush",
      subtitle: "Quiet study in light and shadow",
      category: "fashion",
      categoryLabel: "Fashion & Figure",
      medium: "Raw umber ink and dry hog-bristle brush on heavyweight paper",
      dimensionsOrDuration: "30 × 40 cm",
      year: "Studio Series",
      description:
        "Minimalist tonal study using only five brush strokes and a single continuous contour line.",
      annotation: "Plate III.6 — Umber drybrush",
      image: "/images/fashion-sketch-06.jpg",
      alt: "Minimalist seated figure drawing in warm brown ink drybrush on cream paper",
      aspectRatio: "portrait",
      width: 1200,
      height: 1600,
      featuredInArchive: false,
      isSamplePlaceholder: true,
    },
  ] satisfies ArtworkItem[],
};

export const workshopsSectionData = {
  chapterNumber: "04",
  eyebrow: "Drawing Classes & Workshops",
  title: "Learning to see before learning to render.",
  lead: "Drawing is not a rare innate gift—it is a disciplined, joyful way of paying attention. In my classes, we strip away the fear of the blank page and focus on line confidence, gesture, and observation.",
  description:
    "Whether you are picking up charcoal for the first time, returning to a rusty sketchbook habit, or gathering a team for a tactile creative afternoon, sessions are tailored to be welcoming, structured, and deeply practical.",
  philosophyNote:
    "All materials—curated papers, willow charcoal, walnut inks, and brushes—are thoughtfully provided for in-person sessions.",
  ctaLabel: "Inquire About Classes & Workshops",
  inquirySubject: "Drawing Workshop / Private Lesson Inquiry",
  offerings: [
    {
      id: "workshop-private",
      code: "Format A",
      title: "1:1 Private Drawing Mentorship",
      format: "In-studio or on-location sketchbook walks",
      duration: "2 hours per session (Single or 4-part series)",
      groupSize: "1–2 participants",
      level: "Complete beginners to practicing creatives",
      description:
        "Tailored individual instruction built around your goals—from overcoming perfectionism and mastering continuous contour to figure proportions, ink wash control, and keeping a travel sketchbook.",
      curriculumHighlights: [
        "Blind & semi-blind contour exercises to train hand-eye synchronicity",
        "Line weight, pressure modulation, and expressive mark-making",
        "Translating complex forms into simple tonal shapes with ink wash",
      ],
      materialsNote: "Includes a custom starter kit & linen-bound sketchbook.",
      inquirySubject: "Private Drawing Lessons Inquiry",
    },
    {
      id: "workshop-group",
      code: "Format B",
      title: "Small-Group Observational & Gesture Salons",
      format: "Intimate weekend or evening studio sessions",
      duration: "3 hours",
      groupSize: "6–12 participants",
      level: "All levels welcome — no prior experience needed",
      description:
        "A relaxed, inspiring salon setting where we draw from still life arrangements, botanical branches, or live draped models, accompanied by thoughtful critique, tea, and music.",
      curriculumHighlights: [
        "Timed warmup gestures (30 seconds to 10 minutes)",
        "Working with charcoal, sanguine chalk, and walnut ink",
        "Developing a personal visual shorthand rather than copying photos",
      ],
      materialsNote: "All archival papers, drawing boards, and pigments provided.",
      inquirySubject: "Group Drawing Workshop Inquiry",
    },
    {
      id: "workshop-events",
      code: "Format C",
      title: "Bespoke Creative Gatherings & Brand Workshops",
      format: "Hosted at your studio, boutique, café, or private venue",
      duration: "2–3 hours (Customizable)",
      groupSize: "8–20 participants",
      level: "Designed for teams, retreats, and private celebrations",
      description:
        "An analog, screen-free creative experience for design teams, brand press days, intimate celebrations, or cultural spaces—guided step-by-step so every guest leaves with frame-worthy studies.",
      curriculumHighlights: [
        "Curated still-life or floral tablescape styling for observational drawing",
        "Guided ink & watercolor wash techniques accessible to everyone",
        "Custom-printed workshop folios for guests to take their artwork home",
      ],
      materialsNote: "Full mobile studio setup brought directly to your space.",
      inquirySubject: "Private Creative Event / Brand Workshop Inquiry",
    },
  ] satisfies WorkshopOffering[],
  gallery: [
    {
      id: "workshop-img-01",
      title: "The Workshop Table — Charcoal, Ink & Open Sketchbooks",
      category: "workshops",
      categoryLabel: "Classes & Workshops",
      medium: "Willow charcoal, walnut ink, and 300g cotton sheets",
      dimensionsOrDuration: "Small-group studio session",
      year: "Teaching Practice",
      description:
        "Every seat is prepared with curated papers, natural charcoal sticks, brass water vessels, and warm lighting.",
      annotation: "Fig. 4.1 — Studio workshop preparation",
      image: "/images/workshop-session-01.jpg",
      alt: "Overhead view of an art workshop table arranged with sketchbooks, charcoal sticks, ink bottles, and brushes",
      aspectRatio: "landscape-editorial",
      width: 1600,
      height: 1000,
      featuredInArchive: false,
      isSamplePlaceholder: true,
    },
    {
      id: "workshop-img-02",
      title: "Demonstrating Line Weight & Wet-on-Dry Wash",
      category: "workshops",
      categoryLabel: "Classes & Workshops",
      medium: "Live technique demonstration on cotton rag",
      dimensionsOrDuration: "Method study",
      year: "Teaching Practice",
      description:
        "Breaking down how a single brush loaded with diluted ink can establish shadow, volume, and atmosphere in seconds.",
      annotation: "Fig. 4.2 — Gesture & wash demonstration",
      image: "/images/workshop-session-02.jpg",
      alt: "Close-up of artist's hands demonstrating ink brush drawing techniques on a sketchbook page",
      aspectRatio: "portrait-editorial",
      width: 1200,
      height: 1500,
      featuredInArchive: true,
      isSamplePlaceholder: true,
    },
    {
      id: "workshop-img-03",
      title: "Afternoon Observational Salon",
      category: "workshops",
      categoryLabel: "Classes & Workshops",
      medium: "Still life & botanical drawing session",
      dimensionsOrDuration: "3-hour weekend workshop",
      year: "Teaching Practice",
      description:
        "Participants working through timed contour studies of ceramic vessels, dried flora, and drapery.",
      annotation: "Fig. 4.3 — Observational drawing salon",
      image: "/images/workshop-session-03.jpg",
      alt: "Warm sunlit studio scene with drawing boards, still life ceramic vessels, and participant sketches",
      aspectRatio: "landscape-classic",
      width: 1600,
      height: 1200,
      featuredInArchive: false,
      isSamplePlaceholder: true,
    },
  ] satisfies ArtworkItem[],
};

export const personalSectionData = {
  chapterNumber: "02",
  eyebrow: "Personal Work, Studies & Archive",
  title: "From the flat files & working sketchbooks.",
  lead: "Alongside commissioned murals and live events, my studio practice is anchored by daily observation—still lifes on the kitchen table, architectural corners noticed in transit, and experimental works on paper.",
  description:
    "Explore a curated selection of personal works, commissioned illustrations, and cross-disciplinary studies below. Click any piece to inspect the surface detail and medium notes in the lightbox.",
  artworks: [
    {
      id: "personal-01",
      title: "Kindred",
      subtitle: "",
      category: "personal",
      categoryLabel: "Personal & Commissions",
      medium: "Digital illustration",
      dimensionsOrDuration: "A3 (29.7 × 42 cm)",
      year: "Studio Archive",
      description: "",
      annotation: "Archive 01",
      image: "/images/personal-study-01.jpg",
      alt: "Kindred — Digital illustration by Inaru",
      aspectRatio: "portrait-editorial",
      width: 1200,
      height: 1750,
      featuredInArchive: true,
      isSamplePlaceholder: false,
    },
    {
      id: "personal-02",
      title: "Night Current",
      subtitle: "",
      category: "personal",
      categoryLabel: "Personal & Commissions",
      medium: "Acrylic on canvas",
      dimensionsOrDuration: "40 × 60 cm",
      year: "Studio Archive",
      description: "",
      annotation: "Archive 02",
      image: "/images/personal-study-02.jpg",
      alt: "Night Current — Acrylic on canvas by Inaru",
      aspectRatio: "portrait-editorial",
      width: 1200,
      height: 1750,
      featuredInArchive: true,
      isSamplePlaceholder: false,
    },
    {
      id: "personal-03",
      title: "Monotype & Charcoal Study in Olive",
      subtitle: "",
      category: "personal",
      categoryLabel: "Personal & Commissions",
      medium: "Oil-based monotype impression with hand-drawn charcoal overlay on mulberry paper",
      dimensionsOrDuration: "35 × 35 cm",
      year: "Studio Archive",
      description: "",
      annotation: "Archive 03",
      image: "/images/personal-study-03.jpg",
      alt: "Experimental square artwork combining olive green monotype texture with charcoal portrait lines",
      aspectRatio: "square",
      width: 1200,
      height: 1200,
      featuredInArchive: true,
      isSamplePlaceholder: true,
    },
    {
      id: "personal-04",
      title: "Coastal Pines & Limestone Ridge",
      subtitle: "",
      category: "personal",
      categoryLabel: "Personal & Commissions",
      medium: "Sumi ink, reed pen, and olive-ochre wash",
      dimensionsOrDuration: "60 × 20 cm (Unfolded concertina book)",
      year: "Studio Archive",
      description: "",
      annotation: "Archive 04",
      image: "/images/personal-study-04.jpg",
      alt: "Wide panoramic landscape drawing of coastal pine trees and cliffs in reed pen ink and warm washes",
      aspectRatio: "landscape-editorial",
      width: 1600,
      height: 1000,
      featuredInArchive: true,
      isSamplePlaceholder: true,
    },
    {
      id: "personal-05",
      title: "The Reader at the Window — Editorial Commission Study",
      subtitle: "",
      category: "personal",
      categoryLabel: "Personal & Commissions",
      medium: "Brush pen, terracotta gouache, and graphite",
      dimensionsOrDuration: "24 × 32 cm",
      year: "Studio Archive",
      description: "",
      annotation: "Archive 05",
      image: "/images/personal-study-05.jpg",
      alt: "Editorial illustration of a figure reading by a sunlit window in charcoal and terracotta tones",
      aspectRatio: "portrait",
      width: 1200,
      height: 1600,
      featuredInArchive: true,
      isSamplePlaceholder: true,
    },
    {
      id: "personal-06",
      title: "Crimson Hour",
      subtitle: "",
      category: "personal",
      categoryLabel: "Personal & Commissions",
      medium: "Acrylic on canvas",
      dimensionsOrDuration: "20 × 30 cm",
      year: "Studio Archive",
      description: "",
      annotation: "Archive 06",
      image: "/images/personal-study-06.jpg",
      alt: "Crimson Hour — Acrylic on canvas by Inaru",
      aspectRatio: "portrait-editorial",
      width: 1200,
      height: 1750,
      featuredInArchive: true,
      isSamplePlaceholder: false,
    },
  ] satisfies ArtworkItem[],
};

export const aboutArtistData = {
  eyebrow: "About Inaru",
  title: "Biography",
  backgroundTag:
    "Architectural Foundations • Global Observational Practice",
  portraitImage: {
    src: "/images/inaru.jpg",
    alt: "Portrait of Inaru, multidisciplinary visual artist and illustrator",
    caption: "Inaru — Multidisciplinary Artist & Illustrator",
  },
  studioImage: {
    src: "/images/studio-sketchbook-01.jpg",
    alt: "Close-up of Inaru's workbench with linen sketchbooks, pigment jars, and sable brushes",
    caption: "Fig. B — Working table: raw earth pigments, nib pens, and travel notebooks",
  },
  leadBio:
    "",
  extendedBioParagraphs: [
    "Her formal artistic journey began at Moscow Architectural Institute (MArchI), where she studied architecture and developed an enduring sensitivity to spatial proportion, geometry, light, and structural harmony. Yet even amidst technical drafting tables, her truest passion was always the immediacy of freehand sketching and drawing—capturing the pulse of living spaces and the unguarded human gesture.",
    "Trading static blueprints for a portable atelier of fountain pens, charcoal, and earth pigments, Inaru has traveled and practiced extensively across the world. Years of drawing on location across continents—filling linen-bound sketchbooks in sunlit courtyards, neighborhood cafés, and studios far from home—shaped a fluid, deeply observant visual language. Today, whether she is drawing wedding guests live by candlelight, painting a six-meter mural that converses with a café's architecture, or teaching students how to trust their eye, every piece remains rooted in the joy of seeing the world firsthand.",
  ],
  philosophyQuote:
    "\"Architecture taught me how a room holds light; traveling with a sketchbook taught me how a single line holds life.\"",
  techniquesAndMaterials: [
    "Walnut, sumi & iron-gall inks with steel calligraphy nibs and bamboo reed pens",
    "Sanguine chalk, vine charcoal, and oil pastel on heavyweight cotton rag & handmade mulberry papers",
    "Breathable mineral silicate paints and earth limewashes for interior architectural murals",
    "Direct observational drawing from life—uniting architectural spatial awareness with fluid figure gesture",
  ],
  pillars: [
    {
      title: "On Location (Live Drawing)",
      body: "Bringing the immediacy of travel sketching into weddings and celebrations—creating quick, insightful ink-and-wash portraits that capture guests as they truly are.",
    },
    {
      title: "In Architecture (Painted Spaces)",
      body: "Drawing on her architectural training to paint murals by hand that respect a room's proportions, natural daylight, and plaster grain.",
    },
    {
      title: "In Dialogue (Teaching & Workshops)",
      body: "Demystifying observational drawing through private lessons and group salons that teach students how to look closely, trust their hand, and enjoy the process.",
    },
  ],
};

export const servicesData: ServiceOffering[] = [
  {
    id: "service-wedding",
    index: "01",
    title: "Live Wedding & Event Illustration",
    categoryTag: "Celebrations & Private Events",
    summary:
      "On-location live portraiture for weddings, rehearsal dinners, milestone celebrations, and luxury brand hospitality events. Guests watch their portraits come to life in minutes and leave with a signed original artwork.",
    deliverables: [
      "4 to 7 hours of continuous live drawing during cocktail hour & reception",
      "Individual and couple portraits in archival ink & curated watercolor wash",
      "Heavyweight 300gsm deckle-edge cotton paper with custom couple monogram",
      "Optional post-event studio completion for VIP guests and the couple's portrait",
    ],
    idealFor: "Couples, wedding planners, private hosts & luxury brand events",
    ctaLabel: "Request Wedding Brochure & Availability",
    inquirySubject: "Service Inquiry: Live Wedding & Event Illustration",
  },
  {
    id: "service-murals",
    index: "02",
    title: "Café, Restaurant & Commercial Murals",
    categoryTag: "Spatial & Architectural Art",
    summary:
      "Site-specific, hand-painted wall works that define the atmosphere of hospitality spaces, coffee shops, bakeries, boutiques, and creative offices. Designed from scratch to harmonize with your interior architecture and natural light.",
    deliverables: [
      "Architectural site consultation, mood direction & scaled elevation sketches",
      "Custom palette matching to your interior materials (plaster, wood, stone, tile)",
      "Hand-painted execution on location using durable, low-VOC mineral & acrylic mediums",
      "Flexible scheduling outside peak operating hours for hospitality venues",
    ],
    idealFor: "Café owners, restaurateurs, interior designers & boutique spaces",
    ctaLabel: "Discuss a Mural Project",
    inquirySubject: "Service Inquiry: Commercial or Interior Mural",
  },
  {
    id: "service-fashion",
    index: "03",
    title: "Fashion & Figure Illustration",
    categoryTag: "Editorial & Brand Commissions",
    summary:
      "Expressive figurative drawings, lookbook illustrations, and editorial artwork for fashion houses, independent designers, lifestyle publications, and collectors seeking original works on paper.",
    deliverables: [
      "Original drawings on archival cotton rag or handmade papers",
      "High-resolution drum-quality scans ready for print and digital campaigns",
      "Lookbook vignettes, backstage sketching, or custom garment studies",
      "Worldwide shipping of framed or flat-packed original artwork",
    ],
    idealFor: "Fashion labels, art directors, magazines & private collectors",
    ctaLabel: "Commission Fashion / Figurative Art",
    inquirySubject: "Service Inquiry: Fashion & Figure Illustration",
  },
  {
    id: "service-private-lessons",
    index: "04",
    title: "Private Drawing Lessons",
    categoryTag: "1:1 Mentorship",
    summary:
      "Personalized one-on-one or duo drawing sessions focused on building observational skill, line confidence, sketchbook habits, and expressive ink-and-wash techniques at your own pace.",
    deliverables: [
      "Customized curriculum tailored to your experience level and artistic interests",
      "Hands-on guidance in contour, gesture, figure proportion, and tonal wash",
      "Curated materials provided in-studio, or guided museum/architectural sketching walks",
      "Available as single intensive sessions or ongoing multi-week mentorships",
    ],
    idealFor: "Beginners, returning drawers, designers & architects",
    ctaLabel: "Book a Private Lesson",
    inquirySubject: "Service Inquiry: Private Drawing Lessons",
  },
  {
    id: "service-workshops",
    index: "05",
    title: "Group Workshops & Creative Gatherings",
    categoryTag: "Salons & Team Experiences",
    summary:
      "Thoughtfully hosted group drawing workshops where participants slow down, disconnect from screens, and learn approachable observational drawing techniques in an inspiring, convivial atmosphere.",
    deliverables: [
      "2 to 3-hour guided drawing salon for 6 to 20 participants",
      "Full mobile atelier setup: drawing boards, archival papers, inks, charcoals & brushes",
      "Curated botanical, ceramic still-life, or live model drawing subjects",
      "Ideal for creative teams, studio offsites, community spaces, and private gatherings",
    ],
    idealFor: "Creative studios, cultural venues, retreats & private groups",
    ctaLabel: "Plan a Group Workshop",
    inquirySubject: "Service Inquiry: Group Drawing Workshop",
  },
  {
    id: "service-commissions",
    index: "06",
    title: "Custom Commissions & Editorial Projects",
    categoryTag: "Bespoke Works on Paper",
    summary:
      "One-of-a-kind commissioned drawings, personal portraits, architectural venue illustrations, wine labels, menu art, and bespoke paper goods crafted with the warmth of a handmade original.",
    deliverables: [
      "Collaborative concept sketching and composition approval",
      "Original physical artwork signed on archival cotton paper",
      "Optional print-ready digitization for menus, invitations, or packaging",
      "Careful archival packaging and insured delivery",
    ],
    idealFor: "Collectors, hospitality brands, publishers & gift commissions",
    ctaLabel: "Inquire About a Custom Commission",
    inquirySubject: "Service Inquiry: Custom Artwork Commission",
  },
];

export const modelingRunwaySectionData = {
  chapterNumber: "03",
  eyebrow: "Runway & Live Model Studies",
  title: "Silhouette in motion — the runway drawn in real time.",
  lead: "Two counter-moving streams of gesture, drape, and stride—capturing the cadence of the catwalk and the sculptural poise of live modeling.",
  description:
    "Drawn from runway presentations, atelier fittings, and live model sessions using rapid sumi ink, charcoal, and mineral wash. Each vertical plate distills a passing look into a few decisive strokes.",
  ctaLabel: "Commission Runway & Model Studies",
  inquirySubject: "Runway & Live Model Studies Commission",
  topRowArtworks: Array.from({ length: 9 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    const mediums = [
      "Sumi ink & walnut wash on 300g cotton rag",
      "Charcoal contour & muted terracotta wash",
      "Sanguine chalk & reed pen on toned paper",
    ];
    const subtitles = [
      "Runway stride & structured coat study",
      "Draped silk silhouette in motion",
      "Backstage poise & collar study",
    ];
    return {
      id: `runway-model-${num}`,
      title: `Look ${num} — Runway Silhouette Study`,
      subtitle: subtitles[i % subtitles.length],
      category: "modeling" as const,
      categoryLabel: "Runway & Live Model Studies",
      medium: mediums[i % mediums.length],
      dimensionsOrDuration: "29.7 × 42 cm (A3) — Live catwalk study",
      year: "Runway Series",
      description:
        "Expressive vertical runway illustration capturing the kinetic rhythm, fabric movement, and architectural posture of a model in motion.",
      annotation: `Look ${num} — Series A`,
      image: `/images/runway-model-${num}.jpg`,
      alt: `Runway and live model study Look ${num} in ink and watercolor wash`,
      aspectRatio: "portrait-tall" as const,
      width: 1000,
      height: 1500,
      featuredInArchive: i < 3,
      isSamplePlaceholder: true,
    };
  }) satisfies ArtworkItem[],
  bottomRowArtworks: Array.from({ length: 10 }, (_, i) => {
    const idx = i + 10;
    const num = String(idx).padStart(2, "0");
    const mediums = [
      "Japanese hake brush, sumi ink & ochre wash",
      "Vine charcoal, graphite & dusty rose pigment",
      "Fountain pen nib & olive-umber mineral wash",
    ];
    const subtitles = [
      "Catwalk turn & flowing hem gesture",
      "Sculptural tailoring & shadow study",
      "Atelier fitting & continuous contour line",
    ];
    return {
      id: `runway-model-${num}`,
      title: `Look ${num} — Catwalk Gesture Study`,
      subtitle: subtitles[i % subtitles.length],
      category: "modeling" as const,
      categoryLabel: "Runway & Live Model Studies",
      medium: mediums[i % mediums.length],
      dimensionsOrDuration: "29.7 × 42 cm (A3) — Live catwalk study",
      year: "Runway Series",
      description:
        "Drawn directly from movement, emphasizing the interplay between garment volume, negative space, and the model's stride.",
      annotation: `Look ${num} — Series B`,
      image: `/images/runway-model-${num}.jpg`,
      alt: `Runway and live model study Look ${num} in charcoal and mineral wash`,
      aspectRatio: "portrait-tall" as const,
      width: 1000,
      height: 1500,
      featuredInArchive: i < 3,
      isSamplePlaceholder: true,
    };
  }) satisfies ArtworkItem[],
};

// Combined curated archive for the interactive Lightbox and filterable gallery
export const allPortfolioArtworks: ArtworkItem[] = [
  heroData.collage.mainArtwork,
  ...muralSectionData.projects.flatMap((p) => [p.primaryImage, p.detailImage]),
  ...personalSectionData.artworks,
  ...modelingRunwaySectionData.topRowArtworks,
  ...modelingRunwaySectionData.bottomRowArtworks,
  ...weddingSectionData.artworks,
  ...fashionSectionData.artworks,
];
