const chemRecipesData = {
  "reagent_database": [
    {
      "category": "Base Chemicals - Elements",
      "reagents": [
        { "id": "Aluminium", "description": "A silver, soft, non-magnetic, and ductile metal. Seems to be metallic.", "recipes": [], "effects": [], "color": "#848789", "tags": [] },
        { "id": "Carbon", "description": "A black, crystalline solid. Seems to be crystalline.", "recipes": ["Cellulose fibers [3] -> Sugar [2], Carbon [1]", "Fiber [5], Water [10] -> Carbon [3], Sugar [2], Water [10]"], "effects": [], "color": "#22282b", "tags": [] },
        { "id": "Chlorine", "description": "A yellow-green gas which is toxic to humans. Seems to be gaseous.", "recipes": ["Insect blood [30] -> Water [14], Sodium [3], Chlorine [1.5], Carbon dioxide [5.5], Protein [6]", "Anaerobic blood [30] -> Water [17], Nitrogen [4.5], Chlorine [2.5], Protein [6]", "Table salt [2] -> Chlorine [1], Sodium [1]"], "effects": ["Poison (0.5u/s): Deals 2 poison", "Plants (0.5u/s): Water -0.5, Toxins +15, Weeds -3, Health -1"], "color": "#a2ff00", "tags": ["Toxin"] },
        { "id": "Copper", "description": "A soft, malleable, and ductile metal with very high thermal and electrical conductivity. Seems to be metallic.", "recipes": ["Blue blood [20] -> Water [11], Copper [0.5], Sugar [2], Carbon dioxide [3], Protein [4]"], "effects": ["Poison (0.1u/s): Deals 0.1 poison (non-Arachnid)", "Medicine (0.5u/s): Increases blood level (Arachnid)"], "color": "#b05b3c", "tags": ["Medicine", "Toxin"] },
        { "id": "Fluorine", "description": "A highly toxic pale yellow gas. Extremely reactive. Seems to be gaseous.", "recipes": [], "effects": ["Poison (0.5u/s): Deals 0.5 caustic, 0.5 poison", "Plants (0.5u/s): Water -0.5, Toxins +25, Weeds -4, Health -2"], "color": "#ba85cc", "tags": [] },
        { "id": "Gold", "description": "Gold is a dense, soft, shiny metal and the most malleable and ductile metal known. Seems to be metallic.", "recipes": [], "effects": [], "color": "#F7C430", "tags": [] },
        { "id": "Hydrogen", "description": "A light, flammable gas. Seems to be gaseous.", "recipes": ["Welding fuel [10] -> Ethanol [5], Hydrogen [3], Sulfur [2]"], "effects": [], "color": "#cccccc", "tags": [] },
        { "id": "Iodine", "description": "Commonly added to table salt as a nutrient. On its own it tastes far less pleasing. Seems to be dark brown.", "recipes": [], "effects": [], "color": "#BC8A00", "tags": [] },
        { "id": "Iron", "description": "A silvery-grey metal which forms iron oxides (rust) with contact with air. Seems to be metallic.", "recipes": ["Blood [20] -> Water [11], Iron [0.5], Sugar [2], Carbon dioxide [3], Protein [4]"], "effects": ["Poison (0.1u/s): Deals 0.1 poison (Arachnid)", "Medicine (0.5u/s): Increases blood level (non-Arachnid)"], "color": "#434b4d", "tags": ["Medicine", "Toxin"] },
        { "id": "Lithium", "description": "A soft, silvery-white alkali metal. It's highly reactive, and ignites if it makes contact with water. Seems to be shiny.", "recipes": [], "effects": ["Poison (0.1u/s): Deals 0.05 poison"], "color": "#d6c0a7", "tags": [] },
        { "id": "Mercury", "description": "A silver metal which is liquid at room temperature. It's highly toxic to humans. Seems to be shiny.", "recipes": [], "effects": ["Poison (0.5u/s): Deals 1 poison, Causes stuttering"], "color": "#929296", "tags": [] },
        { "id": "Phosphorus", "description": "A reactive metal used in pyrotechnics and weapons. Seems to be powdery.", "recipes": [], "effects": ["Plants (0.5u/s): Nutrition +0.1, Water -0.5, Weeds -2"], "color": "#f5da9a", "tags": [] },
        { "id": "Potassium", "description": "A soft, shiny grey metal. Even more reactive than lithium. Seems to be shiny.", "recipes": [], "effects": [], "color": "#c6c8cc", "tags": [] },
        { "id": "Radium", "description": "A radioactive metal, silvery-white in its pure form. It glows due to its radioactivity and is highly toxic. Seems to be glowing.", "recipes": [], "effects": ["Poison (0.5u/s): Deals 2 radiation", "Plants (0.5u/s): Mutation +0.6, Toxins +4, Health -1.5, Mutation chance +0.1"], "color": "#00ff04", "tags": [] },
        { "id": "Silicon", "description": "A hard and brittle crystalline solid with a blue-grey color. Seems to be crystalline.", "recipes": [], "effects": ["Poison (0.5u/s): Deals 1.5 poison"], "color": "#364266", "tags": [] },
        { "id": "Silver", "description": "A soft, white, lustrous transition metal. Seems to be reasonably metallic.", "recipes": [], "effects": [], "color": "#d0d0d0", "tags": [] },
        { "id": "Sodium", "description": "A silvery-white alkali metal. Highly reactive in its pure form. Seems to be metallic.", "recipes": ["Insect blood [30] -> Water [14], Sodium [3], Chlorine [1.5], Carbon dioxide [5.5], Protein [6]", "Table salt [2] -> Chlorine [1], Sodium [1]"], "effects": [], "color": "#a7b3d6", "tags": [] },
        { "id": "Sulfur", "description": "A yellow, crystalline solid. Seems to be powdery.", "recipes": ["Welding fuel [10] -> Ethanol [5], Hydrogen [3], Sulfur [2]"], "effects": ["Poison (0.5u/s): Deals 0.1 caustic"], "color": "#fff385", "tags": ["Toxin"] },
        { "id": "Uranium", "description": "A grey metallic chemical element in the actinide series, weakly radioactive. Seems to be metallic.", "recipes": [], "effects": ["Poison (0.5u/s): Deals 2 radiation", "Plants (0.5u/s): Mutation +0.6, Toxins +4, Health -1.5, Mutation chance +0.1"], "color": "#8fa191", "tags": ["Toxin"] },
        { "id": "Zinc", "description": "A silvery, brittle metal, often used in batteries to carry charge. Seems to be shiny.", "recipes": [], "effects": [], "color": "#bababa", "tags": [] }
      ]
    },
    {
      "category": "Base Chemicals - Chemicals",
      "reagents": [
        { "id": "Acetone", "description": "A slick, slightly carcinogenic liquid. Seems to be acidic.", "recipes": ["Oil [1], Welding fuel [1], Oxygen [1] -> Acetone [2]"], "effects": [], "color": "#AF14B7", "tags": [] },
        { "id": "Artifact glue", "description": "Mixture of glue and artifexium. It can restore durability of nodes in artifact on touch. Seems to be non-newtonian.", "recipes": ["Space glue [1], Artifexium [1] -> Artifact glue [2]"], "effects": ["Poison (0.5u/s): Deals 2 caustic"], "color": "#827394", "tags": [] },
        { "id": "Artifexium", "description": "A lavender mixture of microscopic artifact fragments and a strong acid. It has the ability to activate artifacts. Seems to be crystalline.", "recipes": [], "effects": ["Poison (0.5u/s): Deals 2 caustic"], "color": "#776291", "tags": [] },
        { "id": "Ash", "description": "A light grey powdery residue. Seems to be powdery.", "recipes": ["Oil [1] (Heat > 520K) -> Ash [1]"], "effects": [], "color": "white", "tags": [] },
        { "id": "Benzene", "description": "An aromatic, slightly carcinogenic, ring of carbon. Seems to be acidic.", "recipes": ["Hydrogen [1], Carbon [1] (Heat > 310K) -> Benzene [1]"], "effects": ["Poison (0.5u/s): Deals 1 cellular"], "color": "#E7EA91", "tags": ["Toxin"] },
        { "id": "Charcoal", "description": "A black, porous solid. Seems to be porous.", "recipes": ["Carbon [1], Ash [1] -> Charcoal [1]"], "effects": ["Medicine (0.5u/s): Heals 1 poison, Cleanses bloodstream"], "color": "#22282b", "tags": ["Medicine"] },
        { "id": "Fersilicite", "description": "An intermetallic compound with unusual magnetic properties at low temperatures. Seems to be crystalline.", "recipes": ["Iron [1], Silicon [1] (Heat > 310K) -> Fersilicite [2]"], "effects": [], "color": "#434b4d", "tags": [] },
        { "id": "Hydroxide", "description": "A strong alkaline chemical. Seems to be alkaline.", "recipes": ["Oxygen [1], Hydrogen [1] (Heat > 310K) -> Hydroxide [2]"], "effects": [], "color": "white", "tags": [] },
        { "id": "Lye", "description": "A translucent, orange, alkaline solution used in traditional soap production. Seems to be alkaline.", "recipes": ["Water [1], Ash [1] -> Lye [2]"], "effects": ["Poison (0.5u/s): Deals 1 caustic"], "color": "#e5420b", "tags": ["Toxin"] },
        { "id": "Phenol", "description": "An aromatic ring of carbon with a hydroxyl group. Seems to be acidic.", "recipes": ["Hydroxide [1], Benzene [1] -> Phenol [2]"], "effects": ["Poison (0.5u/s): Deals 1 caustic, 2 poison"], "color": "#E7EA91", "tags": ["Toxin"] },
        { "id": "Sodium carbonate", "description": "A white, odorless, water-soluble salt. Seems to be powdery.", "recipes": ["Ammonia [1], Table salt [1], Carbon [1], Oxygen [1] -> Sodium carbonate [4]"], "effects": [], "color": "white", "tags": [] },
        { "id": "Sodium hydroxide", "description": "A white, odorless, water-soluble salt. Seems to be alkaline.", "recipes": ["Hydroxide [1], Sodium [1] -> Sodium hydroxide [2]"], "effects": ["Poison (0.5u/s): Deals 1.5 heat", "Medicine (0.5u/s): Chance to vomit (>5u)"], "color": "white", "tags": ["Medicine", "Toxin"] },
        { "id": "Sodium polyacrylate", "description": "A super-absorbent polymer. Seems to be grainy.", "recipes": ["Oxygen [2], Sodium [1], Nitrogen [1] -> Sodium polyacrylate [4]"], "effects": ["Poison (0.5u/s): Satiates thirst 1.667x"], "color": "#F0F0F0", "tags": ["Toxin"] }
      ]
    },
    {
      "category": "Base Chemicals - Gases",
      "reagents": [
        { "id": "Carbon dioxide", "description": "You have genuinely no idea what this is. Seems to be odorless.", "recipes": ["Blood [20] -> Water [11], Iron [0.5], Sugar [2], Carbon dioxide [3], Protein [4]"], "effects": ["Poison (0.5u/s): Deals 0.8 poison (non-Plant/Vox)", "Gas (0.5u/s): Deals 0.8 poison (>0.5u)"], "color": "#66ff33", "tags": ["Toxin"] },
        { "id": "Frezon", "description": "A highly effective coolant.. and hallucinogenic. Seems to be gaseous.", "recipes": [], "effects": ["Narcotic (0.5u/s): Deals 1 cellular, hallucinations, drunkenness", "Gas (0.5u/s): Deals 0.5 cellular, hallucinations, drunkenness"], "color": "#3a758c", "tags": ["Toxin"] },
        { "id": "Nitrogen", "description": "A colorless, odorless unreactive gas. Seems to be gaseous.", "recipes": ["Slime [5] -> Water [4], Nitrogen [1]"], "effects": ["Poison (0.5u/s): Deals 1 cold"], "color": "#a1e1ff", "tags": ["Toxin"] },
        { "id": "Nitrous oxide", "description": "You know how everything seems funnier when you're tired? Well... Seems to be gaseous.", "recipes": [], "effects": ["Poison (0.5u/s): Deals 2 poison", "Gas (0.5u/s): Slows movement, Unconsciousness (>1.8u), Poison (>3.5u)"], "color": "#5d88c9", "tags": ["Toxin"] },
        { "id": "Oxygen", "description": "An oxidizing, colorless gas. Seems to be gaseous.", "recipes": [], "effects": ["Poison (0.5u/s): Deals 3 poison (Vox)", "Gas (0.5u/s): Deals 7 poison (Vox)"], "color": "#c4f5ff", "tags": ["Toxin"] },
        { "id": "Plasma", "description": "Funky, space-magic pixie dust. Seems to be gaseous.", "recipes": [], "effects": ["Poison (0.5u/s): Deals 3 poison, Removes inaprovaline", "Gas (0.5u/s): Deals 1 poison"], "color": "#7e009e", "tags": [] },
        { "id": "Tritium", "description": "Radioactive space-magic pixie dust. Seems to be ionizing.", "recipes": [], "effects": ["Poison (0.5u/s): Deals 3 radiation", "Gas (0.5u/s): Deals 1 radiation"], "color": "#66ff33", "tags": [] }
      ]
    },
    {
      "category": "Applied Chemicals - Medicine",
      "reagents": [
        { "id": "Aloxadone", "description": "A cryogenics chemical. Used to treat severe burns and frostbite. Seems to be soothing.", "recipes": ["Cryoxadone [2], Aloe [1], Leporazine [2] -> Aloxadone [4]"], "effects": ["Medicine (0.5u/s): Heals 4 cold/heat/shock/1.5 caustic (Temp <= 213K)"], "color": "#89f77f", "tags": ["Medicine"] },
        { "id": "Ambuzol", "description": "A highly engineered substance able to halt the progression of a zombie infection. Seems to be crisp.", "recipes": ["Dylovene [1], Ammonia [1], Zombie blood [2] -> Ambuzol [4]"], "effects": ["Medicine (0.5u/s): Cures zombie infection (>10u)"], "color": "#86caf7", "tags": ["Medicine"] },
        { "id": "Ambuzol plus", "description": "Further engineered with omnizine, inoculates the living against the infection. Seems to be crisp.", "recipes": ["Ambuzol [5], Omnizine [5] -> Ambuzol plus [10]"], "effects": ["Medicine (0.5u/s): Cures and immunizes against zombie infection (>5u)"], "color": "#1274b5", "tags": ["Medicine"] },
        { "id": "Arithrazine", "description": "A mildly unstable medication used for the most extreme case of radiation poisoning. Seems to be cloudy.", "recipes": ["Hyronalin [1], Hydrogen [1] -> Arithrazine [2]"], "effects": ["Medicine (0.5u/s): Heals 3 radiation, Deals 1.5 brute"], "color": "#bd5902", "tags": ["Medicine"] },
        { "id": "Barozine", "description": "A potent chemical that prevents pressure damage. Seems to be viscous.", "recipes": [], "effects": ["Medicine (0.5u/s): Pressure immunity, Stuttering/Jittering, Deals poison/heat (>30u)"], "color": "#ff867d", "tags": [] },
        { "id": "Bicaridine", "description": "An analgesic which is highly effective at treating brute damage. Seems to be opaque.", "recipes": ["Inaprovaline [1], Carbon [1] -> Bicaridine [2]"], "effects": ["Medicine (0.5u/s): Heals 1.5 brute; Deals asphyxiation/poison (>15u); Vomiting/Jittering"], "color": "#ffaa00", "tags": ["Medicine"] },
        { "id": "Bruizine", "description": "Originally developed as a cough medicine, it turns out this chemical is wildly effective at treating blunt force trauma. Seems to be mucus-like.", "recipes": ["Bicaridine [1], Lithium [0.9], Sugar [1] -> Bruizine [2]"], "effects": ["Medicine (0.25u/s): Heals 2.25 blunt; Satiates hunger slowly; Deals poison (>10.5u)"], "color": "#ff3636", "tags": ["Medicine"] },
        { "id": "Cognizine", "description": "A mysterious chemical which is able to make any non-sentient creature sentient. Seems to be enigmatic.", "recipes": ["Carpotoxin [1], Siderlac [1], Acetone [1] -> Cognizine [1]"], "effects": ["Medicine (0.5u/s): Makes metabolizer sentient (>5u)"], "color": "#b50ee8", "tags": ["Medicine"] },
        { "id": "Cryoxadone", "description": "Required for the proper function of cryogenics. Seems to be fizzy.", "recipes": ["Dexalin [1], Water [1], Oxygen [1] -> Cryoxadone [3]"], "effects": ["Medicine (0.5u/s): Heals 6 airloss, 4 brute, 6 burn, 4 toxin (Temp <= 213K)"], "color": "#0091ff", "tags": ["Medicine"] },
        { "id": "Cryptobiolin", "description": "Causes confusion and dizziness. Seems to be fizzy.", "recipes": ["Potassium [1], Oxygen [1], Sugar [1] -> Cryptobiolin [3]"], "effects": ["Medicine (0.5u/s): Causes stuttering and slurred speech"], "color": "#081a80", "tags": ["Medicine"] },
        { "id": "Dermaline", "description": "An advanced chemical that is more effective at treating burn damage than kelotane. Seems to be translucent.", "recipes": ["Kelotane [1], Oxygen [1], Phosphorus [1] -> Dermaline [3]"], "effects": ["Medicine (0.5u/s): Heals 1.5 burn; Deals brute/asphyx/cold (>10u)"], "color": "#215263", "tags": ["Medicine"] },
        { "id": "Dexalin", "description": "Used for treating minor oxygen deprivation and bloodloss. Seems to be opaque.", "recipes": ["Oxygen [2], Plasma [1] -> Dexalin [3]"], "effects": ["Medicine (0.5u/s): Heals 1 asphyxiation, 0.5 bloodloss; Deals asphyx/cold (>20u)"], "color": "#0041a8", "tags": ["Medicine"] },
        { "id": "Dexalin plus", "description": "Used in treatment of extreme cases of oxygen deprivation and bloodloss. Seems to be cloudy.", "recipes": ["Dexalin [1], Carbon [1], Iron [1] -> Dexalin plus [3]"], "effects": ["Medicine (0.5u/s): Heals 3.5 asphyxiation, 3 bloodloss; Removes heartbreaker toxin; Deals asphyx/cold (>25u)"], "color": "#4da0bd", "tags": ["Medicine"] },
        { "id": "Diphenhydramine", "description": "Rapidly purges the body of histamine, reduces jitteriness, causes drowsiness. Seems to be chalky.", "recipes": ["Diethylamine [1], Oil [1], Table salt [1], Carbon [1], Ethanol [1] (Heat > 377.59K) -> Diphenhydramine [3]"], "effects": ["Medicine (0.5u/s): Removes histamine/jittering, Causes drowsiness, Heals 3 poison"], "color": "#64ffe6", "tags": ["Medicine"] },
        { "id": "Diphenylmethylamine", "description": "Useful for keeping someone awake. Seems to be glowing.", "recipes": ["Ethyloxyephedrine [1], Sodium carbonate [1], Coffee [1] -> Diphenylmethylamine [3]"], "effects": ["Medicine (0.5u/s): Removes drowsiness, Staves off narcolepsy (>5u)"], "color": "#b0abaa", "tags": ["Medicine"] },
        { "id": "Doxarubixadone", "description": "A cryogenics chemical. Heals cellular damage caused by dangerous gasses and chemicals. Seems to be bubbling.", "recipes": ["Cryoxadone [1], Unstable mutagen [1] -> Doxarubixadone [2]"], "effects": ["Medicine (0.5u/s): Heals 2 cellular (Temp <= 213K)"], "color": "#32cd32", "tags": ["Medicine"] },
        { "id": "Dylovene", "description": "A broad-spectrum anti-toxin. Seems to be translucent.", "recipes": ["Silicon [1], Nitrogen [1], Potassium [1] -> Dylovene [3]"], "effects": ["Medicine (0.5u/s): Heals 1 poison; Deals brute/Jittering/Vomiting (>20u)"], "color": "#3a1d8a", "tags": ["Medicine"] },
        { "id": "Epinephrine", "description": "An effective stabilizing chemical used to keep a critical person from dying. Seems to be odorless.", "recipes": ["Phenol [1], Acetone [1], Chlorine [1], Hydroxide [1] -> Epinephrine [4]"], "effects": ["Medicine (0.5u/s): Removes histamine, Heals critical damage, Reduces stun/knockdown, Adrenaline"], "color": "#d2fffa", "tags": ["Medicine"] },
        { "id": "Ethyloxyephedrine", "description": "Primarily used to combat narcolepsy. Seems to be shiny.", "recipes": ["Desoxyephedrine [1], Stellibinin [1] -> Ethyloxyephedrine [2]"], "effects": ["Medicine (0.5u/s): Causes jittering/stuttering, Removes drowsiness, Staves narcolepsy (>10u)"], "color": "#d5d5e4", "tags": ["Medicine"] },
        { "id": "Ethylredoxrazine", "description": "Neutralises the effects of alcohol in the blood stream. Seems to be opaque.", "recipes": ["Oxygen [1], Dylovene [1], Carbon [1] -> Ethylredoxrazine [3]"], "effects": ["Medicine (0.5u/s): Removes drunkenness, Heals 0.5 poison"], "color": "#2d5708", "tags": ["Medicine"] },
        { "id": "Haloperidol", "description": "Removes most stimulating and hallucinogenic drugs. Seems to be crystalline.", "recipes": ["Aluminium [1], Chlorine [1], Fluorine [1], Oil [1], Potassium iodide [1] -> Haloperidol [5]"], "effects": ["Medicine (0.5u/s): Causes drowsiness, Removes jittering/hallucinations/drugs"], "color": "#27870a", "tags": ["Medicine"] },
        { "id": "Holy water", "description": "The cleanest and purest of waters straight from the hands of god. Seems to be holy.", "recipes": ["Water [1] -> Holy water [1]"], "effects": ["Drink (0.5u/s): Heals 0.2 brute/poison/burn if total damage <= 50"], "color": "#91C3F7", "tags": [] },
        { "id": "Hyronalin", "description": "A weak treatment for radiation damage. Seems to be cloudy.", "recipes": ["Radium [1], Dylovene [1] -> Hyronalin [2]"], "effects": ["Medicine (0.5u/s): Heals 1 radiation; Deals heat/jittering (>30u)"], "color": "#4cb580", "tags": ["Medicine"] },
        { "id": "Inaprovaline", "description": "Commonly used to treat asphyxiation damage caused during critical states. Seems to be opaque.", "recipes": ["Oxygen [1], Carbon [1], Sugar [1] -> Inaprovaline [3]"], "effects": ["Medicine (0.1u/s): Heals 2 asphyxiation if critical, Reduces bleeding"], "color": "#731024", "tags": ["Medicine"] },
        { "id": "Insuzine", "description": "Rapidly repairs dead tissue caused by electrocution, but cools you slightly. Seems to be frosty.", "recipes": ["Leporazine [1], Kelotane [1], Silicon [1] (Heat > 433K) -> Insuzine [3]"], "effects": ["Medicine (0.25u/s): Heals 1.5 shock, Removes heat/licoxide/tazinide; Deals cold (>12u)"], "color": "#8147ff", "tags": ["Medicine"] },
        { "id": "Ipecac", "description": "A rapid-acting emetic. Seems to be inky.", "recipes": ["Potassium [1], Nitrogen [1], Ammonia [1] -> Ipecac [2]"], "effects": ["Medicine (0.5u/s): 30% chance vomiting (>4u)"], "color": "#422912", "tags": ["Medicine"] },
        { "id": "Kelotane", "description": "Treats burn damage. Seems to be strong smelling.", "recipes": ["Silicon [1], Carbon [1] -> Kelotane [2]"], "effects": ["Medicine (0.5u/s): Heals 0.33 burn; Satiates thirst rapidly (>30u)"], "color": "#bf3d19", "tags": ["Medicine"] },
        { "id": "Lacerinol", "description": "Boosts collagen sythesis to incredible levels, healing slash trauma. Seems to be viscous.", "recipes": ["Bicaridine [1], Benzene [1] (Heat > 335K) -> Lacerinol [2]"], "effects": ["Medicine (0.25u/s): Heals 2 slash, Deals 0.2 heat; Deals 1.5 cold (>12u)"], "color": "#283332", "tags": ["Medicine"] },
        { "id": "Leporazine", "description": "Stabilizes body temperature and rapidly cure cold damage. Seems to be pungent.", "recipes": ["Copper [1], Fersilicite [1], Plasma [1] -> Leporazine [2]"], "effects": ["Medicine (0.5u/s): Heals 4 cold, Stabilizes temp, Removes Fresium"], "color": "#ff7db5", "tags": ["Medicine"] },
        { "id": "Lipozine", "description": "Accelerates metabolism, causing the user to hunger faster. Seems to be oily.", "recipes": ["Table salt [1], Ethanol [1], Radium [1] -> Lipozine [3]"], "effects": ["Medicine (0.5u/s): Satiates hunger 0.333x"], "color": "#2690b5", "tags": ["Medicine"] },
        { "id": "Mannitol", "description": "Efficiently restores brain damage. Seems to be opaque.", "recipes": ["Hydrogen [1], Water [1], Sugar [1] -> Mannitol [3]"], "effects": ["Medicine (0.5u/s)"], "color": "#A0A0A0", "tags": ["Medicine"] },
        { "id": "Necrosol", "description": "A necrotic substance that seems to be able to heal frozen corpses. Seems to be necrotic.", "recipes": ["Blood [3], Omnizine [1], Cryoxadone [2] (Heat > 370K) -> Necrosol [2]"], "effects": ["Medicine (0.5u/s): Heals brute/burn/poison (Temp <= 213K)"], "color": "#86a5bd", "tags": ["Medicine"] },
        { "id": "Oculine", "description": "Used to treat the eyes via ingestion. Seems to be translucent.", "recipes": ["Table salt [1], Blood [1], Hydroxide [2] -> Oculine [4]"], "effects": ["Medicine (0.5u/s): Heals eye damage"], "color": "#404040", "tags": ["Medicine"] },
        { "id": "Omnizine", "description": "A soothing milky liquid with an iridescent gleam. Seems to be soothing.", "recipes": [], "effects": ["Medicine (0.5u/s): Heals 2 burn/toxin/airloss/brute"], "color": "#fcf7f9", "tags": [] },
        { "id": "Opporozidone", "description": "Used to regenerate rotting tissue and brain matter. Seems to be sickly.", "recipes": ["Cognizine [1], Plasma [2], Doxarubixadone [1] (Heat > 400K) -> Opporozidone [3]"], "effects": ["Medicine (0.5u/s): Reduces rotting (Temp <= 150K, dead)"], "color": "#b5e36d", "tags": ["Medicine"] },
        { "id": "Phalanximine", "description": "An advanced chemical used in the treatment of cancer. Seems to be acrid.", "recipes": ["Hyronalin [1], Ethanol [1], Unstable mutagen [1] -> Phalanximine [3]"], "effects": ["Medicine (0.1u/s): Heals 0.3 cellular; Deals radiation/caustic"], "color": "#c8ff75", "tags": ["Medicine"] },
        { "id": "Polypyrylium Oligomers", "description": "Heals asphyxiation and brute damage. Stops bleeding. Seems to be pungent.", "recipes": [], "effects": ["Medicine (0.5u/s): Heals 3.5 brute, 2.5 asphyx; Deals asphyx (>30u)"], "color": null, "tags": [] },
        { "id": "Potassium iodide", "description": "Will reduce the damaging effects of radiation by 90%. Seems to be grainy.", "recipes": ["Potassium [1], Iodine [1] -> Potassium iodide [2]"], "effects": ["Medicine (0.5u/s): Radiation protection; Deals poison (>20u)"], "color": "#baa15d", "tags": ["Medicine"] },
        { "id": "Psicodine", "description": "Suppresses anxiety and other various forms of mental distress. Seems to be shiny.", "recipes": ["Mannitol [2], Impedrezene [1], Water [2] -> Psicodine [4]"], "effects": ["Medicine (0.5u/s): Deals poison/hallucinations (>30u); Removes jittering/drunkenness"], "color": "#07E79E", "tags": ["Medicine"] },
        { "id": "Pulped banana peel", "description": "Pulped banana peels have some effectiveness against bleeding. Seems to be pulpy.", "recipes": [], "effects": ["Medicine (0.5u/s): Reduces bleeding"], "color": null, "tags": [] },
        { "id": "Puncturase", "description": "Helps rebuild trauma caused by piercing damage. Seems to be fizzy.", "recipes": ["Bicaridine [1], Hydroxide [1] (Heat > 325K) -> Puncturase [2]"], "effects": ["Medicine (0.25u/s): Heals 2.5 piercing; Deals radiation/blunt (>12u)"], "color": "#b9bf93", "tags": ["Medicine"] },
        { "id": "Pyrazine", "description": "Efficiently heals burns from the hottest of fires. Seems to be thick.", "recipes": ["Leporazine [1], Dermaline [1], Carbon [1] (Heat > 540K) -> Pyrazine [3]"], "effects": ["Medicine (0.1u/s): Heals 1 heat; Deals slash/piercing and vomiting (>20u)"], "color": "#aa4308", "tags": ["Medicine"] },
        { "id": "Saline", "description": "Commonly used to treat dehydration or low fluid presence in blood. Seems to be salty.", "recipes": ["Water [4], Table salt [1] -> Saline [5]"], "effects": ["Drink (0.5u/s): Satiates thirst 2x; Increases blood level"], "color": "#0064C8", "tags": [] },
        { "id": "Siderlac", "description": "A powerful anti-caustic medicine derived from plants. Seems to be milky.", "recipes": ["Aloe [1], Stellibinin [1] -> Siderlac [2]"], "effects": ["Medicine (0.5u/s): Heals 5 caustic"], "color": "#f4dab8", "tags": ["Medicine"] },
        { "id": "Sigynate", "description": "Useful for neutralizing acids and soothing trauma caused by acids. Seems to be thick.", "recipes": ["Sodium carbonate [1], Sodium hydroxide [1], Kelotane [1], Water [1], Sugar [1] (Heat > 370K) -> Sigynate [4]"], "effects": ["Medicine (0.25u/s): Heals 1.25 caustic; Deals heat/jittering/vomiting (>16u)"], "color": "#e0a5b9", "tags": ["Medicine"] },
        { "id": "Stellibinin", "description": "A natual anti-toxin with particular effectiveness against amatoxin. Seems to be starry.", "recipes": [], "effects": ["Medicine (0.5u/s): Heals 4 poison; Removes amatoxin"], "color": "#2b2f77", "tags": [] },
        { "id": "Synaptizine", "description": "Halves the duration of stuns and knockdowns. Seems to be pungent.", "recipes": ["Lithium [1], Sugar [1], Water [1] -> Synaptizine [3]"], "effects": ["Poison (0.5u/s): Deals 2 poison; Removes stun/knockdown/hallucinations"], "color": "#d49a2f", "tags": ["Toxin"] },
        { "id": "Tranexamic acid", "description": "A blood-clotting medicine used to prevent profuse bleeding. Seems to be viscous.", "recipes": ["Inaprovaline [1], Sulfuric acid [1], Sugar [1] -> Tranexamic acid [3]"], "effects": ["Medicine (0.5u/s): Reduces bleeding; Deals 3 bloodloss (>15u)"], "color": "#ba7d7d", "tags": ["Medicine"] },
        { "id": "Tricordrazine", "description": "Treats minor damage of all basic health types. Seems to be opaque.", "recipes": ["Inaprovaline [1], Dylovene [1] -> Tricordrazine [2]"], "effects": ["Medicine (0.5u/s): Heals 1 brute, 0.5 poison, 0.33 burn (Damage <= 50)"], "color": "#00e5ff", "tags": ["Medicine"] },
        { "id": "Ultravasculine", "description": "A complicated anti-toxin solution. Seems to be thick and grainy.", "recipes": ["Histamine [2], Plasma [1] -> Ultravasculine [2]"], "effects": ["Medicine (0.5u/s): Heals toxin/Deals brute (swaps at >20u)"], "color": "#520e30", "tags": ["Medicine"] }
      ]
    },
    {
      "category": "Applied Chemicals - Toxins",
      "reagents": [
        { "id": "Amatoxin", "description": "A deadly toxin found in some mushrooms. Seems to be nondescript.", "recipes": [], "effects": ["Poison (0.2u/s): Deals 3 poison"], "color": "#D6CE7B", "tags": [] },
        { "id": "Bungotoxin", "description": "A moderately slow-acting poison. Seems to be nondescript.", "recipes": [], "effects": ["Poison (0.2u/s): Deals 1.8 poison"], "color": null, "tags": [] },
        { "id": "Buzzochloric bees", "description": "Liquid bees. Seems to be buzzy.", "recipes": ["Saxoite [1], Fiber [1], Ground Bee [1], Chlorine [1], Unstable mutagen [1] -> Buzzochloric bees [3]"], "effects": ["Poison (0.5u/s): Deals 2 poison, 2 piercing (if not Bee)"], "color": "#FFD35D", "tags": ["Toxin"] },
        { "id": "Carpotoxin", "description": "A highly toxic reagent found in space carps. Seems to be exotic smelling.", "recipes": [], "effects": ["Poison (0.5u/s): Deals 4 poison"], "color": "#e2a38c", "tags": [] },
        { "id": "Chloral hydrate", "description": "A sedative and hypnotic chemical. Seems to be nondescript.", "recipes": ["Chlorine [3], Ethanol [1], Water [1] -> Chloral hydrate [1]"], "effects": ["Poison (0.5u/s): Slows movement, Drowsiness; Deals poison (>20u)"], "color": "#000067", "tags": ["Toxin"] },
        { "id": "Corgium", "description": "Tastes like dog food. Seems to be fluffy.", "recipes": ["Uncooked animal proteins [1], Juice that makes you Weh [1], Happiness [1] -> Corgium [2]"], "effects": ["Poison (0.2u/s): Deals 0.5 cellular (>15u); Polymorphs to Corgi (>50u)"], "color": "#ed9715", "tags": ["Toxin"] },
        { "id": "Ferrochromic acid", "description": "A mildy corrosive solution. Seems to be ferrous.", "recipes": [], "effects": ["Drink (0.5u/s): Deals 2.5 heat, 1 caustic"], "color": null, "tags": [] },
        { "id": "Fluorosulfuric acid", "description": "A highly corrosive chemical. Seems to be strong smelling.", "recipes": ["Fluorine [1], Hydrogen [1], Potassium [1], Sulfuric acid [1] -> Fluorosulfuric acid [4]"], "effects": ["Poison (3u/s): Deals 8 caustic"], "color": "#5050ff", "tags": ["Toxin"] },
        { "id": "Fresium", "description": "A mysterious compound that slows the vibration of atoms. Seems to be frosty.", "recipes": ["Frezon [3], Plasma [1], Nitrogen [2], Cryoxadone [0.22], Table salt [0.08], Water [1.5] (Heat < 300K) -> Fresium [5]"], "effects": ["Poison (0.45u/s): Deals heat/cold, Removes heat, Slows movement"], "color": "#b3f1ff", "tags": ["Toxin"] },
        { "id": "Gastrotoxin", "description": "A moderately toxic byproduct of decomposition. Seems to be putrid.", "recipes": [], "effects": ["Poison (0.5u/s): Deals 2 poison, Vomiting"], "color": null, "tags": [] },
        { "id": "Heartbreaker toxin", "description": "Blocks neurological signals to the respiratory system. Seems to be strong smelling.", "recipes": ["Dexalin plus [1], Mindbreaker toxin [1] -> Heartbreaker toxin [2]"], "effects": ["Poison (0.5u/s): Deals 5 asphyxiation"], "color": "#5f959c", "tags": ["Toxin"] },
        { "id": "Histamine", "description": "Lethal at large quantities. Seems to be abrasive.", "recipes": [], "effects": ["Poison (0.5u/s): Deals brute/airloss/poison (>45u)"], "color": "#FA6464", "tags": [] },
        { "id": "Honk", "description": "Causes severe honking and internal bleeding. Seems to be pungent.", "recipes": [], "effects": ["Poison (0.05u/s): Deals 0.06 poison (Animal)"], "color": "#F2E9D2", "tags": [] },
        { "id": "Juice that makes you Hew", "description": "Pure essence of inversed lizard plush. Seems to be inversed.", "recipes": [], "effects": ["Poison (0.25u/s): Polymorphs to Lizard (>50u)"], "color": "#a64dc5", "tags": [] },
        { "id": "Juice that makes you Weh", "description": "Pure essence of lizard plush. Seems to be vibrant.", "recipes": [], "effects": ["Poison (0.25u/s): Polymorphs to Lizard (>50u)"], "color": "#59b23a", "tags": [] },
        { "id": "Lead", "description": "A slow-acting but incredibly lethal toxin. Seems to be metallic.", "recipes": [], "effects": ["Poison (0.03u/s): Deals 0.6 poison"], "color": null, "tags": [] },
        { "id": "Lexorin", "description": "A fast-acting chemical used to asphyxiate people rapidly. Seems to be pungent.", "recipes": ["Heartbreaker toxin [1], Plasma [1], Vestine [1] -> Lexorin [2]"], "effects": ["Poison (0.5u/s): Deals 10 airloss"], "color": "#6b0007", "tags": ["Toxin"] },
        { "id": "Licoxide", "description": "A synthetic battery acid. Seems to be electric.", "recipes": ["Lead [1], Zinc [1] -> Licoxide [1]"], "effects": ["Poison (0.5u/s): 35% chance to electrocute"], "color": "#FDD023", "tags": ["Toxin"] },
        { "id": "Lipolicide", "description": "A powerful toxin that will destroy fat cells. Seems to be strong smelling.", "recipes": ["Ephedrine [1], Diethylamine [1], Mercury [1] -> Lipolicide [3]"], "effects": ["Poison (0.5u/s): Deals 2 poison (Hunger <= 50), Satiates hunger 2x"], "color": "#F0FFF0", "tags": ["Toxin"] },
        { "id": "Mechanotoxin", "description": "A neurotoxin used as venom by some species of spider. Seems to be nondescript.", "recipes": [], "effects": ["Poison (0.2u/s): Deals 1.6 poison; Slows movement"], "color": null, "tags": [] },
        { "id": "Mindbreaker toxin", "description": "A potent hallucinogenic compound. Seems to be opaque.", "recipes": ["Silicon [1], Hydrogen [1], Dylovene [1] (Heat > 370K) -> Mindbreaker toxin [3]"], "effects": ["Poison (0.5u/s): Hallucinations"], "color": "#77b58e", "tags": ["Toxin"] },
        { "id": "Mold", "description": "A fungal growth. Seems to be fuzzy.", "recipes": ["Zombie blood [4] -> Mold [2], Protein [1], Toxin [1]"], "effects": ["Poison (0.5u/s): Deals 1 poison"], "color": "#8a9a5b", "tags": ["Toxin"] },
        { "id": "Polytrinic acid", "description": "An extremely corrosive chemical substance. Seems to be strong smelling.", "recipes": ["Sulfuric acid [1], Plasma [1], Potassium [1] -> Polytrinic acid [3]"], "effects": ["Poison (3u/s): Deals 11 caustic"], "color": "#a1000b", "tags": ["Toxin"] },
        { "id": "Razorium", "description": "A strange, non-newtonian chemical. Seems to be reflective.", "recipes": ["Lacerinol [1], Bicaridine [1] -> Razorium [1]"], "effects": ["Poison (3u/s): Deals 9 slash"], "color": "#e3fffb", "tags": ["Toxin"] },
        { "id": "Romerol", "description": "An otherworldly concoction able to bring the undead to life. Seems to be necrotic.", "recipes": [], "effects": ["Medicine (0.5u/s): Zombie infection (>5u)"], "color": null, "tags": [] },
        { "id": "Sulfuric acid", "description": "A corrosive chemical. Seems to be oily.", "recipes": ["Hydrogen [1], Sulfur [1], Oxygen [2] -> Sulfuric acid [3]"], "effects": ["Poison (3u/s): Deals 5 caustic"], "color": "#BF8C00", "tags": ["Toxin"] },
        { "id": "Tazinide", "description": "A highly dangerous metallic mixture. Seems to be metallic.", "recipes": ["Licoxide [1], Vestine [1] -> Tazinide [1]"], "effects": ["Poison (0.5u/s): 80% chance to electrocute"], "color": "#FDD023", "tags": ["Toxin"] },
        { "id": "Theobromine", "description": "A bitter alkaloid of the cacao plant. Seems to be grainy.", "recipes": [], "effects": ["Poison (0.05u/s): Deals 0.4 poison (Animal)"], "color": null, "tags": [] },
        { "id": "Toxin", "description": "An unsurprisingly toxic chemical. Seems to be opaque.", "recipes": ["Zombie blood [4] -> Mold [2], Protein [1], Toxin [1]"], "effects": ["Poison (0.5u/s): Deals 4 poison"], "color": "#cf3600", "tags": ["Toxin"] },
        { "id": "Trash", "description": "An awful-smelling fluid. Deadly to non-vox. Seems to be nondescript.", "recipes": [], "effects": ["Food (0.5u/s): Satiates hunger (Vox)"], "color": null, "tags": [] },
        { "id": "Vent crud", "description": "A jet black substance found in poorly maintained ventilation systems. Seems to be sticky.", "recipes": [], "effects": ["Poison (0.5u/s): Deals 2 poison"], "color": null, "tags": [] },
        { "id": "Vestine", "description": "Has an adverse reaction within the body causing major jittering. Seems to be shiny.", "recipes": [], "effects": ["Poison (0.5u/s): Causes jittering (>5u), Slows movement, Deals airloss"], "color": "#435166", "tags": [] },
        { "id": "Unstable mutagen", "description": "Causes mutations when injected. Seems to be glowing.", "recipes": ["Radium [1], Phosphorus [1], Chlorine [1] -> Unstable mutagen [3]"], "effects": ["Poison (0.5u/s): Deals 3 radiation"], "color": "#00ff5f", "tags": ["Toxin"] }
      ]
    },
    {
      "category": "Applied Chemicals - Narcotics",
      "reagents": [
        { "id": "Bananadine", "description": "A mild psychedelic. Seems to be powdery.", "recipes": [], "effects": ["Narcotic (0.5u/s): Hallucinations"], "color": "#ffff00", "tags": [] },
        { "id": "Desoxyephedrine", "description": "A more effective ephedrine. Seems to be translucent.", "recipes": ["Ephedrine [1], Carbon [1], Iodine [1], Phosphorus [1] (Heat > 370K) -> Desoxyephedrine [4]"], "effects": ["Poison (0.5u/s): Deals poison", "Narcotic (0.5u/s): Speeds movement, Jittering"], "color": "#FAFAFA", "tags": ["Medicine", "Narcotic", "Toxin"] },
        { "id": "Ephedrine", "description": "A caffeinated adrenaline stimulator. Seems to be powdery.", "recipes": ["Oil [1], Hydrogen [1], Sugar [1], Diethylamine [1] -> Ephedrine [4]"], "effects": ["Narcotic (0.5u/s): Speeds movement, Jittering, Deals poison (>20u)"], "color": "#D2FFFA", "tags": ["Medicine", "Narcotic"] },
        { "id": "Happiness", "description": "Fills you with ecstatic numbness. Seems to be soothing.", "recipes": ["Laughter [2], Epinephrine [1], Ethanol [1], Plasma [5] -> Happiness [4]"], "effects": ["Narcotic (0.5u/s): Hallucinations"], "color": "#EE35FF", "tags": ["Narcotic"] },
        { "id": "Hyperzine", "description": "Allows agents to recover from stuns faster. Seems to be energizing.", "recipes": ["Ephedrine [1], Vestine [1], Oxygen [2] (Heat > 370K) -> Hyperzine [2]"], "effects": ["Narcotic (1u/s): Speeds movement, Removes stun/knockdown, Deals poison (>80u)"], "color": "#9A040E", "tags": ["Medicine", "Narcotic"] },
        { "id": "Impedrezene", "description": "Impedes one's ability by slowing down brain cells. Seems to be acrid.", "recipes": ["Mercury [1], Oxygen [1], Water [1] (Heat > 370K) -> Impedrezene [1]"], "effects": ["Narcotic (0.5u/s): Slows movement, Deals 2 poison, Hallucinations"], "color": "#215263", "tags": ["Narcotic"] },
        { "id": "Mute toxin", "description": "Coats the vocal cords. Seems to be syrupy.", "recipes": ["Uranium [1], Vestine [2], Space glue [2] (Heat > 370K) -> Mute toxin [2]"], "effects": ["Narcotic (0.5u/s): Inability to speak"], "color": "#000000", "tags": ["Narcotic"] },
        { "id": "Nicotine", "description": "Dangerous and highly addictive. Seems to be strong smelling.", "recipes": [], "effects": [], "color": null, "tags": [] },
        { "id": "Nocturine", "description": "A highly effective sedative and hypnotic. Seems to be powdery.", "recipes": ["Impedrezene [2], Vestine [1] -> Nocturine [1]"], "effects": ["Narcotic (0.5u/s): Unconsciousness (>8u)"], "color": "#128e80", "tags": ["Narcotic"] },
        { "id": "Norepinephric acid", "description": "Blocks the optical receptors. Seems to be milky.", "recipes": ["Uranium [1], Epinephrine [1] -> Norepinephric acid [2]"], "effects": ["Narcotic (0.5u/s): Blindness (>20u)"], "color": "#96a8b5", "tags": ["Narcotic"] },
        { "id": "Pax", "description": "Prevents the patient from directly harming anyone. Seems to be soothing.", "recipes": ["Mindbreaker toxin [1], Synaptizine [1], Water [1] -> Pax [3]"], "effects": ["Poison (0.5u/s): Combat pacification"], "color": "#AAAAAA", "tags": ["Toxin"] },
        { "id": "Space mirage", "description": "Induces loss of balance and visual artefacts. Seems to be syrupy.", "recipes": ["Mercury [1], Sugar [1], Lithium [1] -> Space mirage [3]"], "effects": ["Narcotic (0.5u/s): Hallucinations"], "color": "#63806e", "tags": ["Narcotic"] },
        { "id": "Tear gas", "description": "Causes severe irritation and crying. Seems to be milky.", "recipes": [], "effects": ["Narcotic (0.5u/s): Blindness/Slows movement (>4u)"], "color": null, "tags": [] },
        { "id": "THC", "description": "The main psychoactive compound in cannabis. Seems to be crystalline.", "recipes": [], "effects": ["Narcotic (0.5u/s): Hallucinations"], "color": "#808080", "tags": [] }
      ]
    },
    {
      "category": "Reactive Chemicals - Pyrotechnic",
      "reagents": [
        { "id": "Chlorine trifluoride", "description": "You really, REALLY don't want to get this shit anywhere near you. Seems to be blazing.", "recipes": ["Chlorine [1], Fluorine [3] (Heat > 370K) -> Chlorine trifluoride [4]"], "effects": ["Poison (0.5u/s): Deals heat/poison/caustic, Ignites"], "color": "#FFC8C8", "tags": ["Toxin"] },
        { "id": "Fluorosurfactant", "description": "A perfluoronated sulfonic acid that forms a foam when mixed with water. Seems to be opaque.", "recipes": ["Carbon [2], Fluorine [2], Sulfuric acid [1] -> Fluorosurfactant [5]"], "effects": [], "color": "#9e6b38", "tags": [] },
        { "id": "Foaming agent", "description": "Makes foam such as that's required in metal foam grenades. Seems to be foamy.", "recipes": ["Lithium [1], Hydrogen [1] -> Foaming agent [2]"], "effects": [], "color": "#215263", "tags": [] },
        { "id": "Napalm", "description": "It's just a little flammable. Seems to be soapy.", "recipes": ["Oil [1], Welding fuel [1], Ethanol [1] -> Napalm [3]"], "effects": ["Poison (0.5u/s): Deals heat/poison/caustic, Ignites"], "color": "#FA00AF", "tags": ["Toxin"] },
        { "id": "Phlogiston", "description": "Catches you on fire and makes you ignite. Seems to be burning.", "recipes": ["Phosphorus [1], Sulfuric acid [1], Plasma [1] -> Phlogiston [3]"], "effects": ["Poison (0.5u/s): Deals heat/poison, Ignites"], "color": "#D4872A", "tags": ["Toxin"] },
        { "id": "Thermite", "description": "A mixture that becomes extremely hot when ignited. Seems to be grainy.", "recipes": ["Iron [1], Aluminium [1], Oxygen [1] -> Thermite [3]"], "effects": ["Poison (0.5u/s): Deals 2 heat, 1 poison"], "color": "#757245", "tags": ["Toxin"] },
        { "id": "Welding fuel", "description": "Used by welders to weld. Seems to be oily.", "recipes": [], "effects": ["Poison (0.5u/s): Deals 1 poison, Increases flammability"], "color": "#a76b1c", "tags": [] }
      ]
    },
    {
      "category": "Reactive Chemicals - Cleaning",
      "reagents": [
        { "id": "Bleach", "description": "Heavy duty cleaner. Extremely toxic when ingested. Seems to be strong smelling.", "recipes": ["Table salt [2], Space cleaner [2], Sodium hydroxide [1] -> Bleach [5]"], "effects": ["Poison (0.5u/s): Deals 2 poison, 2 caustic"], "color": "#a1000b", "tags": ["Toxin"] },
        { "id": "Soap", "description": "I wouldn't clean my mouth out with this if I were you. Seems to be soapy.", "recipes": ["Fat [15], Table salt [10], Water [10] -> Soap bar"], "effects": ["Food/Drink (0.5u/s): Vomiting (>6u)"], "color": null, "tags": [] },
        { "id": "Space cleaner", "description": "This is able to clean almost all surfaces. Seems to be lemony fresh.", "recipes": ["Ammonia [1], Water [1] -> Space cleaner [2]"], "effects": [], "color": "#c8ff69", "tags": [] }
      ]
    },
    {
      "category": "Nourishment - Food",
      "reagents": [
        { "id": "Allicin", "description": "An organosulfur compound found in alliums. Seems to be pungent.", "recipes": [], "effects": ["Poison (0.05u/s): Deals poison (Animal)"], "color": "#F2E9D2", "tags": [] },
        { "id": "Astrotame", "description": "The sweetness of a thousand sugars but none of the calories. Seems to be sugary.", "recipes": [], "effects": [], "color": null, "tags": [] },
        { "id": "BBQ sauce", "description": "Hand wipes not included. Seems to be gloopy.", "recipes": [], "effects": [], "color": "darkred", "tags": [] },
        { "id": "Black pepper", "description": "Often used to flavor food or make people sneeze. Seems to be grainy.", "recipes": [], "effects": [], "color": null, "tags": [] },
        { "id": "Butter", "description": "You can believe it! Seems to be creamy.", "recipes": [], "effects": ["Food (0.5u/s): Adds 0.75u nutriment"], "color": null, "tags": [] },
        { "id": "Capsaicin Oil", "description": "Capsaicin Oil is the ingredient found in different types of hot peppers. Seems to be oily.", "recipes": [], "effects": ["Poison (0.5u/s): Adds heat; Deals caustic (>5u)"], "color": "#FF0000", "tags": [] },
        { "id": "Cocoa powder", "description": "From the best varieties of cocoa beans. Seems to be powdery.", "recipes": [], "effects": [], "color": "#800000", "tags": [] },
        { "id": "Coldsauce", "description": "Leaves the tongue numb in its passage. Seems to be cold.", "recipes": [], "effects": [], "color": "skyblue", "tags": [] },
        { "id": "Cooked egg", "description": "Cooked chicken embryo, delicious. Seems to be fluffy.", "recipes": ["Cooked egg [0.5] (Heat > 344K) -> Cooked egg [0.5]"], "effects": ["Food (0.5u/s): Adds 1u protein"], "color": "white", "tags": [] },
        { "id": "Corn oil", "description": "A delicious oil used in cooking. Seems to be oily.", "recipes": [], "effects": [], "color": null, "tags": [] },
        { "id": "Cornmeal", "description": "Used for baking. Seems to be powdery.", "recipes": [], "effects": ["Food (0.5u/s): Adds 0.1u nutriment"], "color": "tan", "tags": [] },
        { "id": "Flour", "description": "Used for baking. Seems to be powdery.", "recipes": [], "effects": ["Food (0.5u/s): Adds sugar/nutriment"], "color": "white", "tags": [] },
        { "id": "Frost Oil", "description": "Ingredient found in chilly peppers. Seems to be oily.", "recipes": [], "effects": ["Poison (0.5u/s): Removes heat; Deals cold (>5u)"], "color": "skyblue", "tags": [] },
        { "id": "Horseradish sauce", "description": "Smelly horseradish sauce. Seems to be overpowering.", "recipes": [], "effects": [], "color": null, "tags": [] },
        { "id": "Hotsauce", "description": "Burns so good. Seems to be spicy.", "recipes": [], "effects": [], "color": "red", "tags": [] },
        { "id": "Ketchunaise", "description": "So-called Russian dressing. Seems to be saucey.", "recipes": [], "effects": [], "color": "#fba399", "tags": [] },
        { "id": "Ketchup", "description": "Made from pureed tomatoes and flavored with spices. Seems to be tangy.", "recipes": [], "effects": [], "color": "red", "tags": [] },
        { "id": "Laughin' syrup", "description": "The product of juicing Laughin' Peas. Seems to be funny.", "recipes": [], "effects": [], "color": null, "tags": [] },
        { "id": "Mayonnaise", "description": "Creamy sauce, made from oil, egg, and some (edible) acid. Seems to be thick.", "recipes": [], "effects": [], "color": "#f9f5e5", "tags": [] },
        { "id": "Mustard", "description": "Basic yellow mustard. Seems to be thick.", "recipes": [], "effects": [], "color": "#ffdb58", "tags": [] },
        { "id": "Nutriment", "description": "All the vitamins, minerals, and carbohydrates the body needs. Seems to be opaque.", "recipes": [], "effects": ["Food (0.5u/s): Satiates hunger averagely"], "color": "#24591F", "tags": [] },
        { "id": "Oats", "description": "Used for a variety of tasty purposes. Seems to be coarse.", "recipes": [], "effects": ["Food (0.5u/s): Adds sugar/nutriment"], "color": null, "tags": [] },
        { "id": "Oil", "description": "Used by chefs to cook. Seems to be oily.", "recipes": ["Welding fuel [1], Hydrogen [1], Carbon [1] -> Oil [3]"], "effects": [], "color": "#b67823", "tags": [] },
        { "id": "Olive oil", "description": "Viscous and fragrant. Seems to be oily.", "recipes": [], "effects": ["Food (0.5u/s): Adds 0.75u nutriment"], "color": "olive", "tags": [] },
        { "id": "Protein", "description": "Found in certain meals, good for bodily health. Seems to be clumpy.", "recipes": ["Uncooked animal proteins [0.5] (Heat > 347K) -> Protein [0.5]"], "effects": ["Food (0.5u/s): 50% chance heal brute"], "color": "#FFFFE5", "tags": [] },
        { "id": "Pumpkin flesh", "description": "The mushy, sweet remains of a pumpkin. Seems to be ???.", "recipes": [], "effects": ["Food (0.5u/s): Satiates hunger averagely"], "color": null, "tags": [] },
        { "id": "Raw egg", "description": "Used for baking. Seems to be mucus-like.", "recipes": [], "effects": ["Food (0.5u/s): Adds 0.5u uncooked animal proteins"], "color": "white", "tags": [] },
        { "id": "Rice", "description": "Hard, small white grains. Seems to be chewy.", "recipes": [], "effects": ["Food (0.5u/s): Adds sugar/nutriment"], "color": null, "tags": [] },
        { "id": "Soy sauce", "description": "A salty soy-based flavoring. Seems to be salty.", "recipes": [], "effects": ["Food (0.5u/s): Satiates hunger/thirst 0.167x"], "color": "saddlebrown", "tags": [] },
        { "id": "Sugar", "description": "Tasty spacey sugar! Seems to be sweet.", "recipes": ["Blood [20] -> Sugar [2]"], "effects": ["Food (0.5u/s): Satiates hunger 0.333x"], "color": "white", "tags": [] },
        { "id": "Tea powder", "description": "Finely ground tea leaves. Seems to be powdery.", "recipes": [], "effects": ["Food (0.5u/s): Adds 0.1u nutriment"], "color": "#7F8400", "tags": [] },
        { "id": "Uncooked animal proteins", "description": "Risky for the stomachs of softer lifeforms. Seems to be clumpy.", "recipes": [], "effects": ["Food (0.5u/s): 10% vomit/poison (non-Animal/Vox); Adds protein"], "color": "#FFFFE5", "tags": [] },
        { "id": "Universal enzyme", "description": "Used in cooking various dishes. Seems to be chalky.", "recipes": [], "effects": [], "color": "#009900", "tags": [] },
        { "id": "Vinaigrette", "description": "A basic salad dressing made with oil, vinegar and seasoning. Seems to be sour.", "recipes": [], "effects": [], "color": "#efdaae", "tags": [] },
        { "id": "Vinegar", "description": "Often used to flavor food. Seems to be sour.", "recipes": [], "effects": ["Food (0.5u/s): Adds water/vitamin; Chance vomit (>6u)"], "color": "tan", "tags": [] },
        { "id": "Vitamin", "description": "Found in healthy, complete meals. Seems to be chalky.", "recipes": [], "effects": ["Food (0.5u/s): 50% chance heal brute/burn"], "color": "#D3D3D3", "tags": [] }
      ]
    },
    {
      "category": "Nourishment - Drink",
      "reagents": [
        { "id": "Absinthe", "description": "A anise-flavoured spirit. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.3u ethanol"], "color": "#33EE00", "tags": [] },
        { "id": "Acidspit", "description": "A drink for the daring. Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#365000", "tags": [] },
        { "id": "Ale", "description": "A dark alchoholic beverage. Seems to be bubbly.", "recipes": [], "effects": [], "color": "#663100", "tags": [] },
        { "id": "Alien brain hemorrhage", "description": "You might want to get that checked out at Med. Seems to be creamy.", "recipes": [], "effects": [], "color": "#FFFDD0", "tags": [] },
        { "id": "Allies cocktail", "description": "A drink made from your allies. Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#00664d", "tags": [] },
        { "id": "Aloe", "description": "So very, very, very good. Seems to be aromatic.", "recipes": [], "effects": [], "color": "#192c00", "tags": [] },
        { "id": "Amasec", "description": "Official drink of the Gun Club! Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#124da7", "tags": [] },
        { "id": "Andalusia", "description": "A nice, strangely named drink. Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#665700", "tags": [] },
        { "id": "Antifreeze", "description": "Ultimate refreshment. Seems to be translucent.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol"], "color": "#ff7d63", "tags": [] },
        { "id": "Apple juice", "description": "It's a little piece of Eden. Seems to be crisp.", "recipes": [], "effects": [], "color": "#FDAD01", "tags": [] },
        { "id": "Arnold Palmer", "description": "Now watch this drive. Seems to be sweet.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 1.333x; Adds theobromine"], "color": "#d8cc5d", "tags": [] },
        { "id": "Atomic Bomb", "description": "Nuclear proliferation never tasted so good. Seems to be cloudy.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol, 0.05u uranium"], "color": "#666300", "tags": [] },
        { "id": "B-52", "description": "Coffee, irish cream, and cognac. Seems to be bubbly.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol"], "color": "#664300", "tags": [] },
        { "id": "Bacchus's blessing", "description": "You didn't think it was possible for a liquid to be so utterly revolting. Seems to be unidentifiable.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.45u ethanol"], "color": "#331303", "tags": [] },
        { "id": "Bahama Mama", "description": "Tropical cocktail. Seems to be tropical.", "recipes": [], "effects": [], "color": "#FF7F3B", "tags": [] },
        { "id": "Banana Honk", "description": "A drink from Clown Heaven. Seems to be creamy.", "recipes": [], "effects": [], "color": "#ffff91", "tags": [] },
        { "id": "Banana juice", "description": "The raw essence of a banana. Seems to be crisp.", "recipes": [], "effects": [], "color": "#FFE777", "tags": [] },
        { "id": "Barefoot", "description": "A cassis milkshake. Seems to be creamy.", "recipes": [], "effects": [], "color": "#ff66cc", "tags": [] },
        { "id": "Beepsky smash", "description": "Deny drinking this and prepare for THE LAW. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol"], "color": "#664300", "tags": [] },
        { "id": "Beer", "description": "An alcoholic beverage made from malted grains. Seems to be bubbly.", "recipes": [], "effects": [], "color": "#e3e77b", "tags": [] },
        { "id": "Berry juice", "description": "A delicious blend of berries. Seems to be sweet.", "recipes": [], "effects": [], "color": "#660099", "tags": [] },
        { "id": "Black Russian", "description": "For the lactose-intolerant. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#360000", "tags": [] },
        { "id": "Bloody Mary", "description": "A strange yet pleasurable mixture. Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#df6a50", "tags": [] },
        { "id": "Blue Curaçao", "description": "Exotically blue, fruity drink. Seems to be aromatic.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.1u ethanol"], "color": "#0099FF", "tags": [] },
        { "id": "Blue Hawaiian", "description": "Aloha! Does that mean hello or goodbye? Seems to be tropical.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#47687b", "tags": [] },
        { "id": "Blue pumpkin juice", "description": "The juice of a blue pumpkin. Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#00BFFF", "tags": [] },
        { "id": "Booger", "description": "Ewww... Seems to be slimy.", "recipes": [], "effects": [], "color": "#99ff00", "tags": [] },
        { "id": "Brave Bull", "description": "It's just as effective as Dutch-Courage! Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#664300", "tags": [] },
        { "id": "Bronx", "description": "The orange-flavoured cousin of the Manhattan. Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#d68829", "tags": [] },
        { "id": "Budget insuls", "description": "A tider's preferred drink. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds ethanol/theobromine"], "color": "#dede73", "tags": [] },
        { "id": "Bungo juice", "description": "The juice of a bungo fruit. Seems to be tart.", "recipes": [], "effects": [], "color": "#F9E43D", "tags": [] },
        { "id": "Cafe latte", "description": "A nice, strong and tasty beverage. Seems to be creamy.", "recipes": [], "effects": ["Drink (0.5u/s): Removes drowsiness"], "color": "#664300", "tags": [] },
        { "id": "Caipirinha", "description": "The São Paulo special. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.1u ethanol"], "color": "#E6EE9C", "tags": [] },
        { "id": "Carrot juice", "description": "It's like a carrot, but less crunchy. Seems to be crisp.", "recipes": [], "effects": ["Drink (0.5u/s): Adds oculine/nutriment"], "color": "#FF8820", "tags": [] },
        { "id": "Champagne", "description": "A premium sparkling wine. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.3u ethanol"], "color": "#FCFCEE", "tags": [] },
        { "id": "Changeling Sting", "description": "You take a tiny sip and feel a burning sensation... Seems to be fizzy.", "recipes": [], "effects": [], "color": "#2E6671", "tags": [] },
        { "id": "Cherry juice", "description": "Tasty cherry juice. Seems to be sweet.", "recipes": [], "effects": [], "color": "#84031a", "tags": [] },
        { "id": "Classic martini", "description": "Vermouth with Gin. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol"], "color": "#664300", "tags": [] },
        { "id": "Coconut rum", "description": "Rum with coconut. Seems to be milky.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#cccbc8", "tags": [] },
        { "id": "Coconut water", "description": "A favorite of survivors. Seems to be milky.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 1.333x"], "color": "#f4eadb", "tags": [] },
        { "id": "Coffee", "description": "A drink made from brewed coffee beans. Seems to be aromatic.", "recipes": [], "effects": ["Drink (0.5u/s): Removes drowsiness, Adds theobromine"], "color": "#664300", "tags": [] },
        { "id": "Coffee liqueur", "description": "Liquor flavoured with cold brewed coffee. Seems to be cloudy.", "recipes": [], "effects": [], "color": "#664300", "tags": [] },
        { "id": "Cogchamp", "description": "Not even Ratvar's Four Generals could withstand this! Seems to be ground brass.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol, Ratvarian language"], "color": "#B5A642", "tags": [] },
        { "id": "Cognac", "description": "A sweet and strongly alcoholic drink. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#AB3C05", "tags": [] },
        { "id": "Cola", "description": "A sweet, carbonated soft drink. Seems to be fizzy.", "recipes": [], "effects": ["Drink (0.5u/s): Removes drowsiness"], "color": "#6c2828", "tags": [] },
        { "id": "Cosmopolitan", "description": "Even in the worst situations, nothing beats a fresh cosmopolitan. Seems to be citric.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol"], "color": "#f73030", "tags": [] },
        { "id": "Cream", "description": "The fatty, still liquid part of milk. Seems to be creamy.", "recipes": [], "effects": [], "color": "#DFD7AF", "tags": [] },
        { "id": "Cream of coconut", "description": "Sweet, syrupy version of coconut cream. Seems to be syrupy.", "recipes": [], "effects": [], "color": "#FFEABF", "tags": [] },
        { "id": "Crush depth", "description": "A stygian drink. Seems to be cloudy.", "recipes": [], "effects": [], "color": "#0a0a33", "tags": [] },
        { "id": "Cuba libre", "description": "Rum, mixed with cola. Seems to be bubbly.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.07u ethanol"], "color": "#3E1B00", "tags": [] },
        { "id": "Daiquiri", "description": "A classic rum cocktail. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.1u ethanol"], "color": "#DAC865", "tags": [] },
        { "id": "Dark & stormy", "description": "You can almost hear the thunder. Seems to be bubbly.", "recipes": [], "effects": [], "color": "#cf7f17", "tags": [] },
        { "id": "Deadrum", "description": "Distilled alcoholic drink made from saltwater. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#664300", "tags": [] },
        { "id": "Death in the afternoon", "description": "Pour one jigger absinthe into a Champagne glass. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.3u ethanol"], "color": "#57A87D", "tags": [] },
        { "id": "Demon's Blood", "description": "AHHHH!!!! Seems to be ferrous.", "recipes": [], "effects": [], "color": "#a70000", "tags": [] },
        { "id": "Devil's Kiss", "description": "Creepy time! Seems to be ferrous.", "recipes": [], "effects": [], "color": "#ff0033", "tags": [] },
        { "id": "Dr. Gibb", "description": "A delicious blend of 42 different flavours. Seems to be fizzy.", "recipes": [], "effects": [], "color": "#102000", "tags": [] },
        { "id": "Driest martini", "description": "Only for the experienced. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol"], "color": "#2E6671", "tags": [] },
        { "id": "Dry ramen", "description": "Dry noodles and salt. Seems to be wormy.", "recipes": [], "effects": [], "color": "#664300", "tags": [] },
        { "id": "Eggnog", "description": "Not enough egg. Seems to be creamy.", "recipes": [], "effects": [], "color": "#e6d6bc", "tags": [] },
        { "id": "Electric shark", "description": "Fun Shark fact. Seems to be tropical.", "recipes": [], "effects": [], "color": "#3097cf", "tags": [] },
        { "id": "Empress 75", "description": "A more refined take on the mimosa. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.3u ethanol"], "color": "#900296", "tags": [] },
        { "id": "Erika surprise", "description": "The surprise is, it's green! Seems to be cloudy.", "recipes": [], "effects": [], "color": "#67bc50", "tags": [] },
        { "id": "Espresso martini", "description": "To wake you up and wind you down. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#170a0c", "tags": [] },
        { "id": "Ethanol", "description": "A simple alcohol. Seems to be strong smelling.", "recipes": ["Welding fuel [10] -> Ethanol [5]"], "effects": ["Alcohol (0.5u/s): Poison/Drunkenness"], "color": "#b05b3c", "tags": [] },
        { "id": "Fourteen Loko", "description": "A highly processed liquid substance. Seems to be fizzy.", "recipes": [], "effects": ["Drink (0.5u/s): Adds theobromine"], "color": "#deb928", "tags": ["Toxin"] },
        { "id": "Gildlager", "description": "100 proof cinnamon schnapps. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#FFFF91", "tags": [] },
        { "id": "Gin", "description": "A distilled alcoholic drink. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#664300", "tags": [] },
        { "id": "Gin and tonic", "description": "An all time classic. Seems to be fizzy.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.07u ethanol"], "color": "#004166", "tags": [] },
        { "id": "Gin fizz", "description": "Refreshingly lemony. Seems to be fizzy.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.07u ethanol"], "color": "#664300", "tags": [] },
        { "id": "Goats milk", "description": "An opaque white liquid produced by a goat. Seems to be ???.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 1.333x"], "color": "#CCCCCC", "tags": [] },
        { "id": "Grape juice", "description": "Freshly squeezed juice from red grapes. Seems to be crisp.", "recipes": [], "effects": [], "color": "#512284", "tags": [] },
        { "id": "Grape soda", "description": "It's Graaaaaape! Seems to be fizzy.", "recipes": [], "effects": [], "color": "#ae94a6", "tags": [] },
        { "id": "Green tea", "description": "Tasty green tea. Seems to be aromatic.", "recipes": [], "effects": [], "color": "#7EB626", "tags": [] },
        { "id": "Grenade Penguin", "description": "What's black and white and red all over? Seems to be bubbly.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol"], "color": "#2E6671", "tags": [] },
        { "id": "Grenadine", "description": "Not cherry flavored! Seems to be dark-red.", "recipes": [], "effects": [], "color": "#EA1D26", "tags": [] },
        { "id": "Grog", "description": "Watered-down rum. Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#e3e77b", "tags": [] },
        { "id": "Hippie's Delight", "description": "You just don't get it maaaan. Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#6eaa0c", "tags": [] },
        { "id": "Hooch", "description": "Either someone's failure at cocktail making or attempt in alchohol production. Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#664e00", "tags": [] },
        { "id": "Hot cocoa", "description": "Smells like the holidays! Seems to be aromatic.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.05u theobromine"], "color": "#664300", "tags": [] },
        { "id": "Hot ramen", "description": "Hot noodles. Seems to be wormy.", "recipes": [], "effects": [], "color": "#664300", "tags": [] },
        { "id": "Ice", "description": "Frozen water. Seems to be frosty.", "recipes": ["Fresium [1], Water [1] -> Ice [5]"], "effects": [], "color": "#bed8e6", "tags": [] },
        { "id": "Ice cream", "description": "It was either this or the microwave. Seems to be creamy.", "recipes": [], "effects": [], "color": "#fffbd6", "tags": [] },
        { "id": "Iced beer", "description": "A beer which is so cold the air around it freezes. Seems to be bubbly.", "recipes": [], "effects": [], "color": "#664300", "tags": [] },
        { "id": "Iced coffee", "description": "Coffee and ice. Seems to be aromatic.", "recipes": [], "effects": ["Drink (0.5u/s): Adds theobromine, Removes drowsiness"], "color": "#102838", "tags": [] },
        { "id": "Iced green tea", "description": "Cold green tea. Seems to be aromatic.", "recipes": [], "effects": [], "color": "#5B821B", "tags": [] },
        { "id": "Iced tea", "description": "No relation to a certain rap artist/actor. Seems to be aromatic.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.05u theobromine"], "color": "#6C3916", "tags": [] },
        { "id": "Irish bool", "description": "Like a bool in a Ireland shop. Seems to be bubbly.", "recipes": [], "effects": ["Drink (0.5u/s): Adds ethanol/theobromine, Removes drowsiness"], "color": "#71672e99", "tags": [] },
        { "id": "Irish coffee", "description": "Coffee served with irish cream. Seems to be cloudy.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol"], "color": "#664300", "tags": [] },
        { "id": "Irish cream", "description": "Whiskey-imbued cream. Seems to be creamy.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#664300", "tags": [] },
        { "id": "Jack rose", "description": "Excessively Red. Seems to be tart.", "recipes": [], "effects": [], "color": "#f53b3b", "tags": [] },
        { "id": "Jungle bird", "description": "Despite the name, it’s not exceptionally popular among Voxes. Seems to be tropical.", "recipes": [], "effects": [], "color": "#f27c3d", "tags": [] },
        { "id": "Kalimotxo", "description": "A high-class Cuba Libre. Seems to be bubbly.", "recipes": [], "effects": [], "color": "#360606", "tags": [] },
        { "id": "Kira special", "description": "Long live the guy who everyone had mistaken for a girl. Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#CCCC99", "tags": [] },
        { "id": "Lemon juice", "description": "This juice is VERY sour. Seems to be citric.", "recipes": [], "effects": [], "color": "#fff690", "tags": [] },
        { "id": "Lemonade", "description": "Drink using lemon juice. Seems to be tart.", "recipes": [], "effects": [], "color": "#FFFF00", "tags": [] },
        { "id": "Lime juice", "description": "The sweet-sour juice of limes. Seems to be citric.", "recipes": [], "effects": [], "color": "#99bb43", "tags": [] },
        { "id": "Long Island iced tea", "description": "The liquor cabinet, brought together. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol"], "color": "#664300", "tags": [] },
        { "id": "Manhattan", "description": "The Detective's undercover drink of choice. Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#664300", "tags": [] },
        { "id": "Manhattan Project", "description": "A scientist's drink of choice. Seems to be overpowering.", "recipes": [], "effects": [], "color": "#664300", "tags": [] },
        { "id": "Manly Dorf", "description": "Beer and Ale. Seems to be fizzy and creamy.", "recipes": [], "effects": [], "color": "#664300", "tags": [] },
        { "id": "Margarita", "description": "On the rocks with salt on the rim. Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#8CFF8C", "tags": [] },
        { "id": "Mayojito", "description": "An affront to god and man. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol, chance vomit"], "color": "#6FBE44", "tags": [] },
        { "id": "Mead", "description": "A Viking's drink. Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#664300", "tags": [] },
        { "id": "Melon liquor", "description": "A relatively sweet and fruity 46 proof liquor. Seems to be sweet.", "recipes": [], "effects": [], "color": "#00FF33", "tags": [] },
        { "id": "Milk", "description": "An opaque white liquid produced by mammals. Seems to be opaque.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 1.333x"], "color": "#DFDFDF", "tags": [] },
        { "id": "Mimeosa", "description": "It has an orange tang so sour. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Inability to speak, Adds ethanol"], "color": "#939393", "tags": [] },
        { "id": "Mimosa", "description": "Perfect for a lively brunch. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.07u ethanol"], "color": "#FFCA48", "tags": [] },
        { "id": "Mojito", "description": "If it's good enough for Spesscuba. Seems to be refreshing.", "recipes": [], "effects": [], "color": "#3ea99888", "tags": [] },
        { "id": "Monkey business", "description": "You’ve got to wonder how the monkeys feel about this. Seems to be tart.", "recipes": [], "effects": [], "color": "#d6b929", "tags": [] },
        { "id": "Moonshine", "description": "Artisanal homemade liquor. Seems to be pungent.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.25u ethanol"], "color": "#d1d7d155", "tags": [] },
        { "id": "Mopwata", "description": "Dirty, stagnant mop water. Seems to be murky.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 0.2x"], "color": "#59502b", "tags": [] },
        { "id": "Moscow mule", "description": "A surpsingly strong and refreshing mixed drink. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds ethanol/copper"], "color": "#CECBAD", "tags": [] },
        { "id": "NeoTheology Cahors wine", "description": "Fortified dessert wine. Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#7E4043", "tags": [] },
        { "id": "Neurotoxin", "description": "A strong neurotoxin. Seems to be pungent.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.25u ethanol"], "color": "#2E2E61", "tags": [] },
        { "id": "Nothing", "description": "Absolutely nothing. Seems to be nothing.", "recipes": [], "effects": [], "color": "#ffffff", "tags": [] },
        { "id": "Nuclear cola", "description": "Cola, cola never changes. Seems to be fizzy.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 2x, Removes drowsiness"], "color": "#100800", "tags": ["Toxin"] },
        { "id": "Oat milk", "description": "Surprisingly tasty. Seems to be refreshing.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 1.333x"], "color": "#DEDACD", "tags": [] },
        { "id": "Orange juice", "description": "Both delicious AND rich in Vitamin C. Seems to be citric.", "recipes": [], "effects": [], "color": "#E78108", "tags": [] },
        { "id": "Painkiller", "description": "A cure for what ails you. Seems to be refreshing.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#e6cb47", "tags": [] },
        { "id": "Pan-Galactic Gargle Blaster", "description": "Whoah, this stuff looks volatile! Seems to be volatile.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#9cc8b4", "tags": [] },
        { "id": "Patrón", "description": "Tequila with silver in it. Seems to be metallic.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#585840", "tags": [] },
        { "id": "Pilk", "description": "A sickening mixture of milk and cola. Seems to be creamy.", "recipes": [], "effects": [], "color": "#e7c69f", "tags": [] },
        { "id": "Pineapple juice", "description": "The delicious juice of a pineapple. Seems to be tropical.", "recipes": [], "effects": [], "color": "yellow", "tags": [] },
        { "id": "Piña Colada", "description": "For getting lost in the rain. Seems to be tropical.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#e8dba4", "tags": [] },
        { "id": "Poison berry juice", "description": "A surprisingly tasty juice blended from deadly berries. Seems to be sickly.", "recipes": [], "effects": [], "color": "#6600CC", "tags": [] },
        { "id": "Poison wine", "description": "Is this even wine? Toxic! Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.05u ethanol"], "color": "#990066", "tags": [] },
        { "id": "Posca", "description": "Poor warriors' drink. Seems to be sour.", "recipes": [], "effects": [], "color": "#B3B599", "tags": [] },
        { "id": "Potato juice", "description": "Juice of the potato. Seems to be starchy.", "recipes": [], "effects": [], "color": "#302000", "tags": [] },
        { "id": "PWR Game", "description": "The only drink with the PWR that true gamers crave. Seems to be fizzy.", "recipes": [], "effects": [], "color": "#9385bf", "tags": [] },
        { "id": "Radler", "description": "A simple but staple classic. Seems to be citric.", "recipes": [], "effects": [], "color": "#edff2b", "tags": [] },
        { "id": "Red Bool", "description": "A dose of energy! Seems to be fizzy.", "recipes": [], "effects": ["Drink (0.5u/s): Adds theobromine, Removes drowsiness"], "color": "#ffffbf", "tags": [] },
        { "id": "Red mead", "description": "The true Viking's drink! Seems to be ferrous.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#bc5550", "tags": [] },
        { "id": "Rewriter", "description": "The secret of the sanctuary of the Librarian... Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#485000", "tags": [] },
        { "id": "Root beer", "description": "A very sweet, carbonated drink. Seems to be fizzy.", "recipes": [], "effects": [], "color": "#381c07", "tags": [] },
        { "id": "Root beer float", "description": "Root beer, but now with ice cream on top. Seems to be fizzy and creamy.", "recipes": [], "effects": [], "color": "#4f361f", "tags": [] },
        { "id": "Roy Rogers", "description": "Solid proof that there IS something known as too sweet. Seems to be sweet.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 1.333x"], "color": "#262019", "tags": [] },
        { "id": "Rubberneck", "description": "A popular drink amongst those adhering to an all synthetic diet. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds ethanol/theobromine"], "color": "#f0d74a", "tags": [] },
        { "id": "Rum", "description": "Distilled alcoholic drink made from sugarcane byproducts. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#f09f42", "tags": [] },
        { "id": "Sake", "description": "Alcoholic beverage made by fermenting rice. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#DDDDDD", "tags": [] },
        { "id": "Sbiten", "description": "A spicy Vodka! Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#004166", "tags": [] },
        { "id": "Screwdriver", "description": "Vodka, mixed with plain ol' orange juice. Seems to be citric.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.07u ethanol"], "color": "#A68310", "tags": [] },
        { "id": "Shambler's Juice", "description": "~Shake me up some of that Shambler's Juice!~ Seems to be fizzy.", "recipes": [], "effects": [], "color": "#66538F", "tags": [] },
        { "id": "Shirley Temple", "description": "A favorite amongst younger members of the crew. Seems to be fizzy.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 1.333x"], "color": "#af2221", "tags": [] },
        { "id": "Silencer", "description": "A drink from Mime Heaven. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Inability to speak"], "color": "#878787", "tags": [] },
        { "id": "Singulo", "description": "A blue-space beverage! Seems to be strong smelling.", "recipes": [], "effects": [], "color": "#3b0c0c", "tags": [] },
        { "id": "Smite", "description": "Tangy lime and lemon soda. Seems to be fizzy.", "recipes": [], "effects": [], "color": "#878F00", "tags": [] },
        { "id": "Smite Cranberry", "description": "Tart cranberry, Christmas, and a hint of lemon and lime. Seems to be fizzy.", "recipes": [], "effects": [], "color": "#803C53", "tags": [] },
        { "id": "Snow White", "description": "A cold refreshment. Seems to be bubbly.", "recipes": [], "effects": [], "color": "#FFFFFF", "tags": [] },
        { "id": "Soda water", "description": "A container of club soda. Seems to be fizzy.", "recipes": [], "effects": [], "color": "#619494", "tags": [] },
        { "id": "Sol Dry", "description": "Sweet ginger soda from outer space! Seems to be fizzy.", "recipes": [], "effects": [], "color": "#ccb87e", "tags": [] },
        { "id": "Soy latte", "description": "A coffee drink made with espresso and steamed soy milk. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Removes drowsiness"], "color": "#664300", "tags": [] },
        { "id": "Soy milk", "description": "Consumers favorite. Seems to be refreshing.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 1.333x"], "color": "#D2C29D", "tags": [] },
        { "id": "Space Cola", "description": "A sweet, carbonated soft drink. Seems to be fizzy.", "recipes": [], "effects": ["Drink (0.5u/s): Removes drowsiness"], "color": "#6c2828", "tags": [] },
        { "id": "Space Solar Wind", "description": "Blows right through you like a solar wind. Seems to be fizzy.", "recipes": [], "effects": [], "color": "#a6fa5a", "tags": [] },
        { "id": "Space-Up", "description": "Tastes like a hull breach in your mouth. Seems to be fizzy.", "recipes": [], "effects": [], "color": "#e3e3e37d", "tags": [] },
        { "id": "Spoiled milk", "description": "This milk has gone rancid. Seems to be putrid.", "recipes": [], "effects": [], "color": "#faffba", "tags": [] },
        { "id": "Starkist", "description": "A sweet, orange flavored soft drink. Seems to be fizzy.", "recipes": [], "effects": [], "color": "#9F3400", "tags": [] },
        { "id": "Sui dream", "description": "Comprised of: White soda, blue Curaçao, melon liquor. Seems to be sweet.", "recipes": [], "effects": [], "color": "#00A86B", "tags": [] },
        { "id": "Syndicate bomb", "description": "Somebody set us up the bomb! Seems to be opaque.", "recipes": [], "effects": [], "color": "#e3e77b", "tags": [] },
        { "id": "Tea", "description": "A drink made by boiling leaves of the tea tree. Seems to be aromatic.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.05u theobromine"], "color": "#8a5a3a", "tags": [] },
        { "id": "Tequila", "description": "A strong and mildly flavoured, mexican produced spirit. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#d7d1d155", "tags": [] },
        { "id": "Tequila sunrise", "description": "Tequila and orange juice. Seems to be citric.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol"], "color": "#FFE48C", "tags": [] },
        { "id": "The Doctor's Delight", "description": "A gulp a day keeps the MediBot away. Seems to be soothing.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.05u ethanol; Heals burn/brute/toxin/airloss"], "color": "#FF8CFF", "tags": [] },
        { "id": "The Martinez", "description": "The edgerunner legend. Seems to be vibrant.", "recipes": [], "effects": [], "color": "#75b1f0", "tags": [] },
        { "id": "The sun also rises", "description": "A strong cocktail mixed into a murky blend. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.3u ethanol"], "color": "#DCE2DE", "tags": [] },
        { "id": "Three Mile Island iced tea", "description": "Made for a woman, strong enough for a man. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds ethanol/uranium"], "color": "#666340", "tags": [] },
        { "id": "Tomato juice", "description": "Tomatoes made into juice. Seems to be saucey.", "recipes": [], "effects": [], "color": "#731008", "tags": [] },
        { "id": "Tonic water", "description": "It tastes strange but at least the quinine keeps the Space Malaria at bay. Seems to be fizzy.", "recipes": [], "effects": [], "color": "#0064C8", "tags": [] },
        { "id": "Tortuga", "description": "Perfect for pirates who’ve been selected as the designated driver. Seems to be sweet.", "recipes": [], "effects": [], "color": "#1c8c40", "tags": [] },
        { "id": "Toxins special", "description": "This thing is ON FIRE! CALL THE DAMN SHUTTLE! Seems to be pungent.", "recipes": [], "effects": [], "color": "#665c00", "tags": [] },
        { "id": "Vampiro", "description": "Popular in Mexico and Transylvania. Seems to be spicy.", "recipes": [], "effects": [], "color": "#b51b1b", "tags": [] },
        { "id": "Vermouth", "description": "Aromatized, fortified white wine. Seems to be aromatic.", "recipes": [], "effects": [], "color": "#91FF91", "tags": [] },
        { "id": "Vodka", "description": "Clear distilled alcoholic beverage. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#d1d1d155", "tags": [] },
        { "id": "Vodka martini", "description": "Vodka instead of Gin. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol"], "color": "#004666", "tags": [] },
        { "id": "Vodka red bool", "description": "Because heart failure and liver failure go hand in hand. Seems to be bubbly.", "recipes": [], "effects": ["Drink (0.5u/s): Adds ethanol/theobromine, Removes drowsiness"], "color": "#c4c27655", "tags": [] },
        { "id": "Vodka tonic", "description": "For when a gin and tonic isn't russian enough. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.07u ethanol"], "color": "#0064C8", "tags": [] },
        { "id": "Water", "description": "A colorless liquid that humans need in order to survive. Seems to be translucent.", "recipes": ["Blood [20] -> Water [11], Iron [0.5], Sugar [2], Carbon dioxide [3], Protein [4]"], "effects": ["Drink (0.5u/s): Satiates thirst 1.333x", "Gas (0.5u/s): Deals 3 heat (Slime)"], "color": "#75b1f0", "tags": [] },
        { "id": "Watermelon wakeup", "description": "If you want to be awake, this will do it... Also sweet. Seems to be sweet.", "recipes": [], "effects": ["Drink (0.5u/s): Adds ethanol/theobromine, Removes drowsiness"], "color": "#d49dca", "tags": [] },
        { "id": "Watermelon juice", "description": "The delicious juice of a watermelon. Seems to be sweet.", "recipes": [], "effects": [], "color": "#EF3520", "tags": [] },
        { "id": "Whiskey", "description": "A type of distilled alcoholic beverage made from fermented grain mash. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#ee7732", "tags": [] },
        { "id": "Whiskey cola", "description": "Whiskey, mixed with cola. Surprisingly refreshing. Seems to be bubbly.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.07u ethanol"], "color": "#3E1B00", "tags": [] },
        { "id": "Whiskey soda", "description": "For the more refined griffon. Seems to be fizzy.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.07u ethanol"], "color": "#533600", "tags": [] },
        { "id": "Whiskey sour", "description": "What's the secret ingredient? Eggs. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.2u ethanol"], "color": "#8B7941", "tags": [] },
        { "id": "White Gilgamesh", "description": "A sickening mixture of milk and beer. Seems to be creamy.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol"], "color": "#e5d27e", "tags": [] },
        { "id": "White Russian", "description": "That's just, like, your opinion, man... Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.15u ethanol"], "color": "#A68340", "tags": [] },
        { "id": "Wine", "description": "A premium alcoholic beverage made from distilled grape juice. Seems to be translucent.", "recipes": ["Blood [1] -> Wine [1]"], "effects": [], "color": "#7E4043", "tags": [] },
        { "id": "Xeno Basher", "description": "The perfect drink before an expedition. Seems to be fizzy and creamy.", "recipes": [], "effects": ["Drink (0.5u/s): Adds ethanol/theobromine, Removes drowsiness"], "color": "#4d6600", "tags": [] },
        { "id": "Zombie", "description": "It gets in your head. Your he-eyeh-ead. Seems to be strong smelling.", "recipes": [], "effects": ["Drink (0.5u/s): Adds 0.25u ethanol"], "color": "#d17844", "tags": [] }
      ]
    },
    {
      "category": "Botany",
      "reagents": [
        { "id": "Ammonia", "description": "An effective fertilizer. Seems to be pungent.", "recipes": ["Hydrogen [3], Nitrogen [1] -> Ammonia [4]"], "effects": ["Plants (0.5u/s): Adjusts nutrition +1, health +0.5"], "color": "#77b58e", "tags": ["Toxin"] },
        { "id": "Diethylamine", "description": "A very potent fertilizer. Seems to be strong smelling.", "recipes": ["Ammonia [1], Ethanol [1] -> Diethylamine [2]"], "effects": ["Plants (0.5u/s): Adjusts nutrition/health +0.1, pests -1, age +1"], "color": "#a1000b", "tags": ["Toxin"] },
        { "id": "EZ nutrient", "description": "Give your plants some of those EZ nutrients! Seems to be thick.", "recipes": ["Nitrogen [1], Phosphorus [1], Potassium [1] -> EZ nutrient [3]"], "effects": ["Plants (0.5u/s): Adjusts nutrition +2"], "color": "#664330", "tags": [] },
        { "id": "Left-4-zed", "description": "A cocktail of mutagenic compounds. Seems to be heterogeneous.", "recipes": ["EZ nutrient [1], Radium [1] -> Left-4-zed [1]"], "effects": ["Plants (0.5u/s): Adjusts nutrition +1, health -0.5, mutation +0.4"], "color": "#5b406c", "tags": ["Medicine"] },
        { "id": "Pest killer", "description": "A mixture that targets pests. Seems to be bubbling.", "recipes": [], "effects": ["Plants (0.5u/s): Adjusts toxins +4, pests -6"], "color": "#9e9886", "tags": [] },
        { "id": "Plant-B-gone", "description": "A harmful toxic mixture to kill plantlife. Seems to be bubbling.", "recipes": ["Toxin [1], Water [4] -> Plant-B-gone [5]"], "effects": ["Plants (0.5u/s): Adjusts toxins +6, weeds -8, health -20, mutation +0.1"], "color": "#49002E", "tags": ["Medicine"] },
        { "id": "Robust harvest", "description": "A highly effective fertilizer. Seems to be robust.", "recipes": ["EZ nutrient [1], Sulfuric acid [1] -> Robust harvest [1]"], "effects": ["Plants (0.5u/s): Adjusts nutrition +0.05, weeds/pests +1, potency +3"], "color": "#3e901c", "tags": ["Medicine", "Toxin"] },
        { "id": "Sedin", "description": "A modified version of diethylamine. Seems to be sickly.", "recipes": ["Cryoxadone [1], Robust harvest [3], Diethylamine [3] -> Sedin [1]"], "effects": ["Plants (0.5u/s): Adjusts health -2, restores seeds, potency -3"], "color": "#3CB371", "tags": [] },
        { "id": "Weed killer", "description": "A mixture that targets weeds. Seems to be bubbling.", "recipes": [], "effects": ["Plants (0.5u/s): Adjusts toxins +4, weeds -6"], "color": "#968395", "tags": [] }
      ]
    },
    {
      "category": "Miscellaneous - Biological",
      "reagents": [
        { "id": "Anaerobic blood", "description": "Nothing else in the entire galaxy smells quite so appalling. Seems to be pungent.", "recipes": [], "effects": [], "color": "#7a8bf2", "tags": [] },
        { "id": "Blood", "description": "I hope this is ketchup. Seems to be ferrous.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 0.333x (non-Human)"], "color": "#800000", "tags": [] },
        { "id": "Blue blood", "description": "Contains copper as opposed to iron. Seems to be metallic.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 0.333x (non-Human)"], "color": "#162581", "tags": [] },
        { "id": "Cellulose fibers", "description": "A crystaline polydextrose polymer. Seems to be crystalline.", "recipes": [], "effects": [], "color": "#E6E6DA", "tags": [] },
        { "id": "Fat", "description": "No matter how it was obtained, its application is important. Seems to be exotic smelling.", "recipes": [], "effects": [], "color": "#d8d8b0", "tags": [] },
        { "id": "Grey matter", "description": "Thought juice. Seems to be neural.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates hunger 0.5x", "Poison (0.5u/s): Deals 2 cellular"], "color": "#C584B8", "tags": [] },
        { "id": "Ichor", "description": "An extremely potent regenerative chemical. Seems to be roaring.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 0.5x, Heals damage"], "color": "#f4692e", "tags": [] },
        { "id": "Insect blood", "description": "Okay, this is really gross. Seems to be slimy.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 0.333x (non-Human)"], "color": "#808A51", "tags": [] },
        { "id": "Rororium", "description": "A strange substance which fills the cores of the hivelords. Seems to be refreshing.", "recipes": [], "effects": ["Medicine (0.5u/s): Heals 4 brute, Adrenaline"], "color": "#bf1365", "tags": [] },
        { "id": "Sap", "description": "Sticky, sweet tree blood. Seems to be sticky.", "recipes": [], "effects": ["Food/Drink (0.5u/s): Satiates hunger/thirst 0.333x"], "color": "#cd7314", "tags": [] },
        { "id": "Slime", "description": "You thought this was gradient blood at first. Seems to be viscous.", "recipes": [], "effects": ["Food (0.5u/s): Satiates hunger 0.333x"], "color": "#2cf274", "tags": [] },
        { "id": "Vomit", "description": "You can see a few chunks of someone's last meal in it. Seems to be pungent.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 0.167x"], "color": "#87ab08", "tags": [] },
        { "id": "Zombie blood", "description": "Would not advise eating. Seems to be necrotic.", "recipes": [], "effects": ["Drink (0.5u/s): Satiates thirst 0.167x", "Poison (0.5u/s): Deals 4 poison, vomit"], "color": "#2b0700", "tags": [] }
      ]
    },
    {
      "category": "Miscellaneous - Fun",
      "reagents": [
        { "id": "Fiber", "description": "A raw material, usually extracted from wool. Seems to be fibrous.", "recipes": [], "effects": ["Food (0.5u/s): Satiates hunger averagely (Moth)"], "color": "#808080", "tags": [] },
        { "id": "Ground Bee", "description": "Bee grounds. Gross. Seems to be bee guts.", "recipes": [], "effects": [], "color": "#86530E", "tags": [] },
        { "id": "Saxoite", "description": "Smells like jazz. Seems to be ground brass.", "recipes": [], "effects": [], "color": "#B8A603", "tags": [] }
      ]
    },
    {
      "category": "Miscellaneous - Special",
      "reagents": [
        { "id": "Carpetium", "description": "A mystical chemical... covers everything it touches in carpet. Seems to be fibrous.", "recipes": ["Space mirage [1], Fiber [2] -> Carpetium [3]"], "effects": ["Poison (0.5u/s): Removes carpotoxin"], "color": "#800000", "tags": ["Toxin"] },
        { "id": "Laughter", "description": "Some say that this is the best medicine. Seems to be funny.", "recipes": ["Banana juice [1], Sugar [1] -> Laughter [2]"], "effects": ["Medicine (0.5u/s)"], "color": "#FF4DD2", "tags": ["Medicine"] },
        { "id": "Space glue", "description": "High performance glue intended for maintenance. Seems to be sticky.", "recipes": ["Space lube [1], Slime [1] (Heat > 370K) -> Space glue [2]"], "effects": ["Narcotic (0.5u/s): Hallucinations", "Drink (0.5u/s): Inability to speak"], "color": "#ffffff", "tags": ["Narcotic"] },
        { "id": "Space lube", "description": "High performance lubricant. Seems to be shiny.", "recipes": ["Water [1], Fersilicite [1], Oxygen [1] -> Space lube [5]"], "effects": [], "color": "#77b58e", "tags": [] }
      ]
    },
    {
      "category": "Reactions",
      "reagents": [
        { "id": "Soap", "description": "A reaction that produces a solid cleaning bar.", "recipes": ["15u Fat, 10u Table Salt, 10u Water -> 1 bar of soap", "15u Fat, 10u Table Salt, 10u Blood -> 1 bar of homemade soap"], "effects": ["Creates a bar of soap"], "color": null, "tags": [] },
        { "id": "Meatification", "description": "Meatification reaction.", "recipes": ["25u Fat, 5u Nutriment, 10u Blood, 10u Carbon -> 1 slab of meat"], "effects": ["Creates 1 slab of meat"], "color": null, "tags": [] },
        { "id": "Plastic Sheets", "description": "A reaction to synthesize plastic sheets.", "recipes": ["5u Oil, 3u Ash, 2u Sulfuric Acid (Heat > 378K) -> 1 sheet of plastic"], "effects": ["Creates 1 sheet of plastic"], "color": null, "tags": [] },
        { "id": "Flash Freeze", "description": "Rapidly freezes water into ice.", "recipes": ["1u Fresium, 1u Water -> 1 mole Frezon, 5u Ice"], "effects": ["Creates Frezon and Ice"], "color": null, "tags": [] },
        { "id": "Colored Crystal Shards", "description": "A reaction that synthesizes decorative crystals.", "recipes": ["15u Sugar, 15u Water, 5u Ethanol -> 1 randomly colored crystal shard"], "effects": ["Creates a crystal shard"], "color": null, "tags": [] },
        { "id": "Gunpowder", "description": "Synthesis of solid explosive powder.", "recipes": ["6u Potassium, 2u Sulfur, 2u Charcoal -> 1 piece of gunpowder"], "effects": ["Creates 1 piece of gunpowder"], "color": null, "tags": [] },
        { "id": "Explosion", "description": "Volatile reactions that result in an immediate explosion.", "recipes": ["Equal parts Potassium + Water", "Chlorine Trifluoride creation", "Juice that makes you Weh + Juice that makes you Hew"], "effects": ["Causes an explosion"], "color": null, "tags": [] },
        { "id": "Smoke", "description": "A reaction that disperses chemicals via a smoke cloud.", "recipes": ["Equal parts Phosphorus + Potassium + Sugar"], "effects": ["Spreads additional chemicals as smoke"], "color": null, "tags": [] },
        { "id": "Foam", "description": "A reaction that disperses chemicals via foam.", "recipes": ["Equal parts Water + Fluorosurfactant"], "effects": ["Spreads additional chemicals as foam"], "color": null, "tags": [] },
        { "id": "Metal Foam", "description": "Used to rapidly seal breaches or create barriers.", "recipes": ["3 parts Aluminum OR Iron, 1 part Foaming Agent, 1 part Fluorosulfuric acid"], "effects": ["Foams into a solid metal wall"], "color": null, "tags": [] },
        { "id": "Flash", "description": "A bright reaction used to blind opponents.", "recipes": ["Equal parts Aluminum + Potassium + Sulfur"], "effects": ["Creates a flash"], "color": null, "tags": [] },
        { "id": "EMP", "description": "An electromagnetic pulse generated by chemical reaction.", "recipes": ["Equal parts Iron + Uranium + Aluminum"], "effects": ["Causes an EMP explosion"], "color": null, "tags": [] },
        { "id": "Plasma Gas", "description": "Release of dangerous plasma gas.", "recipes": ["Phlogiston creation reaction"], "effects": ["Creates plasma gas as a by-product"], "color": null, "tags": [] }
      ]
    }
  ]
};

