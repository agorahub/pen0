---
layout: post
title : Combat Mobile Cybercrime
author: Joseph Jarnecki
date  : 2025-11-26 12:00:00 +0800
image : https://i.imgur.com/O7pXei2.jpeg
#image_caption: ""
description: "Combatting Cybercrime against Mobile Devices"
excerpt_separator: <excerpt/>
---

_This report outlines the highest priority cyberthreats against consumer mobile devices and considers potential strategies to mitigate and address the threat._

<excerpt/>

This paper examines cybercrime against consumer mobile devices and their users in the UK. It draws on an expert roundtable convened on 17 July 2025 by RUSI’s Cyber and Tech research group and supported by Google. Unless otherwise noted, statements made in this paper are based on points raised by participants at the roundtable.

Mobile cybersecurity is underrepresented in policy debates and research, especially when considering the societal significance of smartphones for individuals and organisations. Mobile devices are targeted by cybercriminals for profit, costing the UK economy billions annually. Playing an increasingly salient role in economic and national security, mobile devices are also targeted by hostile state actors as part of intelligence operations and in kinetic conflict.

Analysis presented in this paper explores a handful of the threats targeting mobile devices, drivers of mobile devices’ vulnerability and how competition policy interacts with mobile device cybersecurity. The overarching focus is on cybercrime; however, there is broader relevance to other areas of mobile security.

The following findings were identified from the roundtable:

- The highest priority criminal threats to mobile devices are social engineering, malicious applications and physical theft.

- Competition policy and consumer rights are perceived to be in tension with cybersecurity for mobile devices.

- Many stakeholders in the mobile ecosystem assume that the cybersecurity of mobile devices is the exclusive responsibility of manufacturers and large operating system developers.

- The characteristics of mobile platforms (devices, operating systems, app stores and internet browsers) impact cybersecurity decision-making.

These findings offer hypotheses that can be tested through additional research and suggest that mobile cybersecurity policy would benefit from further attention. Provisional recommendations that emerged from the roundtable were:

- Advise competition policy and consumer rights regulators to account for cybersecurity when making judgements on mobile ecosystems.

- Explore further measures to support and promote app stores’ efforts to improve security, such as minimum standards, a public–private advisory body and security assurance labelling for important applications, including online banking.

- Use digital markets such as app stores – where a relatively small number of players enable access to most online services – as catalysts to improve the average level of cybersecurity across the mobile ecosystem.

- Assess the viability of a scheme requiring vendors to sell or release material – when products are reaching end of life – that allows third parties to continue providing critical security updates to users through a subscription model.

- Incentivise network providers to supply data for critical security updates free of charge.

Conduct multidisciplinary studies on mobile security, amplifying strong existing research on app, device and OS security while providing support for further research on, for example, mobile-compatible real-time malware detection, firmware and connectivity.


### Introduction

Mobile devices are indispensable in the modern digital economy. Individuals and organisations rely on smart devices for their everyday life and work; these devices are essential to communication, banking, navigation and authentication.

Increasing use of mobile devices has amplified the risk landscape. In 2023, Thales tracked around 34 million cyberattacks against global mobile devices, and from 2022 to 2023, Google found that zero-day flaws (flaws that have not yet been identified by the vendor or security experts) exploited against both Android and iOS increased by over 50%. Research by AppDome estimates that 41% of UK consumers have experienced mobile fraud, malware or other cyberattacks, and financially motivated cybercriminals are the main offenders.

Countermeasures to tackle cyberthreats require multistakeholder efforts. Device security is critical, but it is only one part of the ecosystem. A report by the Competition and Markets Authority (CMA) uses “mobile platform” to refer to devices as well as operating systems (OS), app stores and internet browsers. In this paper, “mobile cybersecurity” will be used broadly to describe the device, OS and application layer, as well as telecommunications networks, app stores, open source libraries and other security-relevant systems. Existing initiatives to promote cybersecurity across these layers, for example through SMS filtering and application scanning, are commendable, but the scale of the problem demands further attention and action.

As customers and users face increased cyber risk, there is an urgent need to examine threats, vulnerabilities and opportunities to improve security. The following contribution provides an overview of live issues impacting cybersecurity within the mobile ecosystem, highlighting the criticality of mobile cybersecurity and the significance of existing efforts.

