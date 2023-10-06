---
layout: post
title : No Place to Hide
author: James Gillespie
date  : 2023-09-08 12:00:00 +0800
image : https://i.imgur.com/3FaIMdR.jpg
#image_caption: ""
description: "US Court Upholds Sanctions on Decentralised Crypto Platform"
excerpt_separator: <excerpt/>
---

_What does the Tornado Cash case mean for how DeFi platforms can be held accountable under anti-money laundering and sanctions laws?_

<excerpt/>

Last month, a federal court in Texas handed down its judgment in Van Loon v Treasury, upholding the Office for Foreign Assets Control (OFAC)’s groundbreaking decision to place Tornado Cash, a decentralised finance (DeFi) platform, under economic sanctions for its role in facilitating money laundering. The ruling suggests that, at least in the US, DeFi platforms will not be able to escape regulatory and legal liability just because of their decentralised nature.

DeFi platforms, which allow users to directly transfer cryptoassets to one another without using an intermediary cryptoasset business, have exploded in popularity in recent years. Elliptic, a blockchain analytics company, has estimated that, between November 2019 and November 2021, “the total capital locked in DeFi services [grew] by more than 1,700% … to $247 billion”. This has led some to fear, and others to hope, that cryptoasset trading might escape the anti-money laundering (AML) and sanctions regulations that are being applied to the sector, due to the apparent lack of an intermediary that can be held accountable for the platform.


### Background

In August 2022, OFAC designated an entity it called “Tornado Cash” under the US cyber sanctions regime. OFAC alleged that this entity, a decentralised cryptoassets tumbler, had laundered in excess of $7 billion of cryptoassets on behalf of cyber-criminals and a hacking group sponsored by the North Korean government. A cryptoassets tumbler, sometimes called a mixer, allows users to send cryptoassets to a wallet address, where they are pooled with those sent by other users, before withdrawing cryptoassets of equivalent value from a different wallet address, in order to make them harder to trace.

DeFi protocols work by using smart contracts – blockchain-based code that automatically executes when certain conditions are fulfilled. DeFi platforms often have a “frontend” – a website providing a user-friendly way to interact with the underlying protocol. Platforms usually also have a system of governance, often through allowing holders of “governance tokens” to vote on changes to the platform.

In the case of Tornado Cash, smart contracts automatically execute when one of its wallet addresses receives a deposit of cryptoassets from a user. No human intervention beyond that of the user is required in the process, which is executed automatically by code. Tornado Cash is governed through a decentralised autonomous organisation (DAO), members of which hold “TORN” tokens. Though the active smart contracts cannot be amended or revoked, the DAO votes on issues like whether new smart contracts should be released, and maintains a “frontend” website. When new smart contracts are released, the website replaces its links to the old contracts.


### The Legal Arguments

In making the designation, OFAC relied on provisions in the International Emergency Economic Powers Act (IEEPA), which authorises the US president, during a national emergency, to prohibit transfers or transactions, over which the US has jurisdiction, involving any foreign country or person, or their property. The US has used IEEPA to designate foreign cyber-criminals, the North Korean government and persons deemed to have given material assistance or provided financial or technological support to them.

___`OFAC argued that even token holders who do not participate in governance votes are part of the association, because the value of their tokens stands to increase if the platform prospers`___

The plaintiffs argued that Tornado Cash was not an “entity” so could not be designated, on the basis that there had been no agreement between its alleged members to cooperate and thereby form an “association”. (In legal terminology, the requirements for the formation of a specific type of entity called an unincorporated association had not been met.) The plaintiffs argued that ownership of a TORN token is insufficient to establish agreement, highlighting that many token holders do not actively participate in the governance of the platform.

In reply, OFAC argued that “association” should be given its ordinary meaning, and so all that is required for Tornado Cash to be an “association” is that it is an organised body of individuals that furthers a common purpose. No mutual agreement is necessary, and OFAC argued that Tornado Cash satisfied the test because its founders, developers and members of the DAO (individuals who own at least one TORN token) had all acted to achieve the common purpose of “operating, promoting, and updating” the Tornado Cash platform. OFAC further argued that even token holders who do not participate in governance votes are part of the association, because the value of their tokens stands to increase if the platform prospers.

The court found Tornado Cash to be an “association”, agreeing with OFAC’s broader definition. Drawing attention to the specific roles of the founders, developers and the DAO, the court highlighted that “utilising this structure, Tornado Cash has been able to place job advertisements, maintain a fund to compensate key contributors, and adopt a compensation structure for relayers, among other things.” However, the court went further, saying that the Tornado Cash DAO has “through its voting members ... demonstrated an agreement to a common purpose,” making the DAO is an unincorporated association.

The plaintiffs also argued that Tornado Cash is not an organisation but autonomous software which cannot be the property of the Tornado Cash entity, because no one can prevent others from using the smart contracts and at least some are unalterable. In response, OFAC argued that smart contracts are kind of legally recognised contract (specifically, a unilateral contract), and that such contracts can be a kind of property.

Again, the court agreed with OFAC. As Judge Pitman put it: “The fact that smart contracts [perform a task] without additional human intervention … or that they are immutable, does not affect its status as a type of contract and, thus a type of property ...” As the smart contracts “provide Tornado Cash with a means to control and use crypto assets” and generate fees for the DAO, the association had a property interest in them.


### Implications

The plaintiffs are likely to appeal the judgment to the Fifth Circuit Court of Appeals. However, it chimes with other rulings at the district court level, suggesting an emerging judicial consensus. For example, in February 2023, a federal district court in California ruled that Ooki DAO was an unincorporated association, as it “existed for the purpose of running a business, and specifically, to operate and monetise the Ooki Protocol”. Token holders were deemed to have agreed to participate by exercising their voting rights.

___`The ability to prohibit transactions involving smart contracts is also a valuable tool for OFAC, as it makes it harder for sanctions to be circumvented`___

The clearest implications, unsurprisingly, concern the US sanctions regime. Assuming that the judgment is affirmed and reflects the approach to be taken across the country, OFAC will be able to designate most if not all DAOs, as well as the relevant protocol’s founders and developers, without needing to show any agreement between them. All that must be shown is some common purpose, which will usually be an easy test to meet in this context.

The ability to prohibit transactions involving smart contracts is also a valuable tool for OFAC, as it makes it harder for sanctions to be circumvented. If wallet addresses and smart contracts are not the property of the designated entity, and so cannot be placed on the Specially Designated Nationals list, it could be possible to create a new “frontend” website to facilitate continued, lawful access to the smart contracts.

More broadly, if the exercise of DAO voting rights qualifies as an agreement to cooperate, it will be relatively easy for regulators and law enforcement to establish the existence of an unincorporated association. As the Ooki DAO case shows, this may be critical for establishing that an entity falls within scope of a particular law or regulation, even if this is not required under IEEPA.

Moreover, if smart contracts are the property of the DAO, they are essentially part of the DAO. This makes it easier to hold the DAO accountable for what the smart contract does – for example, if the DAO does not update the protocol to comply with AML regulations. The smart contract is effectively a service that the DAO provides, rather than something separate to which the DAO merely facilitates access.

With DeFi platforms the new frontier in crypto, the US courts have sent a signal that their founders, developers and DAO members cannot escape legal liability just because they are part of a decentralised structure. This signal, though unwelcome for some in the crypto industry, starts to close a potentially significant loophole that risked undercutting efforts to fight money laundering and other forms of illicit finance.

---

__James Gillespie__ is an Associate Fellow in the Centre for Financial Crime and Security Studies at RUSI, where his main research interests concern ransomware, illicit finance, and the use of sanctions in a cybersecurity context.
