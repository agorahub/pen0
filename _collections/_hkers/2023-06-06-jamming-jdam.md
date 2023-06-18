---
layout: post
title : Jamming JDAM
author: Thomas Withington
date  : 2023-06-06 12:00:00 +0800
image : https://i.imgur.com/ul9c5i5.jpg
#image_caption: ""
description: "The Threat to US Munitions from Russian Electronic Warfare"
excerpt_separator: <excerpt/>
---

_Leaked US documents show that Russian electronic warfare may be having a negative effect on US-supplied Joint Direct Attack Munitions, a panoply of kits outfitting “dumb” bombs._

<excerpt/>

The Joint Direct Attack Munition (JDAM) began life in the wake of the US-led Operation Desert Storm which evicted Iraq from Kuwait in 1991. Lessons learned from the campaign by the US armed forces included the need for an all-weather precision munition. The concept would harness the US Global Positioning System (GPS) Position, Navigation and Timing (PNT) satellite constellation. GPS had been a star performer in Desert Storm. Catapulted into the public consciousness, GPS systems used by the Coalition helped weapons find their targets and troops reach their objectives. Since then, GPS has become a standard feature of military and civilian life.


### What is JDAM?

The JDAM’s name is – to an extent – a misnomer, as it is not a weapon per se. Instead, the term covers a panoply of kits outfitting an array of “dumb” bombs. These kits equip the mid- and tail-section of an unguided bomb and contain the GPS and an Inertial Guidance System (INS). The INS, which does not depend on GPS PNT signals, also helps the weapon’s precision. Today, 15 different JDAM kits are in service, equipping a range of bombs weighing from 500 lb (225 kg) to 2,000 lb (900 kg).

The basic concept of operations for JDAM is for the guidance kit to be loaded with the target’s coordinates, most probably latitude and longitude. These coordinates are either transferred from the aircraft or loaded before the sortie. Target coordinates can also be updated during the mission. The weapon is released, and the tail unit continually receives signals from the GPS constellation on the bomb’s position relative to the target. The bomb’s trajectory is continually adjusted by the fins on the tail unit as it heads towards the target, based on the PNT information it is receiving and the data provided by its INS. Publicly available figures indicate that JDAM guidance kits can hit within 5 m (16 ft) of a target or less. Should the GPS signal be unavailable, the INS can steer the bomb to within 30 m (98 ft) of the target.


### Into Ukraine

JDAM deliveries commenced in 1997, with the weapon making its combat debut two years later during NATO’s Operation Allied Force in 1999. NATO’s air campaign was directed against the Federal Republic of Yugoslavia to end the suppression of Kosovar ethnic Albanians. Since then, JDAM has been used in successive conflicts involving the US, with JDAM kits exported to over 30 countries, including Ukraine. The latter received the JDAM Extended Range (JDAM-ER) system, which gives a 500 lb bomb similar accuracy, but an extended range of 43 nautical miles (80 km). This helps Ukrainian Air Force (UAF) jets deploying the weapon to stay outside the engagement envelope of Russian short-range air defence systems like the Pantsir-S1 (NATO reporting name SA-22 Greyhound).

___`It is no secret that Russian land forces have deployed scores of electronic warfare systems into the Ukrainian theatre of operations`___

Exact information on the effectiveness of JDAM-ER in Ukrainian hands has not reached the public domain for understandable reasons. Nevertheless, in March, a UAF spokesperson praised the bombs’ accuracy and urged the US to supply more. JDAM was in the news again one month later, but this time for less auspicious reasons. A trove of classified US Department of Defense documents revealed concerns over the efficacy of Russian electronic warfare (EW) jamming of JDAM and other US-supplied weapons using GPS.


### Russian Counter-GPS Tactics

The documents articulated US concerns that Russian jamming was causing some JDAM-ER munitions to miss their targets. It is no secret that Russian land forces have deployed scores of EW systems into the Ukrainian theatre of operations. Some of these are specifically designed to jam GPS transmissions, the Russian Army’s R-330Zh Zhitel system deployed at the tactical level being a notable example. The R-330Zh detects and attacks radio signals across wavebands from 100 MHz to 2 GHz. Open sources say the system can transmit jamming signals with 10 kW of power. Signals from the US GPS satellites which JDAM kits use are transmitted on wavebands from 1.164GHz to 1.575GHz. These fall squarely within the R-330Zh’s catchment area. Official documents seen by the author state that the system has a jamming range of up to 30 km (18.6 miles).

