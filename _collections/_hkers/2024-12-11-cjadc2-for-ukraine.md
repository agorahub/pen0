---
layout: post
title : CJADC2 For Ukraine
author: Kateryna Bondar
date  : 2024-12-11 12:00:00 +0800
image : https://i.imgur.com/lMiYx54.jpeg
#image_caption: ""
description: "Does Ukraine Already Have Functional CJADC2 Technology?"
excerpt_separator: <excerpt/>
---

_Ukrainian situational awareness system Delta offers a model for Western militaries to consider when developing CJADC2 systems. It demonstrates how battlefield-driven innovation, AI integration, and allied collaboration can create effective command-and-control ecosystems._

<excerpt/>

### Introduction

For decades, the U.S. Department of Defense (DOD) has struggled to make meaningful progress toward realizing the vision of Combined Joint All-Domain Command and Control (CJADC2). Meanwhile, in Ukraine, the Delta situational awareness system has rapidly evolved into a platform that closely resembles the CJADC2 concept. Delta exemplifies software-defined warfare and provides a practical and agile approach to battlefield management. Unlike the DOD’s top-down vision for CJADC2, which involves a centrally managed strategy of integrating data flows and operations across all services and international partners, Delta originated as a bottom-up solution, initially focused on a single, highly effective application: a digital map for situational awareness. This initial capability has expanded into a comprehensive ecosystem of software applications that supports nearly the entire Ukrainian military, from frontline personnel to senior commanders.

The development of Delta can be compared to the approach used by Amazon. Jeff Bezos’s initial goal was to create what has been called “the everything store,” but he began by selling only books. Over time, Amazon gradually expanded its offerings to include a wide range of products. Similarly, Delta began with a single focused application and progressively added capabilities.

This paper provides analysis of Delta’s technological evolution and capabilities, and it concludes with lessons that the DOD could apply to CJADC2 and to its broader artificial intelligence (AI) transformation efforts.

Modern warfare has become increasingly complex, requiring commanders to maintain situational awareness of numerous factors across extensive geographical areas, ideally in real time. The scale of military operations being conducted by Ukraine is unprecedented for a nation of that size. 

Ukrainian forces respond to threats by executing large-scale military missions, both in terms of geographical reach and the complexities of planning and execution. Two good examples of such activities are the May 2024 Ukrainian strikes on a Russian refinery plant in Bashkiria, about 900 miles east of Ukraine, and the July 2024 attack on Olenya air base, located roughly 1,200 miles north. These distances are roughly comparable to that between Seattle and San Diego.

What these strikes reveal is that Ukraine has been developing a software system designed to gather data, analyze it, provide comprehensive situational awareness, and support battlefield decisionmaking. Although a comprehensive history of Delta’s evolution and the bureaucratic challenges surrounding it are beyond the scope of this analysis, it is worth mentioning that Delta was started in 2016 by the volunteer group Aerorozvidka. In 2023, the system was transferred to the Ministry of Defense, and by August 2024, it was officially adopted by the Ukrainian defense sector. This sector includes all military and defense agencies and units responsible for safeguarding Ukraine’s sovereignty, such as the Armed Forces, National Guard, State Border Guard Service, and National Police.

The analysis in this paper will draw on organizational and technological perspectives, focusing on key approaches to system development that may offer valuable lessons for implementing similar projects within militaries throughout the world.


### Delta’s Organizational Structure

The organizational structure underpinning the Delta ecosystem is relatively straightforward. Delta is managed, developed, and maintained by the Center for Innovation and Defense Technologies within the Ukrainian Ministry of Defense. As mentioned above, the center took over Delta from the NGO Aerorozvidka in 2023, whose engineers initiated its development in 2016 to support fighters in Donbas. Since 2023, the primary task of the center has been to advance the Delta system by expanding its user base, integrating more data sources, and improving interoperability with other systems and international partners.

Delta’s information is synthesized by situational awareness centers in eight cities located across the front. These centers serve as technological hubs, uniting and coordinating intelligence from a wide variety of sources — drones, satellites, stationary cameras, sensors, and reconnaissance units on the frontline.

Delta is used across all branches and command levels of the Ukrainian military, from tactical units to strategic leadership. It is simultaneously accessible to ground troops, via mobile devices such as phones and tablets, and to higher military leadership, thus providing real-time situational awareness and enabling rapid, informed decisionmaking. Access is tiered, meaning that different levels of command have distinct permissions and varied access to the system’s data. To ensure effective use, mobile training teams move across military units to keep users’ skills current.

