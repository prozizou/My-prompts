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
  },
  // --- Mouvements de caméra & effets ---
  {
    id: "orbit360",
    title: "Orbit 360",
    category: "Mouvement de caméra",
    tags: ["orbite", "360", "mouvement de caméra"],
    content:
      "Plan en orbite à 360° autour du sujet, caméra tournant lentement sur un axe circulaire complet, sujet centré et stable, arrière-plan qui défile en parallaxe, mouvement fluide et continu, rendu cinématographique immersif."
  },
  {
    id: "dronefly",
    title: "Drone fly",
    category: "Mouvement de caméra",
    tags: ["drone", "survol", "mouvement de caméra"],
    content:
      "Plan de survol en drone, caméra volant à vitesse constante au-dessus du paysage ou de la scène, mouvement fluide en avant avec légère inclinaison, sensation de liberté et d'échelle, rendu aérien cinématographique."
  },
  {
    id: "epicshot",
    title: "Epic shot",
    category: "Mouvement de caméra",
    tags: ["plan épique", "cinématique"],
    content:
      "Plan épique grandiose, cadrage large mettant en valeur l'échelle et la puissance du sujet, éclairage dramatique, composition héroïque en légère contre-plongée, ambiance intense digne d'une bande-annonce de film, rendu cinématographique 8K."
  },
  {
    id: "focuspull",
    title: "Focus pull",
    category: "Mouvement de caméra",
    tags: ["mise au point", "focus pull"],
    content:
      "Plan avec transfert de mise au point (focus pull), premier plan net qui devient flou pendant que l'arrière-plan se révèle net (ou l'inverse), transition fluide et progressive, effet de profondeur dramatique, rendu cinématographique professionnel."
  },
  {
    id: "tiltup",
    title: "Tilt up (caméra vers le haut)",
    category: "Mouvement de caméra",
    tags: ["tilt up", "mouvement vertical"],
    content:
      "Mouvement de caméra tilt up, la caméra pivote verticalement du bas vers le haut en partant des pieds ou de la base du sujet pour révéler progressivement toute sa hauteur, effet de grandeur et de révélation, rendu cinématographique fluide."
  },
  {
    id: "earthzoomout",
    title: "Earth zoom out",
    category: "Mouvement de caméra",
    tags: ["zoom out", "vue satellite", "terre"],
    content:
      "Zoom arrière spectaculaire partant d'un sujet au sol jusqu'à révéler la Terre entière vue de l'espace, transition fluide traversant l'atmosphère et les nuages, échelle vertigineuse, rendu cinématographique façon documentaire spatial."
  },
  {
    id: "pedestalup",
    title: "Pedestal up",
    category: "Mouvement de caméra",
    tags: ["pedestal", "mouvement vertical"],
    content:
      "Mouvement de caméra pedestal up, la caméra s'élève verticalement en gardant le même angle de prise de vue, révélant progressivement la scène en hauteur, mouvement stable et fluide sans rotation, rendu cinématographique précis."
  },
  {
    id: "airplanewrap",
    title: "Airplane wrap",
    category: "Branding & design",
    tags: ["livrée", "avion", "wrap"],
    content:
      "Design de livrée (wrap) pour avion, application du branding et des couleurs de la marque sur toute la carlingue, mockup 3D réaliste vu sous plusieurs angles au sol ou en vol, éclairage naturel, rendu commercial haute qualité."
  },
  {
    id: "fog",
    title: "Fog",
    category: "Éclairage & ambiance",
    tags: ["brouillard", "atmosphère"],
    content:
      "Scène enveloppée d'un brouillard épais et atmosphérique, visibilité réduite créant de la profondeur et du mystère, faisceaux de lumière diffusés dans la brume, silhouettes estompées à l'arrière-plan, ambiance cinématographique mélancolique."
  },
  {
    id: "proshot",
    title: "Pro shot",
    category: "Photographie",
    tags: ["shot professionnel", "studio"],
    content:
      "Prise de vue professionnelle soignée, éclairage maîtrisé façon studio ou set publicitaire, composition irréprochable et cadrage précis, netteté et colorimétrie calibrées, rendu qualité production haut de gamme."
  },
  {
    id: "movieposter",
    title: "Movie poster",
    category: "Branding & design",
    tags: ["affiche de film", "cinéma"],
    content:
      "Affiche de film cinématographique, composition héroïque des personnages principaux au premier plan, titre en typographie impactante, éclairage dramatique et palette de couleurs cohérente avec le genre, logos et mentions en bas de l'affiche, rendu poster professionnel haute résolution."
  },
  {
    id: "cheatsheet",
    title: "Cheat sheet",
    category: "Infographie & schémas",
    tags: ["cheat sheet", "infographie"],
    content:
      "Fiche mémo (cheat sheet) visuelle et organisée, sections clairement délimitées avec titres, icônes explicatives, hiérarchie de l'information lisible en un coup d'œil, palette de couleurs sobre et cohérente, rendu infographique propre et pédagogique."
  },
  {
    id: "blueprint",
    title: "Blueprint",
    category: "Infographie & schémas",
    tags: ["plan technique", "schéma"],
    content:
      "Plan technique façon blueprint d'architecte, traits blancs fins sur fond bleu profond, vues de face/profil/coupe avec cotations et annotations, grille de construction visible, rendu schématique précis et professionnel."
  },
  {
    id: "flashcards",
    title: "Flashcards",
    category: "Infographie & schémas",
    tags: ["flashcards", "apprentissage"],
    content:
      "Série de flashcards pédagogiques, recto avec illustration ou mot-clé simple, verso avec définition ou réponse concise, design épuré et cohérent, couleurs douces et lisibles, rendu adapté à l'impression ou au numérique."
  },
  {
    id: "mindmap",
    title: "Mind map",
    category: "Infographie & schémas",
    tags: ["carte mentale", "mind map"],
    content:
      "Carte mentale (mind map) organisée autour d'un concept central, branches colorées se ramifiant vers les sous-thèmes, icônes et mots-clés courts, hiérarchie visuelle claire, mise en page équilibrée et lisible, rendu infographique net."
  },
  // --- 3D / publicité / affichage ---
  {
    id: "3dbillboard",
    title: "3D billboard",
    category: "Publicité 3D",
    tags: ["billboard 3D", "anamorphose"],
    content:
      "Panneau publicitaire 3D anamorphique ultra réaliste sur un immeuble d'angle, éléments semblant sortir de l'écran en trompe-l'œil, foule urbaine en contrebas pour l'échelle, éclairage LED vif de nuit, rendu photoréaliste type Times Square/Piccadilly Circus."
  },
  {
    id: "gravitydefying",
    title: "Gravity defying",
    category: "Publicité 3D",
    tags: ["apesanteur", "lévitation"],
    content:
      "Scène défiant la gravité où le sujet ou les objets flottent et lévitent dans les airs, composition dynamique avec débris ou éléments suspendus, éclairage dramatique soulignant l'apesanteur, sensation d'irréel et de puissance, rendu publicitaire spectaculaire."
  },
  {
    id: "giantbillboard",
    title: "Giant billboard",
    category: "Publicité 3D",
    tags: ["billboard géant", "urbain"],
    content:
      "Immense panneau publicitaire dominant un carrefour urbain dense, échelle monumentale comparée aux bâtiments et passants environnants, éclairage nocturne éclatant, perspective en contre-plongée depuis la rue, rendu photoréaliste grand format."
  },
  {
    id: "floatingbillboard",
    title: "Floating billboard",
    category: "Publicité 3D",
    tags: ["billboard flottant", "surréaliste"],
    content:
      "Panneau publicitaire flottant dans les airs au-dessus de la ville, sans support visible, effet de lévitation surréaliste, ciel dégagé ou nuageux en arrière-plan, éclairage naturel contrastant avec l'affiche lumineuse, rendu publicitaire impactant et onirique."
  },
  {
    id: "cinematicad",
    title: "Cinematic ad",
    category: "Publicité 3D",
    tags: ["publicité", "cinématique"],
    content:
      "Publicité au rendu cinématographique, mise en scène narrative du produit avec éclairage dramatique et étalonnage colorimétrique soigné, format large panoramique, ambiance premium digne d'un spot TV haut de gamme, rendu qualité blockbuster."
  },
  {
    id: "luxuryad",
    title: "Luxury ad",
    category: "Publicité 3D",
    tags: ["publicité luxe", "premium"],
    content:
      "Publicité haut de gamme pour un produit de luxe, mise en scène minimaliste sur matériaux nobles (marbre, velours, or), éclairage tamisé et sophistiqué, composition épurée mettant le produit en valeur, rendu campagne premium irréprochable."
  },
  {
    id: "streetadvertising",
    title: "Street advertising",
    category: "Publicité 3D",
    tags: ["publicité de rue", "mobilier urbain"],
    content:
      "Publicité intégrée dans un environnement de rue réaliste, affiche ou mobilier urbain (abribus, colonne Morris) en situation, passants et circulation en arrière-plan flou, lumière naturelle de jour, rendu photoréaliste immersif."
  },
  {
    id: "urbancampaign",
    title: "Urban campaign",
    category: "Publicité 3D",
    tags: ["campagne urbaine", "multi-supports"],
    content:
      "Campagne publicitaire urbaine à grande échelle déployée sur plusieurs supports (bus, façades, abribus) dans une même ville, cohérence visuelle et colorimétrique entre les supports, ambiance dynamique de rue animée, rendu mockup réaliste multi-supports."
  },
  {
    id: "premiumbrand",
    title: "Premium brand",
    category: "Publicité 3D",
    tags: ["identité premium", "branding"],
    content:
      "Identité de marque premium sophistiquée, palette de couleurs sobre (noir, or, blanc cassé), typographie élégante et minimaliste, matériaux nobles dans les déclinaisons (packaging, papeterie), rendu mockup haut de gamme cohérent."
  },
  {
    id: "producthero",
    title: "Product hero",
    category: "Publicité 3D",
    tags: ["produit hero", "publicité"],
    content:
      "Le produit mis en scène comme élément héroïque central de l'image, éclairage dramatique sculptant ses contours, arrière-plan sombre et épuré pour maximiser le contraste, angle de vue valorisant, reflets et détails soignés, rendu publicitaire premium."
  },

  // ===========================================================
  // Guide des commandes ChatGPT — écriture, création, analyse,
  // apprentissage et développement. Le titre est le nom de la
  // commande (copié avec le préfixe "/"), le contenu reprend la
  // description du guide.
  // ===========================================================

  // --- 1. Écriture & style ---
  { id: "ghost", title: "ghost", category: "Écriture & style", tags: ["chatgpt", "écriture"], content: "Réécrit un texte pour lui donner un style plus naturel et moins artificiel." },
  { id: "mirror", title: "mirror", category: "Écriture & style", tags: ["chatgpt", "écriture"], content: "Reproduit le style d'écriture fourni dans un exemple." },
  { id: "raw", title: "raw", category: "Écriture & style", tags: ["chatgpt", "écriture"], content: "Produit une réponse brute, directe et sans mise en forme superflue." },
  { id: "voice", title: "voice", category: "Écriture & style", tags: ["chatgpt", "écriture"], content: "Adopte un ton précis et le conserve sur l'ensemble du texte." },
  { id: "punch", title: "punch", category: "Écriture & style", tags: ["chatgpt", "écriture"], content: "Raccourcit les phrases et renforce leur impact." },
  { id: "flow", title: "flow", category: "Écriture & style", tags: ["chatgpt", "écriture"], content: "Réorganise le contenu pour obtenir une lecture plus fluide." },
  { id: "trim", title: "trim", category: "Écriture & style", tags: ["chatgpt", "écriture"], content: "Supprime le superflu sans perdre les informations essentielles." },
  { id: "hook", title: "hook", category: "Écriture & style", tags: ["chatgpt", "écriture"], content: "Retravaille l'introduction pour capter immédiatement l'attention." },
  { id: "rephrase", title: "rephrase", category: "Écriture & style", tags: ["chatgpt", "écriture"], content: "Reformule une idée sans en modifier le sens." },
  { id: "polish", title: "polish", category: "Écriture & style", tags: ["chatgpt", "écriture"], content: "Transforme un brouillon en texte clair, soigné et professionnel." },

  // --- 2. Création & prototypage ---
  { id: "canvas", title: "canvas", category: "Création & prototypage", tags: ["chatgpt", "prototypage"], content: "Demande la création d'un espace de travail éditable." },
  { id: "buildme", title: "buildme", category: "Création & prototypage", tags: ["chatgpt", "prototypage"], content: "Transforme une idée ou une description en concept d'outil fonctionnel." },
  { id: "dashboard", title: "dashboard", category: "Création & prototypage", tags: ["chatgpt", "prototypage"], content: "Conçoit la structure d'un tableau de bord interactif." },
  { id: "prototype", title: "prototype", category: "Création & prototypage", tags: ["chatgpt", "prototypage"], content: "Transforme une idée en proposition de prototype visuel ou fonctionnel." },
  { id: "render", title: "render", category: "Création & prototypage", tags: ["chatgpt", "prototypage"], content: "Transforme une description en proposition visuelle." },
  { id: "projectblueprint", title: "blueprint", category: "Création & prototypage", tags: ["chatgpt", "prototypage"], content: "Produit un plan détaillé de projet : architecture, composants et fichiers nécessaires." },
  { id: "wireframe", title: "wireframe", category: "Création & prototypage", tags: ["chatgpt", "prototypage"], content: "Conçoit la structure simplifiée d'un site ou d'une application." },
  { id: "livecode", title: "livecode", category: "Création & prototypage", tags: ["chatgpt", "prototypage"], content: "Demande de produire et d'exécuter du code lorsque l'environnement le permet." },
  { id: "generator", title: "generator", category: "Création & prototypage", tags: ["chatgpt", "prototypage"], content: "Conçoit un générateur ou outil réutilisable pour une tâche donnée." },
  { id: "moodboard", title: "moodboard", category: "Création & prototypage", tags: ["chatgpt", "prototypage"], content: "Définit une direction artistique cohérente : ambiance, couleurs, typographie et références." },

  // --- 3. Réflexion & raisonnement ---
  { id: "ooda", title: "ooda", category: "Réflexion & raisonnement", tags: ["chatgpt", "raisonnement"], content: "Analyse selon le cycle : Observer → Orienter → Décider → Agir." },
  { id: "deepthink", title: "deepthink", category: "Réflexion & raisonnement", tags: ["chatgpt", "raisonnement"], content: "Demande une analyse approfondie avant de produire la conclusion." },
  { id: "l99", title: "l99", category: "Réflexion & raisonnement", tags: ["chatgpt", "raisonnement"], content: "Demande un niveau de profondeur particulièrement élevé." },
  { id: "chainlogic", title: "chainlogic", category: "Réflexion & raisonnement", tags: ["chatgpt", "raisonnement"], content: "Présente une explication structurée des principaux éléments ayant conduit à la conclusion." },
  { id: "blindspots", title: "blindspots", category: "Réflexion & raisonnement", tags: ["chatgpt", "raisonnement"], content: "Recherche les éléments importants qui auraient pu être oubliés." },
  { id: "overthink", title: "overthink", category: "Réflexion & raisonnement", tags: ["chatgpt", "raisonnement"], content: "Examine volontairement davantage d'hypothèses, de risques et de conséquences." },
  { id: "unpack", title: "unpack", category: "Réflexion & raisonnement", tags: ["chatgpt", "raisonnement"], content: "Décompose un problème complexe en éléments simples." },
  { id: "invert", title: "invert", category: "Réflexion & raisonnement", tags: ["chatgpt", "raisonnement"], content: "Analyse le problème à l'envers pour trouver une autre solution." },
  { id: "layered", title: "layered", category: "Réflexion & raisonnement", tags: ["chatgpt", "raisonnement"], content: "Présente la réponse en plusieurs niveaux : simple, intermédiaire et expert." },
  { id: "xray", title: "xray", category: "Réflexion & raisonnement", tags: ["chatgpt", "raisonnement"], content: "Analyse ce qui se cache derrière le problème apparent." },

  // --- 4. Apprentissage ---
  { id: "teachme", title: "teachme", category: "Apprentissage", tags: ["chatgpt", "apprentissage"], content: "Transforme un sujet ou une réponse en véritable leçon structurée." },
  { id: "gapfinder", title: "gapfinder", category: "Apprentissage", tags: ["chatgpt", "apprentissage"], content: "Identifie les connaissances manquantes sur un sujet." },
  { id: "eli5", title: "eli5", category: "Apprentissage", tags: ["chatgpt", "apprentissage"], content: "Explique très simplement, comme à un débutant complet." },
  { id: "masterclass", title: "masterclass", category: "Apprentissage", tags: ["chatgpt", "apprentissage"], content: "Fournit une formation approfondie et de niveau avancé." },
  { id: "drill", title: "drill", category: "Apprentissage", tags: ["chatgpt", "apprentissage"], content: "Génère des exercices pratiques pour consolider les connaissances." },
  { id: "speedrun", title: "speedrun", category: "Apprentissage", tags: ["chatgpt", "apprentissage"], content: "Explique un sujet par le chemin le plus court vers sa compréhension." },
  { id: "mentor", title: "mentor", category: "Apprentissage", tags: ["chatgpt", "apprentissage"], content: "Donne des conseils dans une logique d'accompagnement progressif." },
  { id: "levelup", title: "levelup", category: "Apprentissage", tags: ["chatgpt", "apprentissage"], content: "Évalue le niveau actuel puis propose la prochaine étape d'apprentissage." },
  { id: "crashcourse", title: "crashcourse", category: "Apprentissage", tags: ["chatgpt", "apprentissage"], content: "Fournit rapidement les notions essentielles d'un sujet." },
  { id: "bootcamp", title: "bootcamp", category: "Apprentissage", tags: ["chatgpt", "apprentissage"], content: "Construit un programme progressif allant du niveau débutant au niveau avancé." },

  // --- 5. Analyse & stratégie ---
  { id: "redteam", title: "redteam", category: "Analyse & stratégie", tags: ["chatgpt", "stratégie"], content: "Cherche activement les faiblesses, risques et objections d'une idée." },
  { id: "pareto", title: "pareto", category: "Analyse & stratégie", tags: ["chatgpt", "stratégie"], content: "Identifie les actions minoritaires susceptibles de produire la majorité des résultats." },
  { id: "swot", title: "swot", category: "Analyse & stratégie", tags: ["chatgpt", "stratégie"], content: "Analyse les forces, faiblesses, opportunités et menaces." },
  { id: "wargame", title: "wargame", category: "Analyse & stratégie", tags: ["chatgpt", "stratégie"], content: "Simule différents comportements possibles des concurrents ou acteurs concernés." },
  { id: "premortem", title: "premortem", category: "Analyse & stratégie", tags: ["chatgpt", "stratégie"], content: "Imagine qu'un projet a échoué puis recherche les causes possibles de cet échec." },
  { id: "leverage", title: "leverage", category: "Analyse & stratégie", tags: ["chatgpt", "stratégie"], content: "Recherche les actions ayant le plus fort effet de levier." },
  { id: "audit", title: "audit", category: "Analyse & stratégie", tags: ["chatgpt", "stratégie"], content: "Examine méthodiquement un projet et signale les problèmes détectés." },
  { id: "bottleneck", title: "bottleneck", category: "Analyse & stratégie", tags: ["chatgpt", "stratégie"], content: "Identifie le principal point de blocage ou ralentissement d'un système." },
  { id: "scenario", title: "scenario", category: "Analyse & stratégie", tags: ["chatgpt", "stratégie"], content: "Étudie plusieurs évolutions ou futurs possibles." },
  { id: "tradeoff", title: "tradeoff", category: "Analyse & stratégie", tags: ["chatgpt", "stratégie"], content: "Présente clairement les avantages, inconvénients et coûts de chaque option." },

  // --- 6. Créativité & contenu ---
  { id: "viral", title: "viral", category: "Créativité & contenu", tags: ["chatgpt", "créativité"], content: "Optimise un contenu pour favoriser son intérêt et son partage." },
  { id: "hooks10", title: "hooks10", category: "Créativité & contenu", tags: ["chatgpt", "créativité"], content: "Génère dix accroches différentes pour un même sujet." },
  { id: "storysell", title: "storysell", category: "Créativité & contenu", tags: ["chatgpt", "créativité"], content: "Transforme un argument ou message commercial en récit." },
  { id: "remix", title: "remix", category: "Créativité & contenu", tags: ["chatgpt", "créativité"], content: "Combine plusieurs idées pour produire une nouvelle approche." },
  { id: "angles", title: "angles", category: "Créativité & contenu", tags: ["chatgpt", "créativité"], content: "Propose plusieurs angles différents pour traiter un même sujet." },
  { id: "cliffhanger", title: "cliffhanger", category: "Créativité & contenu", tags: ["chatgpt", "créativité"], content: "Conçoit une fin qui crée de l'attente pour la suite." },
  { id: "captionme", title: "captionme", category: "Créativité & contenu", tags: ["chatgpt", "créativité"], content: "Génère des légendes destinées aux publications et réseaux sociaux." },
  { id: "polarize", title: "polarize", category: "Créativité & contenu", tags: ["chatgpt", "créativité"], content: "Renforce et clarifie une prise de position." },
  { id: "banger", title: "banger", category: "Créativité & contenu", tags: ["chatgpt", "créativité"], content: "Transforme une phrase ordinaire en formule plus mémorable." },
  { id: "thumbnail", title: "thumbnail", category: "Créativité & contenu", tags: ["chatgpt", "créativité"], content: "Propose des titres ou concepts destinés à améliorer l'attractivité d'une miniature." },

  // --- 7. Code & technique ---
  { id: "debug", title: "debug", category: "Code & technique", tags: ["chatgpt", "code"], content: "Recherche un bug et explique son origine." },
  { id: "refactor", title: "refactor", category: "Code & technique", tags: ["chatgpt", "code"], content: "Réorganise et nettoie le code sans modifier son comportement attendu." },
  { id: "shipit", title: "shipit", category: "Code & technique", tags: ["chatgpt", "code"], content: "Prépare un code ou prototype pour une utilisation en production." },
  { id: "architect", title: "architect", category: "Code & technique", tags: ["chatgpt", "code"], content: "Définit l'architecture technique avant l'implémentation." },
  { id: "convert", title: "convert", category: "Code & technique", tags: ["chatgpt", "code"], content: "Convertit du code vers un autre langage ou format." },
  { id: "automate", title: "automate", category: "Code & technique", tags: ["chatgpt", "code"], content: "Transforme une opération répétitive en automatisation ou script." },
  { id: "testit", title: "testit", category: "Code & technique", tags: ["chatgpt", "code"], content: "Produit des tests permettant de vérifier le fonctionnement du code." },
  { id: "scaffold", title: "scaffold", category: "Code & technique", tags: ["chatgpt", "code"], content: "Génère l'arborescence et la structure initiale d'un projet." },
  { id: "optimize", title: "optimize", category: "Code & technique", tags: ["chatgpt", "code"], content: "Recherche des améliorations de performances sans casser le fonctionnement existant." },
  { id: "apibuild", title: "apibuild", category: "Code & technique", tags: ["chatgpt", "code"], content: "Conçoit la structure et l'implémentation d'une API à partir d'un besoin." },

  // --- 8. Recherche & investigation ---
  { id: "deepdive", title: "deepdive", category: "Recherche & investigation", tags: ["chatgpt", "recherche"], content: "Réalise une analyse approfondie d'un sujet." },
  { id: "factcheck", title: "factcheck", category: "Recherche & investigation", tags: ["chatgpt", "recherche"], content: "Vérifie les affirmations et signale les incertitudes ou contradictions." },
  { id: "sources", title: "sources", category: "Recherche & investigation", tags: ["chatgpt", "recherche"], content: "Demande d'appuyer les affirmations importantes sur des sources." },
  { id: "compare", title: "compare", category: "Recherche & investigation", tags: ["chatgpt", "recherche"], content: "Compare plusieurs solutions selon des critères précis et désigne éventuellement la meilleure." },
  { id: "investigate", title: "investigate", category: "Recherche & investigation", tags: ["chatgpt", "recherche"], content: "Étudie méthodiquement une question à partir des informations disponibles." },
  { id: "trendscan", title: "trendscan", category: "Recherche & investigation", tags: ["chatgpt", "recherche"], content: "Recherche les tendances et évolutions récentes d'un domaine." },
  { id: "extract", title: "extract", category: "Recherche & investigation", tags: ["chatgpt", "recherche"], content: "Extrait les informations précises et pertinentes d'un document volumineux." },
  { id: "timeline", title: "timeline", category: "Recherche & investigation", tags: ["chatgpt", "recherche"], content: "Organise les événements d'un sujet dans l'ordre chronologique." },
  { id: "digest", title: "digest", category: "Recherche & investigation", tags: ["chatgpt", "recherche"], content: "Condense un volume important d'informations pour ne conserver que l'essentiel." },
  { id: "dossier", title: "dossier", category: "Recherche & investigation", tags: ["chatgpt", "recherche"], content: "Produit un dossier structuré et détaillé sur un sujet." },

  // --- 9. Instructions avancées ---
  { id: "godmode", title: "godmode", category: "Instructions avancées", tags: ["chatgpt", "prompt engineering"], content: "Demande une réponse particulièrement complète et multidimensionnelle." },
  { id: "autoprompt", title: "autoprompt", category: "Instructions avancées", tags: ["chatgpt", "prompt engineering"], content: "Transforme une idée sommaire en prompt clair, précis et exploitable." },
  { id: "megaprompt", title: "megaprompt", category: "Instructions avancées", tags: ["chatgpt", "prompt engineering"], content: "Construit un prompt très détaillé avec contexte, objectifs, contraintes et format attendu." },
  { id: "chain", title: "chain", category: "Instructions avancées", tags: ["chatgpt", "prompt engineering"], content: "Organise une tâche complexe en plusieurs étapes ou instructions successives." },
  { id: "system", title: "system", category: "Instructions avancées", tags: ["chatgpt", "prompt engineering"], content: "Aide à rédiger une instruction système adaptée à un assistant ou agent IA." },
  { id: "persona", title: "persona", category: "Instructions avancées", tags: ["chatgpt", "prompt engineering"], content: "Définit le rôle, l'expertise et le comportement attendu de l'assistant." },
  { id: "memory", title: "memory", category: "Instructions avancées", tags: ["chatgpt", "prompt engineering"], content: "Indique les informations que l'utilisateur souhaite conserver comme contexte lorsque la fonction de mémoire le permet." },
  { id: "context", title: "context", category: "Instructions avancées", tags: ["chatgpt", "prompt engineering"], content: "Fournit explicitement le contexte nécessaire avant d'exécuter une tâche." },
  { id: "rolelock", title: "rolelock", category: "Instructions avancées", tags: ["chatgpt", "prompt engineering"], content: "Demande de conserver le même rôle et les mêmes contraintes pendant toute la tâche." },
  { id: "promptfix", title: "promptfix", category: "Instructions avancées", tags: ["chatgpt", "prompt engineering"], content: "Analyse un prompt faible ou ambigu et le transforme en instruction plus efficace." },

  // --- 10. Modes spécialisés ---
  { id: "nofilter", title: "nofilter", category: "Modes spécialisés", tags: ["chatgpt", "mode spécialisé"], content: "Demande une réponse très directe, dans les limites normales de sécurité et de fiabilité." },
  { id: "beastmode", title: "beastmode", category: "Modes spécialisés", tags: ["chatgpt", "mode spécialisé"], content: "Demande de maximiser la profondeur, la précision et la qualité du résultat." },
  { id: "coach", title: "coach", category: "Modes spécialisés", tags: ["chatgpt", "mode spécialisé"], content: "Analyse une situation sous forme d'accompagnement, d'objectifs et d'actions." },
  { id: "ceomode", title: "ceomode", category: "Modes spécialisés", tags: ["chatgpt", "mode spécialisé"], content: "Examine une décision du point de vue de la direction d'une entreprise." },
  { id: "negotiate", title: "negotiate", category: "Modes spécialisés", tags: ["chatgpt", "mode spécialisé"], content: "Construit une stratégie ou un script de négociation." },
  { id: "founder", title: "founder", category: "Modes spécialisés", tags: ["chatgpt", "mode spécialisé"], content: "Analyse une question avec une perspective de création et développement de startup." },
  { id: "closer", title: "closer", category: "Modes spécialisés", tags: ["chatgpt", "mode spécialisé"], content: "Optimise un argumentaire commercial pour favoriser la conversion." },
  { id: "operator", title: "operator", category: "Modes spécialisés", tags: ["chatgpt", "mode spécialisé"], content: "Transforme un objectif en plan opérationnel concret et exécutable." },
  { id: "deadline", title: "deadline", category: "Modes spécialisés", tags: ["chatgpt", "mode spécialisé"], content: "Priorise les actions essentielles lorsqu'un délai est très court." },
  { id: "sentinel", title: "sentinel", category: "Modes spécialisés", tags: ["chatgpt", "mode spécialisé"], content: "Recherche systématiquement erreurs, incohérences, risques et angles morts." }
];
