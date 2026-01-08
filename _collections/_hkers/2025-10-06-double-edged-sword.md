---
layout: post
title : Double-Edged Sword
author: William Alan Reinsch and Altynay Junusova
date  : 2025-10-06 12:00:00 +0800
image : https://i.imgur.com/v1665fh.jpeg
#image_caption: ""
description: "The Double-Edged Sword of Semiconductor Export Controls: Electronic Design Automation"
excerpt_separator: <excerpt/>
---

_This report on U.S. semiconductor export controls argues that current rules push China to reduce reliance on U.S. tech by indigenizing design and services—ultimately undermining, rather than advancing, U.S. technology leadership._

<excerpt/>

This paper, the third in a four-part series on semiconductor export controls, focuses on China’s design-out and design-around strategies related to design services, electronic design automation (EDA), and core design intellectual property (IP)—critical tools for developing semiconductors. As expanding U.S. and allied export controls limit Chinese access to advanced semiconductor technologies, these design tools have become increasingly important to China’s national semiconductor strategy. With restrictions on access to leading global design and IP from U.S.-dominated companies, China has been investing heavily in developing its own EDA tools and semiconductor intellectual property (SIP), which are key to reducing its reliance on global players including Synopsys, Cadence, and Arm.

The United States continues to lead in semiconductor design, with U.S. companies (e.g., NVIDIA, AMD, Synopsys, and Qualcomm) playing a pivotal role in developing advanced chips and excelling in the research fields of high-performance computing and advanced integrated circuit (IC) design and fabrication. The global EDA market, for example, is dominated by three U.S.-based firms—Synopsys, Cadence, and Siemens EDA (a U.S.-based subsidiary of the German firm Siemens)—which together hold about 70 percent of the market share. Notably, these companies also represent nearly 70 percent of China’s EDA market. This dominance has provided Washington with significant leverage over global chip design processes, as these tools are crucial for designing advanced chips. However, that share—especially when it comes to Western firms’ presence in the People’s Republic of China (PRC)—has declined in the past few years, as homegrown Chinese firms become more prominent in the EDA space. Around six years ago, the big three U.S. firms dominated around 90 percent of the Chinese market.

The design-out of U.S. technology, accelerated by export control measures in the past two years, poses a significant threat to U.S. leadership in the semiconductor market. In recent years, the U.S. share of semiconductor design revenues has begun to show signs of decline, which went from more than 50 percent in 2015 to 46 percent in 2020. Other countries, such as China and South Korea, are seeing local growth in their domestic design capabilities. This poses a risk to U.S. companies of losing market share, which becomes more evident as U.S. semiconductor equipment makers depend on China for 40 percent of their sales.

This report explores why design is important for semiconductor technological innovation, who the key players are in chip design tools, what types of design and IP face design-out and design-around risks from Chinese players and third countries, and the implications of those risks for U.S. economic and national security. It also highlights PRC entities’ use of shell companies and third-party channels, which shows how enforcement challenges are still a critical issue in protecting U.S. dominance of advanced technologies.

#### Design: A Critical Part of the Semiconductor Value Chain

Design is a key activity that differentiates one semiconductor from another. It requires substantial research and development (R&D) investment, as it can be an extensive project involving large teams of hundreds of specialized design engineers who work together for several years until the design is finalized and prepared for production. Semiconductor design, which includes design of both physical ICs and software for design chips, represents approximately half of the total R&D investment and value added in the industry. Whereas the R&D intensity of design is around 20 percent, the intensity for EDA and core IP exceeds 30 percent, compared to roughly 10 percent for wafer fabrication and equipment production.

As chips get smaller and competition increases, designing cutting-edge semiconductors has become increasingly complex but not unfathomable. IC design is a multistep process that involves different types of firms and activities. Firms involved in designing semiconductors fall into five main categories:

1. Fabless: a company that designs its own chip but outsources the manufacturing to a third party.

2. Integrated device manufacturer: a company that designs and manufactures its own ICs. Examples include Texas Instruments, Intel, and Samsung.

3. EDA: a trusted intermediary between design companies and foundries. EDA firms make software that is used to design all modern semiconductor devices. The three dominant EDA companies are Synopsys, Cadence Design Systems, and Siemens EDA.

4. IP provider: an SIP company that sells chip designs that its customers implement in their semiconductor devices. The best-known SIP company is Arm.

5. Design services: a third-party provider or an in-house team at a manufacturer that develops and optimizes new designs. Fabless companies often work closely with a design services team to ensure the compatibility of their designs with the foundry’s fabrication processes.

> #### `BOX 1 Major Stages of Semiconductor Design`

1. _`Product definition and specification: Product management, system architecture, and customers define initial product requirements.`_

2. _`Architecture design: System architects define block-level architecture for the design and may leverage previous IP (such as a chiplet).`_

3. _`IC design: This multidisciplinary effort includes the following:`_

   - _`logic: initial analog and digital design.`_

   - _`circuit: digital synthesis and design for test.`_

   - _`layout: routing and mask generation.`_

4. _`Post-silicon validation: Validation engineers validate physical device functionality across extreme working conditions.`_

5. _`Packaging design: Designs are created for advanced packaging functions.`_

6. _`Verification: Verification engineers verify design functionality and timing through simulation.`_

Whereas chip design used to be a manual task, today it is accomplished with the help of EDA. EDA refers to the software, hardware, and services that assist in the definition, planning, design, implementation, verification, and subsequent manufacturing of ICs. Designers use EDA to automate the design process and ensure that chip designs can be manufactured on distinct fabrication processes. The final steps of EDA involve physical design, in which component placement and routing are optimized. Placement determines the precise location of components on a chip to meet performance needs. Once the components are in place, routing defines the electrical connections between these components using metal wires or traces. Since ICs are becoming more advanced, with billions of transistors packed into a single chip, state-of-the-art EDA tools are indispensable for designing modern semiconductors.

Designers often use preexisting building blocks of IP—core design IP—to accelerate creation of the overall design. Core IP can include common components such as processors, standard cells, memories, and process-specific analog mixed-signal interface blocks. By relying on IP, designers focus on innovation for unique features while using proven solutions for manufacturing chips. This approach not only reduces design timelines but also lowers risks associated with integrating complex elements.

As semiconductor design grows more intricate, some firms are outsourcing aspects of their design to design service providers. These providers specialize in comprehensive chip design services that encompass every critical aspect of the design process. Such services are valuable to companies that lack the resources to maintain a full in-house design team or are exploring new technologies beyond their core expertise.

> #### `BOX 2 Semiconductor Design in the Supply Chain`

- _`Chip design companies play a critical role across the ecosystem.`_

- _`IP and EDA develop the necessary architectures and the simulation and complex modeling tools to enable new designs.`_

- _`Equipment makers ensure design compatibility and develop new equipment to meet design technology needs.`_

- _`Customers collaborate on designing-in chips for products or specific applications to meet functionality and performance requirements.`_

- _`Manufacturers (e.g., foundries, Outsourced Semiconductor Assembly and Test [OSAT] providers, and in-house) partner to achieve technical feasibility for fabrication/packaging, including developing new process technologies.`_


### The Role of Electronic Design Automation

EDA has long been critical in the semiconductor supply chain for developing the latest advanced chips. Before the 1970s, hardware architects manually sketched chip designs with no automation of design or layout. As chips become more efficient, EDA software has become critical to manage their complexity. Today, EDA companies make special software to design semiconductors. While there are various types of EDA tools, most help engineers create, analyze, and validate chips before physical manufacturing.

Despite its importance, the global EDA market, including core IP, remains a small part of the semiconductor industry. The EDA sector accounts for just 1.6 percent of the $600 billion global semiconductor industry. For instance, in 2023, the EDA market was valued at $16.06 billion, up from $14.1 billion in 2022, whereas the semiconductor manufacturing equipment (SME) market was valued at $103.1 billion.

Analysts project that the EDA market will grow at a rate of 10.4 percent annually, reaching $31.12 billion by 2030. This growth is driven by the increasing demand for cutting-edge semiconductor designs used in advanced technologies such as artificial intelligence (AI), autonomous vehicles, the Internet of Things (IoT), and more. Although small in scale, the EDA sector represents a critical feature of the semiconductor supply chain. Without it, designing and manufacturing advanced semiconductors would be impossible.

#### The Importance of EDA to Chipmaking

The semiconductor ecosystem, as described by industry consultant Mike Demler, may be viewed as a triangle, with chip manufacturers such as Taiwan Semiconductor Manufacturing Company (TSMC), IP companies such as Arm, and EDA tools such as Synopsys, Cadence, and Siemens at its corners. These three elements work together to keep a smooth supply chain.

