---
layout: post
title : Countering Small UAS
author: Shaan Shaikh, et al.
date  : 2023-11-14 12:00:00 +0800
image : https://i.imgur.com/ZjwdxXk.jpg
#image_caption: ""
description: "Air Defense by and for the Joint Force"
excerpt_separator: <excerpt/>
---

_This report examines the threat of small drones on the modern battlefield, and the various kinetic and non-kinetic defenses available to defeat them._

<excerpt/>

### Key Findings

- For years, air defense has been the domain of specialized units and niche capabilities under conditions of air superiority. That era is no more, and the entire joint force must now look up. Small uncrewed aerial systems (sUAS) pose a significant threat, exhibiting multi-mission capabilities, minimal signatures, wide proliferation, low costs, and ground force utility. The common use of sUAS today amplifies other trends in modern warfare, including further complicating the airspace, saturating battlefields with more reconnaissance and strike assets, and expanding support for precision strike complexes. Their introduction is comparable to that of mortars and anti-tank missiles in the degree for which they have and will continue to push ground forces to adapt their tactics, techniques, and procedures.

- The mission and capabilities to counter sUAS (C-sUAS) should be shared across numerous unit types, including air defense, maneuver, support, and sustainment. The high demand and low density of air defense formations requires that air defenders and non-specialists work together as part of a combined arms for air defense (CAFAD) approach. The central question today, however, is the specific division of labor among the air defense and non-air defense units, as well as the authorities delegated to these groups. In general, C-sUAS planners have borrowed the distinction between “area” and “point” defense whereby traditional air defenders manage larger systems such as high-energy lasers and long-range kinetic interceptors for area defense, while maneuver forces use point defenses such as guns, nets, and handheld platforms.

- U.S. C-sUAS acquisition processes require updating to keep pace with evolving threats. The Joint Counter-small Unmanned Aircraft Systems Office (JCO) was stood up to coordinate C-sUAS doctrine, organization, and training across the joint force. Congressional and Department of Defense (DoD) leadership should consider modifications to JCO’s authorities and relation to service acquisition agencies to improve the requirements process and acquisition timelines.

- Air defense has multiple meanings and connotations, especially in terms of service-specific terminology. As a mission, air defense destroys, nullifies, or reduces the effectiveness of enemy attacks by aerial platforms. Defined organizationally, it connotes force structure responsibilities, such as the Army’s Air Defense Artillery branch, or specific units manned, trained, and equipped to detect, track, and defeat aerial threats in specified sectors or altitudes. Because sUAS represent a distributed challenge to the entire joint force, C-sUAS operations cannot be confined to a single unit or specialization. C-sUAS developers, planners, and operators must overcome organizational silos.

- A variety of kinetic and non-kinetic capabilities are available to defeat sUAS. Over the past several years, the DoD has fielded a range of electronic attack and kinetic systems in support of joint and service urgent needs requests. Each of these tools have unique strengths and weaknesses in regard to survivability, range, magazine capacity, combat identification, and defended area.

- The institutionalization and propagation of C-sUAS capability will require developments across doctrine, organization, training, materiel, leadership and education, personnel, and facilities (DOTMLPF). Training and capacity requirements will take priority over capability improvements over the next few years. New doctrine should specify the division of labor between air defense and non-air defense specialists, as well as the specific sensors, command and control, and effectors that they can operate. The policy, strategy, budget, and programmatic decisions made at this stage will carry enormous consequences for the field.


### Introduction

Over the past decade, sUAS have become a core capability on the modern battlefield. Many are commercially sourced, easy to deploy, hard to detect, and highly proliferated. State and nonstate actors alike use them around the world in major conflicts, gray zone and criminal activities, and targeted killings. Technological advances in sUAS optics and sensor miniaturization have made them increasingly versatile as a primary reconnaissance tool, including for targeting for larger artillery and missile strikes. sUAS will continue to present a serious threat to military targets and civilian population centers.

Numerous studies have highlighted the sUAS threat. A few have reviewed C-sUAS platforms and capabilities. Yet to date, there appears to be no public-facing report that assesses C-sUAS history, strategy, and programs, across the DOTMLPF. This report tries to fill that gap from the perspective of the U.S. military.

The C-sUAS mission is a challenging one. The threat is cheap and plentiful, whereas defenses are still emerging and bring significantly higher costs. Attribution can be difficult, complicating deterrence through retaliation. It remains unclear whether the active defense solutions currently in development will become programs of record; if investments in time, money, and personnel will continue to support this mission; and how well the multiple services involved can coordinate on developing and deploying their active defenses. While the U.S. Army is the lead service for developing joint doctrine, requirements, materiel, and training, the C-sUAS mission is not and must not be limited to one service, branch, or specialization. It is a concern for the entire joint force.

Air defense has continually evolved to meet new threats and challenges, from surveillance balloons to bomber aircraft to ballistic and cruise missiles. The threats have gotten smaller, harder to detect, and more sophisticated over time. At numerous moments along the way, a given threat will be deemed unstoppable — until, of course, defenses evolve to prove that assumption incorrect. C-sUAS represents the next chapter for the evolution of the air defense mission.

Fortunately, the DoD today recognizes the importance of C-sUAS. Nearly a decade ago, ISIS militants began using commercial quadcopters effectively in battle. In January 2020, the DoD established the JCO to rapidly prototype, test, demonstrate, and field new defenses. More recently, the Biden administration’s 2022 Missile Defense Review included C-UAS as a component of the defense against “missile-related” threats.

With doctrine, organizations, materiel, training, and other issues under debate today, the United States and its allies face a critical period with sUAS and C-sUAS. High levels of sUAS proliferation, little to no regulatory oversight, and improved capabilities, technologies, and integration all converge to create an environment in which the U.S. military must respond to a rapidly evolving threat. Contributors to these conversations must understand the threat and its likely evolution, the defenses available and in development today, and the principles that should guide their application. For better or worse, the policies and institutions developed today will last for years to come.

