---
layout: post
title : Misuse Of AI In Gaza
author: Noah Sylvia
date  : 2024-07-04 12:00:00 +0800
image : https://i.imgur.com/uqeUaIw.jpeg
#image_caption: ""
description: "The Israel Defense Forces’ Use of AI in Gaza: A Case of Misplaced Purpose"
excerpt_separator: <excerpt/>
---

_The evidence suggests that the Israeli military’s use of AI tools during the Gaza conflict has been more about speed than accuracy._

<excerpt/>

Nearly nine long months into Israel’s war on Gaza, few topics remain as controversial as Israel’s targeting mechanisms, especially the reported use of several AI systems in its processes. Following the initial reports on “Gospel”, I argued that such a model has a more limited role in the targeting cycle. However, later reporting on models like “Lavender” challenged many assumptions, and raised further concerns about AI in Israel Defense Forces’ (IDF) decision-making roles.

Unless the IDF permits full access to its systems, we cannot fully gauge the veracity of reported claims, including the +972 Mag’s reporting, the facts of which remain contentious. In light of continued disagreement on the actual capabilities and roles of these systems, it is crucial to understand the many considerations of the targeting process and the many points of failure inherent in such a cycle.

This is neither an evaluation of the IDF’s legal targeting standards, an assessment of its operational efficacy in achieving war aims, nor a simple criticism of the staggering human cost imposed by the IDF upon the Gazan population. Instead, this piece outlines broadly how targeting cycles operate, including the critical points where technology could limit or expand civilian deaths.

This article will focus on procedures surrounding air-based targeted killings and dynamic strikes, to differentiate from fire support for ground forces. While targeting shares many of its aspects across military branches, it should be noted that IDF procedures, including targeting, are believed to differ across sectors and commanders in Gaza.


### Intelligence Gathering and Processing

In Gaza, Israel maintains one of the densest intelligence networks of any modern conflict zone, which has been built up since its occupation of the Strip. Gazan militants lack any real air defences, permitting crewed and uncrewed aircraft (both Israeli and non-Israeli) to perform near-constant surveillance, producing droves of electronic and communication intelligence. Other forms of intelligence collection include imaging from satellites, ground troops relaying operational information, and a variety of intelligence from Western governments. Combined with Palestinian data archives from decades of surveillance, the IDF possesses as close to perfect intelligence as possible in a modern combat environment.

The sheer quantity of Israel’s intelligence could cripple its ability to translate data into actionable insights. Raw data from cameras, radar, phone data and other sensors must be sorted, cleaned and delegated to the appropriate places for “exploitation”. “Cleaning” this data manually would be impossible, so to minimise the number of human analysts and avoid fatigue-induced errors, AI is typically involved at this stage. Machine learning (ML) models can use pattern recognition to identify potentially relevant information from raw feeds, including persons or objects of interest, vehicle movements, or even rocket launches. The intel is typically translated into common formats which can be combined to present a holistic view of the battlespace for an analyst.

Assuming that the quantity of intelligence is positively correlated with accuracy and certainty in decision-making, an intelligence-sifting system which processes far greater quantities of data than a human analyst would reduce unintended casualties in the targeting cycle. However, this is only possible with a reliable system that avoids frequent false positives (hallucinations) while simultaneously not missing relevant intelligence (errors). The model would also likely exhibit the biases of the humans who created, trained and trialled the system, bottlenecking the intelligence that can be used at future stages.

___`Theoretically, the processing power of machine learning could empower analysts to make decisions with much higher accuracy, combining intelligence to provide a rigorous depiction of the potential target`___

Fine-tuning to avoid these inaccuracies would occur during the model’s training, but occasional mistakes are inevitable in any such system. Yet there has been no indication of processes to correct the model while in operational use (see below). Meanwhile, the +972 Mag’s reporting claims that Lavender’s apparent 10% misidentification rate is considered tolerable by the IDF.


### Intelligence Analysis

Once the cleaned data is aggregated, an analyst will search for actionable intelligence, either tracking previously banked targets or looking for specifically identifiable ones. Satellite images of weaponry/equipment, enemy faces in video feeds, and the location of specific radio signatures are all examples of intelligence that can lead to target creation.

Analysis models would parse the cleaned data to recognise specific identifiers comparable to the processing systems, albeit with greater specialisation. Analysis might involve several models, each focused on a certain type of analysis, such as spectrum analysis, face recognition, vehicle/weapon identification or voice recognition, while machine outputs could range from basic intelligence profiles to actionable targets.

Instead of a binary selection, models would provide a likelihood of positive identification, which could be summarised as “X model identified X militant with a certainty of X%”. ML excels at this form of probabilistic pattern recognition and could ideally make the targeting process more transparent and accurate. However, these benefits hinge solely on how a potential model is employed. Even if the certainty is outputted for analysts (a simple matter for a model), the analyst and commander must understand how and why the model produced both the target and the certainty. Unless the certainty is near 100% for a given target (and hopefully even then), positive identification should be corroborated by other intelligence mediums, such as phone signals or human intelligence.

