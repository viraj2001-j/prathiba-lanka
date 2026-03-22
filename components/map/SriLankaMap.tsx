"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPinned,
  Landmark,
  Mountain,
  Building2,
  Palmtree,
  Users,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MousePointerClick,
  Map,
  Compass,
  ArrowDownRight,
  Info,
  Camera,
  Navigation,
  Globe2,
  History,
  Trees,
  Shell,
  Utensils,
  Church,
  Waves,
  CloudSun,
  Wind,
} from "lucide-react";

type DistrictData = {
  id: string;
  name: string;
  province: string;
  geographicalProfile: string;
  historyAndHeritage: string;
  economyAndInfrastructure: string;
  tourismAndAttractions: string;
  demographicsAndCulture: string;
  images: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  area?: string;
  population?: string;
};

function districtImages(folder: string) {
  return [
    `/districts/${folder}/1.jpg`,
    `/districts/${folder}/2.jpg`,
    `/districts/${folder}/3.jpg`,
  ];
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const DISTRICT_DATA: Record<string, DistrictData> = {
  LK11: {
    id: "LK11",
    name: "Colombo",
    province: "Western Province",
    geographicalProfile:
      "Colombo District lies along Sri Lanka's western coast, combining a dense urban shoreline with suburban and commercial zones. As the island's commercial capital, it features a mix of modern high-rises, colonial architecture, and vibrant street life.",
    historyAndHeritage:
      "Colombo has served as a major colonial and trading center under Portuguese, Dutch, and British rule since the 16th century. Its historic quarters, including the Pettah market district and colonial-era buildings, reflect layers of Sri Lanka's urban evolution.",
    economyAndInfrastructure:
      "As Sri Lanka's economic heart, Colombo hosts the Colombo Stock Exchange, World Trade Center, and headquarters of major financial institutions. The port handles the majority of the country's international trade, while the Bandaranaike International Airport serves as the primary aviation gateway.",
    tourismAndAttractions:
      "Popular attractions include Galle Face Green, Gangaramaya Temple, Independence Square, the National Museum, Pettah Bazaar, and the floating market. The city also offers world-class shopping, dining, and nightlife experiences.",
    demographicsAndCulture:
      "Colombo is Sri Lanka's most cosmopolitan district, home to Sinhalese, Tamil, Moor, Burgher, and Malay communities. This diversity is reflected in its numerous places of worship, fusion cuisine, and vibrant cultural calendar.",
    images: districtImages("colombo"),
    area: "642 km²",
    population: "2.3 million",
  },
  LK12: {
    id: "LK12",
    name: "Gampaha",
    province: "Western Province",
    geographicalProfile:
      "Gampaha District stretches through busy suburban belts, wetlands, coconut-growing zones, and coastal areas north of Colombo. It encompasses both densely populated urban centers and serene semi-rural landscapes.",
    historyAndHeritage:
      "Historically linked with the old Kingdom of Kotte and later colonial administration, Gampaha contains significant Buddhist temples, Dutch-era churches, and traditional settlements that reflect deep cultural continuity.",
    economyAndInfrastructure:
      "The district has a robust mixed economy supported by trade, manufacturing, agriculture, and education. Its proximity to Colombo and the Bandaranaike International Airport provides strategic economic advantages.",
    tourismAndAttractions:
      "Key attractions include Negombo's beaches and lagoon, Muthurajawela wetlands sanctuary, Henarathgoda Botanical Garden, and several historic churches and temples.",
    demographicsAndCulture:
      "Gampaha is culturally vibrant with predominantly Sinhalese communities, alongside Tamil and Muslim populations. The district is known for its Catholic heritage in coastal areas and traditional Buddhist culture inland.",
    images: districtImages("gampaha"),
  },
  LK13: {
    id: "LK13",
    name: "Kalutara",
    province: "Western Province",
    geographicalProfile:
      "Kalutara District features a scenic blend of coastline, rivers, wetlands, rubber and coconut plantations, and inland towns. The Kalu Ganga, the district's lifeline, creates fertile valleys along its course.",
    historyAndHeritage:
      "Kalutara has a rich coastal history influenced by international trade, Buddhism, and colonial presence. The iconic Kalutara Vihara, built around a British-era fort, symbolizes the district's layered heritage.",
    economyAndInfrastructure:
      "The economy includes agriculture (rubber, coconut, spices), tourism, fisheries, and growing residential development. The Southern Expressway has significantly improved connectivity and economic growth.",
    tourismAndAttractions:
      "Notable attractions include the Kalutara Bodhiya, Richmond Castle, scenic river cruises, beach resorts, and the nearby Brief Garden by Bevis Bawa.",
    demographicsAndCulture:
      "The district reflects strong Sinhala Buddhist traditions while maintaining a coastal multicultural character shaped by centuries of maritime commerce and cultural exchange.",
    images: districtImages("kalutara"),
  },
  LK21: {
    id: "LK21",
    name: "Kandy",
    province: "Central Province",
    geographicalProfile:
      "Kandy District is defined by hills, valleys, forests, and tea-growing regions at elevations between 465-1,500 meters. The district enjoys a cooler climate and features stunning mountain scenery around the Mahaweli River basin.",
    historyAndHeritage:
      "Kandy was the last capital of the Sinhala kings and remains Sri Lanka's cultural capital. The Temple of the Sacred Tooth Relic, housing a tooth of the Buddha, is the nation's most sacred Buddhist site.",
    economyAndInfrastructure:
      "The district economy thrives on education, tourism, trade, and plantation agriculture. Kandy city remains a major administrative, transport, and commercial hub for the central highlands.",
    tourismAndAttractions:
      "Must-see attractions include the Temple of the Tooth, Kandy Lake, Peradeniya Botanical Gardens, Royal Palace complex, Udawatta Kele sanctuary, and the annual Esala Perahera festival.",
    demographicsAndCulture:
      "Kandy is deeply associated with Sri Lankan Buddhist traditions, Kandyan dance, classical arts, and ceremonial heritage. The district preserves traditional crafts including silverware, woodcarving, and batik.",
    images: districtImages("kandy"),
  },
  LK22: {
    id: "LK22",
    name: "Matale",
    province: "Central Province",
    geographicalProfile:
      "Matale District spans from fertile valleys to highland edges and rocky terrain. It serves as a transitional zone between the central hills and dry-zone plains, known for its spice gardens and agricultural diversity.",
    historyAndHeritage:
      "Matale has a rich historical background connected to ancient settlement patterns, Kandyan-era history, and the 1848 Matale Rebellion against British rule. Its villages preserve longstanding customs and traditional crafts.",
    economyAndInfrastructure:
      "Agriculture dominates the economy, especially spices (pepper, cardamom, cloves), vegetables, and paddy. Small-scale industry, trade, and regional transport connections also support local livelihoods.",
    tourismAndAttractions:
      "Attractions include Aluvihare Rock Temple (where the Pali canon was first written down), spice gardens, river scenery, and the scenic Riverstone gap.",
    demographicsAndCulture:
      "Matale has a strong agrarian and temple-centered cultural life, with predominantly Sinhalese communities and significant Tamil populations in plantation areas.",
    images: districtImages("matale"),
  },
  LK23: {
    id: "LK23",
    name: "Nuwara Eliya",
    province: "Central Province",
    geographicalProfile:
      "Nuwara Eliya District sits in the central highlands at elevations of 1,500-2,500 meters. Known as 'Little England,' it features cool climate, misty mountains, rolling tea estates, waterfalls, and dramatic upland scenery.",
    historyAndHeritage:
      "The district developed intensively during British colonial rule as a hill station and tea-growing region. Colonial architecture, country houses, and the racecourse preserve this heritage, alongside ancient indigenous settlements.",
    economyAndInfrastructure:
      "Tea production is the economic backbone, with some of the world's finest teas grown here. Vegetable farming, tourism, and service sectors are also significant. Mountain roads connect major plantation areas.",
    tourismAndAttractions:
      "Popular destinations include Horton Plains National Park, Gregory Lake, Hakgala Botanical Garden, Devon Falls, St. Clair's Falls, and the historic town center with its colonial buildings.",
    demographicsAndCulture:
      "The district has a distinctive multicultural identity with Sinhalese, Tamil, and Indian Tamil estate communities. Its social fabric reflects plantation heritage, religious diversity, and unique highland traditions.",
    images: districtImages("nuwara-eliya"),
  },
  LK31: {
    id: "LK31",
    name: "Galle",
    province: "Southern Province",
    geographicalProfile:
      "Galle District combines a stunning southern coastline with inland villages, paddy lands, and low-country greenery. The coast features rocky headlands, sandy bays, and natural harbors, while inland areas rise to rolling hills.",
    historyAndHeritage:
      "Galle has centuries of maritime history and is globally known for the UNESCO-listed Galle Fort, built by the Portuguese in 1588 and extensively fortified by the Dutch. The district reflects strong links to international trade and cultural exchange.",
    economyAndInfrastructure:
      "Tourism, fisheries, agriculture (cinnamon, rubber, coconut), trade, and services drive the district economy. The expanded southern highway network has strengthened its regional importance.",
    tourismAndAttractions:
      "Galle Fort, Unawatuna and Mirissa beaches, Japanese Peace Pagoda, Rumassala jungle, sea turtle hatcheries, and whale-watching opportunities make this one of Sri Lanka's premier travel destinations.",
    demographicsAndCulture:
      "The district has a strong southern Sinhala cultural identity with coastal traditions, vibrant religious life, and a relaxed yet sophisticated social atmosphere influenced by tourism and heritage.",
    images: districtImages("galle"),
  },
  LK32: {
    id: "LK32",
    name: "Matara",
    province: "Southern Province",
    geographicalProfile:
      "Matara District includes beaches, fishing settlements, river zones, coconut lands, and inland farming communities. It sits along Sri Lanka's southern edge with both urban centers and rural expanses.",
    historyAndHeritage:
      "Matara has deep southern historical roots shaped by ancient settlement, temple life, and colonial coastal activity. The Dutch Star Fort and Matara Fort remain significant colonial-era structures.",
    economyAndInfrastructure:
      "The economy relies on agriculture (tea, rubber, coconut), fisheries, trade, education, and tourism. Improved southern transport routes have enhanced accessibility and economic activity.",
    tourismAndAttractions:
      "The district offers beautiful beaches at Polhena and Madiha, Weherahena Temple, Dondra Head (Sri Lanka's southernmost point), Parewi Dupatha temple, and easy access to whale-watching areas.",
    demographicsAndCulture:
      "Matara reflects classic southern Sri Lankan traditions, with strong community bonds, Buddhist observances, and a close relationship with the sea. The district is known for its scholarly traditions.",
    images: districtImages("matara"),
  },
  LK33: {
    id: "LK33",
    name: "Hambantota",
    province: "Southern Province",
    geographicalProfile:
      "Hambantota District is marked by dry-zone plains, salt pans, scrub forest, lagoons, and wildlife-rich areas. It has a distinctly southeastern character with a landscape shaped by seasonal drought.",
    historyAndHeritage:
      "The district has long-standing links to coastal trade, salt production, and rural settlement. Ancient ports like Godavaya and Magampura kingdoms feature prominently in regional history.",
    economyAndInfrastructure:
      "The economy includes agriculture, fisheries, port-related development, salt production, and tourism. The Magampura Mahinda Rajapaksa Port and Hambantota International Airport represent major infrastructure investments.",
    tourismAndAttractions:
      "Proximity to Yala and Bundala National Parks, scenic beaches at Tangalle, bird sanctuaries, ancient temples, and dry-zone landscapes attract nature and wildlife enthusiasts.",
    demographicsAndCulture:
      "Hambantota's culture is shaped by resilient village life, southern customs, strong Buddhist traditions, and communities intimately connected to the land and sea.",
    images: districtImages("hambantota"),
  },
  LK41: {
    id: "LK41",
    name: "Jaffna",
    province: "Northern Province",
    geographicalProfile:
      "Jaffna District lies on the northern Jaffna Peninsula, characterized by flat terrain, limestone geology, coastal edges, lagoons, and offshore islands. Its dry climate and unique geography distinguish it from the rest of the island.",
    historyAndHeritage:
      "Jaffna has a rich Tamil cultural legacy spanning two millennia, with roots in ancient Jaffna Kingdom, scholarly traditions, and distinctive religious practices. The district preserves Dravidian architecture and classical literature.",
    economyAndInfrastructure:
      "The district economy includes fisheries, agriculture (especially red onions, chillies, tobacco), trade, education, and public services. Post-conflict reconstruction has focused on connectivity and infrastructure development.",
    tourismAndAttractions:
      "Nallur Kandaswamy Kovil, Jaffna Fort, Casuarina Beach, Delft Island with its wild ponies, Keerimalai hot springs, and distinctive Tamil cuisine make the district uniquely memorable.",
    demographicsAndCulture:
      "Jaffna is the heart of Sri Lankan Tamil identity, language, literature, and Saivite Hindu traditions. Its culture is characterized by classical music, Bharatanatyam dance, and distinctive culinary traditions.",
    images: districtImages("jaffna"),
  },
  LK42: {
    id: "LK42",
    name: "Kilinochchi",
    province: "Northern Province",
    geographicalProfile:
      "Kilinochchi District features flat dry-zone terrain, ancient irrigation tanks, agricultural land, and inland settlements. Its environment is shaped by seasonal water systems and open scrub landscapes.",
    historyAndHeritage:
      "The district holds significant contemporary history while being rooted in longstanding northern agrarian traditions. Ancient Buddhist ruins and Hindu temples reflect its diverse religious heritage.",
    economyAndInfrastructure:
      "Agriculture, irrigation-based farming, local trade, and rebuilding infrastructure play central economic roles. Development focuses on connectivity, farming support, and public services.",
    tourismAndAttractions:
      "Kilinochchi offers scenic reservoirs like Iranamadu Tank, the remains of the ancient Murugan temple at Kadavil, and travel routes providing insight into the northern mainland landscape.",
    demographicsAndCulture:
      "The district is shaped predominantly by Tamil cultural traditions, village life, temple-centered practices, and strong community resilience developed through challenging historical circumstances.",
    images: districtImages("kilinochchi"),
  },
  LK43: {
    id: "LK43",
    name: "Mannar",
    province: "Northern Province",
    geographicalProfile:
      "Mannar District includes Mannar Island, coastal flats, extensive lagoons, arid zones, and unique marine-influenced ecosystems. Its landscape of baobab trees and wind-swept shores is among Sri Lanka's most distinctive.",
    historyAndHeritage:
      "Mannar has been associated with maritime trade, pearl fishing, and cross-cultural contact for millennia. The district features Portuguese and Dutch forts, Islamic shrines, and Christian missionary heritage.",
    economyAndInfrastructure:
      "Fisheries, agriculture, livestock, salt production, and local trade support the district economy. The proposed land bridge to India would transform regional connectivity.",
    tourismAndAttractions:
      "The Mannar Fort, 800-year-old baobab tree, Adam's Bridge (Ram Setu) chain of shoals, bird habitats at Vankalai Sanctuary, and quiet island scenery attract offbeat travelers.",
    demographicsAndCulture:
      "Mannar reflects a blend of Tamil, Muslim, and Christian influences, creating a layered social character tied closely to the sea and cross-cultural exchange.",
    images: districtImages("mannar"),
  },
  LK44: {
    id: "LK44",
    name: "Vavuniya",
    province: "Northern Province",
    geographicalProfile:
      "Vavuniya District forms an important transition zone between northern and central Sri Lanka. It contains dry plains, ancient irrigation tanks, agricultural land, and strategic transport corridors.",
    historyAndHeritage:
      "Historically a frontier region, Vavuniya has played an important role as a meeting point between Sinhalese and Tamil cultural spheres, with archaeological evidence of ancient Buddhist and Hindu settlements.",
    economyAndInfrastructure:
      "The economy relies on agriculture, trade, transport services, and public administration. Its location functions as a regional gateway and distribution point connecting north and south.",
    tourismAndAttractions:
      "While less tourism-focused, Vavuniya offers ancient temples like the Madukanda Raja Maha Viharaya, scenic tanks, and meaningful stops for travelers journeying through the northern interior.",
    demographicsAndCulture:
      "The district has a socially mixed identity with Sinhalese, Tamil, and Muslim communities, giving it a diverse regional character reflected in its languages and festivals.",
    images: districtImages("vavuniya"),
  },
  LK45: {
    id: "LK45",
    name: "Mullaitivu",
    province: "Northern Province",
    geographicalProfile:
      "Mullaitivu District is known for its long coastline, lagoons, forests, and dry lowland terrain. It combines pristine coastal beauty with sparsely populated inland stretches and extensive mangrove ecosystems.",
    historyAndHeritage:
      "The district holds an important place in Sri Lanka's modern history while preserving older northern village and coastal cultural traditions dating back centuries.",
    economyAndInfrastructure:
      "Livelihoods are tied to fisheries, agriculture, local trade, and reconstruction-related development. Improved road access and services have supported gradual economic recovery.",
    tourismAndAttractions:
      "Its pristine beaches at Chalai, Nanthikadal and Kokkilai lagoons, quiet landscapes, and undeveloped coastal scenery appeal to travelers seeking less commercial destinations.",
    demographicsAndCulture:
      "Mullaitivu reflects Tamil cultural life shaped by the coast, rural settlement patterns, Hindu and Catholic religious observance, and strong community resilience.",
    images: districtImages("mullaitivu"),
  },
  LK51: {
    id: "LK51",
    name: "Batticaloa",
    province: "Eastern Province",
    geographicalProfile:
      "Batticaloa District features extensive lagoons, barrier beaches, lowland plains, and fertile areas influenced by sea and inland water systems. Its landscape is calm, open, and notably water-rich.",
    historyAndHeritage:
      "The district has deep eastern coastal history shaped by Tamil culture, Muslim trading communities, Portuguese and Dutch colonial encounters, and regional maritime exchange.",
    economyAndInfrastructure:
      "Agriculture (paddy), fisheries, education, trade, and small-scale industry are central to the district economy. Lagoon systems remain vital to local livelihoods and biodiversity.",
    tourismAndAttractions:
      "Batticaloa's scenic lagoon (famous for 'singing fish'), Kallady Beach, Dutch Fort, ancient Hindu temples, and serene eastern atmosphere attract culture and coastal travelers.",
    demographicsAndCulture:
      "Batticaloa is known for its strong Tamil cultural traditions, distinctive dialect, music, literature, cuisine, and centuries-old coexistence among Tamil and Muslim communities.",
    images: districtImages("batticaloa"),
  },
  LK52: {
    id: "LK52",
    name: "Ampara",
    province: "Eastern Province",
    geographicalProfile:
      "Ampara District has a large and varied landscape including dry-zone plains, extensive paddy lands, forests, lagoons, and long coastal stretches. It is geographically one of the most extensive eastern districts.",
    historyAndHeritage:
      "Its history reflects ancient irrigation settlement, agricultural expansion, temple traditions including the famous Magul Maha Viharaya, and the multicultural evolution of Sri Lanka's eastern region.",
    economyAndInfrastructure:
      "Agriculture is central, especially paddy production, alongside fisheries and growing tourism. Irrigation systems and road networks are crucial to the district's functioning.",
    tourismAndAttractions:
      "Arugam Bay (world-class surfing), Kumana National Park, Muhudu Maha Viharaya, lagoons, beaches, and wildlife areas make Ampara a major eastern travel destination.",
    demographicsAndCulture:
      "The district is culturally diverse, with Sinhalese, Tamil, and Muslim communities shaping its social life, festivals, cuisine, and local identity.",
    images: districtImages("ampara"),
  },
  LK53: {
    id: "LK53",
    name: "Trincomalee",
    province: "Eastern Province",
    geographicalProfile:
      "Trincomalee District is centered around one of the world's finest natural harbors and includes spectacular beaches, bays, forests, and dry-zone inland territory. Its coastal geography is exceptionally striking.",
    historyAndHeritage:
      "The district has long-standing strategic importance, with deep roots in maritime history, the ancient Koneswaram Hindu temple, Buddhist sites, and colonial naval significance spanning Portuguese, Dutch, and British eras.",
    economyAndInfrastructure:
      "The strategic harbor, fisheries, naval base, tourism, and agriculture support the economy. The port's natural depth contributes to its continuing national importance.",
    tourismAndAttractions:
      "Nilaveli and Uppuveli beaches, Pigeon Island Marine National Park, Koneswaram Temple, Fort Frederick, Kanniya hot springs, and whale-watching make Trincomalee a standout destination.",
    demographicsAndCulture:
      "Trincomalee reflects a multicultural eastern identity, with Sinhalese, Tamil, and Muslim communities and rich coastal religious heritage including Hindu, Buddhist, and Catholic traditions.",
    images: districtImages("trincomalee"),
  },
  LK61: {
    id: "LK61",
    name: "Kurunegala",
    province: "North Western Province",
    geographicalProfile:
      "Kurunegala District combines striking rocky outcrops, paddy fields, coconut plantations, towns, and village landscapes. It occupies an important central-western position with varied terrain around eight prominent rock formations.",
    historyAndHeritage:
      "Kurunegala served as a royal capital in the 14th century and retains strong links to medieval Sri Lankan history. Temples, legends, and historic sites including the Elephant Rock remain part of district identity.",
    economyAndInfrastructure:
      "Agriculture, trade, transport, and services are key economic drivers. Its central location provides strong road connectivity and regional commercial value.",
    tourismAndAttractions:
      "Rock landmarks (Ethagala, Athugala), ancient temples including Ridi Viharaya, Panduwasnuwara archaeological site, reservoirs, and rural scenery attract history and culture enthusiasts.",
    demographicsAndCulture:
      "The district reflects classic Sinhalese agrarian culture, strong Buddhist traditions, and a vibrant village-to-town social character with traditional festivals and folk arts.",
    images: districtImages("kurunegala"),
  },
  LK62: {
    id: "LK62",
    name: "Puttalam",
    province: "North Western Province",
    geographicalProfile:
      "Puttalam District includes extensive lagoons, salt flats, beaches, dry-zone scrub, coconut plantations, and fishing settlements. It stretches across a distinctive coastal and semi-arid environment.",
    historyAndHeritage:
      "The district has long connections to fishing, maritime trade, migration, and religious diversity. Coastal and inland communities have developed a layered cultural history with Portuguese and Dutch influences.",
    economyAndInfrastructure:
      "Fisheries, salt production, coconut cultivation, agriculture, wind energy projects, and trade contribute to the district economy. Coastal resources remain especially important.",
    tourismAndAttractions:
      "Kalpitiya peninsula, Wilpattu National Park access, Bar Reef Marine Sanctuary, dolphin and whale watching, kite surfing, lagoons, and bird habitats attract nature and water sports enthusiasts.",
    demographicsAndCulture:
      "Puttalam is socially diverse, with Sinhalese, Muslim, and Tamil communities contributing to a mixed coastal identity and varied traditions reflected in cuisine and festivals.",
    images: districtImages("puttalam"),
  },
  LK71: {
    id: "LK71",
    name: "Anuradhapura",
    province: "North Central Province",
    geographicalProfile:
      "Anuradhapura is one of Sri Lanka's largest districts, known for broad dry-zone plains, ancient man-made reservoirs (tanks), forests, and irrigation-based agricultural landscapes centered on the Malwathu Oya basin.",
    historyAndHeritage:
      "It is Sri Lanka's most historically significant district, serving as the first great ancient capital from the 4th century BCE. The district is home to sacred Buddhist monuments, monasteries, and major archaeological treasures spanning over a millennium.",
    economyAndInfrastructure:
      "Agriculture is central, especially paddy cultivation supported by an ancient tank and canal system still in use today. Roads and regional services connect a widespread rural population.",
    tourismAndAttractions:
      "The Sacred City of Anuradhapura (UNESCO), Sri Maha Bodhi (oldest historically documented tree), Ruwanwelisaya, Jetavanaramaya, Abhayagiri Monastery, Mihintale (birthplace of Buddhism in Sri Lanka), and wildlife sanctuaries.",
    demographicsAndCulture:
      "The district is strongly associated with Sinhalese Buddhist heritage, temple-centered life, traditional farming communities, and one of Asia's most vibrant pilgrimage cultures.",
    images: districtImages("anuradhapura"),
  },
  LK72: {
    id: "LK72",
    name: "Polonnaruwa",
    province: "North Central Province",
    geographicalProfile:
      "Polonnaruwa District is characterized by dry-zone plains, massive ancient reservoirs, forests, and cultivated land shaped by sophisticated historical irrigation systems. The landscape is both scenic and agriculturally productive.",
    historyAndHeritage:
      "Polonnaruwa was Sri Lanka's medieval capital (11th-13th centuries) and remains one of the country's most celebrated archaeological regions. Its well-preserved ruins reflect sophisticated urban planning and Buddhist civilization at its peak.",
    economyAndInfrastructure:
      "Agriculture, especially rice cultivation, is the key economic activity, supported by the vast Parakrama Samudra reservoir. Tourism and regional services also contribute significantly.",
    tourismAndAttractions:
      "The ancient city of Polonnaruwa (UNESCO), Gal Vihara rock temples, Parakrama Samudra, Lankatilaka, Rankoth Vehera, and surrounding heritage sites attract cultural travelers from worldwide.",
    demographicsAndCulture:
      "The district has a strong rural and Sinhalese Buddhist identity shaped by farming traditions, heritage preservation, and deep reverence for ancient civilization.",
    images: districtImages("polonnaruwa"),
  },
  LK81: {
    id: "LK81",
    name: "Badulla",
    province: "Uva Province",
    geographicalProfile:
      "Badulla District includes dramatic mountain ranges, valleys, waterfalls, tea estates, and fertile uplands. It is one of Sri Lanka's most visually striking hill districts, with elevations ranging from 300 to over 2,000 meters.",
    historyAndHeritage:
      "The district's history is tied to Kandyan traditions, colonial plantation development, and long-standing village settlement in the hill country. Ancient temples and sacred sites dot the landscape.",
    economyAndInfrastructure:
      "Tea, vegetable farming, trade, education, and tourism are major economic pillars. The scenic railway and mountain roads support movement through this challenging upland region.",
    tourismAndAttractions:
      "Ella town, Nine Arches Bridge, Dunhinda Falls, Diyaluma Falls, Namunukula mountains, tea estates, Ravana's Cave, and sacred sites including Muthiyangana Raja Maha Viharaya.",
    demographicsAndCulture:
      "Badulla's culture reflects a blend of Sinhalese and Tamil hill-country communities, plantation life, and religious traditions rooted in upland Sri Lanka's unique environment.",
    images: districtImages("badulla"),
  },
  LK82: {
    id: "LK82",
    name: "Monaragala",
    province: "Uva Province",
    geographicalProfile:
      "Monaragala District covers a broad area of dry and intermediate-zone terrain with forests, chena lands, paddy fields, and scattered settlements. It is one of Sri Lanka's largest and most rural districts.",
    historyAndHeritage:
      "The district's history is closely linked to rural settlement, forest-frontier livelihoods, and traditional agricultural communities of southeastern Sri Lanka. Ancient temples and prehistoric sites indicate long habitation.",
    economyAndInfrastructure:
      "Agriculture dominates the local economy, including paddy, sugarcane, and other crops. Expanding road access and state services support gradual development.",
    tourismAndAttractions:
      "Monaragala offers access to Gal Oya National Park, Yala's less-visited areas, ancient Buddhist temples including Maligawila and Buduruwagala, waterfalls, and authentic rural experiences.",
    demographicsAndCulture:
      "Its identity is strongly rural, with Sinhalese village traditions, Buddhist religious life, and a close relationship to land-based livelihoods dating back centuries.",
    images: districtImages("monaragala"),
  },
  LK91: {
    id: "LK91",
    name: "Ratnapura",
    province: "Sabaragamuwa Province",
    geographicalProfile:
      "Ratnapura District is known for rivers, rainforests, gem-bearing lands, rubber and tea plantations, and foothill terrain leading toward the central highlands. It is lush, environmentally rich, and receives high rainfall.",
    historyAndHeritage:
      "Ratnapura has a famous historical connection to gem mining and trade spanning over 2,000 years. The city's name means 'City of Gems' in Sinhala. Temple traditions and regional cultural practices remain strong.",
    economyAndInfrastructure:
      "Gem-related activity (sapphires, rubies, cat's eye), agriculture (rubber, tea, rice), plantations, trade, and services support the district economy. Ratnapura functions as an important regional center.",
    tourismAndAttractions:
      "Sinharaja Forest Reserve access (UNESCO), Udawalawe National Park proximity, Bopath Ella waterfall, Maha Saman Devala temple, gem mining experiences, and scenic hill-country viewpoints.",
    demographicsAndCulture:
      "The district reflects a strong Sinhalese cultural identity shaped by trade, Buddhism, rural life, and pride in its gem heritage. Local communities have traditional knowledge of gem exploration.",
    images: districtImages("ratnapura"),
  },
  LK92: {
    id: "LK92",
    name: "Kegalle",
    province: "Sabaragamuwa Province",
    geographicalProfile:
      "Kegalle District includes hills, rubber plantations, fertile valleys, and riverine landscapes. It lies strategically between the western lowlands and central uplands, creating varied topography.",
    historyAndHeritage:
      "The district has links to Kandyan history, temple traditions including the famous Beligala, and colonial plantation development. Its settlements preserve many longstanding regional customs and crafts.",
    economyAndInfrastructure:
      "Rubber cultivation, agriculture (rice, coconut), trade, and transport are central to the district economy. Its location along major inland routes supports commerce and movement.",
    tourismAndAttractions:
      "Attractions include Pinnawala Elephant Orphanage, scenic countryside, ancient temple sites including Beligala, and access routes toward hill-country destinations like Adam's Peak.",
    demographicsAndCulture:
      "Kegalle has a warm rural cultural identity with Sinhalese traditions, Buddhist observances, and livelihoods strongly connected to agriculture and plantations.",
    images: districtImages("kegalle"),
  },
};

const FALLBACK_DISTRICT: DistrictData = {
  id: "",
  name: "Select a District",
  province: "",
  geographicalProfile:
    "Click any district on the map to explore its geographical setting, climate, and regional landscape features.",
  historyAndHeritage:
    "Discover the historical background, cultural heritage, and ancient traditions of each district after making your selection.",
  economyAndInfrastructure:
    "Learn about economic strengths, key industries, transport links, and development patterns in your chosen district.",
  tourismAndAttractions:
    "Explore travel highlights, major attractions, local experiences, and hidden gems waiting to be discovered.",
  demographicsAndCulture:
    "Understand community identity, cultural practices, linguistic diversity, and social character of each region.",
  images: [
    "/maps/default-district.jpg",
    "/maps/default-district.jpg",
    "/maps/default-district.jpg",
  ],
};

type InfoCardProps = {
  title: string;
  text: string;
  icon: React.ElementType;
  delay?: number;
};

function InfoCard({ title, text, icon: Icon, delay = 0 }: InfoCardProps) {
  return (
    <motion.div
    
      custom={delay}
      className="group rounded-[26px] border border-[#dfe7df] bg-white/90 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
    >
      <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-emerald-50 to-amber-50 p-3 text-[#1f5c45]">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="text-base font-semibold tracking-tight text-[#163323]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-[#5c6e63]">{text}</p>
    </motion.div>
  );
}

type StatBadgeProps = {
  label: string;
  value: string;
  icon: React.ElementType;
};

function StatBadge({ label, value, icon: Icon }: StatBadgeProps) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/80 px-3 py-2 shadow-sm border border-emerald-100/50">
      <Icon className="h-4 w-4 text-emerald-600" />
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          {label}
        </p>
        <p className="text-xs font-semibold text-slate-800">{value}</p>
      </div>
    </div>
  );
}

