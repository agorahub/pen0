---
layout: post
title : Supply Chains Of Russia’s UAV
author: James Byrne, et al.
date  : 2022-12-15 12:00:00 +0800
image : https://i.imgur.com/uja7lX9.jpg
#image_caption: ""
description: "The Orlan Complex: Tracking the Supply Chains of Russia’s Most Successful UAV"
excerpt_separator: <excerpt/>
---

_This investigation shows that Moscow’s well-known UAV relies on complex supply chains that reach far beyond Russia’s borders._

<excerpt/>

> #### METHODOLOGY

_For this report, RUSI’s Open-Source Intelligence and Analysis (OSIA) and Military Sciences departments used extensive datasets of components and microelectronics sourced from disassembled Russian weapons either captured or expended in Ukraine since February 2022. These compilations of technical assessments were databased, standardised and categorised to enable further analysis._

_Physical inspection of the platforms contained in this report by RUSI during fieldwork confirmed the authenticity and accuracy of this data, which was also compared to product descriptions and serial numbers published by a wide variety of manufacturers. It should be noted that grey and black markets for counterfeit components and microelectronics are a global problem, meaning that fool-proof corroboration is a challenging endeavour. Given the evidence assessed here and the long history of Soviet and Russian military procurement efforts targeting the world’s leading technology and microelectronic companies, the research team operated under the assumption that the majority of these parts were likely genuine. Assessments conducted internally by the Russian government, and seen by the authors, highlighting critical dependence on a number of foreign manufacturers, increases the confidence that the components identified in Russian weapons are genuine._

_This data was then married with a range of other sources, such as shipment-level trade data, import and export declarations, court records, financial information sourced by Reuters and iStories, and corporate records in Russian in an attempt to better understand a particular Russian procurement network while also placing the Orlan-10, a Russian UAV, in its tactical and operational context._

> #### IDENTIFICATION OF INDIVIDUALS, COMPANIES AND GOVERNMENTS IN THIS REPORT

_The purpose of this report is to understand and explain how the Russian military depends on Western technology. To achieve this purpose, it identifies a number of individuals/companies/governments who are believed to be involved in the designing and manufacturing of components which have been acquired by the Russian military and are used in their military hardware. For the avoidance of doubt, RUSI does not impute any allegations of wrongdoing on the part of these individuals/companies/governments and makes no representations or assertion that these individuals/companies/governments have any involvement in any sanctions evasion-related activity or are involved in directly or indirectly supplying the Russian military and/or Russian military customers in breach of any international (or their own domestic) laws or regulations restricting or prohibiting such action, unless expressly stated in the report._


### Executive Summary

A joint investigation between RUSI, Reuters and iStories has found that Russian companies closely associated with the St Petersburg-based Special Technology Centre Limited Liability Company (STC LLC or STC) – the Russian military-affiliated manufacturer of the Orlan-10 UAV – have drastically increased imports of critical Western-manufactured components since the February 2022 invasion of Ukraine began.

These imports will likely enable the Armed Forces of the Russian Federation (AFRF) to maintain and expand production of the country’s most successful UAV – a platform that sits at the heart of the country’s warfighting capabilities and enables the AFRF to rain accurate fire down on Ukrainian formations.

Financial records, customs data, court records, Russian company filings and a range of other open sources indicate that many of these Western-manufactured imports are likely being procured by a St Petersburg-based company named SMT-iLogic on behalf of STC, which was first sanctioned by the US government in December 2016 for supporting Russia’s interference in the 2016 US Presidential election.

These components, which are critical both to Russia’s plans to expand UAV production and its ongoing operations in Ukraine, are being shipped to Russia by a variety of distributors based in the United States, Europe, China, South Korea and Hong Kong.

In many cases, these exporters appear to be operated by Russian nationals or expatriates based abroad with limited public profiles. In one such case, a US company owned by an individual with Russian and American citizenship named Igor Kazhdan shipped large volumes of export-controlled components to SMT-iLogic and another company named Device Consulting, also based in St Petersburg, in violation of US export controls.