const guidesData = [
  {
    "category": "Shift start",
    "guides": [
      {
        "title": "Bic - Brute - 15u OD - DO NOT MIX PUN/LAC/BRU",
        "content": [
          "Dispenser Ingredients: 15u Oxygen, Sugar; 60u Carbon",
          "---",
          "Jug Preparation:",
          "1. Dispense 200u Carbon. Transfer 50u into two separate jugs (leaving 100u in source).",
          "2. Mix 50u Oxygen and Sugar into the 50u Carbon jug.",
          "3. Add 150u Inapetaline.",
          "4. Split result: 50u into the 50u Carbon jug; 100u into the 100u Carbon jug.",
          "Output: 100u Bicaridine (use in ChemMaster for Bru) and 200u Bicaridine (split 100/100 for Pun and Lac)."
        ]
      },
      {
        "title": "Derma - Burns(except caustic) - 10u OD",
        "content": [
          "Dispenser Ingredients: 15u Silicon, Carbon; 30u Oxygen, Phosphorus",
          "---",
          "Jug Preparation:",
          "1. Dispense 200u Carbon -> Transfer 100u into a new jug.",
          "2. Dispense 200u Silicon -> Transfer 100u into the two 100u Carbon jugs.",
          "3. Dispense 200u Kelotane -> Transfer 50u into three separate jugs.",
          "4. Dispense 200u Oxygen and Phosphorus -> Transfer 50u of each into four 50u Kelotane jugs.",
          "5. Use 150u Dermaline to top off the other three jugs."
        ]
      },
      {
        "title": "Pha - Genetic - Causes radiation",
        "content": [
          "Warning: Causes vomiting. Administer first or last.",
          "Recipe: 5u Silicon, Potassium, Nitrogen; 25u Radium; 10u Phosphorus, Chlorine; 30u Ethanol."
        ]
      },
      {
        "title": "Dylo - Poison - DO NOT MIX INAP - 20u OD",
        "content": [
          "Recipe: 30u Silicon, Potassium, Nitrogen."
        ]
      },
      {
        "title": "Tri - Brute/Burns/Poison 50DMG - SAFE",
        "content": [
          "Part A: 15u Oxygen, Carbon, Sugar.",
          "Part B: 15u Silicon, Potassium, Nitrogen."
        ]
      },
      {
        "title": "Ari - Radiation - Causes minor brute damage",
        "content": [
          "Part A: 5u Silicon, Potassium, Nitrogen.",
          "Part B: 15u Radium, 30u Hydrogen."
        ]
      },
      {
        "title": "Dex P - Airloss - 25u OD",
        "content": [
          "Recipe: 25u Iron, Carbon, Dexalin (Oxygen + Plasma)."
        ]
      },
      {
        "title": "Sal - 20% Blood Level/5u - SAFE",
        "content": [
          "Recipe: 20u Sodium, Chlorine (Heat).",
          "Instruction: Fill the remainder of the jug with Water."
        ]
      }
    ]
  },
  {
    "category": "Botany (on request)",
    "guides": [
      {
        "title": "EZ Nutrient",
        "content": [
          "Recipe: 15u Nitrogen, Phosphorus, Potassium."
        ]
      },
      {
        "title": "Robust Harvest",
        "content": [
          "Main Mix: EZ Nutrient, Sulfuric Acid.",
          "Sulfuric Acid: 30u Oxygen, 15u Hydrogen, Sulfur."
        ]
      },
      {
        "title": "Unstable Mutagen",
        "content": [
          "Recipe: 30u Radium, Phosphorus, Chlorine."
        ]
      }
    ]
  },
  {
    "category": "Janitor (on request)",
    "guides": [
      {
        "title": "Space Cleaner",
        "content": [
          "Recipe: 50u Ammonia, Water.",
          "Ammonia: 30u Hydrogen, 10u Nitrogen."
        ]
      }
    ]
  },
  {
    "category": "Advanced medicine - Brute (Pun/Lac/Bru)",
    "guides": [
      {
        "title": "Pun - Piercing - 11u OD - DO NOT MIX LAC/BRU/BICA",
        "content": [
          "Main Mix: 50u Bicaridine, Hydroxide (Heat).",
          "Hydroxide: Oxygen, Hydrogen (Heat).",
          "Bicaridine: 15u Oxygen, Sugar, 60u Carbon."
        ]
      },
      {
        "title": "Lac - Slash - 12u OD - DO NOT MIX PUN/BRU/BICA",
        "content": [
          "Main Mix: 50u Bicaridine, Benzene (Heat).",
          "Benzene: Hydrogen, Carbon (Heat).",
          "Bicaridine: 15u Oxygen, Sugar, 60u Carbon."
        ]
      },
      {
        "title": "Bru - Blunt - 10.5u OD - DO NOT MIX PUN/LAC/BICA",
        "content": [
          "Main Mix: 25u Bicaridine, Lithium, Sugar.",
          "Note: No heat needed."
        ]
      }
    ]
  },
  {
    "category": "Advanced medicine - Burn (Lepo, Pyr, Ins)",
    "guides": [
      {
        "title": "Lepo - Cold/Bad temperature - SAFE",
        "content": [
          "Fersilicon: 50u Iron, Silicon (Heat).",
          "Leporazine: 45u Copper, 45u Fersilicon, 1u Plasma."
        ]
      },
      {
        "title": "Pyr - Heat - 20u OD",
        "content": [
          "Dermaline: 15u Silicon, Carbon; 30u Oxygen, Phosphorus.",
          "Pyroxadone: 25u Leporazine, 25u Dermaline, 25u Carbon (Heat)."
        ]
      },
      {
        "title": "Ins - Shock - 12u OD (Least Important)",
        "content": [
          "Kelotane: 50u Carbon, Silicon.",
          "Benzene: 50u Carbon, Hydrogen (Heat).",
          "Insulin: Leporazine (50u Iron/Silicon heated -> 45u Copper + 1u Plasma), Kelotane, Silicon (Heat)."
        ]
      }
    ]
  },
  {
    "category": "Advanced medicine - Poison (Dip)",
    "guides": [
      {
        "title": "Dip - Poison - SAFE",
        "content": [
          "Ammonia: 75u Hydrogen, 25u Nitrogen.",
          "Diethylamine: 50u Ethanol, 50u Ammonia.",
          "Oil: Welding Fuel, Carbon, Hydrogen.",
          "Table Salt: 50u Chlorine, 50u Sodium (Heat).",
          "Diphenhydramine: Diethylamine, Oil, Table Salt, Carbon, Ethanol (Heat)."
        ]
      }
    ]
  },
  {
    "category": "Advanced medicine - Caustic (Sig)",
    "guides": [
      {
        "title": "Sig - Caustic - 16u OD",
        "content": [
          "Step 1 (Bases):",
          "- Table Salt: 50u Chlorine, Sodium.",
          "- Ammonia: 75u Hydrogen, Nitrogen.",
          "Step 2 (Intermediates):",
          "- Sodium Carbonate: 25u Ammonia, Table Salt, Oxygen, Carbon.",
          "- Hydroxide: Oxygen, Hydrogen (Heat).",
          "- Sodium Hydroxide: Sodium, Hydroxide.",
          "- Kelotane: 50u Silicon, Carbon.",
          "Final Mix (Sigynate):",
          "- 20u Sodium Carbonate, Sodium Hydroxide, Kelotane, Water, Sugar (Heat)."
        ]
      }
    ]
  },
  {
    "category": "Niche Meds",
    "guides": [
      {
        "title": "Ocu - 5u Blindness - SAFE",
        "content": [
          "Hydroxide: 50u Hydrogen, Oxygen.",
          "Table Salt: 50u Chlorine, Sodium.",
          "Oculine: 1 part Hydroxide, 1 part Table Salt, 2 parts Blood."
        ]
      },
      {
        "title": "Epi - Critical - 20u OD",
        "content": [
          "Oil: 30u Welding Fuel, Carbon, Hydrogen.",
          "Acetone: 30u Oil, Welding Fuel, Oxygen.",
          "Benzene: 50u Carbon, Hydrogen (Heat).",
          "Hydroxide: 50u Oxygen, Hydrogen (Heat).",
          "Phenol: 50u Hydroxide, Benzene.",
          "Epinephrine: 25u Phenol, Acetone, Chlorine, Hydroxide."
        ]
      },
      {
        "title": "Charcoal - Chem removal(Good and bad)",
        "content": [
          "Oil: 25u Welding Fuel, Carbon, Hydrogen.",
          "Ash: Oil (Heat).",
          "Charcoal: 50u Ash, Carbon."
        ]
      },
      {
        "title": "Eth - Poison/drunkness - SAFE",
        "content": [
          "Recipe: 25u Oxygen, Dylovene, Carbon."
        ]
      },
      {
        "title": "Regenerative Mesh",
        "content": [
          "Machine: Microwave (10 seconds).",
          "Ingredients: 1 Ointment, Cloth, Aloe, 20u Dermaline, 20u Sigynate.",
          "---",
          "Component Recipes:",
          "- Kelotane: 50u Silicon, Carbon.",
          "- Dermaline: 50u Kelotane, 25u Oxygen, Phosphorus.",
          "- Table Salt: 50u Chlorine, Sodium.",
          "- Ammonia: 75u Hydrogen, Nitrogen.",
          "- Sodium Carbonate: 25u Ammonia, Table Salt, Oxygen, Carbon.",
          "- Hydroxide: Oxygen, Hydrogen (Heat).",
          "- Sodium Hydroxide: Sodium, Hydroxide.",
          "- Sigynate: 20u Sodium Carbonate, Sodium Hydroxide, Kelotane, Water, Sugar (Heat)."
        ]
      },
      {
        "title": "Medicated Sutures",
        "content": [
          "Machine: Microwave (10 seconds).",
          "Ingredients: 1 Bruise Pack, Cloth, Poppy, 20u Tranexamic Acid, 20u Cryptobiolin.",
          "---",
          "Component Recipes:",
          "- Inapetaline: 25u Oxygen, Carbon, Sugar.",
          "- Sulfuric Acid: 25u Hydrogen, Sulfur, 50u Oxygen.",
          "- Tranexamic Acid: 25u Inapetaline, Sulfuric Acid, Sugar.",
          "- Cryptobiolin: 25u Hydrogen, Sugar, Oxygen."
        ]
      },
      {
        "title": "Amb & Amb+ - Zombie cure&vaccine",
        "content": [
          "Ambuzol (10u) - Basic Cure:",
          "- Mix 25u Dylovene (15u Silicon/Carbon + 30u Oxygen/Phosphorus), Ammonia, and 50u Zombie Blood.",
          "---",
          "Ambuzol+ (5u) - Cure & Vaccine:",
          "- Mix Ambuzol + Omnizine.",
          "---",
          "Omnizine Source:",
          "- Grind Ambrosia Deus (yields 3u Omnizine).",
          "- Mutate Ambrosia Vulgaris -> Ambrosia Deus."
        ]
      }
    ]
  },
  {
    "category": "Cryo meds",
    "guides": [
      {
        "title": "Cryo - All but genetic - Cryopod(-60C)",
        "content": [
          "Dexalin: Oxygen + Plasma.",
          "Cryoxadone: 25u Water, Oxygen, Dexalin.",
          "Effect (50u Beaker): 400 Brute, 400 Toxin, 600 Burn, 600 Airloss."
        ]
      },
      {
        "title": "Dox - Genetic - Cryopod(-60C)",
        "content": [
          "Dexalin: Oxygen + Plasma.",
          "Cryoxadone: 25u Water, Oxygen, Dexalin.",
          "Unstable Mutagen: Radium, Phosphorus, Chlorine.",
          "Clonexadone (Dox): 50u Cryoxadone, Unstable Mutagen.",
          "Effect (50u Beaker): 200 Genetic damage healing."
        ]
      },
      {
        "title": "Dox+Cryo - Everything - Cryopod(-60C)",
        "content": [
          "Tip: Cryopods inject 1u from the beaker per second.",
          "Strategy: Create a 50/50 mix of Dox and Cryoxadone for balanced healing."
        ]
      },
      {
        "title": "Nec - dead burns/brute/poison - Cryopod(-60C)",
        "content": [
          "Dexalin: Oxygen + Plasma.",
          "Cryoxadone: Water, Oxygen, Dexalin.",
          "Necrazone: 3 parts Blood, 2 parts Cryoxadone, 1 part Omnizine.",
          "Effect (50u Beaker): 400 Brute, 500 Burns, 200 Poison.",
          "Omnizine Source: Grind Ambrosia Deus (mutate from Ambrosia Vulgaris)."
        ]
      },
      {
        "title": "Alox - dead heat/shock/caustic - Cryopod(-60C)",
        "content": [
          "Base Ingredients:",
          "- Dexalin (Oxygen + Plasma), Cryoxadone (Water, Oxygen, Dexalin).",
          "- Table Salt (Chlorine, Sodium), Ammonia (Hydrogen, Nitrogen).",
          "- Sodium Carbonate (Ammonia, Salt, Oxygen, Carbon).",
          "- Hydroxide (Oxygen, Hydrogen - Heat), Sodium Hydroxide (Sodium, Hydroxide).",
          "- Kelotane (Silicon, Carbon).",
          "- Sigynate (Sodium Carbonate, Sodium Hydroxide, Kelotane, Water, Sugar - Heat).",
          "---",
          "Aldenzyne (Alox): 40u Aloe, 40u Sigynate, 20u Cryoxadone.",
          "Effect (50u Beaker): 300 Shock/Heat, 100 Caustic."
        ]
      },
      {
        "title": "Opp - Antirot - Cryopod(-123C)",
        "content": [
          "Ingredients:",
          "- Sidenafil (Sid): Aloe, Stelibinin (from Galaxythistle).",
          "- Cryoxadone: Oxygen, Dexalin, Water.",
          "- Unstable Mutagen: Chlorine, Phosphorus, Radium.",
          "- Clonexadone (Dox): Cryoxadone, Unstable Mutagen.",
          "- Oil: Welding Fuel, Carbon, Hydrogen.",
          "- Acetone: Oil, Welding Fuel, Oxygen.",
          "- Cognizine: Carpotoxin (ground Space Carp), Sid, Acetone.",
          "---",
          "Opp: 25u Cognizine, Dox, 50u Plasma (Heat).",
          "Effect (50u Beaker): Reverses 2000s of rot timer (rot starts past 600s)."
        ]
      }
    ]
  },
  {
    "category": "Useful tools",
    "guides": [
      {
        "title": "Metal Foam",
        "content": [
          "Beaker 1: 2 Aluminum - 1 Lithium - 1 Hydrogen",
          "Beaker 2: 2 Oxygen - 1 Sulfur - 1 Hydrogen - 1 Hydrogen - 1 Potassium - 1 Fluorine",
          "Instruction: Mix to Activate."
        ]
      },
      {
        "title": "Desoxyephedrine (Meth)",
        "content": [
          "Recipes:",
          "- Oil: 10u Welding Fuel, Carbon, Hydrogen.",
          "- Ammonia: 15u Hydrogen, 5u Nitrogen.",
          "- Diethylamine: Ammonia, 20u Ethanol.",
          "- Ephedrine: 25u Oil, Diethylamine, Hydrogen, Sugar.",
          "- Desoxyephedrine: 25u Ephedrine, Carbon, Iodine, Phosphorus (Heat).",
          "---",
          "Pill Making:",
          "- Dylovene: 30u Nitrogen, Potassium, Silicon.",
          "- Mix: 90u Dylovene + 90u Desoxyephedrine.",
          "- Output: Pill Canister (9 Pills @ 20u)."
        ]
      },
      {
        "title": "Space Cleaner Foam",
        "content": [
          "Beaker 1: 90u Water, 10u Space Cleaner.",
          "Beaker 2: 90u Fluorosurfactant, 10u Space Cleaner.",
          "Instruction: Mix to Activate.",
          "---",
          "Ingredients:",
          "- Space Cleaner: 50u Ammonia (30u Hydrogen, 10u Nitrogen), Water.",
          "- Sulfuric Acid: 2 Oxygen, 1 Hydrogen, 1 Sulfur.",
          "- Fluorosurfactant: 20u Carbon, Fluorine, 10u Sulfuric Acid."
        ]
      },
      {
        "title": "Trico Grenade (Healing Grenade)",
        "content": [
          "Beaker 1: 50u Tricordrazine, Fluorosurfactant.",
          "Beaker 2: 50u Water, Tricordrazine.",
          "Instruction: Mix to Activate."
        ]
      },
      {
        "title": "TDD - ALL but genetic - Safe (Homemade Omnizine)",
        "content": [
          "Recipe:",
          "- Dylovene: 25u Silicon, Potassium, Nitrogen.",
          "- Inapetaline: 25u Oxygen, Carbon, Sugar.",
          "- Tricordrazine: 75u Dylovene, Inapetaline.",
          "- TDD: 2x Cream, 1x Lime, Orange, Tomato Juice, Tricordrazine.",
          "Method: Stir (use a spoon on the jug; Booze-o-mats have spoons).",
          "Effect (15u injection): Heals 30 Brute, Burn, Toxin, and Airloss.",
          "---",
          "Scavenging Tip:",
          "Maintenance tunnel Booze-o-mats are great sources. Screwdriver the panel open and cut the access wire to access 250u Cream and 150u of all three juices (enough for 750u TDD). Drink dispensers also contain Cream."
        ]
      }
    ]
  }
];