export default function SriLankaMap() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectedPathRef = useRef<SVGPathElement | null>(null);
  const depthPathRef = useRef<SVGPathElement | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<DistrictData | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [moveForward, setMoveForward] = useState(true);
  const [isHoveringMap, setIsHoveringMap] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const district = active || FALLBACK_DISTRICT;
  const hasSelectedDistrict = !!active;
  const districtCount = Object.keys(DISTRICT_DATA).length;

  // Load SVG map
  useEffect(() => {
    let mounted = true;
    const cleanupFns: Array<() => void> = [];

    async function setupMap() {
      try {
        const res = await fetch("/maps/srilanka-districts.svg");
        const svgText = await res.text();

        if (!mounted || !wrapperRef.current) return;

        wrapperRef.current.innerHTML = svgText;

        const svg = wrapperRef.current.querySelector("svg");
        if (!svg) return;

        // Optimize SVG attributes
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("viewBox", "0 0 1000 1000");
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svg.style.overflow = "visible";
        svg.style.position = "relative";
        svg.style.zIndex = "2";

        const paths = Array.from(svg.querySelectorAll("path"));

        const removeDepthLayer = () => {
          if (depthPathRef.current) {
            depthPathRef.current.remove();
            depthPathRef.current = null;
          }
        };

        const resetPath = (path: SVGPathElement) => {
          path.style.fill = "#b9d4ba";
          path.style.filter = "none";
          path.style.transform = "translateY(0px) scale(1)";
          path.style.stroke = "rgba(255,255,255,0.94)";
          path.style.strokeWidth = "1.15";
        };

        const addDepthLayer = (path: SVGPathElement) => {
          removeDepthLayer();

          const clone = path.cloneNode(true) as SVGPathElement;
          clone.style.fill = "#88a88a";
          clone.style.stroke = "#edf3ee";
          clone.style.strokeWidth = "1.1";
          clone.style.vectorEffect = "non-scaling-stroke";
          clone.style.pointerEvents = "none";
          clone.style.transformBox = "fill-box";
          clone.style.transformOrigin = "center center";
          clone.style.transform = "translateY(12px) scale(1.01)";
          clone.style.filter = "blur(0.4px)";
          clone.style.opacity = "0.95";

          path.parentNode?.insertBefore(clone, path);
          depthPathRef.current = clone;
        };

        const activatePath = (path: SVGPathElement) => {
          addDepthLayer(path);
          path.style.fill = "#75c793";
          path.style.filter =
            "drop-shadow(0 16px 24px rgba(34, 74, 57, 0.24))";
          path.style.transform = "translateY(-16px) scale(1.05)";
          path.style.stroke = "white";
          path.style.strokeWidth = "1.5";
          path.style.transition = "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";
        };

        // Initialize all paths
        paths.forEach((path) => {
          const id = path.getAttribute("id") || "";
          const name = path.getAttribute("name") || id;

          path.style.cursor = "pointer";
          path.style.transition =
            "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), fill 0.3s ease, filter 0.3s ease";
          path.style.transformBox = "fill-box";
          path.style.transformOrigin = "center center";
          path.style.fill = "#b9d4ba";
          path.style.stroke = "rgba(255,255,255,0.94)";
          path.style.strokeWidth = "1.15";
          path.style.vectorEffect = "non-scaling-stroke";

          const handleEnter = () => {
            setIsHoveringMap(true);
            if (selectedPathRef.current !== path) {
              path.style.fill = "#a5c998";
              path.style.filter = "drop-shadow(0 8px 12px rgba(0,0,0,0.10))";
              path.style.transform = "translateY(-5px) scale(1.015)";
            }
          };

          const handleLeave = () => {
            setIsHoveringMap(false);
            if (selectedPathRef.current !== path) {
              resetPath(path);
            }
          };

          const handleClick = () => {
            if (selectedPathRef.current) {
              resetPath(selectedPathRef.current);
            }

            removeDepthLayer();
            selectedPathRef.current = path;
            activatePath(path);

            const selectedDistrict = DISTRICT_DATA[id] || {
              ...FALLBACK_DISTRICT,
              id,
              name,
            };

            setActive(selectedDistrict);
          };

          path.addEventListener("mouseenter", handleEnter);
          path.addEventListener("mouseleave", handleLeave);
          path.addEventListener("click", handleClick);

          cleanupFns.push(() => {
            path.removeEventListener("mouseenter", handleEnter);
            path.removeEventListener("mouseleave", handleLeave);
            path.removeEventListener("click", handleClick);
          });
        });

        setIsMapLoaded(true);
      } catch (error) {
        console.error("Failed to load SVG map:", error);
      }
    }

    setupMap();

    return () => {
      mounted = false;
      cleanupFns.forEach((fn) => fn());
      if (depthPathRef.current) {
        depthPathRef.current.remove();
        depthPathRef.current = null;
      }
    };
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const images = district.images || [];
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setSlideIndex((prev) => {
        if (moveForward) {
          if (prev >= images.length - 1) {
            setMoveForward(false);
            return prev - 1;
          }
          return prev + 1;
        } else {
          if (prev <= 0) {
            setMoveForward(true);
            return prev + 1;
          }
          return prev - 1;
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [district, moveForward]);

  // Reset slides when district changes
  useEffect(() => {
    setSlideIndex(0);
    setMoveForward(true);
  }, [active]);

  const nextSlide = () => {
    if (!district.images?.length) return;
    setSlideIndex((prev) => (prev + 1) % district.images.length);
    setMoveForward(true);
  };

  const prevSlide = () => {
    if (!district.images?.length) return;
    setSlideIndex((prev) =>
      prev === 0 ? district.images.length - 1 : prev - 1
    );
    setMoveForward(false);
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      className="relative overflow-hidden bg-gradient-to-b from-[#f7faf7] to-[#eef5ef]"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-100/10 to-amber-100/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.15 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2400&q=80"
            alt="Sri Lanka landscape"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-emerald-900/50 to-emerald-950/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,171,29,0.15),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(207,91,138,0.1),transparent_50%)]" />

          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 3,
            }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div
              
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Sri Lanka • District Explorer
            </motion.div>

            <motion.h1
              
              className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Discover the Island
              <span className="block text-amber-300">District by District</span>
            </motion.h1>

            <motion.p
              
              className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg"
            >
              Explore Sri Lanka's 25 districts through an immersive interactive map. 
              Uncover unique geography, rich heritage, vibrant culture, and hidden travel gems 
              in every corner of the island.
            </motion.p>

            <motion.div
              variants={stagger}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <motion.span
                
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
              >
                <Map className="h-4 w-4" />
                {districtCount} Districts
              </motion.span>

              <motion.span
                
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
              >
                <Compass className="h-4 w-4" />
                Interactive Guide
              </motion.span>

              <motion.span
                
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
              >
                <Camera className="h-4 w-4" />
                Rich Visuals
              </motion.span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs font-medium tracking-wider">EXPLORE</span>
          <ArrowDownRight className="h-4 w-4 animate-bounce" />
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="relative px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700 backdrop-blur-md">
              <Globe2 className="h-3.5 w-3.5" />
              Interactive Explorer
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#163323] md:text-5xl">
              Navigate Sri Lanka's
              <span className="text-emerald-600"> Cultural Landscape</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5c6e63] md:text-base">
              Select any district on the map to reveal its unique character. 
              From coastal cities to hill country retreats, each region tells its own story.
            </p>
          </motion.div>

          {/* Map Section - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full mb-10"
          >
            <div className="rounded-[30px] border border-white/70 bg-white/72 p-4 shadow-[0_22px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl md:p-5">
              <div
                ref={mapContainerRef}
                className="relative overflow-hidden rounded-[28px] border border-emerald-100/80 p-4 md:p-6"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg,rgba(255,255,255,0.68),rgba(245,250,246,0.82)), url('/maps/bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Map header */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      Interactive Map
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-[#163323]">
                      Sri Lanka Districts
                    </h3>
                  </div>

                  <div className="rounded-full border border-emerald-100 bg-white/75 px-4 py-2 text-xs font-medium text-[#5c6e63] shadow-sm">
                    {isHoveringMap ? "👆 Click to select" : "🖱️ Hover over districts"}
                  </div>
                </div>

                {/* SVG Map Container */}
                <div className="relative rounded-[24px] border border-white/70 bg-gradient-to-b from-white/85 to-white/80 p-3 shadow-inner">
                  <div
                    ref={wrapperRef}
                    className="relative z-10 mx-auto aspect-square w-full max-w-[900px] transition-opacity duration-500"
                    style={{ opacity: isMapLoaded ? 1 : 0 }}
                  />
                  {!isMapLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin" />
                    </div>
                  )}
                </div>

                {/* Map stats */}
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[22px] border border-emerald-100/80 bg-white/80 p-4 shadow-sm">
                    <div className="inline-flex rounded-xl bg-emerald-50 p-2 text-emerald-700">
                      <Map className="h-4 w-4" />
                    </div>
                    <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Explore
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {districtCount} Districts
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-emerald-100/80 bg-white/80 p-4 shadow-sm">
                    <div className="inline-flex rounded-xl bg-emerald-50 p-2 text-emerald-700">
                      <MousePointerClick className="h-4 w-4" />
                    </div>
                    <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Interaction
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      Click to discover
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-emerald-100/80 bg-white/80 p-4 shadow-sm">
                    <div className="inline-flex rounded-xl bg-emerald-50 p-2 text-emerald-700">
                      <Compass className="h-4 w-4" />
                    </div>
                    <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      View
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      Culture & Travel
                    </p>
                  </div>
                </div>

                {/* Instructions */}
                <div className="mt-4 rounded-[22px] border border-emerald-100/80 bg-gradient-to-b from-white/88 to-white/94 p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex rounded-2xl bg-gradient-to-br from-emerald-50 to-amber-50 p-3 text-[#1f5c45]">
                      <Info className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#163323]">
                        How to use this map
                      </h4>
                      <p className="mt-1 text-sm leading-7 text-[#5c6e63]">
                        Hover to preview districts, click to reveal detailed profiles, 
                        imagery, and cultural insights below.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section - Below Map */}
          <div className="space-y-5">
            {/* District header with image gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[30px] border border-white/70 bg-white/80 shadow-[0_22px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl"
            >
              {/* Gallery */}
              <div className="relative h-[260px] sm:h-[300px] md:h-[400px] group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={slideIndex}
                    src={
                      district.images?.[slideIndex] || "/maps/default-district.jpg"
                    }
                    alt={district.name}
                    className="h-full w-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                {/* Gradient overlays for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-transparent to-slate-900/30" />

                {/* Navigation buttons */}
                {district.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition-all hover:bg-white/25 hover:scale-110 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      type="button"
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition-all hover:bg-white/25 hover:scale-110 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* District info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md"
                  >
                    {hasSelectedDistrict ? "Selected District" : "Explore Sri Lanka"}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl"
                  >
                    {district.name}
                  </motion.h3>

                  {district.province && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-2 text-sm font-medium text-white/80"
                    >
                      {district.province}
                    </motion.p>
                  )}
                </div>

                {/* Slide indicators */}
                {district.images.length > 1 && (
                  <div className="absolute top-4 right-4 flex gap-1.5">
                    {district.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSlideIndex(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          slideIndex === index
                            ? "w-6 bg-white"
                            : "w-1.5 bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Quick stats */}
              <div className="grid gap-3 border-t border-slate-200/70 bg-gradient-to-b from-white to-[#f8fbf8] p-5 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    District
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    {district.name}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Province
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    {district.province || "—"}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Code
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    {district.id || "—"}
                  </div>
                </div>
              </div>

              {/* Additional stats if available */}
              {(district.area || district.population) && (
                <div className="px-5 pb-5 flex flex-wrap gap-2">
                  {district.area && (
                    <StatBadge label="Area" value={district.area} icon={Trees} />
                  )}
                  {district.population && (
                    <StatBadge label="Population" value={district.population} icon={Users} />
                  )}
                </div>
              )}
            </motion.div>

            {/* No selection message */}
            {!hasSelectedDistrict && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-[28px] border border-dashed border-emerald-200 bg-gradient-to-b from-white/90 to-[#f4faf6]/95 p-8 text-center shadow-[0_14px_34px_rgba(15,23,42,0.04)]"
              >
                <div className="mx-auto inline-flex rounded-2xl bg-emerald-50 p-4 text-emerald-700">
                  <MapPinned className="h-8 w-8" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-[#163323]">
                  Begin Your Journey
                </h4>
                <p className="mt-2 text-sm leading-7 text-[#5c6e63] max-w-md mx-auto">
                  Click any district on the map to reveal detailed profiles, 
                  stunning imagery, and cultural insights.
                </p>
              </motion.div>
            )}

            {/* Info cards grid */}
            {hasSelectedDistrict && (
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="grid gap-4 md:grid-cols-2"
              >
                <InfoCard
                  title="Geographical Profile"
                  text={district.geographicalProfile}
                  icon={Mountain}
                />
                <InfoCard
                  title="History and Heritage"
                  text={district.historyAndHeritage}
                  icon={Landmark}
                />
                <InfoCard
                  title="Economy and Infrastructure"
                  text={district.economyAndInfrastructure}
                  icon={Building2}
                />
                <InfoCard
                  title="Tourism and Attractions"
                  text={district.tourismAndAttractions}
                  icon={Palmtree}
                />
              </motion.div>
            )}

            {/* Demographics card */}
            {hasSelectedDistrict && (
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="show"
              >
                <InfoCard
                  title="Demographics and Culture"
                  text={district.demographicsAndCulture}
                  icon={Users}
                />
              </motion.div>
            )}

            {/* Gallery thumbnails */}
            {hasSelectedDistrict && district.images && district.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[#163323]">
                      District Gallery
                    </h3>
                    <p className="mt-1 text-sm text-[#5c6e63]">
                      Visual impressions of {district.name}
                    </p>
                  </div>

                  <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    <Camera className="inline h-3 w-3 mr-1" />
                    {slideIndex + 1} / {district.images.length}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {district.images.map((img, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSlideIndex(index)}
                      className={`group overflow-hidden rounded-[22px] border-2 transition-all ${
                        slideIndex === index
                          ? "border-emerald-500 shadow-[0_10px_30px_rgba(16,185,129,0.25)] scale-[1.02]"
                          : "border-transparent hover:border-emerald-200"
                      }`}
                    >
                      <div className="relative aspect-[4/3]">
                        <img
                          src={img}
                          alt={`${district.name} ${index + 1}`}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        />
                        {slideIndex === index && (
                          <div className="absolute inset-0 ring-2 ring-emerald-500 ring-inset" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}