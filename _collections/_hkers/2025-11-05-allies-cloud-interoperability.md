---
layout: post
title : Allies’ Cloud Interoperability
author: Noah Sylvia
date  : 2025-11-05 12:00:00 +0800
image : https://i.imgur.com/4rb253Y.jpeg
#image_caption: ""
description: "Cloud Interoperability Between Allies During Crisis"
excerpt_separator: <excerpt/>
---

_Allied hosting models often test sovereignty, resilience and interoperability; a recent exercise explored balancing these to enable the future collective defence._

<excerpt/>

### Introduction

Allied militaries are increasingly dependent on digital infrastructure that is complex, interdependent and often hosted beyond national borders. While this offers opportunities for efficiency, scale and innovation, it also raises persistent questions about sovereignty, resilience and interoperability. States adopt different approaches to hosting – ranging from public cloud to sovereign and on-premises solutions – reflecting varying levels of risk tolerance and resource availability and differing strategic priorities. These differences often complicate the ability of allies to act collectively in times of crisis.

This question becomes more pressing in the face of a neighbour with the potential to use cyber disruption and military force on a massive scale. The credibility of collective defence rests not only on shared doctrine and capabilities, but also on the ability to maintain continuity of digital operations under pressure. This Insights Paper is based on the findings from an exercise designed to examine this challenge, exploring the trade-offs in how allies balance sovereignty, resilience and operational effectiveness in preparing their defence enterprises for crisis and war.


### Methodology

In September 2025, 13 participants convened for a four-hour exercise held in London. Participants were from government and industry, including several US hyperscalers.

This Insights Paper is based on the unattributable contributions of the participants. Unless otherwise noted, statements made in this paper are based on points raised by participants during the exercise.

This event and report were possible due to the financial support of Microsoft.


### Event Background

Upon arrival, attendees were assigned a country role and a group number. The country role determined the hosting model and national priorities of the participant (see Table 1). The groups each comprised members from each country, and attendees were tasked with working together to create interoperability in their hosting capabilities, which would then be tested by several crises.

The scenario was presented as follows.

_`Four countries in a region are in a defensive alliance. The alliance is oriented towards defending against the actions of a large, belligerent neighbour (called “Moskva”), which has stepped up its aggressive rhetoric and actions in recent years.`_

_`Each of the four countries has a different hosting model for its defence enterprise, although most use hyperscalers for at least some of their functions. The hyperscalers are all companies from country 6 (“the Federation”), which is allied to countries 1 to 4, although relations have grown tense in recent years. It is becoming unclear whether the Federation would come to the defence of countries 1 to 4 in the event of an invasion by Moskva.`_

Each group was told to develop basic interoperability between the enterprise hosting capabilities of the four countries within the groups, focusing on technical interoperability, but also involving some degree of organisational and procedural interoperability. The groups were instructed to choose an interoperability strategy focused on ensuring enterprise hosting interoperability in both peacetime and wartime, with the main purpose of joint operational effect.

There are no objective metrics for measuring interoperability, as states differ in their capabilities and their priorities around, for instance, sovereignty, security and resilience, and methods chosen. NATO itself lacks a singular method for measuring interoperability. As such, no definition or requirements for interoperability were provided to participants; they were simply asked to ensure that the countries within the group can achieve “joint operational effect”. Comparing interoperability across the groups proved difficult, as described below.

The following table lists general characteristics of each country in each group.