let chemicalMap = {}; 
let allChemicals = [];
let pinnedItems = JSON.parse(localStorage.getItem('ss14_chem_pins')) || [];

function initData() {
    if(chemRecipesData.reagent_database) {
        chemRecipesData.reagent_database.forEach(category => {
            category.reagents.forEach(chem => {
                chem.category = category.category;
                chemicalMap[chem.id] = chem;
                allChemicals.push(chem);
            });
        });
    }
}

function getContrastColor(color) {
    if(!color) return 'black';
    if(color.toLowerCase() === 'white') return 'black';
    if(color.toLowerCase() === 'black') return 'white';
    if(color.toLowerCase() === 'transparent') return 'black';

    if(color.startsWith('#')) {
        let hex = color.replace("#", "");
        if (hex.length === 3) hex = hex.split('').map(char => char + char).join('');
        
        var r = parseInt(hex.substr(0,2),16);
        var g = parseInt(hex.substr(2,2),16);
        var b = parseInt(hex.substr(4,2),16);
        
        if(isNaN(r) || isNaN(g) || isNaN(b)) return 'black';
        var yiq = ((r*299)+(g*587)+(b*114))/1000;
        return (yiq >= 128) ? 'black' : 'white';
    }
    return 'black';
}

window.selectItem = function(id) {
    const chem = chemicalMap[id];
    if (!chem) return;

    document.querySelectorAll('.detail-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.detail-tab-btn[data-target="info"]').classList.add('active');

    const tagsHtml = chem.tags.length ? chem.tags.map(t => `[${t}]`).join(' ') : 'None';
    const colorStyle = chem.color ? `background:${chem.color}; border:1px solid #000;` : 'background:transparent; border:1px dashed #999;';
    const colorBox = `<span style="${colorStyle} display:inline-block; width:12px; height:12px; vertical-align:middle;"></span>`;
    
    const headerBg = chem.color || '#808080';
    const headerTextColor = getContrastColor(headerBg);
    const isPinned = pinnedItems.includes(chem.id);

    const pinBtnHtml = `<button class="win-btn small-btn" style="float:right; margin-top:-2px;" onclick="window.togglePin('${chem.id}', event)">${isPinned ? 'Unpin' : 'Pin'}</button>`;

    let recipeHtml = '<div class="text-muted" style="font-style:italic;">No known recipes.</div>';
    if(chem.recipes.length > 0) {
        recipeHtml = chem.recipes.map(r => 
            `<div class="info-box">${parseFullRecipe(r)}</div>`
        ).join('');
    }

    let effectsHtml = '<div class="text-muted" style="font-style:italic;">No significant effects.</div>';
    if(chem.effects.length > 0) {
        effectsHtml = chem.effects.map(e => 
            `<div class="info-box">${e}</div>`
        ).join('');
    }

    const container = document.getElementById('details-content');
    container.innerHTML = `
        <div id="info" class="detail-view active">
            <div style="background:${headerBg}; color:${headerTextColor}; padding:5px; border:1px solid #000; margin-bottom:10px; height:28px;">
                <span class="chem-name" style="color:${headerTextColor}; float:left; line-height:18px;">${chem.id}</span>
                ${pinBtnHtml}
            </div>
            
            <div class="detail-row">
                <span class="detail-label">Description</span>
                <div class="info-box">${chem.description}</div>
            </div>
            
            <div class="detail-row">
                <span class="detail-label">Appearance</span>
                <div class="info-box">
                    ${colorBox} <span style="font-family:monospace">${chem.color || 'N/A'}</span>
                </div>
            </div>
            
            <div class="detail-row">
                <span class="detail-label">Tags</span>
                <div class="info-box">${tagsHtml}</div>
            </div>
        </div>
        
        <div id="recipe" class="detail-view">
             ${recipeHtml}
        </div>
        
        <div id="effects" class="detail-view">
            ${effectsHtml}
        </div>
    `;
};