Semiconductors are highly complex products to design and manufacture. EDA tools serve as a critical link between the front-end design of chips and the back-end manufacturing process (see Box 3). They perform three core functions: (1) design and validate the semiconductor manufacturing process to ensure the required performance, (2) verify that chip designs meet manufacturing specifications, and (3) monitor post-manufacturing chip performance to ensure chips continue to perform as expected. Therefore, EDA software is powerful and multifaceted, including several programs that work in tandem to accomplish different goals. This explains why foundries rely on EDA tools for validation, as they cannot afford to waste resources by producing flawed or damaged chips.

> #### `BOX 3 Key Terminology Related to Chip Design`

- _`Front-end design (or logic design) focuses on the functional aspects of the chip, such as logic gates and circuits.`_

- _`Back-end design (or physical design) focuses on design related to the processes (layout).`_

- _`Debugging is the process of identifying and fixing errors in a design before it is manufactured, often through simulations or analysis tools. It can be time-consuming and may introduce new issues during the process.`_

With demand for advanced chips on the rise, EDA suppliers must continuously improve their software to help engineers develop even more complex chips. This explains why EDA companies invest over 30 percent of their revenues in R&D—the highest margin in the semiconductor industry. According to industry experts, it is critical for EDA firms to reinvest in order to prevent their products from becoming obsolete and to maintain market leadership. In fact, no other industry has the same high level of investment in both R&D (22 percent of annual semiconductor sales to electronic device makers) and capital expenditures (26 percent).

#### The Global EDA Market

Most EDA customers are semiconductor companies, foundries, design houses, IP providers, research institutions, and industries like automotive, aerospace, and consumer electronics—all of which rely on EDA tools for designing chips. However, only a few companies make EDA software that supports the entire chip design flow, which includes more than 40 steps in the design process. These companies, known as the “big three”—Cadence (U.S.), Synopsys (U.S.), and Siemens (U.S./Germany)—have dominated the market for decades, controlling about 75 percent of the global EDA market. This leaves 25 percent of the market for other companies. Despite China’s efforts to develop domestic EDA solutions, the big three also account for over 80 percent of the EDA market in China. Other key players include Ansys (U.S.), Keysight Technologies (U.S.), Zuken (Japan), and Empyrean Technology (China), among others.

Many smaller EDA firms focus on niche applications. These firms typically specialize in solving specific steps of the design flow, such as simulation or verification, or they may work on specific types of chips. This explains why companies that design chips rely on various EDA tools. For example, Altium and Zuken focus on printed circuit board (PCB) design tools, whereas Aldec focuses on verification of digital designs, or application-specific integrated circuit (ASIC) technologies. Simply put, there are many types of EDA, often categorized into IC design software, circuit design and simulation tools, PCB design tools, programmable logic device design tools, and others. However, it is now harder for these smaller companies to break into the market because of the competition with the largest EDA firms, which are less inclined to acquire emerging companies and technologies than they were two decades ago.

> #### `BOX 4 Types of EDA Tools`

- _`Simulation tools predict the behavior of a circuit based on its description in hardware languages like Verilog or VHDL.`_

- _`Design tools use a circuit function description to assemble circuit elements to implement a proposed function.`_

- _`Verification tools ensure a chip’s design is correct and performs as required through methods including physical verification, layout versus schematic, functional simulation, and equivalence checking.`_

The difficulty of entry into the design sector is considered a threat to the semiconductor industries of countries of concern. Many now view EDA as a strategic weapon in the context of semiconductor geopolitical tensions. With the complexity of chip design and increasing regulations, including export controls, the requirements for using EDA tools have become stricter, and the cost has increased significantly. Countries such as China, Japan, and South Korea are making efforts to strengthen their EDA competitiveness in order to secure semiconductor design sovereignty and mitigate risks posed by their limited market presence in the global EDA industry.

For instance, South Korea, home to major chipmakers including Samsung and SK Hynix, has a weak domestic EDA industry. Only a few companies, like Baum and Alsemy, are making progress in the field. In response, the South Korean government is planning to offer tax breaks and subsidies to support the growth of local EDA firms. Meanwhile, China has the fastest-growing EDA ecosystem, with the goal of developing domestic EDA tools to manufacture chips at 14 nanometers (nm) or less. According to data from the International Conference on Computer-Aided Design, China has 87 out of 140 global EDA participants. In 2023, the size of the Chinese EDA market reached $1.69 billion, or about 10 percent of the global EDA market. Despite this growth, Chinese EDA firms still have a long road ahead to catch up with global leaders.

> #### `BOX 5 Semiconductor Nodes`

_`In semiconductor technology, “node” refers to the size of the transistors and components on a chip. Smaller nodes mean more transistors can fit into a single chip. As technology advances, node sizes continue to shrink, leading to increased performance. However, the cost per die is rising with smaller nodes, pushing the industry toward more heterogeneous designs, where specialized processes and materials, such as silicon, germanium, and gallium arsenide, are used for specific needs like high-frequency components.`_

