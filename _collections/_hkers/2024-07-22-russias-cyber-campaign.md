---
layout: post
title : Russia’s Cyber Campaign
author: Dan Black
date  : 2024-07-22 12:00:00 +0800
image : https://i.imgur.com/V1V4uqF.jpeg
#image_caption: ""
description: "Russia’s Cyber Campaign Shifts to Ukraine’s Frontlines"
excerpt_separator: <excerpt/>
---

_Russian intelligence services have now adapted their thinking about how to optimally integrate cyber and conventional capabilities._

<excerpt/>

With the main thrust of Russia’s anticipated summer offensive underway, it is an opportune moment to take stock of the significant and underappreciated changes that have taken hold in Moscow’s approach to cyber operations in Ukraine.

Much Western analysis to date has fixated on Russia’s highly visible opening cyber offensive, the merits of its approach, and the potential for a renewed destructive campaign of a similar nature against Ukrainian critical infrastructure. This focus is misplaced, however, and has anchored Western understanding of the war’s cyber dimensions to Russia’s countervalue strategy to amass societal pressure via the widespread sabotage of computer networks – an approach that has not seen primacy since the invasion’s first year when assumptions about a short war still guided Russia’s theory of victory.

The harsher reality is that Russia’s intelligence services have adapted their posture in cyberspace to the demands of a long war. Mounting evidence, stretching back to the months preceding Ukraine’s counteroffensive in 2023, indicates that multiple Russian cyber units have shifted their sights away from strategic civilian targets toward soldiers’ computers and mobiles endpoints in order to enable tactical military objectives on Ukraine’s frontlines. This change in operational focus has been cross-cutting, with Russian military intelligence (GRU) and the domestic security service (FSB) – long renowned for rivalry and mistrust – unifying their earlier disjointed cyber efforts and systematising a series of tradecraft adaptations intended to increase their military effectiveness.

This has been a relative shift in priorities rather than a complete overhaul of Russia’s wider strategy. There remain patterns of operational activity indicative of sustained interest in Ukrainian critical infrastructure objects that would hold no immediate intelligence value, and therefore likely represent preparations for future sabotage. What is clear, however, is that Moscow has rebalanced its overarching concept of operations to emphasise targets that can provide more direct and tangible battlefield advantages to its conventional forces.

These adjustments are not solely a reflection of Russia’s scaled-down ambitions in Ukraine, nor how its wider perception of Kyiv’s centre of gravity have changed over the past two years as the conflict intensified into a war of attrition. They are also an important signal of how Russia’s intelligence services have adapted their thinking about how to optimally integrate cyber and conventional capabilities after two years of high-intensity engagement, and what the coming months may bring as Russia makes a new push in eastern Ukraine.


### Russia’s Tactical Pivot

The refocusing of Russia’s cyber campaign to meet what is almost certainly an increasing demand for tactical-relevant signals intelligence (SIGINT) has largely fallen into a few main lines of effort.

___`Beyond targeted efforts to gain access to devices and systems used by Ukrainian soldiers, Russia has also reoriented its cyber forces to help locate Ukrainian military equipment and positions`___

The first has been penetrating devices used by Ukrainian soldiers at the front. Not only has Kyiv’s emphasis on “data-driven combat” made smartphones an invaluable source of location data to establish patterns of movement and locate and target Ukrainian positions, but the military’s dependence on free encrypted messaging applications (EMAs), such as Signal for secure operational communication, has made the ability to eavesdrop on these devices of paramount importance for both the GRU and the FSB.

The challenge for Moscow is that collecting these types of signals is not a trivial feat at scale. The cryptographic protocols used by popular EMAs have withstood rigorous public scrutiny, and it is unlikely Russia’s services are capable of quietly breaking them. Phones at the front are also unlikely to be connected to mobile networks where geolocation and other signals can be reliably collected upstream through compromised telecommunications infrastructure or by electronic warfare capabilities. This has driven the intelligence services to adopt a few operational concepts to fill this critical collection gap.

One method has been conventional attempts at full-device compromise using malware, more often than not, disguised as applications used by the Ukrainian military. While this tradecraft is not altogether new – the GRU first altered a Ukrainian app to geolocate artillery units in 2016 – the masking of malware as versions of mobile applications has increased significantly in response to Kyiv’s suite of software-driven military innovations. These operations have generally relied on highly tailored social engineering, repurposing legitimate military communications, and directly interacting with targets over Signal and Telegram chats to build rapport before delivering the malicious applications.

The other more novel method has been to siphon messages through the device-linking feature built into common EMAs. One Russian military-affiliated unit has dedicated its focus to social engineering Ukrainian soldiers into linking Russian-intelligence controlled instances of EMAs including Signal, Telegram and WhatsApp to their accounts. Similarly focused FSB operations have centred on exploiting systems already linked to Ukrainian soldiers’ phones. According to Microsoft, cyber operators linked to Center 16, the FSB’s main SIGINT unit, have shown a specific interest in stealing files containing messages from the Signal Desktop application, providing them access to the target’s private Signal conversations and attachments.

In a similar vein, the GRU is also engaged in the close-access exploitation of mobile devices and other systems captured by Russian forces on the battlefield to achieve similar access. Here, cyber operators have begun to technically enable their counterparts within the Russian military to independently initiate the collection of intelligence from Ukrainian devices.