window.togglePin = function(id, event) {
    if(event) event.stopPropagation();
    if (pinnedItems.includes(id)) {
        pinnedItems = pinnedItems.filter(i => i !== id);
    } else {
        pinnedItems.push(id);
    }
    localStorage.setItem('ss14_chem_pins', JSON.stringify(pinnedItems));
    renderPins();
    
    const currentActive = document.querySelector('#info .chem-name');
    if(currentActive && currentActive.textContent === id) {
        window.selectItem(id);
    }
    
    if(document.getElementById('tab-db').classList.contains('active')) {
        renderGrid(
            document.getElementById('category-filter').value, 
            document.getElementById('search-input').value
        );
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initData();
    populateFilters('db');
    renderGrid('all');
    renderPins();
    setupEventListeners();
    setupMusicPlayer();
    setupGlobalTooltip();
});

const viewContainer = document.getElementById('view-container');
const pinnedContainer = document.getElementById('pinned-container');

function renderGrid(categoryFilter, searchQuery = '') {
    viewContainer.innerHTML = '';
    viewContainer.className = 'scrollable-content chem-grid win-inset';

    let filtered = allChemicals;
    if (categoryFilter && categoryFilter !== 'all') filtered = filtered.filter(c => c.category === categoryFilter);
    if (searchQuery) filtered = filtered.filter(c => c.id.toLowerCase().includes(searchQuery.toLowerCase()));

    if (filtered.length === 0) {
        viewContainer.innerHTML = '<div class="text-muted" style="padding:20px; text-align:center;">No results found.</div>';
        return;
    }

    filtered.forEach(chem => {
        const isPinned = pinnedItems.includes(chem.id);
        const headerBg = chem.color || '#e0e0e0';
        const textColor = getContrastColor(headerBg);
        
        let recipeDisplay = '<span class="text-muted" style="font-style:italic;">No Recipe</span>';
        if (chem.recipes.length > 0) recipeDisplay = parseShortRecipe(chem.recipes[0]);

        const html = `
            <div class="chem-card" onclick="window.selectItem('${chem.id}')">
                <div class="card-header" style="background:${headerBg};">
                    <span class="chem-name" style="color:${textColor}">${chem.id}</span>
                    <span class="pin-btn ${isPinned ? 'pinned' : ''}" style="color:${textColor}" onclick="window.togglePin('${chem.id}', event)">★</span>
                </div>
                <div class="short-recipe">${recipeDisplay}</div>
            </div>
        `;
        viewContainer.insertAdjacentHTML('beforeend', html);
    });
}

