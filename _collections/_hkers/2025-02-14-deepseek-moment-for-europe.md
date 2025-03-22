---
layout: post
title : DeepSeek Moment For Europe
author: Laura Carolii
date  : 2025-02-14 12:00:00 +0800
image : https://i.imgur.com/nW3sSOd.jpeg
#image_caption: ""
description: "DeepSeek: A Problem or an Opportunity for Europe?"
excerpt_separator: <excerpt/>
---

_Is DeepSeek a game-changer or a threat to Europe’s AI ambitions? As China pushes forward with its latest LLM, Europe faces tough questions on innovation, competition, and digital sovereignty._

<excerpt/>

### Introduction

On January 20, 2025, Chinese AI company DeepSeek released its R1 reasoning model, causing U.S. policymakers and technologists to dramatically reevaluate their assumptions about the state of the Chinese AI ecosystem. President Donald Trump noted, “The release . . . should be a wake-up call for our industries that we need to be laser-focused on competing to win, because we have the greatest scientists in the world.”

R1, and the DeepSeek V3 model it was based on, demonstrates an innovative approach to AI model development in several important ways, primarily in cost and compute efficiency. This did not come without controversies. White House AI Czar David Sacks said there is “substantial evidence” that DeepSeek distilled knowledge out of OpenAI’s models. Meanwhile, OpenAI alleged that DeepSeek’s use of data distilled from OpenAI’s models in training R1 broke OpenAI’s terms of service.

The controversy was not limited to the United States, however. European regulators have greeted DeepSeek’s rise with concern, even as leading European AI companies have expressed excitement.


### Positive News for European Startups . . .

European startups have hailed R1 as a major advancement and opportunity, as it hints at the possibility for EU startups to successfully compete despite disadvantages (compared with U.S. firms), such as the lack of capital and limited access to large-scale compute infrastructure. French AI champion Mistral AI has been particularly enthusiastic about R1’s release, claiming that it proves the viability of an emerging wave of mini-language models (using far fewer parameters and running on far less compute).

On January 30, Mistral announced its latest AI model, praising R1 in the press release as a “a great and complementary piece of open-source technology!” Mistral’s CEO Arthur Mensch went even further in an interview on February 10, calling DeepSeek “a player that is very similar to us” and saying it is “China’s Mistral.” Companies do not normally compliment their ostensible competitors when announcing new products. That Mistral chose to do so highlights just how much they believe DeepSeek has changed the game, even though in the same interview Mensch also stated that DeepSeek “made extensive use of the technologies we made available in 2023.” The German AI champion, Aleph Alpha, already dropped out of the model-developing race a while ago, but it quickly began offering DeepSeek models as part of its portfolio of business-focused AI services. Whereas Mistral evidently sought to ride the DeepSeek hype wave, even claiming its innovations originate from Mistral’s ones, Aleph Alpha saw DeepSeek as a technology enabler. Even as recently as a month ago, few would have expected EU firms to talk about Chinese AI model developers in such terms.


### . . . But Cause for Concern Among European Regulators

European regulators disagree. DeepSeek made itself freely available both to download and to use as an online app in the European marketplace. For an AI model, this is not inherently problematic, but there are specific features of DeepSeek’s models that likely run afoul of EU regulations, in particular with the General Data Protection Regulation (GDPR), the key law covering privacy in Europe, and the EU AI Act, which covers AI safety and security issues.


### Privacy Concerns

R1’s privacy policy is clearly not compliant with GDPR. It is not by chance that several national data protection authorities (like those of Belgium, France, Germany, Ireland, Italy, and the Netherlands) immediately sent official requests for information to DeepSeek. Italy went even further, blocking access to the app only days after it came out. Italian privacy authorities judged the information DeepSeek submitted to be “totally insufficient.”

Indeed, DeepSeek’s privacy policy openly states that users’ data will be stored in the People’s Republic of China (PRC), fails to even mention GDPR, and states that the jurisdiction for personal data processing is the PRC. Each of these elements can be construed as in breach of the European Union’s strict data protection rules, given the model is made widely accessible in the European Union. Humorously, when prompted to assess its own privacy policy for GDPR compliance, the R1 model stated flatly that it had several gaps (see Figure 1).

