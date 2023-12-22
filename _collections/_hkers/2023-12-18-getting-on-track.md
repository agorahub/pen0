---
layout: post
title : Getting On Track
author: Masao Dahlgren
date  : 2023-12-18 12:00:00 +0800
image : https://i.imgur.com/JzeDok0.png
#image_caption: ""
description: "Space and Airborne Sensors for Hypersonic Missile Defense"
excerpt_separator: <excerpt/>
---

_The conflict in Ukraine has made it clear that missiles “are foundational to adversaries’ way of war.” Future missile threats, however, increasingly stress existing missile defenses, flying lower, faster, and on unpredictable trajectories. Most importantly, they are difficult to detect — defeating them will require elevated sensors, on aircraft or satellites, to track them at range._ <excerpt/> _As the Department of Defense begins to deploy a space-based sensor constellation, Getting on Track unpacks the design tradeoffs involved and key pitfalls to avoid. Using advanced simulation tools, the authors underscore the necessity of diversifying satellite orbits, designing constellations for early, persistent coverage, and retaining requirements for fire-control-capable sensors._


### Key Findings

- A new, elevated sensor architecture is required to detect, identify, and track a spectrum of maneuvering missile threats with sufficient quality to support missile defense fire control. These threats combine high speeds, unpredictable, non-ballistic trajectories, and large raid sizes to stress legacy defense designs.

- The future of missile defense and missile defeat will be contingent on the development, characteristics, and fielding timeline of this architecture. One cannot defend against what one cannot see.

- There is no such thing as a perfect sensor architecture design. Designing an elevated sensor architecture is rather an exercise in tradeoffs. Given this multiplicity of trades, architecture design is as much an art as a science. The application of this art to specific designs reflects various institutional and policy assumptions.

- Unpacking these tradeoffs and assumptions — making them explicit — can help policymakers, budgeteers, and system architects, and better inform the public discussion related to missile tracking and missile defense. Doing so is the purpose of this report. This report does not advocate a particular architecture, but instead elaborates these tradeoffs, identifies principles to inform future architectures, and highlights temptations to avoid.

- No single orbit or domain represents an optimal approach for missile defense sensing. Low (LEO), medium (MEO), geosynchronous (GEO), and highly elliptical orbits (HEO) each contribute varied advantages for coverage, schedule, cost, and resilience.

- Proliferating space sensors in LEO is one way to improve resilience, assuming large numbers and low-cost replacement. It is not the only way. Reliance on a single orbital regime, or on any single approach to resilience, invites disruption. LEO constellations can be degraded by area- or domain-wide effects, including electronic attack, nuclear or radiological means, and the intentional generation of debris.

- The Department of Defense’s recently updated plan to deploy a mixed-orbit missile tracking constellation is thus a welcome step for enhancing resilience. Sensor architectures should complicate adversary targeting by leveraging the unique benefits and drawbacks of multiple orbits and domains.

- The deployment phasing of a sensor architecture is as critical as its final delivery date. Choices over orbital configurations not only affect final sensor coverage but how coverage develops over time. Sensor constellations optimized purely for coverage efficiencies do not necessarily generate persistent coverage until most elements are deployed. For nearer-term coverage, especially for the lower latitudes relevant to the Indo-Pacific and other theaters, policymakers should be attentive to the pacing of sensor fielding, not only the final product — graceful deployment as well as graceful degradation.

- While a space-based sensor architecture is necessary for global missile tracking coverage, a suborbital underlay of airborne sensors could improve point or regional coverage, hedge against schedule or capability gaps of orbiting sensors, and enhance overall system-level survivability. Airborne sensors offer unique detection modalities and could support persistent, localized coverage unbounded by the predictability and rigidity of orbital mechanics.

- Sensor fusion is a major and underappreciated source of schedule risk. Delays in developing sensor fusion software and infrastructure contributed significantly to past space program cost and schedule overruns. Further steps are needed to prioritize command and control and fusion algorithm development for larger satellite constellations and multiple sensor types.

- Fire control-quality tracking must be a fundamental requirement for the emergent elevated sensing architecture. The technical requirements for fire control tracks are relative measures, contingent on the performance of other elements in the missile defense kill chain. Less stringent track data requirements would require interceptors with costlier, more capable seekers or more ability to maneuver to compensate for positional uncertainties. Conversely, more accurate sensor data would both improve the performance of existing systems and ease design requirements for future interceptors.

- Infrared sensor performance is a function of the target’s signature and the sensor’s resolution, sensitivity, and field of view. Both wide- and medium-field-of-view sensors share promise for fire control-quality tracking. In recent years, Congress has prudently scrutinized and sustained efforts to deploy fire control sensors, including the Hypersonic and Ballistic Tracking Space Sensor (HBTSS), which is slated to transfer from the Missile Defense Agency to the Space Force around 2026. Whatever the sensor configuration and type, it is imperative that fire control efforts cross the valley of death and deploy at scale.

- Many of the technologies and programs to realize an elevated sensor architecture are in place, but a disciplined acquisition and systems engineering authority will be needed to align its many components. Policymakers must exert oversight to ensure schedule discipline, orbital and systems diversity, and continued attention to missile defense fire control requirements.

- Acquiring this new elevated sensor architecture will be an exercise in avoiding certain temptations. These include temptations to optimize global coverage efficiencies at the expense of schedule and resilience, to consolidate assets into a single orbital regime, and to abdicate fire control requirements.


### The Elevated Sensing Imperative

In this new missile age, adversaries and allies alike are acquiring a broad spectrum of standoff capabilities. New and emerging categories of weapons include hypersonic glide vehicles, scramjet cruise missiles, maneuvering reentry vehicles, and orbital bombardment systems. These and other advanced missiles have become “weapons of choice” for competitors, who are conceiving new means to evade legacy missile defenses and hold critical assets at risk. The sophistication, diversity, and number of missile threats continue to advance.

Conflicts in Ukraine and elsewhere have confirmed the centrality of missile strike and the corresponding need for missile defense. As part of a comprehensive approach, active missile defenses have become foundational to broad deterrence and defense goals. Today’s missile defense capabilities, however, are coming under increasing stress. Today’s spectrum of threats leverage high speeds, unpredictable maneuvers, and different trajectories to exploit gaps and seams in legacy missile defenses. New classes of hypersonic missiles, for instance, threaten to underfly the radar horizons of surface-based radars, leaving insufficient time for a defender to react (Figure 1). One cannot defend against what one cannot see.

Contending with these threats will require specific attention to modernizing the sensor architecture. The missile defense enterprise requires elevated sensors to detect, identify, and track them before and after launch. Compared to surface-based sensors, those on satellites or aircraft offer longer lines of sight for tracking hypersonic and other advanced missile systems. As such, the 2022 Missile Defense Review noted that space-based sensing will be “critical to any future integrated sensor network.”

Elevated sensing has thus become an acquisition priority for the U.S. Department of Defense (DoD). Through its component Space Development Agency (SDA) and Space Systems Command (SSC), the U.S. Space Force has invested billions to acquire space-based sensors for missile warning and tracking (Figure 3). The Missile Defense Agency (MDA), meanwhile, is prototyping space sensors for missile defense fire control — the process of guiding interceptors to an incoming threat (Figure 2). These and other stakeholders have advanced different visions for the future sensor architecture. The question now is how to reconcile and implement these visions, and on what timeline.