function renderGuidebook(categoryFilter, searchQuery = '') {
    viewContainer.innerHTML = '';
    viewContainer.className = 'scrollable-content win-inset';

    guidesData.forEach(catGroup => {
        if (categoryFilter && categoryFilter !== 'all' && catGroup.category !== categoryFilter) return;

        viewContainer.insertAdjacentHTML('beforeend', `
            <div style="background:#000080; color:white; padding:4px; font-weight:bold; margin-top:10px; border:1px solid #fff; box-shadow:1px 1px 0 #000;">
                ${catGroup.category}
            </div>
        `);

        catGroup.guides.forEach(guide => {
            if (searchQuery && !guide.title.toLowerCase().includes(searchQuery.toLowerCase())) return;

            const linkedTitle = linkifyTitle(guide.title);
            const contentHtml = guide.content.map(line => `<div>${linkifyText(line)}</div>`).join('');

            viewContainer.insertAdjacentHTML('beforeend', `
                <div style="border:1px solid var(--win-shadow); padding:8px; margin-bottom:10px; background:var(--postit-bg); color:var(--postit-text); box-shadow: 1px 1px 3px rgba(0,0,0,0.2);">
                    <div style="color:var(--win-blue); font-weight:bold; text-decoration:underline; margin-bottom:5px;">${linkedTitle}</div>
                    <div style="line-height:1.4;">${contentHtml}</div>
                </div>
            `);
        });
    });
}

