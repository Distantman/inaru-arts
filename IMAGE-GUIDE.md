# Artist Portfolio Image Replacement Guide (`IMAGE-GUIDE.md`)

All artwork and photography on this website are stored locally in **`public/images/`** and referenced centrally in **`lib/portfolio-data.ts`**.

> **Important Note on Current Sample Assets:**
> Every image currently inside `public/images/` is a **temporary, custom-generated editorial sample asset** created specifically so the website looks cohesive, tactile, and art-directed out of the box.
> **None of the temporary sample images make false claims about real past clients.** As soon as you have the artist's real photographs and scanned artwork, replace the files below using the same filenames—or update the paths in `lib/portfolio-data.ts`.

---

## How to Replace Images (Zero Code Changes Required)

1. Export your real photograph or scanned artwork as a `.jpg` (recommended quality: `80–90%`, `sRGB` color profile).
2. Name the file to match the target filename in the table below.
3. Drop it into **`public/images/`**, overwriting the sample file.
4. *(Optional)* To change titles, mediums, dimensions, or client names, edit **`lib/portfolio-data.ts`** and set `isSamplePlaceholder: false` on the replaced artwork item.

---

## Complete Asset Inventory (`public/images/`)

### 1. Homepage Hero Collage

| Filename | Purpose / Placement | Recommended Orientation | Suggested Dimensions (px) | Aspect Ratio |
| :--- | :--- | :--- | :--- | :--- |
| `hero-main-sketchbook.jpg` | Primary centerpiece artwork in the Hero collage | Portrait (Editorial) | `1200 × 1500` | `4:5` |
| `hero-mural-detail.jpg` | Secondary overlapping vertical plate (middle-left of Hero) | Portrait (Medium Vertical) | `1050 × 1350` | `7:9` |
| `hero-gesture-study.jpg` | Floating live sketch card (bottom-right of Hero) | Portrait | `900 × 1200` | `3:4` |

---

### 2. Chapter 01 — Live Wedding Illustration

| Filename | Purpose / Placement | Recommended Orientation | Suggested Dimensions (px) | Aspect Ratio |
| :--- | :--- | :--- | :--- | :--- |
| `wedding-illustration-01.jpg` | Lead couple illustration (e.g., First Dance or full-length couple study) | Portrait | `1200 × 1600` | `3:4` |
| `wedding-illustration-02.jpg` | Live guest portrait trio or duo sketched during cocktail hour | Portrait (Editorial) | `1200 × 1500` | `4:5` |
| `wedding-illustration-03.jpg` | Documentary photo of the artist drawing live at an event table (brushes, palette, guests) | Landscape (Editorial) | `1600 × 1000` | `16:10` |
| `wedding-illustration-04.jpg` | Bridal silhouette, gown drape, or detail study | Portrait | `1200 × 1600` | `3:4` |
| `wedding-illustration-05.jpg` | Close-up detail of custom monogrammed paper, envelopes, and watercolor palette | Square | `1200 × 1200` | `1:1` |

---

### 3. Chapter 02 — Murals & Painted Spaces

| Filename | Purpose / Placement | Recommended Orientation | Suggested Dimensions (px) | Aspect Ratio |
| :--- | :--- | :--- | :--- | :--- |
| `cafe-mural-01.jpg` | **Project I Primary:** Wide contextual shot of a full mural inside a café or restaurant | Wide Landscape | `1920 × 1080` | `16:9` |
| `cafe-mural-03.jpg` | **Project I Detail:** Close-up texture photograph showing brushwork on plaster/wall | Portrait (Editorial) | `1200 × 1500` | `4:5` |
| `cafe-mural-02.jpg` | **Project II Primary:** Contextual interior photograph of a corner booth, archway, or studio wall mural | Classic Landscape | `1600 × 1200` | `4:3` |
| `cafe-mural-04.jpg` | **Project II Detail:** Panoramic elevation or horizontal frieze detail | Landscape (Editorial) | `1600 × 1000` | `16:10` |

---

### 4. Chapter 03 — Fashion & Figure Drawing

| Filename | Purpose / Placement | Recommended Orientation | Suggested Dimensions (px) | Aspect Ratio |
| :--- | :--- | :--- | :--- | :--- |
| `fashion-sketch-01.jpg` | Tall dramatic fashion silhouette or coat study in ink/wash | Tall Portrait | `1000 × 1500` | `2:3` |
| `fashion-sketch-02.jpg` | Quick life-drawing standing figure contour (sanguine chalk or charcoal) | Portrait (Editorial) | `1200 × 1500` | `4:5` |
| `fashion-sketch-03.jpg` | Movement or garment pleat study on square paper | Square | `1200 × 1200` | `1:1` |
| `fashion-sketch-04.jpg` | Editorial portrait or mixed-media oil pastel/ink study | Portrait | `1200 × 1600` | `3:4` |
| `fashion-sketch-05.jpg` | Open double-page sketchbook spread showing multiple silhouettes & color swatches | Landscape (Editorial) | `1600 × 1000` | `16:10` |
| `fashion-sketch-06.jpg` | Minimalist seated figure study in drybrush or charcoal | Portrait | `1200 × 1600` | `3:4` |

---

### 5. Chapter 04 — Drawing Classes & Workshops

| Filename | Purpose / Placement | Recommended Orientation | Suggested Dimensions (px) | Aspect Ratio |
| :--- | :--- | :--- | :--- | :--- |
| `workshop-session-01.jpg` | Overhead table view of workshop setup: open sketchbooks, charcoal, inks, and brushes | Landscape (Editorial) | `1600 × 1000` | `16:10` |
| `workshop-session-02.jpg` | Close-up of the artist's hands demonstrating drawing or brush technique | Portrait (Editorial) | `1200 × 1500` | `4:5` |
| `workshop-session-03.jpg` | Group workshop atmosphere: participants sketching a still life or model in a sunlit room | Classic Landscape | `1600 × 1200` | `4:3` |

---

### 6. Chapter 05 — Personal Work & Archive

| Filename | Purpose / Placement | Recommended Orientation | Suggested Dimensions (px) | Aspect Ratio |
| :--- | :--- | :--- | :--- | :--- |
| `personal-study-01.jpg` | Observational still life (ceramics, botanicals, gouache/ink) | Portrait (Editorial) | `1200 × 1500` | `4:5` |
| `personal-study-02.jpg` | Travel sketchbook or architectural drawing on location | Portrait | `1200 × 1600` | `3:4` |
| `personal-study-03.jpg` | Experimental printmaking, monotype, or mixed-media portrait | Square | `1200 × 1200` | `1:1` |
| `personal-study-04.jpg` | Concertina / accordion sketchbook landscape study | Landscape (Editorial) | `1600 × 1000` | `16:10` |
| `personal-study-05.jpg` | Commissioned book, magazine, or editorial illustration | Portrait | `1200 × 1600` | `3:4` |
| `personal-study-06.jpg` | Classical study of hands or drapery on toned paper | Portrait (Editorial) | `1200 × 1500` | `4:5` |

---

### 7. About the Artist Section

| Filename | Purpose / Placement | Recommended Orientation | Suggested Dimensions (px) | Aspect Ratio |
| :--- | :--- | :--- | :--- | :--- |
| `inaru.jpg` *(Active real photo, also synced to `artist-portrait.jpg`)* | Portrait of Inaru in the About the Artist section | Square / Portrait | `640 × 640` | `1:1` |
| `studio-sketchbook-01.jpg` | Secondary studio detail: workbench, pigment jars, brushes, and open notebooks | Classic Landscape | `1600 × 1200` | `4:3` |