Although Delta’s state ownership offers some advantages, such as official adoption across defense agencies to create a single operational environment, there are challenges associated with this approach. Being managed by a government institution brings typical bureaucratic constraints in hiring software engineers, updating regulations, and addressing security concerns for both the software and its developers. Nevertheless, the implementation of innovations in situational awareness and command and control is proceeding at a significantly faster rate than when Delta was run by Aerorozvidka only and in comparison to similar programs in other militaries. This speed has been driven by Ukraine’s urgent need to respond effectively to wartime emergencies and by widespread belief that technological superiority will be a decisive factor in all domains and dimensions of the fight.


### Technological Architecture

In exploring the technological architecture of the system, this paper will examine Delta’s data and the software applications designed to collect, process, and make use of it. These applications enable users to engage with the data through various interfaces, providing the functionality needed for informed decisionmaking, as well as operational support within the Armed Forces and the broader defense sector.

#### Data 

The Delta system gathers information from a diverse variety of data sources to provide comprehensive situational awareness and to enhance operational capabilities for the Ukrainian Armed Forces. Together, these sources form a foundation for Delta’s ecosystem of applications that support effective battlefield management. A summary of the main data sources used by Delta is presented in Figure 1.

![image01](https://i.imgur.com/6OBumsy.png)
_▲ __Figure 1: Main Data Sources of Delta System.__ Source: CSIS analysis._

In addition to Delta, other situational awareness and battle management systems are also used in Ukraine. One such system is Kropyva, which gained initial popularity among artillery units. Together with Delta, Kropyva has become one of the top three most-used combat systems in the Ukrainian military, according to a survey conducted by the Ministry of Defense. Delta and Kropyva complement each other by sharing data across various levels of command in different operational contexts, although the two systems are not fully integrated.

One of the notable features of the Delta system is its cloud-based architecture. It stores and processes all data in the cloud, via servers hosted in foreign countries, which makes it resilient against Russian strikes on its servers. However, this reliance on cloud infrastructure can present challenges for users in areas with limited internet connectivity. This issue has been mitigated by the use of Starlink, which has provided reliable internet access on the front line.

#### Applications

As Delta gathers data, interfaces are required to enable end users to effectively interact with it. These interfaces are provided through applications, often called “products” in Ukrainian parlance; these serve as key components of Delta’s ecosystem.

Interestingly, Delta’s entire ecosystem has evolved from its original and foundational application, which is essentially a digital map. This map was the first “product” developed by volunteers to enhance situational awareness for soldiers at the Donbas front line, showing the positions and movements of enemy troops and equipment. This application, now called “Delta Monitor,” remains central to the Delta ecosystem, displaying data from an ever-growing number of sources.

Over time, additional applications have been developed organically and integrated into Delta, reflecting the evolving nature and challenges of the war. This expansion has transformed Delta from a system focused purely on situational awareness into a more comprehensive platform. It now supports functions aligned with what NATO terms the ISTAR (intelligence, surveillance, target acquisition, and reconnaissance) concept, as well as with the C4ISR (command, control, communications, computers, intelligence, surveillance, and reconnaissance) framework used in the United States. Ukrainian developers have aimed to follow these concepts, and yet at the same time have pushed Delta to evolve into something approximating CJADC2. The following sections of this paper will explore Delta’s core applications, demonstrating how this transformation is unfolding.

1. Delta Monitor

   Delta Monitor, the primary and foundational application of the Delta system, functions as an interactive map displaying information in multiple layers. It is accessible via web browsers and mobile applications for iOS and Android devices.

   The interactive map allows users to filter and view specific types of information, such as the locations of drones, anti-tank barriers, trenches, and electronic warfare stations. Data is never deleted from Delta, allowing users to track developments over time and analyze battlefield dynamics. Military personnel contribute information on more than 600,000 enemy objects per month, with a total of 4 million reviewed by warfighters for planning purposes. Each object on the map includes a classification, an image, and information about its source, which allows users to directly contact the person who reported an enemy object or troop position for further details.

   The Delta administration panel includes User Management and Delta Intelligence sections; the latter serves as a repository for collected data and images. The system development team is currently developing software to coordinate the entire fire engagement cycle for every target, encapsulating initial reconnaissance, analysis, and clarification of reconnaissance data, engagement, and confirmation of target destruction.

2. Mission Control

   With an increasing number of unmanned aerial systems (UAVs) on the front line, an urgent need emerged in the early days of the war for flight management to avoid friendly jamming, competition for radio frequencies, and mission overlap. In response to this battlefield need, the Delta team developed the Mission Control application, also known as the synchronization matrix. Visually resembling an Excel spreadsheet, it is primarily used by drone operators to schedule UAV missions by specifying time, target location, and mission type (such as ISR, strike, or artillery correction). Every month, with the help of Mission Control, drone operators plan around 106,000 missions.

   Mission Control automatically generates an extensive amount of data on the performance of UAVs. In addition, the warfighters often manually add mission details, including observations of enemy electronic warfare activities. This valuable data has significant potential to improve military planning when properly managed and analyzed, which is part of the plan for future development of the Delta ecosystem.

3. UA DroneID

   The UA DroneID application is a natural extension of UAV flight management within the Delta system. It functions similarly to the Identification Friend or Foe (IFF) system used for aircraft and is specifically designed to identify drones as “friend or foe.” This feature is integrated into Delta to help prevent friendly fire incidents involving Ukrainian drones, while also enhancing the drone effectiveness against enemy targets.

4. Delta Tube

   In response to a growing number of battlefield cameras — both on UAVs and on the ground — engineers developed Delta Tube to allow users to stream live, high-definition video (Full HD) from these and other sources. Stream owners have complete control over who can access their streams, ensuring that only verified users can view the footage. This capability accelerates the transfer of intelligence from reconnaissance assets to strike units while also maintaining full control over access rights.

5. Vezha

   In 2024, the Vezha external application was integrated into the Delta system to enhance video analysis and streaming capabilities. Vezha is a battlefield video analysis platform that streams real-time drone footage and interactions between drone crews, artillery, and command centers. Vezha allows Ukrainian forces to analyze video from hundreds of UAVs, identifying and classifying over 4,000 reconnaissance objects daily. Features such as voice communication, joint video decryption, and performance monitoring have been essential to the Ukrainian Armed Forces’ rapid actions.

   This integration is a good example of how external applications can enhance Delta’s capabilities. Vezha was originally developed by “Yastruby,” the 411th Separate Battalion of the Territorial Defense Forces, and was later improved by and integrated into the Ministry of Defense’s Innovation Center. The mobile version of Vezha is also linked to the UAV Mission Control application, significantly contributing to battlefield coordination.

6. Avengers

   Avengers, an AI-driven platform, is the next step in improving battlefield video analysis. It was developed by the Ministry of Defense’s Innovation Center to enhance AI-enabled detection of enemy forces and targets. The software is able to identify objects and detect targets in thousands of simultaneous video streams from drones and stationary cameras, even if the objects are camouflaged or hidden in forests. Avengers can also distinguish decoys from real targets.

   In September, the ministry reported that Avengers automatically detected approximately 12,000 pieces of enemy equipment per week by analyzing UAV and ground camera feeds. This capability significantly enhances operational efficiency, enabling faster and more accurate data processing while reducing human error. The development of Avengers continues to improve to this day, with AI models being trained on increasing amounts of data. There are also plans to integrate this AI-enabled software directly into UAVs.

7. Messaging Service

   Communication is the lifeblood of successful command and control. To meet this need, a secure messaging application was developed within the Delta ecosystem that enables encrypted communication and coordination among military units. In conversations with CSIS, the system developers shared that Delta’s messaging service links various system features, allowing users to configure alerts for specific zones or object types; these alerts trigger real-time notifications when relevant changes occur. This enhances the ability of units to respond quickly to changes in control zones and enemy activities.

   Delta’s messaging service is becoming so central to communication that some units have structured their entire interaction framework around it. However, technical issues remain in the application’s usability and scalability, limiting its broader adoption despite a secure design. An updated version of Delta with a more effective chat function is expected to be released soon.

8. Mobile Device Management (MDM)

   Ukrainian fighters of all ranks often use personal or donated smartphones and tablets, which are vulnerable to security threats. Despite these vulnerabilities, fighters use military applications every day on these devices, and their interactions must be protected. In response, the Delta team created MDM, a secure, military-controlled platform used to distribute applications within the Ukrainian Armed Forces, similar to the App Store or Play Market.

   MDM creates an encrypted, isolated environment on a user’s device, enabling the secure installation of military applications and sensitive data. It enforces strict security standards, such as strong authentication methods, and allows remote wiping of data in case a device is compromised or lost. The platform offers access to a curated set of 68 applications designed for the military’s requirements, with 14 that are purpose built for operational needs. Adoption of MDM is currently voluntary, but warfighters are using it more and more, as a compromised device can be a life-threatening issue.

9. Analytical Platform

   Initially, Delta’s developers focused on establishing a core system that continuously gathered data, rather than fully analyzing it. As the war has become more complex and technologically advanced, the demand for comprehensive analytics and data-driven insights from military personnel has grown enormously.

   Therefore, the next big leap for the Delta team will be the development of an analytical platform with AI-enabled capabilities, particularly in the processing of textual information. There is a demand for extracting semantic elements from text and transforming them into structured messages that can be represented as map objects. In conversations with CSIS, developers working with the Innovation Center shared that they are also working on tools that resemble a Ukrainian-speaking ChatGPT, which will simplify communication with technical support services.

The Delta system is undergoing continuous and rapid development to meet the dynamic demands of Ukraine’s ongoing war. One of the key factors in Delta’s success has been the speed of its iterations and updates. In 2022, Delta implemented more than 40 new features, a significant accomplishment not only by military standards, but also when compared to development cycles in the business sector. According to Artem Martynenko, Delta’s lead developer, the system had over 30 releases with software updates in 2022. These frequent updates have enabled the system to meet the Armed Forces’ need for timely and verified intelligence to support the coordination of military operations.

Future development of Delta aims to increase its number of users to 100,000 and further align its features with the principles of network-centric warfare; particular areas of focus will be real-time data integration, enhanced accuracy of information, and improved user accessibility.


### Integration and Interoperability with Allies

To ensure comprehensive situational awareness for current missions and potential future joint operations, it is essential for Ukrainian systems, and particularly Delta, to be interoperable with those of allied nations. This requirement has driven Ukrainian developers to prioritize integration and data sharing with allied platforms. This section will briefly examine these efforts to provide an overview of the current state of software interoperability.

In 2023, Delta demonstrated compatibility with 15 different situational awareness and command-and-control systems from 10 countries, including 3 systems developed by NATO. Furthermore, in 2023, Delta confirmed its capability to exchange information using Link 16 — a NATO protocol that enables data exchange with F-16 fighter jets and other types of modern weaponry — thereby improving Delta’s operational integration in advanced collaborative battle networks.

Delta was tested for interoperability during the NATO CWIX24 (Coalition Warrior Interoperability eXploration, eXperimentation, eXamination, eXercise) in July 2024. The goal of the Ukrainian team was to identify and address any technical issues in data exchange before Western weapons are provided to Ukraine, enabling their smooth integration into domestic C2 process. Delta went through testing for five standards across thirteen focus areas (compared to just one standard in one focus area during the 2019 CWIX exercises). The Ukrainian team also demonstrated Delta’s capability to exchange a full operational picture with allied and NATO systems, encompassing air, maritime, land, cyber, space, medical, and logistics data. The Ukrainian team received significant interest and praise during CWIX24, with representatives impressed by their professionalism amid the challenges of Russia’s ongoing war.

A notable example of Delta’s integration with western C2 systems has been its successful merging with the Polish artillery fire control system, TOPAZ. In July 2024, Ukraine’s Ministry of Defense announced that Delta had been integrated with TOPAZ, which is used in KRAB howitzers and RAK self-propelled mortars, both of which are currently in service in Ukraine. During the NATO CWIX24 exercises, Delta effectively gathered, updated, and supplemented information — including data on the positioning of friendly forces — and transmitted it to the Polish TOPAZ system. This integration demonstrated Delta’s capability for secure transmission of restricted-access data and has provided comprehensive situational awareness on the battlefield.

More than just enabling excellent situational awareness, Delta is also critical to the operational management of mission control. This aspect of its functionality was tested during another NATO-led exercise, REPMUS 24, which was held in Portugal in September 2024 as the largest-ever exercise involving unmanned systems. It focused on integrating unmanned platforms and command systems across domains to achieve interoperability with NATO partner nations. The scope of the exercise included anti-submarine warfare, mine countermeasures, and protection of critical underwater infrastructure.

REPMUS 24 saw the Ukrainian navy’s first participation in the exercise. The navy used the Delta system to coordinate over fifty unmanned platforms, achieving full interoperability of underwater, surface, ground, and aerial vehicles. Delta was also successfully linked with Robotics-L, a robotic quadruped developed by Rheinmetall, showcasing the system’s adaptability to various platforms. Delta was also integrated with other command-and-control systems to improve data exchange, “friend or foe” identification, and coordination among participating forces.


### Conclusion

Ukraine has been the epicenter of an intense war for almost three years, a period that allows for observation of Ukraine’s evolving approach to situational awareness and its changing command-and-control capabilities. Over this time, the country has demonstrated an ability to adapt to the dynamic demands of the battlefield. Ukrainian forces have effectively integrated technological solutions from the private sector, volunteer groups, and government partners to enhance situational awareness and overall combat effectiveness. Delta, a critical part of Ukraine’s military evolution, offers an illuminating case study in the development of agile and innovative defense technology.

Key findings from this analysis are as follows:

1. __Delta has evolved from a situational awareness tool into an integrated command-and-control system that serves all branches of the Ukrainian Armed Forces.__ This transformation demonstrates a bottom-up approach to system development and illustrates the importance of building a strong foundational capability before expanding. Delta’s evolution has enabled it to effectively serve all levels of the military, from frontline troops to strategic leadership.

2. __Delta is structured around a central map-based interface. New applications are integrated into this interface to display data on a unified platform.__ This approach has allowed the system to expand gradually by adding new tools and features that are synchronized in a single user interface. As a result, decisionmakers can access a comprehensive amount of near-real-time information in one place.

3. __Delta has developed through the incorporation of multiple software applications and interfaces, transforming it from a standalone tool into a dynamic ecosystem of software solutions.__ This approach has reshaped Delta from a singular situational awareness tool into an expansive ecosystem of software applications that enhance military operations — from intelligence, surveillance, and reconnaissance to target recognition and command and control.

4. __Delta’s development process is driven by direct battlefield requirements and by rapid integration of new applications to address evolving military challenges.__ Delta remains relevant to dynamic battlefield conditions and constantly adapts to technological and operational needs. The integration of applications such as Mission Control for drone coordination and UA DroneID for drone identification demonstrates how Delta’s software ecosystem has evolved in response to the increase in uncrewed systems on the frontline.

5. __Ukraine has succeeded in integrating software from the United States’ and NATO’s weapons and command-and-control systems directly into Delta.__ This integration enables a seamless flow of data between Western and Ukrainian systems that is crucial to military operations.A notable example of Delta’s compatibility with Western systems is its use of the Link 16 tactical communication system, which enables data sharing with F-16 fighter jets. Delta’s integration with the Polish TOPAZ artillery control system also demonstrates its capability to synchronize operational data to support cohesive situational awareness on the battlefield.

6. __The data sources integrated into Delta continue to expand, providing near-real-time situational awareness for military leadership and frontline personnel.__ The Delta system currently incorporates data from diverse sources, including drones, satellites, stationary sensors, and reconnaissance units, offering a comprehensive operational picture. Delta’s development team continues to augment the system’s capabilities by integrating additional data sources and enhancing the speed of data assimilation — through features such as live drone streaming and analysis of intelligence submitted by civilians via chatbots — to approach real-time data relevancy.

7. __Delta is incorporating AI-driven applications to lay the foundation for future AI-enabled capabilities.__ Avengers, a platform for video analysis, is an example of how Delta is expanding its use of AI. Avengers automatically identifies targets in thousands of simultaneous video streams, improving the efficiency of military operations. Features like this reduce the workload and errors associated with manual monitoring. The further adoption of AI will be essential for enhancing Delta’s analysis features.

The approach adopted by Ukrainian engineers — building a combined, all-domain situational awareness and battle management system around an effective tool — has proved to be highly effective. Delta’s use of web and cloud-based technologies allows for frequent updates and iterations, ensuring that the system remains aligned with operational needs. Western militaries, including that of the United States, could benefit significantly from examining Ukraine’s experience as they continue to improve their own large-scale command-and-control systems.

---

__Kateryna Bondar__ is a fellow with the Wadhwani Center for AI and Advanced Technologies at the Center for Strategic and International Studies in Washington, D.C.