![image01](https://i.imgur.com/IqWDpu5.png)
_▲ __Figure 1: DeepSeek’s Response to a User Question About GDPR Compliance.__ Source: [Michaël Van den Poel, LinkedIn post](https://www.linkedin.com/posts/michael-van-den-poel_talk-of-the-brussels-town-today-deepseek-activity-7290006543016558593-A-bK?utm_source=share&utm_medium=member_desktop)._

These gaps, if not addressed, could very well lead to a broader restriction of DeepSeek across Europe in the near future. Such a restriction would presumably apply regardless of who is providing access to DeepSeek’s model. For example, Microsoft, which has begun offering access to DeepSeek in its Azure cloud environment, will likely be affected.


### Safety and Security Concerns

GDPR is already having an impact on DeepSeek, but whether the EU AI Act will do the same remains unclear.

Early red-teaming tests performed on R1 by Enkrypt AI, an American AI firm focused on AI security and compliance, suggest that the model lacks even basic safety and security measures and is prone to generate biased, violent, and abusive content, as well as insecure code. In particular, Enkrypt found that DeepSeek R1 is 11 times more vulnerable to producing harmful content and 4.5 times more vulnerable to generating insecure code than OpenAI’s o1. Similar results were confirmed by other testers, including Adversa and Cisco.

Against this background, European officials told CSIS that regulators are concerned that the success of DeepSeek could create a race to the bottom by incentivizing companies to cut corners on basic safety and security guardrails in order to release similar “mini-models” as fast as possible. An additional source of concern is the possibility that the Chinese government might leverage R1 for surveillance or military applications.

The EU AI Act will apply to general-purpose AI (GPAI) models beginning in August 2025. By that time, all GPAI models placed on the EU market will have to:

- draw up detailed technical documentation,

- put in place a copyright policy, and

- publish a sufficiently detailed summary of copyrighted content used to train the model.

Models released under an open-source license will escape the technical documentation obligations, but not the copyright ones. Whether or not R1 would legally qualify as an open-source model will be discussed later in this article.

In addition, models reaching the threshold of 10<sup>25</sup> floating point operations (FLOPs) (whether open source or not) will have to comply with further obligations, namely:

- model evaluation,

- risk assessment and mitigation,

- incident reporting, and

- cybersecurity measures.

Whether or not these rules will apply to models such as R1 remains to be seen and is likely to become one of the first key interpretative decisions of the European Union’s AI Office regarding the act’s implementation.


### Is DeepSeek R1 Considered Open Source Under the EU AI Act?

Since the EU AI Act exempts open-source model providers from transparency obligations, it is important to assess whether or not DeepSeek R1 can be considered open source within the meaning of the regulation.

The text of the act does not contain a definition of open source. It merely states that providers will enjoy different and reduced regulatory obligations if their AI models “are released under a free and open-source licence that allows for the access, usage, modification, and distribution of the model, and whose parameters, including the weights, the information on the model architecture, and the information on model usage, are made publicly available.”

Judging from the license and the information DeepSeek has made available, these criteria all seem to be met. However, while the above is the formal law statement on what constitutes open-source AI, the AI Act includes additional text, called recitals, which do not have the same legal standing as the law’s articles but are critical clarifying statements of how the law will be implemented. The relevant recital on what qualifies as open source states that

> For the purposes of this Regulation, AI components that are provided against a price or otherwise monetised, including through the provision of technical support . . . or the use of personal data for reasons other than exclusively for improving the security, compatibility or interoperability of the software . . . should not benefit from the exceptions provided to free and open-source AI components.

The non-monetization element is the one that appears to be missing in the case of DeepSeek, in particular because of the use of personal data. As explained above, DeepSeek’s privacy policy is problematic under GDPR. In DeepSeek’s policy, in the section “How We Use Your Information,” the last point states that DeepSeek will use the personal data to “comply with our legal obligations, or as necessary to perform tasks in the public interest, or to protect the vital interests of our users and other people.”

Without even going into details on what complying with legal obligations or performing tasks in the public interest could mean for a Chinese company, this point alone seems to go beyond using personal data exclusively for improving the security, compatibility, or interoperability of the software. Therefore, depending on how much weight the AI Office will give to elements written in the explanatory recitals of the regulation (that are not directly enforceable), it is also possible that DeepSeek will not be considered as meeting the open-source criteria.


### Does R1’s Use of Distillation Techniques Fall Under the EU AI Act’s Measures Around “Fine-Tuning?”

The crux of the whole question revolves around the problem of defining what R1, which DeepSeek serves through its app and other channels, actually is. As mentioned above, OpenAI and prominent White House representatives have alleged that DeepSeek likely employed distillation of OpenAI models to help achieve R1’s impressive results. In the words of Microsoft engineers Vishal Yadav and Nikhil Pandey, distillation is

> a technique designed to transfer knowledge of a large pre-trained model (the “teacher”) into a smaller model (the “student”), enabling the student model to achieve comparable performance to the teacher model. This technique allows users to leverage the high quality of larger LLMs, while reducing inference costs in a production environment, thanks to the smaller student model.

At the same time, researchers analyzing R1 seem to indicate that the concept of distillation does not exactly apply in this case, or applies only in part. Indeed, R1 is the result of pure reinforcement learning applied to an already capable model (in this case, DeepSeek’s V3) combined with further training stages using different methods to refine the model and make it more readable.

The AI Office is working on guidelines around the issue of fine-tuning to clarify how the AI Act’s provisions can apply to downstream model providers. The direction of these guidelines will determine the different scenarios that are further explored in this article and depicted in Figure 2.

![image02](https://i.imgur.com/SWr9Nrm.png)
_▲ __Figure 2: Key Legal Questions for DeepSeek’s R1 Under the EU AI Act.__ Source: Author’s analysis._

European Parliament and European Council sources told CSIS that when writing the AI Act, their intention was that fine-tuning a model would not immediately trigger regulatory obligations. Indeed, the rules for GPAI models are intended to ideally apply only to the upstream model, the baseline one from which all the different applications in the AI value chain originate.

What the AI Act would trigger for fine-tuning are mere “value-chain” provisions. That is, the fine-tuner just needs to augment the information already provided by the upstream model provider with any changes made. As an example, if a law firm fine-tunes GPT-4 by training it with thousands of case laws and legal briefs to build its own specialized “lawyer-friendly” application, it would not need to draw up a whole set of detailed technical documentation, its own copyright policy, and a summary of copyrighted data. Instead, the law firm in question would only need to indicate on the existing documentation the process it used to fine-tune GPT-4 and the datasets it used (in this example, the one containing the thousands of case laws and legal briefs).

#### Step 1: Does R1 Amount to Fine-Tuning?

If the AI Office confirms that distillation is a form of fine-tuning, especially if the AI Office concludes that R1’s other various training techniques all fall within the realm of “fine-tuning,” then DeepSeek would only have to complete the information to pass along the value chain, just as the law firm did. The information and research papers that DeepSeek released already seem to comply with this measure (though the data would be incomplete if OpenAI’s claims are true).

Conversely, if the guidelines indicate that the combination of distillation and the other refining techniques used for R1 are so sophisticated that they created a new model in its own right, then the provisions of the AI Act for GPAI models will apply to it starting August 2, 2025. To be more precise, the AI Act states that GPAI models already placed on the market before that date must “take the necessary steps in order to comply with the obligations by 2 August 2027,” or in two years.

#### Step 2: If R1 Is a New Model, Can It Be Designated as a GPAI Model with Systemic Risk?

At this point, EU regulators will have to take another step to decide exactly what provisions R1 should comply with. Since R1’s size is well below the EU AI Act threshold of 10<sup>25</sup> FLOPs, they could conclude that DeepSeek need only comply with baseline provisions for all GPAI models, that is, technical documentation and copyright provisions (see above). If DeepSeek’s models are considered open source through the interpretation described above, the regulators could conclude that it would largely be exempted from most of these measures, except for the copyright ones. As explained above, this remains to be clarified.

In any case, there is still a possibility that the AI Office designates R1 as a GPAI model with systemic risk even though it sits well below the 10<sup>25</sup> FLOPs threshold that would normally trigger the designation. The AI Act indeed foresees the possibility of a GPAI model below that compute threshold to be designated as a model with systemic risk anyway, in presence of a combination of other criteria (e.g., number of parameters, size of the data set, and number of registered business users).

If this designation occurs, then DeepSeek would have to put in place adequate model evaluation, risk assessment, and mitigation measures, as well as cybersecurity measures. It could not escape these through the open-source exemption, as this does not apply to models with systemic risk. Failure to comply would likely result in fines up to 3 percent of DeepSeek’s annual turnover (a figure that is usually similar to annual revenue) or being restricted from the EU single market.

The operationalization of the rules on GPAI models is currently being drafted within the so-called Code of Practice. Because DeepSeek is not a participant to the drafting of the code, U.S. AI companies have a great opportunity to continue to constructively engage in the drafting process, as doing so will allow them to shape the rules that DeepSeek will have to follow a few months from now.


### DeepSeek: New Concern or Opportunity for Europe? The Different Scenarios

The AI Office will have to tread very carefully with the fine-tuning guidelines and the possible designation of DeepSeek R1 as a GPAI model with systemic risk. On the one hand, DeepSeek and its further replications or similar mini-models have shown European companies that it is entirely possible to compete with, and possibly outperform, the most advanced large-scale models using much less compute and at a fraction of the cost. This could open a whole new array of attractive opportunities. The AI Office will need to navigate the trade-off between securing robust guardrails and the need to boost the lagging European AI ecosystem.

#### Scenario 1: R1 Is Considered Mere Fine-Tuning.

If, as described above, R1 is considered fine-tuning, European companies reproducing similar models with similar techniques will virtually escape almost all AI Act provisions. This could potentially open the way to hundreds of startups quickly becoming competitive with U.S. giants such as OpenAI, Meta, and Anthropic, which will instead have to comply with the highest tier of GPAI obligations.

At the same time, DeepSeek’s R1 and similar models across the world will themselves escape the rules, with only GDPR left to protect EU citizens from harmful practices. Nevertheless, GDPR might by itself result in an EU-wide restriction of access to R1. This would provide EU companies with even more space to compete, as they are better suited to navigate the bloc’s privacy and security rules.

This overall scenario could sit well with the clear shift in focus toward competitiveness under the new EU legislative term, which runs from 2024 to 2029. The European Commission released a Competitiveness Compass on January 29, a roadmap detailing its approach to innovation. The document foresees a key role for AI in boosting the European Union’s industry, and it lists several upcoming policy and legislative initiatives in this regard. In the words of EU Commissioner for Tech Sovereignty Henna Virkkunen, “the EU must become a true AI continent.” This scenario is therefore possibly the most desirable for EU companies, though perhaps the least desirable for U.S. ones.

#### Scenario 2: R1 Is Considered to Be a GPAI Model.

If R1 is considered to be a GPAI model in its own right (triggering the basic tier of obligations), and possibly a GPAI model with systemic risk, it will have to comply with the highest set of requirements of the AI Act for GPAI models. Similar models can still flourish in Europe, but they will also have to follow the AI Act’s rules, at the very least on transparency and copyright. Furthermore, if R1 is designated as a model with systemic risk, the possibility to replicate similar results in multiple new models in Europe could result in a flourishing of models with systemic risk. This scenario was not foreseen by the European co-legislators when the AI Act was negotiated, as the assumption always was that the top-tier would only be represented by a handful of providers.

In any case, this scenario would possibly be the most beneficial for U.S. companies, which would still be competitive and be on a level-playing field with both DeepSeek’s R1 and EU companies. They would also have the additional advantage of participating in the ongoing drafting of the Code of Practice detailing how to comply with the AI Act’s requirements for models. The European Union’s Mistral AI would similarly benefit from a first-mover advantage, but not the many EU startups that could further build on these innovations, as they are mainly not directly part to the process.


### Conclusion

The novelty introduced by R1 creates both new concerns and incredible opportunities for Europe in the AI space. While it is unclear yet whether and to what extent the EU AI Act will apply to it, it still poses a lot of privacy, safety, and security concerns.

To mitigate the safety and security issues, Europe’s best option is to designate R1 as a GPAI model in its own right, as described above in Scenario 2. This would ensure that similar mini-models that employ different refining techniques could also fall within the AI Act’s rules, at the very least on transparency and copyright. European companies already have to comply with the GDPR and usually integrate responsible AI governance practices and safety measures in their AI products. Complying with transparency and copyright rules should not pose too big of an additional hurdle for them. The cost and compute efficiencies that R1 has shown present opportunities for European AI companies to be much more competitive than seemed possible a year ago, perhaps even more competitive than R1 itself in the EU market. EU models might indeed be not only as efficient and accurate as R1, but also more trusted by consumers on issues of privacy, safety, and security. This might be the best of both worlds, but European officials and companies will have to navigate a complex road ahead.

---

__Laura Caroli__ is a senior fellow of the Wadhwani AI Center at the Center for Strategic and International Studies in Washington, D.C._
