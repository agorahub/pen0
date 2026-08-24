---
layout: post
title : AI Supply Chain Issues
author: Melina Beykou
date  : 2026-03-04 12:00:00 +0800
image : https://i.imgur.com/epTUxy1.jpeg
#image_caption: ""
description: "How AI is Quietly Becoming a Supply Chain Problem"
excerpt_separator: <excerpt/>
---

_To ensure that our most advanced systems do not become our Achilles’ heel, securing AI supply chains must be a focus for users and policy makers._

<excerpt/>

Software supply chain incidents show how attacking critical systems can scale disruption.

In 2025, the “Shai-Hulud” compromise – named after the unseen sandworms traveling beneath the desert of Arrakis in the novel Dune – tore through a public registry where developers typically publish and download reusable components of code. By compromising just a handful of widely used packages, attackers gained access to thousands of downstream projects, using routine updates to distribute the attack at scale. It is alike to compromising a trusted warehouse of standard bolts from a reputable supplier. What if the bolts were swapped for defective ones? Every product built with them would inherit the flawed bolts.

Due to this attack, up to 25,000 projects have been compromised to date. That is what makes supply chain compromise a strategically attractive attack vector: it offers access and scale by attacking the implicitly trusted dependency and not the defended system. As a result, the extent of the damage can be large before defenders even know where to look.


### When Are The Stakes Too High?

AI is built and deployed under the same dependency-heavy paradigm as software, only with higher stakes. When an organisation seeks to implement AI to improve their efficiency for example, they will purchase an AI-enabled product but have limited or no insight into what sits beneath (for example, pre-training, datasets or model weights) or the services used to update and host the models. As AI components become easier to reuse and harder to inspect, the gap between trust and assurance will continue to widen.

This means that any weaknesses introduced through a new AI tool can filter down into deployed systems and shape behaviour, security or reliability long after initial rollout.

For users, that can translate to data exposure, service disruption or unacceptable failure in critical systems. For national security, the implications are more acute, as AI may become embedded in defence support functions, critical national infrastructure and decision-making processes, supply chain compromise becomes a plausible route for systemic disruption and espionage. Security must be baked in at the start.


### Hardware, Software and Everything in Between

AI has unlocked innovation in many industries. It has helped design products faster, personalise services and make more informed decisions at scale. According to McKinsey, 88% of organisations surveyed have adopted AI in some form, whilst 79% report the use of Generative AI.

Below this surge in AI-driven progress lies a distributed foundation. AI supply chains add even more dimensions of complexity beyond traditional software, including high-performance AI chips, cloud infrastructure, open-source libraries, proprietary datasets and pre-trained models. Agentic AI systems that can plan, act and integrate dynamically with external tools, deepen these dependencies and make them less visible. A static pipeline becomes a live ecosystem introducing new complexity and AI security vulnerabilities that are only beginning to come to the surface of the AI security, governance and deployment discussions.

AI capability currently rests on supply chains that are both concentrated and strategically exposed. At the hardware layer, access to leading-edge compute depends on a small number of fabrication and packaging hubs which can become chokepoints. This issue is not really whether a single supplier is “trusted”, but that the lack of supplier diversity can cause disruption, either through geopolitical crisis or supply shock, which can be an inherently systemic risk bringing whole economies to a standstill. The automotive industry recently experienced this very same problem with export controls placed on Nexperia chips from China in November 2025 due to a move by the Dutch government to assume control of the European facility.

The software and model layers create a parallel exposure. AI development relies on shared libraries, tools and third-party model artefacts distributed through public repositories at scale. As of February 2026, the Hugging Face platform alone hosts over 2.5 million public models, illustrating the scale of today’s supply chain and its dependence on third-party artefacts. This accelerates innovation but it also means that compromised components can be reused and propagated with limited visibility by the users.

A compounding effect can be seen with the rise of agentic AI with 62% of organisations reporting experimentation with AI agents.


### Grey Zones - Where Accountability is Blurred

Much of the AI supply chain sits in grey zones where responsibility is blurred and oversight is challenging.

AI systems assembled from open-source tooling, cloud services and third-party integrations can span multiple jurisdictions. This creates a practical obstacle to action. End-users may lack the contractual leverage or technical visibility upstream and suppliers reasonably argue that they are but one link in a longer chain. On the other hand, regulators face the problem of setting enforceable requirements across borders and business models. As a result, trust is frequently assumed rather than verified because the governance and incentives to verify that trust remain weak.


### Policy Surges Ahead but Practice Falls Behind

AI resilience will not come from better prompts or more powerful models. Instead, policy measures to enhance the resilience of AI supply chains need to confront the fragility of the systems that support them.

The good news is that policymakers are not starting from zero. Securing software supply chains offers a number of key lessons for developing policy levers. After significant software supply chain shocks, governments have pushed for clearer visibility of software organisations sell, buy and run. The Software Bill of Materials (SBOM) is an inventory of all components used in a piece of software and its importance was recognised by the US government in 2021. It is built on a simple assumption that if buyers can see the components inside a product, they can identify exposure faster and manage vulnerabilities earlier. In the UK, the closest equivalent approach has been guidance-led. The NCSC’s supply chain security principles set out how organisations should establish oversight and control across suppliers, while the UK government’s Software Security Code of Practice aims to raise baseline expectations for vendors and their customers.

AI complicates this scene as it stretches the tools available to their limits. The dependencies which are not visible and the integrations which are continuously updated sit outside of the deployer’s control. This makes any assurance mechanisms difficult to enforce.

The choice therefore is not a binary one between more regulation or more voluntary standards. The priority is to match the requirements to the stakes. In lower risk use-cases, voluntary standards can improve basic cyber hygiene. On the other hand, in defence and parts of Critical National Infrastructure, procurement and regulation already impose baseline cyber requirements.

The problem is that AI supply chains frequently extend beyond those boundaries into managed services, third-party models and upstream data choices that existing requirements only partially capture. As AI is adopted in these environments, those mechanisms will need to reach further and further upstream. Otherwise, the UK will be relying on AI components that sit outside existing accountability boundaries, leaving trust to be assumed rather than demonstrated.

This is not a niche concern as demonstrated by OWASP, an industry reference point for application security, highlighting AI supply chains as a primary risk with its Top 10 for LLM and Top 10 for Agentic Applications lists both including supply chain vulnerabilities. What this means for a highly interconnected network of providers and users remains to be seen. The goal is not to reinvent supply chain security for AI but to sharpen our toolkit to meet today’s risks, especially where the stakes are highest.

---

__Melina Beykou__ is a Technology and Product Consultant for National Security & Defence at Plexal. She specialises in semiconductors, sensor systems and signal processing. She holds a doctorate from Imperial College London (affiliated with the Institute of Cancer Research, London). She now advises on emerging technology areas including semiconductors, telecommunications and critical supply chain resilience, and sits on techUK’s Emerging Technology Leadership Committee.