![image01](https://i.imgur.com/VEBwV4U.png)

Several assumptions and constraints were described:

- Countries One to Three have a similar degree of migration of their services, data and capabilities to the cloud at each relevant level of classification. Legacy systems are constraining each country’s ability to migrate and integrate, albeit to varying degrees.

- Each country is constrained in terms of time, money and resources. Even for countries with a high level of resource availability, resources are not unlimited.

- The four countries have the following minor hosting interoperability mechanisms already in existence:

  - Alliance-level basic federated cloud structures.

  - Bespoke interoperability solutions across a limited number of use cases bilaterally and multilaterally.

  - Alliance countries are understood to broadly share common doctrine and terminology.

Given the time constraints on the event, participants were told that the exercise would be unable to address all the topics relevant to multinational integration, including exploring the technical depth necessary for the complexity of various hosting architectures. Attendees were therefore encouraged to use their expertise and creativity to shape their group’s interoperability approaches as they saw fit.


### Session One

#### Initial Interoperability Plans

Participants were told that there were fears of Moskva invading in one year’s time, and that they should develop a baseline plan for how their group will approach hosting interoperability.

Security requirements around data and systems were at the core of initial interoperability efforts, with most groups then debating what standards to adopt: those of one of the four alliance countries, that of the Federation, or a new common standard to be created by the group.

Country Four (with all on-prem hosting) was considered the most significant hurdle at the outset by most participants. Most opted to largely exclude Country Four from the decision-making for joint standards, with the intention of informing them after the other three countries came to agreements and then integrating Country Four through individual bilateral relationships.

Technical approaches differed, with different groups considering cross-domain solutions, near-total digital integration using individual encryption as the controlling mechanism, and network- rather than data-centric approaches. However, resource constraints and the perceived imminency and scale of the threat proved the most significant shaping mechanism for decision-making.

Group One decided to pre-deploy a large number of tactical data centres to enable resilience and redundancy, while enacting legislation where data would be shifted to hyperscale cloud in the event of a crisis. Group Two introduced a PACE plan for hosting, starting with hyperscaler services and followed by on-prem as needed, in addition to developing the use of data embassies. Group Three focused on shared standards, attempting to balance between expediency and the vulnerabilities of dependence on the Federation.

Attendees broadly contrasted territorial sovereignty with forms of technical and legal hosting sovereignty, positing that increases in perceived threats to territorial sovereignty led to a greater tolerance of diminished hosting sovereignty – Ukraine’s move to hyperscaler hosting was cited frequently. Classification levels also generated discussion, with most attendees agreeing that in the event of war, relevant authorities would drop the classification of necessary capabilities to enhance interoperability with allies and operational effectiveness. Several attendees pointedly declared that debates on sovereignty and classification were “luxuries of peacetime”.

#### Crisis One

Halfway into this session, attendees were told that:

> “The alliance experiences a series of sporadic, large-scale outages in hyperscaler services. It appears to be due to a combination of malign activity and misconfigurations. The malign activity has yet to be attributed, but states must adapt their systems in case a military attack is to follow.”

The crisis appeared to partially moderate some of the various Groups’ efforts to solely rely on hyperscaler services. For example, Group Two decided to focus on creating a “cottage industry” of cloud providers within its countries, to reduce risk concentration while enhancing national sovereignty.

Interestingly, the groups that had been largely isolating Country Four until this point reintegrated it into their efforts, not by forcing Country Four to develop interoperable cloud, but by using the on-prem reliance as a failsafe for hosting alliance data and capabilities. For instance, Group Three developed data embassies, which were first located in Country Four’s on-prem servers and then replicated into each country for redundancy.


### Session Two

#### Crisis Two

Participants were told one year has passed since the outages and that:

> “Moskva has launched a full-scale invasion on the four allied countries. Combat has not physically affected CNI [critical national infrastructure] yet, but cyberattacks are beginning to target infrastructure.”

Participants were told that the Federation has remained neutral so far, but has not yet blocked use of hyperscale services for alliance military functions. Groups were warned that there were still political risks with relying on Federation companies and that hyperscale services used by the allies could be blocked for specific functions by the Federation government, such as targeting for long-range strikes into Moskva’s territory.

Participants began to shift from policy-oriented discussions to practical, operational concerns, with survival as the main priority.

Group One focused on connectivity, believing it to be the most vulnerable element of the digital capabilities of the four countries; it developed software-defined, encrypted networks between Countries One to Three, with bilateral connections to Country Four. The decentralised, deployed data centres permitted many national hosting functions while participants attempted to engage in negotiations with hyperscalers to permit continued services for priority functions.

Group Two began by deploying liaison officers to each country as a stopgap solution for operational coordination and relied on its PACE plan for continuity in hosting functions. It focused on identity as the key to interoperability and created a system of identity federation to preserve a higher degree of sovereignty. This group expressed a willingness to lower classifications, especially when operationally useful and when secrets were time-sensitive.

Group Three began to prioritise resilience in its discussions, including about the storage and access of critical non-defence data (see more below). This group dispersed its command and control, data centres and edge devices, connecting them with commercial standards and networks to create dynamic, distributed capabilities that enhanced survivability. All groups deprioritised national requirements and capability preferences once the invasion began, but none to the extent of Group Three, where only survivability was discussed.

Halfway through this session, participants were told:

> “Moskva has begun a deep strike campaign targeting CNI. Simultaneously, it has ramped up its attempts to compromise shared allied IAM [identity and access management] systems.”

Following this announcement, groups began considering further resilience measures, including negotiating with hyperscalers for greater extra-territorial hosting, attempting to persuade the Federation to host data embassies, and falling back to less sophisticated technologies (such as analogue radio).


### Takeaways and Conclusions

Following the end of Session Two, participants had a short discussion about their takeaways from the exercise, including the constraints of the scenario and exercise, as well as areas for further discussion and research.

#### Lessons

Based on their real-world and exercise experiences, participants described the necessity for crisis preparation to be done in advance. The common feeling was that current national and coalitional planning is insufficient and further contingency planning is needed for high-risk scenarios that may involve the need to reduce sovereignty or certain capabilities. One group engaged in direct negotiations with hyperscalers during the crisis to ensure continuity in services, but participants later reflected that they wished they had negotiated with the hyperscaler and the Federation prior to any crisis.

Several groups brought up the need for extending conversations about resilience to the non-defence sectors of governmental digital capabilities, even when the exercise focused specifically on military interoperability. Digital defence resilience plans require coordination with CNI providers as well as government departments with digital capabilities that are considered essential to the functioning and potential rebuilding of the country.

Several participants commented that they anticipated that the discussions would focus more on the technical needs of interoperability, but that they instead spent most of their time at the political and policy levels of interoperability, as technical concerns could not be discussed until political and policy questions were answered. Given that most participants were not policy leads but instead engineers and architects, the primacy of politics and policy over technical solutions to achieving resilience in interoperability is a reasonable conclusion from this exercise.

#### Limitations of the Exercise

Due partly to the directions of the exercise and partly to the backgrounds of the participants, the exercise focused on enterprise hosting cooperation and resilience, rather than the detailed considerations needed for interoperability in combat capabilities at the operational level and below. Similarly, time constraints prevented the exercise from addressing the variety of hosting capabilities needed by, and accessible to, each country at each stage.

A limitation on the application of the lessons learned from this exercise was the ease of collaboration between the countries in each group. Attempts at collaboration between four countries is far simpler than those within larger alliances, such as NATO, to say nothing about reducing the myriad interests and organisations within a state to a single individual and reducing complex inter-state relationships to the tabletop discussions of a few individuals.

Several participants discussed the varied nature of the choices taken by individuals and groups, commenting that the answers suggested and chosen will differ dramatically depending on the community in question. Participants coming from civilian commercial sectors, the intelligence community or defence (whether industry or government) will come with vastly different biases, priorities and experiences.

#### Interoperability and Sovereignty

The absence of consistent interoperability metrics impeded the ability to measure the “success” of countries’ interoperability across groups. The range of technical and nontechnical approaches was amplified by the dual-variable nature of the exercise: it explored resilience and interoperability simultaneously. While further research should explore explicit methods to measure interoperability between allies, interoperability and resilience are inextricable in modern military planning.

Sovereignty remained the key to all groups’ plans for interoperability and resilience, although varied conceptions of sovereignty shaped solutions. For example, at least some of the participants of Group Two, which relied on federated identity to meet the sovereignty needs of its countries, understood sovereignty as a problem that could be solved technically. However, data access and security is only one angle of cloud sovereignty, which can extend beyond technical areas into geographic, industrial and legal areas. No concerns about vendor lock-in or competition policies surfaced over the course of the exercise, although further research is merited on the connection between competitive procurement practices and resilience.

Participants frequently described sovereignty and risk as being at odds – although this idea may only be due to the perception of an imminent invasion by a large country on a far smaller alliance as constituting an existential risk. The calculation and perception of risk merits further research in conversations around digital resilience and sovereignty.

One constraint of this exercise was that all four countries faced similar threats and then faced a simultaneous invasion. Not only is the perception of threat different between NATO countries, but even in the event of a catastrophic war with Russia, the territorial, deep strike and cyber threats faced would not be uniform across the Alliance. Except where a threat is perceived to be imminent and existential, sovereignty and survival will probably not be considered as opposing forces to such a degree.

The exercise also exhibited a very limited number of scenarios: pre-war; cyberattacks; and a large-scale territorial invasion. In reality, potential conflicts vary widely in the threats they pose to CNI, sovereignty, territorial integrity and even economic stability. A more granular understanding of threat categories and the gradient of responses warranted/necessary is crucial to conversations about resilience and the importance of sovereignty.


### Conclusion

The war in Ukraine and shifts in Alliance commitments over the past four years have ensured that topics of sovereignty, interoperability and resilience are becoming ever more relevant in conversations about digital capabilities. This exercise attempted to test the practicalities of cloud interoperability in times of crisis and reached several broad preliminary conclusions:

1. Politics and public policy have primacy over technical and operational specifications.

2. Conceptions and priorities about cloud sovereignty vary depending on the perceived scale and timeline of a threat.

3. Countries must ensure strong lines of communication with their cloud service providers in the event of a crisis, but can be vulnerable if those companies are hosted by a country with diverging security priorities.

4. Experts can have immense success in creating ad hoc solutions to ensure at least basic interoperability in crisis, but they must be given the trust and freedom by policymakers to experiment and innovate.

5. The existence of varied hosting models within an alliance introduces challenges in interoperating but can also enhance resilience by diversifying alliance vulnerabilities.

Together, these insights reaffirm that digital resilience and a clear conception of digital sovereignty are strategic imperatives to collective defence, demanding sustained political will, multinational collaboration and a clear-eyed understanding of national strengths and vulnerabilities.

---

__Noah Sylvia__ is a Research Analyst for C4ISR, especially its intersection with Emerging Technology, on the Military Sciences team at RUSI. He has previously researched asymmetric warfare, emerging technologies in the military, and military coalitions during wartime.
