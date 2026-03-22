export type DistrictData = {
  id: string;
  name: string;
  province: string;
  capital: string; // Required
  area: string;
  population: string;
  geographicalProfile: string;
  historyAndHeritage: string;
  economyAndInfrastructure: string;
  tourismAndAttractions: string;
  demographicsAndCulture: string;
  images: string[];
};

const districtImages = (folder: string): string[] => [
  `/districts/${folder}/1.jpg`,
  `/districts/${folder}/2.jpg`,
  `/districts/${folder}/3.jpg`,
];

export const DISTRICT_DATA: Record<string, DistrictData> = {
  // --- WESTERN PROVINCE ---
LK11: {
    id: "LK11",
    name: "Colombo",
    province: "Western Province",
    capital: "Colombo", // Added

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
    capital: "Gampaha", 
    area: "1,387 km²",
    population: "2.43 million",// Added
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
    capital: "Kalutara", // Added
    area: "1,598 km²",
    population: "1.3 million",
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
    capital: "Kandy", // Added
    area: "1,940 km²",
    population: "1.46 million",
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
    capital: "Matale", // Added
    area: "1,993 km²",
    population: "526,000",
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
    capital: "Nuwara Eliya", // Added
    area: "1,741 km²",
    population: "725,000",
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
   capital: "Galle", // Added
    area: "1,652 km²",
    population: "1.09 million",
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
    capital: "Matara", // Added
    area: "1,283 km²",
    population: "870,000",
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
    capital: "Hambantota", // Added
    area: "2,609 km²",
    population: "680,000",
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
    capital: "Jaffna", // Added
    area: "1,025 km²",
    population: "594,000",
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
    capital: "Kilinochchi", // Added
    area: "1,279 km²",
    population: "136,000",
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
    capital: "Mannar", // Added
    area: "1,996 km²",
    population: "123,000",
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
    capital: "Vavuniya", // Added
    area: "1,967 km²",
    population: "172,000",
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
    capital: "Mullaitivu", // Added
    area: "2,617 km²",
    population: "122,000",
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
    capital: "Batticaloa", // Added
    area: "2,854 km²",
    population: "595,000",
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
    capital: "Ampara", // Added
    area: "4,415 km²",
    population: "744,000",
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
    capital: "Trincomalee", // Added
    area: "2,727 km²",
    population: "442,000",
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
    capital: "Kurunegala", // Added
    area: "4,816 km²",
    population: "1.76 Million",
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
    capital: "Puttalam", // Added
    area: "3,072 km²",
    population: "818,000",
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
    capital: "Anuradhapura", // Added
    area: "7,179 km²",
    population: "937,000",
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
    capital: "Polonnaruwa", // Added
    area: "3,293 km²",
    population: "447,000",
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
    capital: "Badulla", // Added
    area: "2,861 km²",
    population: "850,000",
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
    capital: "Monaragala", // Added
    area: "5,639 km²",
    population: "500,000",
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
    capital: "Ratnapura", // Added
    area: "3,275 km²",
    population: "1.1 million",
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
    capital: "Kegalle", // Added
    area: "1,693 km²",
    population: "890,000",
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

export const FALLBACK_DISTRICT: DistrictData = {
  id: "select",
  name: "Explore the Island",
  province: "Sri Lanka",
  capital: "-", // Correctly included
  area: "-",
  population: "-",
  geographicalProfile: "Select a district...",
  historyAndHeritage: "Click to learn...",
  economyAndInfrastructure: "Select a region...",
  tourismAndAttractions: "Discover the must-visit...",
  demographicsAndCulture: "Understand the local traditions...",
  images: ["/maps/default-bg.jpg"],
};