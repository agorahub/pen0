---
layout: post
title : Chip Export Control
author: Barath Harithas
date  : 2024-04-09 12:00:00 +0800
image : https://i.imgur.com/e5aKms9.jpeg
#image_caption: ""
description: "Mapping the Chip Smuggling Pipeline and Improving Export Control Compliance"
excerpt_separator: <excerpt/>
---

_Export control evasion of controlled chips is a known concern, but the specifics of this activity are opaque. In addition, a systematic analysis of the entire chip smuggling pipeline, from initial procurement to unlawful distribution, remains conspicuously absent._ <excerpt/> _This study aims to bridge that methodological gap. It dissects the smuggling pipeline into four distinct stages: (1) initial procurement; (2) evasion of customs controls; (3) port exit; and (4) transshipment._

This report advocates for a first-principles approach in assessing export control evasion risks. Estimates should be anchored on specific vulnerabilities within the supply chain and actual smuggling tactics. To this end, this report identifies 11 potential tactics across the smuggling pipeline. It finds that export control evasion is likely more prevalent than suspected due to an underappreciation of the range and dimensionality of individual smuggling tactics. Importantly, the compounding risk profile that emerges when multiple tactics are layered together is underestimated.

Crucially, this report observes that as soon as illicit goods depart the port of origin and get buried in transshipment networks, untangling the knotted snarl becomes impractical. As such, policymakers should focus on interventions upstream in the smuggling pipeline. In addition, this report suggests a reorientation in how export control compliance should be approached. Rather than fixating on who to bar from the game, regulators should shift their focus toward who gets to play, moving from a system of exclusion based on the reactive blacklisting of suspicious entities to a system of inclusion built on preapprovals. This will be implemented through a series of policies that will sequentially disable each part of the smuggling pipeline before the illicit cargo can depart the port of origin: (1) a certification program during initial procurement to create a marketplace of trusted sellers and increase compliance know-how; (2) the use of digital waybills to reduce documentation fraud and facilitate traceability in order to address evasion of customs controls; and (3) the use of preapproved logistics providers, tagged at the point of sale, to inoculate against the risk of illicit diversion when exiting a port. Logistics providers will be mandated to report to the U.S. Department of Commerce’s Bureau of Industry and Security (BIS) monthly on any consignments not received within a specified timeframe of two to four weeks, pinpointing suspicious entities and facilitating targeted and timely spot checks by the BIS on vendors identified as potential weak links.

This is ultimately how the United States wins the proverbial “whack-a-mole” game, where smuggling networks surface momentarily, vanish, and reemerge elsewhere as quickly as they can be identified. First, it limits the number of tunnels made available to the moles. This will be operationalized through a stringent preapprovals regime that only permits thoroughly screened chip sellers and logistics providers to operate. Second, by collaborating with partner countries, the United States multiplies the hammers in play, to collectively flush the quarry out of the remaining tunnels. This step can be functionalized through dedicated regional units comprising a few experts from the BIS, along with secondees from individual customs authorities, to strengthen intelligence sharing, risk profiling, interdiction, and investigation competence. Lastly, through the use of modern analytics software, third countries can better and more reliably predict where and how the remaining moles will appear. Collectively, these efforts will allow the United States to reclaim control over the rules of the game and tilt the odds in favor of success against slippery evasion strategies.


### Introduction

The prevailing overconfidence in the efficacy of export controls for chips, guided by the “chokepoint theory,” and the related underestimation of export control evasion, first proceeds from an incomplete and cursory understanding of individual smuggling tactics. This is the case for even well-known methods such as the use of shell companies and transshipment networks. For example, the former may be supplemented by front and shell companies and the activation of dormant shelf companies. This defense-in-depth approach makes quick detection and punitive action far more difficult. Similarly, the transshipment challenge extends beyond the circuitous routing of illicit consignments through multiple third countries to muddy the trail. Along the way, smugglers also often utilize multimodal tactics combining air, sea, and land to further confound tracking efforts. In this manner, smugglers exploit regulatory arbitrage not only across different jurisdictions, but also between siloed domestic authorities.

And this only scratches the surface. This report further considers nine other smuggling tactics, ranging from the pedestrian, such as utilizing human carriers or mules and concealing chips in ordinary commodities, to progressively more difficult-to-detect methods such as embedding chips in electrical products, disassembling chips, contaminating container cargo, and even using small submersible vessels. While the last suggestion appears fantastical, a study in the 2000s estimated that “narco-subs” accounted for one-third of maritime cocaine trafficking between South America and the United States.

All of these graft onto the fact that chips are particularly amenable to smuggling. Unlike semiconductor manufacturing equipment — which is large, produced in low quantities, sold at extortionate prices, and requires significant amounts of post-sales support — chips are portable enough to fit in a shoe box, are produced in the millions, are high cost but not prohibitively so, and require little to no post-sales support whatsoever. For comparison, a single state-of-the-art extreme ultraviolet (EUV) lithography machine costs $350 million and requires 13 truck-sized containers and 250 crates for transportation. Meanwhile, an H100 chip costs roughly $40,000 and is sufficiently compact that 609 of them can be hidden within a single small freight box.

In addition, while this report provides a primer on tactics that may be used, given the dizzying profit margins to be made, these are likely only the tip of the iceberg. Take a hypothetical example of an H100 being sold in the black market at three times its retail value, for a markup of an additional $80,000 per chip. If a smuggler sells ten chips, they start to skirt the edges of a millionaire’s lifestyle; if they sell a thousand, they are elevated from nouveau riche to the landed gentry. There are few greater motivators for the imagination than greed, and policymakers should not underestimate that ancient playwright. As a result, customs officials are always working off a playbook that does not accurately render both the range and dimensionality of smuggling tactics.

Furthermore, the depths of what makes the smuggling enterprise so difficult to detect have scarcely been grazed. The principal challenge of intercepting smuggling operations is not related to the difficulty of detecting individual tactics per se. Rather, it arises from a variety of tactics being combined with one another in a complex chain of overlapping mini-sequences, with tactics recalibrated and refined at each transshipment point. Each supplemental tactic and layer of obfuscation compounds the risk profile. Even if each individual tactic has a seemingly manageable risk of detection, by threading through interstitial gaps at each vulnerability and layering tactics as the context demands to always seek the path of least resistance, the compounding probability of evasion by smugglers drastically increases.