function renderPins() {
    pinnedContainer.innerHTML = '';
    if (pinnedItems.length === 0) {
        pinnedContainer.innerHTML = '<div class="text-muted" style="text-align:center; padding:10px;">No pins</div>';
        return;
    }

    pinnedItems.forEach(id => {
        const chem = chemicalMap[id];
        if (!chem) return;
        let recipeShort = '<span class="text-muted">No recipe</span>';
        if(chem.recipes.length > 0) recipeShort = parseShortRecipe(chem.recipes[0]);

        pinnedContainer.insertAdjacentHTML('beforeend', `
            <div class="pinned-item">
                <div class="pinned-header" onclick="window.selectItem('${id}')">
                    <span>${chem.id}</span>
                    <span style="cursor:pointer;" onclick="window.togglePin('${id}', event)">X</span>
                </div>
                <div class="pinned-content">${recipeShort}</div>
            </div>
        `);
    });
}

function parseShortRecipe(recipeString) {
    const parts = recipeString.split('->');
    let output = '';
    const regex = /([a-zA-Z\s]+)\s*\[([\d\.]+)\]/g;
    let match;

    while ((match = regex.exec(parts[0])) !== null) {
        let name = match[1].trim();
        let amount = match[2];
        let chemObj = chemicalMap[name];
        let colorStyle = chemObj && chemObj.color ? `background:${chemObj.color}; border:1px solid #000;` : 'background:transparent; border:1px dashed #666;';
        
        output += `<span class="guide-link" onclick="window.selectItem('${name}'); event.stopPropagation();" title="${name}">
            <span style="${colorStyle} display:inline-block; width:10px; height:10px;"></span>
            ${name.substring(0,3)} ${amount}
        </span> `;
    }
    if (parts[0].includes('Heat')) output += ' <span style="color:red; font-weight:bold;">[Heat]</span>';
    return output || parts[0];
}