Furthermore, the IDF likely has a threshold for determining whether a strike is warranted. With high-fidelity systems, a high threshold for identification would reduce the risk of civilian deaths due to target misidentification, while a low threshold could result in an effectively indiscriminate campaign against a population. This is arguably the point where human involvement is most important. Theoretically, the processing power of ML could empower analysts to make decisions with much higher accuracy, combining their various ML-enabled intelligence reports to provide a rigorous depiction of the potential target.

Investigative reporting has cast doubt upon the image of a human-centred targeting process. According to these claims, human involvement is only a cursory check, lasting under a minute. The reasons for such a hurried, shallow review are likely a mix of automation bias, pressure to create/approve quantities of targets, and old-fashioned analyst fatigue. Similar considerations around errors, hallucinations, data quality and bias from the “processing” stage also apply for machine analysis.

The IDF’s response claims that such a system is limited to intelligence management tools more akin to sophisticated intelligence-cleaning models, which output mere correlations in the data. Even if they are not using a target creation system (which would still reasonably fall under the category of “ecision support system”), analysts would need to understand how these tools autonomously collate intelligence on suspected militants, as well as the reliability of their correlational mechanisms. Still, the sheer number of targets struck by the IDF lends weight to the argument that humans are not fully creating, or at least thoroughly analysing, each target.


### Operational Planning

Upon the identification of a target, it is either added to a target bank to be monitored and struck at a later time, or sent up the chain of command for strike planning and approval. When choosing the most appropriate means for a strike, timing and location selections require the balancing of target vulnerability with risk to families or bystanders. Delivery platforms comprise crewed and uncrewed aircraft launching air-to-ground munitions, although planners would ideally choose from a variety of means, including ground-based fires or pinpoint raids using small arms. Acceptable limits on these factors are predefined as rules of engagement (ROE) for a specific operation or set of operations.

These ROE are often less stringent for dynamic strikes against targets of opportunity – typically those presenting an imminent threat and/or a limited window of opportunity. These strikes are not preplanned and are instead identified and struck in real time, reducing the time for collateral death estimates (CDE). The IDF apparently began shifting towards more dynamic strikes as it exhausted its previously banked targets.

When responding to criticism over civilian deaths from strikes, the IDF typically cites the use of “precision munitions”. However, precision does not equate to discrimination. A munition’s precision is simply its likelihood of hitting its intended target, so a precision munition is a guided bomb, rocket or shell with a high likelihood of striking its target. The controversial 2,000 GBU-31 bombs are precise when outfitted with the JDAM guidance kit, with the decrease in required munitions translating to less destruction, but this does not mean that strikes are discriminate. A discriminate strike is one that only hits the intended target. While it is extraordinarily difficult to conduct a strike in an urban environment with a 0% chance of collateral damage, the choice of a GBU-31 (or even the 1,000 lb GBU-32 or various 500 lb bombs) indicates intentional indiscrimination – the 900 kg munition has a lethal radius of hundreds of metres, and can create a crater several metres deep.

Munition selection also depends on the availability of different munitions. Despite their greater payload and therefore less discriminate nature, large, air-dropped munitions are typically the first choice of munition due to their price point.

Key to understanding the IDF’s operational planning is the value it places upon the lives of its soldiers relative to Palestinian civilians. Especially compared to US and allied militaries, the IDF appears to be willing to inflict immense cost upon civilians to reduce the risk to its soldiers. The preference for air strikes over ground, even at the risk of increased collateral damage, is driven by decades of Palestinian dehumanisation, combined with intense domestic pressure to protect Israel’s conscripted population.

It remains unknown whether the IDF’s ML systems are used during the operational planning stage or during dynamic targeting. In theory, systems could incorporate ROE to predict a strike’s impact for an analyst, akin to the reporting on Lavender and “Fire Factory”. The IDF also claim that the models generate CDE, the accuracy of which – given the sophistication of Israeli intelligence – there is no reason to doubt, regardless of whether it is generated by a human expert or a machine.

Ideally, a model for operational planning would provide the user with the ability to visualise the civilian impact of different munition and location choices faster than humanly possible, which – when combined with proper Law of Armed Conflict (LOAC) adherence – would lower civilian deaths or cause the cancellation of a strike altogether. In this manner, the model would not be treated as a replacement for a human analyst, but as an operational planning tool.


### Legal Considerations and Commander Approval