![image01](https://i.imgur.com/6ElHChK.png)
_▲ __Figure 1: Drone Evolution.__ Source: U.S. Army and Wikimedia Commons._

#### Research Scope and Objectives

This report discusses current C-sUAS defenses used to detect and defeat small drones. It serves as a guide for understanding and evaluating C-sUAS solutions, both to inform policymakers by providing principles for future developments in this field, and to inform the public on a key defense issue for which there is a gap in the open-source literature. The report explores the trade-offs among various C-sUAS sensor and effector types but does not advocate for any particular solution set. It also does not address sUAS counterproliferation and regulation efforts, offensive “left-of-launch” strikes, camouflage, deception, signature management, nor other topics related to but not centered on active defense. Furthermore, it does not address specific operational or tactical issues, such as UAS notification procedures or how U.S. personnel should coordinate intercept engagements with allies. These processes are better addressed by U.S. military leaders as they update their related doctrine and standard operating procedures.

The study focuses closely on C-sUAS for the DoD, as primarily operated by the U.S. Army and Marine Corps. There are several other U.S. stakeholders in this field, including the Department of Justice, Department of Homeland Security, and the Federal Aviation Administration. The C-sUAS requirements, regulations, and resources differ among these groups.

This report uses the broad definition of air defense, which is to detect, track, and defeat aerial threats. It does not use the U.S. military’s organizational-specific definition of air defense as Air Defense Artillery or other groups specifically trained and equipped to detect, track, and defeat sophisticated air threats in large, specified sectors. sUAS break down the military’s typical distinction between air defense and force protection through their small size, wide proliferation, and flight patterns. C-sUAS will be a necessary part of both air defense and force protection, although there will be differing levels of operational expertise between trained air defenders and other military personnel.

The report has three sections. The first section aims to provide a brief analysis of the sUAS threat. It highlights common missions and capabilities through operational case studies and examines why sUAS have proliferated so quickly in recent years.

The second section reviews the ways and means to detect and defeat sUAS. This technology backgrounder broadly covers the sensors, C2, and effectors available today. This section reviews platforms that the DoD is pursuing and confirms the feasibility of C-sUAS technologies.

The third and final section lays out the U.S. C-sUAS development path from urgent need, to refinement, to institutionalization. As C-sUAS becomes institutionalized, there are opportunities and potential pitfalls across the DOTMLPF. The C-sUAS enterprise still faces unresolved questions regarding political authorities for C-sUAS stakeholders, personnel responsibilities, and acquisition policies to enable rapid development and procurement.


### The sUAS Threat

_sUAS pose a significant threat due to their multi-mission capabilities, minimal signatures, wide proliferation, low costs, and ground force utility._

In late December 2022, Russia launched a massive assault against Ukrainian infrastructure targeting multiple key regions including Kharkiv, Kyiv, Lviv, and Odesa. The first wave of attacks was conducted with cheap Iranian-made Shahed-136 drones. Ukrainian air force officials believe Russia used the drones to overwhelm air defenses before sending cruise missiles in a second wave of attacks. These attacks left several regions without power, including major cities such as Lviv and Kyiv. This incident was just one among many in a months-long strike campaign targeting Ukraine’s critical energy infrastructure in the hopes of demoralizing the public and leaving them without heating during the winter months.

Today, sUAS are widely recognized as a ubiquitous, mature, and lethal part of the modern aerial threat spectrum. Their use in the Russia-Ukraine conflict is just one of many cases that have occurred over the past decade. Operators can attack adversaries with sUAS by dropping bombs or using the drone as a loitering munition in “kamikaze” suicide attacks. They can also conduct intelligence, surveillance, and reconnaissance (ISR) missions to collect information on an adversary’s position or activities. Modern sUAS sensors and data links can connect to larger kill chains or be used to find and fix targets for artillery and other precision-guided munitions. sUAS can conduct these missions while being difficult to detect and defeat with current air defenses.

Modern air and missile defenses are ill-suited to counter low-flying, slow, and small UAS. Following U.S. divestment from short-range air defense in the 1990s and early 2000s, the U.S. military has been challenged to respond to enemy sUAS. Other states have faced similar issues. In 2016, Israel fired two $3 million PAC-2 interceptors and scrambled a fighter aircraft in a failed attempt to shoot down a sUAS from Syria that had violated Israeli airspace. In its conflict with Yemen’s Houthis, Saudi Arabia used fighter aircraft to patrol the border and shoot down drones worth a few hundred dollars with $2 million air-to-air missiles. These responses are enormously costly and wasteful over longer military campaigns.

![image02](https://i.imgur.com/Lk80k5D.png)
_▲ __Figure 2: Ukrainian Service Member Fires Rifle at Drone.__ Position near Bakhmut on March 20, 2023._

The lack of active C-sUAS opens a gap in modern air defense that combatants around the world are exploiting. There is no substitute. The complement to active C-sUAS — passive defense — is important but insufficient. The United States cannot harden all of its military bases against sUAS, and force distribution is ineffective against the large quantity and low costs of sUAS. The United States and its partners therefore must develop active and integrated defenses to mitigate these risks.

#### Defining sUAS

sUAS are a specific category of drones. This categorization, however, varies across countries and organizations, with two key taxonomies outlined by the United States and NATO. The DoD divides UAS into five categories based on their weight, speed, and altitude ceilings, with the “small” category comprising Groups 1, 2, and 3. Despite its designation as “small,” Group 3 UAS can still be quite large at up to 600 kg. NATO offers a slightly different categorization, with sUAS falling under its Class 1 and 2 categories.

UAS categorization is further complicated by capability overlap with munitions. For example, the Iranian-made Shahed-136 is generally categorized as a Group 3 UAS, but it often operates as a one-way attack munition. The unique nature of the Shahed-136 thus cannot be simply captured by looking at a categorization that is determined solely on weight, speed, and altitude ceilings. The U.S. Tomahawk missile, specifically Block 4 and 5 variants, likewise blurs the line between UAS and missile. These variants offer loitering capabilities, but due to their one-way strike mission, they are not categorized as a UAS. The UAS spectrum is undoubtedly messy but attempts at distinguishing these threats — like all air threats — are still useful for defenders to quickly characterize capabilities.

This report applies the U.S. classification model of “sUAS” as encompassing Groups 1, 2, and 3.

![image03](https://i.imgur.com/Nyxc0l4.png)
_▲ __Table 1: U.S. UAS Classification.__ Source: Classifications from U.S. Army; images from Russian Ministry of Defense and Wikimedia Commons._

![image04](https://i.imgur.com/IuPGWWl.png)
_▲ __Table 2: NATO UAS Classification.__ Source: Classifications from NATO; images from Vulcan UAS, Elbit Systems, Wikimedia Commons, and U.S. Department of Defense._

sUAS have several advantages over larger aircraft, both crewed and uncrewed:

1. __Lower cost:__ sUAS are relatively inexpensive compared to larger aircraft. This is true even when platforms are not quite “consumable” aircraft that operators will only use on a single mission.

2. __Low training burdens:__ sUAS operators can learn their basic tradecraft in hours, and only one person is needed to operate a drone. On the other hand, it takes months to years to train pilots on large aircraft — including uncrewed platforms such as the MQ-9. A single platform may require over 100 personnel for operations and maintenance.

3. __Minimal infrastructure requirements:__ Unlike larger aircraft, sUAS do not require extensive infrastructure to deploy such as long runways, secure and complicated data links, or expensive maintenance equipment.

4. __Gray zone applications:__ Combatants frequently employ sUAS to decrease the perceived political costs and escalation risks resulting from operations and potential shootdowns as compared to larger, inhabited aircraft. The low-cost of sUAS, minimized risk to operators (on the ground rather than in the cockpit), and difficulty of attribution make sUAS a useful tool for gray zone operations.

5. __Unique capabilities in modern warfare:__ sUAS can perform an increasing number of air missions at lower cost than large, crewed aircraft. Small loitering munitions offer the ability to scan large swaths of territory and quickly strike targets of interest. Medium- and high-altitude long endurance (MALE/HALE) drones will continue to play an important role in counterterrorism missions, but they appear less effective in symmetric, conventional conflicts. Looking to the future, sUAS swarms may also provide a cost-effective means to saturate an adversary’s air defenses.

To be sure, sUAS also have critical disadvantages over larger aircraft.

1. __Limited payload capacity:__ sUAS are unable to carry heavier, more capable sensors or explosives.

2. __Limited flight duration and range:__ Commercial sUAS can perhaps fly around 8 km at the high end. Military sUAS may feature extended ranges, but they will not approach large aircraft ranges.

3. __Limited operating conditions:__ Compared to larger aircraft or missiles, sUAS are more susceptible to wind and adverse weather conditions, as well as a greater diversity of active defenses. Ukraine, for example, is reportedly losing around 10,000 sUAS per month against Russia.

#### sUAS Missions and History

sUAS can complete the same missions as manned aircraft. Over the past decade, military operators have used sUAS for six primary missions:

- __Attack operations:__ Strikes on people and things with bombs, missiles, or suicide attacks

- __Intelligence, surveillance, and reconnaissance:__ Providing “eyes in the sky” for military planning and operations

- __Targeting:__ Finding and sharing target location with other strike assets, such as artillery

- __Battle damage assessment:__ Confirming the results of an attack

- __Harassment:__ Creating confusion and alarm with drone incursions, possibly including small attacks

- __Propaganda:__ Showing off military platforms and operations to improve military and civilian morale

Attack operations, ISR, and targeting missions are the most common, as clearly shown in the Russia-Ukraine war. Both sides have used sUAS to search for enemy combatants and either target them directly or pass their location to other strike assets such as artillery to fire upon their position. Ukrainian soldiers have used the U.S. Switchblade and Phoenix Ghost UAS, for example, to directly target Russian tanks and personnel. Early failures in the war also prompted Russia to quickly increase the use of stand-off weaponry, including indigenous and foreign-made sUAS such as the Lancet-3 and Shahed-136, respectively. In general, the Russia-Ukraine war highlights how sUAS have enabled complex, integrated air attack through the wide proliferation of sensors. As others have warned about the modern battlefield, “What can be seen can be hit, and what can be hit can be destroyed.”

![image05](https://i.imgur.com/0bCZjBn.png)
_▲ __Figure 3: Ukrainian Drone Minesweeper.__ UAS operators use drones for various missions outside of the six described above. Here a Ukrainian volunteer controls the flight of a drone carrying a metal detector to search for mines near the town of Derhachi, Kharkiv region, on October 1, 2023._

Attack operations also include strikes on infrastructure and economic targets. In September 2019, Iran launched 18 sUAS and seven missiles to attack Saudi Arabian oil facilities in Abqaiq and Khurais. The strike successfully evaded Saudi air defenses, including the U.S. Patriot, German Skyguard, and French Crotale, and struck their targets, leading Saudi Arabia to temporarily cut oil production by around 50 percent. In Ukraine, Russia has launched Iranian-made suicide drones to strike power grids.

sUAS-based assassination attempts — and successes — have also rocked several countries. In August 2018, a small insurgency group in Venezuela used a bomb-laden drone in a failed assassination attempt against President Nicolás Maduro. In January 2019, the Houthis in Yemen used a Qasef-1 UAS to assassinate senior Yemeni military officials. More recently in November 2021, Iranian-backed militias attempted to assassinate Iraqi prime minister Mustafa al-Kadhimi after pro-Iran political groups had faced disappointing results in the elections.

Harassment and propaganda operations are also common. ISIS fighters made extensive use of commercial quadcopters and fixed-wing drones for surveillance, propaganda, and small but demoralizing tactical strikes. In January 2017, despite having a limited sUAS arsenal, the group formally announced a new drone unit known as “Unmanned Aircraft of the Mujahideen.” In the 2020 Nagorno-Karabakh war, Azerbaijan used its drone fleet to record video of its strikes against Armenian tanks and soldiers, replaying footage across the country and internationally. Iranian-backed groups have frequently launched sUAS and rocket attacks to harass U.S. embassies, businesses, and military personnel across the Middle East, which has occasionally led to counterattacks and rising escalation concerns.

![image06](https://i.imgur.com/QiQp1yk.png)
_▲ __Table 3: Select sUAS Combat Deployments.__ Source: CSIS Missile Defense Project._

#### Global Proliferation

sUAS have spread globally over the past decade due to the technology’s dual use for both military and civilian applications. In addition to the military missions listed in the previous section, sUAS are used in various civilian activities, including filmmaking, law enforcement, emergency response, agriculture, delivery, and the protection of commercial facilities. Once sUAS technology advanced enough to become viable for these use cases, the commercial market boomed, which in turn has further fueled sUAS technology developments, facilitated the rise of commercial drone manufacturers, and created a massive, largely unregulated supply of these aircraft.

![image07](https://i.imgur.com/HWK8KYf.png)
_▲ __Figure 4: The Path to sUAS Proliferation.__ Source: CSIS Missile Defense Project._

Before the sUAS commercialization boom of the mid-2010s, manufacturers created moderately priced units with relatively rudimentary capabilities. The first remote-controlled drone to incorporate Wi-Fi, Parrot’s A.R. Drone, was released in 2010 and cost a modest $299 but had a battery life of only 12 minutes. Three years later Da-Jiang Innovations (DJI), the current commercial manufacturing titan in China, released its first drone, the Phantom 1, which sold for $379. This model featured an internal GPS but had a flight time of less than 10 minutes and a communication distance of only 1 km. Today, the cost of commercial sUAS has increased, typically ranging from $500 to $10,000, but new models offer significantly improved capabilities. DJI’s bestselling Mavic 3, which costs $2,049, offers 46 minutes of flight time, omnidirectional obstacle sensing, and a transmission range of 15 km at 1080p resolution. The cost-to-flight-time ratio between these DJI models increased by 17.5 percent, but the capabilities provided by the Mavic 3 opened the door to hundreds of commercial and hobbyist applications.

China has since seized the sUAS market, with DJI accounting for over 60 percent of the market share for commercial sUAS in 2021. While market projections for commercial drones vary slightly, there is strong consensus that the market is thriving and shows no signs of slowing down, as exemplified by revenue of $2.7 billion in 2020 and a projected intake of $21.7 billion by 2030.

![image08](https://i.imgur.com/2bH8Vrn.png)
_▲ __Table 4: DJI Development.__ Source: DJI._

The commercial drone sector has driven technological advances, rather than these advances trickling down from military UAS. This growth has mostly been spurred on by the smartphone industry. Radio-controlled aircraft moved from using petrol engines to electric motors and the lithium batteries used in modern smartphones. With internal combustion engines prone to excessive vibration, electric motors have become increasingly popular, particularly for sUAS. Critically, the extensive lithium battery market has allowed operators to choose battery packs that fit their desired performance, flight time, and endurance without massive price increases. The recent interest in and testing of UAS-compatible lithium-sulfur batteries may offer an even cheaper option in the coming years. The leveraging of existing high-speed cellular networks has also allowed for broader UAS accessibility and lower associated costs. Overall, as one expert aptly explained, “Drones have really been riding the smartphone revolution.”

![image09](https://i.imgur.com/YeeeAKp.png)
_▲ __Figure 5: Agricultural Drones.__ A Kenya Airways employee controls a drone as it spreads fertilizer over a tea farm at Kipkebe Tea Estate in Musereita on October 21, 2022._

The military sUAS market has similarly increased in size and platform diversity over the last decade. There is limited reporting specifically on sUAS market trends, but the wider military UAS market features many Groups 2 and 3 platforms and shows clear signs of rapid expansion. Between 2011 and 2021, the military UAS market grew by nearly $10 billion, from $1.7 billion to $11.6 billion. As commercial markets and systems proliferated, indigenous military programs also promptly appeared, offering to enhance and counter the new technological capabilities available. An October 2020 study estimated that 102 countries possessed an active drone program compared to an estimated 60 countries in 2010. Additionally, of the reported 171 active military drone models in 2019, roughly 143 were sUAS. Militaries have also successfully harnessed the cheap and easy-to-use format of commercial systems while increasing the reliability and security needed for military operations.

The general utility of sUAS reinforce their proliferation. Russia has imported the Iranian Shahed-136 in large numbers to support its operations in Ukraine while also relying on domestic systems such as the Orlan-10. Prior to its operations in Nagorno-Karabakh, Azerbaijan procured large numbers of Israeli sUAS, which Azerbaijani operators used effectively against Armenian combatants. Growing normalization of sUAS as tools of war points toward a shifting military landscape in which sUAS will regularly be relied upon in order to achieve mission success.

Given the wide commercial and civilian applications of sUAS, international regulatory efforts to stem sUAS proliferation have fallen short. In October 2016, 53 nations, including the United States, issued a joint declaration that attempted to start the process of building a basic framework for international UAS standards, but it failed to spur meaningful action. A framework demanding sUAS buyers and sellers to comply to specific obligations had the potential to hinder exports and create strains with legitimate trading partners. In addition, China’s absence from the declaration inhibited its possibility of success from the start. Having taken control of a significant share of the global UAS market, Beijing was, and continues to be, unlikely to allow any regulation that negatively affects its exports.

Even if a regulatory body were established, it is unclear how helpful it would be in removing sUAS from modern battlefields. Clear rules for manufacturers or regulations on military sUAS transfers would not decrease the wide availability of commercial drones or components of these systems, which can easily be adapted for military use even by non-state actors. According to a 2018 West Point report, ISIS displayed overall diversification within its commercial drone supply chain. For the nine quadcopters associated with ISIS operations, engineers built the final units after acquiring various components from seven retailers in five different countries. ISIS’s piecemeal production of UAS is also not an isolated practice. The Houthis in Yemen follow a similar pattern. For example, the Sammad-pattern UAS engine originated in Germany before making its way to Israel, then Iran, and eventually into the hands of Houthi engineers in Yemen. Given this substantial supply of cheap components spread across multiple business sectors, and the ease with which it crosses international borders, increasing regulations around sUAS is unlikely to stem proliferation and use.

As sUAS continue to develop and improve upon existing capabilities within the civilian and commercial markets, potential applications have continued to grow. There is little chance of putting the genie back in the bottle. The United States and its allies must develop active defenses to address these highly proliferated systems and deploy them as required based on expected risks and vulnerabilities.

#### Future Threats

Technological developments over the next few years will further empower sUAS. The rise of artificial intelligence and machine learning (AI/ML) is perhaps the most common concern. As the JCO warned in their 2021 report: “The impending integration of artificial intelligence with autonomous sUAS will introduce yet another dramatic change to the character of warfare.” Software is already enabling rapid leaps in UAS autonomy. As one CSIS report explains:

> Traditional software is sufficient to deliver a high degree of autonomy for some military applications. For example, the Israeli Aerospace Industries (IAI) Harpy is a decades-old uncrewed drone that IAI openly acknowledges is an autonomous weapon. When in autonomous mode, the Harpy loiters over a given region for up to nine hours, waiting to detect electromagnetic emissions consistent with an onboard library of enemy radar, homes in on the emissions source (usually enemy air defense radar), and attacks. No human in the loop is required.

As these autonomous capabilities proliferate further, defenders will be forced to pivot away from detect and defeat platforms based on radio frequency (RF).

Advances in AI/ML may also enable sUAS swarms. These are large, coordinated, and at least semi-autonomous group operations; thus far, there have been few if any attacks that fit this strict definition. Yet even small, human-controlled group attacks have proven capable. The 2019 Houthi attack on two Saudi Aramco oil facilities only employed 10 drones but still degraded business operations for some time. Commercial drone shows have operated with more than 3,000 drones. Once mass drone swarm technology is established, it will be an increasingly difficult threat to intercept. In those cases, the best options for defenders may be “left-of-launch” strikes on C2 nodes and ground control stations associated with the attack.

Adversary sUAS may increasingly communicate through cell towers, making RF-based detect and defeat difficult. Under this environment, defenses would need to differentiate between sUAS communications and regular cellular transmissions. Even if sensors can adapt, RF-based defeat would then need to degrade those communications without disrupting cellular transmissions using those same frequencies. As JCO director Sean Gainey explained in 2022, sUAS operators are “building in redundancy in these systems where if you cut off something, they can fall back on something else.”

Lastly, U.S. policymakers must also prepare for creative sUAS use in the battlefield. In the 2020 Nagorno-Karabakh war, for example, Azerbaijan reportedly modified older aircraft to function uncrewed and used these aircraft to draw fire and locate Armenian air defenses. Russia has used similar tactics in its ongoing invasion of Ukraine. Russian operators have also developed tactics such as piloting near buildings to exploit sensor blind spots, launching UAS away from operator locations to avoid counterattacks, and spoofing Ukrainian defenses to falsely register a large number of UAS and ground control stations. UAS operators have enormous freedom of action and can adapt tactics quickly, whereas defenders typically do not have such flexibility.

![image10](https://i.imgur.com/1CmCB1k.png)
_▲ __Figure 6: Drones in Formation.__ South Korea’s military drones fly in formation during a South Korea–U.S. joint military drill at Seungjin Fire Training Field in Pocheon on May 25, 2023._


### Detecting and Defeating sUAS

_A variety of kinetic and non-kinetic capabilities are available to defeat sUAS. Each of these tools have unique strengths and weaknesses in regard to survivability, range, magazine capacity, combat identification, and defended area._

sUAS pose unique challenges to air defense. They exploit gaps in sensing because they are small and fly low. They also exploit cost asymmetries — they are usually cheap and numerous, while air defense interceptors are not. They even exploit the way air defense is organized by equipping individual combatants to achieve tactical and strategic effects, while the United States and its allies mostly deploy air defense at the company level or higher.

Despite these differences across size, flight, costs, and quantities, the overall air defense kill chain is essentially the same. Air defense — as defined broadly — means detecting and defeating airborne threats flying from surface to space. That process can be illustrated in various ways, as shown in Table 5. The sensors, effectors, and C2 platforms involved in this kill chain all have unique characteristics that determine their effectiveness and where they are deployed, as shown in Table 6.

The following sections define the sensor, effector, and C2 missions, and explore different C-sUAS modalities, their respective strengths and weaknesses, and example platforms for each.

![image11](https://i.imgur.com/liqIcPz.png)
_▲ __Table 5: The Air Defense Kill Chain.__ Source: CSIS Missile Defense Project._

![image12](https://i.imgur.com/A0srXW1.png)
_▲ __Table 6: C-sUAS Platform Considerations.__ Source: CSIS Missile Defense Project._

#### Sensors

Radar has long been the primary sensor used to detect and track aerial threats. The traditional approach leverages wide-area surveillance radars and highly focused tracking radars to respectively detect and track incoming aircraft and ballistic missiles. Detecting sUAS in this way, however, is hard. As mentioned earlier, sUAS typically fly below typical air defense radar coverage. Perhaps even more problematic is their slow speeds and small profile, which combined creates a very limited radar signature for detection and tracking.

This is not to say that active radar does not work against sUAS. Active radar remains one of the predominant means for detecting sUAS at longer ranges as compared to other sensor modalities. Radar is also more capable under adverse weather conditions and less sensitive to countermeasures compared to other sensors. Radars, however, can be large, heavy, and power intensive, thereby reducing mobility unless mounted on a vehicle. They also emit a signature that can be easily detected, making the operator’s location vulnerable to attack. Radars also must be optimized to see smaller objects, thus reducing their detection range.

Another common method to detect sUAS today is electronic surveillance measures, also known as passive radio frequency. This detection method allows defenders to identify the wireless signals used to control the UAS. Some passive RF capabilities show the location of both the sUAS and the operator. As one Department of Homeland Security report explains, C-sUAS may “use libraries of known UAS radio signatures and compare detected signals to those in the library in order to classify or identify UAS.” These sensors listen to sUAS communications via control stations, satellites, cell towers, or drone relays. A key concern with passive RF, however, is that sUAS are moving away from RF control, making current detection and defeat capabilities obsolete.

![image13](https://i.imgur.com/3FjZUp7.png)
_▲ __Figure 7: RADA Radar.__ Source: DRS._

Due to the detection liability of radar, C-sUAS designers often seek to combine RF detection and radars within a single platform. The FS-LIDS (Fixed Site-Low, Slow, Small Unmanned Aircraft System Integrated Defeat System) is an example of a system supported by the JCO that incorporates both detection methods. The multi-layer detection capabilities of FS-LIDS allow operators to better conduct countermeasures that align with the given target and environment. However, a combination of sensors is not a necessity. EnforceAir is another JCO-supported system that uses RF for both detection and defeat. Nevertheless, sUAS operators can adapt to RF sensors. In July 2022, for example, a British defense firm developed a laser-controlled drone that will be undetectable by current RF sensors. Suicide drones, also known as one-way attack munitions or loitering munitions, may use an onboard inertial navigation system to allow sUAS to operate without alerting RF sensors. Russia has extensively used the Iranian Shahed-136 drone as a loitering munition in attacks on Ukraine.

Other sensor modalities include electro-optical (EO), infrared (IR), and acoustic sensors to detect a target by its visual, heat, or sound signatures, respectively. These sensors are helpful in providing additional confirmation of a nearby sUAS threat but are rarely used as a standalone sensor. EO, IR, and acoustic sensors have very limited operational ranges. For example, the EnforceAir’s RF sensor has a radius of approximately 3 km, while the Discovair G2 acoustic sensor has an estimated range of 500 m. Additionally, potential countermeasures are fairly simple, including, for example, flooding a battlefield with noise that degrades acoustic sensor capabilities. For these reasons, EO, IR, and acoustic sensors are often used in combination with active or passive radar to provide a more effective, layered detection capability.

![image14](https://i.imgur.com/MXZiIVC.png)
![image15](https://i.imgur.com/RArqeqf.png)
_▲ __Table 7: C-sUAS Sensor Strengths and Weaknesses.__ Source: Characteristics from Department of Homeland Security; images from SRC Technologies, U.S. Department of Defense, Squarehead Technologies, and D-Fend Solutions._

#### Command and Control

Command and control (C2) is a critical element of C-sUAS operations, as it is for all air defense. Broadly speaking, C2 is the “exercise of authority and direction by a properly designated commander over assigned and attached forces in the accomplishment of the mission.” A fundamental element of C-sUAS C2 is the centralized development of operational procedures that will enable decentralized execution of C-sUAS operations. Execution of the C-sUAS mission, in the near term, will be localized to the threatened asset or unit, and engagement authority will rest with the local commander and possibly junior leaders, who will make decisions based on the predefined rules of engagement. These tasks include integrating sensor data (from sources such as radar, cameras, and direction finders), classifying and identifying incoming threats, and transmitting this information among sensors and shooters to queue up responses. C2 operations require the creation of a common operational picture and share that intelligence with all relevant stakeholders.

While detecting sUAS presents the most commonly identified challenge, as previously discussed, sUAS also present a significant identification challenge. Over the near term, identification will depend more on context or procedures than specific Identification Friend or Foe (IFF) systems that confirm an sUAS’s affiliation. As a Joint Staff report explains, many U.S. UAS “do not have IFF capability and are similar or identical to threat [UAS].” C-sUAS rules of engagement (ROE) will therefore depend on the operational environment and threat intelligence, with ROE able to tighten or loosen as necessary. Future C-sUAS platforms may feature improved non-cooperative threat recognition capabilities, but for now ROE will determine whether defenders can shoot at incoming sUAS rather than pursue the identification of the object.

C2 for C-sUAS has improved significantly over the past few years, becoming increasingly open and interoperable. In July 2020, the DoD designated the Forward Area Air Defense Command and Control (FAAD C2) system as the interim C2 system for C-sUAS. The FAAD C2 system provides a single integrated air picture that combines a suite of sensors, effectors, and other C2 systems given operational requirements. JCO director Sean Gainey noted the superiority of the FAAD C2 compared to alternatives, specifically noting its fire control capabilities. The rapidly evolving C-sUAS threat requires C2 development to build upon FAAD C2’s successes. The ultimate goal, in the eyes of Gainey and the JCO writ large, is to create an “open architecture standard based C2 system” that can be configured according to specific threat analysis.

The current functions of FAAD C2 thus reveal the baseline of JCO C2 development. Currently FAAD C2 is hosted on a SRNC-17 laptop computer and Dell 7212 tablet computer, emphasizing the need for portable command functions. The extensive integration with sensors and communication systems also highlights the need for mature joint operation potential. FAAD C2 is deployed and integrated with 25 sensors, including AN/MPG-64 Sentinel and Ku-band Radio Frequency System (KuRFS) radars, and five communications systems, including Link 16 and Joint Range Extension Application Protocol.

![image16](https://i.imgur.com/90FhqAk.png)
_▲ __Figure 8: The LIDS Family.__ The LIDS family of systems uses a range of passive and active sensors to detect, track, and identify UAS and non-hostile aircraft. Source: U.S. Army Acquisition Support Center._

#### Effectors

The DoD has developed a variety of kinetic, directed energy, and RF-based defenses against sUAS. These tools all come with their own strengths and weaknesses. As is constantly repeated in the C-sUAS community, there is no “silver bullet” effector to defeat these threats.

![image17](https://i.imgur.com/TVlS7Uy.png)
_▲ __Table 8: Example C-sUAS Effectors by Defeat Mechanism and Basing.__ Note: Many systems listed here feature multiple deployment configurations and effectors. This table is illustrative and not comprehensive, intended to show the range of C-sUAS on the market. Source: CSIS Missile Defense Project._

Kinetic defenses include guns, nets, ropes, collision drones, missiles with proximity-fuse warheads, as well as more creative solutions such as falcons and strings of streamers to tangle propellers. Kinetic defenses typically employ mature technologies, offer the highest probability of kill for any single UAS, and allow significant range of intercept. Their weaknesses include vulnerability to sUAS swarms, given their focus on defeating individual drones. They also may be inappropriate for use in populated areas where intercept shrapnel may fall on people or property.

The DoD has invested in several kinetic effectors. The Coyote system is one of the primary interim solutions today. There are several extant configurations which may be characterized as a missile or drone, with a jet-engine to accelerate the system out of its launcher, and fins that support its loitering capability. The original Coyote entered demonstration testing in 2016 and employed a kinetic effect through collision or the nearby explosion of the unit’s warhead. According to its FY 2024 budget, the Army procured over 1,200 Coyote interceptors between 2022 and 2023.

The United States has steadily improved upon C-sUAS cost asymmetries. Given the proliferation of suicide drones such as the Iranian Shahed-136, which costs roughly $20,000–50,000 per unit, using missile interceptors that cost two to eight times as much is deeply inefficient. Instead, there has been a rise of cheaper alternatives such as anti-aircraft guns for C-sUAS, commonly known as “flak.” Ukraine, for example, has procured Germany’s Gepard self-propelled anti-aircraft gun, which can shoot down sUAS with a range of around 5 km, as well as the older Soviet ZU-23 anti-aircraft gun. The DoD has also invested in an anti-drone “strings of streamers” system and is pushing the system into a program of record. These older, simpler technologies have proven effective against sUAS threats.

![image18](https://i.imgur.com/lqETAoX.png)
_▲ __Figure 9: Coyote Testing.__ Source: Raytheon._

![image19](https://i.imgur.com/4L0qBZ1.png)
_▲ __Figure 10: Leonidas Pod HPM.__ Source: Epirus._

![image20](https://i.imgur.com/CCuI1ii.png)
_▲ __Figure 11: Leonidas Ground-Based HPM.__ Source: Epirus, Inc._

![image21](https://i.imgur.com/CbqXyz8.png)
_▲ __Figure 12: Dronebuster Training at the Baghdad Embassy Compound in Iraq.__ Source: U.S. Department of Defense._

![image22](https://i.imgur.com/jns5dsC.png)
_▲ __Figure 13: L–MADIS Training.__ Source: U.S. Marine Corps._

![image23](https://i.imgur.com/IQBUOVw.png)
_▲ __Figure 14: High-Energy Laser Weapon Testing.__ Source: U.S. Air Force._

![image24](https://i.imgur.com/636C7g5.png)
_▲ __Table 9: C-sUAS Effector Modality Strengths and Weaknesses.__ Source: CSIS Missile Defense Project, images from Anduril and U.S. Department of Defense._

The DoD has invested significantly in directed energy (DE) weapons, including on high-energy laser (HEL) and high-power microwave (HPM) systems capable of defeating sUAS. Lasers are cheap per shot, have large (so-called “unlimited”) magazines, and operate at the speed of light. However, they are technologically immature, expensive to build relative to other solutions, and offer limited line-of-sight ranges. In 2014, the U.S. Navy fielded the first operational directed energy weapon, the Laser Weapon System (LaWS), aboard the USS Ponce (LPD-15). The ODIN and HELIOS systems are in development today. A variety of specifically anti-drone laser systems are now being developed as well, including the Athena and HELWS MRZR.

HPMs are another effector type. They are cheap per shot fired, technologically mature, and particularly effective against sUAS swarms with their potentially wide area of effect. However, future sUAS may harden against HPMs, although this would significantly raise their development costs and potentially lead to engineering difficulties.

The Army plans to equip the Leonidas as its primary HPM for indirect fires protection. Unlike other C-sUAS defenses that disable one drone at a time, Leonidas was engineered to kill swarms of Group 1 and 2 UAS, as demonstrated in several U.S. Army test events. The Army’s Rapid Capabilities and Critical Technologies Office (RCCTO) recently awarded a $66.1 million contract for Leonidas prototypes. Although HPMs have traditionally been based on larger platforms because of their large energy requirements, new technological developments are allowing for expanded basing options. The Leonidas Pod, for example, is a mobile, compact drone-based prototype that builds upon the ground-based system to offer relatively cheap, air-based C-sUAS.

Directed energy can be an effective C-sUAS tool. However, DE systems may encounter operational difficulties in complex and heavily congested environments, given the potential collateral damage to friendly forces and assets. Environmental factors such as poor weather or smoke in the atmosphere can also degrade their efficacy. Furthermore, training requirements for directed energy platforms may be intensive. As one analyst explains, an operator’s limited interaction time with an incoming UAS threat means that they must be well trained to deploy it effectively.

The last defeat modality is RF, through jamming or spoofing the drone’s communications link. Global navigation satellite system (GNSS) spoofing — misleading its GPS — means that the operator can tell the drone that north is south, and west is east. Jamming, conversely, means disrupting communications between the drone and its operator and is simpler to perform. Although RF-based defenses are powerful, operators must be aware of environmental effects potentially impacting nearby commercial or otherwise friendly aircraft. RF-based defenses also do not affect autonomous or otherwise non-communicative UAS. Lastly, spoofing and jamming require defensive emissions, which may increase the risk that an adversary can geolocate defensive positions.

RF-based defenses have become increasingly popular over the last decade and operate as fixed, mounted, and handheld systems. In June 2020, six of eight systems selected to represent the JCO’s interim C-sUAS capabilities utilized RF defeat: FS-LIDS, L-MADIS, CORIAN, NINJA, MEDUSA, and Dronebuster. The Dronebuster is a handheld line-of-sight system weighing roughly four pounds, which allows for easy infantry and squad-level usage. Jamming capabilities also vary depending on the system; the Dronebuster Block 3 offers 45 minutes of jamming, whereas the updated Dronebuster SNA offers three hours of continuous jamming.

![image25](https://i.imgur.com/Y5ZZ2HB.png)
_▲ __Table 10: Select C-sUAS Operations.__ Source: CSIS Missile Defense Project._

#### A Diverse Solution Set

There are many different types of sensors, effectors, C2, and basing options for the C-sUAS mission. There is no single mix-and-match that serves as a universal solution to defeat sUAS threats. Rather, investment in a wide variety of sensors, effectors, and basing options is essential to ensure that the U.S. military is equipped to address the diverse set of threats posed by UAS. As JCO director Sean Gainey has explained, “There must be layers of systems to address the threat of UAS. It has to be a system of systems. It is a holistic approach.”

Sensors and effectors of various sorts have their own unique strengths and weaknesses. Kinetic effectors may be more reliable to take down any individual UAS threat — especially those that are bigger and faster. Non-kinetic effectors such as HPMs, on the other hand, can more effectively counter large UAS swarms.

Trade-offs likewise impact sensors. Active radar allows operators to detect threats at greater ranges but may give away their positions. Passive RF sensors allow operators to remain stealthy and are therefore the better option for dismounted, forward-deployed units. Yet passive RF sensors cannot detect pre-programmed UAS that do not communicate with their operator, which is becoming more prevalent on the battlefield. One-way attack drones, for example, have become common in Russian attacks against Ukrainian civil infrastructure. Overinvestment in one defense modality may leave defenders vulnerable in certain attack scenarios.

The need for diversity is likewise true in basing options. The right solution for a fixed site is different than that of a maneuver unit. A mobile defender may forsake having a range of effectors to remain small, light, and nimble so that they can shoot on the move. Fixed-site defenders, however, face adversaries that can plan sophisticated, large-scale attacks at various altitudes using a variety of missiles and UAS. Their defenses therefore require longer-range radars and effectors. Again, there is no one-size-fits-all material solution.


### The Current Path

_As senior leaders institutionalize the C-sUAS enterprise across the DOTMLPF, they must address critical gaps in training and personnel requirements._

U.S. efforts to develop effective C-sUAS operators and platforms can be loosely categorized in three stages: urgent need, refinement, and institutionalization. The United States is entering the third stage today, which will be the most difficult. It will require buy-in from the military services and clarity of roles throughout the defense establishment. The following sections define these stages, provide a historical overview of U.S. activities, and review what the United States must do to achieve institutionalization in the C-sUAS enterprise.

![image26](https://i.imgur.com/eyLA6p3.png)
_▲ __Table 11: Air and Missile Threat Matrix.__ Source: U.S. Army._

#### Urgent Need

The U.S. response to C-sUAS has transpired in three stages. The first was urgent need. In 2016, ISIS captured large swaths of territory in both Iraq and Syria. They were among the first non-state actors to use small commercial quadcopters, which they employed effectively in battles against U.S.-supported Iraqi forces. There were few C-sUAS defenses in theater or readily deployable at the time. U.S. Central Command (CENTCOM) leadership issued an urgent requirement for defenses, prompting the DoD to quickly transfer a variety of commercial off-the-shelf C-sUAS platforms.

In 2016, the United States lacked cheaper, efficient effectors to use against cheap and plentiful sUAS. This lack was a consequence of wide divestment in Short-Range Air Defense (SHORAD) by the Army and Marine Corps in the 1990s and early 2000s. Both services were focused on the counterinsurgency mission in Afghanistan and Iraq and therefore chose to cut Air Defense Artillery (ADA) units in favor of more mission-critical maneuver forces. Military leadership believed that the U.S. Air Force would provide sufficient defensive counterair capabilities to maintain air superiority and protect ground forces. Military leadership did not consider the threat of UAS and cruise missiles as viable, near-term threats to U.S. military operations. This trend was not uniquely American; most NATO nations also weakened their air defense capabilities over the last two decades.

Yet with the new threat clearly in sight, Congress has quickly committed funds to procure defenses. This step is highlighted by a significant surge in the DoD’s FY 2017–FY 2019 procurement and research, development, testing, and evaluation spending for C-sUAS. While the DoD achieved an interim solution in months, it fully satisfied the C-sUAS Joint Urgent Operational Need (JUON) two years later in FY 2019. The initial JUON effort successfully committed defenses to provide an “interim standalone capability” to defend 89 CENTCOM sites against Groups 1 and 2 UAS.

Given the active threat to U.S. allied forces, the selection of defense systems was understandably fast paced. According to Barry J. Pike in 2018, then program executive officer for missiles and space, the C-sUAS budget was placed “in the same office as our Counter-Rocket, Artillery, and Mortar project because they do know how to go fast. . . . Within 60 days a requirement was generated and within another 60 days, we had materiel in theatre. . . . We fielded more than 270 different kinds of systems [for C-sUAS].” A consequence of this quick delivery, however, was the minimal effort placed on the typical acquisition processes for programs of record and the DOTMLPF process. The massive quantity of C-sUAS platforms was deemed necessary at the time but would require the next stage in the C-sUAS response to consolidate these programs into a manageable portfolio.

![image27](https://i.imgur.com/liVRhk2.png)
_▲ __Figure 15: Iranian-Made Kamikaze Drone.__ Remnants of Iranian-made kamikaze drone used by Houthi forces against Saudi Arabia._

#### Refinement

The second stage in the U.S. response was one of refinement, during which the United States developed a more focused C-sUAS portfolio that was operationally effective and logistically sustainable. It included a diversity of sensors and effectors to cover the full threat spectrum. To fulfill this mission, in November 2019, the U.S. secretary of defense designated the Army as the lead service for C-sUAS; soon thereafter, the Army created the JCO to lead this effort. The JCO also helps the Army think through deployment strategies and align resources for C-sUAS. Recent budget justifications highlight this phase shift. The FY 2022 budget request noted the C-sUAS transition from a JUON to formal programming, with requirements specified under the Joint Requirements Oversight Council Memorandum 078-20. Also in FY 2022, the Army expanded the threat to include Group 3 UAS and designated a unique line-item number for C-sUAS. This move marked a symbolic emphasis on C-sUAS as a standalone program.

![image28](https://i.imgur.com/tboBblc.png)
_▲ __Figure 16: C-sUAS Milestones.__ Source: CSIS Missile Defense Project._

#### Institutionalization

The third and final stage is institutionalization, during which the United States must fill critical gaps across the DOTMLPF construct. The central question here is about how to apply air defense principles and institutionalize these capabilities to non-air defenders. The challenge is developing DOTMLPF solutions across the force to air defense and non-air defense units alike.

The military services will play a larger role in the institutionalization phase. Questions remain as to whether they will accept systems supported by the JCO or develop their own unique platforms more suited for their specific needs, as well as how such needs will be prioritized against other service needs. Major policy, strategy, budget, and programmatic decisions will be made that will carry enormous consequences for the field.

![image29](https://i.imgur.com/BhP0kFp.png)
![image30](https://i.imgur.com/l9ZyhZs.png)
_▲ __Table 12: DOTMLPF Plans and Potential Pitfalls.__ Source: CSIS Missile Defense; DOTMLPF definitions from U.S. Department of Defense._

__DOCTRINE__

C-sUAS doctrine has improved significantly over the last decade. The DoD began developing C-sUAS tactics, techniques, and procedures over the late 2010s as the sUAS threat proliferated. The Army released three central documents during this period. The first was the 2016 Army Techniques Publication (ATP) 3-01.8, Techniques for Combined Arms for Air Defense. ATP 3-01.8 provides guidance on how combined arms forces can protect themselves from air attacks, including UAS threats.

The second central doctrine publication was the 2017 ATP 3-01.81, Counter-Unmanned Aircraft System Techniques. This report provides defense planning, training guidance, and regional threat preparations for sUAS threats. It highlights basic issues such as identifying specific UAS threats and potential responses based on the operational environment, enemy capabilities, and tactics. It also offers some specific combined arms unit training recommendations.

The third major doctrine publication was the 2020 Army Field Manual (FM) 3-01, U.S. Army Air and Missile Defense Operations. FM 3-01 incorporates details on the specific UAS threats and C-UAS techniques and offers some of the clearest guidance on countering sUAS to date. The report provides air defenders with established rules of engagement, along with guidance on the specific altitude, speed, and actions needed to determine whether a UAS is indeed a threat. Defensive measures are also explained down to the force level and divided by type, such as maneuver, aviation, special operating forces, field artillery, and intelligence (see Table 13). This clarified roles and responsibilities among the branches.

![image31](https://i.imgur.com/cAWOVuN.png)
_▲ __Table 13: Army C-sUAS Doctrine.__ Source: U.S. Army._

The primary concern is that doctrine is not often shared, embraced, or applied appropriately in operations or materiel development. One possible factor contributing to these issues is the lack of joint doctrine. Recognizing this underdevelopment, the 2018 Joint Publication (JP) 3-01, Countering Air and Missile Threats, called for more detailed UAS procedures on joint threat detection, identification, and engagement. Since then, however, progress has been slow. For example, in its section on C-sUAS, the 2021 update to JP 3-30 Joint Air Operations, only noted the complexities of defeating sUAS and the need to distinguish between friendly and enemy sUAS. It failed to provide the kind of detail laid out in Army doctrine. Furthermore, now that the JCO has down-selected its primary C-sUAS sensors, C2, and effectors, a new joint publication could include specific C-sUAS platforms and operations to provide more clarity to service members.

The DoD must invest in future thinking to keep doctrine fresh as new challenges arise. This requires investing in internal and external leadership across the C-sUAS enterprise. The JCO — or another central authority — can coordinate and invest in this work and disseminate its findings. This may be done through joint military-academic dialogues, wargames, conflict simulations, and open-source intelligence collection and analysis on sUAS technologies and operations. The joint efforts of the military, academia, and defense industry can support the further evolution of doctrine at the pace required.

__ORGANIZATION__

The primary task of the military services is to organize, train, equip, and provide forces to the combatant commanders. In light of this goal, how will the services organize units or forces to perform the C-sUAS mission? Will the force structure for dedicated air defense forces within each service increase or will mission responsibility for the current forces merely expand? Will the services define a partitioning of mission responsibility between dedicated air defense forces and all other units and equip each accordingly?

Clearly, the C-sUAS mission mandates an increase in dedicated air defense force structure across the U.S. Army, Marine Corps, and Air Force, but the mission also requires an all-of-force approach to defeating the UAS threat. Dedicated and non-dedicated air defense units must be prepared to perform active defense tasks and apply passive defense techniques to counter the UAS threat. The allocation of C-sUAS capability should align to mission responsibility, and the complexity of the materiel solutions, given the operational context they are applied in, should inform whether the capability requires a dedicated air defense crew or a non-dedicated operator. The concept of a CAFAD approach, across all services, should not be lost as the DoD organizes for this mission set.

Likewise, given the breadth and scope of the UAS challenge, the DoD should not lose sight of the fact that a single office to coordinate and guide development of C-sUAS capabilities might be of value. Since January 2020, the JCO has served as the central C-sUAS coordinator in the DoD, focused on establishing joint training, developing joint doctrine, and synchronizing joint materiel development. Because there is no one-size-fits-all for C-sUAS across the services, the JCO has promoted service-specific materiel and policy development while still working to reduce disparate and redundant investment, as is its mission. As a result, the DoD avoided investing in a larger number of platforms, greater redundancy among existing platforms, and increased maintenance, training, and logistics.

Yet the consensus model for C-sUAS may need to evolve over time. The current requirement for wide, cross-service consensus over C-sUAS investment could inhibit future transformation of the air defense enterprise to meet the threat. In the spectrum between development led by an all-powerful JCO on one end, and the Army and Marine Corps completely in charge of their own disparate plans on the other, today’s acquisition enterprise may lean too far toward the latter camp. Congress and DoD leadership should reexamine JCO authorities and relation to service acquisition agencies to improve the requirements process and acquisition timelines. This could mean empowering the JCO with an authority requirement recognized by the Joint Capabilities Integration Development System (JCIDS) that is broad enough to be effective for immediate C-sUAS needs. This would need to be done, however, in coordination with service leadership to satisfy unique service requirements and avoid overlapping too much with other requirement generation bodies, such as the Army Futures Command Air and Missile Defense Cross-Functional Team (AMD CFT), which perhaps could focus more on longer-term C-sUAS requirements.

Outside of acquisition authorities, an empowered JCO might also lead C-sUAS coordination among the United States and its allies. The U.S. military spends significant resources to train and integrate its air defenses with allies and partners. These efforts have made joint operations safer and more effective in many theaters. In the C-sUAS arena, however, sales and joint partnerships are slow, and allies appear to rely mostly on RF sense and defeat platforms. Few NATO allies, for example, have invested in active defenses and instead appear to rely on passive defense, counterattacks, and general deterrence. As U.S. partners recognize the increasing sUAS threat — especially in light of Russia-Ukraine fighting today — the JCO can engage in dialogue and workshops to support U.S. exports, co-development, and joint training opportunities.

![image32](https://i.imgur.com/Dk84IOk.png)
_▲ __Figure 17: JCO Demonstration at Yuma Proving Ground.__ Industry and military officials attended the first JCO demonstration in April 2021 at Yuma Proving Ground, Arizona, where the focus was on low-collateral effects interceptors (LCEI) systems._

__TRAINING__

Training is an urgent need across the joint force. The need for C-sUAS is on course to become ubiquitous for fixed and maneuver formations, necessitating a wide distribution and variety of training. As the JCO has affirmed, air defense specialists will continue to manage UAS threats for Groups 3 through 5, but the DoD should prepare all units to counter Groups 1 and 2. Commanders at all levels should incorporate C-sUAS in training exercises. Basic training must be simple enough to teach in a short window but comprehensive enough to cover this threat spectrum.

> #### U.S. Army master sergeant
> “You’re giving us $10 billion worth of capabilities and $10 of training.”

There are currently four Joint Knowledge Online training modules that cover basic C-sUAS awareness, system familiarization, installation of C-sUAS activities, and C-sUAS tactics, techniques, and procedures. These short, functional training courses are useful for familiarizing military personnel with sUAS threats and basic countermeasures.

A more comprehensive training program currently takes place at the C-sUAS Academy in Yuma, Arizona. It offers a two-week course, set to expand into a three-week class by FY 2025. The class is offered across the services and U.S. government, including Secret Service agents. The Army also administers a “master trainer” course specifically for sUAS. Conducted at the Maneuver Center of Excellence in Fort Moore, Georgia, the training course certifies students with Group 1 UAS through a clear program of instruction which includes training on ground control stations, mission planning, simulations, orientation flights, and proficiency flight evaluations. The upcoming Joint C-sUAS University (JCU) at the Fires Center of Excellence in Fort Sill, Oklahoma, discussed further in the “Facilities” subsection below, may consider building upon both training courses.

In FY 2024, the JCU will offer two courses — an operator and a planner course — each lasting two weeks. The operator course will provide service members with an additional skill identifier and consist of threat analysis, service specific engagement, and layered defense, with a capstone in detecting and defeating adversary drones. The planner course will consist of layered defense, coordination of airspace, joint strategic management, and C-sUAS planning and system integration, with a capstone in planning and executing a Course of Action (COA) to detect and defeat red air threats (single/swarming).

The DoD and JCO have prioritized training in recent years. Since April 2021, the JCO, RCCTO, and services have hosted industry demonstrations twice a year to “evaluate emerging technologies that close gaps, inform requirements, and promote innovation.” This joins the service-focused exercises which have increasingly incorporated C-sUAS, as shown in the table below.

![image33](https://i.imgur.com/b8FojWd.png)
![image34](https://i.imgur.com/43kg8Mq.png)
_▲ __Table 14: Major U.S. C-sUAS Training and Development.__ Source: CSIS Missile Defense Project._

Lessons from the field — especially in Ukraine — highlight how quickly the sUAS threat and tactics are evolving in real time. The lack of designated training ranges that have standing C-sUAS authorities to operate within CONUS airspace hinders the ability of DoD to train on new equipment and stress test the validity of new TTPs. Resources such as the Joint C-UAS Center of Excellence and the Joint C-UAS University (JCU) are being stood up to address such gaps in training knowledge across the joint force and act as a clearing house for C-sUAS TTPs. Ultimately, range location issues and reduced live training opportunities will hinder efforts to build readiness, particularly for directed energy systems.

_Materiel_

C-sUAS materiel development was addressed in Chapter 2 of this report. In short, materiel development should feature a diverse solution set informed by formation requirements for fixed or mobile defenses. Today’s platforms focus primarily on fixed requirements, as requested by CENTCOM and available at the time. Yet as the maneuver force sees the need for C-sUAS across regions, the DoD will need to shift focus toward mobile and maneuver capabilities.

_Leadership and Education_

Professional leadership development — from squad leaders to flag officers — must be a priority to ensure doctrine and training are effectively implemented. C-sUAS leaders across air defense, maneuver, support, and sustainment teams will help drive operational planning and training across the force and at the various echelons they lead. These leaders can also help identify and respond to sUAS development trends and adversary capabilities and construct new TTPs in line with emerging technologies. The DoD is building C-sUAS leaders through the several training programs listed above in the “Training” section.

_Personnel_

The C-sUAS mission must be shared across air defense and all other combat, combat support, and combat service support activities. The high demand and low density of air defense formations requires that air defenders and non-specialists work together as part of a CAFAD approach. The central question today, however, is the specific division of labor among the air defense and non-air defense units. Table 15 below lays out three models to illustrate the terms of this debate. On one end is the “Specialized” model, in which the C-sUAS mission is largely taken on by air defenders. On the other end, the “Universal” model posits a framework in which all units are trained for C-sUAS. The “Specialized” and “Universal” models are extremes for illustrative purposes — no one advocates for these purist frameworks. U.S. defense officials are developing an appropriate middle path, labeled here as “Hybrid,” which will incorporate elements from both sides. The degree of specialization versus universalization, however, remains to be determined.

![image35](https://i.imgur.com/yftfLmJ.png)
_▲ __Table 15: C-sUAS Operator Frameworks.__ Source: CSIS Missile Defense Project._

Under the hybrid model, C-sUAS planners have borrowed the distinction between “area” and “point” defense whereby air defenders manage larger systems such as high-energy lasers and long-range kinetic interceptors for “area” defense, while other forces use “point” defenses such as guns, nets, and handheld platforms. Maneuver and forward-deployed forces should be able to detect and classify Groups 1 and 2 and, if unable to intercept themselves, at least “relay alert information on locations, altitudes, and time” critical to ground force protection and the possible defeat of enemy UAS. The JCO’s investments suggest an emphasis on CAFAD. Handheld jammers, targeting enhancers, the smart shooter, and other smaller platforms have left this pathway open for the joint force across all units.

The hybrid model posits that the C-sUAS mission in non-ADA units is a force protection task, akin to chemical defense operations. All personnel have a responsibility to perform self-protection chemical defense tasks, and select personnel are trained to employ chemical defense equipment, such as chemical detection kits or alarms. Under the C-sUAS construct, all personnel must be able to engage an sUAS with their assigned or unit organic weapons, and select personnel will be trained to employ C-sUAS weapons.

Questions over specific platforms, specializations, and authorities, however, are still up for debate. Should the infantry operate M-LIDS as a divisional level asset, or should this type of platform be forward deployed at the company level? How much training does a soldier need to fire a Coyote missile? Should the Army significantly expand SHORAD units as the Marine Corps has done by tripling the size of the Low Altitude Air Defense Marines community? And how can ground forces deconflict with the Air Force and allied air forces in a timely, effective manner? The DoD needs to answer these questions to fully institutionalize the C-sUAS enterprise. Doing so will allow staff to better understand how C-sUAS formations will work across services and branches, as well as how to plan against sUAS threats.

_Facilities_

The Army’s plans for facility development are underway. Previous C-sUAS training operations were conducted out of Yuma Proving Ground and lasted roughly two weeks. Despite this training and other branch-specific programs, the JCO found a lack of institutionalized C-UAS training, with one senior Air Force officer noting, “There are currently no joint linkages or commonality to counter UAS training across the department. . . . The average soldier, airman, or Marine lacks adequate counter UAS training.” To improve the military’s C-sUAS capabilities and create a permanent training installation, the Fires Center of Excellence in Fort Sill, Oklahoma, is building a Joint C-sUAS University (JCU), which is scheduled to reach initial operation in the first quarter of FY 2024. The academy will provide a common core program of instruction, joint TTPs, and updated doctrine.113 The center will also provide the C-sUAS community with additional space and equipment to conduct research, test, and train.

The JCU’s location at Fort Sill is understandable but suggests a larger role for air defenders over the maneuver force for C-sUAS training. Will this truly be a joint center for all branches, or will the Maneuver Center of Excellence (MCoE) at Fort Moore, Georgia, develop its own C-sUAS doctrine to inform mobile and maneuver C-sUAS requirements? Furthermore, while most C-sUAS specialists will likely be Army soldiers, the Army-centric location may also discourage Marines from joining. These concerns can be managed as long as the JCU recruits from across the services and branches upon its opening in FY 2024.

![image36](https://i.imgur.com/wDZ4BJA.png)
_▲ __Figure 18: Preparing RQ-7B Shadow for Flight.__ Oklahoma Army National Guard soldiers and contractors prepare an RQ-7B Shadow for flight at Fort Sill. Source: U.S. Army._


### Conclusion

The sUAS threat is here to stay. These systems offer multi-mission capabilities, at low cost, and with minimal signatures. They are widely available through commercial industry and their utility has been demonstrated in numerous conflicts around the world, from the Russian invasion of Ukraine, to Azerbaijan and Armenia’s conflict over Nagorno-Karabakh, to the Yemen civil war. Given these factors, sUAS technology will continue to evolve and proliferate.

As such, C-sUAS has become a critical part of modern air defense. That criticality, however, does not mean that the joint force is ready for the challenge. Today’s air and missile defense systems and structures were not designed to counter numerous, low-flying, small uncrewed systems. sUAS exploit gaps in sensor coverage and cost asymmetries against expensive interceptors. The belief that aerial threats would be countered by U.S. air forces or the ballistic missile defense force may have been true at one point, but drone technology evolved far faster than most thought possible. The U.S. divestment of SHORAD left the DoD without tools and personnel that may have more easily adapted to the sUAS threat, although the proliferation and sophistication seen today calls for more than the SHORAD of yesteryear.

Fortunately, there is a diverse mix of sensors, effectors, and C2 systems that can detect, track, identify, and defeat sUAS. The DoD is investing in a variety of kinetic, electronic, and RF-based defenses to counter sUAS threats. These tools have their respective strengths and weaknesses affecting such factors as survivability, range, magazine capacity, combat identification, and total defended area. Defense budgets here are limited, but the JCO has down-selected across a wide array of C-sUAS platforms to improve economies of scale in production, logistics, and training.

The institutionalization of C-sUAS will require developments across doctrine, organization, training, materiel, leadership and education, personnel, and facilities. Capability development remains necessary for the long term, but as the JCO has emphasized, the urgent need today is for training and capacity. New doctrine should specify the division of labor between air defense and non-air defense specialists, as well as the specific sensors, C2, and effectors that they can operate. C-sUAS leaders will need to tackle these and various other challenges, with their decisions today shaping the field for years to come.

---

__Shaan Shaikh__ is a fellow with the Missile Defense Project at the Center for Strategic and International Studies (CSIS), where he focuses on missile proliferation, unmanned aerial systems, air defense, and non-state actors. He is also managing editor of the CSIS website Missile Threat, an online clearinghouse for information and analysis on missile and missile defense systems. Prior to joining CSIS, he worked at the U.S. Department of Defense and the Syria Institute. He is currently a graduate student at the Johns Hopkins School of Advanced International Studies and received his BA from Tufts University.

__Thomas Karako__ is a senior fellow with the International Security Program and the director of the Missile Defense Project at CSIS, where he arrived in 2014. His research focuses on national security, missile defense, nuclear deterrence, and public law. In 2010–2011, he was an American Political Science Association congressional fellow, working with the professional staff of the House Armed Services Committee and the Subcommittee on Strategic Forces on U.S. strategic forces policy, nonproliferation, and NATO. Dr. Karako is also currently a fellow with the Institute for Politics and Strategy of Carnegie Mellon University.

__Michelle McLoughlin__ is a former intern with the CSIS Missile Defense Project. She is currently a graduate student at American University’s School of International Service and holds a BA in international relations from the University of San Diego.