function parseRecipeToVisuals(recipeString) {
    const parts = recipeString.split('->');
    let output = '';
    const regex = /([a-zA-Z\s]+)\s*\[([\d\.]+)\]/g;
    let match;
    while ((match = regex.exec(parts[0])) !== null) {
        let name = match[1].trim();
        let amount = match[2];
        let chemObj = chemicalMap[name];
        let colorStyle = chemObj && chemObj.color ? `background:${chemObj.color}; border:1px solid #000;` : 'background:transparent; border:1px dashed #666;';
        output += `<div style="margin-bottom:2px;">
            <span style="${colorStyle} display:inline-block; width:8px; height:8px;"></span>
            ${name.substring(0,3)} ${amount}
        </div>`;
    }
    if (parts[0].includes('Heat')) output += ' <span style="color:red; font-weight:bold;">[Heat]</span>';
    return output || parts[0];
}

function parseFullRecipe(recipeString) {
    const parts = recipeString.split('->');
    let output = '';
    const regex = /([a-zA-Z\s]+)\s*\[([\d\.]+)\]/g;
    let match;

    while ((match = regex.exec(parts[0])) !== null) {
        let name = match[1].trim();
        let amount = match[2];
        let chemObj = chemicalMap[name];
        let colorStyle = chemObj && chemObj.color ? `background:${chemObj.color}; border:1px solid #000;` : 'background:transparent; border:1px dashed #666;';
        
        let tooltipContent = "No recipe";
        if(chemObj && chemObj.recipes && chemObj.recipes.length > 0) {
            tooltipContent = `<strong>${name}</strong><br/>` + parseRecipeToVisuals(chemObj.recipes[0]);
        } else {
            tooltipContent = `<strong>${name}</strong><br/>Base Chemical`;
        }
        
        output += `<span class="guide-link" data-chem-id="${name}" onclick="window.selectItem('${name}'); event.stopPropagation();">
            <span style="${colorStyle} display:inline-block; width:12px; height:12px; vertical-align:middle;"></span>
            ${name} [${amount}]
        </span> `;
    }
    
    if (parts[0].includes('Heat')) output += ' <span style="color:red; font-weight:bold;">+ Heat</span>';
    if(parts[1]) output += ` ➜ ${parts[1].trim()}`;

    return output || recipeString;
}