The findings presented here are drawn from a policy roundtable convened by RUSI’s Cyber and Tech research group on 17 July 2025 in London. There were 25 participants, including representatives from OS and application developers, cyberthreat intelligence professionals, regulators, researchers, financial institutions and industry representative bodies. Questions explored through the discussion included:

- What are the highest priority cyberthreats against mobile devices that are leveraged by criminals?

- Why are mobile devices vulnerable?

- What factors could change mobile device (in)security in the coming years?

- How can responsible stakeholders mitigate cyberthreats against mobile devices?

Further information to support the findings presented here has been drawn from a limited literature review of secondary sources, such as government and private reports, along with academic articles.


### Threats to Consumer Mobile Devices

The highest priority threats from cybercriminals against consumer mobile devices are social engineering, malware and physical theft. These threats are replicable, scalable, relatively low effort and effective. As a result, criminal groups’ methods do not widely diverge. The academic literature also identifies network-based attacks, zero-day exploits, spyware and supply chain compromise as significant; however, roundtable participants considered these less relevant to modern cybercriminal targeting of UK consumers’ mobile devices.

#### Social Engineering

Social engineering, or the manipulation of mobile users so that they perform actions or reveal information, is a mainstay of cybercriminal activity. Phishing, where attackers trick users into divulging personal information, is a prevalent form of social engineering.