Accordingly, the risk profile for export control evasion does not scale linearly. All else equal, it surges almost exponentially with the length and complexity of the smuggling sequence. It should be qualified that a single weak point, such as a poorly forged document or an improperly concealed illicit item, can compromise the entire operation. But given the high stakes and margins of the operations at play here, it is reasonable to expect that the smuggling syndicates involved are at least half-competent and, with the attacker’s advantage, are more likely than not to evade detection.

Laslty, because chips command the forefront of innovation, there is a reflexive instinct to assume that any chip-related challenge, including the bypassing of export controls, demands a similarly high-tech remedy. Without discounting the merits of technical interventions, this report suggests that instead of centering chips as the primary object of attention and smuggling as the backdrop, the reverse may be more instructive. By focusing on smuggling rather than technology, it becomes apparent that chip smuggling will likely not be entirely different from the trafficking of drugs or conflict diamonds, and is beholden to similar attributes, such as compactness, ease of concealment, and unit economics. Importantly, the factors facilitating evasion are steadfastly pre-modern. Seven out of the eleven tactics highlighted in this report hinge on the human element (e.g., bribery) and poor customs infrastructure. Chip smuggling is not a novel issue, but the age-old story of traditional contraband. As such, policymakers should be attentive to the persistent points of failure and timeworn tactics that have sustained this industry.


### Methodology

This report puts forward an alternative methodology for assessing export control evasion risks. The traditional approach leans on historical analogues, such as Russia’s circumvention of U.S. export controls for semiconductors following the invasion of Ukraine. While useful, particularly in the absence of reliable information, such approaches are inherently limited and risk overextending region-and country-specific factors.

This report advocates for a first-principles approach. It suggests that estimates for export control evasion be anchored on specific vulnerabilities within the supply chain and potential smuggling tactics. This not only promotes a more grounded representation of the evasion landscape but also equips stakeholders with a more precise and actionable framework.

Each method is scrutinized to assess the likelihood of successful evasion (classified as low, medium, or high), pinpointing specific facilitators or barriers to success. This analysis is further supported with real-world case studies and hypothetical scenarios to illustrate each technique in practice. The report thereafter identifies key conclusions and policy recommendations aimed at improving existing control mechanisms.


### The Export Control Evasion Pipeline

This section explores the four elements of the export control evasion pipeline — (1) initial procurement, (2) evasion of customs controls, (3) port exit, and (4) transshipment — and component tactics and strategies within each category. Table 1 provides a short summary of each area, as well as the probability for each of evading detection. The rest of the section then unpacks each element in greater detail.