function linkifyTitle(title) {
    const firstWord = title.split(/[\s-]/)[0];
    let targetId = null;
    const candidates = allChemicals.filter(c => c.id.toLowerCase().startsWith(firstWord.toLowerCase()));
    const overrides = { "Bic": "Bicaridine", "Tri": "Tricordrazine", "Dylo": "Dylovene", "Amb": "Ambuzol" };
    if (overrides[firstWord]) targetId = overrides[firstWord];
    else if (candidates.length > 0) targetId = candidates[0].id;

    if (targetId) return title.replace(firstWord, `<span class="guide-link" onclick="window.selectItem('${targetId}'); event.stopPropagation();">${firstWord}</span>`);
    return title;
}
function linkifyText(text) { return text; }

function populateFilters(mode) {
    const select = document.getElementById('category-filter');
    select.innerHTML = '<option value="all">All Categories</option>';
    const cats = new Set();
    if (mode === 'db' && chemRecipesData.reagent_database) chemRecipesData.reagent_database.forEach(c => cats.add(c.category));
    else guidesData.forEach(g => cats.add(g.category));
    cats.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        select.appendChild(opt);
    });
}

function setupGlobalTooltip() {
    const tooltip = document.getElementById('global-tooltip');
    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest('[data-chem-id]');
        if(target) {
            const chemId = target.getAttribute('data-chem-id');
            const chemObj = chemicalMap[chemId];
            if(chemObj) {
                let content = `<strong>${chemId}</strong><br/>`;
                if(chemObj.recipes && chemObj.recipes.length > 0) {
                    content += parseRecipeToVisuals(chemObj.recipes[0]);
                } else {
                    content += "Base Chemical";
                }
                tooltip.innerHTML = content;
                tooltip.classList.add('visible');
            }
        }
    });
    document.addEventListener('mousemove', (e) => {
        if(tooltip.classList.contains('visible')) {
            tooltip.style.top = (e.clientY + 15) + 'px';
            tooltip.style.left = (e.clientX + 15) + 'px';
        }
    });
    document.addEventListener('mouseout', (e) => {
        const target = e.target.closest('[data-chem-id]');
        if(target) tooltip.classList.remove('visible');
    });
}

function setupEventListeners() {
    document.getElementById('tab-db').addEventListener('click', () => {
        document.getElementById('tab-db').classList.add('active');
        document.getElementById('tab-guide').classList.remove('active');
        populateFilters('db');
        renderGrid('all');
    });
    document.getElementById('tab-guide').addEventListener('click', () => {
        document.getElementById('tab-guide').classList.add('active');
        document.getElementById('tab-db').classList.remove('active');
        populateFilters('guide');
        renderGuidebook('all');
    });
    document.querySelectorAll('.detail-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.detail-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.detail-view').forEach(v => v.classList.remove('active'));
            btn.classList.add('active');
            const t = document.getElementById(btn.dataset.target);
            if(t) t.classList.add('active');
        });
    });
    document.getElementById('category-filter').addEventListener('change', (e) => {
        const isDb = document.getElementById('tab-db').classList.contains('active');
        const q = document.getElementById('search-input').value;
        if(isDb) renderGrid(e.target.value, q);
        else renderGuidebook(e.target.value, q);
    });
    document.getElementById('search-input').addEventListener('input', (e) => {
        const isDb = document.getElementById('tab-db').classList.contains('active');
        const cat = document.getElementById('category-filter').value;
        if(isDb) renderGrid(cat, e.target.value);
        else renderGuidebook(cat, e.target.value);
    });
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const body = document.body;
        if(body.getAttribute('data-theme') === 'dark') body.removeAttribute('data-theme');
        else body.setAttribute('data-theme', 'dark');
    });
    document.getElementById('fake-exit').addEventListener('click', () => {
        const sound = document.getElementById('honk-sound');
        sound.currentTime = 0;
        sound.play();
        const img = document.createElement('img');
        img.src = 'content/clown.webp';
        img.className = 'falling-clown';
        img.style.width = (Math.random() * 100 + 50) + 'px';
        img.style.left = (Math.random() * (window.innerWidth - 150)) + 'px';
        document.body.appendChild(img);
        setTimeout(() => img.remove(), 3000);
    });
}

function setupMusicPlayer() {
    const audio = document.getElementById('bg-music');
    const playBtn = document.getElementById('btn-play');
    const stopBtn = document.getElementById('btn-stop');
    const text = document.getElementById('music-text');

    playBtn.addEventListener('click', () => {
        audio.play();
        text.textContent = 'PLAYING: SPACE ASSHOLE';
        text.classList.add('animate');
    });

    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        text.textContent = 'STOPPED';
        text.classList.remove('animate');
    });
}