Some of SMT-iLogic’s largest suppliers since the start of Russia’s invasion have been a range of Hong Kong companies, some with a history of evading sanctions and providing military equipment to the Chinese government.

Networks such as those profiled in this report are core to Russia’s ability to procure advanced microelectronics for its weapons programs. As the United States and its allies seek to restrict Russia’s ability to access the world’s most advanced technologies, trade restrictions such as export controls and sanctions are emerging as core tools available to policymakers.

This report highlights methodologies that can be used by state and non-state actors alike in combating Russian sanctions evasion networks. Approaches demonstrated in this report, including the use of open-source information, integration of modern data analysis methods, and the use of commercial technologies, can successfully identify sanctions evasion networks in detail and at scale. If governments wish to slow shipments to critical Russian military programmes such as the Orlan-10, they should:

- Increase their ability to amass, analyse, and action open-source information through investments in data storage, processing, and visualization. Artificial intelligence will be a core part of several capabilities that can materially improve export control and sanctions enforcement, such as the creation of graph databases showing historical trading relationships, entity resolution, text extraction, machine translation, and geolocation.

- Increase use of commercial analytics and data providers. As demonstrated in this report, commercial tools available today can allow for the identification of export control and sanctions evasion networks at scale.

- Curate the data environment to ensure that actionable information flows to enforcement authorities to the maximum degree allowed by law. Enforcement authorities should work with Congress to pass laws that expand visibility into trade, corporate and risk data that would provide actionable intelligence on sanctions evasion networks, while safeguarding privacy and civil liberties.

- Adopt systems that allow for data-driven interoperability with allies, including by adopting information architectures that allow for easy and secure sharing of information. The US is just one node in a global trading web used by sanctions and export control evaders – successful enforcement necessarily depends on joint action. The US can bring to bear open-source information and federated data architectures to share information with partners, even where sharing classified information is undesirable.

- Partner with, and make greater use of, non-state analytical organisations with expertise in identifying illicit activity using open-source information. As this report demonstrates, non-state analytical actors possess significant expertise in identifying sanctions and export control evasion. The US and its allies should engage robustly with these organisations to share leads, investigative techniques, tools and data.

Fundamentally, improving this capability this will entail investments in the government’s ability to amass, analyse, and action large quantities of publicly-available and commercial information. This will allow the government to more quickly and comprehensively identify and address gaps in its enforcement of sanctions and export controls, allowing it to:

- Rapidly sanction entities and individuals involved in the illicit supply chain of components to the AFRF.

- Identify and prosecute individuals knowingly evading sanctions and export controls to ship components to the AFRF or those acting on their behalf.

- Strengthen the monitoring of components and microelectronics moving to Russia and the identity of end-users to which they are being shipped.

- Improve guidance and expand capacity-building operations for private sector companies and financial institutions engaged in exporting or financing these component flows.


### Introduction

The Orlan-10 UAV has proven to be one of the most critical components of the Armed Forces of the Russian Federation’s (AFRF) lethality in Ukraine. Designed and manufactured by Russia’s Special Technology Centre Limited Liability Company (STC LLC or STC), the Orlan-10 is a sophisticated yet relatively affordable UAV, costing approximately $87,000-120,000 per system. The UAV can carry a wide range of military payloads, enabling it to conduct a variety of missions and to be used in combination with other systems, including other UAVs, for more advanced combinations of effects.

The most common and deadliest use of Orlan-10s by the AFRF in Ukraine is as part of an intelligence, surveillance and reconnaissance complex. The UAVs are used to locate Ukrainian troops and vehicles from medium altitudes and relay their positions for rapid artillery, missile and loitering munition strikes. When an Orlan-10 is overhead, Russian artillery response times can be as short as three minutes from target detection, leaving those targets almost no time to escape the fire zone. By contrast, response times when UAVs are not overhead are generally around 20 minutes, affording Ukrainian units the opportunity to relocate and avoid destruction. The centrality of artillery firepower to battlefield tactics on both sides means that the presence or absence of Russian UAVs in Ukraine is a core determinant of Russian lethality.