For example, the author’s Mandiant research has highlighted how the GRU’s Main Center for Special Technologies (GTsST), commonly known as APT44 or Sandworm, has provided dedicated infrastructure and technical instructions to Russian ground forces so that they can exfiltrate Telegram and Signal communications from captured devices at the front. The Security Service of Ukraine (SBU) has similarly reported on Sandworm using captured devices as a foothold to deliver malware known as Infamous Chisel to penetrate military networks and gather data on connected Starlink terminals and the suite of specialised applications used by the Ukrainian military.

Another major line of effort has been to penetrate the digital systems used by the Ukrainian army for command and control, situational awareness and other operational needs. It is no secret that digitised battlefield management systems like Delta and Kropyva have been a critical enabler of information and combat advantages for the Ukrainian army. In fact, Moscow has perceived these systems to be so effective that it has undertaken efforts to develop exact replicas for the Russian military. Unlike attempts to deliver malware disguised as these applications to compromise endpoints, this category of operations has instead focused on tricking soldiers to give up their credentials, providing Russia’s services a surreptitious lens into Kyiv’s common operational picture.

Beyond targeted efforts to gain access to devices and systems used by Ukrainian soldiers, Russia has also reoriented its cyber forces to help locate Ukrainian military equipment and positions. The SBU has warned of Russian efforts to control compromised webcams in population centres to locate Ukrainian air defences and other critical infrastructure objects and feed targeting data into its reconnaissance-strike complex. Dutch military intelligence has similarly alerted publics to the overall refocusing of Russia’s cyber campaign, highlighting operations designed to locate and map military positions and equipment for later physical seizure. Those providing assistance to Ukraine should factor in the potential risks of this cyber-enabled surveillance activity, as the intensifying campaign of sabotage across Europe strongly indicates that insight into Western military supply chains is a clear collection priority for Russia’s intelligence services at the moment.

Notably, each of these new operational concepts point to a deepening two-way relationship between Russian cyber and conventional forces, and the extension of their early coordination efforts to now encompass both strategic and tactical objectives. What’s more, they signal that for specific operations, Russian cyber elements have likely also moved closer to the front to capitalise on the short-lived tactical intelligence that these mobile devices might provide. Looking forward, it is reasonable to expect further adaptations and operational concepts to arise from this closer relationship as the war continues.


### Implications For Ukraine and NATO

The main takeaway for Western policymakers is that mobile devices have become a critical centre of gravity for Russia’s cyber campaign in Ukraine. The war’s technology-dense and sensor-rich frontlines have placed a premium on the ability to collect signals from soldiers’ devices and the digital networks that connect them. With new technologies continuing to shape the battlefield and drive tactical innovations on the front lines, these types of operations are only likely to grow more common as the war continues.

___`Ukraine’s impressive defensive feats aside, Russia’s adapted force employment demands renewed attention on how to best sustain international support for Ukraine’s cyber defences`___

What is important to recognise is that this is a fundamentally different technology environment where earlier lessons about the capacity of governments and the private sector to support Ukrainian cyber defences are less likely to hold. Visibility into sensitive military networks and mobile devices is much more opaque, virtual incident response is more difficult, and fewer defensive partners are likely to have capabilities readied for this type of security assistance. Ukraine’s impressive defensive feats aside, Russia’s adapted force employment demands renewed attention on how to best sustain international support for Ukraine’s cyber defences. This is especially important now that other emerging threats are increasingly consuming limited intelligence resources and attention.

Equally as important, we must begin to acknowledge that the second-order consequences of these espionage operations can be grave. Take, for example, the lethal strike on Ukraine’s 128th Mountain Assault Brigade in November 2023 that was traced back to the penetration of a soldier’s Signal account. At a time when conventional wisdom has grown dismissive about the military benefit that cyber operations have afforded Russia, it is important that we carefully consider the implications of this mission realignment and what it portends about cyber’s expanding role in kinetic, conventional operations now that attrition is the key element of Russia’s strategy.

Malicious linked devices will continue to provide intercepts even when phones are disconnected, destroyed or otherwise inactive, as Signal messages do not need to route through the target’s phone to be delivered to a linked device. Communications will therefore still reach Russian operators even when they will not necessarily reach the intended Ukrainian recipient. As one Ukrainian expert puts it, if “a soldier from a battalion group gets captured or dies, his phone falls into the hands of the enemy, and the Russians read all the correspondence in this group for another month”. The long-tail impact of these operations can be severe.

We should also be prepared for Russia’s new operational concepts to proliferate outside of Ukraine. Today, Signal and other EMAs have become standard practice for sensitive communications. These applications see ubiquitous use by Western militaries, politicians, civil-society groups, and other common targets of Russia’s intelligence services. Russia’s war-focused tactics could therefore reasonably see wider use to fulfil other urgent intelligence requirements, such as the collection of foreign political intelligence from Ukraine’s partners, or in potential efforts to influence one of the many consequential Western elections on the horizon. If history has taught us anything, it’s that Russian tradecraft rarely stays confined to Ukraine.

---

__Dan Black__ is a Manager of Cyber Espionage Analysis at Google Cloud’s Mandiant, overseeing analysis of government-backed cyber operations. He is also currently a senior researcher with the European Cyber Conflict Research Initiative (ECCRI).