This piece seeks to sidestep the many legal debates about both Israel’s right to respond militarily and its wider conduct in the war, instead focusing on the considerations surrounding a single strike. During the operational planning and command approval stages, legal considerations about a strike determine compliance with LOAC. The legality of any individual strike (given jus ad bellum) rests mainly on the concept of proportionality. Given proportionality’s subjective nature, the legality of killing civilians remains a contested concept in LOAC, demonstrating the tension between legality and morality.

Besides proportionality, an attacker must undertake “feasible measures to minimise harm to civilians” when undertaking strikes against enemy targets. Historically, the IDF often undertook several types of warnings prior to its strikes to get civilians out of harm’s way. Even besides the mixed success of these measures, they cannot obfuscate the high rate of civilian deaths per strike compared to other conflicts. This highlights the lack of numerous other feasible precautions, such as the operational considerations in munition selection and timing discussed above.

___`In the case of the IDF, it seems clear that it has used AI systems not to refine targeting, but to expand and expedite its target cycle`___

Every state – including the “most moral army in the world” – must abide by LOAC, regardless of an enemy’s violations of international law. Additionally, the embedding of an insurgent force within a population is not a new phenomenon and does not absolve the IDF of its LOAC commitments. The presence of human shields or hostages does not change the fact that these are civilians, who must be treated as such.

It remains unclear how Israel applies these legal considerations in its targeting cycle. Traditionally, a legal advisor (a Military Advocate General’s Corps officer [MAG] in the IDF) is consulted during operational planning, but given the sheer quantity of airstrikes conducted – especially at the beginning of the war – the likelihood that a judge advocate rigorously examined every single strike is low. Consequently, “legal advising” might merely comprise checking “yes” or “no” to decide whether the predicted deaths are consistent with “acceptable” rates.

The claim in the +972 Mag’s reporting thus begins to look more likely, with commanders relying on a “predetermined and fixed collateral damage degree” rather than in-depth proportionality assessments for each strike. These are values given to commanders indicating the maximum “acceptable” number of civilians who can be killed as collateral in a strike. A commander can exceed this number for a high-value target only with approval from higher levels of command. The number differs depending on the target; for example, it is allegedly 15–20 civilians per “low-ranking militant” and over 100 civilians for a more senior commander. The use of a discrete value has precedent, such as the US’s “non-combatant casualty cut-off value” in Iraq and Afghanistan, although it remains controversial due to the subjective valuation of some lives over others and the high discrepancy between the number of civilian deaths considered tolerable by Western militaries and the IDF.

Besides the questions about if and how models generate collateral estimates, all other responsibility at this stage rests on human actors. Any programming of LOAC into the models is unlikely due both to the complex, often abstract reasoning required as well as the continued misgivings about military AI from the legal community. Instead, a commander must understand the logic and evidence behind any strike recommendations, regardless of whether they are created by an analyst or model.


### Post-Operation Assessment

Any strike or operation requires a post-mortem to understand what went right and what went wrong. Battle damage assessments determine whether the strike was successful at eliminating the target, while analysts conduct collateral damage assessments to ensure greater civilian protection in future strikes (assuming they are directed at only ostensibly military targets). Autonomous models could perform some of these tasks, parsing intelligence about the strike to provide insights to commanders and analysts. These insights, whether produced by man or machine, should then be fed into models at the “processing” and “analysis” stages of the cycle, creating a feedback loop. Absent this “on-the-job-training”, not only will a model never improve beyond its starting capability, with its biases and errors repeated ad infinitum, but it could potentially worsen as model drift increases.

Unfortunately, there has been no indication that the IDF has been attempting to learn lessons from its strikes. It is fairly easy to verify deaths from specific strikes using reports from journalists in Gaza and the Ministry of Heath, not to mention the IDF’s continuous surveillance of the besieged territory. With the continued large-scale killing of innocents, one may be forgiven for assuming that either the IDF does not recognise these deaths as errors, or it is simply indifferent. The +972 Mag’s report even claims that damage assessments were abolished for junior militants. Although the rate of civilian deaths during the war has slowed relative to the first months of the war, this has been mainly as a result of international pressure, rather than humanitarian concern from the IDF. Any desire to review procedures only appears when the Israeli government faces a heavy backlash from its dwindling number of allies.


### Conclusion

The use of AI in the targeting process is not inherently inhumane, but this depends entirely on how models are trained, tested and employed. In the case of the IDF, it seems clear that it has used systems not to refine targeting, but to expand and expedite its target cycle.

If true, this would indicate, at best, a carelessness and recklessness from the IDF, placing speed of target generation above discrimination and the preservation of civilian life. At worst, such a target selection process constitutes a systematic devaluation of Palestinian lives, which could be reasonably considered collective punishment. Ultimately, while technology can change the speed or scale of military action, any accuracy or discrimination failures in the targeting cycle must be blamed solely on human choices.

---

__Noah Sylvia__ is a Research Analyst for C4ISR, especially its intersection with Emerging Technology, on the Military Sciences team at RUSI.
