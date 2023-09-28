---
layout: post
title : Adversarial AI
author: Patrick Hinton
date  : 2023-09-04 12:00:00 +0800
image : https://i.imgur.com/qlZXT56.jpg
#image_caption: ""
description: "Coming of age or overhyped?"
excerpt_separator: <excerpt/>
---

_This article explores developments in adversarial artificial intelligence (AAI) and machine learning, examining recent research, practical realities for the deployment of adversarial attacks, and the pursuit of secure and robust AI._

<excerpt/>

#### Invisible to the digital eye

In an underground command centre, an intelligence analyst sits at a computer terminal. The analyst is presented with a series of aerial photographs taken by uncrewed air systems and satellites of potential targets – ammunition dumps, vehicle parks, and defensive positions. Due to the huge volume of imagery and videos being produced by the suite of aerial sensors, target recognition software sifts through the millions of frames searching for objects of potential interest. The software has been trained to identify armoured vehicles, aircraft, and command posts. The analyst then works through the pile of indications and passes them to targeting specialists to decide on further action. However, the software fails to flag a squadron of enemy fighter aircraft sitting on a rural airfield, which continue to target friendly troops and destroy vehicles and equipment. Coloured patches designed to trick target recognition software and present false negatives have been attached to the jets. Consequently, they are not flagged to the analyst and remain hidden among the noise of the gigabytes of aerial footage. This is one potential threat which is raised by the spectre of adversarial AI.

AI systems are becoming increasingly critical assets in commerce, transportation, and the military. As the role of military AI increases to manage ever-growing volumes of data, a potential vulnerability presents itself. Instead of targeting physical infrastructure with missiles and bombs, it is possible to attack the algorithms, machine learning models and networks which support the military decision-making process.


### AI security concerns

Adversarial attacks are a class of techniques that analyse the parameters of a machine learning model (such as a neural network) to calculate a series of changes to an input that causes a misclassification.

In other words, they are attacks which are designed to lead the model to make a mistake. Some have argued that the secret to winning the AI war might rest not in making the most impressive weapons but in “mastering the disquieting treachery of the software.” The proliferation of defence and security AI use cases has garnered much more attention than the potential vulnerabilities in the software. Developers are prioritising getting their AI systems to work in the first place, with security and adversarial activity taking a back seat. This is not an advisable strategy.

Adversarial AI was first discussed and identified as a threat in 2004. At this time, the focus was not on the defence or security realm, but the more innocuous subject of email spam. In this case, a machine learning algorithm was pitted against a spam filter and was able to learn how to write spam emails which would get through the filter by using identified “good words.”

The first conference on AI security followed in 2007. There was a dearth of activity between 2008 and 2014 with a spike of research papers published on the subject, ostensibly because of the first successful attacks on deep learning algorithms. Since 2015, research into adversarial AI has risen substantially, with more than 1000 papers published in 2019 and more than 1500 published in 2020. Multiple papers are being published almost every day on the subject.

In the worst cases, AI systems may be tricked into targeting the wrong people, or causing uncrewed systems to malfunction and stop dead in their tracks. More widely, artificial intelligence is being used for administrative and organisational tasks within the national security apparatus as well as in cyber security. These are all areas where if a machine learning model learns the wrong thing, does the wrong thing, or reveals the wrong thing, there may be very damaging consequences.


### Attack vectors

AI systems that process images are the most commonly attacked, although others such as speech recognition, malware detection, and sentiment analysis have also been victim.

There are several ways machine learning models can be attacked. These attacks may be designed with intimate knowledge of a system, which are known as white-box attacks. Attacks designed without knowledge of the internal workings of the systems are black-box attacks.

#### Poisoning

Poisoning attacks see intentionally malicious training data fed into machine learning models ahead of deployment. Only a very small amount of data needs to be affected to influence the whole model, making this a significant threat. An example of poisoning would be mislabelling a series of harmful images as benign whilst adding a physical identifier such as a small red square in one corner.The model then learns that images with a red square are safe, and they will make it through the filter even if they are not safe.

#### Evasion

Evasion attacks are similar to poisoning attacks but take place after deployment at test time. Neural networks have been shown time and again to be easily fooled by changes to images that are often imperceptible to the human eye, but will mean that the AI system classifies objects incorrectly. This may be changing a few pixels in an image resulting in a system classifying a cat as a dog. In a defence context, an armoured vehicle being classified as a civilian car, or vice versa, may have catastrophic ramifications if a targeting decision is made without meaningful human input. Another well-known example is researchers at McAfee putting a small sticker on a 35mph speed limit sign which tricked a Tesla into believing the limit was 85mph and accelerating to 50mph above the speed limit. A similar experiment where two bits of tape were put onto a stop sign led the autonomous driving software to read it as a 45mph road sign instead.

#### Extraction and inference attacks

Extraction attacks seek to replicate a machine learning model by feeding it inputs and logging the outputs. In other words, malicious queries will be used to expose details of the model’s internal details. Attackers may be targeting the model itself, or the data on which it has been trained – allowing sensitive information to be extracted. In the case of businesses this may be proprietary information and in the security sphere, it may be classified or otherwise sensitive information. Successful extraction attacks may then lead to carefully crafted evasion attacks, moving from a black box to a white box scenario.


### How worried should we be?

There has been increasing focus on the subject of adversarial AI with many publications highlighting particular vulnerabilities with machine vision, large language models, and neural networks.