![image01](https://i.imgur.com/wAdRy3B.jpeg)
_▲ Figure 1: Examples of Phishing Texts_

Common mobile-focused variants of phishing that roundtable participants raised are:

- Smishing: Short Message Service (SMS) texts.

- Vishing: Voice calls, often spoofing caller IDs.

- Qishing: QR codes directing victims to malicious sites.

Phishing is often a precursor to other activities: securing access to protected systems or conducting more elaborate scams. For example, romance scammers – often linked to “pig butchering” – emotionally manipulate victims into sending money, sharing information or otherwise benefitting perpetrators. A typical romance scam begins with contact being made via social media (for example, 98.5% of Facebook users access the site via their mobile devices). From there, scammers will build trust and convince victims to, for instance, invest in cryptocurrency, promising exorbitant profits. Victims are then directed to download a mobile application that looks legitimate but is in fact counterfeit. The app will display positive financial returns until a victim attempts to cash out and is unable to do so, at which point the scammer becomes unresponsive.

One initiative by network providers to counteract smishing is SMS filtering, or the scanning and blocking of malicious messages. Filtering SMS messages relies on an absence of encryption; providers can parse the content of unencrypted messages. In 2023, MobileUK reported that network operators blocked over 1 billion scam SMS messages. However, criminals use SMS blasters (see Figure 2) and other techniques to get around these countermeasures. The limitations of SMS as a communication protocol are driving industry’s transition to Rich Communication Services (RCS) – a communication protocol enabling features including high-resolution images and encryption. Because RCS can be encrypted, some roundtable participants expressed concern that it will undermine network filtering. Advocates of RCS pushed back against this argument, positing that the protocol includes authentication, thus verifying sender identity and reducing fraud. Additional public attention from policymakers is required to ensure the SMS to RCS transition is understood, implemented and properly incentivised.

To mitigate phishing and other risks, organisations implement two-party authentication (2FA) or multifactor authentication (MFA). SMS messaging can provide 2FA or MFA, but it is vulnerable to attacks, including SIM swap fraud and interception. Therefore, organisations are moving towards RCS Business Messaging (RBM), QR codes and passkeys. Adoption of non-message-based methods is currently slow; RBM – which operates within a messaging app interface – eases the transition by offering a more secure, verified and interactive channel. The UK National Cyber Security Centre provides guidance on MFA for individuals and businesses and advocates for password managers and passkeys.

![image02](https://i.imgur.com/Kpp7NDt.jpeg)
_▲ Figure 2: SMS Blaster_

#### Malware

Mobile malware is software designed to steal data, disrupt functionality or enable unauthorised access to systems. It covers threats such as spyware, banking trojans (malware that gives criminals access to online banking) and ransomware. While malware refers to any harmful software, malicious applications – identified in the roundtable as being more relevant to consumer mobiles – are a subset of malware that is specific to user-installed apps. Malicious apps necessarily exploit permissions, system misconfigurations and trust, whereas malware can operate invisibly without an app interface.

Statements from anti-fraud organisations, including UK Finance and Cifas, echo insights from the roundtable that malicious applications are becoming more common, particularly as part of financial crime. Malicious applications can, among other tasks, harvest user data and credentials, display unwanted advertisements, conduct click fraud (generating fake clicks on a device) and spoof mobile banking sessions.

Although public reporting is limited, roundtable participants suggested that most malicious applications were installed via sideloading – the process of users downloading apps from outside official app stores. Mobile users generally download applications from app stores that are linked to OS developers or Original Equipment Manufacturers (OEMs). In the UK, 90–100% of OS market share is split between Apple (iOS) and Google (Android). Users can only access apps through the Apple App Store on iOS devices, while Android OEMs are able to preinstall their or other app stores on their devices – the Google Play Store is not required by nor available to all Android OEMs. To be listed on either the Apple App Store or Google Play Store, application developers are required to submit their apps to a review process that assesses for, among other factors, malware, permissions, data management and in-app content. By contrast, sideloaded applications are not subject to a similar review and are therefore more likely to contain harmful material. For example, according to Android, sideloaded apps on devices running their OS contain 50 times more malware than those distributed by the Google Play Store.

![image03](https://i.imgur.com/lLfLNtq.jpeg)
_▲ Figure 3: Illustration of Sideloading_

iOS and Android have different approaches to managing sideloading risk. Apple’s iOS is a closed ecosystem: it does not permit access to third-party app stores, so users can only download apps from the Apple App Store. However, competition law, such as the EU Digital Markets Act, has forced revisions to this policy in the EU. Android, in contrast, is an open OS, meaning users can use other app stores and access apps on the open internet. Provided that certain criteria are met – for instance, developer verification – users can grant permissions for their browsers to sideload apps as well as sideloading through other means. Services such as Google Play Protect scan sideloaded apps, although they can be disabled by users and provide less assurance than app store protections. Legitimate application developers also try to mitigate against malicious sideloaded apps through, for example, monitoring whether host devices have enabled sideloading or restricting the other apps they can interact with.

#### Theft

According to a UK Parliament Research briefing report, from 2023 to 2024 phone thefts increased by 153% across England and Wales, with an average of 200 “snatch thefts” a day. In London alone, there were around 80,000 devices stolen in 2024, around 16,000 more than in 2023. Based on data from the insurance company SquareTrade, the UK accounted for two-fifths of mobile phone thefts in Europe.

Stolen devices are usually smuggled overseas and sold whole or broken down and sold by component. However, the National Crime Agency has observed an “emerging trend” whereby offenders who gain control of devices commit additional offences, such as theft using banking applications. Police services have launched several initiatives to tackle this issue and players across the mobile ecosystem have developed solutions, outlined below.

To combat high rates of physical device theft, technical countermeasures have been developed. For example, Android’s Theft Detection Lock automatically locks devices when it detects them being snatched, using AI and gyroscope technology. Most devices also allow remote locking, wiping, biometric identity checks and – if connectivity is disabled – auto-locking. Other key protections include Find Hub or Find My Phone features – which allow users to remotely locate their devices – and protection against factory reset, ensuring stolen devices are not wiped and reused without the original owner’s credentials. Using numbers unique to mobile devices, the GSMA (Global System for Mobile Association), an international body representing network operators, maintains a Block List that denies network access to stolen devices. Only participating network operators can register devices as stolen and will apply orders to remove network access.

![image04](https://i.imgur.com/jLjUcWp.jpeg)
_▲ Figure 4: Countries with GSMA Members Participating in Block List_

Limited coverage lowers the impact of the GSMA Block List, but it is nevertheless commendable. At the roundtable, one participant highlighted that expanding the Block List brings political risk: were a state-owned network operator in an authoritarian country to participate, they could theoretically register – and therefore disable – the devices of opposition figures overseas. Nevertheless, there are measures in place to minimise this risk, such as the ability for connected operators to discriminate between the data they choose to accept or reject. These measures include controls to not accept data from other individual network operators or countries.


### Reconciling Competition and Consumer Rights with Cybersecurity

Many individuals within the mobile device ecosystem present competition policy and consumer rights as being in opposition to cybersecurity. Examples used to justify this supposedly binary choice include the following.

#### Sideloading

By assessing applications prior to listing on app stores, providers aim to protect user safety and security. Critics posit that this stifles competition and can lead to abuses by app store providers, for example, by mandating payment methods or unfairly using data submitted by app developers for their own commercial benefit.

#### Registered components and right to repair

Consumer advocates push for users to be able to repair their own devices at independent shops using components other than those produced by OEMs. Some OEMs claim that unauthorised repair, or enforced interoperability with third-party components, introduces supply-chain risks that can compromise security.

#### Jailbreaking

User privileges are escalated on a device to remove restrictions set by OS providers or OEMs. One view on jailbreaking is that users own the device and are therefore entitled to manipulate it as they wish. Doing so, however, can compromise safeguards, such as Secure Boot processes.

#### User control

OEMs, OS providers and app developers set default permissions, settings and services, partially to address security needs; for example, by limiting applications’ permissions and installing an app scanning capability by default. Consumer advocates and competition regulators argue that this reduces users’ control over device functionality (including permissions and settings), loads security features that take up space and can hinder interoperability for apps and services.

#### Interoperability mandates

Regulators enforcing interoperability across, for example messaging services or platforms, aim to prevent lock-in and increase consumer choice. Providers and developers raise the point that this can undermine encryption and create new vulnerabilities where systems interface.

These framings illustrate that there are some areas where competition policy and consumer rights either experience trade-offs with security or have misaligned incentives. Nevertheless, participants of the roundtable warned against perpetuating this framing, with three reasons emerging from the discussion.

1. Competition regulators in the UK appreciate the need to account for security when designing interventions. For example, a May 2025 speech by Juliette Enser, the CMA Executive Director for Competition, emphasised that beneficial collaboration between companies on measures such as sharing cyberthreat information is being carefully accounted for in their application of competition law.

2. Roundtable participants stressed the advantage of open source OSs because of their transparency, a factor that empowers vulnerability researchers. Open source OSs simultaneously lower the barrier to entry for OEMs, encouraging competition.

3. Many mobile markets, whether for hardware or software, have only recently been regulated: the UK’s Digital Markets, Competition and Consumers Act received Royal Assent in May 2024 and the EU’s DMA became applicable in May 2023. Impact on legislation is only beginning to materialise, and balancing priorities will be an iterative process. Assuming consumer rights and competition are incompatible with security from the outset is a defeatist outlook.


### Diverse Factors Affecting Mobile Vulnerability

Roundtable proceedings stressed the complexity of the mobile ecosystem, which encompasses diverse technology, disaggregated networks and third-party providers. One participant also argued that the complexity is underplayed because companies with the largest market share in key segments, such as OS or device manufacturing, are assumed to take responsibility for its management. In a 2025 report, the GSMA linked this assumption to a tendency for complexity to be unmanaged in the mobile ecosystem, with negative outcomes for security.

To promote the responsible and effective management of complexity in the mobile ecosystem, relevant issues need to be better identified, and better solutions should be developed. Factors which have an impact on mobile vulnerability and that sparked discussion at the roundtable include, but are not limited to, the following.

#### Support lifecycles

Devices or systems with short support lifecycles become insecure, as they no longer receive critical updates, leaving large user bases exposed. Short support lifecycles are also detrimental to environmental objectives as they incentivise hardware churn. Legislation, including the EU Cyber Resilience Act, requires effective security updates through mechanisms such as product operational lifecycles and mandates requiring manufacturers to provide guidance on end-of-life policies.

#### Criminal ecosystems

Organised cybercriminal networks provide tooling, infrastructure and services that lower barriers to conducting and scaling mobile exploitation. This is particularly acute with cyber scamming, for which large criminal operations have been established in West Africa and South East Asia.

#### Mobile app supply-chain dependencies

Mobile application developers rarely map and understand their supply chain dependencies, for example, how the open source tools that developers integrate and automatically update are secured or assured. According to a 2025 report from Zimperium, over 60% of Android apps use free open source tools. Several participants at the roundtable estimated similar levels of dependency and highlighted that this creates exposure to vulnerabilities with no guarantee of security patching.

#### Market incentives

Similarly to other technology areas, security for mobile is often viewed as a secondary consideration compared with profitability or speed to market (the time between an idea being generated and its reaching the market). For example, AI integration in consumer applications often requires aggregating and analysing personal data, sometimes in data centres outside the users’ jurisdictions. One roundtable participant highlighted this example to illustrate how market incentives can jeopardise security principles.

#### Technological improvement

Advances raised throughout the roundtable demonstrate how effective improvements in technology can benefit mobile security. According to one participant, memory safety vulnerabilities as a share of total exploited vulnerabilities have fallen by over 65% in the past five years, following efforts to mandate memory-safe programming languages. Another participant highlighted the introduction (by iOS in 2014 and Android in 2015) of MAC (media access control) address randomisation, a privacy-enhancing measure that averts tracking systems when scanning for wireless access points.

#### User cost sensitivity

Where mobile data costs are high, users are discouraged from applying updates or are incentivised to connect to free Wi-Fi that has the potential to be insecure. Similarly, reliance on second-hand devices – especially from untrustworthy vendors – increases the risk that malware is pre-downloaded. These constraints are more common in developing or lower-income countries.

#### AI deployment

AI is a factor in defending and attacking the mobile ecosystem. Extensive research is being conducted on the AI offence–defence balance in conflict, wider society and geopolitics. For mobile security, offensive use-cases include enhancing phishing activities or propagating malware, while on the defensive side, developers can accelerate vulnerability detection and response. The net effect is uncertain, and more direct conversation – especially relating to mobile security – would be beneficial.


### Conclusion

The preceding contribution underscores the need for policymakers, industry and civil society to take mobile security more seriously. The roundtable confirmed that risks are real and present: social engineering, malicious applications and physical device theft are widespread and impose high costs on consumers and the economy. The increasing centrality of mobile devices to, among other areas, commerce, communication and public services, will continue to exacerbate the risk.

Tensions between competition, consumer rights and cybersecurity exist but they risk being overstated. The tendency to legislate on these issues in silos, combined with the lack of a joined-up approach in implementation, has resulted in disjointed regulatory incentives. Nonetheless, change occurs slowly, and markets do not shift overnight. What may be seen as an unacceptable trade-off or friction today may be viewed as a speed bump tomorrow. Instead of fixating on the opposition between these factors, further analysis would benefit from deconstructing the binary choice between them and identifying mutually beneficial outcomes.

The complexity of mobile ecosystems also emerged as a central concern throughout the roundtable. Devices, operating systems, networks, applications and other systems form a layered structure, in which responsibility is often displaced or unclear. The assumption that large firms in key market segments will take accountability for the risk of complexity is misplaced and can obscure the extent of vulnerability. Identifying, addressing and mainstreaming factors that impact mobile security is therefore pressing – from support lifecycles and open source dependencies to market incentives and AI deployment. Without a systematic approach, initiatives will remain siloed and underacknowledged.

At the same time, there are grounds for optimism. Technological improvements, such as adopting memory-safe languages and more secure communication protocols, reflect commendable technical efforts to improve mobile security. Cooperation between stakeholders is also notable. Examples such as stakeholder collaboration on countermeasures to filter SMS messages – thereby preventing fraudulent use of stolen devices – illustrate a willingness and capacity to improve across the ecosystem through targeted efforts.

The roundtable demonstrated that mobile device cybersecurity merits the same attention as any pervasive consumer technology. In fact, the growing role of mobile devices in the critical functions of individuals and organisations demands more focus than is currently paid. This paper is a call for greater acknowledgement among policymakers of mobile cybersecurity and an invitation to conduct further systematic research.

#### Recommendations

From the roundtable discussion, the following recommendations were provisionally identified. They are included here to illustrate the active marketplace of ideas and avenues for further investigation, rather than serving as firm and finalised recommendations.

- Sufficiently resource the enforcement of existing regulatory frameworks and better track the impact of interventions.

- Advise competition and consumer rights regulators to account for the impact on individual and national security when making judgements on the mobile ecosystem.

- Explore further measures to support and promote app stores’ efforts to improve security, such as minimum standards, a public–private advisory body and security assurance labelling for important applications, including online banking.

- Explore additional measures to ensure digital markets can improve security within fair competition frameworks.

- Assess the possibility of requiring vendors to sell or release relevant material that would allow third parties to continue providing critical security updates to users on a subscription model, when products are reaching end of life.

- Provide data for critical security updates free of charge.

- Conduct systematic research on mobile security, as called for by academic literature reviews.

---

__Joseph Jarnecki__ is a Research Fellow in in the Cyber and Tech team. His research focuses on cyber security capacity building and how advanced technologies pose opportunities and risks to economic security. Prior to joining RUSI, he worked as a research assistant at King’s College London on projects focusing on practices of democratic oversight and control over intelligence services, as well as on risk and responsibility in cyber security.