![image01](https://i.imgur.com/BfafdtU.png)
_▲ __Figure 1: Radar Line of Sight Limitations.__ Source: CSIS Missile Defense Project._

#### Elevated Sensing Missions

The DoD is developing satellite constellations to perform multiple sensing missions, including missile warning, missile tracking, and fire control (Table 1). These lines of effort include the Next Generation Overhead Persistent Infrared (Next Gen OPIR) and Resilient Missile Warning/Missile Tracking (RMW/MT) satellite constellations, which will recapitalize existing missile warning capabilities and track hypersonic and advanced missile threats throughout their trajectory, from birth to death.

While significant work on next-generation missile warning satellites continues, such efforts are not discussed here in detail. This report is instead focused on efforts to develop space-based missile tracking capabilities, especially for fire control — activities traditionally performed with ground- and sea-based radars.

![image02](https://i.imgur.com/9oEcYdk.png)
_▲ __Figure 2: Missile Defense Space Assets.__ Source: Missile Defense Agency._

The United States currently relies on the Space Based Infrared System (SBIRS) and Defense Support Program (DSP) satellites to provide global missile warning — persistent notification of missile launches in support of strategic nuclear deterrence and other defense and intelligence missions. As contributors to the Ballistic Missile Defense System (BMDS) Overhead Persistent Infrared Architecture (BOA), SBIRS and other sensors support the Missile Defense System (MDS) by providing early missile tracking data to cue its broader network of sensors. This initial detection sets the missile defense targeting process in motion, cueing a sophisticated network of ground and maritime radars to determine the positions, trajectories, and signatures of ballistic missiles.

As incoming missiles continue to fly, the MDS synthesizes sensor measurement data into three-dimensional “tracks”: estimations of the missile’s position and trajectory. Different sensors deliver track information at different quality levels, with different degrees of latency and positional uncertainty, for different numbers of threat objects. These tracks must then be fused together into a single, trusted picture.

It is one thing to know that some number of missiles have been launched and that they are headed in a general direction. It is another to know how many, where they will be at a given moment, and thus how to defeat them. Using sufficiently accurate tracking data, a missile defense system can develop a fire control solution, determining when to launch one or more interceptors, what trajectory the interceptors should travel, and other considerations for engaging the targets. “Fire control-quality” tracks are those with the position and time accuracy sufficient for a missile defense system to generate an intercept solution.

![image03](https://i.imgur.com/n02uRIk.png)
_▲ __Table 1: Elevated Sensing Missions.__ Source: CSIS Missile Defense Project._

The technical requirements for fire control-quality tracks are relative measures, contingent on the performance of other elements in the missile defense kill chain. Less stringent track data requirements would require interceptors with costlier, more capable seekers or more ability to maneuver to compensate for positional uncertainties. Conversely, more accurate sensor data would both improve the performance of existing systems and ease design requirements for future interceptors. General James Dickinson, commander of U.S. Space Command, recently noted that fire control-quality tracking “is going to determine the success or failure of whatever weapon system you’re employing to defeat that threat.” Realizing it is therefore “exceptionally important.”

While the functions of future missile defense engagements will remain similar to those of the past, the characteristics of several new classes of missile threats will impose new requirements for the sensing architecture. Surface-based tracking of new and emergent maneuvering missile threats remains both useful and necessary for the spectrum of missile threats, but it is insufficient for some of the newer types. Earth’s geometry limits surface-based radar from detecting and engaging lower-flying targets, including hypersonic weapons. Given these new threats, missile defenses require elevated sensors for the missile tracking mission, and to do so with more highly detailed, lower-latency trajectory estimations to support the fire control mission.

___`“Fire control-quality” tracks are those with the position and time accuracy sufficient for a missile defense system to generate an intercept solution.`___

Achieving this vision will carry enormous challenges. The effective employment of fire control quality tracks will require new processing, networking, and sensor fusion capabilities to synthesize missile tracks and compute fire control solutions. Precise tracking furthermore demands attention to a wide variety of new threat signatures, the presence of background clutter, future countermeasures, and other challenges. Addressing these problems will be difficult, but it must be done.

Requirements for the future elevated sensor architecture are tightly coupled with every other aspect of the missile defense kill chain. Sensor design requirements drive interceptor design requirements — the schedule for one affects the schedule for the other. Sensor capability may therefore be compared to a locomotive that pulls other missile defense capabilities forward. In the words of Frank Turner, technical director of the Space Development Agency, “Schedule is king. The train is going to leave the station on time.”

> #### `2023 National Defense Authorization Act`

_`“In carrying out the analysis of candidate fire control architectures, the Secretary of the Air Force shall ensure that the Director of the Space Warfighting Analysis Center of the Space Force, at a minimum, maintains the requirements needed for the missile defense command and control, battle management, and communications system to pass the needed quality data within the timelines needed for current and planned interceptor systems to support engagements of ballistic and hypersonic threats.”`_

#### Unpacking the Tradeoffs: Art and Science

There is no such thing as a perfect sensor architecture design. Designing an elevated sensor architecture is rather an exercise in tradeoffs. There are, for instance, a multiplicity of trades among orbital altitudes and inclinations, sensor phenomenologies, and other variables. Assumptions about future threats to the architecture influence final design configurations and standards for survivability and resilience. Decisions about schedule, or when certain capabilities are necessary, likewise affect technical requirements.

![image04](https://i.imgur.com/d8SpAR0.png)
_▲ __Figure 3: SDA Tracking Layer Deployment.__ Source: Space Development Agency._

Given this multiplicity of trades, architecture design is as much an art as a science. The application of this art in specific force designs reflects institutional and policy assumptions.

These system- and architecture-wide tradeoffs have been all too implicit in the public conversation about sensor architecture acquisition, presenting an oversight challenge. The number of considerations makes it difficult to define clear metrics for success, a challenge made more complex by the number of stakeholders involved and continual revisions made to their architectures. Clearer goalposts are needed to understand, align, and implement an acquisition strategy.

Unpacking these tradeoffs and assumptions — making them explicit — can help policymakers, budgeteers, and systems architects, and better inform the public discussion related to missile tracking and missile defense. Doing so is the purpose of this report. This report does not advocate a particular architecture but instead elaborates these tradeoffs, describes ongoing acquisition efforts, and identifies policy temptations to avoid. From these, three principles become relevant to the acquisition of a future architecture.

___`Given this multiplicity of trades, architecture design is as much an art as a science.`___

One principle is that __an elevated sensor architecture should be diversified across multiple orbits and domains.__ Technological advancements in commercial space have generated enthusiasm for proliferated, commoditized low Earth orbit (LEO) constellations. Surviving a peer threat, however, will demand more. Proliferating space sensors in LEO is one way to improve resilience, assuming large numbers and low-cost replacement. It is not the only way. Reliance on a single orbital regime, or on any single approach to resilience, invites disruption. LEO constellations can be degraded by area- or domain-wide effects, including electronic attack, nuclear or radiological means, and the intentional generation of debris. For further altitude diversification, a suborbital underlay of airborne sensors could improve point or regional coverage, hedge against schedule or capability gaps of orbiting sensors, and enhance overall system-level survivability. As tempting as it may be to consolidate acquisition efforts to one orbital domain, a multi-orbit and multi-domain architecture is likely to be more survivable.

Another principle is that __an elevated sensor architecture should deploy gracefully.__ The deployment phasing of a new sensor architecture is as critical as its final delivery date. Some constellation designs do not generate persistent coverage until nearly all elements are deployed. For nearer-term coverage, especially for the lower latitudes of the Indo-Pacific, policymakers should be attentive to the pacing of sensor fielding, not only the final product — graceful deployment as well as graceful degradation. Lower-inclined orbits or airborne assets may be useful for early coverage of critical areas. Sensor fusion is another major and underappreciated source of schedule risk. More must be done to accelerate development of software and ground systems to knit these pieces together. Schedule is king.

Finally, __an elevated sensor architecture must deliver fire control-quality tracking to support active missile defense.__ Requirements for data quality should be developed in close connection with the characteristics and limitations of interceptors or other effectors. While much attention has been paid to developing elevated missile warning and missile tracking capabilities, Congress has prudently scrutinized and sustained efforts to deploy fire control sensors. Whether through the Hypersonic and Ballistic Tracking Space Sensor (HBTSS), its derivatives, or some future wide-field-of-view sensor, it is necessary to accelerate and scale a fire control sensor network for the missile defense mission. In recent years, SDA has taken valuable additional steps to incorporate fire control sensors in its proliferated constellation. It is worth considering how to sustain this momentum and achieve fire control capability in the near term.

#### Modeling the Problem

This report’s analysis is informed in large part by internal modeling and simulation conducted by the CSIS Missile Defense Project (MDP). The research team used ANSYS/AGI’s Systems Toolkit (STK) and Iroquois Systems/Lockheed Martin’s SMARTSet tools to model key tradeoffs in constellation design. Many of the images included resulted from optimization studies involving nearly a million simulations and numerous days of computing time. To speed this process, MDP acquired and assembled dedicated hardware to accelerate computing tasks. Further details on modeling and methodology are described in the appendix.

The team modeled constellation and sensor design tradeoffs in STK’s synthetic environment. To visualize the infrared signatures pictured in the report, MDP leveraged the STK Electro-optical Infrared (EOIR) simulation module, creating a scenario (Figure 4) to investigate hypersonic tracking challenges. To construct the scene, the team created original 3D models of notional hypersonic weapons (Figures 5 and 7) and imported and processed National Aeronautics and Space Administration’s (NASA) infrared terrain data (Figure 6).

Additionally, MDP performed optimization studies to assess how different constellation designs could impact sensor coverage. The research team conducted basic assessments of altitude, coverage, and custody against hypersonic targets using SMARTSet and performed more detailed analyses with STK’s Analyzer tool, which can automatically test and evaluate design possibilities. Many of these analyses revolved around constellation designs and their impact on sensor coverage; these are pictured throughout the report. The number of potential designs evaluated encompassed nearly one million simulation runs.

These studies are useful for describing the tradeoffs at play in acquiring an elevated sensor architecture. It is a low-fidelity modeling effort, and intentionally so — meant to illustrate high-level principles rather than prescribe specific designs. Scenarios were constructed to be generalizable and reproducible, and to demonstrate the relationship between changing sensor fields of view, inclinations, altitudes, and other variables. The constellations and sensors described herein are not presented as recommendations. They are meant to inform the conversation and draw out unexamined assumptions.

![image05](https://i.imgur.com/oQq3FYW.png)
_▲ __Figure 4: Simulated Hypersonic Tracking Scenario.__ Source: CSIS Missile Defense Project._

![image06](https://i.imgur.com/1Tj1Wz9.png)
_▲ __Figure 5: 3D Model Used in Simulated Scenario.__ Source: CSIS Missile Defense Project._

![image07](https://i.imgur.com/8VznfMV.png)
_▲ __Figure 6: NASA Infrared Scene Data.__ A visualization of NASA VIIRS geodata, generated through Panoply with postprocessing applied. Source: CSIS Missile Defense Project with NASA data._

![image08](https://i.imgur.com/ynNczwO.png)
_▲ __Figure 7: CSIS Hypersonic Vehicle Signature.__ An infrared view of the CSIS simulated hypersonic glide body, displaying temperature differentials across the upper and lower sides. Source: CSIS Missile Defense Project._


### Sensor Tradeoffs

Any discussion of design tradeoffs must begin with the sensors themselves. Constellation designs for missile tracking are constrained by the performance of their sensors, which must be able to distinguish the signatures of hypersonic and ballistic weapons and resolve their positions accurately.

Although many approaches are possible, the United States has historically addressed the space-based missile sensing problem with infrared sensors, which passively detect the thermal signatures of threat missiles. Infrared and other electro-optical sensors can meet the demanding size, weight, and power requirements of space-based platforms and have continued to improve in resolution, sensitivity, and cost.

While these technologies are mature, missile tracking and fire control with infrared sensors is more challenging than missile warning. Today’s geosynchronous missile warning sensors can detect the large, hot exhaust plumes of missiles as they launch but cannot provide detailed tracking information after this initial boost phase.

Future missile tracking and fire control sensors must be capable of tracking hypersonic weapon signatures beyond the boost phase, where their infrared signatures diminish (Figure 8). Distinguishing a hypersonic heat signature against the Earth’s background has been likened to tracking “a slightly brighter candle in a sea of candles,” requiring extensive testing to validate.

![image09](https://i.imgur.com/zW3n0VR.png)
_▲ __Figure 8: Hypersonic and Ballistic Signatures.__ Source: CSIS Missile Defense Project._

![image10](https://i.imgur.com/4Ud1slW.png)
_▲ __Figure 9: Missile Signature Comparison and Detectability to SBIRS.__ Source: U.S. Air Force._

![image11](https://i.imgur.com/HH0mocS.png)
_▲ __Figure 10: Simulated Infrared View of Hypersonic Signature.__ An infrared sensor at a 1,000 km orbit images a hypersonic weapon located in the center of the frame. Given the sensor’s resolution, the missile is too dim to visually distinguish from surrounding objects (top). Detecting them requires computational processing, in this case by compositing multiple frames and computing the motion of pixels (center). An enlarged crop of the false-color image at center emphasizes the extracted hypersonic signature (bottom). Further details are available in the appendix. Source: CSIS Missile Defense Project._

![image12](https://i.imgur.com/tgJa8AM.png)
_▲ __Figure 11: Surface Thermal Gradient of Space Shuttle Orbiter during Hypersonic Reentry.__ Thermal imaging simulations of the Space Shuttle orbiter display the considerable temperature discrepancies possible in hypersonic flight. Source: NASA._

#### Sensors, Field of View, and Architecture

These and other factors affect the number and configuration of sensor platforms in an architecture. By flying lower than hypersonic and ballistic weapons, air-based sensors offer advantageous views of hot hypersonic weapons against cold space backdrops — but lack the extended sightlines of space-based sensors. Space sensor constellations, meanwhile, must be carefully optimized for a variety of factors, including solar exclusion (viewing angles where sunlight overwhelms the sensor), orbital dynamics, and other variables.

An infrared sensor architecture must also be sized to ensure coverage by two sensors at once. Unlike with radar, a single infrared imaging sensor cannot resolve a target’s position in three dimensions. Two sensors — simultaneously viewing the target — are needed to triangulate a three-dimensional track of a missile’s altitude, position, and heading (Figure 12). Stereo (two-sensor) or greater tracking is a baseline requirement for infrared sensor constellations. Additional redundancy may be needed to account for survivability constraints, maintenance downtime, and other factors.

![image13](https://i.imgur.com/nZfr7A6.png)
_▲ __Figure 12: Depiction of Stereo Tracking.__ Source: Missile Defense Agency._

Most critically, each sensor’s FOR can affect the number of satellites necessary for a space-based sensing constellation. Sensors with a wide FOR can view a wider area of Earth’s surface, either by pivoting across a wide swath or by possessing a wide-angle optic (Figure 13). Even relatively minor changes in FOR can have considerable effects on coverage footprint and, consequently, the number of required satellites (Figure 14). For instance, a given 91-satellite constellation at 1,000 km can provide persistent global coverage with a 120-degree FOR but cannot do so with 110-degree or 100-degree FORs (Figures 16 and 17).

![image14](https://i.imgur.com/Hq8Fqmt.png)
_▲ __Figure 13: Satellite Field of Regard.__ The three satellites visualized are in low Earth orbit (1,000 km) and have total sensor fields of regard of 100, 110, and 118 degrees, respectively. At this altitude, the curvature of the Earth limits increases in line of sight beyond 120 degrees. Source: CSIS Missile Defense Project._

![image15](https://i.imgur.com/HJGaQFZ.png)
_▲ __Figure 14: Field of Regard Footprints.__ Left to right: Altitude coverage footprints of 100-, 110-, and 118-degree fields of regard. Source: CSIS Missile Defense Project._

Selecting wider FORs reduces the number of satellites needed for coverage, but doing so imposes additional requirements on the sensor itself. For fixed sensors, increasing sensor FOR requires an increase in the sensor field of view (FOV), the angle of view immediately viewable by the sensor. In other words, fixed-sensor FOR and FOV are identical. The Space Development Agency’s Tracking Layer satellites leverage fixed sensors — its Tranche 0 satellites are required to possess a FOR/FOV of 70 to 110 degrees.

A sensor’s FOR can be larger than its FOV if it is mechanically pointed (slewed) to view a wider area. This approach is technically mature and was leveraged in past efforts, such as in the Precision Tracking Space System and SBIRS missile-warning satellites (Figure 19). Mechanical slewing allows a narrower-FOV sensor to offer a large possible coverage — or access — footprint at the cost of mechanical complexity and challenges in managing vibration, pointing error, and slewing time. As these sensors cannot view every part of their FOR at once, they introduce additional considerations for tracking large numbers of targets in various regions: on which targets to view, in what order, and how rapidly to revisit them.

These tradeoffs — between fixed and slewing, wide and narrow — are important because changes in sensor FOV affect detection performance. Holding all factors equal, increasing a sensor’s FOV will increase its pixel footprint, as each pixel on the sensor’s focal plane array (FPA) corresponds to a wider swath of the Earth’s surface.

![image16](https://i.imgur.com/qz7StYi.png)
_▲ __Figure 15: Pixel Footprint, Field of View, and Sensitivity Tradeoffs.__ Source: CSIS Missile Defense Project._

Larger pixel footprints, in turn, make it more challenging to track missile targets (Figure 14). Because hypersonic signatures are smaller than most sensor pixel footprints, their location becomes more difficult to distinguish as the pixel footprint expands (Figure 15). Moreover, larger pixel footprints increasingly “dilute” the brightness of the hypersonic signature with the signature of the surrounding terrain. The problem is akin to detecting a cup of boiling water poured into a swimming pool; a smaller pixel footprint is akin to detecting that same cup poured into a bucket. Holding all else equal, FOV influences performance and drives design decisions between slewed and fixed sensors.

![image17](https://i.imgur.com/M0mKxjL.png)
_▲ __Figure 16: Field of Regard and Coverage: 100-, 110-, and 120-Degree Sensors.__ These three-dimensional views illustrate the stereo sensor coverage of a 91-satellite, 1,000 km altitude constellation. Stereo coverage, the minimum necessary, is depicted in yellow; red areas represent simultaneous coverage by eight or more satellites. A constellation design that is viable with 120-degree sensors (right) does not provide persistent coverage with 110-degree (center) or 100-degree (left). Source: CSIS Missile Defense Project._

![image18](https://i.imgur.com/mJQIvDI.png)
_▲ __Figure 17: Field of Regard and Coverage: 100-, 110-, and 120-Degree Sensors.__ Source: CSIS Missile Defense Project._

Sensors with either narrower FOVs or more pixels can minimize these pixel footprints, thereby improving detection performance. Developments in wide-field-of-view (WFOV) sensors have been driven by developments in large-format FPAs with higher pixel counts: infrared sensors with 4,000 pixel-by-4,000 pixel (4K), 6K, 8K, or higher resolutions (Figure 18). Space Systems Command’s testbed geosynchronous WFOV satellite, for instance, leverages a large-format FPA with a 4K resolution. Early Tranche 0 technical requirements call for fixed sensors with an objective FOV of roughly 110 degrees and a pixel footprint of under 1.5 km, necessitating large FPAs.

The infrared sensor industry has continued to develop larger FPA formats, which allow the use of wider FOVs without performance compromise. But there may be some missions where WFOV, fixed-sensor approaches are challenging. The Missile Defense Agency’s HBTSS satellites, for instance, will use a mechanically slewed medium-FOV (MFOV) sensor to shrink pixel footprints and allow fine-grained, fire control-quality missile tracking. Choices between fixed WFOV and slewing MFOV sensors are dependent on the availability, maturity, and cost of these large-format FPAs. In the near term, smaller-format FPAs are available at larger quantities and lower cost.

![image19](https://i.imgur.com/27KR6oE.png)
_▲ __Figure 18: Infrared Focal Plane Array Formats.__ Source: Raytheon Vision Systems._

The size and performance of a constellation thus depends on these interlocking choices: between fixed and slewing sensors, sensor FOV, FPA format, and other factors. Maximizing sensor FOR allows a designer to minimize the satellites necessary for coverage. Doing so demands fixed sensors with wider fields of view or slewing sensors with narrower ones. System architects must balance a complex set of variables, each of which influences nearly every other aspect of the system (Figure 20).

![image20](https://i.imgur.com/qhjYHFT.png)
_▲ __Figure 19: SBIRS Sensor Fields of View.__ Source: U.S. Air Force._

![image21](https://i.imgur.com/2968OV7.png)
_▲ __Figure 20: Relation of Design Parameters.__ Source: CSIS Missile Defense Project._

![image22](https://i.imgur.com/tRSbLyF.png)
_▲ __Figure 21: Progress in Large-Format Infrared Focal Plane Arrays.__ Source: Raytheon Vision Systems, via SPIE._

#### Alternative Sensor Types

Infrared sensors are not the only means of tracking missiles from space. Hypersonic weapons emit unique signatures that can be exploited. Alternative sensor modalities, including hyperspectral and radiofrequency sensors, might therefore play important roles. A future sensor architecture could leverage multiple sensor types to track hypersonic and other advanced missile threats.

Hyperspectral or ultraviolet sensors, capable of viewing alternative bands of light, could be relevant for detecting hypersonic weapons’ novel signatures. In hypersonic flight, an object’s surface reacts with high-temperature airflow to release a wake of ions, gases, particles, and other chemical byproducts. These byproducts and their signatures might be detectable in infrared and alternative spectra (Figure 22). As with hypersonic defense, “the same characteristics that make hypersonic weapons attractive present the defender with new failure modes to exploit.”

___`Infrared sensors are not the only means of tracking missiles from space.`___

Radiofrequency sensors might offer further utility. Radar offers many advantages: its principles are well understood, it can propagate through complex weather conditions, and it can instantaneously gather target velocity data. Radars have become increasingly sophisticated and efficient; emerging multistatic and multiple-input, multiple-output (MIMO) radar technologies might offer additional utilities to the space-based hypersonic tracking problem. In addition to active methods, it may be possible to passively intercept radio emissions from data-linked missiles. The 2022 Missile Defense Review notably stated that global and persistent “space-based . . . radar . . . systems will be critical to any future integrated sensor network.”

![image23](https://i.imgur.com/6FZzfOC.png)
_▲ __Figure 22: Booster Plume Signatures and Hypersonic Plasma.__ Solid rocket boosters used to launch hypersonic weapons generate detectable infrared (IR) and ultraviolet (UV) signatures. The simulated plume signature (top) represents a broad range of physical phenomena, including the hot gas flow from the booster, external hypersonic airflow, the combusted gas and alumina particles from the burning motor, and the phase change of alumina particles. A hypersonic weapon in its glide phase encounters similarly complex interactions, generating novel wake signatures. Plasmas generated around the hypersonic weapon surface, for instance, react with gas products and particles burned off the vehicle surface (bottom). The bottom image represents plasma formation around a Mach 16, 50 km altitude hypersonic shape. Source: Iain D. Boyd, H.T. Sears Memorial Professor and Director of Center for National Security Initiatives, University of Colorado, Boulder._

Finally, infrared and other types of electro-optical sensors have continued to improve. Infrared focal plane arrays, sensor readouts, and their cooling systems have become increasingly reliable and affordable; new developments might allow simplified configurations that do not require cryogenic cooling. Furthermore, the maturation of large-format infrared FPAs are allowing increases in FOV without corresponding resolution losses (Figure 21).

This report is scoped to the infrared sensors being acquired today. But hypersonic weapons present novel signatures, enabling new approaches to detection and tracking. Provided that sensor fusion challenges can be resolved, a future architecture should integrate advancements in infrared FPAs, multispectral and radiofrequency sensors, and other means. Combining these multiple types will allow greater persistence and capability if one type is degraded, whether from environmental conditions, enemy deception, or other means of signature reduction. While it may be possible to evade one part of the electromagnetic spectrum, it is harder to evade several of them.


### Orbital Tradeoffs

Sensor performance influences the number of assets necessary to provide coverage, but there are other tradeoffs to consider. “No absolute rules” govern the design of an optimal constellation. It is possible to track hypersonic weapons from many orbits given the correct selection of sensor payloads. At the same time, better design points exist for meeting current and future threats.

This chapter reviews relevant orbits for missile sensing and identifies how they could be mixed to generate efficiencies. Basic changes in altitude and domain can impact every other aspect of performance. A more resilient constellation should mix orbits and domains in ways that maximize the advantages of each.

#### Low Earth Orbit

Marked advances in space launch and satellite manufacturing have made low Earth orbits (LEO) increasingly popular for deploying satellite constellations. Legacy satellite programs often struggled with a “vicious circle between high reliability and high costs.” High unit costs incentivized the use of expensive components to prevent failure, and the use of expensive components contributed to high unit cost.

Recent declines in launch cost have enabled a paradigm shift in constellation design (Figure 23). Commercial actors have broken vicious cost-reliability cycles by embracing rapid replenishment over exquisite designs. As it becomes more affordable to place satellites in orbit, it becomes possible to proliferate larger numbers of satellites, which in turn enables economies of scale in satellite manufacturing.

![image24](https://i.imgur.com/9lX9jcx.png)
_▲ __Figure 23: Declining Space Launch Costs.__ Note: Launch costs to LEO in inflation-adjusted FY 2021 dollars, sorted by launch vehicle (individual bubble). A bubble’s size corresponds to the number of successful orbital launches achieved by that vehicle as of December 31, 2019. Source: CSIS Aerospace Security Project._

This shift has made LEO orbits increasingly popular for commercial applications. Of the over 6,700 satellites in orbit, over 80 percent now operate in the LEO regime, where their proximity to Earth suits them for high-resolution remote sensing and low-latency communications. This philosophy — a proliferated low Earth orbit (pLEO) architecture — has informed recent approaches to national defense space systems.

_EFFECTS OF PROXIMITY_

The mathematics of proximity operate in favor of LEO satellite constellations. At LEO altitudes — between 400 and 2,000 km above Earth — even smaller sensors can provide high-resolution imagery of Earth’s surface. Further distances demand larger apertures; aperture limits the maximum resolution attainable by an infrared sensor (Figure 24). Holding other parameters constant, a sensor placed in geosynchronous orbit (GEO) requires an aperture several times larger to attain comparable resolution to one orbiting at 500 km.

Optical apertures are a significant driver of satellite cost. Smaller apertures are less costly to manufacture and can reduce the structural mass needed to ensure the vehicle withstands harsh shocks during launch. In turn, a reduction in satellite mass allows for lighter reaction wheels to orient the vehicle, lighter motors for keeping it in orbit, and correspondingly lower launch costs.

![image25](https://i.imgur.com/0552np1.png)
_▲ __Figure 24: Aperture Effects on Resolution.__ These images depict a hypersonic target viewed from GEO with an infrared sensor. Left: A view of the target with a notional extremely large aperture. Center: 60 cm aperture (center), and with 30 cm aperture (right). Source: CSIS Missile Defense Project._

The proximity of LEO also presents several drawbacks. At these distances, the perceived motion between satellite, target, and background becomes more pronounced. This relative motion can introduce motion blur to the target picture. Sensors that take longer to collect light are more sensitive and more susceptible to motion blurring as the weapon and background move across the frame (Figure 25). Shorter collection (“integration”) times, meanwhile, can more effectively “freeze” fast-moving objects, but with a cost to sensitivity and detection range.

![image26](https://i.imgur.com/9Dpghby.png)
_▲ __Figure 25: Motion Blur and Jitter Effects.__ A static hypersonic weapon-sized target, imaged from low Earth orbit, with a 35 cm aperture, appears as a blurred point source for an infrared sensor (left). Center: The same target displays motion streaking when accounting for sensor integration time: in this case, for 10 milliseconds (center). This streak becomes blurred when accounting for additional sensor vibration and jitter (right). Source: CSIS Missile Defense Project._

![image27](https://i.imgur.com/ZKoP8q8.png)
_▲ __Figure 26: Relative Motion and Dwell Time Comparison.__ Comparison of GEO (white), MEO (pink), and LEO (green) satellite motion. Source: CSIS Missile Defense Project._

Mitigating blur and jitter in infrared sensors involves a careful balancing act. Doing so requires FPAs with high sensitivities, readout circuits and image processors with higher data throughput, and algorithms tailored for target signatures with high relative motion. While feasible to overcome, the problem can be made easier by incorporating sensors in higher orbits or leveraging alternative phenomenologies.

The closeness of LEO satellites also limits their coverage. Compared to satellites at higher altitudes, they possess shorter horizon-limited lines of sight and persist for less time over a given point on Earth’s surface (Figure 26). More satellites will be needed to ensure that two are continuously overhead. While it is possible to achieve infrequent coverage with a small number of satellites, it takes significant numbers to make that coverage persistent (Figures 27 and 28).

![image28](https://i.imgur.com/eMx8too.png)
_▲ __Figure 27: Notional 135-Satellite LEO Constellation (120-Degree Field of Regard).__ A constellation of 135 satellites at 1,000 km altitude with a 120-degree field of regard fixed sensor, sized for persistent global coverage. The coverage map depicts two (yellow) and eight or more (red) satellites in view. Source: CSIS Missile Defense Project._

![image29](https://i.imgur.com/NCE6dWN.png)
_▲ __Figure 28: Notional 312-Satellite LEO Constellation (110-Degree Field of Regard).__ A constellation at 1,000 km altitude with a 110-degree field of regard fixed sensor. The reduced coverage footprint of each satellite necessitates a larger number of satellites to achieve persistent, global stereo coverage. The coverage map depicts two (yellow) and eight or more (red) satellites in view. Source: CSIS Missile Defense Project._

A related consideration for LEO constellation design and cost is the higher replenishment rates required over their life cycle. Drag from the upper reaches of Earth’s atmosphere slows satellites in orbit, requiring more propulsion to maintain their station. At 600 km, the natural lifespan of a generic satellite orbit is approximately 15 years, but this falls dramatically to under one year at 400 km (Table 2). The Space Development Agency (SDA)’s Tracking Layer Tranche 0 satellites, for instance, have requirements for minimum operational lifetimes of four to five years, rather than the decades possible at higher orbits (Figure 29).

![image30](https://i.imgur.com/RDeKMcF.png)
_▲ __Table 2: Approximate Orbital Lifespan (King-Hele) of 0.01m2/kg Object with Average Solar Activity.__ Low Earth orbit lifespans differ significantly, especially at lower altitudes, with different propulsion and station-keeping systems, satellite size, density, drag, and solar activity levels. Source: CSIS Missile Defense Project, with data adapted from Swiss Re Corporate Solutions, 2018._

Building a high replenishment cadence into a constellation’s life cycle is not entirely a disadvantage. The higher replenishment cadence of LEO constellations enables alternative philosophies to constellation design and the space industrial base. There is less need to overengineer for reliability, for instance, if a satellite’s lifespan is capped at five years. The consistent need for replenishment creates consistent demand for satellite production, keeping production lines hot, enabling economies of scale, and building a resilient defense industrial base.

![image31](https://i.imgur.com/xlFQGEG.png)
_▲ __Figure 29: Space Development Agency Planned Constellation Life Cycle.__ The number of satellites in orbit does not remain constant because as more are launched, others degrade. Satellites launched in FY 2024, for instance, begin to deorbit in FY 2029, causing fluctuations in the total figures. Further launches in FY 2029 and FY 2031 both expand and replenish the planned low Earth orbit constellation. Source: Space Development Agency._

High replenishment rates also permit new technologies to be “spiraled in” as older satellites deorbit. Long-lived satellites are often constructed with excess capability to ensure their relevance decades in the future; shorter-lived satellites can be designed as minimum viable products, intended for replacement as technologies and requirements evolve. Increased costs — in launching more satellites and more frequently replenishing them — must be balanced against the savings associated with agile development, manufacturing at scale, and lower relative launch costs compared to higher orbits.

_SYSTEMIC THREATS TO PROLIFERATED LOW EARTH ORBIT_

Technological advancements in commercial space have generated enthusiasm for pLEO constellations. In 2019, Under Secretary of Defense for Research and Engineering Michael Griffin established SDA for the express purpose of acquiring such constellations. In recent years, pLEO has become the watchword of space sensor acquisition. It embraces the notion that quantity has a quality all its own, with resilience achieved through numerical proliferation, measured both by the number of satellites currently deployed and those that could be reconstituted. An effective pLEO architecture promises to invert the cost asymmetries of traditional counterspace operations; the potential to make it more costly to destroy LEO satellites than to launch them has informed the emphasis on pLEO in recent years.

Adversary counterspace capabilities, however, should not be underestimated. A pLEO architecture provides resilience to certain kinds of counterspace threats but not others (Figure 30). Indeed, putting all one’s eggs in the LEO basket may incur risks: vulnerability to systemic threats that affect the entire orbital regime. “We don’t want to become so dependent or so vulnerable, potentially, in the pLEO,” General James Dickinson of U.S. Space Command has warned, “as opposed to having a diversification, where you have capabilities and different orbital regimes [to] rely on.”

![image32](https://i.imgur.com/bmZdG83.png)
_▲ __Figure 30: Counterspace Threats.__ Direct-ascent anti-satellite, co-orbital, and ground site attacks all can be difficult to scale against increasingly proliferated constellation designs. Nuclear effects and cyberattacks could paralyze large segments of proliferated constellations at once. Source: CSIS Missile Defense Project._

These systemic threats — threats that exploit a failure mode common to the entire architecture — merit further consideration. Cyberattacks against a constellation’s control systems or nuclear detonations in space could disable many satellites at once. The growing density of space debris in LEO is an additional cause for concern, and one that is increasingly difficult to mitigate. Even if the cost of individual kinetic anti-satellite (ASAT) attacks exceeds the cost of launching additional LEO satellites, the debris generated from these engagements could make those orbits challenging to reconstitute. It is simpler to proliferate and reconstitute in LEO, but also potentially simpler to attack.

___`Putting all one’s eggs in the LEO basket may incur risks: vulnerability to systemic threats that affect the entire orbital regime.`___

Cyberattacks remain a persistent area threat for any distributed architecture, whether in LEO, medium Earth orbit (MEO), GEO, or highly elliptical orbit (HEO). Software to orchestrate so many satellites at once — for orbital maintenance, collision avoidance, data transport, and tasking — presents a large attack surface for potential intrusions. While difficult to characterize, cyberattacks represent a critical area threat and a major risk category for all national security satellite architectures.

Less discussed are the area threats posed by nuclear explosions in space or at high altitudes (Figure 31). Nuclear explosions cause many immediate damaging effects: the pulse of thermal, x-ray, and other radiation can damage nearby satellites and blind their sensors.

An even greater concern, however, is nuclear pumping, a phenomenon where nuclear radiation lingers in the LEO environment (Figure 32). In LEO, Earth’s geomagnetic field would contain many of the charged particles emitted by a nuclear explosion; instead of radiating outward, these particles could spiral around the globe and damage large numbers of satellites. A 2002 Ballistic Missile Defense Organization analysis assessed that “a precursor high altitude nuclear burst could do significant damage to satellites,” with “pumped-up Van Allen belts [posing] a concern for satellite longevity” and “not well understood.”

The radiation left in these belts could make it challenging to maintain and reconstitute a pLEO constellation. Indeed, while it is less costly to proliferate and reconstitute LEO constellations, more attention must be paid to these systemic threats.

![image33](https://i.imgur.com/LYvPV4j.png)
_▲ __Figure 31: High-Altitude Nuclear Tests.__ Far left: “Orange,” 3.9-megaton detonation at 43 km altitude; left: “Teak,” 3.8 megatons at 76.8 km altitude; center: “Kingfish”; right: “Checkmate”; and far right: “Starfish,” 1.4 megatons at 400 km altitude. Source: Ballistic Missile Defense Organization._

![image34](https://i.imgur.com/URSDGvp.png)
_▲ __Figure 32: Nuclear Pumping in Space.__ Radiation from nuclear detonations can become trapped in Earth’s geomagnetic field, affecting the longevity of satellites. Source: U.S. EMP Commission._

A third concern is the increasing population of satellites and debris in LEO. The growing popularity of these orbits have made it challenging to avoid collisions (Figure 33). Between December 2022 and May 2023, satellites in the commercial Starlink constellation performed over 25,000 collision-avoidance maneuvers, representing roughly half of the number of Starlink maneuvers since 2019. These debris fields could densify after a large-scale attack. Debris generated in just three ASAT missile tests account for 15 percent of tracked debris in LEO. While Starlink satellites orbit lower than planned national security LEO constellations, it is emblematic of a larger problem: growing debris fields could threaten future operations, forcing collision-avoidance maneuvers that consume fuel and disrupt coverage.

These systemic threats could be difficult to attribute or deter. Cyberattacks generate attribution challenges that complicate potential responses. Intentional debris generation can be deniable: a debris field, generated by a foreign kinetic ASAT test, could be justified as a peacetime operation but be as disruptive to operations as a direct, unambiguous attack. Adversaries might even detonate a nuclear device over their own territory under the pretense of a test. Chinese scientific organizations have reportedly begun to reassess similar options to counter U.S. satellite constellations. Despite the damage their effects could cause, these deniable, systemic threats challenge the United States’ ability to devise a proportional response.

![image35](https://i.imgur.com/30PrKUT.png)
_▲ __Figure 33: Orbital Debris.__ Note: A visualization of over 24,631 tracked objects in orbit. Active satellites imaged in green, inactive satellites imaged in gray. Red orbital rings at 1,000, 10,000, and 36,000 km altitudes. Source: CSIS Missile Defense Project with data from AGI and U.S. Space Force._

It is therefore useful to examine other orbital regimes, including MEO and airborne domains, which could complement LEO’s advantages and help mitigate these vulnerabilities. A survivable sensor constellation would likely incorporate assets in multiple orbits, reducing the impact of such area-wide attacks.

#### Medium Earth Orbit

Placing satellites in higher orbits can offer coverage and survivability advantages not achievable from LEO alone. Operating at higher altitudes allows each satellite to view a larger swath of Earth’s surface, reducing the numbers necessary for global coverage (Figures 34 and 35). MEO, a family of orbits between 2,000 and 35,999 km from Earth’s surface, offers several attractive design points for satellite constellations. By moving a satellite’s orbit from 1,000 to 10,000 km, for example, a satellite’s detection footprint against low-flying hypersonic targets is roughly quadrupled.

![image36](https://i.imgur.com/IvlwUlg.png)
_▲ __Figure 34: Satellites Needed for Geometric, Two-Satellite Global Coverage.__ This graphic illustrates the relationship between altitude and the theoretical minimum number of satellites required for stereo coverage. Operational constellations would require considerably greater numbers of satellites at every altitude when considering sensor field of regard, solar exclusion, maintenance, and power factors. Geometric coverage minimums were derived from CSIS parametric analysis. Source: CSIS Missile Defense Project._

These substantial gains in viewable area, and the slower relative motion of these satellites across Earth’s surface, have made these orbits useful for navigational satellites, where large numbers must be in view at once. The Global Positioning System (GPS), with roughly 31 satellites in a 20,000 km orbit, allows for every point on Earth to be reachable by four or more satellites.

![image37](https://i.imgur.com/MP3C6ic.png)
_▲ __Figure 35: Notional 15-Satellite MEO Constellation at 10,000 km.__ MEO satellite coverage, from stereo (yellow) to eight or more (red). Source: CSIS Missile Defense Project._

MEO satellites represent only a small fraction of satellites currently in orbit. This is because of the high radiation levels in the MEO environment. Earth’s geomagnetic field traps high-energy particles from the Sun and other sources, creating several belts of elevated radiation. In some scenarios, dosages in this regime can exceed 50 rad daily, a dosage equivalent to roughly 16 abdominal CT scans. This harsh operating regime introduces challenges for constellation designers. While MEO represents a large set of possible orbits, most MEO constellations operate in a smaller number of “sweet spot” altitudes and inclinations, such as at 10,000 km, where radiation is lowest (Figure 36).

![image38](https://i.imgur.com/KBLqXEp.png)
_▲ __Figure 36: Radiation Fluxes on Orbit.__ Representative orbits at 1,000 km (LEO), 10,000 km (MEO), 20,000 km (MEO), and 36,000 km (GEO). The highest fluxes are indicated by red coloration. Source: CSIS Missile Defense Project with data from NASA._

Without hardening, these fluxes can significantly degrade a satellite’s subsystems. The interaction of solar winds and free ions in this environment can charge spacecraft components and cause unintended electrical interference. High-energy particles can degrade coatings and solar panels on the spacecraft surface and damage electronics and detector arrays within a spacecraft (Figure 37). These issues remain a concern for national security satellite constellations; unexpected radiation levels impacted availability of satellites in the Space Tracking and Surveillance System (STSS), for instance, which orbited at high LEO altitudes of roughly 1,350 km.

![image39](https://i.imgur.com/iWIpReL.png)
_▲ __Figure 37: Effects of Increased Solar Radiation on Satellite Imaging Sensor.__ False-color image of the Sun taken by solar probe before (left) and (after) a solar radiation spike on October 28 and 29, 2003. Radiation can cause additional noise and false pixels to appear on imaging sensors, requiring specialized packaging and software to mitigate. Source: NASA/Goddard Space Flight Center Scientific Visualization Studio._

Additionally, radiation can disrupt a satellite’s control circuitry. Computer processors and memory degrade over time with exposure to radiation. In addition to this total-dose-induced damage, they are susceptible to single-event effects, where charged particles strike a logic gate or memory cell and change its state from one to zero (“bit flip”) or prevent it from switching altogether (“stuck bit”). These in turn can cause malfunctions or permanent damage. Mitigating this often requires dedicated circuitry and software to correct errors or specialized, radiation-hardened circuits, which are typically slower and more costly than commercial equivalents.

While challenging, these environments confer some survivability benefits. Their greater distance, relative to LEO, places them out of reach of some lower-tier ASAT weapons; attacking MEO assets with a direct-ascent weapon, for instance, would take a significantly larger missile and a substantially longer time. While still vulnerable to prompt nuclear effects, the MEO environment faces relatively less of a nuclear-pumping challenge — moreover, as MEO satellites must already be hardened to withstand elevated radiation, those costs can be amortized for mitigating nuclear effects.

The relative sparsity of the MEO environment, finally, can be conducive to monitoring co-orbital ASAT threats. Co-orbital weapons, placed into similar orbits as MEO satellites, are a common approach to kinetically attacking MEO and further orbits. With roughly 3 percent of spacecraft orbiting in MEO, it may be relatively easier to observe, distinguish, and counter suspicious behavior.

#### Geosynchronous and Highly Elliptical Orbits

Geosynchronous orbits, at roughly 36,000 km from Earth, require even fewer satellites to achieve persistent coverage. At this distance, satellites orbiting the equator stay effectively stationary over a fixed point on Earth’s surface, orbiting at the same rate as Earth turns. No other orbit can provide a similar level of persistence — at the cost of placing satellites at an extreme distance. Current and forthcoming missile warning satellites, including SBIRS and Next Gen OPIR, occupy these orbits, where persistent coverage is achievable with only a small number of assets.

![image40](https://i.imgur.com/OKN1P9t.png)
_▲ __Figure 38: Depiction of the SBIRS and DSP Architecture.__ The Space Based Infrared System incorporates geosynchronous and highly elliptical polar satellites. GEO satellites offer latitudinal and longitudinal persistence by orbiting at the same rate that the Earth rotates. To maintain this persistence, the orbits must be close to the equator. A pair of polar satellites, meanwhile, can offer persistent coverage of at least one satellite over the poles. Source: CSIS Missile Defense Project._

Satellites in highly elliptical orbits offer similar advantages, offering persistent, staring coverage near Earth’s poles. In such orbits, satellites come within several hundred kilometers of Earth before swinging far into space, often tens of thousands of kilometers away. As a HEO satellite approaches the highest point in its orbit — the apogee — its velocity slows, allowing it to “hang” over a specific region for longer than the time spent at the lowest point, the perigee.

A minimum of two HEO satellites is necessary to provide continuous coverage of Earth’s high-latitude regions. When combined with equatorial GEO satellites, which offer persistence at most lower latitudes, only a few satellites become needed to provide whole-Earth coverage. The SBIRS missile warning constellation, for example, includes six GEO satellites to provide coverage of most latitudes, and two highly elliptical polar satellites to maintain custody of the North Pole and upper Northern Hemisphere (Figures 38 and 39).

![image41](https://i.imgur.com/D5hdEAx.png)
_▲ __Figure 39: SBIRS-HEO Sensor View of a Boosting Rocket.__ Image degraded for declassification. Source: U.S. Air Force._

The extreme distances of these constellations introduce novel operational considerations. Much larger apertures are needed to image targets at high resolution. As such, it becomes challenging to perform more detailed sensing missions, including midcourse and boost-phase tracking. Radio signals and light can take up to 220 milliseconds to reach the sensor of a satellite in GEO.

Launch costs for the requisite geostationary transfer orbits, moreover, are often double to triple the price of launches to LEO. GEO and polar satellites, designed with fuel to travel from such transfer orbits to their final positions, take longer to place on orbit, and often require larger structures. While fewer satellites are needed for coverage, each unit can become costly to produce.

Systems in these higher orbits, however, can be more difficult to target with some ASAT weapons. It is expensive to acquire direct-ascent missiles capable of targeting systems in GEO; competitors have instead developed sophisticated co-orbital weapons capable of hiding and persisting in geosynchronous orbits. While the popularity of geosynchronous orbits makes it simpler to conceal co-orbital weapons systems, HEO systems, with their high speeds and fewer numbers, may be harder to attack.

#### Airborne Architectures

To be sure, the conversation about elevated sensors has thus far revolved around space-based platforms. This emphasis is understandable and indeed necessary for achieving persistent, global coverage. But airborne platforms may also have a role to play. The United States could risk a gap in capability if space constellations do not come online as scheduled or if other problems develop. Several factors counsel an exploration of airborne sensors for missile tracking.

Airborne sensor platforms are mature and, despite their smaller coverage footprints, could generate persistent sensing capability in ways that spacecraft cannot, particularly for specific defended locations, such as the National Capital Region, Okinawa, or Guam. While limited to regional applications, airborne sensors could serve an interim system, backfilling coverage while a space constellation is deployed. Additionally, airborne sensors might serve as an underlay for space sensors, increasing coverage density in these critical regions.

_OPPORTUNISM OR PERSISTENCE_

There are two ways to conceptualize an airborne underlay: as an opportunistic, occasional capability, and as a persistent architecture. Several aircraft in service possess a residual capability to detect and track ballistic missiles opportunistically. In Desert Storm, for example, Air Force F-15s could occasionally detect Scud missile launches during their strike missions but lacked the weapons to engage them or the endurance to patrol for extended periods of time. More recently, in 2012, an F-35 was able to detect a NASA space launch in its initial phases using onboard infrared sensors at distances of up to 1,481 km.

![image42](https://i.imgur.com/tIWLcRJ.png)
_▲ __Figure 40: NASA ATREX Flight Even.__ Footage from the F-35 AAQ-37 Distributed Aperture System infrared sensor. During the test, an F-35 tracked several multi-stage rockets with its radar and infrared sensors. Source: Northrop Grumman._

An opportunistic approach might integrate these existing platforms into the Missile Defense System (MDS). Fifth-generation fighters, such as the F-35, have already demonstrated the ability to communicate fire control-quality tracking information to surface-based missile defenses (Figure 40). While such capabilities cannot persistently cover a defended region and may be called for other mission areas, more could be done to develop the doctrine and datalinks to weave existing sensor assets into the MDS.

A more robust approach would be to incorporate a persistent airborne underlay for defending critical locations such as Guam. The systems needed for this mission would require long endurances and would ideally fly at higher altitudes than fighter aircraft, allowing for further lines of sight. Such aircraft, equipped with longer-range sensors, would maintain fixed orbits — or combat air patrols (CAPs) — over a position, with enough aircraft in inventory to maintain one or more aloft at any point in time.

![image43](https://i.imgur.com/jO21eBb.png)
_▲ __Figure 41: Multispectral Target System.__ Source: Missile Defense Agency._

Such elements have been a recurring feature of boost-phase missile defense designs but are relevant to many other missions, including hypersonic missile defense. Relevant airborne missile-tracking capabilities have already been demonstrated. Between 2015 and 2017, the Missile Defense Agency (MDA) used a pair of multispectral-sensor-equipped MQ-9 uncrewed aerial systems (UAS) to track ballistic and cruise missiles (Figure 41). Flying at a 12.8 km altitude, the pair of aircraft tracked intermediate- and medium-range ballistic missiles from over 1,000 km away. An orbit of modestly persistent sensor aircraft — drones, high-altitude balloons, or others — could contribute to the defense of regional assets in concert with a space sensor system.

_SIZING A CONSTELLATION_

As with space architectures, designing a persistent airborne sensor layer is an inexact art with few absolute rules. Designers must reconcile the number of aircraft required, their individual cost and performance, the locations of possible CAPs, and the bases where aircraft are stored and maintained to construct a viable system.

Of these considerations, an aircraft’s operating altitude is especially critical. Higher-flying systems can offer further viewing horizons against low-flying targets and other sensing and survivability advantages. Hypersonic weapons flying at 20 km will enter a 15 km-altitude aircraft’s line of sight at 950 km — roughly 65 percent farther than a ground-based sensor (Figure 42). Moreover, high altitudes offer clearer atmospheric conditions for optical transmission, potentially easing the employment of infrared and other electro-optical sensors. Aircraft flying at altitudes above 10 km may also be difficult to engage with lower-tier surface-to-air missiles, offering survivability advantages.

![image44](https://i.imgur.com/CTiGXhk.png)
_▲ __Figure 42: Detection Ranges of Surface and Airborne Sensors.__ Surface-based sensors (left) cannot detect low-flying targets at longer distances. Elevating the sensor altitude from sea level to a 15 km-altitude aircraft (right) allows for substantially increased viewable distance. Source: CSIS Missile Defense Project._

An equally important consideration is aircraft endurance. Long-endurance aircraft are critical to minimize the fleet size and other associated costs needed to maintain a CAP. High-altitude, long-endurance (HALE) aircraft, such as the RQ-4, and medium-altitude, long-endurance (MALE) aircraft, such as the MQ-9B, can offer endurances of over 24 hours, increasing the time spent on station or reducing requirements for aerial refueling. Prior analyses have estimated that roughly 3 to 4 MQ-9B aircraft could maintain a persistent CAP, with a force-level quantity of up to 17, including spares, needed to maintain three continuous CAPs for up to 270 days per year.

Fleet size requirements are also affected by the location of airbases relative to CAP locations. The further the CAP is from an airbase, the longer each aircraft must spend transiting to the patrol region, reducing the fuel available to be on station. Transit time can dramatically increase the numbers required to maintain persistent coverage, holding other factors equal. Achieving the smallest fleet possible will require permissive basing and overflight requirements to minimize the flyout distances needed.

#### Finding the Right Mix

The Department of Defense is currently moving toward a multi-orbit architecture in LEO, MEO, GEO, and HEO. These developments acknowledge how efficiencies in some orbits offset inefficiencies in another.

LEO constellations benefit from proliferation and economies of scale but suffer challenges with persistence, orbital lifespan, and relative motion. MEO constellations offer more coverage and persistence but require potentially costlier satellites with larger apertures and radiation-hardened subsystems. GEO and HEO satellites provide unique coverage characteristics, requiring few satellites to selectively cover a given pole or longitude, but generate high unit costs and stringent reliability requirements. Airborne sensors can generate persistence unbounded by spacecraft orbital mechanics but have smaller detection footprints and require appropriate basing locations to operate.

The models depicted herein highlight these tradeoffs and the possible benefits of leveraging hybrid architectures — constellations with multiple orbital altitudes. LEO constellations in efficient, highly inclined orbits, for example, tend to under-cover areas near the equator, including critical parts of the Indo-Pacific region. MEO assets, orbiting about the equator, could usefully complement these configurations.

A constellation designed for equatorial and mid-latitude coverage, by contrast, might be supplemented with HEO assets that could selectively cover the poles. A combination of assets in different orbital bands, with their different levels of relative motion and viewing angles, might ease the challenge of tracking hypersonic and ballistic targets, whose thermal signatures vary significantly based on background and sensor viewing angles.

Configurations combining multiple orbital altitudes can add resilience and scale without dramatically increasing the number of orbital planes necessary. These models are illustrative: they do not depict ideal constellation designs, nor do they depict the redundancies needed for survivability. They rather demonstrate how orbits could be mixed to cover priority regions more efficiently. As acknowledged by Michael Griffin, former undersecretary of defense for research and engineering and a leading proponent of proliferated low Earth orbit constellations, an effective architecture should be “as widely distributed [as possible] over many choices of orbital regimes.”

_ADDRESSING LEO INDO-PACIFIC COVERAGE_

A high-inclination LEO constellation optimized for global coverage will produce the least coverage in latitudes near the equator. These latitudes, however, are most relevant for the Indo-Pacific theater. It is often more costly to add additional orbital planes (rings) than it is to add more satellites to a given orbital plane, as this requires separate launches to take place. One approach to enhance coverage of these latitudes could be to add a single equatorial orbital plane with eight satellites, at MEO (10,000 km) (Figure 43).

![image45](https://i.imgur.com/LGPt5oi.png)
_▲ __Figure 43: Combined Equatorial Constellation and Coverage (135 LEO, 8 MEO).__ This simulation depicts a mixed constellation of 135 LEO satellites at 1,000 km altitude and 8 MEO satellites at 10,000 km altitude. Right: Map of satellite coverage; yellow regions indicate two-satellite coverage, while red regions indicate eight-satellite coverage or greater. Source: CSIS Missile Defense Project._

![image46](https://i.imgur.com/TZOxNyA.png)
_▲ __Figure 44: Combined Equatorial Constellation and Coverage (36 LEO, 8 MEO).__ Source: CSIS Missile Defense Project._

A second illustrative design, with 36 LEO satellites and a single, 8-satellite MEO plane, puts this principle in sharper relief (Figure 44). MEO satellites are used exclusively to provide coverage to mid-latitudes, while a highly inclined LEO constellation provides persistent coverage of the higher latitudes and poles.

_SELECTIVE POLAR COVERAGE WITH HIGHLY ELLIPTICAL ORBIT_

HEO satellites offer the unique ability to selectively cover a single pole; as most threats transit the Northern Hemisphere, it allows constellation designs that do not “waste” coverage. A constellation of four HEO satellites can provide persistent stereo coverage of the polar regions, useful for missile warning. A mixed constellation of eight MEO satellites in an equatorial orbit and four HEO satellites illustrates this selective coverage capability (Figure 45).

![image47](https://i.imgur.com/5KhEKdo.png)
_▲ __Figure 45: Combined Equatorial Constellation and Coverage (4 HEO, 8 MEO).__ Source: CSIS Missile Defense Project._

_COMBINING LAYERS FOR RESILIENCE_

![image48](https://i.imgur.com/Up95vt0.png)
_▲ __Figure 46: Combined Constellation and Coverage (4 HEO, 15 MEO, 70 LEO).__ Source: CSIS Missile Defense Project._

![image49](https://i.imgur.com/NItfbPU.png)
_▲ __Figure 47: Combined Constellation and Coverage (30 MEO, 135 LEO).__ Source: CSIS Missile Defense Project._

Hybrid constellations can combine their coverage hotspots to increase emphasis on critical regions. A LEO constellation with lower inclinations can provide dense coverage of the Indo-Pacific region, while a smaller constellation of MEO and HEO assets can provide an additional layer of resilience and selective emphasis on the poles (Figure 46). Meanwhile, a dense constellation, combining a polar-region-heavy LEO constellation and an Indo-Pacific-weighted MEO constellation, achieves robust, uniform coverage with 165 satellites (Figure 47).


### Schedule Tradeoffs

No single orbit presents an ideal set of launch costs, satellite configurations, and coverage for missile tracking and fire control. A sensor architecture design must optimize a large collection of intersecting variables, including sensor field of regard (FOR), altitude, inclination, and satellite unit cost, among others. Most attention has been paid to optimizing these elements to minimize the number of satellites needed for coverage, but there are other goals to consider. An architecture must also be optimized to meet useful schedules and to phase capability in ways relevant to the threat.

Program schedule and capability phasing should receive more consideration in current acquisition efforts. Choices over orbital configurations not only affect final sensor coverage but how coverage develops over time. Two constellation designs that eventually produce identical coverage may not necessarily generate capability along the same timelines (Figure 48).

Indeed, capability may not come online in smooth or continuous increments. Many low Earth orbit (LEO) constellation designs, for instance, leverage multiple orbital planes with high inclinations — inclinations close to the poles — to provide regional and later, global coverage. These designs are optimized to minimize the number of satellites necessary for coverage and do not provide persistent coverage of lower latitudes until all orbital planes are deployed (Figures 49, 50, and 51). Notably, the Space Development Agency (SDA)’s early Tranche 0 and Tranche 1 LEO constellations are configured with high-inclination orbits. The cost of these high inclinations to capability phasing is not always made explicit.

![image50](https://i.imgur.com/l2Ej1v9.png)
_▲ __Figure 48: Alternative Capability Phasing.__ Two space-based architectures (“A” and “B”) may deliver identical capability when completed but phase this capability on different timelines. Architecture B generates partial capability later but full capability earlier. These tradeoffs should be considered when contemplating two otherwise identical architectures. They should also impact considerations for secondary constellations or airborne underlays to fill gaps in capability phasing. Source: CSIS Missile Defense Project._

___`Choices over orbital configurations not only affect final sensor coverage but how coverage develops over time.`___

As such, the structure of a constellation has implications for program schedule. LEO constellations of high-inclination satellites are efficient for generating global coverage with the fewest satellites. Other architectures, however, might generate persistent regional coverage sooner.

Much has been said about the need for resilience against attack, or what is called “graceful degradation.” Less attention has been given to optimizing for “graceful deployment.” A constellation optimized purely for coverage efficiencies may well deliver capability unevenly, with relevant, persistent coverage only arriving near completion. Such a glidepath is arguably in tension with the incremental, spiral-development-focused philosophy of proliferated low Earth orbit constellation deployment.

![image51](https://i.imgur.com/pRReC7y.png)
_▲ __Figure 49: High-Inclination Orbital Plane Persistence.__ LEO assets with high inclinations cannot persistently cover low-latitude regions over time (images shown in two-hour increments). Source: CSIS Missile Defense Project._

![image52](https://i.imgur.com/xzIf6bl.png)
_▲ __Figure 50: Low-Inclination Orbital Plane Persistence.__ LEO assets at lower inclinations can persistently cover near-equator regions at the expense of polar coverage. These tradeoffs ease with higher altitudes, including in MEO. Source: CSIS Missile Defense Project._

![image53](https://i.imgur.com/9tLB62B.png)
_▲ __Figure 51: Half-Populated LEO Constellation.__ Highly inclined LEO constellations offer little persistent coverage of relevant equatorial regions. This LEO constellation of 36 satellites cannot offer persistent coverage until more orbital planes are added. Persistent equatorial coverage only emerges after the number of satellites is more than tripled. Source: CSIS Missile Defense Project._

Besides the need to mitigate technical and security risks to a future constellation, capability phasing is a critical consideration for program-level risk. It is impossible to predict future supply chain bottlenecks, changes in budgetary priorities, or other factors that could hobble a constellation’s deployment. As such, architecture designs should be resilient to the risk of premature budget reductions or cancellation. Some constellation designs will not generate persistent coverage of meaningful regions should deployment be canceled halfway (Figure 52). It thus becomes crucial to consider which designs would offer meaningful coverage even when partially deployed.

A constellation optimized for graceful deployment may entail the selection of alternative configurations and may require more satellites to achieve coverage. Such costs are nevertheless worth considering (Figure 52). A constellation optimized solely for long-term efficiencies incurs short-term risks. In addition to programmatic risks, they can tempt adversaries to accelerate the development of countermeasures, knowing that capability will only arrive at once at a single future maturation point. Partial capability can and should arrive earlier. Multiple avenues — lower-inclination orbits, regional airborne sensors, and others — exist for realizing them.

![image54](https://i.imgur.com/r5QlqNx.png)
_▲ __Figure 52: Combining Constellations.__ Realizing global geometric coverage in two steps (right, center) can entail more satellites (40+26) than a constellation optimized for global coverage (49) (left). Source: CSIS Missile Defense Project._

One avenue to graceful deployment could involve separating constellation deployment into multiple steps. For example, a LEO constellation could be designed as a hybrid architecture, deploying a low-inclination set of 70 satellites for regional coverage (Figure 53) before expanding to global coverage with a second set of 36 highly inclined sensors (Figure 54). While this could entail more satellites than higher-inclination alternatives, it delivers increments of coverage in two steps, achieving regional coverage much sooner.

![image55](https://i.imgur.com/yrR67It.png)
_▲ __Figure 53: Combining Low- and High-Inclination Constellations: Regional Coverage.__ A low-inclination constellation of 70 LEO satellites achieves persistent regional coverage; with the addition of 36 satellites (Figure 54), coverage can be expanded to a global scale, in two steps. Source: CSIS Missile Defense Project._

![image56](https://i.imgur.com/phBbRW2.png)
_▲ __Figure 54: Combining Low- and High-Inclination Constellations: Global Coverage.__ A high-inclination constellation of 36 satellites, used to expand to persistent global coverage. Source: CSIS Missile Defense Project._

Another method may be to deploy underlays, such as aircraft-based sensors, to backfill capability until a space constellation is deployed. Regardless of approach, there are many possible levers for smoothing capability deployment. Careful selection of phased constellations, or the deployment of airborne underlays and other assets, could produce coverage of relevant areas in shorter increments.

Schedule and capability phasing deserve to be key factors in assessing this trade space. Recent requests presented by SDA imply increased attention to these problems. In a recent solicitation for new Tracking Layer LEO satellites, for instance, SDA requested potential solutions for constellations including mixes of higher and lower inclinations.

A design that deploys gracefully could offer useful capability even when incomplete. One that does not deploy gracefully will not deliver such benefits, despite any promise of future numerical efficiencies. If a geopolitical crisis occurs in the late 2020s, the United States will have to fight with the space sensor constellation that is fielded, not the complete architecture planned in the longer term.


### An Emerging Architecture

These many sensor, orbital, and schedule tradeoffs are at play in the Department of Defense (DoD)’s ongoing space sensor acquisition effort. This chapter reviews the envisioned missions, programs, and budgets of the forthcoming architecture and considers what questions remain unresolved.

In fiscal year (FY) 2023, the DoD invested nearly $5 billion into acquiring overhead sensors for missile warning, tracking, and fire control (Figure 55). These efforts have been partly centralized under the Space Force organizational structure, with multiple programs of record underway for low (LEO), medium (MEO), geosynchronous (GEO), and highly elliptical (HEO) orbit sensor layers (Table 3). Under its Next Generation Overhead Persistent Infrared (OPIR) initiative, the Space Force will deploy two GEO (Next Generation GEO) and two HEO (Next Generation Polar) satellites, supplementing its Space Based Infrared System (SBIRS) constellation for missile warning.

A second effort, designated Resilient Missile Warning/Missile Tracking (RMW/MT), will incorporate a constellation of nine or more MEO satellites (RMW/MT-MEO) and a larger constellation of LEO satellites (RMW/MT-LEO) to perform both missile warning and missile tracking.

![image57](https://i.imgur.com/CUeP7As.png)
_▲ __Figure 55: Space-Based Missile Warning and Tracking Modernization by Orbit, 2018–2028.__ *Based on 2024 PB. Source: DoD Comptroller and CSIS Missile Defense Project analysis._

In parallel with the RMW/MT-LEO program, the Missile Defense Agency (MDA) has developed a prototype sensor, the Hypersonic and Ballistic Tracking Space Sensor (HBTSS), capable of furnishing the “highly sensitive, low-latency, high quality of service” data needed for the more demanding missile defense fire control mission. The program will launch two prototype LEO satellites in late 2023, after which “responsibility for HBTSS operational fielding will be transferred to the US Space Force.”

For FY 2024, the Space Force requested $2.6 billion for Next Generation OPIR, including $720 million for Next Generation GEO, $1 billion for Next Generation Polar, $661 million for associated ground systems, $191 million for modernization initiatives, and $31 million for integration. Additionally, it requested $2.2 billion for RMW/MT, including $1.2 billion for its LEO constellation, $538 million for its MEO constellation, and $506 million for its associated ground systems. For HBTSS, MDA requested $69 million, with minimal funding planned after FY 2026 when program responsibility is transferred to the Space Force.

![image58](https://i.imgur.com/4QAS8ml.png)
_▲ __Table 3: Selected OPIR Missile Sensing Initiatives.__ Source: CSIS Missile Defense Project with data from U.S. Department of Defense._

These newer investments represent a welcome shift in resources. In FY 2023, funding for missile warning, represented by the Next Generation OPIR portfolio, dwarfed investments in missile tracking, represented by RMW/MT (Figure 56). The DoD’s FY 2024 budget request, by contrast, dramatically expands investments in the LEO and MEO constellations needed for missile tracking while cutting Next Generation GEO, reducing its planned satellite purchases from three to two. With its cancellation of the seventh and eighth SBIRS and the third Next Generation OPIR satellites, the Space Force is pivoting away from an approach centered around geosynchronous missile warning satellites to one dominated by large constellations of missile tracking satellites in LEO and MEO.

![image59](https://i.imgur.com/wnQzYuo.png)
_▲ __Figure 56: Space-Based Missile Warning and Missile Tracking Space Sensor Modernization by Mission, 2018–2028.__ *Based on 2024 PB. Source: DoD Comptroller and CSIS Missile Defense Project analysis._

#### Next Generation OPIR

Next Generation OPIR, including its Next Generation GEO and Polar components, formerly represented the largest segment of the DoD’s space sensing portfolio (Figure 57). Beyond recapitalizing space-based missile warning, whose associated SBIRS and Defense Support Program (DSP) satellites entered service decades ago, these satellites will offer enhanced capabilities, tracking dimmer targets over wider areas. Combined with SBIRS, these satellites will be capable of detecting the hot plumes of missile launches, cueing relevant sensors, and informing national command authorities. They will supply data to critical interfaces, including the Ballistic Missile Defense System (BMDS) Overhead Persistent Infrared Architecture (BOA) and Integrated Tactical Warning/Attack Assessment (ITW/AA), a U.S. strategic nuclear warning system.

![image60](https://i.imgur.com/BkLOiF7.png)
_▲ __Figure 57: Space-Based Missile Warning Modernization by Type, 2018–2028.__ *Based on 2024 PB. Source: DoD Comptroller and CSIS Missile Defense Project analysis._

Between 2018 and 2021, the Space Force awarded $7.8 billion in contracts for the development and production of three Next Generation GEO satellites, with initial launches scheduled for 2025. Following a reorientation of priorities in late 2022, the Space Force plans to cut one Next Generation GEO satellite, launching the first in FY 2025 and the second in FY 2027. In FY 2024, the Space Force requested $719 million for the program, a considerable reduction from the $1.7 billion requested in FY 2023.

The first of two Next Generation Polar satellites, meanwhile, is scheduled for launch by FY 2028. These satellites, orbiting at higher inclinations, would provide continuous coverage of the Northern Hemisphere and North Pole, supplementing the two SBIRS-HEO satellites presently in orbit. The Space Force requested $1 billion for the program in FY 2024.

These satellites will pass sensor data to users through a new set of ground infrastructure, funded at $582 million in FY 2023. The Next Generation OPIR Ground component will incorporate the Future Operationally Resilient Ground Evolution (FORGE), a system of software, ground terminals, and computers for mission management, data processing, telemetry, and command and control. Various components of FORGE are expected to come online through the late 2020s, with development for Next Generation GEO and Polar continuing through FY 2028. These efforts come in parallel with the Space Force’s Enterprise Ground System (EGS), a broader modernization of the organization’s ground systems software, and the Next Generation OPIR Interim Operations (NIO), a backup program to prevent FORGE delays from impacting Next Generation GEO launch schedules.

#### Resilient Missile Warning/Missile Tracking – Low Earth Orbit (Proliferated Warfighter Space Architecture)

The RMW/MT program consolidates past efforts to develop a large constellation of LEO satellites and a smaller constellation of MEO satellites for missile tracking (Figure 58). As of 2023, this constellation would combine up to “135 LEO and 16 Space Force-developed MEO satellites working in concert through an integrated ground solution.” In 2023, Space Systems Command (SSC) was designated as the “lead end-to-end systems integrator” for the constellation. DoD then created a combined program office with SSC, the Space Development Agency (SDA), and MDA. It is likely that the architecture’s final configuration will change as prototype systems enter orbit.

RMW/MT’s LEO component consists of SDA’s Tracking Layer constellation, which aims to launch successive phases, called “tranches,” of LEO sensor satellites in two-year increments. The acquisition philosophy for the Tracking Layer apparently differs from past military space efforts; it is intended to demonstrate capability on commercial timelines and exploit commercial components and design philosophies, rather than fitting a traditional requirements generation process.

SDA plans to acquire the Tracking Layer and a larger constellation of LEO communications and sensing satellites, the Proliferated Warfighter Space Architecture (PWSA; formerly the National Defense Space Architecture, or NDSA), using this approach. The PWSA constellation will initially include four tranches of LEO satellites, labeled Tranches 0, 1, 2, and 3. Tranche 0 will include 20 Transport Layer satellites and eight Tracking Layer satellites, which host wide-field-of-view (WFOV) infrared sensors and orbit approximately 1,000 km from Earth (Figure 59). SDA launched the first 10 of its Tranche 0 satellites in April 2023, and the second launch concluded in September 2023.

![image61](https://i.imgur.com/xbVbWiG.png)
_▲ __Figure 58: Space-Based Missile Tracking Modernization by Program, 2018–2028.__ *Based on 2024 PB. Source: DoD Comptroller and CSIS Missile Defense Project analysis._

![image62](https://i.imgur.com/oghhlQR.png)
_▲ __Figure 59: SDA Tranche 0 Constellation.__ Source: Space Development Agency (top) and CSIS Missile Defense Project (bottom)._

![image63](https://i.imgur.com/g5oMZYN.png)
_▲ __Figure 60: SDA Tranche 1 Constellation.__ Source: Space Development Agency (top) and CSIS Missile Defense Project (bottom)._

![image64](https://i.imgur.com/qK9BcHA.png)
_▲ __Figure 61: SDA Tranche 2 Constellation.__ Source: Space Development Agency (top) and CSIS Missile Defense Project (bottom)._

Plans to develop the Tracking Layer have shifted as Space Force and SDA budgets and priorities evolve. A second tranche, Tranche 1, is scheduled to launch in 2025 and would include 39 satellites (35 tracking, 4 fire control) orbiting at 1,000 km in five polar orbital planes (Figure 60). When combined with the Tranche 0 Tracking Layer, these satellites would offer a “kernel” of global coverage to warfighters by late 2025. The constellation initially consisted of four orbital planes with seven Tracking Layer satellites each; a $250 million congressional add, approved in 2023, added a fifth plane “to increase global Missile Warning and Missile Tracking coverage in support of combatant commands to include INDOPACOM.”

Additional tranches would launch in 2027 and beyond. Tranche 2 would add 54 or more satellites (48 tracking, 6 fire control) to provide “global, persistent” missile warning and missile tracking while demonstrating a limited fire control capability (Figures 61, 62, and 63). Unlike prior tranches, it would deploy three orbital planes to a higher inclination and three orbital planes to a lower inclination suited for Indo-Pacific regional coverage. Each plane would have nine satellites; eight with WFOV missile warning/missile tracking sensors and one with a missile defense-focused “Fire Control quality sensor.” The first plane would enter orbit in April 2027, and deployment would conclude by November 2027.

![image65](https://i.imgur.com/TUweCe1.png)
_▲ __Figure 62: SDA Tracking Layer Tranche 2 Coverage.__ Horizon-limited coverage footprint of Tranche 2 constellation, with pink indicators for fire control coverage. Source: CSIS Missile Defense Project with data from the Space Development Agency._

![image66](https://i.imgur.com/b2d4ajC.png)
_▲ __Figure 63: SDA Tracking Layer Tranche 1 and 2 Combined Coverage.__ Horizon-limited coverage footprint of combined Tranche 1 and 2 constellations, with pink indicators for fire control coverage. Source: CSIS Missile Defense Project with data from the Space Development Agency._

Tranche 3 and beyond would increase the PWSA Tracking Layer’s density past 135 assets and incorporate newer satellite technologies. Given the intended five-year orbital lifespan of each satellite, these would expand upon and replace earlier tranches, enabling another set of technology insertions. While SDA has already defined requirements for earlier tranches, the eventual configuration of additions beyond Tranche 3 may vary considerably as satellites are put on orbit.

#### Resilient Missile Warning/Missile Tracking – Medium Earth Orbit

After an initial push and pull between LEO- or MEO-only approaches, the Space Force has embarked on efforts to deploy a mixed constellation of LEO and MEO missile tracking satellites. The second leg of this mixed constellation, RMW/MT-MEO, will complement the LEO Tracking Layer with additional satellites in MEO. This attention to MEO represents an important philosophical shift toward hybrid architectures, with MEO particularly useful for assuring coverage of lower latitudes (Figures 44 and 45).

In FY 2023, the Space Force expanded an exploratory effort to prototype MEO tracking satellites, MEO Track Custody (MTC), into a full-scale acquisition program integrated with the RMW/MT constellation. RMW/MT-MEO would acquire nine or more MEO satellites, at two orbital altitudes, to “pivot the Department of the Air Force’s (DAF) legacy missile warning force design to a more resilient multi-orbit approach.” In FY 2023, Congress appropriated $409 million toward the program — more than double the $139 million budget request. In FY 2024, the Space Force requested $538 million to support the accelerated MEO effort.

![image67](https://i.imgur.com/VDzEIGd.png)
_▲ __Figure 64: SSC MEO Roadmap.__ Source: U.S. Space Systems Command._

Like SDA’s successive “tranches,” SSC will deploy MEO capabilities in a series of increments called “epochs.” Epoch 1, deploying in late 2026, will include satellites at two altitudes: a plane of six vehicles at a lower orbital altitude and three at a higher one. Successive epochs will likely include 18 or more satellites, with a possible total of 34 to 44 satellites when complete. By the launch of Epoch 3, the constellation will reportedly deliver persistent missile tracking coverage. These MEO satellites will leverage research performed under the earlier MTC effort, which by May 2021 had awarded early contracts for digital satellite prototypes. Program design review for one Epoch 1 satellite concluded in July 2023, and critical design review completed in November 2023.

This shift toward a LEO/MEO mixed constellation in FY 2024 follows significant congressional scrutiny. In July 2022, the House Armed Services Committee directed the chief of space operations to brief the committee on including “free, fair, and open competition within [the Space Force’s] acquisition plan” by January 2023. Following a $130 million congressional plus-up, the program office also moved to add the “third plane of Epoch 1 spacecraft . . . add[ing] additional acceleration funds in FY 2024 to . . . aggressively pursue additional Epoch 1 capabilities.”

#### Hypersonic and Ballistic Tracking Space Sensor

Among these several programs, HBTSS represents the DoD’s current effort to enable the fire control-quality tracking mission. HBTSS occupies a critical function in the forthcoming sensor ecosystem, aimed at providing the high-fidelity, low-latency tracking information needed to guide missile defense interceptors.

MDA currently retains acquisition authority for HBTSS prototyping. Under the current timeline, MDA will prototype and launch a medium-field-of-view sensor to demonstrate fire control-quality tracking of hypersonic weapons. MDA began prototyping the sensor in 2018 and intends to launch two HBTSS-equipped satellite testbeds into orbit in late 2023 or early 2024. Following on-orbit test activities, “responsibility for HBTSS operational fielding will be transferred to the US Space Force and the MDA will continue the development of the next generation of space-based fire control sensors for missile defense.”

The prototypes will be placed in orbits intended to “track test events in the INDOPACOM region” and would likely leverage a commercially supplied chassis, or bus, to host the HBTSS sensor. In 2021, Congress directed MDA to “achieve full operational employment” of the system by December 2023. On-orbit test activities are scheduled to continue through 2025, including support for Aegis and Terminal High Altitude Area Defense (THAAD) intercept tests in 2024 and 2025.

It remains unclear, however, how many HBTSS or HBTSS-derived payloads will eventually be fitted to SDA’s Tracking Layer constellation. While MDA requested $68 million for the program in FY 2023, funding is expected to decline after demonstration activities conclude and responsibility for fire control transfers to SSC and SDA. Following this transition, SDA aims to launch four HBTSS-derived sensor payloads as part of its Tranche 1 activities and an additional six fire control sensors in Tranche 2. Further developmental spirals, the priority accorded to the hypersonic defense mission, and SDA’s responsibilities for supporting missile defense, however, have not yet been publicly defined.

#### Seeking Alignment

Several recent developments have been promising. The DoD has increasingly pivoted from an exclusively pLEO design to a mixed-orbit architecture with complementary LEO and MEO components. In contrast with earlier tranches, SDA’s Tranche 2 will now include assets at lower inclinations suited for earlier Indo-Pacific-region coverage. Moreover, the Space Force has signaled further investments in deploying fire control sensors on orbit, both in SDA Tranches 1 and 2.

Questions nevertheless remain over the configuration, schedule, and mission of the forthcoming architecture. It remains uncertain how effectively MDA fire control efforts will transition to SDA’s architecture and how the planned numbers of fire control satellites in PWSA support requirements for hypersonic defense. While Tranche 2 plans include three orbital planes at lower inclinations, it is uncertain how this could be expanded to assure persistent Indo-Pacific stereo coverage. Other questions — over what mix of LEO and MEO assets is optimal, how to phase deployments to cover the Indo-Pacific, what software is necessary to fuse information from so many sensors, and how to align ground systems acquisition with the fielding of satellites — are not yet resolved. The DoD has reached substantial technical milestones and pioneered innovative approaches to acquiring these systems. As one analyst has remarked, however, “there seems to be a lack of consensus on how quickly, and in what manner,” to proceed.


### Three Temptations

Both on Capitol Hill and in the Pentagon, senior leaders have expressed the need to accelerate the fielding of sensors for hypersonic and ballistic missile defense. Doing so will require optimizing an entire system of systems — effectors; sensors; command, control, and communications systems; and the software that weaves them together. The greater challenge is not in constructing these individual parts but in aligning their deployment to deliver capability on relevant timelines.

Realizing the necessary architecture will require attention to potential policy temptations and pitfalls. Policymakers may face temptations to abdicate the fire control mission, overoptimize for numerical efficiencies, or consolidate to single orbital regimes in the pursuit of savings and simplicity. Succumbing to these temptations would come at the cost of speed and resilience.

#### Temptation to Abdicate

One temptation to avoid is to abdicate the missile defense fire control mission. While technically challenging, fire control-quality tracking is needed for hypersonic missile defense. As responsibility for fire control transfers from the Missile Defense Agency (MDA) to the Space Force, it could be tempting to postpone or deemphasize these difficult requirements.

In other words, fire control should not be redefined as a reach goal. Combatant commands central to missile defense, including U.S. Space Command, have recognized the necessity of fire control and “strongly endorsed continuing work on systems such as . . . the MDA’s Hypersonic and Ballistic Tracking Space Sensor.” Congress, moreover, had funded the Hypersonic and Ballistic Tracking Space Sensor (HBTSS) and repeatedly kept it within MDA explicitly to ensure schedule discipline and applicability to missile defense. Whether or not HBTSS represents the eventual solution, fire control requirements should remain a defining feature of sensor architecture design.

Realizing fire control requirements will be difficult but not impossible. “The ability to detect and track dim targets in a cluttered background . . . with the sensitivity necessary to support the [counter-] hypersonic kill chain” requires considerable investment to achieve. The mission demands low latencies and small pixel footprints, achievable either through dedicated medium-field-of-view (MFOV) systems cued by wide-field-of-view (WFOV) tracking sensors or high-resolution, fire control-capable WFOV sensors, pending the supply of larger-format focal planes. An ideal constellation might feature both, with responsive WFOV fire control sensors and an additional MFOV layer for tracking challenging targets.

___`Fire control should not be redefined as a reach goal.`___

SDA’s commitments to deploying fire control sensors represent an important step in the right direction. Despite earlier uncertainties over their prioritization, recent plans suggest that SDA will deploy six fire control sensors in the Tranche 2 constellation, after MDA’s two-satellite HBTSS demonstration activities conclude. The relation of Tranche 2 fire control sensors to HBTSS remains publicly unclear.

The number of fire control tracking satellites planned, however, remains inadequate for providing persistent coverage, and the glidepath to transition from an HBTSS-based approach to a future fire control system appears uncertain. The six SDA fire control satellites planned to launch in 2027, for instance, will be valuable for demonstrating capability but insufficient for achieving persistent Indo-Pacific coverage. It is worth considering whether these efforts could be expanded; additional satellites at these inclinations could generate persistent coverage of the Indo-Pacific. Additional mid-inclination satellites would bolster deterrent capability in a critical period, coinciding with Beijing’s timeline to develop a Taiwan invasion capability by 2027. Even if such threats are delayed, these additional satellites could be held in reserve to reconstitute constellations as they deorbit or come under attack.

Policymakers are right to question if the current approach is enough to support fire control for hypersonic and ballistic missile defense. While the Space Force has committed to “the development and demonstration of space technologies to deliver Missile Warning, Missile Tracking, and Missile Defense (MW/MT/MD) capabilities including advanced missile tracking and fire control,” it must go further to operationalize them.

Moreover, the previous, near-complete focus on proliferated low Earth orbit (LEO) sensors is worth reconsideration. Space Force efforts to explore fire control tracking from medium Earth orbit (MEO) sensors merit further study and potential acceleration. As discussed above, the MEO regime offers useful survivability, coverage, and schedule benefits, and deploying a MEO-based fire control layer could add useful resilience.

![image68](https://i.imgur.com/pIqLTQG.png)
_▲ __Figure 65: Valleys of Death in Defense Acquisition.__ Source: U.S. Department of Defense._

The transfer of fire control tracking sensor programs from MDA to SDA represents an exercise in institutional trust. It will also be a test of recognizing the central relation between space and the future missile defense enterprise. Continued oversight will be essential, to ensure both that this transition effectively takes place and that fire control capability is achieved on schedule and at the necessary scale. It will require clear, high-level commitments from Pentagon leadership to allow these capabilities to cross the valley of death (Figure 65).

#### Temptation to Overoptimize

A second set of policy temptations threatens deployment schedules. Fielding new technologies requires experimentation. It is difficult to fully characterize sensor performance without placing them on orbit; spiral development approaches, such as those employed by SDA, can enable the continual experimentation needed to refine these systems. Even when operationalized, an architecture should continue to evolve. A mantra from the Aegis community is to “build a little, test a little, learn a lot.”

This experimentation must be connected to results. The future architecture must prioritize coverage of the lower latitudes for the Indo-Pacific region. This is not only a matter of scaling constellation sizes but of selecting a design that addresses priority regions earlier. It may be tempting to continue experimenting: to deploy endless technology demonstrations to design constellations optimized for global coverage on an ever-longer timeline.

Three means to resist this temptation include designing constellations for graceful deployment, leveraging airborne underlays, and accelerating ground and data infrastructure development. The treasure obligated for these development efforts could be in vain if capability arrives late to need.

_DEPLOY GRACEFULLY_

Deployment phasing should define every requirement in a potential constellation. The forthcoming sensor architecture must prioritize persistent coverage of the Indo-Pacific region first and do so sooner. Amid theoretical debates over orbital planes, satellites, and coverage, it is important to ask when an architecture could generate persistent coverage of relevant regions, and when this might expand to global coverage. As emphasized previously, even if the final capabilities of two designs are identical, the way these capabilities phase in — how they deploy gracefully and which regions receive denser coverage — can differ.

These considerations should impact the orbital design of forthcoming constellations. High-inclination configurations, optimized for maximizing coverage efficiencies once fully populated, may generate minimal relevant coverage when only partially populated. The recent nods to lower-inclination orbits in Tranche 2 are an important step to moderate polar over-coverage. It is worth asking if it is enough.

![image69](https://i.imgur.com/AahXGVh.png)
_▲ __Figure 66: Regional and Global Coverage Definitions Investigated.__ Source: CSIS Missile Defense Project._

_AN AIRBORNE UNDERLAY_

To this end, it will be crucial to examine alternatives for accelerating Indo-Pacific sensor coverage. A high-inclination LEO constellation will not generate persistent regional coverage for some time. But the immediate future fight is likely to be a regional fight (Figure 66). Airborne sensors might be useful for nearer-term regional tracking capability, defending critical assets including Okinawa or Guam.

> #### Frank Turner, Technical Director, Space Development Agency

> “Schedule is king. The train is going to leave the station on time.”

Such approaches have been shown to be operationally viable. Architectures based on uncrewed aerial systems (UAS) have already been proposed for persistent, regional boost-phase missile defense missions, leveraging similar sensors needed for hypersonic tracking. MDA has previously demonstrated infrared missile tracking sensors on UAS, successfully tracking ballistic missiles in flight. In 2016 and 2021, the Navy and Army successfully integrated fighter-derived tracking information into missile defense tests.

The DoD has already begun to use decommissioned RQ-4 drones to track hypersonic systems in flight tests. There is an even larger stock of existing UAS, slated for divestment, which could be leveraged. Many pieces of the puzzle are already in place.

In the longer term, advances in airborne platform endurance, networking, stealth, and autonomy could enable alternative designs. Opportunistic missile tracking could be invigorated by multimission platforms tightly linked to missile defense fire control networks. New domain awareness systems could allow asset placements closer to suspected missile launch sites. Significant investments in lighter-than-air and ultra-long-endurance aircraft, combined with declines in infrared sensor size, weight, and power, could allow a proliferated architecture of smaller, lighter, and cheaper airborne sensors.

Airborne systems offer different characteristics — flexibility, proximity, and survivability — to backstop and enhance a space-based missile tracking architecture. Introducing opportunistic or persistent airborne sensors increases the complexity of the missile defense problem for an adversary, forcing them to consider multiple domains from which their missiles could be tracked and engaged.

![image70](https://i.imgur.com/JZTNXyP.png)
_▲ __Figure 67: Airborne Sensors near Guam.__ A notional laydown of airborne sensors defending Guam, involving two surface-based sensor assets and three long-endurance UAS — two in a combat air patrol, and one transiting to replenish the orbit. Source: CSIS Missile Defense Project._

To be clear, these architectures are not without their limitations. Their comparatively low altitudes constrain their lines of sight compared to spacecraft and, like space architectures, would require fleets of multiple systems to achieve persistence. They are not invulnerable — both aircraft and their airbases can be attacked by aircraft, missiles, and drones if placed close enough to threat regions.

As the DoD races ahead with space sensor acquisition, it is worth considering the roles airborne sensors might play in accelerating capability delivery to the Indo-Pacific (Figure 67). Persistent airborne sensors might relax schedule pressure on space systems and allow for designs that phase capability later. More critically, a diversity of assets in space and in the air — in different orbits and with different mixes of penetrating capability and persistence — generates more dilemmas for adversaries.

_REDUCING INTEGRATION RISKS_

Phasing capability earlier also demands more attention to the systems that allow them to interoperate. A constellation design will live and die by its data transport and integration. If history is any indication, the delivery of software and ground systems will be difficult, costly, and late. “What you don’t want to have,” General James Dickinson of U.S. Space Command warns, “is where you have outdated ground stations that can’t leverage the new capabilities on orbit.” The development of these systems was a substantial contributor to the Space Based Infrared System (SBIRS) program’s early cost and schedule overruns; it is likely that ground system development, especially related to sensor fusion, will only mature after satellites have reached orbit. Both Congress and the DoD have roles to play in mitigating this risk.

Fusing sensor outputs from air and space platforms in multiple orbital bands is no easy undertaking. Efforts to develop common ground systems for the forthcoming Next Generation Overhead Persistent Infrared (OPIR) and Resilient Missile Warning/Missile Tracking (RMW/MT) constellations, for example, face considerable technical and schedule risk. A viable sensor fusion solution must correlate information from multiple sensors with different look angles, latencies, and uncertainties associated with their sensor returns to form a track. While some portion of this processing can be done on board satellites — “on the edge” — significant track correlation and fusion will likely initially take place on the ground (Figure 68).

___`A constellation design will live and die by its data transport and integration.`___

As of 2023, the DoD plans to manage the ground operations for RMW/MT through a combined program office including Space Systems Command (SSC), which will acquire the MEO component; SDA, which will acquire the Tracking Layer; and MDA, which retains considerable equities through HBTSS and the Missile Defense System (MDS). The ground components for each system are under development by different contractors and must interface with satellites from many vendors. Their software must correctly interface with the Next Generation OPIR Future Operationally Resilient Ground Evolution (FORGE) infrastructure and be compliant with the broader Space Force Enterprise Ground System (EGS).

Still in its initial iterations, RMW/MT and Next Generation OPIR constellations will leverage different data formats, requiring “translation” on the ground to be interoperable. The RMW/MT ground segment itself involves separate infrastructure for the LEO Tracking Layer, MEO constellation, and HBTSS, which come online on different timelines.

The timelines for acquiring these translation capabilities will be tight. FORGE itself is expected to come online no earlier than 2025. A more comprehensive ability to command and control multiple types of satellites with a single protocol, EGS, is required to enter service before 2028. Responsibility for ensuring an integrated space architecture — such as by mandating common data standards and software development practices — has been dispersed across multiple program elements and offices. Despite clear road maps for launching large volumes of new satellites, no comprehensive plans have been publicized for fusing their large volumes of data.

The DoD has only recently begun algorithm development to fuse two-dimensional sensor tracks from OPIR satellites. While it has demonstrated the performance of its sensors on the ground, sensor track fusion remains a substantial software challenge. As deployment of the Tranche 0 satellite constellation continues, the DoD must ensure that the sensor fusion approaches it leverages are scalable to larger quantities of satellites.

![image71](https://i.imgur.com/rppd0Jr.png)
_▲ __Figure 68: Data Transport Pathways.__ Data transport, fusion, and integration will be as important to space-based missile tracking as the sensors themselves. Source: CSIS Missile Defense Project._

It will be imperative to get ahead of these integration problems. How many hops must the data take between sensors, ground stations, and other data processing nodes? How long might each hop take? Which nodes will process the tracking data, which will fuse them, and which will deliver the finalized track to an effector? The various types and orbits of satellites being purchased should output common data formats that are usable across various ground assets. Moreover, the DoD should take steps to mitigate cases where fusion-related program elements lack clear organizational ownership — a substantial contributor to past schedule overruns.

The pace of the threat, and the pace of ongoing launch schedules, is too fast to accommodate any potential delays in sensor fusion and ground system development. Moreover, the DoD cannot settle for uncertain assurances that, someday, satellites in different orbits and with different datalinks could be integrated down the road. It will not be enough to continually experiment with fusion approaches once the satellites reach orbit. To deploy a diverse, proliferated constellation, it is essential for the ground systems and software to arrive on time.

#### Temptation to Consolidate

Finally, the future sensor architecture must be designed for conflict: it must be capable of surviving and reconstituting in highly contested environments. Achieving this will require an orbitally diverse constellation design that forces adversaries to develop many types of countermeasures. Policymakers should resist temptations to consolidate the sensor architecture into a single orbital regime.

Multi-orbit capabilities are not duplicative. An architecture in multiple orbits and altitudes can generate unique efficiencies in coverage unachievable with single-altitude architectures — especially for the Indo-Pacific region. Moreover, it will be critical to deploy diverse orbits to ensure resilience against growing counterspace threats.

Amid future programmatic and budgetary pressures, it may be tempting to consolidate a sensor architecture to a single set of orbits in the low, medium, geosynchronous, or highly elliptical domains. In the past, the DoD has overly consolidated certain capabilities in a single orbital domain, such as GEO. That practice should not be repeated. The DoD’s pivot toward a multi-altitude sensor architecture is an important step in resisting this temptation.

> #### John Plumb, Assistant Secretary of Defense for Space Policy

> “What we’re finding is that resilience has no end state.”

Orbital diversity has become especially critical in view of the growing counterspace threat. Adversaries recognize the importance of space sensor architectures and are rapidly advancing their counterspace capabilities. In the past five years, they have conducted over 70 counterspace and anti-satellite (ASAT) weapon tests, developmental demonstrations, and deployments (Figure 69). They are developing kinetic direct-ascent and co-orbital ASAT weapons, non-kinetic dazzlers, jammers, and cyberweapons, and have magnified natural threats to satellites, generating space debris through weapons testing. The increasing complexity of these threatens to outpace the United States’ acquisition of satellite constellations. This should be a central consideration not only in the construction of satellites, but in the design of an architecture.

![image72](https://i.imgur.com/EabU1NB.png)
_▲ __Figure 69: Counterspace Developments, Tests, and Deployments, 2006–2022.__ Source: CSIS Missile Defense Project with data from Aerospace Security Project._

Different orbital regimes are vulnerable to different threat profiles. The LEO environment is easier to threaten but also easier to proliferate and reconstitute. MEO offers coverage and distance but with harsh radiation environments and challenging unit economics. GEO, meanwhile, is increasingly populated with adversary co-orbital capabilities but benefit from both distance and potential defensive capabilities — making them far from “juicy targets.” HEO regimes incorporate few assets but can be challenging to covertly engage with co-orbital weapons. No specific constellation design represents an ideal survivability profile.

A survivable constellation should therefore seek to multiply adversary dilemmas, forcing them to attack multiple orbital layers with multiple, costly means of attack. Assuring coverage will demand the use of air and space assets, the reconstitution of constellations under attack, and carefully planned defensive operations (Figure 70). It should leverage multiple approaches to resilience (Table 4). It is not merely a matter of proliferating sensors, but of doing so in ways that introduce additional targeting challenges.

![image73](https://i.imgur.com/Rl7Bxjk.png)
_▲ __Table 4: Approaches to Resilience.__ Source: CSIS Missile Defense Project with data from the Department of Defense._

Different orbits are suited to different resilience pathways. Constellations optimized for smaller numbers of assets — in GEO, for instance — benefit from resilience approaches that protect individual assets: advanced radiation hardening and error-correcting circuitry; larger fuel loads or refueling systems to perform evasive maneuvers; and signature reduction, chaff, and decoy systems. While some protection methods, such as the deployment of defensive “bodyguard” satellites, are costly, they can introduce novel operational considerations for an adversary. But it is unaffordable to ensure a resilient architecture through asset-level protection alone.

These approaches should be combined with constellations that leverage different resilience philosophies. Several proposed LEO constellations leverage proliferation to ensure survivability.

![image74](https://i.imgur.com/si6JWLH.png)
_▲ __Figure 70: Mission Assurance Contributors.__ Source: CSIS Missile Defense Project with data from the Department of Defense._

Dramatic drops in the cost of space launch have made it feasible to rapidly proliferate and reconstitute satellites — and to do so more cheaply than they can be shot down.

Proliferation strategies are attractive for their potential to complicate adversary targeting and introduce new technology increments rapidly. Such satellites could be constructed to minimize unit cost, with lower reliability thresholds, commercial-grade electronics, and shorter orbital lifespans, to be replenished frequently with upgraded systems.

Systemic threats, however, challenge efforts to achieve resilience through proliferation. A sustained counterspace campaign would likely generate large quantities of debris in crowded LEO orbits. Nuclear explosions in space could deny large swathes of the LEO environment. Cyberattacks remain an omnipresent area threat, both for proliferated and exquisite architectures. The threat posed by these area effects makes it more urgent to embrace multiple resilience strategies.

Increasing the number of orbital regimes in the sensor architecture can enhance system-level resilience. Leveraging multiple orbital regimes complicates an adversary’s ability to exploit failure modes common to that orbit. LEO constellations benefit from large numbers, but their proximity to Earth makes them vulnerable to aforementioned area threats. MEO, GEO, and HEO constellations, meanwhile, might involve fewer assets with less provision for replenishment but are more difficult to engage with some directed-energy and direct-ascent weapons and potentially more economical to harden.

More critically, a multi-orbit architecture can complicate adversary mission planning. Adversaries facing such an architecture would encounter challenges in synchronizing attacks. A direct-ascent or co-orbital attack on MEO or GEO assets may take substantially longer to execute compared to attacks on LEO. If attacks were launched simultaneously, the earlier disruption to LEO layers would give warning time for MEO and higher satellites to employ defensive maneuvers or other measures. If attacks were phased to strike multiple orbits at once, the long transit time of co-orbital weapons or missiles in GEO or HEO would offer warning time for defensive measures in MEO or LEO. A diverse architecture both creates targeting dilemmas and complicates tactical surprise.

> #### Michael Griffin, Under Secretary of Defense for Research and Engineering, 2018

> “I don’t want to be in any one orbit. . . . I want us to be as widely distributed over as many choices of orbital regimes as we can effectively use, because I want to pose the adversary such a difficult problem that they’ll choose not to fight it.”

The future sensor architecture cannot be a monoculture. Wartime scenarios are likely to include targeted attacks on individual satellites and area threats that threaten many. An architecture reliant on a single orbit and optimized for a single resilience philosophy will be simpler for adversaries to counter than a multi-layer approach, which presents dramatically different vulnerabilities. The increasing importance of space sensing makes it imperative to avoid so-called “common mode failures.” A future missile tracking constellation cannot only be proliferated, it must leverage a diversity of sensors to complicate adversary targeting.


### Staying on Track

Missiles are no longer niche weapons, they are weapons of choice. They have become “foundational to our adversaries’ way of war, and missile defense has become foundational to integrated deterrence and the defense of the nation.” The creation of a new elevated sensor architecture will be similarly foundational to the future missile defense enterprise.

Over the last 40 years, seven successive presidential administrations have expressed support, at least on paper, for fielding a space sensor layer capable of providing not just missile warning but also high-quality tracking capabilities necessary to support the missile defense mission. To date, none has yet done so.

That is now beginning to change. Substantial strides have been made toward a robust space sensing capability. That past vision has never been closer to realization than it is today. Breakthroughs in space launch, networking, and sensing technologies have created opportunities for realizing a robust elevated sensor architecture. Substantial institutional attention is now being paid across the U.S. national security enterprise, with significant investments to match. Recent emphasis on acquiring proliferated low Earth orbit (pLEO) constellations was a good start, but contending with near peers will require much more. As emphasized by Assistant Secretary of Defense John Plumb, “Resilience is kind of a never-ending quest.” To achieve robust capability and mission assurance, the future sensor architecture must orbit in multiple altitudes and domains, prioritize designs that deploy sooner, and provide denser coverage of latitudes for the Indo-Pacific region.

The necessary policy, programs, and institutions are in place. What is needed now is the oversight, resourcing, and systems engineering authority to make the future architecture resilient, timely, and capable. To be resilient, the future architecture must be orbitally diverse. To be timely, it must deploy capability with an eye to graceful deployment and to prioritizing lower-latitude coverage. Finally, it must deliver the quality of data necessary for missile defense — fire control-quality tracking.

This long-awaited elevated sensor architecture will be achieved. When it is, its uses will extend well beyond missile warning, missile defense, and missile defeat. Indications, warnings, and attributions from these assets will bring clarity to decisionmakers in crisis situations and better inform and protect servicemembers in the field. Just as the Global Positioning System (GPS) has had countless commercial applications and the Defense Support Program missile warning constellations have benefited wildfire detection, new missions and use cases will emerge for these elevated sensors as well.

The implications of space becoming a warfighting domain will not be fully understood for some time. It is, however, already clear that elevated sensing is critical for air and missile defense. As the number of exotic space threats continues to multiply, there is a risk of neglecting the seemingly pedestrian air and missile threats below. As tempting as it may be to deprioritize the missile defense mission, the requirement for fire control-quality tracking must not be abdicated. It must stay on track.


### Appendix

This report used Systems Toolkit (STK), SMARTSet, and other simulation and visualization tools to inform its analysis. The modeling performed is notional and intended to illustrate concepts and tradeoffs involved with sensor architecture design. To better highlight these, the team constrained the parameters being investigated in its analysis. The design of an operational architecture would involve higher-fidelity modeling for cost, maintenance interval, solar activity, hardening, launch schedules and missile design, conjunction, link budgets, and many other parameters. In brief, these models are demonstrative, not prescriptive. They are not reference architectures but exhibits for the design tradeoffs involved.

#### Sensor-Level Analysis

The research team performed infrared sensor and signature analysis using STK’s Electro-optical Infrared (EOIR) module. Infrared background data was imported from the National Aeronautics and Space Administration’s (NASA) Visible Infrared Imaging Radiometer Suite (VIIRS) gridded data sets and processed with Python and NASA Panoply software. The team modeled a notional hypersonic glide vehicle (HGV) (Figure 4) with Autodesk Fusion 360 and applied temperature maps to vehicle surfaces in Blender, using open-source surface temperature estimates. These assets were then placed into the STK simulation environment (Figure 4).

Tracking hypersonic signatures is challenging because hypersonic weapons are not often the brightest objects in the scene. These weapons often appear as a single, slightly brighter pixel in a 4,000-by-4,000 pixel, wide-field-of-view (WFOV) image; while detectable by machine, these raw images are difficult to interpret with the naked eye. The infrared images furnished in this report are specifically scoped and processed to make these challenges visible.

Figure 10 illustrates challenges associated with isolating hypersonic signatures from background clutter. The series of images are derived from STK’s EOIR simulation suite and picture an HGV as seen from a low Earth orbit (LEO) satellite orbiting at 1000 km. The raw image (left) represents a “crop” of a potential WFOV sensor, with a resolution of 256-by-256 pixels and a per-pixel FOV of 450 microradians. The simulated sensor operates in the mid-wave infrared (MWIR) band, with a wavelength of between 3.5 and 5 microns. The band selected is illustrative; various bands in the short- and mid-wave regions present different advantages. Radiometric features, including noise equivalent irradiance, were minimized to the degree the HGV could be distinguished.

The first image depicts the raw output of this sensor. Unlike with bright plumes in the boost phase, the pixel containing the hypersonic weapon is dim — it is not among the brightest in the scene and cannot be distinguished with the naked eye. The brightness difference caused by the hypersonic weapon cannot easily be resolved by observing a single frame.

Visualizing the signature instead requires analysis of several frames with the hypersonic weapon in motion. By estimating the movement of each pixel across the frame, it is possible to filter the hypersonic weapon’s motion from other objects in the scene. The second image depicts the motion vectors of each pixel over 20 successive image frames, processed with the OpenCV library’s Farneback optical flow algorithm. The false-color image encodes the optical flow vector of each pixel with a separate color, depicting a color variation for the pixel containing the moving hypersonic weapon. The third image displays an enlarged version of this false-color image, with contrast adjustments applied to make the HGV pixel more visible.

The resultant images are illustrative and do not depict operationally sensitive features of hypersonic tracking systems. An operational system would offer substantially greater performance headroom. Moreover, atmospheric conditions can substantially change the signature of a vehicle; these were left to the standard atmospheric and cloud models included with STK EOIR. Finally, the simulations did not use high-fidelity maps of the hypersonic vehicle’s surface temperatures. A real hypersonic weapon would have significant temperature gradients across its surface and generate a wake of superheated gas and plasma with unique infrared emissivity characteristics. A weapons engineering process would include these detailed parameters, but these are not necessary to illustrate the principles discussed.

Figure 7 illustrates the thermal gradient on a hypersonic weapon’s surface. To make these characteristics visible to the reader, the HGV was imaged from an uncrewed aerial system (UAS) placed approximately 80 km away with a 256-pixel focal plane array (FPA), 35 cm aperture, and a tight, 0.01-degree total FOV. This is not representative of an operational system but best illustrates the concept being discussed.

Similarly, Figure 25 is constructed to illustrate the effects of motion blur and sensor jitter. The sensor FPA is 256 pixels, with an 0.001-degree FOV, placing the HGV signature in the center of the image. The FPA has an integration time of 10 milliseconds and the final image includes this signature with an added 0.005mrad jitter. Figure 24 uses apertures of various sizes from geosynchronous orbits to illustrate how aperture affects sensor resolution. Again, sensor resolution and immediate field of view (IFOV) are left to generic parameters intended to highlight the impact of aperture size. The largest aperture is set to an arbitrarily large diameter of 10 m, while the two successive apertures, 60 cm and 30 cm, show the progression in resolution with smaller, more realistic diameters.

#### Constellation-Level Analysis

The research team also used STK to assess satellite constellation design tradeoffs. Constellation designs illustrated in the report were similarly selected to highlight design principles — inclination, orbital altitude, sensor FOV, and orbital configurations — and their impact on sensor coverage. Specifically, the report displays constellation designs evaluated for their two-satellite (stereo) coverage, which is necessary for missile tracking and fire control.

Several visualizations directly depict real-life constellation designs. Figure 38 leverages data from the Space Force’s catalog of tracked space objects to define the orbits of Space Based Infrared System (SBIRS) and Defense Support Program (DSP) satellites. The coverage figures depict the maximum coverage footprints possible from each satellite. The latest and final SBIRS satellite, SBIRS GEO-6, was not included in this visualization. Similarly, Figures 59, 60, 61, 62, and 63 depict the Tranche 0, 1, and 2 constellation designs being contemplated.

Other visualizations contain notional constellation designs produced through optimization studies. The project team leveraged various approaches to find configurations that minimized the number of satellites needed for stereo coverage of a given area. These studies also produced configurations of near-minimum constellation designs inspired by numbers publicly given for forthcoming constellations (Figure 27) (Tracking Layer, RMW/MT-MEO).

These optimization studies draw from the considerable literature written on the subject. Many of the configurations investigated in these studies were Walker or modified Walker configurations with different parameters on inter-plane spacing. Walker constellations are a family of constellation designs that distribute satellites in equally spaced, equally inclined circular orbits. Such a design is attractive to mission designers because of the stability of their geometry: the forces that perturb satellite orbits (such as those associated with atmospheric drag, the non-uniform nature of Earth’s gravitational field, and the Sun and Moon’s gravity, among others) affect all satellites in the constellation approximately equally. This symmetric design allows satellite operators to plan similar station-keeping maneuvers for all satellites in the system, giving them approximately equal operational lifetimes. Walker configurations are common among operational position, navigation, and timing (PNT) satellite constellations, such as the European Space Agency’s Galileo satellite system. Other satellite constellations, such as the U.S. Space Force’s Global Positioning System (GPS) or Iridium Communication’s constellation, use adaptations of the Walker constellation design.

Walker constellations can be described by six parameters: semi-major axis, the number of orbital planes, the number of satellites per plane, the relative phasing between satellites in adjacent planes, the spacing between planes, and the planes’ inclination. For circular orbits — which have an eccentricity of zero — the constellation can also be described by the orbiting altitudes of its satellites, which stays constant over the course of the satellites’ orbital period. The coverage of such a constellation is also affected by a seventh, eighth, and ninth parameter: the field of regard (FOR) of the sensor on board, requirements for stereo or greater coverage, and solar exclusion, which defines angles where a sensor’s view is degraded by the light of the Sun in the background.

These parameters must be tuned to minimize the number of satellites needed for persistent stereo coverage: coverage by two or more satellites at once, at every point in time, in the relevant region of analysis. The study team primarily analyzed coverage of a global region and a smaller, Indo-Pacific-focused region between 15 degrees South and 55 degrees North latitude (Figure 66). To preserve the generalizability of the study, these analyses assumed a maximum possible FOR for each satellite constellation; higher-fidelity details of detection and characterization challenges are not addressed; and the results presented in the following two sections correspond only to line-of-sight coverage analysis.

To evaluate possible designs, the research team leveraged STK’s Analyzer module to test millions of possible configurations for coverage. This analysis began with the construction of simplified, non-representative designs for every orbital altitude to exemplify the altitude trades at play (Figure 34).

To construct this relationship, the study team used STK Analyzer’s Design of Experiments (DOE) tool to explore an entire swath of design possibilities. The model was simplified to assess simplified stereo coverage to minimize the computation time needed, with no constraints on solar exclusion. More detailed assessments, including constraints on sensor FOR, solar exclusion, and other factors, were performed for the other constellations visualized in this study.

The DOE tool parametrically defines a series of Walker Delta constellations by systematically combining ranges of orbital altitudes, numbers of orbital planes, numbers of satellites per plane, and inclinations, evaluating their suitability for stereo coverage using user-determined “Coverage Definitions” and “Figures of Merit.” This study relied on a global coverage definition consisting of a grid of points, spaced by six degrees, positioned 20 km above the Earth’s surface. Under these definitions, coverage can be evaluated at each of the points in the coverage grid, which are separated from one another by six degrees in both latitude and longitude space.

These studies defined successful stereo coverage by constellations’ ability to minimize average stereo coverage gap time to zero. That is, the number of seconds over a one-day study period — during which any point in the coverage region is observed by fewer than two satellites in the constellation — cannot be greater than zero. When satellite constellations achieve continuous stereo coverage for a particular region, this figure of merit requirement is satisfied.

For each orbital altitude between 500 and 36,000 km, the team evaluated hundreds of thousands of permutations of Walker Delta constellations. Although many different constellation architectures satisfied the figure of merit requirement — as many overpopulated satellite constellations offer much denser coverage than what is required — only two constellations per altitude met this study’s definition for optimality: one that offers continuous stereo coverage while minimizing the total number of satellites in the system, and one that offers continuous stereo coverage while minimizing the total number of orbital planes in the system.

![image75]()https://i.imgur.com/ZzOuARE.png
_▲ __Figure 71: Solar Exclusion.__ As with handheld cameras, a space-based infrared camera angled close enough to the sun will encounter washout and flaring effects. This can inhibit the detection of dim targets. Source: CSIS Missile Defense Project._

Optimal constellations were identified algorithmically by first sorting the list of Walker Delta constellation permutations for each altitude by average stereo coverage gap times and removing those with non-zero times. This step eliminates those constellation architectures that fail to satisfy the figure of merit requirement. Next, the minimum total number of satellites and minimum total number of orbital planes of the remaining constellation architectures should be identified and noted. To identify the optimal constellation — minimizing the total number of satellites — the architectures with more than the minimum total number of satellites should be removed.

In many cases, there is more than one constellation architecture in the filtered list that offers the minimum total number of satellites. To select a singular, unique architecture, the list was filtered to include only those architectures that also use the minimum number of orbital planes. This is because multiple launches are generally needed to populate multiple orbital planes. All else being equal, a constellation of many planes with fewer satellites per plane is more costly than a constellation of fewer planes with more satellites in each.

Where needed, the list of remaining constellation architectures was sorted by inclination, and the design with the lowest inclination was labeled as most optimal, as less-inclined orbits generally correspond to lower launch costs. The process for identifying constellations that minimized the number of orbital planes is similar to the process described for minimizing the total number of satellites, but the list of architectures that satisfy the figure of merit requirement should first be filtered to only include those with the minimum number of orbital planes, then again filtered to only include those with the minimum number of total satellites — a reversal of the previously described order of operations.

The resultant constellation configurations, and the total numbers of satellites they represent, were graphed using the Python Plotly library. The resultant figure (Figure 34) illustrates the results of this optimization study conducted for every altitude between 500 and 36,000 km at 50 km increments. The study team applied a minor smoothing function to interpolate between these increments and highlight the underlying relationship between altitude and the number of satellites required for coverage.

An operational constellation configuration, however, must account for more detailed constraints on performance. Each satellite in a constellation can be assumed to encounter some time where their sensors may be unavailable, either during calibration or during periods where the Sun is sufficiently close to the sensor background (solar exclusion) (Figure 71). These can considerably increase the number of satellites required to develop a constellation design.

As such, reference constellations, including Figures 16, 17, 27, 28, 35, 43, 44, 45, 46, 47, 51, 52, 53, and 54, are optimized with constraints on solar exclusion. The total FOR of each sensor was modeled to provide the maximum footprint attainable. LEO reference constellations, all modeled at 1,000 km altitude, were conservatively modeled with a 30-degree solar exclusion parameter. MEO constellations, at 7,000 and 10,000 km altitudes, were modeled with a 16-degree solar exclusion parameter. This adds a 30-degree angle outside the sensor FOR where the presence of the Sun would inhibit sensor function. These figures are intentionally arbitrary and not reflective of operational systems.

The larger number of parameters required different approaches for discovering optimal designs. Testing every possible configuration, as with the DOE studies informing Figure 34, required over 800,000 simulation runs to analyze. To discover designs for reference constellations, the research team leveraged STK Analyzer’s built-in genetic optimization suite to find minimum possible designs. The use of the NGSA-II optimization algorithm reflects common practice in other constellation optimization studies. Using NGSA-II, STK Analyzer could automatically explore and test possible combinations of inclination, planes, satellites per plane, and other parameters, measuring their resultant impacts on coverage. This approach minimized the number of simulation runs needed to discover the frontier of possible optimal configurations. Of these, the study team manually selected configurations that minimized the number of orbital planes necessary.

This series of more detailed optimization studies formed the basis for several of the satellite configurations and mixes presented. The LEO orbital plane included in Figures 46, 51, 52, 53, and 54 represent the results of optimization studies performed for smaller coverage regions, of both the polar region above 55 degrees latitude and a regional, Indo-Pacific-focused band between -15 and 55 degrees latitude. Other configurations, such as Figure 28, demonstrate the significantly larger numbers of satellites needed when the per-satellite FOR is reduced. Combinations of “optimal” coverage layers were then devised from the basis of these studies. While these configurations do not represent the optimal configuration of an operational architecture, they demonstrate constellation designs that could reasonably exemplify the orbital tradeoffs at hand.

---

__Masao Dahlgren__ is a fellow with the Missile Defense Project at the Center for Strategic and International Studies (CSIS), where he writes on missile defense, space, and emerging technologies issues.

__Tom Karako__ is a senior fellow with the International Security Program and the director of the Missile Defense Project at CSIS, where he arrived in 2014. His research focuses on national security, missile defense, nuclear deterrence, and public law. 
