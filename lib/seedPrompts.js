// Bibliothèque de prompts prédéfinis pour la génération d'images IA.
// Chaque entrée possède un id stable (utilisé comme clé Firebase) afin
// qu'un import puisse être relancé sans jamais créer de doublons.
export const SEED_PROMPTS = [
  {
    id: "cyberpunk",
    title: "Cyberpunk world",
    category: "Style artistique",
    tags: ["cyberpunk", "futuriste", "néon"],
    content:
      "Une mégapole cyberpunk la nuit sous une pluie battante, néons roses et bleus reflétés sur l'asphalte mouillé, hologrammes publicitaires géants, foule dense en vêtements techwear, gratte-ciel truffés d'écrans, ambiance Blade Runner, éclairage néon dramatique, rendu ultra détaillé 8K."
  },
  {
    id: "portrait",
    title: "Professional portrait",
    category: "Photographie",
    tags: ["portrait", "studio"],
    content:
      "Portrait professionnel en studio d'un sujet, éclairage trois points doux, arrière-plan neutre dégradé gris, objectif 85mm f/1.4, mise au point nette sur les yeux, peau naturelle et détaillée, expression confiante, rendu photoréaliste haute résolution."
  },
  {
    id: "underwater",
    title: "Underwater scene",
    category: "Paysage & nature",
    tags: ["sous-marin", "océan"],
    content:
      "Scène sous-marine à la lumière filtrée par la surface, rayons de soleil traversant l'eau turquoise, bancs de poissons colorés, coraux vivants, particules en suspension, visibilité claire, rendu photoréaliste, ambiance sereine et lumineuse."
  },
  {
    id: "pencilsketch",
    title: "Pencil drawing",
    category: "Style artistique",
    tags: ["croquis", "dessin"],
    content:
      "Dessin au crayon graphite détaillé d'un sujet, hachures fines et dégradés de gris, traits esquissés visibles sur les bords, ombrage réaliste, papier texturé légèrement jauni, rendu style croquis d'artiste académique."
  },
  {
    id: "goldenhour",
    title: "Golden hour lighting",
    category: "Éclairage & ambiance",
    tags: ["golden hour", "lumière chaude"],
    content:
      "Scène baignée par la lumière dorée de fin de journée, ombres longues et douces, teintes ambrées et chaudes, léger contre-jour, atmosphère chaleureuse et nostalgique, rendu photographique cinématographique."
  },
  {
    id: "lowpoly",
    title: "Low-poly 3D",
    category: "Rendu 3D",
    tags: ["low-poly", "géométrique"],
    content:
      "Illustration 3D low-poly d'un sujet, facettes géométriques nettes, palette de couleurs plates et vives, éclairage doux type jeu vidéo stylisé, composition minimaliste, rendu isométrique propre."
  },
  {
    id: "wildlife",
    title: "Wildlife photography",
    category: "Photographie",
    tags: ["faune", "animalier"],
    content:
      "Photographie animalière d'un animal dans son habitat naturel, téléobjectif 600mm, faible profondeur de champ isolant le sujet, arrière-plan flou, lumière naturelle douce du matin, détails du pelage nets, rendu style National Geographic."
  },
  {
    id: "logo",
    title: "Logo concepts",
    category: "Branding & design",
    tags: ["logo", "identité visuelle"],
    content:
      "Concept de logo minimaliste et moderne pour une marque, design vectoriel épuré, silhouette mémorable, palette de deux à trois couleurs, fond blanc uni, style plat adapté à toutes tailles, rendu propre haute résolution."
  },
  {
    id: "nebula",
    title: "Nebula artwork",
    category: "Univers & espace",
    tags: ["nébuleuse", "espace"],
    content:
      "Illustration cosmique d'une nébuleuse spectaculaire, nuages de gaz colorés en violet, rose et bleu profond, étoiles scintillantes en arrière-plan, poussière stellaire lumineuse, rendu digital hyper détaillé façon télescope spatial."
  },
  {
    id: "cinematicphoto",
    title: "Movie-like photograph",
    category: "Photographie",
    tags: ["cinématique", "cinéma"],
    content:
      "Photographie au rendu cinématographique d'une scène, grain de pellicule subtil, étalonnage colorimétrique teal & orange, format panoramique 2.39:1, éclairage dramatique à contre-jour, composition digne d'un plan de film."
  },
  {
    id: "interior",
    title: "Interior design visualization",
    category: "Branding & design",
    tags: ["architecture d'intérieur", "design"],
    content:
      "Visualisation architecturale d'un intérieur moderne au design épuré, matériaux naturels bois et pierre, lumière naturelle abondante par grandes baies vitrées, mobilier contemporain minimaliste, rendu photoréaliste architectural."
  },
  {
    id: "anime",
    title: "Anime artwork",
    category: "Style artistique",
    tags: ["anime", "manga"],
    content:
      "Illustration style anime japonais d'un personnage, traits fins, grands yeux expressifs, palette de couleurs vibrantes, ombrage cel-shading, arrière-plan détaillé façon studio d'animation, rendu 2D haute qualité."
  },
  {
    id: "telephoto",
    title: "Telephoto compression",
    category: "Photographie",
    tags: ["téléobjectif", "compression"],
    content:
      "Photographie prise au téléobjectif longue focale (300-600mm), forte compression de perspective rapprochant les plans, arrière-plan compressé et flou, sujet isolé et net, ambiance intime malgré la distance."
  },
  {
    id: "productphoto",
    title: "Professional product photography",
    category: "Branding & design",
    tags: ["packshot", "produit"],
    content:
      "Photographie produit professionnelle sur fond blanc studio, éclairage doux et homogène sans ombres dures, reflets contrôlés, angle trois quarts, netteté extrême sur les détails, rendu catalogue e-commerce."
  },
  {
    id: "forest",
    title: "Forest landscape",
    category: "Paysage & nature",
    tags: ["forêt", "nature"],
    content:
      "Paysage de forêt dense et mystique, rayons de lumière filtrant à travers la canopée, mousse verte luxuriante, brume matinale légère entre les arbres, ambiance enchantée, rendu photoréaliste riche en détails."
  },
  {
    id: "rimlight",
    title: "Rim lighting",
    category: "Éclairage & ambiance",
    tags: ["contre-jour", "rim light"],
    content:
      "Portrait avec éclairage de contour (rim light) marqué, fine ligne de lumière dessinant la silhouette du sujet sur fond sombre, contraste élevé, ambiance dramatique et sculpturale, rendu studio professionnel."
  },
  {
    id: "voxel",
    title: "Voxel art",
    category: "Rendu 3D",
    tags: ["voxel", "cube"],
    content:
      "Illustration en voxel art d'une scène, construction en petits cubes façon Minecraft, palette colorée rétro, éclairage isométrique doux, style jeu vidéo indépendant, rendu net et ludique."
  },
  {
    id: "fashion",
    title: "Fashion photography style",
    category: "Photographie",
    tags: ["mode", "éditorial"],
    content:
      "Photographie de mode éditoriale, mannequin dans une pose sophistiquée, éclairage studio haut contraste, arrière-plan épuré ou urbain stylé, retouche haute couture, rendu magazine de mode."
  },
  {
    id: "steampunk",
    title: "Steampunk theme",
    category: "Style artistique",
    tags: ["steampunk", "victorien"],
    content:
      "Univers steampunk victorien, engrenages en cuivre et laiton, machines à vapeur complexes, dirigeables dans le ciel, personnages en tenues d'époque avec lunettes d'aviateur, palette sépia et bronze, rendu très détaillé."
  },
  {
    id: "macrophoto",
    title: "Macro photography",
    category: "Photographie",
    tags: ["macro", "détail"],
    content:
      "Photographie macro extrême d'un sujet (insecte, goutte d'eau...), détails microscopiques nets, faible profondeur de champ, textures et reliefs impressionnants, éclairage diffus latéral, rendu ultra précis."
  },
  {
    id: "oilpainting",
    title: "Oil painting style",
    category: "Style artistique",
    tags: ["peinture à l'huile", "classique"],
    content:
      "Peinture à l'huile classique d'un sujet, coups de pinceau texturés et visibles, empâtements riches, palette chaude façon maîtres anciens, éclairage clair-obscur façon Rembrandt, rendu toile de musée."
  },
  {
    id: "droneview",
    title: "Drone aerial shot",
    category: "Paysage & nature",
    tags: ["drone", "vue aérienne"],
    content:
      "Vue aérienne prise au drone d'un paysage ou d'une ville, perspective plongeante à 90°, motifs géométriques visibles au sol, lumière naturelle claire, échelle impressionnante, rendu photographique net et grand angle."
  },
  {
    id: "blackandwhite",
    title: "Monochrome style",
    category: "Photographie",
    tags: ["noir et blanc", "monochrome"],
    content:
      "Photographie en noir et blanc, contrastes marqués entre ombres et hautes lumières, texture de grain argentique, composition intemporelle, ambiance dramatique, rendu classique."
  },
  {
    id: "mascot",
    title: "Mascot character",
    category: "Branding & design",
    tags: ["mascotte", "personnage"],
    content:
      "Design de mascotte de marque, personnage amical et rond anthropomorphisé, couleurs vives et cohérentes avec l'identité, expression chaleureuse, style vectoriel simple, adapté à toutes déclinaisons."
  },
  {
    id: "space",
    title: "Outer space visuals",
    category: "Univers & espace",
    tags: ["espace", "cosmos"],
    content:
      "Illustration spatiale grandiose, vaisseau ou planète flottant dans le vide étoilé, nébuleuses colorées en arrière-plan, éclairage stellaire dramatique, échelle cosmique impressionnante, rendu digital hyperréaliste."
  },
  {
    id: "bokeh",
    title: "Soft blurred background",
    category: "Éclairage & ambiance",
    tags: ["bokeh", "flou"],
    content:
      "Photographie avec arrière-plan bokeh prononcé, points de lumière ronds et doux hors focus, sujet net au premier plan, objectif grande ouverture f/1.2-1.8, ambiance romantique et douce."
  },
  {
    id: "comicbook",
    title: "Comic book art",
    category: "Style artistique",
    tags: ["comics", "bande dessinée"],
    content:
      "Illustration style comic book américain, traits encrés marqués, trames de points façon Ben-Day, couleurs saturées et contrastées, onomatopées et cases dynamiques, rendu action vintage Marvel/DC."
  },
  {
    id: "luxury",
    title: "Luxury aesthetic",
    category: "Branding & design",
    tags: ["luxe", "premium"],
    content:
      "Visuel esthétique luxe premium, matériaux nobles (marbre, or, velours), palette sombre et sophistiquée, éclairage tamisé élégant, composition minimaliste haut de gamme, rendu publicitaire raffiné."
  },
  {
    id: "sunrise",
    title: "Sunrise atmosphere",
    category: "Éclairage & ambiance",
    tags: ["lever de soleil", "aube"],
    content:
      "Paysage au lever du soleil, ciel dégradé du rose pastel à l'orange vif, brume légère au sol, silhouettes se découpant à contre-jour, ambiance calme et pleine d'espoir, rendu photographique naturel."
  },
  {
    id: "pixelart",
    title: "Pixel art",
    category: "Rendu 3D",
    tags: ["pixel art", "rétro"],
    content:
      "Illustration en pixel art rétro 16-bit, palette de couleurs limitée, contours nets pixel par pixel, style jeu vidéo des années 90, animation-ready, rendu net et coloré."
  },
  {
    id: "architecturephoto",
    title: "Architectural photography",
    category: "Photographie",
    tags: ["architecture", "bâtiment"],
    content:
      "Photographie architecturale d'un bâtiment, lignes symétriques et perspective corrigée, jeu d'ombres et de matières (verre, béton, acier), ciel dégagé ou dramatique, rendu net grand format professionnel."
  },
  {
    id: "hyperrealistic",
    title: "Extreme realism",
    category: "Style artistique",
    tags: ["hyperréalisme", "détail"],
    content:
      "Rendu hyperréaliste d'un sujet, détails texturaux poussés à l'extrême (peau, matières, reflets), éclairage physiquement précis, netteté 8K, indiscernable d'une photographie réelle."
  },
  {
    id: "postapocalyptic",
    title: "Post-apocalyptic world",
    category: "Style artistique",
    tags: ["post-apo", "ruines"],
    content:
      "Monde post-apocalyptique dévasté, bâtiments en ruine envahis par la végétation, ciel poussiéreux teinté d'ocre, survivant solitaire au loin, ambiance désolée et cinématographique, rendu très détaillé."
  },
  {
    id: "watercolor",
    title: "Watercolor illustration",
    category: "Style artistique",
    tags: ["aquarelle", "peinture"],
    content:
      "Illustration à l'aquarelle d'un sujet, couleurs fluides et transparentes qui se mélangent, contours doux non délimités, papier texturé visible, éclaboussures légères, rendu délicat et artistique."
  },
  {
    id: "fisheye",
    title: "Fisheye lens effect",
    category: "Photographie",
    tags: ["fisheye", "distorsion"],
    content:
      "Photographie prise avec un objectif fisheye 180°, distorsion sphérique prononcée sur les bords, champ de vision ultra large, effet de courbure dramatique, composition centrée sur le sujet."
  },
  {
    id: "brandingmockup",
    title: "Brand identity preview",
    category: "Branding & design",
    tags: ["mockup", "identité de marque"],
    content:
      "Mockup de présentation d'identité de marque, logo appliqué sur carte de visite, packaging et papeterie, mise en scène minimaliste sur fond neutre, éclairage studio doux, rendu portfolio professionnel."
  },
  {
    id: "ocean",
    title: "Ocean landscape",
    category: "Paysage & nature",
    tags: ["océan", "mer"],
    content:
      "Paysage océanique vaste, vagues puissantes se brisant sous un ciel dramatique, eau turquoise à profonde, écume détaillée, horizon infini, rendu photoréaliste grand angle."
  },
  {
    id: "headshot",
    title: "Corporate headshot",
    category: "Photographie",
    tags: ["portrait corporate", "professionnel"],
    content:
      "Photo de profil professionnelle (headshot) en tenue business, fond neutre gris ou bleu dégradé, éclairage studio doux et flatteur, expression confiante et accessible, cadrage buste, rendu LinkedIn/entreprise."
  },
  {
    id: "dramaticlighting",
    title: "Strong dramatic light",
    category: "Éclairage & ambiance",
    tags: ["éclairage dramatique", "contraste"],
    content:
      "Scène à l'éclairage dramatique fort, contraste marqué entre lumière et ombre façon clair-obscur, source de lumière unique et directionnelle, ambiance intense et théâtrale, rendu cinématographique."
  },
  {
    id: "3drender",
    title: "Photorealistic 3D render",
    category: "Rendu 3D",
    tags: ["3D", "photoréaliste"],
    content:
      "Rendu 3D photoréaliste d'un objet ou d'une scène, matériaux PBR détaillés, éclairage global illumination réaliste, ombres douces précises, réflexions physiquement correctes, rendu type Octane/V-Ray 8K."
  },
  {
    id: "desert",
    title: "Desert environment",
    category: "Paysage & nature",
    tags: ["désert", "dunes"],
    content:
      "Paysage désertique aride, dunes de sable ondulées à perte de vue, ciel dégagé d'un bleu intense ou coucher de soleil orangé, chaleur visible en distorsion d'air, rendu photoréaliste grand angle."
  },
  {
    id: "fujifilm",
    title: "Fujifilm color palette",
    category: "Photographie",
    tags: ["fujifilm", "film"],
    content:
      "Photographie avec le rendu colorimétrique Fujifilm (simulation Classic Chrome/Velvia), tons chauds légèrement désaturés, grain film subtil, contraste doux, ambiance nostalgique authentique."
  },
  {
    id: "characterdesign",
    title: "Original character",
    category: "Style artistique",
    tags: ["character design", "personnage"],
    content:
      "Character design original, feuille de modèle avec vues face/profil, silhouette distinctive et lisible, palette de couleurs cohérente, accessoires et costume détaillés, rendu concept art professionnel."
  },
  {
    id: "nightmode",
    title: "Night photography",
    category: "Photographie",
    tags: ["nuit", "photographie nocturne"],
    content:
      "Photographie de nuit d'une scène urbaine ou d'un paysage, lumières artificielles contrastant avec le ciel sombre, longue exposition capturant les traînées lumineuses, faible bruit numérique, rendu net et atmosphérique."
  },
  {
    id: "scifi",
    title: "Science-fiction style",
    category: "Style artistique",
    tags: ["science-fiction", "futuriste"],
    content:
      "Illustration de science-fiction futuriste, technologie avancée (vaisseaux, cités flottantes, IA), design épuré et lumineux, palette froide bleu/blanc avec accents néon, rendu concept art cinématographique."
  },
  {
    id: "inkdrawing",
    title: "Ink illustration",
    category: "Style artistique",
    tags: ["encre", "illustration"],
    content:
      "Illustration à l'encre de Chine d'un sujet, traits fins et précis, hachures croisées pour les ombres, contraste noir et blanc pur, style gravure ou comics indépendant, rendu net et détaillé."
  },
  {
    id: "topdown",
    title: "Top-down composition",
    category: "Photographie",
    tags: ["vue du dessus", "top-down"],
    content:
      "Composition vue du dessus (top-down) d'une scène ou d'une table, disposition organisée à plat, éclairage uniforme sans ombres portées, symétrie soignée, rendu flat lay professionnel."
  },
  {
    id: "advertising",
    title: "Advertising visual",
    category: "Branding & design",
    tags: ["publicité", "campagne"],
    content:
      "Visuel publicitaire percutant pour un produit ou une marque, mise en scène soignée avec message clair, éclairage studio impactant, composition dynamique orientée conversion, rendu campagne premium haute résolution."
  },
  {
    id: "ghibli",
    title: "Studio Ghibli-inspired style",
    category: "Style artistique",
    tags: ["ghibli", "animation"],
    content:
      "Illustration inspirée du Studio Ghibli, décors peints à la main riches en détails, personnages expressifs aux traits doux, palette de couleurs chaleureuse et nostalgique, ambiance féerique et paisible, rendu animation japonaise."
  },
  {
    id: "streetphoto",
    title: "Street photography",
    category: "Photographie",
    tags: ["street photo", "urbain"],
    content:
      "Photographie de rue spontanée capturant une scène urbaine, moment décisif candide, composition géométrique urbaine, lumière naturelle contrastée, grain léger, rendu documentaire authentique."
  },
  {
    id: "volumetriclight",
    title: "God rays and volumetric lighting",
    category: "Éclairage & ambiance",
    tags: ["lumière volumétrique", "rayons"],
    content:
      "Scène traversée par une lumière volumétrique spectaculaire, rayons de soleil (god rays) perçant à travers brume ou feuillage, particules en suspension visibles, ambiance mystique et cinématographique, rendu très détaillé."
  },
  {
    id: "planet",
    title: "Planetary illustration",
    category: "Univers & espace",
    tags: ["planète", "astronomie"],
    content:
      "Illustration détaillée d'une planète exotique vue de l'espace, atmosphère colorée en couches, anneaux ou lunes en orbite, surface texturée réaliste, étoiles en arrière-plan, rendu digital astronomique."
  },
  {
    id: "acrylic",
    title: "Acrylic painting",
    category: "Style artistique",
    tags: ["acrylique", "peinture"],
    content:
      "Peinture acrylique d'un sujet, couleurs vives et opaques, coups de pinceau texturés nets, contrastes marqués, style contemporain expressif, rendu toile artistique."
  },
  {
    id: "lowangle",
    title: "Low-angle perspective",
    category: "Photographie",
    tags: ["contre-plongée", "perspective"],
    content:
      "Photographie en contre-plongée (low angle) d'un sujet, perspective imposante depuis le sol vers le haut, sensation de puissance et de grandeur, ciel ou plafond en arrière-plan, rendu dynamique et impactant."
  },
  {
    id: "packaging",
    title: "Packaging mockup",
    category: "Branding & design",
    tags: ["packaging", "mockup"],
    content:
      "Mockup de packaging produit, présentation 3D réaliste de l'emballage sur fond neutre ou en situation, éclairage studio doux, reflets et matières précis, rendu commercial haute qualité."
  },
  {
    id: "mountains",
    title: "Mountain scenery",
    category: "Paysage & nature",
    tags: ["montagne", "paysage"],
    content:
      "Paysage de montagnes majestueuses, sommets enneigés se découpant sur un ciel dégagé, vallées verdoyantes en contrebas, lumière matinale douce, échelle grandiose, rendu photoréaliste panoramique."
  },
  {
    id: "editorial",
    title: "Magazine editorial look",
    category: "Photographie",
    tags: ["éditorial", "magazine"],
    content:
      "Photographie éditoriale style magazine, direction artistique soignée, mise en scène narrative, éclairage sophistiqué et composition travaillée, retouche haut de gamme, rendu presse premium."
  },
  {
    id: "filmgrain",
    title: "Vintage film grain",
    category: "Photographie",
    tags: ["grain film", "vintage"],
    content:
      "Photographie avec grain de pellicule argentique prononcé, légères imperfections et halos lumineux, couleurs légèrement décalées façon film 35mm, ambiance nostalgique authentique, rendu analogique vintage."
  },
  {
    id: "conceptart",
    title: "Concept art",
    category: "Style artistique",
    tags: ["concept art", "worldbuilding"],
    content:
      "Concept art professionnel pour un univers, un personnage ou un environnement, composition narrative forte, palette de couleurs cohérente avec l'ambiance, niveau de détail élevé sur les éléments clés, rendu digital painting cinéma/jeu vidéo."
  },
  {
    id: "360drone",
    title: "360° aerial concept",
    category: "Paysage & nature",
    tags: ["360", "drone panoramique"],
    content:
      "Vue panoramique aérienne à 360° d'un lieu, perspective immersive englobant tout l'horizon, drone stabilisé en haute altitude, lumière naturelle uniforme, rendu netteté maximale pour visite virtuelle."
  },
  {
    id: "manga",
    title: "Manga style",
    category: "Style artistique",
    tags: ["manga", "noir et blanc"],
    content:
      "Illustration style manga japonais en noir et blanc, trames de gris et hachures dynamiques, traits expressifs et lignes de vitesse, mise en page façon planche de manga, rendu encrage net."
  },
  {
    id: "sunset",
    title: "Sunset lighting",
    category: "Éclairage & ambiance",
    tags: ["coucher de soleil", "crépuscule"],
    content:
      "Scène au coucher de soleil, ciel embrasé de rouge, orange et violet, silhouettes se détachant à l'horizon, reflets chaleureux sur les surfaces, ambiance romantique, rendu photographique naturel."
  },
  {
    id: "cityscape",
    title: "Urban skyline",
    category: "Paysage & nature",
    tags: ["skyline", "ville"],
    content:
      "Skyline urbain impressionnant au crépuscule, gratte-ciels illuminés se reflétant sur l'eau ou le bitume mouillé, ciel dégradé, densité architecturale saisissante, rendu photoréaliste grand format."
  },
  {
    id: "clayrender",
    title: "Clay render",
    category: "Rendu 3D",
    tags: ["clay render", "3D"],
    content:
      "Rendu 3D en clay render (matériau argile neutre sans texture), éclairage studio en global illumination révélant les volumes et le modelé, fond gris neutre, rendu propre pour visualisation de forme pure."
  },
  {
    id: "lifestyle",
    title: "Lifestyle photography",
    category: "Photographie",
    tags: ["lifestyle", "quotidien"],
    content:
      "Photographie lifestyle authentique capturant un moment du quotidien, lumière naturelle douce, ambiance chaleureuse et spontanée, composition naturelle non posée, rendu publicitaire humain et sincère."
  },
  {
    id: "moody",
    title: "Dark cinematic mood",
    category: "Éclairage & ambiance",
    tags: ["moody", "sombre"],
    content:
      "Ambiance sombre et moody, tons désaturés et froids, éclairage tamisé avec zones d'ombre profondes, atmosphère mélancolique et introspective, rendu cinématographique à faible key light."
  },
  {
    id: "octanerender",
    title: "Octane-style render look",
    category: "Rendu 3D",
    tags: ["octane", "rendu 3D"],
    content:
      "Rendu 3D dans le style moteur Octane, éclairage physiquement réaliste avec global illumination, matériaux avec sous-surface scattering et reflets précis, profondeur de champ subtile, rendu ultra propre haute fidélité."
  },
  {
    id: "iconset",
    title: "Custom icon set",
    category: "Branding & design",
    tags: ["icônes", "UI"],
    content:
      "Set d'icônes cohérentes pour une application ou un thème, style plat ou linéaire uniforme, palette de couleurs limitée et harmonieuse, grille d'alignement précise, rendu vectoriel net adapté à l'interface utilisateur."
  },
  {
    id: "wideangle",
    title: "Wide-angle lens look",
    category: "Photographie",
    tags: ["grand angle", "wide"],
    content:
      "Photographie prise avec un objectif grand angle (16-24mm), champ de vision élargi capturant l'ensemble de la scène, légère distorsion aux bords, profondeur exagérée, rendu immersif et spectaculaire."
  },
  {
    id: "retro",
    title: "Retro design style",
    category: "Style artistique",
    tags: ["rétro", "vintage"],
    content:
      "Design graphique rétro inspiré des décennies passées, typographie et motifs vintage, palette de couleurs désaturées chaudes (moutarde, orange brûlé, marron), texture papier légèrement usée, rendu affiche nostalgique."
  },
  {
    id: "unrealengine",
    title: "Unreal Engine cinematic look",
    category: "Rendu 3D",
    tags: ["unreal engine", "cinématique"],
    content:
      "Rendu façon Unreal Engine 5 cinématique, éclairage Lumen dynamique et global illumination temps réel, détails géométriques Nanite ultra fins, profondeur de champ filmique, rendu jeu vidéo AAA photoréaliste."
  },
  {
    id: "travelphoto",
    title: "Travel photography",
    category: "Photographie",
    tags: ["voyage", "travel"],
    content:
      "Photographie de voyage capturant une destination emblématique, lumière naturelle dorée, composition mettant en valeur la culture et le paysage local, ambiance authentique et immersive, rendu magazine de voyage."
  },
  {
    id: "silhouette",
    title: "Silhouette composition",
    category: "Éclairage & ambiance",
    tags: ["silhouette", "contre-jour"],
    content:
      "Composition en silhouette pure d'un sujet se détachant contre un ciel lumineux au coucher/lever du soleil, contour net et sombre, arrière-plan saturé de couleurs chaudes, rendu graphique et minimaliste."
  },
  {
    id: "mattepainting",
    title: "Matte painting style",
    category: "Style artistique",
    tags: ["matte painting", "environnement"],
    content:
      "Matte painting cinématographique d'un environnement épique (cité fantastique, paysage extraterrestre), mélange de peinture digitale et éléments photo-réalistes, échelle grandiose, éclairage atmosphérique, rendu qualité blockbuster."
  },
  {
    id: "bluehour",
    title: "Blue hour lighting",
    category: "Éclairage & ambiance",
    tags: ["blue hour", "crépuscule"],
    content:
      "Scène à l'heure bleue juste après le coucher du soleil, ciel dégradé bleu profond, lumières artificielles commençant à s'allumer, ambiance calme et sophistiquée, rendu photographique urbain ou paysage."
  },
  {
    id: "blender",
    title: "Blender 3D visualization",
    category: "Rendu 3D",
    tags: ["blender", "3D"],
    content:
      "Visualisation 3D réalisée dans Blender, matériaux Principled BSDF détaillés, éclairage HDRI environnant réaliste, composition de studio produit ou scène stylisée, rendu Cycles propre et net."
  },
  {
    id: "environmentart",
    title: "Environment concept art",
    category: "Style artistique",
    tags: ["environment art", "worldbuilding"],
    content:
      "Concept art d'environnement immersif pour un univers ou un jeu, composition de premier plan à arrière-plan avec profondeur atmosphérique, éclairage établissant l'ambiance, niveau de détail élevé sur les points focaux, rendu digital painting professionnel."
  },
  {
    id: "highangle",
    title: "High-angle perspective",
    category: "Photographie",
    tags: ["plongée", "perspective"],
    content:
      "Photographie en plongée (high angle) d'un sujet, point de vue élevé regardant vers le bas, effet d'échelle réduite et de vulnérabilité, composition organisée vue du dessus, rendu net et impactant."
  },
  {
    id: "polaroid",
    title: "Polaroid instant photo style",
    category: "Photographie",
    tags: ["polaroid", "instantané"],
    content:
      "Photo style Polaroid instantané, cadre blanc caractéristique, couleurs légèrement délavées et chaudes, vignettage doux sur les bords, ambiance décontractée et nostalgique, rendu photo carrée vintage."
  },
  {
    id: "dieselpunk",
    title: "Dieselpunk aesthetic",
    category: "Style artistique",
    tags: ["dieselpunk", "rétrofuturisme"],
    content:
      "Univers dieselpunk rétrofuturiste inspiré des années 1940, machines industrielles massives, aviation à hélice, palette de couleurs métallique et sépia, éclairage dramatique façon film noir, rendu très détaillé."
  },
  {
    id: "billboard",
    title: "Billboard mockup",
    category: "Branding & design",
    tags: ["billboard", "affichage"],
    content:
      "Mockup d'affichage publicitaire grand format (billboard) en contexte urbain réaliste, perspective en contre-plongée depuis la rue, lumière naturelle de jour, intégration réaliste dans l'environnement, rendu présentation commerciale."
  },
  {
    id: "crosshatching",
    title: "Cross-hatching style",
    category: "Style artistique",
    tags: ["hachures croisées", "gravure"],
    content:
      "Illustration en hachures croisées (cross-hatching) d'un sujet, densité de traits variable pour créer les ombres et volumes, noir et blanc pur façon gravure classique, rendu minutieux et texturé."
  },
  {
    id: "kodak",
    title: "Kodak film aesthetic",
    category: "Photographie",
    tags: ["kodak", "film"],
    content:
      "Photographie avec l'esthétique du film Kodak Portra/Gold, tons chauds et peau naturelle flatteuse, grain fin authentique, contraste doux et couleurs riches, rendu argentique premium nostalgique."
  },
  {
    id: "solarpunk",
    title: "Solarpunk future",
    category: "Style artistique",
    tags: ["solarpunk", "futur durable"],
    content:
      "Univers solarpunk optimiste, architecture verte intégrant panneaux solaires et végétation luxuriante, technologie propre et harmonieuse avec la nature, lumière naturelle éclatante, palette verte et dorée, rendu utopique lumineux."
  },
  {
    id: "depthoffield",
    title: "Shallow depth of field",
    category: "Éclairage & ambiance",
    tags: ["profondeur de champ", "flou"],
    content:
      "Photographie à faible profondeur de champ, sujet parfaitement net se détachant d'un arrière-plan doucement flouté, objectif grande ouverture f/1.4-2, séparation nette sujet/fond, rendu esthétique et professionnel."
  },
  {
    id: "digitalpainting",
    title: "Digital art",
    category: "Style artistique",
    tags: ["digital painting", "art numérique"],
    content:
      "Peinture numérique détaillée d'un sujet, coups de pinceau digitaux expressifs mêlant réalisme et stylisation, éclairage travaillé en plusieurs calques, palette de couleurs riche et harmonieuse, rendu illustration professionnelle."
  },
  {
    id: "80s",
    title: "1980s aesthetic",
    category: "Style artistique",
    tags: ["80s", "synthwave"],
    content:
      "Esthétique rétro années 1980, néons roses et violets façon synthwave, grille perspective futuriste, coucher de soleil dégradé, typographie chrome, ambiance nostalgique VHS, rendu vibrant et saturé."
  },
  {
    id: "minimalinterior",
    title: "Minimal interior concept",
    category: "Branding & design",
    tags: ["minimalisme", "intérieur"],
    content:
      "Concept d'intérieur minimaliste épuré, palette de couleurs neutres (blanc, beige, bois clair), mobilier essentiel aux lignes simples, lumière naturelle abondante, absence de superflu, rendu architectural apaisant."
  },
  {
    id: "backlit",
    title: "Backlit subject",
    category: "Éclairage & ambiance",
    tags: ["contre-jour", "backlit"],
    content:
      "Sujet éclairé à contre-jour (backlit), halo lumineux entourant les contours, léger flare d'objectif, silhouette partiellement translucide, ambiance douce et éthérée, rendu photographique poétique."
  },
  {
    id: "photorealistic",
    title: "Ultra-realistic image style",
    category: "Style artistique",
    tags: ["photoréalisme", "réalisme"],
    content:
      "Image ultra-réaliste d'un sujet, textures et matières indiscernables de la réalité, éclairage physiquement précis, détails microscopiques (pores, fibres, reflets), rendu 8K photoréaliste absolu."
  },
  {
    id: "90s",
    title: "1990s aesthetic",
    category: "Style artistique",
    tags: ["90s", "rétro"],
    content:
      "Esthétique rétro années 1990, couleurs saturées et motifs géométriques audacieux, grain photo argentique, ambiance décontractée pop culture, typographie bold colorée, rendu nostalgique vibrant."
  },
  {
    id: "posterdesign",
    title: "Poster concept",
    category: "Branding & design",
    tags: ["affiche", "poster"],
    content:
      "Concept d'affiche graphique percutante pour un événement, un film ou un produit, composition hiérarchisée avec typographie forte, palette de couleurs impactante, message visuel clair en un coup d'œil, rendu print haute résolution."
  },
  {
    id: "vintage",
    title: "Vintage aesthetic",
    category: "Style artistique",
    tags: ["vintage", "ancien"],
    content:
      "Esthétique vintage d'époque ancienne, tons sépia ou pastel délavés, texture légèrement usée et rayée, éléments décoratifs d'antan, ambiance nostalgique chaleureuse, rendu photo d'archive restaurée."
  },
  {
    id: "pixar",
    title: "3D animated family-film look",
    category: "Rendu 3D",
    tags: ["pixar", "animation 3D"],
    content:
      "Rendu 3D façon film d'animation familial style Pixar, personnages aux traits ronds et expressifs, éclairage chaleureux et coloré, textures douces stylisées, ambiance chaleureuse et enjouée, rendu animation studio."
  },
  {
    id: "neon",
    title: "Neon lighting",
    category: "Éclairage & ambiance",
    tags: ["néon", "lumière colorée"],
    content:
      "Scène éclairée par des néons colorés vifs, reflets lumineux sur surfaces mouillées ou métalliques, contrastes entre zones sombres et halos fluorescents, ambiance urbaine nocturne électrique, rendu vibrant et saturé."
  },
  {
    id: "galaxy",
    title: "Galaxy visualization",
    category: "Univers & espace",
    tags: ["galaxie", "cosmos"],
    content:
      "Visualisation spectaculaire d'une galaxie spirale, bras galactiques scintillants d'étoiles, cœur lumineux dense, nuages de poussière cosmique, échelle vertigineuse, rendu digital astronomique ultra détaillé."
  },
  {
    id: "midjourneystyle",
    title: "Prompt styled for Midjourney-like aesthetics",
    category: "Outils",
    tags: ["midjourney", "prompt engineering"],
    content:
      "Prompt optimisé façon Midjourney : sujet principal détaillé, style artistique précis, éclairage et ambiance décrits, paramètres techniques (--ar 16:9 --v 6 --q 2 --style raw), mots-clés de qualité (highly detailed, trending on artstation, 8K), structure concise et évocatrice."
  },
  {
    id: "imageprompt",
    title: "Convert an idea into a detailed AI image prompt",
    category: "Outils",
    tags: ["meta-prompt", "génération d'idée"],
    content:
      "Transforme l'idée suivante en un prompt de génération d'image détaillé et structuré : [idée brute]. Décris le sujet principal, le style artistique, la composition, l'éclairage, la palette de couleurs, l'ambiance et les détails techniques (objectif, rendu, résolution) pour obtenir un résultat visuel précis et professionnel."
  },
  {
    id: "fantasy",
    title: "Fantasy artwork",
    category: "Style artistique",
    tags: ["fantasy", "médiéval"],
    content:
      "Illustration fantasy épique, univers médiéval-fantastique avec châteaux, créatures magiques et paysages enchantés, éclairage mystique (lumière magique, brume), détails riches façon concept art, rendu digital painting cinématographique."
  }
];