![image01](https://i.imgur.com/FF3PaIF.png)
_▲ __Summary of the Export Control Evasion Pipeline and Key Takeaways.__ Source: Author’s analysis._

#### Stage 1: Initial Procurement

Major chipmakers do not engage in direct sales to businesses. NVIDIA, for instance, routes sales through official distributors and authorized original equipment manufacturers (OEMs) and resellers. To demonstrate just how few of these entities exist, Japan, which has the largest NVIDIA sales presence in the Asia-Pacific, only has five official distributors, three authorized OEMs, and ten authorized resellers. Account managers at these intermediaries typically adhere to strict Know Your Client (KYC) procedures and assess non-association with parties on blacklists.

__THE USE OF FRONT, SHELL, AND SHELF COMPANIES__

Buyer screening relies heavily on the accurate identification of the real end user. As such, smugglers often use front and shell companies with stand-in directors or shareholders to obscure the ultimate beneficiaries. They then misrepresent the intended recipient to bypass export licensing requirements, especially for countries that face a presumption of denial. In addition, by activating long-standing but dormant shelf companies, smugglers further complicate the task of differentiating between legitimate and deceptive transactions.

_Likelihood of Evading Detection: Medium–High_

- __Human Detection: High__

    This defense-in-depth approach limits the effectiveness of even the most stringent KYC procedures, creating a disorientating maze of corporate entities that sellers must attempt to understand. Moreover, as soon as an actionable level of suspicion can be established, these companies are torn down as quickly as they were propped up. This makes quick detection and punitive action far more difficult, contributing to the proverbial “whack-a-mole” situation.

- __igital Detection: Medium–High__

    Large distributors, resellers, and OEMs often incorporate advanced KYC and Enhanced Due Diligence (EDD) tools that look beyond surface-level information, delving into the origins, financial flows, and relationships of entities.

    However, there are always workarounds. A practiced shell company might (1) conduct some legitimate business activities to establish a trail of normal commercial transactions; (2) utilize informal banking systems that are not integrated with international banking protocols for illicit transactions; and (3) generate high-quality fabricated business records and financial statements that can withstand scrutiny by standard document verification processes.

    Ultimately, the efficacy of advanced digital KYC and EDD systems rests on the integrity of the data they analyze. Compromised or fabricated data can undermine the ability of these systems to identify and flag suspicious entities.

> #### HYPOTHETICAL SCENARIO 1
> #### Operation of a Global Network of Front, Shell, and Shelf Companies

> Entity Y with ties to the defense sector in Regime X may establish a front company in another country alongside various affiliates of the shell company in third countries. It may also use a shelf company, alongside the front company, to further muddy the trail.

> Procurement agents, operating covertly on behalf of Entity Y, will orchestrate purchases of chips by the front or shelf company, which receives funding from a shell company’s foreign bank account and in turn transmits funds through a U.S. correspondent bank account to the supplier.

> Moreover, the front or shelf company may order and receive chips from multiple suppliers. In order to avoid drawing attention with large transactions, it will conduct numerous below-threshold transactions that avoid triggering transaction alerts, gradually accumulating significant holdings.

> The company will then route the goods to Regime X, often through permissive jurisdictions such as known transshipment points.

> #### `CASE STUDY 1`
> #### `Smuggling U.S. Microelectronics to Post-sanctions Russia`

_`Arthur Petrov, a 33-year-old dual citizen of Russia and Germany, was arrested on August 26, 2023, for his involvement in a scheme to illicitly transport U.S. microelectronics technology, which has military uses, to Russia.`_

_`Petrov procured the controlled microelectronics from U.S.-based electronics exporters using a Cyprus-based shell company, Astrafteros Technokosmos LTD (Astrafteros), which he operated.`_

_`Petrov misled U.S. suppliers by claiming that Astrafteros was acquiring the components for use in fire safety systems and other civilian applications, asserting that the final recipients and locations for these items were companies in Cyprus or other third countries. In reality, however, these sensitive electronics were intended for Electrocom in Russia, a company that provides equipment to Russian military manufacturers.`_

__ACQUIRING EXCESS STOCK FROM SMALLER RESELLERS AND OEMS__

Official distributors and authorized resellers and OEMs often purchase excess stock due to bulk discount incentives or to preempt potential shortages. Leading-edge chips such as NVIDIA H100s, facing tight demand-supply constraints, are unlikely candidates for stockpiling.

It is worth noting, however, that following the October 17, 2023, export controls update, controlled chips now also include high-end gaming chips and lower-performing data-center chips. Surplus stock from this expanded category may occasionally be offloaded to smaller resellers or OEMs, who may not enforce stringent KYC protocols compared to larger, established distributors. These are consequently attractive targets for smugglers.

_Likelihood of Evading Detection: High_

- __Human Detection: High__

    Industry insiders note that these lesser-known distributors may not rigorously enforce KYC procedures. This is not driven by conspiratorial intent, but simply due to a lack of capacity and an experience deficit. Smaller resellers lack the financial and human resources to invest in rigorous training for compliance and do not have the extensive experience of larger distributors, which is crucial for spotting sophisticated evasion tactics.

- __Digital Detection: High__

    As previously mentioned, there are advanced KYC and EDD tools available, but these are costly and typically out of reach for smaller resellers and OEMs in developing countries. In addition, unlike larger distributors and OEMs such as Dell or Fujitsu, they likely do not have access to databases that aggregate global information, which is necessary for effective digital scrutiny.

#### Stage 2: Evasion of Customs Controls

The range of tactics to sidestep customs can be broadly collapsed into one key facilitating factor — bribery — and four primary strategies: (1) utilizing human carriers, (2) concealing chips in ordinary commodities, (3) concealing chips in electrical products, (4) disassembling chips.

__BRIBING CUSTOMS OFFICIALS__

Corruption can facilitate several smuggling tactics. Smugglers may bribe customs officials to provide insider information on shift patterns, inspection routines, or red flags officials look for; turn a blind eye to falsified documents; or even digitally manipulate or alter customs records.

_Likelihood of Evading Detection: High_

- __Susceptibility of Customs Officials: High__

    Smugglers often have an in-depth understanding of which countries are more susceptible to corruption. As a result, they are likely to exploit customs officials in developing countries, who are often paid meager salaries. For example, a customs inspector in Cambodia, which is the second-poorest country in Southeast Asia by GDP per capita, is paid an average salary of $6,635 per year, which works out to $553 per month. According to an Economist Intelligence Unit report, it is not uncommon for frontline border officers in less developed economies in Asia to make $100 a month.

    This is not a depressed outlier number supplied to advance this point. For reference, a customs inspector in Malaysia, which is the third-richest country in Southeast Asia by GDP per capita, is still only paid an average salary of $9,336 per year, which works out to $778 per month. Accordingly, officials are less likely to be susceptible to bribery in a country such as Singapore, the richest country in Southeast Asia by GDP per capita, which has a strong anti-corruption culture and where customs inspectors are paid an average salary of $28,979 per year, or $2,415 per month.

__UTILIZING HUMAN CARRIERS__

At first glance, the use of carriers, or “mules,” might seem rudimentary, but it is worth analyzing both for completeness and its continued prevalence. This tactic has the highest likelihood of detection and is not the most efficient method for smuggling at scale.

_Likelihood of Evading Detection: Low_

- __Human Detection: Low__

    Border control screeners, faced with the overwhelming task of screening thousands of travelers, can only scrutinize a fraction in detail. However, the uniformity of the standard security protocol and internal intelligence provides a counterbalance to this challenge.

    Seasoned border control screeners are also trained to observe behavioral cues, body language, inconsistencies in travelers’ responses, and other subtle indicators that might hint at deceptive activities.

- __Machine Detection: Low__

    Full-body scanners (e.g., millimetre-wave scanners) can detect metallic and non-metallic objects as well as items hidden under clothing. However, they do not penetrate the skin and as such are unable to detect illicit goods hidden within body cavities. But unlike contraband such as drugs or conflict diamonds, hiding sensitive electrical products within body cavities may be impractical as chips, especially those on boards, are too rigid and large to be concealed in this manner and the functionality of the chips can be compromised.

> #### `CASE STUDY 2`
> #### `Trafficking of CPUs in Gongbei Port, Macau`

_`In March 2023, a smuggler was caught at Gongbei Port, the entry point from Macau to China, with 239 central processing units (CPUs) wrapped around his abdomen and legs.`_

_`Customs officials became suspicious due to his ill-fitting black clothing and strange gait. The CPUs were confiscated, and the man was detained.`_

__CONCEALING CHIPS IN ORDINARY COMMODITIES__

This tactic is a play on misdirection. Customs officials rely on the accuracy and integrity of declared goods to efficiently process vast quantities of imports and exports.

A Harmonized System (HS) code (see box below) serves as a beacon, directing authorities’ attention and shaping their expectations about a product. The use of incorrect HS codes effectively hides contraband in plain sight, making it appear as routine cargo. This makes smuggling detection an even bigger needle-in-a-haystack challenge.

> #### Primer on Harmonized System Codes

> The Harmonized System (HS) is an international framework that assigns standardized codes to traded products, facilitating global trade classification. The HS code classification is illustrated below using semiconductors as an example.

> An HS code is a six-digit number, structured in three parts:

> 1. The first two digits (HS-85) indicate the general category or chapter. For example, 85 pertains to “Electrical Machinery and Equipment and Parts Thereof.”
> 2. The subsequent two digits (.42) pinpoint subcategories within that chapter. Taking the earlier example, 85.42 specifies “Electrical Integrated Circuits; Parts Thereof.”
> 3. The final two digits (.31) provide even greater detail. For instance, 85.42.31 is reserved for “Processors and Controllers.”

Accordingly, controlled chips can be hidden in almost any conceivable manner. Semiconductors (HS 85.42.31) could be concealed in a bag of rice (HS 10.06.30), hermetically sealed in a barrel of crude oil (HS 15.15.11), or simply hidden in a consignment of electronic waste (HS 85.49.39).

_Likelihood of Evading Detection: Medium–High_

- __Human Detection: Medium–High__

    The vast majority of customs checks are routine. Ordinary commodities are handled with a cursory, less suspicious eye with customs officers inadvertently adopting a pattern of expedited checks for such goods.

    Even well-trained officers might miss chips adeptly hidden within routine shipments, especially if the overall shipment does not raise suspicions. Additionally, the compact size of chips makes this a “needle-in-a-haystack” challenge. A smuggler could discreetly hide as many as 609 H100 graphics processing units (GPUs) in just one small FedEx freight box, which would be outwardly indistinguishable from other identical boxes.

    However, many customs personnel are trained to recognize common smuggling tactics and are aware of the propensity to hide illicit goods in everyday shipments. As a countermeasure, random intensive checks are conducted, even on seemingly mundane shipments. In addition, customs officials have databases that store information on previous shipments. As a result, a sudden change in the pattern, frequency, or nature of shipments from a particular company or to a particular address can raise suspicions.

- __Machine Detection: Medium__

    While the dimunitive size of GPUs can make them nearly imperceptible, especially when masked among bulkier items, they are still likely to show up on modern X-ray scans. X-ray and scanning technologies are also continually improving. Dual-energy X-ray systems can distinguish between organic and inorganic materials, potentially flagging a semiconductor hidden within a bag of rice.

> #### `CASE STUDY 3`
> #### `Concealment of Intregrated Circuits in a Wood Pulp Consignment`

> _`In June 2023, Hong Kong customs officers seized $153.4 million worth of new integrated circuits stashed in 15 shipping containers. X-rays of the 15 containers, declared to be carrying wood pulp, revealed suspicious images. Two boxes containing wood pulp were placed at the top of each container, underneath which contraband items were stored.`_

__CONCEALING CHIPS IN ELECTRICAL PRODUCTS__

Smugglers may disguise chips within the casings of other electronics such as power supply units or modified computer cases, which would naturally house similar-looking circuitry and components. More concerning, however, is the potential concealment of GPU servers within high-performance workstations or even commercial servers.

Here, GPU servers, which are crucial for enabling high-performance computing with minimal latency at the data-center scale, could be made to look like standard, non-descript internal components and will be less likely to arouse suspicion than when hidden within ordinary commodities.

_Likelihood of Evading Detection: Medium–High_

- __Human Detection: Medium–High__

    Everyday electronics are likely to experience relatively expedited checks. Unless specially trained, officers may overlook embedded chips in an otherwise ordinary-looking electronics product, especially if there is no external indication of tampering. However, some major customs checkpoints could employ electronics experts for random reviews. These experts, familiar with the architecture of common devices, might spot irregularities.

    If customs receives a tip or is randomly conducting in-depth inspections, the physical feel, weight, or even the boot-up process of a tampered laptop, for example, could give away the presence of an embedded chip.

    Moreover, as previously mentioned, customs officials have databases that store information on previous shipments, and sudden changes to the pattern, frequency, or nature of electronic shipments could be a red flag.

- __Machine Detection: High__

    Even with X-ray inspections, the embedded chips will appear like integral components, effectively camouflaged among the device’s internal components. However, laptops or devices embedded with non-standard components might produce more heat or even specific sounds under operation. Such differences, if detected, could alert inspectors during a power-on test.

__DISASSEMBLY OF CHIPS__

Smugglers could deconstruct chips into their constituent parts, which are no longer classified as controlled chips by HS code, effectively bypassing export controls. This would mostly be used for the purposes of reverse-engineering advanced chips, as the process of disassembling or delayering a chip is damaging. Once a chip undergoes this process, it likely cannot be restored to its original functional state.

> #### Hypothetical Scenario 2
> #### Disassembling Chips

> Technically, a chip can be disassembled, but not in the traditional sense of taking apart larger mechanical assemblies. Instead, “disassembling” a semiconductor chip usually involves chip “decapsulation” and “delayering.” It is typically done for purposes such as failure analysis, competitive analysis, research, and intellectual property verification.

> First, the protective package needs to be removed through decapsulation. This can be done one of two ways:

> 1. Chemical decapsulation, which uses strong acids or bases to dissolve the package
> 2. Mechanical decapsulation, which involves grinding, polishing, or cutting away the package

> Delayering describes the process by which the many layers of an integrated circuit can be removed one by one. This process can involve various methods:

> 1. Wet etching, where the chip is dipped in specific chemicals to dissolve certain layers while leaving others intact
> 2. Dry etching, which uses plasma or ions to selectively remove layers
> 3. Mechanical polishing, which uses very fine abrasives to polish away the top layer without damaging the underlying structures

_Likelihood of Evading Detection: High_

- __Human Detection: High__

    Disassembled semiconductor components, if high in volume and lacking distinctive, recognizable features, may not raise suspicions or warrant detailed inspection against their declared descriptions, particularly when inspections are based on random sampling or partial checks of shipments. As the smuggling technique becomes known, customs may employ experts to recognize disassembled chips, although there will be a time lag.

- __Machine Detection: High__

    Standard X-ray examinations would merely reflect components as inconspicuous, smaller semiconductor fragments, bypassing customs scrutiny.

#### Stage 3: Port Exit

There are a range of tactics smugglers use, but three are worth highlighting: (1) leveraging private couriers; (2) contaminating containger cargo; and (3) use of submersible vessels.

__LEVERAGING PRIVATE COURIERS__

Smugglers often prefer private courier services, which typically apply less rigorous inspection protocols than major, well-established companies. Smaller private couriers might be more susceptible to inducements or bribes due to the nature of their operations and potential financial pressures. In contrast, established logistics providers have more to lose and are less likely to risk severe penalties or reputational damage for illicit gains.

Larger companies also adhere to predetermined routes, minimizing the chances of clandestine diversions that could be used to bypass regulatory checkpoints. Moreover, they often partake in collaborative platforms that allow for real-time information sharing with customs and other regulatory authorities, fostering an environment of cooperation and compliance.

Moreover, established logistics providers have more compliance capabilities at their disposal. Larger companies utilize advanced package screening technologies. They also maintain thorough and standardized document verification procedures, employing expert personnel trained to detect discrepancies that may indicate smuggling. For instance, global logistics giants such as UPS engage security vendors for the express purpose of screening cargo items (see below).

![image02](https://i.imgur.com/bU7Slb8.png)
_▲ __UPS Cargo X-Ray Screener Job Ad.__ Source: The posting is no longer online but was available at [“Jobs & Careers: Cargo Screener,” UPS, September 2023](https://www.jobs-ups.uk/job/stansted-mountfitchet/cargo-screener/20477/54285091248)._

_Likelihood of Evading Detection: Medium–High_

- __Initial Detection Prior to Leaving Port: High__

    There are a number of tools that private couriers, unlike major global logistics companies, do not have:

1. Advanced inspection equipment, which results in less detailed or less accurate scans, potentially allowing contraband to pass through undetected

2. Standardized operating protocols, leading to variability in the depth and thoroughness of inspections

3. Comprehensive training programs or intelligence sharing on emerging threats, which can lead to oversights or missed cues of smuggling activity

    In addition, private couriers, especially smaller-scale operations, may be more vulnerable to internal collusion or corruption.

- __Subsequent Detection: Medium–High__

    Smugglers could use less-traveled maritime routes to sidestep routine patrol routes. Furthermore, the compact size of their vessels might make them less detectable in open waters, providing an edge in evasion. However, private couriers, being lesser-known entities compared to giants such as UPS, might be viewed with a greater degree of suspicion by maritime patrols, leading to more frequent random inspections.

__CONTAMINATING CONTAINER CARGO (“RIP-ON, RIP-OFF” METHOD)__

One concealment strategy frequently employed by drug syndicates, especially from Brazil, involves exploiting legitimate, often containerized shipments. In this method, illicit cargo is secretly added to a legitimate shipment without the knowledge of the shipper or consignee. According to TradeWinds, the world’s biggest shipping news service, “drug traffickers can open a shipping container and remove a 100-kilogram consignment of cocaine in as little as three minutes.”

For the strategy to work, collaboration is necessary at both the origin and destination. At the departure dock, the insertion or “rip-on” team introduces the illicit goods into the selected container. To mask any interference, they frequently replace the genuine security seal with a counterfeit. At the destination port, retrieval of the concealed items is crucial. This is either done by compromised port staff or by specialized extraction or “rip-off” teams who infiltrate the terminal. After this operation, the container might be either left unsealed or be relocked with another duplicate seal. Locating such containers in large terminals is a challenge. Simply knowing the container identification number is insufficient; it must also be easily reachable, which often demands insider help to adjust the placement of the container.

> #### `CASE STUDY 4:`
> #### `“Rip-On, Rip-Off” Cocaine Container Bust at Port Botany`

_`Authorities detained two individuals in Sydney following the discovery of 120 kilograms of cocaine, valued at approximately $60 million, concealed within a shipping container they were attempting to break into.`_

_`The pair from Athens were suspected to be local operatives involved in a compromised “rip-on, rip-off” narcotics trafficking scheme. The police interception was prompted by a reported break-in at a Port Botany logistics firm, situated in the vicinity of Sydney’s main maritime terminal, where they uncovered 120 bricks of cocaine, each weighing one kilogram.`_

_Likelihood of Evading Detection: High_

- __Initial Detection Prior to Leaving Port: High__

    By embedding illicit items within genuine shipments, the chances of arousing suspicion are reduced. Since the original shippers and consignees are typically unaware that their containers are being used for smuggling, their documentation and behavior do not raise red flags. With the right network and bribed officials, the drugs can be successfully loaded onto containers without drawing attention.

    However, the process of breaking and replacing the container seals, even if replaced with duplicates, can sometimes be detected if the seals are not placed correctly or if there are visible signs of tampering.

- __Subsequent Detection: High__

    If smugglers successfully load chips onto containers of a reputed logistics provider, the odds of detection decrease significantly for several reasons. First, large logistics providers have built a trustworthy reputation over years, and maritime authorities are less likely to scrutinize these companies as intensely as smaller or less-known shippers. Second, if smugglers manage to bypass the advanced security measures of reputed logistics providers, it may create a false sense of security for officials. However, there are still risks from intelligence tip-offs.

__USE OF SUBMERSIBLE VESSELS__

Drug smugglers have been known to use smaller semi-submersible and even fully submersible vessels, particularly from South America to the United States, to evade radar and visual identification.

Data from the European Monitoring Centre for Drugs and Drug Addiction suggests that larger crewed vessels can transport as much as eight tons of cocaine, a load potentially valued at over $1 billion. According to Colombian navy estimates, the average cost to the drug smugglers for one of these boats is just under $1 million, making this a potentially higly profitable smuggling method.

_Likelihood of Evading Detection: High_

- __Initial Detection Prior to Leaving Port: High__

    Chips are precision engineered and susceptible to environmental factors. Loading them onto submersible vessels demands specialized handling and extended timeframes, necessitating remote loading locations. Countries with sprawling coastlines, underdeveloped maritime infrastructure, and often lax maritime surveillance offer numerous such potential locations.

    However, major ports are equipped with comprehensive CCTV systems, frequent patrols, and stringent entry and exit procedures. Any unexpected loading activities, especially involving atypical vessels such as submersibles, would likely raise alarms.

- __Subsequent Maritime Detection: High__

    In addition to having a low radar signature and being able to submerge quickly when maritime enforcement is detected, submersibles, especially those used in illicit activities, are engineered to be as stealthy as possible. The following are examples of such measures:

1. A reduced acoustic profile (e.g., quieter engines, vibration-damping materials, streamlined shapes) to evade passive sonar systems

2. Air-independent propulsion systems to reduce heat emissions

3. Remote guidance or onboard autonomous systems, which allow them to run riskier routes and further reduce their acoustic profile (e.g., no need for life-support systems)

In addition, they often employ advanced logistics tactics, such as deploying a network of fishing vessels to alert crews about nearby patrols or utilizing offshore refueling vessels to bypass coastal areas.

> #### `CASE STUDY 5`
> #### `Narco-Submarines in Costa Rica`

_`During the 1980s, go-fast boats were the smuggling vessel of choice in many parts of the world. Go-fast boats became more vulnerable to radar detection as radar technology improved, leading to the development of semi-submersibles.`_

_`In the 1990s, there were rumours that smugglers were using vessels that were nearly fully submersible to reduce detection by visual, radar, sonar, or infrared systems. However, it was only in 2006 that the U.S. Coast Guard successfully seized a 50-foot narco-submarine with three tons of cocaine some 166 km southwest of Costa Rica.`_

#### Stage 4: Transshipment

Upon leaving the initial port, smugglers may redirect the chips for consistency to a third country where customs controls are less stringent. To further obfuscate the trail, they often engage various intermediaries, utilize diverse transportation methods, and transship the chips through multiple countries, further muddying the trail (see Hypothetical Scenario 3).

> #### Hypothetical Scenario 3
> #### A Sample Transshipment Journey

> __Country A → Country B__

> __Diversionary Tactic:__ Smuggler X first moves the chips overland to Country A, classifying them as generic computer parts for a technology roadshow in a provincial city. In reality, they never make it there. They are rerouted to a small coastal village and loaded onto a fishing vessel.

> __Country B → Country C__

> __“Lost Cargo” Tactic:__ Near Country B, the chips are reportedly “lost at sea.” Instead, they are actually anchored and buoyed just beneath the surface, waiting for retrieval by another party. A recreational diving group (in on the operation) “discovers” the “lost cargo.” They retrieve it and bring it to a port in Country C.

> __Country C → Country D__

> __Shell Companies and Ghost Transactions:__ In Country C, a shell company purchases the “recovered treasure” and then sells it to another entity in Country D as antique electronics for collectors.

> __Country D → Country E__

> __Container Mixing:__ Once in Country D, the chips are embedded within laptops. The products (and chips hidden within) are loaded into containers and shipped to Country E with proper customs declarations for electronics.

> __Country E → Country F__

> __Trade Show:__ Upon arrival in Country E, the chips are quietly retrieved and repackaged inside dummy prototypes of new technology devices. A buyer from Country F visits the trade show and purchases these prototypes as cutting-edge technology from Country E.

> __Country F → Country G__

> __Extraction of Chips:__ Here, the chips are extracted by an intermediary agent and sent to Country G.

> __Country G → Country H__

> __Final Journey Overland:__ The final purchaser, having trustworthy trade relations with Country H, sends the devices overland.

_Likelihood of Evading Detection: High_

- __Cumulative Detection: High__

    The use of multiple third countries as transit points compounds the difficulty of detecting illicit cargo. Even if each individual country has a seemingly manageable risk of detection, by exploiting interstitial gaps between each transit point, the cumulative probability of evasion drastically increases.

    Transshipment is not just about the simple math of probabilities. It is about deliberately and tactically manuevering through a patchwork of customs controls, always seeking the path of least resistance and exploiting the unevenness of the regional and international enforcement landscapes.


### Key Observations

#### Early interdiction is more effective than reactive enforcement.

Studying the pipeline of export control evasion (see Table 1), there is a noticeable increase in the difficulty of detecting evasion tactics from Stage 1 (the initial procurement of chips) to Stage 4 (the transshipment phase). As soon as illicit goods depart the port of origin and get funneled through transshipment networks, the supply chain becomes a tortuously fragmented puzzle. Untangling this knotted snarl often requires vast resources, regional and international cooperation, and, often, specific intelligence, making the task daunting for even the best-equipped customs and enforcement agencies. A superior approach is therefore to focus on mitigating export control evasion risks upstream rather than downstream. To the extent possible, it is necessary to dam the river at its source, as neglecting to do so allows the stream to branch out unpredictably.

#### Focus should be placed on improving detection capabilities in third countries, not just BIS enforcement.

Most extant proposals focus on increasing the BIS’s resources to enhance its enforcement capabilities. But if detection precedes enforcement, and if the challenges of doing the former are non-trivial, then perhaps these efforts are putting the horse before the cart. Moreover, given how understaffed and underinvested the BIS continues to be despite the pleas of key voices, can it reliably be expected to police global smuggling networks that span scores of countries, each with multiple ports? Importantly, this singular dependence on the BIS introduces a single point of failure. The BIS may not always recognize specific localized tactics used in transshipment hubs.

#### Capacity building is more constructive than punitive actions.

This report suggests a corrective in the nature of U.S. engagement with third countries. There is too often an assumption that countries that are key transshipment hubs are directly abetting illicit networks. This shapes the language for necessary instruments such as sanctions, country quotas, and outright bans.

This report finds that seven out of eleven of the smuggling tactics identified are more likely to happen in developing countries, which often have poor customs infrastructure. This lack of ability to identify smuggling is not due to wilful negligence but a consequence of infrastructural gaps. These nations typically cannot afford advanced X-ray and scanning technologies (e.g., dual-energy X-ray systems), next-generation KYC and EDD software, or experts who may more reliably spot irregularities, such as chips concealed in electronic products. In addition, such ports are commonly not equipped with comprehensive CCTV systems or stringent entry and exit procedures.

Counterintuitively, technonationalism may demand that the United States find greater security not by turning inward but through outward engagement and extending support for capacity building in select third countries. Otherwise, these countries are unlikely to independently invest in improved export control compliance measures themselves (see next observation).

#### Understanding partner countries’ incentives is crucial.

Historically, the focus of national customs agencies has been on import controls rather than export controls. This was shaped by the demands of collecting tariffs and protecting domestic industries from foreign competition, as well as the assumption that outbound goods, which contribute to national wealth through trade surpluses, pose less of a risk. The emergence of dual-use goods has heightened the necessity for export controls, but a marked imbalance persists between the attention given to import controls versus export controls at the national level.

While the United States might emphasize the importance of increased export control measures, many customs agencies will not prioritize them. Having too restrictive a compliance sieve detracts from their core focus, which is to facilitate trade and increase port revenues. As such, in urging partner nations to increase their efforts, the United States must consider such countries’ domestic priorities. Ultimately, the primary mission of these countries’ customs agencies is to advance their own national development goals, not to aid the United States in its AI ambitions.


### Detailed Policy Recommendations

Given the challenges of detecting illicit consignments after they become obscured in transshipment networks, policymakers should focus on upstream sections of the smuggling pipeline, from the initial procurement of chips to before it leaves the port of origin. Importantly, these recommendations should be agreeable to and easily implementable by third countries. They should also be business-friendly, meaning they should be as frictionessless as possible and paired with incentives to match or dampen obligations. Regulatory interventions that work with the market are almost always more effective than those that swim upstream against it.

Lastly, to allay the reflexive reactions of U.S. policymakers to the phrase “capacity building,” the three recommendations proposed here are entirely modest. They include workshops, a regional unit that will only require two to four BIS personnel with shared commitments from partner countries, and the provision of modern analytics software.

#### Recommendation 1: Mandate use of custom digital waybills and preapproved logistics providers.

A custom digital waybill for chips, incorporating a unique identifier, can mitigate the risks associated with the falsification of customs documents. Digital authentication further ensures the integrity of the waybill, making it difficult for smugglers to forge documents without detection. These waybills will be integrated with sales procedures as well as digital sales platforms for ease of business incorporation, and will include several key features:

1. __A Unique Identifier:__ A unique QR code or equivalent tag for easy, tamper-proof scanning

2. __Digital Authentication:__ Digital verification mechanisms to ensure the authenticity and integrity of the waybill

3. __Item Specifics:__ Details that clearly state the nature of the controlled item as well as its quantity, value, origin, and destination

4. __Logistics Providers Details:__ Details of the logistics provider, including its preapproval status

5. __Standardized Sections:__ Sections for customs officials to stamp or digitally sign upon inspection, ensuring traceability at every checkpoint

Furthermore, purchasers of chips will only be permitted to use prescreened logistics providers and routes. The buyer must identify their logistics provider of choice at the point of sale. Failure to do so should lead to cancellation of the sale. Tagging shipments at the point of sale enhances the BIS’s ability to efficiently conduct targeted audits. Logistics providers will be mandated to report to the BIS monthly on any consignments not received within a specified timeframe of two to four weeks. This process will flag discrepancies between recorded sales and actual shipments, facilitating swift spot checks on vendors identified as potential weak links. This will also better pinpoint suspicious entities that could be operating as front, shell, or shelf companies.

The criteria for preapproval of logistics providers should broadly include the following:

1. __Operational Integrity:__ A five-year track record that includes major incidents, policy breaches, or violations

2. __Technological Capabilities:__ Adoption and integration of advanced package screening technologies

3. __Employee Training:__ Regular training for employees handling controlled items

4. __Background Checks:__ Mandatory checks for staff involved in the shipping of controlled items

5. __Financial Assessment:__ Financial audits to ensure stability and solvency (a company in good financial standing is typically less prone to corrupt practices)

6. __Documentation Adherence:__ A demonstrated record of correctly filling, maintaining, and providing necessary shipment documentation

7. __Route Security:__ An assessment of chosen routes, favoring direct routes over transshipments to minimize risks

8. __Collaboration with Customs:__ Established rapport and history of cooperation with customs and enforcement agencies in the region

In addition, to incentivize the use of the waybill by distributors and resellers, this report proposes implementing a revenue-sharing program where distributors and resellers receive a small percentage of the transaction fee from every digital waybill issued. This turns compliance into a direct revenue stream. As for logistics providers, those who submit to BIS audits after the first year will be eligible for green-lane customs treatment in ports of call. In addition, there is room for negotiation with insurance companies to offer lower premiums for shipments that use digital waybills, as they are easier to track and thus present a lower risk of theft or loss.

#### Recommendation 2: Require compulsory certification for official distributors, resellers, and logistics providers.

Promoting a culture of compliance relies on a willingness on the part of exporters to comply with controls. While there certainly will be companies or individuals seeking to willfully circumvent or violate export controls, as mentioned previously, smaller resellers may inadvertently do so out of a lack of awareness or due to limited capacity. Hence, they should not be indiscriminately excluded entirely.

This recommendation seeks to reduce evasion, particularly among these unintentional violators. But in order to be added to the approved list, they will have to undergo and complete the requirements of a certification workshop alongside official distributors, authorized OEMs and resellers, and logistics providers. To ensure that the new policy on custom waybills and use of preapproved logistics providers is well comprehended and implemented by these stakeholders, this report proposes holding a series of targeted capacity-building certification workshops.

__CERTIFICATION WORKSHOP CURRICULUM__

The proposed certification workshop should focus on the following goals:

1. Outline in detail U.S. regulations surrounding the export of controlled chips.

2. Conduct training on emergent tactics used by smugglers and how to spot and report front, shell, and shelf companies using easy-to-understand KYC guidelines (see sample guidelines below).

3. Explain the rationale for the custom waybills as well as criteria for preapproval of logistics providers.

4. Provide hands-on sessions on how to correctly fill and process custom waybills.

5. Provide distributors and logistics providers with technical assistance to integrate the waybill system with existing inventory and sales software.

__CERTIFICATION WORKSHOP MODALITY__

The workshop will be facilitated by BIS export controls experts and customs officials from partner countries in an interactive format consisting of a detailed presentation, case studies, and a Q&A session with hands-on practice. There should also be recorded versions for remote stakeholders or those unable to attend in person, with periodic live Q&A sessions. If possible, e-guides, video tutorials, and FAQs should be made available on a dedicated portal. To reduce costs, this can be integrated to the extent possible with existing capacity-building work that BIS is already undertaking.

__CERTIFICATION WORKSHOP EVALUATION__

An evaluation will be conducted following the workshop by either a BIS or customs official from the host country to ensure comprehension. This could include a mix of multiple-choice questions, waybill filling exercises, and scenario-based questions. Successful participants will receive a certificate, which will be a prerequisite for being listed as an approved distributor, reseller, or logistics provider. This will cost little beyond the logistical costs of organizing the workshop.

__RECERTIFICATION AND REVOCATION__

Considering the dynamic nature of the industry and the regulatory landscape, periodic refresher workshops should be held at least annually. Updates or changes to the policy can be communicated during these sessions. Moreover, authorized sellers found negligent in conducting KYC procedures during BIS audits or random spot checks risk revocation of their certification.

__SAMPLE KYC GUIDELINES (RED-FLAG INDICATORS)__

1. Watchlist Matches: The customer, their address, or affiliated parties resemble entries on the Commerce Control List.

2. Business Mismatch: The chip’s capabilities are inconsistent with the customer’s purported business activities (e.g., an advanced GPU order for a steel mill).

3. Unusual Payment Methods: The customer prefers to pay in cash for high-value orders, despite more standard financing or credit terms being available.

4. Declined Services: The buyer turns down standard post-purchase offerings, such as installation or training.

5. Sketchy Business Background: The customer lacks a clear business history, previous transactions, or an online presence.

6. Lack of Product Familiarity: The customer shows little knowledge about the chip’s specifications and capabilities but is insistent on the purchase.

7. Ambiguous Delivery Details: The order has vague delivery dates or requests for delivery to remote or unusual destinations.

8. Unusual Routes: The proposed transportation route is circuitous or unusual for the given product and end destination.

9. Inconsistent Packaging: The packaging requested does not match the method of shipment or seems overdone or inadequate for the type of product.

#### Recommendation 3: Set up dedicated regional units consisting of BIS staff and secondees from partner countries and incorporate use of modern data analytics.

__SETTING UP A DEDICATED REGIONAL UNIT__

National customs operations have historically been driven by revenue collection and import controls, relegating the task of export controls to the periphery. While the United States might emphasize the importance of such controls, many customs agencies do not prioritize them. Moreover, the infrequent cases related to export control evasion result in an experiential deficit among customs staff, further diminishing its precedence. For reference, even in Germany, the European Union’s largest exporter, the number of criminal proceedings relating to export control violations processed each year is relatively low, in the double digits.

This paucity, coupled with the complexity of such cases, has deterred the establishment of specialized procedures or dedicated departments to detect export control evasion. Consequently, this limited exposure leaves customs officers and even prosecutors and judges ill-equipped to credibly deal with export control evasion cases, potentially overlooking critical aspects due to insufficient experience or a lack of technical or legal familiarity.

As such, to improve risk profiling, interdiction, investigation competence, and intelligence sharing, this report recommends the formation of a dedicated regional unit comprised of two to four specialist advisory experts from the United States, along with secondees from partners’ customs authorities. In this model, when a frontline officer detects a suspicious transaction, they can immediately seek guidance from the specialized team. In turn, the unit proactively disseminates its intelligence to partner countries. This model takes reference in part from specialized national units like in the Netherlands (see Case Study 6).

However, the efficacy of this system depends on robust interagency information sharing at both the national and international levels. Collaboration between customs and intelligence agencies is paramount. This will necessitate granting security clearances for both U.S. experts and secondees in the risk-profiling unit. Furthermore, intelligence data will need to be transformed into a redacted, yet actionable format, ensuring broader dissemination within the customs department without compromising sensitive information.

> #### `CASE STUDY 6`
> #### `A Specialized Team in the Netherlands`

_`In the Netherlands, a specialist team, Precursors, Strategic Goods and Sanctions (POSS), is responsible for the enforcement of export controls and sanctions under the customs administration. POSS monitors and enforces exporters’ compliance and can also conduct (criminal) investigations. To perform its tasks, the team has the power to demand extensive information from any entity (e.g., manufacturers, traders, and brokers) that deals with the export of dual-use and military goods, including the right to access company premises.`_

__USE OF MODERN DATA ANALYTICS__

This leans on the work by Gregory C. Allen, Emily Benson, and William Alan Reinsch in their paper “Improved Export Controls Enforcement Technology Needed for U.S. National Security,” which recommends the incorporation of data-driven approaches in place of the dated software and databases BIS currently uses. However, whereas their recommendations focus on improving the BIS’s detection capabilities, this recommendation instead looks at improving detection at the customs level, which are the physical points of failure.

To be clear, ensuring that the Commerce Control List is improved and regularly updated to pinpoint companies affiliated to bad-faith actors or regimes is crucial to ensure that ports downstream can more effectively sift out front, shell, and shelf companies. However, this also introduces a single point of failure in the detection system due to the reliance on the BIS to fulfill its role perfectly. Furthermore, the BIS might not always recognize specific tactics used in major transshipment hubs.

Consequently, the United States should collaborate with partner countries and key circumvention nodes to incorporate modern data analytics for improved detection of evasive entities. Below is a sample implementation strategy.

_Sample Recommendations to Enhance Surveillance Capabilities to Detect Evasive Actors_

- __Customized Risk Profiling:__ Implement machine-learning algorithms tailored to each port’s unique profile to auto-score incoming and outgoing shipments based on the history of evasive activities and identified patterns.

- __Supply Chain Analysis:__ Employ supply chain analytics tools to trace the origins and destinations of shipments, identifying unusual routes or odd combinations of cargo that might indicate evasion tactics.

- __Real-Time Vessel Monitoring:__ Integrate real-time tracking systems to monitor vessel movements, especially those taking irregular routes or making unexpected stops, often indicators of evasive or illegal activities.

- __Advanced Document Verification:__ Introduce optical character recognition (OCR) and natural-language processing (NLP) systems to scan, verify, and highlight discrepancies in shipment documents, bills of lading, or manifests.

- __Port Data Integration System:__ Consolidate data from different ports to create a holistic database, improving collaborative efforts in detecting evasive actors across the continent. This system can track entities as they move through various checkpoints, making evasion harder.

- __Behavioral Analytics:__ Utilize algorithms to study behavior patterns of freight forwarders, shipping companies, and other stakeholders. A sudden change in patterns could be indicative of evasive or illicit activities.

- __Collaborative Stakeholder Reporting:__ Foster an environment where port staff, customs officials, and third-party stakeholders can anonymously report suspicious activities, with the system analyzing these reports for recurring patterns or concerns.

- __Dynamic Sanctions and Blacklist Checks:__ Integrate updated international and regional sanctions lists and run real-time checks on entities, ensuring that any newly blacklisted or suspicious entities are promptly flagged during transactions.


### Conclusion

The insights in this report are admittedly mostly qualitative. However, it seeks to provide a sufficient base for readers to infer the complexities of export control evasion through straightforward inductive reasoning.

The recommendations in this report also likely do not go far enough. Recent compute governance proposals suggest establishing a “tracking regime” to monitor the distribution and ownership of AI chips. However, practical implementation details of how chains of custody and a chip registry can be established in such a scheme remain largely poorly defined. In addition, the privacy challenges of doing so have not been sufficiently addressed. For example, when Intel introduced the Pentium III processor in 1999, which had a unique serial number embedded in each chip, the ensuing privacy backlash caused Intel to hastily create a disablement tool and exclude serial numbers in subsequent chip models. This is why this report proposes the less invasive and more modest recommendation of a waybill with a unique identifier instead.

Lastly, the recommendations proposed in this report will likely be imperfect. Determined smugglers will try to hack the waybill system by forging or altering it. Shell companies will still overcome enhanced KYC checks and engage private couriers. But this is precisely the point. Export controls are an inherently leaky instrument. Guiding principles must therefore be practical. What chokepoints in the smuggling pipeline can realistically be targeted, thereby sufficiently increasing both the cost of compliance and the likelihood of good-faith actions? It is not about guaranteeing success, but defining the level of failure that is acceptable.

---

__Barath Harithas__ is a non-resident adjunct fellow with the CSIS Project on Trade and Technology and has held diverse public service roles in Singapore spanning the U.S.-China relationship, international trade, and AI standards.