![image01](https://i.imgur.com/VpdLKFn.png)
_▲ __Table 1: Design Costs for Cutting-Edge Nodes.__ Source: [Semiconductor Industry Association](https://www.semiconductors.org/policies/chip-design/); [Taiwan Semiconductor Manufacturing Company](https://www.tsmc.com/english/dedicatedFoundry/technology/logic/l_3nm); and [Institute of Electrical and Electronics Engineers](https://irds.ieee.org/editions/2021/more-moore)._

Between 2006 and 2020, the cost of designing a new chip on the latest manufacturing node increased more than 18-fold. Smaller nodes, while more energy efficient, come with higher costs because of the need for advanced fabrication tools. For example, a 2 nm design is projected to cost $725 million, and a 2 nm fab will cost $28 billion to build, with wafer production costs at $30,000—50 percent higher than for 3 nm chips. This rise in costs will lead to an increase in the price per chip. As a result, companies like AMD and Intel may shift to multi-chiplet designs to manage costs, whereas smartphone processors will likely remain monolithic for now, meaning all the components will be fabricated on a single piece of semiconductor material.

Leading firms (the big three) have shaped the industry through strategic acquisition of startups in order to expand their portfolios and fill gaps in the industry. The success of these acquisitions depends not just on financial returns but also on the retention and integration of engineering teams, as these teams are often the driving force behind the acquired technologies.

With the increasing complexity of semiconductor design and the growing cost of entry, it has become more difficult for new startups to break into the market. Consequently, the target size for acquisitions has grown, with the big three now focusing on acquiring larger companies rather than smaller start-ups. For example, Synopsys’s purchases of Ansys (EDA), Virage Logic (IP), and Magma (EDA), and Cadence’s acquisitions of Altos (EDA) and Denali (EDA), as well as Insight EDA and Altair Engineering by Siemens EDA, show this shift toward larger deals.

Another reason startups find it hard to break in is the close collaboration between EDA firms and foundries, which ensures that tools are ready to support new manufacturing processes. Since chip designs rely on specific process nodes from foundries (e.g., TSMC and Samsung), EDA suppliers have had to work closely with foundries to simulate and verify these nodes in their tools. Foundries provide process development kits (PDKs), which are libraries of predefined components to manufacture chips. EDA suppliers integrate these PDKs into their software to ensure designs meet fabrication requirements. This extensive cooperation between suppliers and foundries makes it challenging for startups to disrupt the market.

At the same time, the EDA industry is also expanding into areas like multiphysics simulations, AI-driven design, and large-scale system integration. These innovations are helping industries such as automotive, aerospace, and defense optimize performance through virtual design tools or digital twins (virtual representations of an object). AI is significantly improving EDA software, with vendors increasingly using AI and machine learning (ML) to help chipmakers and systems companies differentiate their products, which in some cases means using AI to design AI chips.


### Semiconductor Intellectual Property

The role of IP and EDA, as described in Fabless: The Transformation of the Semiconductor Industry, is like “the heart of an elephant, tiny in comparison but without which there is no elephant.” In any sector, IP plays a significant role in innovation, and the semiconductor industry is no different. Before a given advanced packaging technology can be manufactured at scale, semiconductors must be designed (using EDA software), and semiconductor designs are often patented to protect the designer’s investment. IP helps ensure ownership over intellectual findings and the capacity to control the use of IP in line with an institution’s mission and core values.

Whereas IP often refers to the general IP in a business, such as patents, copyrights, and trademarks, in the semiconductor business it usually denotes SIP. SIP refers to predesigned, pre-verified components—often called IP blocks or core IP—that can be licensed or reused in the creation of ICs. These components include building blocks such as processor cores, memory controllers, interface protocols, and specialized functions, which semiconductor companies can reuse or license. A helpful metaphor is that IP companies, instead of offering a finished product, sell the design blueprint.

> #### `BOX 6 Integrated Circuits, Microprocessors, and Chips`

- _`An integrated circuit, also called a chip or microchip, is a small electronic device made up of interconnected components like transistors, resistors, and capacitors, all embedded on a single chip.`_

- _`A microprocessor is the central processing unit (CPU) of a computer or digital device, acting as the “brain” that executes instructions from software. It is responsible for performing arithmetic and logic operations necessary for processing.`_

- _`“Chip” is a general term that usually refers to any semiconductor device. It is commonly used for microprocessors, memory chips, and other key components.`_

#### Types of SIP

SIP is generally licensed as either soft IP or hard IP.

Hard IP includes the documents, designs, and code blocks created during the design and development of a semiconductor. This type of IP can be replicated and distributed, allowing other organizations to manufacture semiconductors based on the same design—for example, memory controllers and analog or mixed-signal IP blocks.

Soft IP consists of the documentation generated during the manufacturing or operational phases of a semiconductor. This includes usage or maintenance records, logs of software running on a specific chip, and reference materials such as user manuals. Once the soft IP is finalized, it undergoes a process called hardening, where it is converted into a physical layout for manufacturing—for example, synthesizable register-transfer level designs for digital blocks and configurable analog IP.

#### The Importance of SIP

Semiconductor design is IP driven. The development of IP as a business model has enabled the industry to evolve into specialized segments. This model, which allows companies to earn revenue solely from design, has made it possible for some firms to focus exclusively on development, whereas others specialize in production and other stages of the process.

At each phase, semiconductor design creates detailed documentation for both manufacturing and application purposes. This documentation is valuable for the manufacturing process and for ensuring the design can be replicated and correctly used by other engineers or companies.

The integration of IP into chip design relies heavily on EDA tools, which is why the markets for EDA and SIP are often viewed as one. Once a design is created, it can be patented, offering the designer legal protection. Patents protect the unique aspects of the design, ensuring that no other company can replicate the same innovations without permission. These patents can then be licensed, creating an additional revenue stream for the IP holder.

SIP firms specializing in chip design are “fabless,” meaning they do not fabricate chips at scale. Instead, they license their designs to other companies that physically manufacture the chips. This business model is known as “silicon IP,” where companies license their designs as IP to customers.

One of the primary advantages of SIP is its ability to streamline the chip development process, enabling faster time to market by providing pre-built functionality from IP vendors. By licensing predesigned, pre-verified IP components, companies avoid the costly and time-consuming process of designing every part of a chip from scratch. SIP can often be customized to meet specific requirements. By using SIP, companies gain access to the latest technologies and stay competitive in the market with no need to invest in R&D or develop technologies internally. This also saves on costs, as companies can license or reuse existing IP.

> #### `BOX 7 Semiconductor Intellectual Property Sources`

_`Core IP can come from two major sources:`_

1. _`Third-party SIP is licensed from external vendors, allowing IC designers to access diverse functionalities. This approach requires managing vendor relationships, licensing agreements, costs, and supply chain considerations.`_

2. _`Internal SIP is developed in-house to meet specific design and customization needs. It requires rigorous verification, maintenance, and updates to ensure compatibility, reliability, and scalability across design revisions.`_

_THE IMPORTANCE OF SYSTEM ON A CHIP_

The evolution of semiconductor design has been transformative. In the past, the components of electronic devices existed on separate chips for different functions, such as microprocessors, memory, and audio/video encoders. A large share of unique internal design and a smaller share of external IP were either purchased or acquired through other means. Today, advancements in design have integrated all these functions onto a single chip, known as a system on a chip (SoC).

SoC offers better performance, reduces power consumption, and optimizes space. These benefits are made possible by the development of the SIP business model. This model involves licensing IP related to chip designs, allowing companies to use predesigned building blocks or components in their products instead of designing everything from scratch. It has become essential for creating complex chips such as SoCs by providing standardized reusable components that can be easily integrated into larger designs. Most of an SoC comprises internal and third-party IP integrated with a small amount of highly differentiated product-specific design. As a result, semiconductor companies now prioritize the management, configuration, and integration of these IPs.

> #### `BOX 8 System on a Chip`

_`An SoC is an IC that combines all the necessary functions of an electronic device onto a single chip. It integrates the CPU, memory, input/output ports, and other components, reducing space and improving efficiency compared to traditional designs with separate components.`_

_GROWTH OF THE SIP LICENSING MARKET_

SIP licensing is a growing market and plays a crucial role in enabling advanced chip designs across industries. The SIP licensing industry, once considered niche and with a somewhat mixed reputation, has now become very important, with companies including Arm (UK), Imagination (UK), CEVA (U.S.), Cadence (U.S.), Synopsys (U.S.), and VeriSilicon (China) offering extensive IP portfolios, including SoC design, memory, microprocessors, AI accelerators, and others. SoCs now contain over 50 percent and sometimes as much as 80 percent IP.

Like EDA, core IP is highly R&D intensive and is largely dominated by U.S. and UK firms. In 2019, these two countries combined accounted for over 90 percent of the core IP market. Arm (UK) led the market with a 40 percent share in 2020, along with Synopsys (20 percent) and Cadence (6 percent) (see Figure 1).

![image02](https://i.imgur.com/mcNTesw.png)
_▲ __Figure 1: Semiconductor IP Market Share, 2024.__ Source: [Tajammul Pangarkar, “Semiconductor IP Statistics and Facts (2025),” Market.us Scoop, January 14, 2025](https://scoop.market.us/semiconductor-ip-statistics/)._

In 2023, the global SIP market was valued at $6.93 billion; it is projected to reach $14.28 billion by 2032. The growth is driven by rising demand for SoC designs. In 2022, global IC design IP sales grew by over 20 percent, reaching $6.6 billion, compared to $5.6 billion in 2021, according to IPnest’s Design IP Report. The top-five chip IP vendors in 2022 in terms of design IP revenue were Arm, Synopsys, Cadence, Imagination Technologies, and Alphawave Semi. China-based VeriSilicon ranked seventh, with a 22 percent increase in design IP revenue, rising from $109 million in 2021 to $133.6 million in 2022 and capturing 3 percent of the global silicon IP license market.

In parallel, the semiconductor industry has seen a notable increase in patent filings. Research by the European IP firm Mathys and Squire showed that global semiconductor patent applications increased by 22 percent, from 66,416 in 2022–23 to 80,892 in 2023–24. This growth is largely driven by the rapid advancements in the AI sector, specifically generative AI, which has boosted the market value of semiconductor companies such as TSMC and has accelerated R&D efforts, leading to more patent applications.

#### Trade Secrets

IP theft remains a critical global issue, especially in the semiconductor industry. According to the CNBC Global CFO Council, one in five U.S. companies reports being a victim of IP theft, with losses totaling an estimated $600 billion annually. High-profile cases such as the theft of trade secrets from companies including Micron Technologies, Avago Technologies, and Skyworks, as well as incidents involving large entities such as ASML, TSMC, SK Hynix, Taiwan’s United Microelectronics Corporation, and China’s Semiconductor Manufacturing International Corporation (SMIC), illustrate the widespread nature of this problem.

State-backed actors or insiders often orchestrate these thefts, funneling stolen information to foreign competitors to boost their technological capabilities. In particular, China has been accused of using aggressive tactics, including forced technology transfers, to advance its semiconductor industry at the expense of Western firms.

The growing scale of IP theft in the semiconductor industry has led to stronger responses from both governments and companies to protect IP. For instance, South Korea recently reported 97 attempted IP thefts, with damages estimated at $16.8 billion, primarily driven by insider threats. In response, the country is strengthening security measures, including digital monitoring and stricter penalties. Taiwan has long been concerned about IP theft from China. One significant case occurred in 2009 when a U.S. jury found that SMIC stole trade secrets from TSMC, potentially causing over $1 billion in damages. Stronger international cooperation and better enforcement of IP laws are needed, as the protection of IP has evolved into a critical economic and national security issue.

#### China’s SIP Market

China lags behind the United States in semiconductor design and fabrication, but the country’s IP is advancing at a rapid pace. China trails the global innovation leader in many areas of semiconductor design and production, particularly in essential tools like EDA software and lithography equipment. Nevertheless, Chinese companies, including Huawei’s HiSilicon and Biren, have developed increasingly competitive logic chips, particularly those used in mobile devices and graphics processing units (GPUs) for AI applications.

- IP as a Chiplet

Central to China’s IP ecosystem is its growing interest in chiplets, a modular approach to semiconductor design that addresses both performance and cost challenges. The chiplet market remains nascent but holds immense potential, particularly for AI. Beijing views chiplets as affordable and low-exposure IP. What makes chiplets particularly attractive to China is their ability to drive down nonrecurring engineering costs, which comprise the upfront cost of designing a new chip. Once a chiplet design is completed, it can be reused across multiple applications, offering a low-cost and low-risk alternative to developing monolithic SoCs. In addition, Chinese companies are also leveraging chiplet technologies, initially sourced from the United States, to combine small semiconductors into powerful integrated units with diverse applications, which can enable circumvention of U.S. export controls. This explains China’s broader ambitions of not only becoming self-reliant in chip design but also playing an active role in the global semiconductor ecosystem, as chiplets can help the country integrate into the global market.

> #### `BOX 9 Chiplet`

_`A chiplet is a small modular chip that can be combined to create a more complex SoC or multi-die design. Multiple chiplets can be combined to form a larger, more complex system, allowing for flexibility and cost efficiency, particularly in applications such as AI.`_

Key players such as VeriSilicon are at the forefront of developing globally competitive chiplet technologies and standards. As of 2023, VeriSilicon held 3 percent of the global semiconductor design market, ranking seventh globally. The company operates on a model similar to that of Arm, focusing on licensing IP cores and custom chip designs. It has developed in-house processor IPs for AI applications, including GPUs, general-purpose computing on GPUs, and neural processing units, adopted by 60 customers. In 2024, for example, the company launched its latest Vitality architecture GPU IP series, designed for high-performance computing in cloud gaming, AI personal computers, and graphics cards. China’s Big Fund and Hubei Xiaomi Changjiang Industrial Investment Fund are major shareholders in VeriSilicon.


### How Export Controls Impact the U.S. and Foreign Chip Design Industry

More potential choke points in semiconductor technologies have been addressed recently through export controls in an effort to limit China’s technological progress. Starting in the 2000s, “list-based” controls restricted exports of semiconductor equipment, software, technical data, and related technology to China, applying to all Chinese entities. More stringent end-use and end-user controls targeted specific industries with a presumption of denial for export licenses. The following sections analyze the export controls related to chip design.

#### August 2022: EDA Tools

By the second anniversary of the October 2022 export controls on advanced semiconductor technology, many policymakers had begun to overlook the earlier August 2022 multilateral export control on certain EDA tools, which blocked about 150 countries, including China, from accessing these tools without specially granted licenses. The August 2022 controls were among the first steps that directly targeted chip design software, designed to control the EDA software necessary for the development of ICs with gate-all-around field-effect transistors (GAAFETs) at nodes below 3 nm—in other words, extremely small. GAAFET enables compact, efficient, and radiation-tolerant chips with applications in commercial and strategic sectors like defense and satellite communications. Under the Wassenaar Arrangement framework, the United States coordinated with 41 other countries to implement this restriction.

> #### `BOX 10 Gate-all-around field-effect transistors`

_`GAAFET is a successor of three-dimensional field-effect transistors, also known as fin field-effect transistors (FinFETs), the most advanced transistor structure, in which the gate contacts the channel from all sides. It allows the creation of the smallest transistors ever made, with nodes below 3 nm. In 2017, for example, IBM created 5 nm silicon chips using a GAAFET structure, a break from the usual FinFET design.`_

The controls targeted the sale of EDA software mainly from the big three— Synopsys, Cadence, and Siemens. However, unclear guidelines in the EDA restrictions have led to compliance challenges. These firms criticized the gaps in the export control regulations, such as an unclear definition of “specially designed” EDA software, in their public comments to the U.S. Bureau of Industry and Security (BIS). They questioned whether both EDA software with GAAFET structures and EDA software with no GAAFET structures should be subject to the same controls. As such, EDA companies have customized their software to exclude support for GAAFET. As a result, many customers in China who had already downloaded the EDA software in 2022 could still use it, but they no longer had access to software updates or technical support.

Despite these adjustments, China remains a major customer of U.S. EDA companies, as China’s semiconductor design ecosystem, like that of many other countries, depends heavily on access to advanced EDA tools. According to ICwise, a Shanghai-based semiconductor consultancy, the big three accounted for about 80 percent of China’s EDA market in 2023, despite Chinese firms’ efforts to produce their own EDA tools, though this still represented a decrease from 90 percent in 2021. While export controls on EDA tools to China may prompt the development of domestic competitors, experts believe China is unlikely to develop leading EDA tools for at least another decade. In the short- to medium-term, China may develop alternatives for specific design steps, but it will not be able to create solutions for the entire design process or cutting-edge manufacturing. Empyrean, a leading EDA firm in China, has argued that while the firm has gained some market share from Beijing’s de-Americanization campaign, fully replacing Synopsys and Cadence is “like coming to carmakers and asking to build rockets.”

#### October 2022: Semiconductor Manufacturing Equipment

On October 7, 2022, the administration under President Joe Biden expanded U.S. export controls, restricting U.S. companies from exporting advanced semiconductors, along with SME for making chips smaller than 14 nm, to China. These controls were designed to limit China’s ability to develop cutting-edge AI chips with military applications and produce high-performance semiconductor devices. (The second paper in this series, The Double-Edged Sword of Semiconductor Export Controls: Semiconductor Manufacturing Equipment, covers in detail the October 2022 export controls on SME.)

#### October 2023: Closing Loopholes from 2022

One year later, on October 17, 2023, BIS issued an updated set of rules that revised the October 2022 rules in an attempt to close loopholes that weakened their efficacy. The revisions address four key areas: (1) combating circumvention efforts, (2) adding new controlled equipment (most of which is used for fabricating logic chips below 16 nm), (3) expanding the Entity List to include more firms, and (4) tackling technical gaps.

A major focus of the update is closing technical loopholes that previously allowed companies like Nvidia and Intel to bypass restrictions by customizing their chips for the Chinese market. Previously, firms modified their high-performance chips to technically comply with the 2022 rules. For example, Nvidia introduced modified versions of its advanced chips—the A100 and H100—for the Chinese market. In 2023, Nvidia created the A800 and H800 for the Chinese market to comply with U.S. export controls. These chips, used by major Chinese tech firms like Alibaba and Tencent, are now included on the controlled list, with then–U.S. Secretary of Commerce Gina Raimondo criticizing Nvidia for attempting to bypass trade rules.

The revisions also address evasion methods, which had allowed Chinese firms to access restricted technologies via third-country subsidiaries and stockpile critical equipment within China. The new controls expand the restrictions to an additional 43 countries. This move was designed to block the diversion of U.S. semiconductor technologies through nations with strong ties to China.

These updated rules also target chips that are “designed or marketed for use in a data center.” Experts note that advanced AI training relies not on individual chip performance but on the efficient clustering of many chips within data centers. As a result, high-performance gaming chips and lower-performing data-center chips, which were previously exempt, are now subject to export controls. This update aligns with former National Security Advisor Jake Sullivan’s “small yard, high fence” strategy, introduced in 2022 to limit the most advanced semiconductors while still allowing U.S. companies to sell less-advanced chips and manufacturing equipment to China.

#### September 2024: GAAFET Technology

On September 6, 2024, BIS introduced new export controls on several semiconductor technologies including GAAFET and advanced SME; quantum computing; and additive manufacturing. The rule added 18 new Export Control Classification Numbers (ECCNs) and revised 9 covering equipment and technology critical for advanced semiconductor production, high-performance computing, and metal component manufacturing.

Many newly classified items now require export licenses, though certain exceptions apply. To “ensure continued technology leadership of U.S. companies and prevent disruption of the current semiconductor manufacturing supply chain,” BIS introduced two GAAFET general licenses and a general license for quantum items. For instance, the rule includes a grandfather clause that permits deemed exports and reexports of GAAFET technology to foreign nationals from specified countries. The rule also includes new License Exception Implemented Export Controls for countries with similar restrictions, such as the United Kingdom, Japan, and certain European countries that introduced comparable controls in early 2025.

#### December 2024: Controls and Their Implications for Design

On December 2, 2024, the Biden administration announced significant updates to semiconductor export controls, introducing measures aimed at slowing China’s progress in advanced chip manufacturing and AI. The new rules target critical vulnerabilities in China’s supply chain, expanding restrictions on high-bandwidth memory, 24 types of SME, and 3 types of software tools for developing or producing semiconductors; provide new red-flag guidance to address compliance and diversion concerns; and create stronger enforcement under the Foreign Direct Product Rule. Then–Assistant Secretary for Export Administration for the Department of Commerce Thea D. Rozman Kendler stressed that these measures aimed to protect U.S. security while limiting China’s ability “to indigenize the most advanced technologies.”

_SOFTWARE TOOLS_

The most notable development in semiconductor design is expanded restrictions on software tools critical to the development or production of semiconductors, including productivity- and capability-enhancing software. The rules include electronic computer-aided design software for advanced semiconductor packaging involving multiple chips or chiplets, as well as technology computer-aided design software, which uses computer simulations to develop and optimize semiconductor process technologies and devices. A license is now required for exporting, reexporting, or transferring these tools when there is knowledge that they will be used for advanced-node IC design in restricted regions, including China and Macau (Export Administration Regulations Country Group D:5).

One notable change is that BIS created a new classification (ECCN 3B993) for “node-agnostic” tools used in both legacy and advanced production and for software keys subject to the same controls as the software or hardware to which they provide access. The controls specifically target software tools essential for multi-patterning techniques, which extend the use of deep ultraviolet lithography to manufacture chips as advanced as 7 nm. This has been critical for SMIC, China’s leading chipmaker, in developing AI chips, including those used by Huawei, without access to extreme ultraviolet systems. The controls also added developing technologies like nanoimprint lithography, which is used for biotech chips and could serve as a potential design-out for China to bypass existing restrictions.

_ENTITY LIST_

The United States has added 140 companies to the Entity List, including 136 Chinese firms, one Japanese company, one Singaporean firm, and two South Korean entities. The majority of the new Chinese firms operate in the upstream semiconductor supply chain, including materials, equipment, and design software. The list includes Huada Empyrean EDA, a leader in semiconductor design software; Zhongke Flying Test, a manufacturer of quantity testing equipment; and Jiangsu Nata Opto-Electronic Material, focused on advanced materials for chip production.

The opaque structures of Chinese firms, including Huawei affiliates such as PengChip and Fujian Jinhua Integrated Circuit, have undermined the effectiveness of U.S. controls. The updated rules target 16 companies under Footnote 5 of the Foreign Direct Product Rule, directly targeting high-value Huawei affiliates critical to China’s semiconductor indigenization efforts. This mirrors the 2019 “Huawei effect,” which severely disrupted Huawei’s semiconductor access.

#### Deemed Export Controls

Deemed export controls are a double-edged sword for the semiconductor industry. While they play an important role in protecting knowledge of sensitive technologies and ensuring national security, they also complicate efforts to bridge the talent gap and maintain technological leadership. As the industry confronts increasing global demand and competition, balancing these competing priorities will be critical for the future of U.S. semiconductor manufacturing.

Export Administration Regulations Section 734.13(b) describes a “deemed export” as the act of “releasing or otherwise transferring ‘technology’ or source code (but not object code) to a foreign person in the United States.” This means that even though physical items such as microchips or hardware are not leaving the United States, sharing sensitive technical data, knowledge, or software source code with a foreign national within the United States is treated as if the export occurred abroad. The release can include, but is not limited to, verbal or written exchanges such as emails, presentations, or shared-screen video calls.

For example, Lattice Semiconductor was fined $560,000 for unlicensed deemed exports of technical data and products. Between 2000 and 2002, the company released technical data to Chinese nationals without the required BIS licenses and exported programmable logic devices and related data to the PRC. Similarly, Ingersoll Machine Tools paid a $126,000 penalty for seven unlicensed deemed exports to Indian and Italian nationals.

In another case, between 2010 and 2017, SAP SE, a German software company, violated U.S. deemed export controls by providing software upgrades and cloud services to Iranian users, earning about $5 million in prohibited sales. Some senior executives were aware of the absence of filters to block Iranian downloads, resulting in 20,000 software updates and access for 2,360 Iranian users to U.S.-based cloud services. As a result, SAP paid over $8 million in penalties under a non-prosecution agreement with the U.S. Department of Justice.

For universities and tech companies in the semiconductor industry, applying for a deemed export license is necessary when foreign nationals are involved in research or development with controlled technologies. In 2022, BIS reviewed 40,507 license applications, valued at $336 billion, a slight decrease from 2021. Deemed export applications increased by 57.5 percent (1,464 applications), with notable growth among Chinese (39.6 percent), Iranian (25.5 percent), and Mexican nationals (13.1 percent). Approvals for Chinese nationals increased by 75.5 percent to 479. Meanwhile, Iranian approvals increased 71.7 percent to 309, and Mexican approvals surged nearly fivefold to 159. About 473 approved licenses contained technology for digital signal processors and digital array processors (ECCN 3E002), accounting for 35.1 percent of the total 1,347 license approvals. In other words, this category also includes technology for the development, production, or use of certain electronic equipment related to semiconductors, ICs, and similar electronic devices.

_THE GLOBAL CHIP TALENT GAP_

Analysis of the global supply and demand for semiconductor design talent makes clear that whereas U.S.-based companies are the largest source of chip design demand, China has become the biggest supplier of chip design talent. In 2021, U.S.-based companies represented 43 percent of global demand for semiconductor design engineers, followed by China at 27 percent. Taiwan, home to semiconductor giant TSMC, accounted for 14 percent, though it faces demographic challenges that could strain its future workforce.

Meanwhile, India, another rising hub, employs about 56,000 semiconductor design engineers, most of whom work for foreign firms or foreign R&D centers. In 2021, Qualcomm alone accounted for 34 percent of its global workforce in India. Emerging markets like Southeast Asia, Israel, and Eastern Europe show potential, but many engineers prioritize roles at multinational firms over local opportunities. The following analyzes the situation in the United States and China.

- United States Demands

The United States leads global demand for semiconductor design talent but faces a critical workforce shortage. Semiconductor design requires highly skilled workers with specialized expertise. North American IC design houses employ 113,000 design engineers globally, with U.S.-based integrated device manufacturers and foundries accounting for 36,000 positions. However, domestic supply falls far short of demand. The United States, and North America overall, relies heavily on foreign talent, particularly from China and India.

A 2023 report by the Semiconductor Industry Association (SIA) and Oxford Economics projected a shortfall of 67,000 semiconductor technicians, computer scientists, and engineers in the United States by 2030. Across the broader U.S. economy, this gap balloons to 1.4 million such workers. The report shows that about 16,000 master’s and PhD-level international engineers are leaving the United States each year. Simply put, by decade’s end, the semiconductor sector alone will face a 17,000-person shortfall in advanced engineering talent, meaning that the shortage of workers with advanced engineering and computer science degrees cannot realistically be filled in the near future by U.S.-citizen graduates alone.

While U.S. universities lag behind competitors, Chinese universities produce more than 77,000 science, technology, engineering, and mathematics (STEM) PhD graduates annually. Deemed export controls further complicate workforce retention. According to the SIA, even licensing policies with a “presumption of approval” discourage hiring nationals from restricted countries, as the application process creates significant business and operational delays. These restrictions put U.S. semiconductor companies at a competitive disadvantage in a fast-moving industry.

The SIA argues that it is important for U.S. leadership to allow companies to continue to recruit the best talent and “avoid overly broad restrictions on the nationalities of available talent.” As noted, “One of the key factors driving growth and innovation in the U.S. semiconductor industry . . . is the availability of highly educated professionals—from both the U.S. and abroad—to create jobs and develop new technologies.”

A 2024 report from the Commerce Department’s Office of Inspector General also highlights concerns regarding the deemed export exception, which allows the transfer of sensitive technologies to foreign nationals, including Chinese nationals in the United States, without requiring an export license. The report, which audits BIS’s efforts to prevent China’s military-civil fusion strategy, describes risks of sensitive U.S. technologies, especially in advanced computing and semiconductor manufacturing, being transferred to China through this exception.

The key concern is that the exception undermines BIS’s export controls, particularly those ensuring that technologies and software related to U.S.-controlled advanced technologies are not misused or transferred unlawfully. BIS currently relies on internal control programs within U.S. companies to manage the risks, but without systematic assessment of these controls, there is no assurance that these safeguards will be effective in the long term.

- China Supplies

China sees talent as central to its technological advancement. Chinese President Xi Jinping has repeatedly called talent China’s “first resource” for “independent innovation.” In recent years, China has emerged as the largest source of semiconductor talent, with 221,000 IC design engineers in 2021, according to a 2023 China IC white paper. Chinese universities, for instance, produce more than 77,000 STEM PhD graduates per year. This growth in talent is largely attributed to the country’s expansive higher education system and a strong push on STEM disciplines. This trend is also supported by the boom in smaller private schools and boot camps that focus on chips engineering and practical training to graduates seeking quick re-skilling.

While universities train large numbers of engineers, most lack the hands-on experience that is critical for success in semiconductor design. Experts argue that this shortfall is exacerbated by the limited collaboration between Chinese universities and industry players. As a result, Chinese experts argue that addressing the talent gap should take precedence over immediate supply chain solutions. Efforts to close this gap include engineering boot camps and increased industry-university collaborations, but experts argue that these measures will take years to bear fruit.

One striking indicator of this imbalance is the sharp rise in salaries for entry-level engineers. Since 2018, the average annual salary for a semiconductor design engineer has doubled from around 200,000 yuan ($28,700) to 400,000 yuan ($56,000). In contrast, U.S. semiconductor engineers earn an average of $88,150 annually. The salary increase shows the growing demand for skilled professionals as China’s semiconductor industry continues to expand.

While China’s talent pool is growing domestically, a significant number of Chinese engineers work abroad. The international migration of talent has been particularly prominent in companies like Qualcomm and Intel, which actively recruit Chinese engineers. For instance, Qualcomm has nearly 5,000 employees in China, with most being R&D personnel. Overall, between local firms and foreign subsidiaries, an estimated 121,000 semiconductor design engineers work in China. This migration of talent is part of a broader trend, in which China’s semiconductor industry has become increasingly competitive as foreign companies seek to tap into the rich talent base within the country. Yet geopolitical tensions, illustrated by U.S. export controls, present barriers.

Even with this growing workforce, the semiconductor sector in China faces a shortfall. A white paper from the China Center for Information Industry Development reports a deficit of 200,000 industry professionals, including engineers, R&D specialists, and manufacturing workers. In response, the PRC has been proactive in fostering its talent base through a series of programs aimed at recruiting Chinese and foreign expertise. The Thousand Talents Plan, which operated from 2008 to 2018, successfully brought in over 7,000 foreign-trained professionals, including semiconductor experts. While the Thousand Talents Plan was officially discontinued due to U.S. scrutiny, initiatives like the Qiming and Kunpeng Plans have since revived this effort, offering generous financial incentives to attract top engineers in fields such as IC design. These have seen only moderate success. For example, Zhejiang Daily reported in 2022 that the Kunpeng Plan aimed to attract 200 tech experts over five years, with 48 already recruited.

Another China strategy has been directly recruiting engineers from Taiwan, a major player in semiconductor manufacturing. Chinese firms, such as Huawei’s HiSilicon and SMIC, have offered salaries significantly higher than those in Taiwan, sometimes up to five times more. This led to the recruitment of around 3,000 Taiwanese engineers by 2019, representing about 10 percent of Taiwan’s semiconductor workforce. In September 2024, Taiwan accused eight Chinese tech firms of aggressively recruiting Taiwanese engineers, with some reportedly stealing trade secrets to further Beijing’s semiconductor ambitions.

To strengthen its self-sufficiency in semiconductor manufacturing, China has employed both diplomatic and financial strategies to attract foreign professionals. Science and technology diplomats, stationed in over 50 countries, have been instrumental in facilitating these efforts, helping Chinese firms secure global partnerships and investments. Between 2008 and 2013, they assisted more than 700 Chinese firms, including those in the semiconductor sector, with forming international partnerships. A notable example is the establishment of Jiangsu Leuven Instruments in 2016, a joint venture with Belgian companies, which specializes in semiconductor equipment.

Despite these efforts, many Chinese semiconductor experts abroad remain hesitant to return due to concerns about China’s political environment and its relative position in chip development compared to the West. Some scientists, especially those with foreign citizenship or permanent residency, worry about losing international opportunities or facing scrutiny from U.S. authorities. As a result, in 2022 only 8 of 200 applicants from the city of Zhuji in Zhejiang returned to China under the Qiming Plan.


### Chinese Firms Designing-Out U.S. Firms in EDA

China’s EDA industry has become a focal point in the country’s broader push for semiconductor self-sufficiency. Once considered incapable of challenging the dominance of U.S. firms, Chinese companies have gradually expanded their presence in the domestic market. Government funding, industrial policy, and the establishment of research centers have fueled this growth, even as U.S. export controls have cut off access to critical technologies.

#### EDA in China

In 2020, skepticism surrounded the ability of China’s EDA firms, including Huada Empyrean, to compete with the relative dominance of Synopsys, Cadence, and Siemens. At that time, China’s domestic market share stood at 11.5 percent, a significant increase from 6.24 percent in 2018. By 2022, China’s share of the domestic market had risen to 12.5 percent, while its global market share was just 2 percent. As of 2024, Empyrean held 6 percent of China’s market share, making it the largest domestic EDA player but only the fourth largest overall. This disparity shows China’s continued reliance on foreign EDA software, exacerbated by Empyrean’s limited ability to offer a full design flow capable of replacing only a small portion of what U.S. companies offer. Nevertheless, U.S. companies’ share has steadily decreased, underscoring how the PRC, despite its continued dependence on foreign firms, is progressing toward self-sufficiency in design.

Although Empyrean claims its EDA tools support chip designs down to 7 nm and Huawei asserts itssoftware can design chips at 14 nm and above, Cadence, Synopsys, and Siemens still account for over 70 percent of the Chinese market. This figure is even higher than their global market share of 78 percent. The Chinese government aims for domestic EDA developers to capture 22 percent of the local market by 2025 and to introduce EDA tools for 14 and 28 nm process technologies by that time.

Building a strong domestic EDA sector has become a priority for Beijing. In the late 1990s, China’s industrial policies under the Eighth and Ninth Five-Year Plans focused on strengthening the country’s IC design and EDA technologies. For example, as part of the 909 Project, which aimed to establish a semiconductor industry in China, the government allocated 100 million RMB to seven design firms, including Empyrean. In its latest Five-Year Plan (2021–25), EDA tools were identified as a critical area where China must make breakthroughs. The Chinese government has bolstered EDA R&D through substantial investments, including financial support from the Big Fund, which raised over $47.5 billion in its third phase in 2024. This funding has supported EDA companies like Huada Empyrean (in 2018) and NineCube (in 2024) in their efforts to develop competitive EDA technologies.

Other domestic EDA players, including GWX Technology, Primarius, Semitronix, and Shenzhen Giga Design Automation, are also making strides in the market. By 2020, Chinese firms held 11.5 percent of the domestic EDA market, with expectations to increase this share to 14 percent by 2025. In 2021, for instance, more than eight Chinese EDA start-ups were founded, collectively raising almost $400 million in capital. The establishment of the National Center of Technology Innovation for EDA in December 2022 also shows a coordinated effort to develop an independent EDA ecosystem with active participation from companies like Empyrean.

Despite this growth, Chinese EDA companies face challenges. According to a 2023 China EDA industry report, domestic EDA tools cover only about 70 percent of all the EDA categories, and a complete platform or tool chain has not yet been formed. This explains the difficulty in building competitive alternatives to the foreign giants, which have established themselves over decades.

The gap in R&D investment is another major hurdle. While the global EDA industry invests around $4.6 billion annually in R&D, Chinese companies contribute only $270 million. The labor force is significantly smaller in China, with only 4,500 EDA professionals compared to the global workforce of 43,000 EDA practitioners. Of the 140 EDA companies worldwide, 82 are based in China, but most are small, with only 7 employing more than 200 people. This shows that while the Chinese EDA sector is growing, it remains in the early stages of development, lacking the scale and resources necessary to challenge the established foreign players.

#### Impact of U.S. Export Controls on China’s EDA Sector

U.S. export controls on Chinese companies, particularly Huawei and Huada Empyrean, have had a significant impact on China’s EDA sector. These sanctions, which began in 2019 and continued with the addition of Huada Empyrean to the U.S. Entity List in 2024, have severely restricted Chinese firms’ access to critical EDA tools and SIP from global leaders like Synopsys, Cadence, and Siemens.

Before these sanctions, Huawei’s subsidiary HiSilicon had full access to U.S.-origin EDA tools, which, according to experts, were critical in designing advanced chips such as the Kirin 9000 and Kirin 9100 (5 and 7 nm, respectively). Huawei and HiSilicon also strategically acquired a significant number of EDA licenses for a 10-year period, which support chip designs up to the 7 nm node. However, with the sanctions in place, Chinese firms can continue to use previously purchased EDA tools but no longer have access to software updates or technical support. This situation has accelerated China’s efforts to build a fully domestic semiconductor supply chain, including the development of indigenous EDA design tools, SME, and materials.

In December 2024, Huada Empyrean’s addition to the U.S. Entity List restricted its access to essential technologies from U.S. EDA vendors. In response, the company transferred control to China Electronics Corporation, increasing government oversight in the sector. This shift’s objective is to leverage China Electronic Corporation’s connections with the Chinese government and state-owned enterprises, but its effectiveness in driving the development of domestic EDA technologies remains uncertain.

Beyond the challenges U.S. export controls pose, China’s domestic EDA sector also faces issues related to piracy and IP protection. Smaller vendors, which rely on the home market, struggle to control unauthorized software distribution, making them vulnerable to competition from global EDA providers. Moreover, China’s EDA industry has difficulty attracting top talent, as many skilled engineers are drawn to more lucrative sectors, such as internet and mobile technology.

#### Case Studies

_HUAWEI’S ROLE IN SEMICONDUCTOR INDEPENDENCE_

Huawei’s Tashan Plan is a multipronged strategy designed to minimize reliance on U.S. technologies. As a key player in the Chinese semiconductor industry, Huawei has faced challenges due to U.S. sanctions, which severely disrupted the company’s access to U.S.-made technology. In response, Huawei has expanded its focus beyond traditional chip design and manufacturing, incorporating multiple strategic actions to regain independence.

One of Huawei’s critical steps has been the development of its own EDA tools, alongside efforts to diversify its supply chain by investing in semiconductor front-end manufacturing firms and packaging and testing facilities, and by acquiring precision manufacturing capabilities. Its chip design arm, HiSilicon, has also been working to replace U.S. technologies, including Arm’s IP, with RISC-V–based designs, thus removing reliance on foreign IP.

In parallel, Huawei’s creation of Huawei Precision Manufacturing has helped it gain greater control over semiconductor manufacturing technologies. This is significant, especially considering Huawei’s ability to integrate memory chips made by Yangtze Memory Technologies into its latest smartphones. However, despite these developments, Huawei’s progress is limited, especially when it comes to advanced process nodes—such as those below 14 nm—where U.S. firms remain dominant.

_EMPYREAN’S ROLE IN CHINA’S EDA LANDSCAPE_

Empyrean, one of the leading domestic EDA providers in China, plays an important role in the country’s semiconductor ecosystem. While still a distant fourth in the global market, Empyrean has made progress within China, holding a 6 percent share of the domestic market as of 2024. However, this growth shows a substantial gap between local EDA tools and those from global leaders like Synopsys, Cadence, and Siemens, which still dominate with approximately 80 percent market share in China.

Empyrean’s ambitious goals to replace foreign EDA tools by 2025 and establish a comprehensive chip design ecosystem by 2030 reflect China’s long-term strategy to develop its own semiconductor capabilities. The company’s EDA tools, which support chip designs down to 7 nm, are an important step toward reducing dependence on foreign EDA software. However, as of 2025, Chinese EDA tools were still far from replacing the full range of advanced capabilities U.S. firms offer, especially in areas like 5 and 3 nm chip design.

China’s commitment to advancing domestic EDA development is clear, with the government making substantial investments through initiatives like the Big Fund, which raised over $47.5 billion for semiconductor R&D. This funding has enabled firms like Empyrean to grow rapidly, despite challenges such as IP theft and difficulty attracting skilled talent. Additionally, Empyrean’s participation in the National Center of Technology Innovation for EDA demonstrates the level of coordination and governmental support being poured into building a competitive EDA ecosystem.

_INTEGRATED CIRCUIT DESIGN_

Like the EDA sector, China’s IC design sector has experienced rapid growth in recent years. According to the China Semiconductor Industry Association, the number of IC design houses in China reached 3,243 in 2022, an increase of 433 from the previous year. This growth reflects both expanding domestic demand and rising technological capabilities.

Chinese IC design houses show greater diversity in their target markets compared to their Taiwanese counterparts. They operate across high-, mid-, and low-tier IC products. Recently, China has made progress in developing advanced process products, particularly for AI chips. Notable examples include AI chips developed by Chinese companies, most of which leverage 7 nm process technology, such as HiSilicon’s Ascend 911, Baidu’s Kunlun Xin Gen 2, Alibaba’s Hanguang 800, and Iluvatar CoreX’s Tiangai 100.

The export controls targeted China’s high-performance chips, including high-bandwidth memory. As a result, development in high-end AI chips and advanced processes has faced challenges. In response to the earlier export controls, China has adapted its development strategies: increased investment in mature process technologies and reallocated resources from banned high-capital sectors to areas with lower investment requirements, providing additional support to the IC design industry.


### Export Controls Enforcement Issues

The global semiconductor industry has faced significant disruptions as U.S. export controls implemented since 2022 have sought to limit China’s access to advanced technologies. Initially, these controls were aimed primarily at Chinese entities, but loopholes in the system allowed Chinese firms to design-out restrictions through third-country partnerships. This issue came into sharp focus in October 2023 and December 2024 when the United States extended the reach of these controls, targeting 43 additional countries with close ties to China and adding 140 firms to the Entity List, raising concerns about technology diversion through third parties.

China’s strategy of designing-out through third countries focuses on three main approaches: (1) purchasing alternative EDA software, (2) collaborating with non-U.S. firms to close the technological gap, and (3) pursuing acquisitions and shell companies to build a competitive EDA ecosystem. However, this strategy faces challenges due to the complex capital-intensive nature of the semiconductor industry, making it hard for China, like other countries, to compete with the dominant U.S.-EDA players.

Countries such as France, Germany, India, Japan, and South Korea have become important players in filling the gaps left by U.S. companies. A 2023 report showed that China uses EDA software from 63 firms, including 37 domestic firms and several international players. Fourteen are from the United States, two from Germany (MunEDA and Concept Engineering), two from India (Agnisys and Vayavya Labs), two from France (Intento Design and Defacto Technologies), and one each from the United Kingdom (Pulsic), Romania (AMIQ), and Japan (Zuken), among others. However, despite these efforts, Chinese EDA firms still struggle to develop a competitive, comprehensive tool chain to design advanced chips.

#### Key Players in Third Countries

While U.S.-based EDA giants maintain a strong position of 80 percent of the market share in China, third-country companies are attempting to close the technological gap. Local Chinese companies account for only 12.5 percent, while other foreign firms share the remainder (See Figure 2).

![image03](https://i.imgur.com/ZHpQMRv.png)
_▲ __Figure 2: EDA Market Share in China.__ Source: [Amanda Liang and Judy Lin, “China’s Domestic EDA Market Share Doubled, Thanks to Support from 3,451 Local IC Design Firms,” DigiTimes Asia, April 25, 2024](https://www.digitimes.com/news/a20240424PD211/cadence-eda-empyrean-technology-siemens-eda-synopsys.html)._

A notable example is Zuken, a Japan-based company specializing in EDA and PCB software. Zuken has a significant presence in China and other Asian countries, with 68.8 percent of its revenue stemming from Japan. But its other Asian revenue is still growing, accounting for 5.1 percent in 2023.

Similarly, Taiwan-based EDA suppliers like SpringSoft have expanded their footprint in China through collaborations, providing alternatives to U.S.-based EDA tools. In 2007, for instance, SpringSoft secured orders from China’s Tianma Microelectronics, the country’s largest supplier of liquid crystal display (LCD) panels. Tianma adopted SpringSoft’s Laker Flat Panel Display Editor, which boosted panel layout efficiency by two to four times. The Laker series—a set of EDA tools widely used by over 200 clients, including United Microelectrics Corporation, MediaTek, and Silicon Integrated Systems—has become a key tool in the LCD market, with four of the top five global monitor makers using it. SpringSoft, despite being acquired by Synopsys in 2012, maintains a legacy in the region that shows the importance of local alternatives in the market.

Another case related to third parties emerged in October 2024, when a technical teardown of Huawei’s Ascend 910B AI chip suggested it was likely manufactured at TSMC. The involvement of Xiamen Sophgo Technologies, a Chinese chip design company, in facilitating the transaction added to the controversy. While both companies denied the allegations, the incident shows the complexities of U.S. export controls. TSMC found itself navigating a challenging regulatory gray area, permitted to work with certain Chinese firms like Xiaomi but prohibited from engaging with Huawei.

The expansion of U.S. export sanctions on Chinese semiconductor firms, including 140 companies added to the Entity List, has raised concerns among many Taiwanese companies. While they may benefit from sanctions against competitors, the risk of collateral damage from U.S. investigations is a growing concern. For Taiwanese IC design houses, for instance, the primary concern is not the potential loss of Chinese clients but growing scrutiny from U.S. authorities due to their business ties with Chinese firms. Many Taiwanese semiconductor firms are maintaining a low profile in their dealings with China to avoid U.S. attention.

#### Shell Companies

Another strategy employed to design-out export controls, particularly those related to the Entity List and GAAFET restrictions, involves the use of shell companies and intermediaries. These entities can bypass regulations, allowing firms to continue using EDA despite restrictions. Shell companies can be established within days, and they can operate for years before being shut down by authorities. This exploitation of regulatory loopholes is made easier by the limited resources of BIS, which, as noted in a previous CSIS report, struggles with outdated databases and limited functionality, making it difficult to track and prevent illegal activity.

In the wake of the export controls, foreign EDA providers and Chinese chip firms began to form joint ventures with third-party companies. These foreign intermediaries then channeled EDA tools to Chinese engineers, hiding the original sale of U.S. software. While such tactics are not entirely foolproof, instances have been observed in high-profile cases—for instance, Huawei’s failed attempt to set up a “joint development” with STMicroelectronics (Switzerland) to share EDA licenses.

Similarly, some joint ventures between U.S. EDA suppliers and Chinese firms have been perceived as mechanisms for plausible deniability. These arrangements allow continued supply of EDA software to entities facing restrictions by operating under the guise of international partnerships. In such cases, these ventures can serve as the initial link in a chain of intermediaries, potentially allowing Chinese firms to indirectly gain access to advanced tools and technologies.

The rebranding and creation of U.S.-domiciled companies by Chinese firms attempting to dodge U.S. sanctions have also become a concerning trend. A recent example includes the establishment of American Lidar, a U.S.-based company that is, in fact, a subsidiary of the Chinese lidar maker Hesai Group, which is on the U.S. security list. This tactic of setting up subsidiaries or affiliates with different names has allowed Chinese companies to continue operating despite being blacklisted. As U.S. sanctions grow more comprehensive, some U.S. entrepreneurs are even capitalizing on these opportunities, seeking partnerships with Chinese firms despite the risks involved.

#### Third-Party Channels

In parallel with the use of shell companies, Chinese entities have also circumvented export controls by purchasing U.S.-based EDA tools through third-party vendors, often using intermediaries located in places like Hong Kong or other regions where the U.S. enforcement reach is limited. Companies like Anhui Zhongdian Guangda Communication Technology, a subsidiary of China Electronics Technology Group Corporation (CETC), purchased U.S. digital circuit design systems through distribution channels in Hong Kong. This happened despite CETC’s listing on U.S. export control lists for military end-use concerns. Similarly, other subsidiaries of CETC, Anhui Bowei Electronics Technology, purchased power optimization design tools from U.S. EDA suppliers.

Chinese academic institutions with military affiliations have also been implicated in circumventing EDA export controls. In 2021, Beijing Hantai Technology, for instance, sold EDA software from its U.S. partner to Qilu University of Technology, a public university in Jinan, Shandong Province. The university, also known as the Shandong Academy of Sciences, controls the National Supercomputing Center in Jinan. The U.S. Department of Commerce lists the institution as “building supercomputers used by China’s military actors.” Similarly, Beijing Zhongrun Hantai sold EDA tools to the Ningbo Institute of Technology and Beihang University, both of which are known for aerospace and defense projects—an example of how academic channels can be used to obscure the end users of U.S. technology.

In some cases, the use of shell companies extends beyond academic and defense-related entities. For example, Norinco, a Chinese weapons manufacturer, has purchased EDA software through intermediaries in regions like Singapore and the British Virgin Islands. This practice of rebranding or establishing new subsidiaries has become increasingly common, as Chinese firms look for ways to design-out the impact of expanding U.S. restrictions.

The overall picture suggests that while U.S. export controls on EDA tools are intended to limit China’s chip design capabilities, these restrictions are complicated and have loopholes. By using shell companies, third-party vendors, and rebranding strategies, Chinese firms can often bypass U.S. regulations, creating a complex and opaque supply chain that is difficult for regulatory bodies to monitor. With BIS’s resources stretched thin and the global semiconductor industry’s increasing reliance on cross-border collaborations, it seems likely that these restrictions will continue to inconvenience rather than completely stifle the development of Chinese semiconductor technologies.

#### Piracy

EDA software piracy is growing crisis, with the Electronic Design Automation Consortium’s antipiracy committee estimating that 30–40 percent of all EDA software usage—or roughly one-in-three users worldwide— relies on pirated licenses. The surge is tied to factors such as the rise of simpler low-end EDA tools that mimic mass-market software and the globalization of the electronic design market, which has extended EDA usage into emerging countries such as China, where IP protection remains weak.

Pirates can employ several means to access and use EDA software illegally. For instance, they may break encryption, which protects the license key generators, to create unauthorized keys. Another technique involves copying the unique machine address of a server with a valid license to run the software on multiple unauthorized machines. Lastly, pirates modify the software’s executable code to bypass license checks.

EDA software piracy via cracking can be technically challenging due to the tight integration of EDA tools and foundry-supported PDKs, which actively link chip design with up-to-date foundry technology. When a foundry like TSMC updates its PDK—typically every few weeks or few months, averaging monthly—it embeds license verification into the flow. Using outdated or pirated PDKs disrupts synchronization, triggering errors during design verification and drawing immediate suspicion from the foundry. Consequently, while low-end EDA tools might be cracked through host ID spoofing, key generator hacks, or binary tampering, advanced-node EDA (below 28 nm) updates too frequently and ties too closely to the PDK layer for this to be feasible at scale.

This makes successful piracy unlikely for individuals but does not rule out serious, well-resourced actors such as PRC companies. However, given the international footprint and legal exposure of EDA, hacking or using pirated EDA poses substantial risk, especially when legitimate licensing via shell entities or “stockpiled” preembargo licenses may be more strategically viable.

#### Leveraging Export Controls During Trade Negotiations

When the United States introduced export control rules on EDA tools in late May 2025, PRC hawks regarded the policy as an attempt to advance the U.S. objective of curbing China’s AI and semiconductor trajectory. The move aligned with the Biden administration’s stated ambition to sustain “as large a lead as possible,” relying on choke-point leverage in critical segments of the semiconductor value chain. In short, although the U.S. export control regime was hardening, the restrictions were quietly rescinded just over a month later—again via informal “is-informed” letters from BIS.

In June 2025, following high-level trade talks in London, the United States lifted its EDA restrictions, while China accelerated approvals on rare earth exports. Both sides reverted to their prior stances, but the episode exposed a new reality: Export controls had become negotiable leverage. Beijing may now feel emboldened to press for not only minor concessions but also major strategic relief, targeting Europe over limits on ASML lithography machines or tariffs on Chinese electric vehicles.

Although core U.S. restrictions on next-generation chips remain in place, the line between security-driven and transactional controls is growing murky. A notable example occurred in May 2025 when the Trump administration, during visits to Saudi Arabia, Qatar, and the United Arab Emirates, reportedly offered access to advanced U.S. chips in exchange for defense and tech investments. These deals effectively treated export constraints as bargaining chips, granting semiconductor access in exchange for commercial gains, though with the risk of tech spillover to China.

The behind-the-scenes EDA rollback marked a strategic inflection point as export controls increasingly become instruments of strategic negotiation. Looking ahead, the United States may choose to reimpose EDA software restrictions, broaden the range of controlled technologies, and pursue extraterritorial provisions. BIS is reportedly considering sanctions on major Chinese tech firms and drafting rules to target affiliates of entities already on the Entity List—measures that would significantly amplify the scope of U.S. export control.

Using U.S. export control measures as leverage in trade negotiations is likely to significantly accelerate China’s determined push to eliminate dependency on U.S. semiconductor inputs by boosting domestic alternatives and redesigning supply chains around them. Facing access limitations to technologies once controlled by firms like Synopsys, Cadence, and Siemens, China is redirecting state funding—including billions from its Big Fund III—toward homegrown EDA leaders (e.g., Empyrean) and lithography players (e.g., Shanghai Micro Electronics Equipment). The temporary denial of access has further motivated strategic innovation via open-source instruction set architectures (e.g., RISC-V), advanced packaging, and chiplet design to entirely bypass controlled technologies.


### Conclusion

China’s design-out and circumvention strategies in semiconductor design services, EDA, and core IP have profound implications for the global semiconductor landscape. The strategic importance of semiconductor design cannot be overstated: It is the backbone of technological innovation. This field requires substantial investment in R&D, skilled talent, and access to advanced tools. As U.S. and allied export controls tighten, Beijing has intensified its efforts to develop domestic capabilities, reducing its reliance on U.S.-dominated companies like Synopsys, Cadence, and Arm. This shift is not only reshaping China’s semiconductor ecosystem but also challenging U.S. technological leadership and economic security.

While the United States remains the dominant player in semiconductor design and EDA tools, recent trends indicate a slow decline in market share. With China—in addition to traditional U.S. partners such as South Korea—strengthening its domestic design capabilities, U.S. companies risk losing a critical revenue stream, particularly as the PRC accounts for a significant portion of their sales.

When it comes to the design portion of the semiconductor supply chain, workforce challenges and export control enforcement issues are more prevalent threats to U.S. economic security than design-out considerations. Despite leading global demand for skilled engineers, the United States faces a significant workforce gap, with thousands of highly trained engineers leaving the country each year. In contrast, China has made substantial investments in STEM education, producing a vast pool of engineers to support its semiconductor ambitions. The combination of workforce shortages and restrictive export control policies puts U.S. semiconductor firms at a disadvantage in an industry that demands agility and innovation.

IP theft also remains a major concern, with Chinese entities repeatedly accused of acquiring U.S. semiconductor technology through forced technology transfers, corporate espionage, and shell companies. The scale of these thefts, with damages running into billions of dollars, has led to stronger enforcement measures by the United States and its allies. However, enforcement remains a challenge due to China’s ability to exploit regulatory loopholes, use third-country intermediaries, and leverage state-backed initiatives to circumvent restrictions.

Looking ahead, the battle over semiconductor design leadership will likely intensify. China’s strategic focus on talent development, coupled with aggressive design-out initiatives, suggests that it will continue to close the gap with the United States. Policymakers must address key vulnerabilities, including workforce development, enhanced IP protection, and stronger enforcement of export controls, to maintain U.S. dominance in semiconductor design. The outcome of this technological race will have lasting consequences not only for economic competition but also for global security and supply chain resilience. The ability of the United States and its allies to adapt to these emerging challenges will determine the future of semiconductor innovation and the balance of power in the global technology sector.

---

__William A. Reinsch__ is senior adviser and Scholl Chair emeritus with the Economics Program and Scholl Chair in International Business at the Center for Strategic and International Studies (CSIS). Previously, he was a senior advisor at the law firm of Kelley, Drye & Warren and served for 15 years as president of the National Foreign Trade Council, which represents multinational companies on international trade and tax policy issues. From 2001 to 2016, he concurrently served as a member of the U.S.-China Economic and Security Review Commission. He is also an adjunct assistant professor at the University of Maryland School of Public Policy, teaching a course in trade policy and politics. Reinsch also served as the under secretary of commerce for export administration during the Clinton administration.

__Altynay Junusova__ is a former intern with the Economics Program and Scholl Chair in International Business at CSIS.