However, the move from laboratory setting to deploying AAI in the real world (especially a battlefield) is very difficult. Most research to date on the topic of adversarial camouflage, such as the colourful patches mentioned in the introductory vignette, has taken place in a sterile environment. AI has been fed static images with the patches pasted on top – they have not been placed on real aircraft and tested, as the authors themselves admit. Patches would need to be effective whilst the airborne sensor flies all the way over, which means it gets a view of the target at numerous angles.

Real world research has been more problematic, for both “friendly” and “enemy” forces. Some image recognition models failed when presented with a desert environment. Equally, the altitude and standoff distance of the sensor and the size of the target vehicle in the camera’s aperture also affected how effective adversarial patches were. One experiment found that even with adversarial patches woven into camouflage paint, AI models would be able to correctly identify a mobile vehicle every 3.3 seconds in full-motion video, enough to track it accurately. Indeed, the same research concluded that the adversary would need to print or paint adversarial patches the size of football fields to be truly deceptive, which limits the tactic to stationary high-value targets.

Models can be tricked by feeding them minutely perturbed static images and audio, but this becomes much more difficult in the real world where changing perspectives and different types of noise make it difficult to keep up a ruse. It is not practical for an adversary to inject noise directly into a sensor. Indeed, adversarial attacks appear to be much more suited to disguising a static object, rather than one that is moving, like a person.

The development of adversarial examples requires overcoming several other challenges. There is difficulty in developing a generalisable model that will work on numerous vectors. It is not economical to make bespoke solutions every single time, unless a target is particularly valuable. Controlling the size of perturbations can be difficult as it is not known how large the aperture is. If the perturbation is too small it will not work, and if it is too large it may get spotted. Nevertheless, these adversarial examples could present a significant vulnerability to future AI systems.


### Lack of focus and regulation

AI developers are striving to get their models to simply work, with little consideration for the robustness of the model.

Moreover, there are no agreed standards for the robustness or security of machine learning models. There are several private endeavours such as the Microsoft and Mitre Adversarial ML Threat Matrix and the “Cleverhans” Python library on GitHub used to benchmark the robustness of ML models.

Looking to the future, agreed standards and regulations for AI security will help shape the research field, allow best practices to be shared, and give users peace of mind and trust in the systems. The UK Government’s AI White Paper notes the importance of systems functioning in a robust and secure way throughout their lifecycle. The International Organisation for Standardisation is also developing a series of standards for the safety, transparency, and robustness of ML models. The UK’s National Cyber Security Centre has also published guidance on the security of ML, offering a number of principles for practitioners, decision makers and IT security professionals. In the US, the Defense Advanced Research Projects Agency (DARPA) created the Guaranteeing AI Robustness against Deception (GARD) programme which aims to create broad-based defences that work against numerous attack vectors. Previous defences were designed for specific, pre-defined attacks which limits their efficacy.


### What can be done?

How might governments and militaries look to prevent adversarial attacks and mitigate their effects should they take place?

In traditional cybersecurity, vulnerabilities can be patched and continue to be used by customers. This approach does not work for machine learning models. If a model is poisoned, it will have to be retrained from an earlier untainted version which can be very costly. Equally, hosting the model on an encrypted cloud is no use if the model has been poisoned during development.

Adversarial robustness is the term used to describe a model’s ability to resist being tricked or exploited. When models move from using training data to new data, the model’s performance can change. As such, exposing models to adversarial examples when they are being developed can allow them to be strengthened against such attacks. One difficulty is trying to conceive of every different type of attack. AI models are coded by humans who define their parameters. If the attack is something that has not been foreseen, the ML model will struggle to reconcile this with what it knows.

Training data might also be sanitised. Ensuring that the collection and labelling of data is thorough and accurate is a way to prevent the insertion of poisoned data. However, many larger models rely on massive scale data scraping from the internet. Ensuring that models contain no bad data is a huge ask and may undermine the point of training the model in the first place if it becomes a very human-centric and analogue endeavour. In some cases, another AI system might be used as a filter. Moreover, extensive testing on a series of discrete datasets can help make a model more robust.

The resource cost of attacks should also be considered. A white box attack is less costly for an adversary than a black box attack. Without prior knowledge of the system, an adversary must develop its own version of the model which takes time, effort, and money. Time conducting reconnaissance on another party’s model also increases the chance of such efforts being noticed, which will cause a defensive reaction. However, it is likely that the adversary will be part way between the two. There is value in trying to make attacks uneconomical to the adversary, by denying them information about systems. Actively looking for adversarial attacks by monitoring models for failure patterns can also be a productive route.

Importantly, research has found that there is no defence that cannot be overcome by a specialised attack. The field is moving quickly so keeping abreast of developments is important and will give situational awareness to developers and users. However, adversarial attacks are inherently brittle and appropriate pre-processing and well-designed models can effectively mitigate most effects. A growing library of resources to counter adversarial attacks can be found on GitHub. The Alan Turing Institute has also published guidance on responsible design for AI systems in the public sector which remains relevant.


### Moving forward

There is still time to address the risks posed by adversarial AI. As is often the case, most progress is being made in the private sector, but it is government who will need to legislate or mandate appropriate standards – in close partnership with industry and academia. Defence and security professionals should be alive to the threats posed by adversarial AI, and the responsibility of mitigating those risks should not rest with developers alone.

---

__Patrick Hinton__ was the Chief of the General Staff’s Visiting Fellow in the Military Sciences Research Group at RUSI until the end of August 2023. He is a serving regular officer in the British Army’s Royal Artillery. He has experience working with ground based air defence systems and remotely piloted air systems. He has also worked in the personnel space. Since joining the Army in 2014, his career has consisted of a number of appointments at regimental duty including Troop Command, Executive Officer, and Adjutant.