GPS signals are very weak by the time they have travelled the 10,900 nautical miles (20,200 km) from the satellite to Earth. Radio signal strength is typically measured in decibels-per-milliwatt (dBm). GPS signals can have a strength of circa −127 dBm by the time they reach Earth. Such weak signals can be easy to jam with comparatively little power. To put matters into perspective, a back-of-the-envelope calculation suggests that the R-330Zh can generate a jamming signal strength of −70 dBm. Like a long-distance runner, radio signals lose strength the further they travel. Thus, the R-330Zh’s signal may reduce by between −123 dBm and −126 dBm, depending on the jamming frequency, by the time it travels its full 30 km range. Nonetheless, even at between −53 dBm and −56 dBm, it is still notably stronger than the strength of the GPS signal arriving from space. Moreover, the closer the GPS receiver is to the R-330Zh’s jamming antenna, the stronger the jamming signal becomes.

The US has made strenuous efforts to mitigate the jamming risk to JDAM. In the early 2000s, the Selective Availability Anti-Spoofing Module (SASSM) upgrade was rolled out across the JDAM fleet. This included the addition of guidance kits using M-Code GPS transmissions. M-Code is the encrypted military GPS signal. The JDAM’s GPS receiver will only accept signals with this encryption, excluding all others. Technically, if jamming signals are being transmitted from an R-330Zh, the JDAM munition should ignore these as they lack the appropriate encryption.


### Why is This Happening?

Despite the steps the US has taken to safeguard JDAM’s resilience to global navigation satellite system (GNSS) jamming, it may still be vulnerable. One senior EW expert told the author that, even with SASSM, the sheer brute force of a powerful jamming signal can prevent the JDAM’s GNSS receiver from obtaining the encrypted signal. Steps can be taken to try to nullify any jamming. The exact capabilities of the JDAM’s GNSS systems are understandably classified. Counter-EW provisions may include the system recognising a jamming signal and its direction. The receiver may then be able to “block out” signals coming from that direction, while continuing to receive GNSS signals from unaffected areas. A GNSS receiver will typically need to “see” – that is, have an uninterrupted Line-of-Sight (LOS) with – at least four satellites. Often, a GNSS receiver has more satellites than this within range. Thus, blocking off the direction of the jamming signals will not necessarily deprive the receiver of being able to “see” other satellites.

___`Jamming is not causing JDAMs to stop working, but it is risking their accuracy – arguably a key selling point of the weapon`___

However, it is possible that Russian forces may choose to protect potential JDAM targets with multiple jammers, enabling signals to hit the GNSS receiver from two or more directions. This could deprive the receiver of the LOS range to unjammed GNSS signals. Above all, the problem may well be the sheer power of the jamming signal that can be brought to bear, as shown by the R-330Zh.

One problem for the Russians is that a powerful jamming signal may be comparatively easy for Ukrainian EW experts to detect. Once the jamming signal is detected and identified as such, the jammer’s latitude and longitude could then be determined. These coordinates could be passed to artillery and engaged with kinetic fires. This tactic may help to explain some of Russia’s EW equipment losses.

Another problem is that transmitting a huge amount of jamming power across the frequencies used by PNT signals has the potential to jam any other radio traffic weaker than the jamming signal. This could include friendly receivers like satellite communications terminals and GNSS systems. For example, Russia’s GLONASS GNSS constellation transmits some signals which are similar to GPS. These risk being jammed by friendly signals. Evidence from Ukraine suggests that the Russian Army regularly suffers electromagnetic fratricide to this end. The force often exhibits scant concern for jamming friendly signals when attacking its enemies.

The EW expert also told the author that it is possible to spoof GNSS signals. For example, an EW system receives the incoming M-Code transmitted from space. It takes the signal and retransmits it, but with a stronger amplification. The JDAM system may recognise this signal as legitimate, but the fake signal may be subtly modified to feed false information into the GNSS system. Hypothetically, the M-Code could be modified and retransmitted in such a way as to deceive the JDAM vis-à-vis its position in time and space. This could then affect the munition’s accuracy.


### What Now?

Although Russia’s GNSS jamming activities may not be cost-free from an electromagnetic fratricide and hard kill vulnerability perspective, the leaked US documents show that it is having an impact. Jamming is not causing the JDAMs to stop working, but it is risking their accuracy – arguably a key selling point of the weapon. This is a potential problem when comparatively small targets are being engaged. US GNSS engineers may have to rethink how they safeguard JDAMs for the wars of tomorrow, based on the conflicts of today.

---

__Thomas Withington__ is an award-winning analyst and writer specialising in electronic warfare, radar and military communications. He has written widely on these subjects for a range of specialist and general publications. He also works as a consultant and adviser in these areas for several leading government and private sector clients.