The Orlan-10 is particularly challenging for Ukrainian ground forces to counter. It can reportedly reach speeds of at least 150km/h and a maximum altitude of 5,000 metres. The ability to fly at these relatively fast speeds and high altitudes allows the Orlan-10 to operate beyond the range of most man-portable air-defence systems (MANPADS), and also makes the UAV harder to detect and engage.

![image01](https://i.imgur.com/IloZDPM.png)
_▲ __Figure 1: Orlan-10 Military Sensors and Payloads.__ Source: OE Data Integration Network – US Government; Information provided to RUSI; graphic designed by RUSI OSIA._

Additionally, the Orlan-10 boasts hardened radio datalinks with frequency-hopping capabilities and an accurate inertial navigation system that renders it difficult to effectively jam using electronic warfare (EW).

In addition to artillery spotting, the AFRF uses the Orlan-10 for effective suppression and destruction of enemy air defence (SEAD/DEAD) operations in Ukraine. For such missions, a high-flying Orlan-10 with an EW payload baits Ukrainian SA-8 and SA-11 surface-to-air missile (SAM) systems, with its survivability boosted by its capacity to jam SA-8 missile proximity fuses. Once a SAM is launched to engage the UAV, a second Orlan-10 at a lower altitude geolocates the SAM’s launch system using electronic intelligence capabilities and cues a third Orlan-10 which uses an electro-optical payload to designate the launch system as a target for rapid artillery or missile strikes from Russian forces. Given this flexibility and effectiveness from a mass-produced system, constraining and countering Orlan-10s is one of the Ukrainian military’s top priorities.


### Built In Russia, Made Abroad

Behind the impressive success of Russia’s most prevalent UAV system is the St Petersburg-headquartered STC, a limited liability company with extensive connections to the country’s leading research centres and Russia’s expansive military industrial complex. However, while the Orlan-10 is designed and built in Russia by a range of scientists and engineers from flagship Russian military research institutes, its construction is highly dependent on Western technology and components historically procured through suppliers based in the US, Europe and East Asia.

Fieldwork conducted by RUSI in Ukraine over the course of 2022 confirmed that the sub-systems of the Orlan-10 are heavily reliant on foreign-made microelectronics. This is particularly the case for a range of products such as the microcontrollers, global navigation satellite system (GNSS) receivers and pressure sensors that enable the UAV to collect and transmit relevant data to the operator, sometimes over 100 km away.

Some of these Western-manufactured components are also subject to export controls, meaning that those seeking to ship them abroad require a licence to do so. Even before Russia’s February 2022 full-scale invasion of Ukraine, US manufacturers could not legally export goods subject to US Department of Commerce Export Administration Regulations (EAR) to Russian defence companies – and certainly not to designated entities.

For many of Russia’s designated military entities, this has led to a need for illicit procurement tactics, including the use of front companies and transshipment hubs to move goods through the international trading system.

Financial records for STC, acquired by Reuters and iStories, indicate that the company has remitted large volumes of money to a range of Russian companies involved in the electronics and radiocommunication businesses. One of the largest recipients is an entity named SMT-iLogic, a company based in St Petersburg that not only imports large volumes of microelectronics and components used in the Orlan-10 to Russia but also has additional extensive connections to STC.

![image02](https://i.imgur.com/1rN5NBH.png)
_▲ __Figure 2: Foreign Components in the Orlan-10 UAV.__ Source: OE Data Integration Network – US Government; Centre for Defence Reform Ukraine; RUSI fieldwork in Ukrainegraphic designed by RUSI OSIA._

#### THE SPECIAL TECHNOLOGY CENTRE

Founded over twenty years ago, STC designs and manufactures radio and communications equipment for a range of customers, including military systems and the Orlan-10. In addition to the Orlan-10, STC manufactures other UAVs including the Orlan-1, the Orlan-2, the Orlan-30 and the Orlan-50.

STC also appears to be engaged in a range of clandestine activities separate from the design and manufacture of military UAVs. In December 2016, for example, the US Department of the Treasury sanctioned STC alongside Russia’s Federal Security Service (FSB) and the Main Directorate of the General Staff of the Armed Forces of the Russian Federation (GU) for conducting malicious cyber-related activities. According to the US Department of the Treasury, STC was designated because it had supported the GU’s interference campaign targeting the 2016 US Presidential election. Three years later, the cyber security company Lookout alleged that STC was developing advanced mobile spyware designed to infect devices using Google Android. The spyware, dubbed Monokle, reportedly targeted a small number of individuals, including those researching Russian-backed militias in Syria.

Following Russia’s 2022 invasion of Ukraine, STC was further designated by the US, the UK, Canada, Taiwan and Japan. These designations identified STC’s role in aiding Russia’s invasion and aimed to further restrict the company’s imports of foreign technology.


### The Men Behind The Curtain

A closer look at the affiliations and activities of some of STC’s executives reveals that the company is closely linked to the Russian military, as well as SMT-iLogic.

The leadership of STC is largely composed of highly accomplished Russian military scientists, at least two of whom are also employed by the SM Budyonny Military Academy of the Signal Corps, a military university in St Petersburg for Russia’s signal troops. These individuals are Aleksei Vasilievich Terentiev and Oleg Vladimirovich Tsarik, both recognised as ‘Honoured Inventors of the Russian Federation’ – an accolade bestowed by the Russian president for an outstanding track record of inventions of national significance and major contributions to technological progress. The Academy’s website notes that Terentiev has been serving at the SM Budyonny Academy since 1981, including as senior researcher and head of the research laboratory. Tsarik has also held a number of positions at the Academy since 1998, including as senior lecturer in the radio intelligence and electronic warfare department. Terentiev has also been listed in the honour roll of best inventors at the Budyonny Academy, while Tsarik was named best inventor of the year by the Russian Ministry of Defence in 2008.

As of June 2022, Terentiev and Tsarik are two of seven shareholders in STC and some of the company’s most prolific scientists. Since 11 May 2010, STC has filed over 70 patents for radio-electronics and other communication technologies, with the majority focused on military applications. Terentiev and Tsarik are listed as inventors on dozens of these patents, including several explicitly referencing technology related to the Orlan-10.

![image03](https://i.imgur.com/ETA9Shk.png)
_▲ __Figure 3: Terentiev’s and Tsarik’s Biographies from the SM Budyonny Military Academy of the Signal Corps.__ Source: Russian Ministry of Defence; graphic and annotations by RUSI OSIA._

#### FUZZY LOGIC: STC’S LINKS TO SMT-ILOGIC

Despite producing large volumes of Orlan-10s and other UAVs that are highly dependent on foreign components and technology, STC does not appear to directly import any foreign components. However, Russian bank records for STC show the company paying tens of millions of dollars to SMT-iLogic. Company records filed in 2017 show that both Terentiev and Tsarik had founded the company alongside other members of STC and were listed as shareholders at the time.

SMT-iLogic’s website notes that the company was founded in November 2015 – a year after Russia’s initial incursion into Ukraine – by a group of ‘highly-qualified specialists in information and telecommunication technology.’ This statement is consistent with the list of individuals on the company’s filings with the Russian Federal Tax Registry over the years, which include Tsarik and Terentiev and several other scientists who also share patents with both inventors. However, in August 2017, Tsarik, Terentiev and several other STC shareholders were removed from official records of SMT-iLogic, thus eliminating obvious evidence of SMT-iLogic’s links to STC.

Despite this, connections between STC and SMT-iLogic persist. For example, one of the current shareholders of SMT-iLogic is a Russian national named Aleksandr Mikhailovich Shepilov. Shepilov has been listed on SMT-iLogic’s corporate documents since November 2015, suggesting that he may have been one of the founders of the company.

Like his former colleagues, Shepilov is a prolific inventor and is named on at least 45 patents granted between June 2004 and July 2019. Many of these were filed by STC and the SM Budyonny Academy, and some even list Tsarik and Terentiev as inventors alongside Shepilov. Shepilov also continued to appear on patents for STC and the SM Budyonny Academy after the founding of SMT-iLogic in 2015, including a patent granted in July 2018 for the invention of a ‘method and device for determining the coordinates of the source of radio-emissions’ that was tested with an Orlan-10.

![image04](https://i.imgur.com/sbgJ7LE.png)
_▲ __Figure 4: Company Documents for SMT-iLogic Listing Terentiev and Tsarik.__ Source: Russian Federal Tax Registry; graphic and annotation by RUSI OSIA._

These and other collaborations suggest that Shepilov is closely connected to both STC and the Budyonny Academy and that he has continued to aid STC’s work on the Orlan-10 while being a shareholder of SMT-iLogic.

SMT-iLogic and STC are also linked through the address of a former STC subsidiary. In 2014, STC founded and took a 76% share in the now-liquidated Joint Stock Company Special Technologies Centre (JSC STC). On corporate documents, JSC STC listed its address as an office at 17 Nepokorennyh Prospekt in St Petersburg. The address that SMT-iLogic lists on its website is a nearby unit in the same building.

Significantly, this building also houses the Autonomous Non-Commercial Organisation of Continuing Professional Education Centre for the Training of Unmanned Systems Professionals (CP SBS). Founded in August 2014, the CP SBS offers training on a range of matters related to UAVs, including their operation and maintenance. Meanwhile, the Centre’s general director is Vasiliy Viktorovich Makarov, who also served as general director and founding shareholder of JSC STC. SMT-iLogic, as an undesignated entity, was likely able to serve as a deniable vehicle for STC to procure microelectronics from suppliers located outside of Russia. To do so, it relied on a large, decentralised network of suppliers located in Europe, Asia and North America.

![image05](https://i.imgur.com/9KMkKwo.png)
_▲ __Figure 5: STC and SMT-iLogic Connections.__ Source: Russian Patent Records; Sayari Analytics; graphic designed by RUSI OSIA._

![image06](https://i.imgur.com/fxK4rXH.png)
_▲ __Figure 6: An Orlan-10 at the CP SBS.__ Source: Image from website of CP SBS; annotations by RUSI OSIA_


### Illicit Procurement

In February 2022, Florida resident Igor Kazhdan was indicted by the US government for procuring and shipping a wide range of export-controlled military and dual-use technologies to Russia. Kazhdan, a dual citizen of Russia and the US, used the alias ‘Alex Stanton’ to operate two companies – IK Tech Corporation and GeoSat Microwave – in Dania Beach, Florida and California that advertised state-of-the-art commercial and military satellite technology.

Kazhdan, however, was allegedly using his two companies to illegally procure export-controlled items for delivery to SMT-iLogic and another company based in St Petersburg named Device Consulting LLC. Russian bank records confirm that STC has also paid millions of dollars to Device Consulting, whose website – until recently – included a letter signed by ‘Alex Stanton’ certifying Device Consulting as an authorised distributor of GeoSat products.

![image07](https://i.imgur.com/Gd8IWL6.png)
_▲ __Figure 7: Letter Signed by Alex Stanton AKA Igor Kazhdan on Device Consulting’s Website.__ Source: Documents found on www.Device.Consulting; United States of America v. Igor Kazhdan; annotations by RUSI OSIA._

The US indictment alleges that, between December 2021 and February 2022, Kazhdan acquired hundreds of export-controlled items from US-based manufacturers and fraudulently shipped them to Russia without a licence. In December 2021, for example, Kazhdan allegedly procured over 100 power amplifiers with defence applications produced by US company Qorvo, which he then shipped to Device Consulting in Russia. His company had also shipped Qorvo products to SMT-iLogic in April and June of the same year. These Qorvo components are very similar to those found inside a captured Orlan-10.

In fact, company-level shipment records filed between 2020 and 2022 confirm that Kazhdan’s companies exported large volumes of microelectronics to SMT-iLogic and Device Consulting, including critical components often used in the Orlan-10 that are also subject to US export controls. Between October 2020 and February 2022, for example, IK Tech Corporation dispatched over 1,300 Gumstix-produced GUM3703FEBY computer-on-module units to both SMT-iLogic and Device Consulting. This exact component was discovered in the payload control unit of an Orlan-10 and is also export-controlled by the US.

![image08](https://i.imgur.com/XlguNxk.png)
_▲ __Figure 8: IK Tech Shipments to Russia.__ Source: Russian Trade Data; graphic designed by RUSI OSIA._

Further examination of the shipment-level trade records also reveals that IK Tech Corporation sent SMT-iLogic and Device Consulting several shipments of foreign components manufactured by JST Manufacturing, Semtech, Texas Instruments, u-blox and Xilinx – some of the most common brands of components found inside the Orlan-10. In addition to microelectronics, the US indictment alleges IK Tech sought to procure other export-controlled items such as couple control cables also used by the US military in communications complexes.

Aggregated import records for SMT-iLogic and Device Consulting also show an intriguing procurement pattern closely mirroring the timeline of IK Tech’s shipments and the Russian military build-up along Ukraine’s border before the February 2022 invasion. SMT-iLogic and Device Consulting also significantly ramped-up imports from May 2022, possibly to supplement depleted stocks following the botched invasion.

Trade records indicate that several other individuals and corporate entities have engaged in very similar shipment patterns to IK Tech Corporation, shipping almost exclusively to SMT-iLogic and Device Consulting in the last two years.

These include a German company named Industrial Components Weirich, a California-registered company named GA Universal and Hong Kong-registered company named Asia Pacific Links. Since Russia’s invasion, however, SMT-iLogic and Device Consulting’s suppliers have changed as Russian imports rose drastically from pre-invasion levels. Several Hong Kong-based companies have now become the primary suppliers of SMT-iLogic.

![image09](https://i.imgur.com/TEfLncd.png)
_▲ __Figure 9: SMT-iLogic and Device Consulting Import Timeline.__ Source: Russian Trade Data; Kazhdan Indictment, graphic designed by RUSI OSIA._

#### CHINESE SUPPLIERS

Two of SMT-iLogic’s primary suppliers are Hong Kong-registered Xinghua Co Ltd and Sinno Electronics Co Ltd, a US-designated company previously identified by RUSI as shipping microelectronics to Russia to bolster the country’s defence industrial base.

Xinghua began shipping to SMT-iLogic in December 2021 and has since become the company’s third largest supplier. Shipment-level trade data states that Xinghua has been predominantly shipping portable computers produced by Getac, a Taiwanese manufacturer of rugged computers.

The sole director and shareholder of Xinghua is a Chinese national named Yuan Jilun, who is also the executive director and owner of Beijing-based Luchengtech Co Ltd, a supplier of information technology products to China’s defence, aviation and space industries.

![image10](https://i.imgur.com/7fyOAUX.png)
_▲ __Figure 10: Companies linked to Anton Trofimov.__ Source: Hong Kong and Macao Companies Registries; annotations by RUSI OSIA._

Trade data also shows that Luchengtech shipped a range of goods to SMT-iLogic and Device Consulting in May, July and August 2022. This included over 200 engines used in aviation modelling produced by Chinese companies DLE and DTRC as well as data-processing and cloud-computing machines supplied by California-based Super Micro Computer Inc. In addition, between 2019 and 2021, the company sold hundreds of Getac-made portable computers to SMT-iLogic. This evidence of a relationship between these Chinese entities and AFRF-affiliated companies is particularly noteworthy, further highlighting the growing importance of Chinese companies to Russian military supply chains.

#### ANTON TROFIMOV

However, by far the largest supplier to SMT-iLogic – accounting for 25% of imports in 2022 – is Asia Pacific Links, a Hong Kong-headquartered company owned and controlled by a Russian national named Anton Trofimov.

Between 2019 and 2021, Asia Pacific Links shipped over $10 million’s worth of microelectronic components to Russian companies, more than half of which were destined to SMT-iLogic and Device Consulting. After Russia’s February 2022 invasion, however, Asia Pacific Links appears to have increased deliveries, shipping over $9 million of components to SMT-iLogic and Device Consulting alone.

A number of these shipments appear to have contained a range of notable components. For example, between June and August 2022 Asia Pacific Links shipped at least 800 export-controlled quad-band cellular modules to the St Petersburg office of SMT-iLogic. As noted above, these precise modules are often utilised in the Orlan-10. Other shipments in 2022 included components that have been found inside Orlan-10 UAVs, such as GNSS modules made by u-blox and computer-on-modules made by Gumstix.

Trofimov, who founded Asia Pacific Links in 2014, operates a number of other companies in Canada, China, Hong Kong and Macao. His LinkedIn profile also claims that he has been involved with the GP Gentlemen’s Club at the Tigre de Cristal Hotel and Resort, based just outside Vladivostok, since April 2019.

However, another one of Trofimov’s companies, the Macao-registered New Blockchain Advisory, also appears to have shipped large quantities of microelectronic components and semiconductors to Device Consulting, the St Petersburg company that received shipments from Kazhdan. One of these shipments, made in 2021, reportedly included over $6,000 of direction-finding compasses manufactured by Safran Sensing Technologies, whose products are advertised for military and UAV applications.

![image11](https://i.imgur.com/aDgLYYw.png)
_▲ __Figure 11: Asia Pacific Links Exports to SMT-iLogic and Device Consulting.__ Source: Russian Trade Data; graphic designed by RUSI OSIA._


### Conclusion

The Orlan-10 is one of Russia’s most essential and indirectly lethal pieces of military equipment, and one that relies on Western components for a significant number of its critical functions. The Russian military is urgently attempting to increase the number of Orlan-10s available for artillery-spotting, reconnaissance, EW and SEAD/DEAD duties in Ukraine as both sides make preparations for renewed offensive operations in spring 2023.

The production quantities required to increase numbers while also replacing combat losses implies a continued requirement for large volumes of components to be brought in through the networks identified in this report. Disrupting these networks should, therefore, be considered a high priority for Western efforts to counter sanctions evasion, since reducing the number of Orlan-10s available to the Russian military by spring 2023 would significantly reduce overall force lethality and give the Ukrainian military more room for manoeuvre.

Russian missile and aircraft manufacturing practices require many new components to be thoroughly tested and certified as safe in operation with all the other elements of each system. This also applies to some of the components that might be introduced as substitutes for Western-supplied ones in the event of a successful embargo. This process of certification – putting aside the development time to find and fit new components – is assessed to take three months, each time a change is made to the design. Hence, even if Russia were able to find technically viable substitutes for many of the Western components identified in this report, integrating them into the Orlan-10 production line would create major delays, add cost and thus help buy time for Ukrainian forces. In some cases, replacing these Western-manufactured components will be impossible in the short run.

However, as detailed in this report, Russian companies closely associated with the manufacturer of the Orlan-10 have been able to increase imports of necessary components since the beginning of the invasion. Given that much of this technology is ultimately manufactured and produced by companies domiciled in Western states, greater effort should be made to prevent diversion to Russia’s military manufacturers by intermediaries in the US, Europe, Hong Kong and China.

To do so, governments should act against those individuals and entities responsible for diverting components to the AFRF and step-up efforts to monitor their flow to important transshipment-hubs and suspicious third parties. Governments should also improve guidance and expand capacity building activities for the private sector and financial institutions in countries that are often exploited by those seeking to procure technology for the AFRF.

---

__James Byrne__ is the Director of Open-Source Intelligence and Analysis (OSIA) at RUSI.

__Jack Watling__ is Senior Research Fellow for Land Warfare at RUSI.

__Justin Bronk__ is a Senior Research Fellow for Air Power at RUSI.

__Gary Somerville__ is a Research Fellow in OSIA at RUSI.

__Joe Byrne__ is a Research Fellow in OSIA at RUSI.

__Jack Crawford__ is Research Analyst in OSIA at RUSI

__Jane Baker__ is an independent consultant.

