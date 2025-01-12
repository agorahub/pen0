---
layout: post
title : Updated Export Controls
author: Gregory C. Allen
date  : 2024-12-11 12:00:00 +0800
image : https://i.imgur.com/lNacFYV.jpeg
#image_caption: ""
description: "Understanding the Biden Administration’s Updated Export Controls"
excerpt_separator: <excerpt/>
---

_On December 2, 2024, the Biden administration updated the AI and semiconductor export controls._ <excerpt/> _As with the first Trump administration—which made major changes to semiconductor export control policy during its final months in office—these late-term Biden export controls are a bombshell._

At a high level, the new controls take eight major actions:

1. Expanding country-wide chip-level export controls to restrict High-Bandwidth Memory (HBM), a type of memory that is critical for AI applications;

2. Updating the list of advanced semiconductor manufacturing equipment (SME) that is restricted on a country-wide basis to include additional equipment for producing HBM, DRAM, and advanced packaging;

3. Updating the list of SME that is restricted on an end-use and end-user basis to include additional chokepoint technologies;

4. Dramatically expanding the scope of applicability of the Foreign Direct Product Rule (FDPR) on exports of both chips and SME;

5. Offering exemptions and incentives to reward countries such as Japan and the Netherlands that adopt domestic export controls aligned with U.S. policy and goals;

6. Adding new red-flag guidance to require more stringent due diligence on the part of exporters;

7. Adding 140 Chinese, Japanese, South Korean, and Singaporean entities to the Bureau of Industry and Security (BIS)’s Entity List to address risk of diversion; and

8. Creating a powerful new license exception category called Restricted Fabrication Facility (RFF)

Each of these moves are broadly consistent with the three critical strategic rationales behind the October 2022 controls and their October 2023 update, which aim to: (1) choke off China’s access to the future of AI and high performance computing (HPC) by restricting China’s access to advanced AI chips; (2) prevent China from obtaining or domestically producing alternatives; and (3) mitigate the revenue and profitability impacts on U.S. industry by continuing to allow Chinese sales for less advanced (and therefore presumably less threatening) technologies.

This report will summarize each of the above elements in turn, assess the extent to which they are likely to achieve U.S. strategic goals, and conclude with brief recommendations for improved U.S. and allied AI and semiconductor export control policy.


### Summarizing the Controls

#### 1. Expanding country-wide chip-level export controls to restrict High-Bandwidth Memory (HBM), a type of memory that is critical for AI applications

The October 2022 and October 2023 export controls restricted the export of advanced logic chips to train and operationally use (aka “inference”) AI models, such as the A100, H100, and Blackwell graphics processing units (GPUs) made by Nvidia. The terms GPUs and AI chips are used interchangeably throughout this this paper. The controls also restricted the export of U.S. SME to semiconductor production facilities (aka “fabs”) in China that were involved in the production of advanced chips, whether those were logic chips or memory chips. In contrast to the restrictions on exports of logic chips, however, neither the 2022 nor the 2023 controls restricted the export of advanced, AI-specific memory chips to China on a country-wide basis (some restrictions did occur via end-use and end-user controls but not at a strategically significant level). The focus on restricting logic rather than memory chip exports meant that Chinese firms were still able to acquire massive volumes of HBM, which is a type of memory that is critical for modern AI computing.

The December 2024 controls change that by adopting for the first time country-wide restrictions on the export of advanced HBM to China as well as an end-use and end-user controls on the sale of even less advanced versions of HBM. The goal of these controls is, unsurprisingly, to degrade China’s AI industry.

The key target of this ban would be companies in China that are currently designing advanced AI chips, such as Huawei with its Ascend 910B and 910C product lines, as well as the firms potentially capable of manufacturing such chips, which in China’s case is basically just the Semiconductor Manufacturing International Corporation (SMIC).

Modern AI chips not only require a lot of memory capacity but also an extraordinary amount of memory bandwidth. Bandwidth refers to the amount of data a computer’s memory can transfer to the processor (or other components) in a given amount of time. With low-bandwidth memory, the processing power of the AI chip often sits around doing nothing while it waits for the necessary data to be retrieved from (or stored in) memory and brought to the processor’s computing resources.

In such cases, wasted time is wasted money, and training and operating advanced AI costs a lot of money. Each modern AI chip costs tens of thousands of dollars, so customers want to ensure that these chips are running with as close to 100 percent utilization as possible to maximize the return on investment. A state-of-the-art AI data center might have as many as 100,000 Nvidia GPUs inside and cost billions of dollars. AI industry leaders are openly discussing the next generation of AI data centers with a million or more GPUs inside, which will cost tens of billions of dollars. No company operating anywhere close to that scale can tolerate ultra-powerful GPUs that spend 90 percent of the time doing nothing while they wait for low-bandwidth memory to feed the processor.

HBM, and the rapid data access it enables, has been an integral part of the AI story almost since the HBM’s commercial introduction in 2015. More recently, HBM has been integrated directly into GPUs for AI applications by taking advantage of advanced packaging technologies such as Chip on Wafer on Substrate (CoWoS), that further optimize connectivity between AI processors and HBM.

HBM integrated with an AI accelerator using CoWoS technology is today the basic blueprint for all advanced AI chips. In other words, the purchasers of AI chip products are—by default—also purchasing HBM. This is most obvious in the production costs: Dylan Patel, CEO of Semianalysis, has estimated that roughly half of the manufacturing cost of an Nvidia AI chip is actually its HBM. For the same reason, any company seeking to design, manufacture, and sell an advanced AI chip needs a supply of HBM.

This is where the new export controls come in.

Successfully cutting off China from access to HBM would be a devastating blow to the country’s AI ambitions. So, how do the new export controls propose to do that?

The new export controls prohibit selling advanced HBM to any customer in China or to any customer worldwide that is owned by a company headquartered in China. The same restrictions apply to all 24 countries on the Commerce Department’s D:5 county group (including Iran, Russia, North Korea, and Venezuela), as well as Chinese-controlled Macau. As with earlier controls, the true mechanism of this “prohibition” is requiring an export license and stating that the U.S. government’s policy is to review any such license application with a “presumption of denial.”

The global market for HBM is dominated by just three companies: SK Hynix and Samsung of South Korea and Micron of the United States. Just like Nvidia and everyone else, Huawei currently gets its HBM from these firms, most notably Samsung.

To ensure that SK Hynix’s and Samsung’s exports to China are restricted, and not just those of Micron, the United States applies the foreign direct product rule based on the fact that Samsung and SK Hynix manufacture their HBM (indeed, all of their chips) using U.S. SME.

As mentioned above, sales of advanced HBM to all D:5 countries (which includes China) are restricted on a country-wide basis, while sales of less advanced HBM are restricted on an end-use and end-user basis. The ban also extends worldwide for any firms that are headquartered in a D:5 country. This means that, for example, a Chinese tech firm such as Huawei cannot legally buy advanced HBM in China for use in AI chip production, and it also cannot buy advanced HBM in Vietnam through its local subsidiaries. The October 2023 restrictions had already implemented the same logic for sales restrictions on AI logic chips.

By contrast, the updated regulations allow older, lower-performing versions of HBM to continue sales to China with some especially tight end-use and end-user restrictions. For example, the less advanced HBM must be sold directly to the end user (i.e., not to a distributor), and the end user cannot be using the HBM for AI applications or incorporating them to produce AI chips, such as Huawei’s Ascend product line.

The definition for determining what is advanced HBM rather than less advanced HBM relies upon a new metric called “memory bandwidth density,” which the regulations define as “the memory bandwidth measured in gigabytes (GB) per second divided by the area of the package or stack measured in square millimeters.” The technical threshold where country-wide controls kick in for HBM is memory bandwidth density greater than 3.3 GB per second per square mm. According to analysis by Timothy Prickett Morgan, co-editor of the site The Next Platform, this means that exports to China of HBM2, which was first introduced in 2016, will be allowed (with end-use and end-user restrictions), while sales of anything more advanced (e.g., HBM2e, HBM3, HBM3e, HBM4) will be prohibited. The Nvidia V100 chip, introduced in 2017, was the first to use HBM2. Government officials confirmed to CSIS that allowing HBM2 exports to China with strict end-use and end-user checks is their intention.

#### 2. Updating the list of advanced SME that is restricted on a country-wide basis to include additional equipment for producing HBM, DRAM, and advanced packaging

As the Biden administration demonstrated an awareness of in 2022, there is little point in restricting the sales of chips to China if China is still able to purchase the chipmaking equipment to make those chips itself.

For the advanced SME technologies where export control restrictions apply on a country-wide basis (e.g., ECCNs 3B001, 3B002, 3D992, 3E992), the government has added new categories of restricted equipment. Recounting the full list is beyond the scope of this paper. However, one noteworthy new category is the equipment related to creating Through-Silicon Vias (TSVs). Like CoWoS, TSVs are a type of advanced packaging, one that is specifically fundamental to the production of HBM. These country-wide controls apply only to what the Department of Commerce’s Bureau of Industry and Security (BIS) has identified as advanced TSV machines that are more useful for advanced-node HBM production. BIS is attempting to continue to allow sales of TSV equipment that is used in legacy chip production.

#### 3. Updating the list of SME that is restricted on an end-use and end-user basis to include additional chokepoint technologies.

The original October 7 export controls as well as subsequent updates have included a basic architecture for restrictions on the export of SME: to restrict technologies that are exclusively useful for manufacturing advanced semiconductors (which this paper refers to as “advanced node equipment”) on a country-wide basis, while also restricting a much larger set of equipment—including equipment that is useful for producing both legacy-node chips and advanced-node chips—on an end-user and end-use basis. This paper refers to these categories of equipment as “node-agnostic equipment.”

The updated export controls preserve this architecture and expand the list of node-agnostic equipment that was controlled to include additional chokepoint equipment technologies such as more types of ion implantation, in addition to the long list of existing restrictions on metrology and other equipment categories. This node-agnostic equipment is captured in ECCNs 3B993, the new 3B994, and some others. Most of these expanded listings of node-agnostic equipment impact the entity listings that target end users, since the end-use restrictions targeting advanced-node semiconductor production often restrict exporting all items subject to the Export Administration Regulations (EAR).

The regulations explicitly state that the goal of many of these newly restricted types of equipment is to increase the difficulty of using multipatterning. Multipatterning is a technique that allows immersion DUV lithography systems to produce more advanced node chips than would otherwise be possible. Lacking access to EUV, DUV with multipatterning has been critical to SMIC’s production of 7 nm node chips, including AI chips for Huawei. Government officials told CSIS that this will be most impactful when implemented by U.S. allies.

#### 4. Dramatically expanding the scope of applicability of Foreign Direct Product Rules (FDPRs) on exports of both chips and SME

In her December 7, 2024, remarks at the Reagan National Defense Forum, Secretary of Commerce Gina Raimondo emphasized how foreign availability concerns weighed heavily on the Department of Commerce’s mind: “When I set the rules, I have to make damn sure China can’t just buy this stuff from Japan or Korea or the Europeans, so that’s why we have to work with them.”

Interestingly, while Raimondo emphasized the need to work with allies on export controls, there were two major new components of the controls that represented an expansion of U.S. unilateral authority. This took the form of two new FDPRs and updated de minimis provisions for those two rules.

The nature of the new rule is a bit complex, but it is best understood in terms of how it differs from two of the more familiar approaches to the product rule.

The first traditional approach to the FDPR relates to how U.S. products that are foreign-modified are generally still subject to U.S. export controls. An extreme (and hypothetical) example would be if the United States sold a product—say, a missile—to a U.S.-allowed country and then that country painted their flag on the missile and shipped it to a U.S.-restricted country without receiving a U.S. export license. The use of the FDPR reflects the fact that, even though the country has modified the product by painting their flag on it, it is still fundamentally a U.S. product for which U.S. export controls apply. A less extreme version of this would be if the U.S. exports a rocket engine to a foreign country, which then incorporates the engine into a missile that is exported to a restricted country. In such a case, the intermediary country is locally producing more of the content (i.e., everything other than the rocket engine) of the final exported good, but U.S. rocket engine content is still substantial enough that U.S. export controls apply. This “share of U.S. content” issue is addressed through de minimis standards, which in most cases is 25 percent of the final value of the product but in some cases applies if there is any U.S. content included at all.

The second approach, one that has featured prominently in semiconductor export controls, relates to controls on uses of exported U.S. manufacturing equipment. For example, in 2020, the first Trump administration restricted the chipmaking giant Taiwan Semiconductor Manufacturing Company (TSMC) from manufacturing chips designed by Huawei because TSMC’s manufacturing process heavily relied upon using U.S. equipment.

The new SME FDPR and Entity List FDPR for Footnote 5 entities take the logic underpinning the second approach and extend it further. In this case, any piece of SME that includes inside it a semiconductor chip that was made using U.S. SME is potentially subject to U.S. export controls.

As a scoping paragraph in the new regulations puts it, if a foreign-produced item “contains at least one integrated circuit, then there is a Red Flag that the foreign-produced item meets the product scope of the applicable FDP rule. The exporter, reexporter, or transferor must resolve this Red Flag before proceeding.”

This is a remarkable expansion of U.S. FDPR applicability. It could conceivably be used to control all of the SME made by any company on Earth. Even a tool built by a Chinese firm using entirely chips made in China would—at least in 2024—invariably be using chips made using U.S. equipment.

The SME FDPR is primarily focused on ensuring that the advanced-node tools are captured and restricted from the whole of China, while the Footnote 5 FDPR applies to a far more expansive list of equipment that is restricted to certain Chinese fabs and companies. In cases where the Footnote 5 FDPR is applied to an entity listing, the license requirements for the entity listing supersede and replace any license requirements created by the end-use controls.

The United States is not, however, expecting to successfully enforce compliance with the new rule by Chinese firms operating in China. As Secretary Raimondo recently pointed out, Huawei has repeatedly flaunted their willingness to mass-produce products that openly defy U.S. export controls. The real impact of this rule will be its impacts on the behavior of U.S. companies and foreign companies headquartered in U.S.-allied countries. These are firms that face significant legal and financial risk if caught defying U.S. export controls.

As a previous CSIS report has pointed out, U.S. SME firms have dramatically expanded their manufacturing operations outside of the United States over the past five years in an effort to continue shipping equipment to China without violating the letter of U.S. export control law. This new approach ends all debate about the applicability of U.S. export controls in the case of, for example, a U.S. equipment firm manufacturing SME in Malaysia and then selling it to a Malaysian distributor that sells it to China. Export controls unambiguously apply since there is no credible case for saying that the item lacks sufficient U.S. content to be subject to U.S. export controls.

For the same reason, this expanded FDPR will also apply to exports of equipment made by foreign-headquartered companies, such as ASML of the Netherlands, Tokyo Electron of Japan, and SEMES of South Korea. However, there is an important carve out here. The new rules do not apply if the item is “reexported or exported from abroad by an entity located in a country that has implemented equivalent controls for items specified. . . . For the purposes of this paragraph, equivalent means the item is listed on the country’s export control list and the country applies the same license review policy.”

What this means in practice is that the expanded FDPR will restrict a Japanese, Dutch, or other firm’s sales from outside their home countries, but they will not restrict those companies’ exports from their home markets as long as their home market is applying export controls equivalent to those of the United States. Importantly, however, South Korean SME will be restricted by the FDPR even for sales from South Korea, with a possible future exemption if the country institutes equivalent controls.

These new FDPR rules will cover advanced etching and deposition SME, as well as lithography tools—both extreme ultraviolet (EUV) and advanced deep ultraviolet (DUV). Regarding DUV machines, government sources told CSIS that the performance thresholds would restrict machines at or above the performance of the Twinscan NXT 2000i, meaning that not all argon fluoride immersion DUV tools will be restricted. Where the SME FDPR applies, all of the above-mentioned advanced tools will be restricted on a country-wide basis from being exported to China and other D:5 countries. Where the Footnote 5 FDPR applies, a much longer list of equipment will be restricted to certain entities.

#### 5. Offering exemptions and incentives to reward countries such as Japan and the Netherlands that adopt domestic export controls aligned with U.S. policy and goals

While other countries often complain about the application of U.S. “extraterritorial” legal authority, in this case they have at least some reason to be grateful. In the same way that the new U.S. FDPR reduces the incentive for U.S. firms to outsource manufacturing away from the United States, it also reduces the incentive for Dutch and Japanese firms to outsource manufacturing outside of their home countries. In early 2024, ASML was threatening to relocate outside of the Netherlands. Now, it is clear that U.S. export controls will follow ASML, and other foreign firms wherever they go, reducing the incentive to leave.

A partial caveat comes in the form of Supplement No. 4 to Part 742, which includes a list of 33 countries “excluded from certain semiconductor manufacturing equipment license restrictions.” It includes most EU countries as well as Japan, Australia, the United Kingdom, and a few others.

It notably does not include South Korea, Singapore, Malaysia, Taiwan, or Israel, all of which are countries that play important roles in the global SME industry. South Korea, for example, is a significant backfill concern in certain categories of deposition tools. None of these countries have adopted equivalent export controls, and so now their exports of SME are fully subject to the revised U.S. FDPR.

Government officials told CSIS that this exemption offers an incentive for the South Korean government to join the trilateral agreement between the United States, Japan, and the Netherlands. However, it is possible that the South Korean government might instead be comfortable merely being subject to the FDPR and thereby lessening the perceived risk of Chinese retaliation.

#### 6. Adding new red-flag guidance to require more stringent due diligence on the part of exporters

BIS has only a few hundred employees responsible for overseeing trillions of dollars of exports. Unsurprisingly, therefore, much of the effectiveness of their work depends upon shaping the internal compliance procedures of exporting companies. There is evidence in the updated controls that the U.S. government is frustrated with how firms have enforced such controls. This is especially true for the end-use controls on advanced semiconductor manufacturing.

The original October 2022 export controls included end-use restrictions for semiconductor fabs in China producing advanced-node logic and memory semiconductors. In fact, these were the strictest controls in the entire October 7 package because they legally prevented U.S. firms from knowingly exporting almost any goods or services to customers engaged in a restricted end use. Even though they were the strictest, they were not necessarily the most effective. Industry sources also told CSIS that SMIC, Huawei, Yangtze Memory Technologies Corporation (YMTC), and other Chinese firms successfully set up a network of shell companies and partner firms in China through which the companies have been able to continue acquiring U.S. equipment and components by deceiving U.S. exporters.

Some, such as analysts at the firm SemiAnalysis, have argued that additional tools were wrongly sold to Chinese firms who falsely claimed that the purchased equipment was not being used for advanced-node production. Their provocative claims are worth quoting at length:

> The equipment companies such as Applied Materials, Lam Research, Tokyo Electron, KLA, Screen, ASM International, Kokusai, etc. are selling basically every tool they offer to China. This is because most deposition, etch, metrology, cleaning, coaters, developers, ion implant, epitaxy, etc. tools for 7nm and even 5nm can also plausibly be used in 28nm. These tools are being sold to SMIC for “28nm,” but, in reality, SMIC is lying to the firms’ faces and using them for 7nm.

> While SMIC is expanding 28nm and other trailing edge nodes, it is much less than they claim as these tools are being rerouted to leading edge. It’s even possible that people within these equipment firms know what’s happening, but are turning a blind eye.

The U.S. government evidently gives these claims some credence because it added significant new due diligence requirements, including eight new red flags against which firms must assess every customer and transaction before proceeding. This includes things like “a scenario where a non-advanced fabrication facility orders equipment designed for ‘advanced-node IC’ production” or “a scenario where an exporter, reexporter, or transferor receives an order for which the ultimate owner or user of the items is uncertain, such as a request to ship equipment for the ‘development’ or ‘production’ of ICs to a distributor without a manufacturing operation.”

The export controls only apply when an exporter knowingly exports in violation of the regulations. These controls, if sincerely implemented, will certainly make it harder for an exporter to fail to know that their actions are in violation of the controls. On the one hand, it is encouraging to see that the Commerce Department has included these things in the mandatory due diligence review. On the other hand, it is disheartening that it took the department two years to do so.

#### 7. Adding 140 Chinese, Japanese, South Korean, and Singaporean entities to the Bureau of Industry and Security (BIS)’s Entity List to address risk of diversion

An additional move that reveals the U.S. government’s frustration with the implementation thus far of the controls comes from the updates to the U.S. Entity List. The 140 new entities added are restricted because they represent a “risk of diversion to entities of concern,” such as Huawei and SMIC, or because they are known to be engaging in prohibited activities. The additional entities include Chinese “tool manufacturers, semiconductor fabs, and investment companies involved in advancing the [Chinese] government’s military modernization.” Most of these new Entity List additions are Chinese SME companies and their subsidiaries.

The first question raised by the expanded Entity List is, why was it necessary? Theoretically, most of the concerning activities that these entities are engaging in ought to have been covered by the end-use controls specified in the October 2022 and October 2023 versions of the export controls. However, U.S. allies have yet to impose comparable controls on selling equipment components to Chinese SME companies, and this massively increases the risk of indigenization.

There are two major reasons for the renewed focus on entity listings. First, at least for those instances where the Department of Commerce feels confident that prior approvals of licenses ought to have been restricted on an end-use basis, this move removes all doubt. Second, this expanded list will be helpful to U.S. allies such as the Netherlands and Japan, who have fewer staff and resources to devote to export controls. To the extent that the United States was concerned about those country’s ability to effectively assess license applications for end-use issues, the Entity List gives a much clearer and easier-to-implement set of guidance. Third, as mentioned above, these additional entity listings address the significant gap in allied controls on selling components to Chinese equipment companies.

#### 8. Creating a powerful new license exception category called Restricted Fabrication Facility (RFF)

The creation of the RFF license exemption is a major action of the controls. However, the discussion of this action takes place in Section 4 of the below implications chapter.


### Strategic Impact of the U.S. Export Control Strategy to Date

Before diving into the updated controls, it is worth taking stock of the impact of the controls that were already in place.

Fierce debate continues in the United States and abroad regarding the true impact of the Biden and first Trump administrations’ approach to AI and semiconductor export controls. In 2023, Chinese state-run media argued, for example, that Huawei’s return to production of a high-performing 5G smartphone with a SMIC-manufactured 7 nm application processor and modem demonstrated that U.S. export controls have failed. More recently, the increasing competitiveness of China’s AI models—which are approaching the global state of the art—has been cited as evidence that the export controls strategy has failed.

The truth is that there have been many failures across both the Biden administration and first Trump administration in implementing AI and semiconductor export controls.

At the same time, however, the controls have clearly had an impact. The most obvious impacts are in SMIC’s struggles to mass-produce 7 nm chips or to move to the more advanced 5 nm node.

However, SMIC was already producing and selling 7 nm chips no later than July 2022 and potentially as early as July 2021, despite having no EUV machines. The Biden administration’s export controls failed to shut down the advanced-node production of SMIC and other Chinese logic chip manufacturers, as BIS undersecretary Alan Estevez claimed it would, but the controls have dramatically constrained SMIC’s ability to scale up 7 nm production. SMIC had at one point expected to be producing hundreds of thousands of 7 nm wafers per month, but it remains stuck in the low tens of thousands.

But the point of restricting SMIC and other Chinese chip manufacturers was to prevent them from producing chips to advance China’s AI industry. Semiconductor export controls are the means; AI is the end. So, have the controls meaningfully held back China’s progress in AI?

The answer, at least according to the leading Chinese AI companies and universities, is unambiguously “yes.” The Chinese company Deepseek has recently advanced to be generally regarded as China’s leading frontier AI model developer. Liang Wenfeng, Deepseek’s CEO, recently said in an interview that “Money has never been the problem for us; bans on shipments of advanced chips are the problem.” Jack Clark, a co-founder of the U.S. AI company Anthropic, that “The only thing standing between DeepSeek (probably China’s best AI training crew on a per capita basis) and matching the frontier labs in the West is access to compute.”

To be clear, the strategic impacts of these controls would have been far greater if the original export controls had correctly targeted AI chip performance thresholds, targeted smuggling operations more aggressively and effectively, put a stop to TSMC’s AI chip production for Huawei shell companies earlier. It would also have helped if identified export control loopholes had been closed in a timely fashion, rather than allowing China months and years of time to stockpile (discussed below). But the fact that the export controls have not had all of their intended effects is not the same thing as the export controls having failed. They have had strategic impacts—with admitted costs to U.S. industry—but the greatest potential impacts are actually ahead.

China may be stuck at low-yield, low-volume 7 nm and 5 nm manufacturing without EUV for many more years and be left behind as the compute-intensiveness (and therefore chip demand) of frontier AI is set to increase another tenfold in just the next year. Elon Musk’s xAI, for example, is hoping to increase the number of GPUs in its flagship Colossus supercomputing facility from 100,000 GPUs to more than 1,000,000 GPUs. While the smuggling of Nvidia AI chips thus far is significant and troubling, no reporting (at least thus far) suggests it is anywhere near the scale required to remain competitive for the next upgrade cycles of frontier AI data centers.


### Implications of the New Export Controls

Like their predecessor updates, these controls are incredibly complicated. Teasing out their full impacts will take significant time. However, at this stage it is possible to identify a few important implications:

#### 1. While these updated export controls represent a tightening of restrictions in most cases, the delayed implementation will significantly hurt their effectiveness.

The first tactic that China has resorted to in the face of export controls has repeatedly been stockpiling. Huawei acquired a multiyear stockpile of critical U.S. chips in advance of the tightened Entity List export controls that the United States applied in 2020.

The impact of these most recent export controls will be significantly reduced because of the delay between when U.S. intentions became clear and when the regulations actually take effect. Chinese chipmakers acquired a huge stockpile of SME between the October 2022 controls and these most recent export controls. In the case of HBM, Reuters reported that future U.S. export controls were likely to target HBM in late July 2024 and that massive Chinese stockpiling efforts had already begun by early August 2024. Similarly, CXMT reportedly began acquiring the equipment necessary to domestically produce HBM in February 2024, shortly after American commentators suggested that HBM and advanced packaging equipment was a logical next target.

This is one of the greatest weaknesses in the U.S. approach to export controls. The United States and its allies have demonstrated the ability to update strategic semiconductor export controls once per year. By contrast, Chinese countermeasures, both legal and illegal, are far faster in their response, willing to make bold and expensive bets on short notice. Allowing China to stockpile limits the damage to U.S. sellers and their Chinese customers, but it does so at the cost of making China’s path to indigenization—the greatest long-term threat—easier and less painful and making it more difficult for non-Chinese customers of U.S. chips and equipment to effectively compete.

#### 2. These latest export controls both help and hurt Nvidia, but China’s anti-monopoly investigation is likely the more important outcome.

Nvidia has consistently opposed the Biden adminsitration’s approach to AI and semiconductor export controls. Tim Teter, Nvidia’s general counsel, said in an interview last year with the New York Times that, “What you risk is spurring the development of an ecosystem that’s led by competitors. And that can have a very negative effect on the U.S. leadership in semiconductors, advanced technology and A.I.”

Nvidia would no doubt prefer that the Biden and Trump administrations abandon the current approach to semiconductor export controls. This is doubly true given the Chinese government’s announcement—only one week after the release of the updated export controls—that it is investigating Nvidia for “suspected violations of Chinese anti-monopoly laws.” The move is a thinly veiled Chinese retaliation for its frustration with U.S. export controls. China has long used its anti-trust regime as a tool for targeted retaliation against the U.S. and allied semiconductor industry. Previously, China’s efforts were mostly focused on preventing mergers—such as Intel’s attempted acquisition of Tower. Multiple foreign government officials told CSIS in interviews that Chinese diplomats privately acknowledged to them that these efforts are retaliation for U.S. export controls and not based on the merits of the accusations.

Nevertheless, there are some elements of the new export control package that actually help Nvidia by hurting its Chinese competitors, most directly the new HBM restrictions and the early November 2024 order for TSMC to halt all shipments to China of chips used in AI applications.

Nvidia GPUs are expected to use HBM3e for their upcoming product launches. Nvidia’s H20 chip, a lower-performing product that was designed to comply with the October 2023 export controls, currently uses HBM3. Nvidia will not, however, have to be redesigned to use HBM2 to continue selling to Chinese customers. The regulations state that “this control does include HBM permanently affixed to a logic integrated circuit designed as a control interface and incorporating a physical layer (PHY) function.” Since the HBM in the H20 product is “permanently affixed,” the export controls that apply are the technical performance thresholds for Total Processing Performance (TPP) and performance density. These were not changed from the standards in the October 2023 controls, and thus Nvidia is still allowed to legally export its H20 chips to China.

Some, such as Ege Erdill of Epoch AI, have argued that the H20’s price per performance is significantly below that of chips such as the H200 for frontier AI model training, but not frontier AI model inference. Accordingly, Erdill recommends that exports of the H20 to China be prohibited in a future controls update.

Nvidia at one point told investors that it expected to sell more than one million H20s to China in 2024 and earn $12 billion in revenue. However, Nvidia reportedly stopped taking new orders for H20 in August, while more Chinese AI and hyperscale cloud companies—such as ByteDance, Baidu, Tencent, iFlytek, SenseTime, and Alibaba—were either seeking to increase purchases of Huawei’s Ascend line of AI chips or designing their own chips. Around the same time, the Chinese government reportedly instructed Chinese companies to reduce their purchases of Nvidia products.

Nvidia’s two fears have generally been loss of market share in China and the rise of Chinese competitors that might one day become competitive outside of China. The slowing sales of H20s appeared to suggest that local competitors were becoming more attractive than Nvidia’s degraded chips for the Chinese market. The news that TSMC was mass-producing AI chips on behalf of Huawei reveals that Nvidia was not fighting against China’s chip industry but rather the combined efforts of China (Huawei’s Ascend 910B and 910C chip designs), Taiwan (Ascend chip manufacturing and CoWoS advanced packaging), and South Korea (HBM chip manufacturing). This is a vastly more difficult challenge than taking on China alone.

Huawei will now be limited to the logic chips that its domestic logic chip manufacturing partner, SMIC, can produce, as well as either legally acquired HBM2 or smuggled supplies of HBM3e. Preventing large-scale HBM chip smuggling will likely be difficult. However, customers who are comfortable buying low-performance Huawei chips with smuggled HBM may conclude that it is better to buy smuggled high-performance Nvidia chips.

Smuggling of advanced Nvidia chips has reached significant scale. Reporting by tech news site The Information found at least eight Chinese AI chip-smuggling networks, with each engaging in transactions valued at more than $100 million. Reporting by the New York Times provides additional evidence about the rise of wide-scale AI chip smuggling after the October 2023 export control update. The growing scale and sophistication of smuggling networks may be part of the reason why the H20 became less popular in the summer of 2024.

While industry and government officials told CSIS that Nvidia has taken steps to reduce the probability of smuggling, no one has yet described a credible mechanism for AI chip smuggling that does not result in the seller getting paid full price. All existing smuggling techniques that have been described in reporting occur after an AI chip company has already sold the chips. This means that a company’s only financial incentive to prevent smuggling comes from the risk of government fines. The largest administrative penalty in the history of BIS was $300 million. By contrast, the AI chip market in China is tens of billions of dollars annually, with very high profit margins.

Of note, Nvidia’s reported revenue from Singapore exploded in the wake of the U.S. export controls, from less than $1 billion in the fourth quarter of 2022 to nearly $8 billion in the third quarter of 2024 alone. It is unclear whether Singapore even has enough excess electrical generation capacity to operate all of the purchased chips, which could be evidence of smuggling activity.

Because Nvidia’s Chinese competitors are cut off from foreign HBM but Nvidia’s H20 chip is not, Nvidia is likely to have a significant performance advantage for the foreseeable future. However, this will likely not matter as much as the results of China’s anti-monopoly investigation. As the investigation moves forward, Nvidia may face a very difficult choice of having to pay massive fines, divest part of its business, or exit the Chinese market entirely. Each of these would likely be enormously costly. Though China has sought to increase the extraterritorial reach of its regulations, the most that China can likely do is halt all of Nvidia’s legal sales in China, which it has already been seeking to do. The episode might be a repeat of the Russian government fining Google $20 decillion, which is more than the combined wealth of the entire world. In reality, the true cost was that of forcing Google to close all of its local subsidiaries and exit the Russian market. Some in the United States may hope for a different outcome, such as a negotiated agreement in which the United States removes AI chip export controls in exchange for China ending its anti-monopoly investigation of Nvidia, but this is exceedingly unlikely.

#### 3. The absence of CXMT from the Entity List raises real risk of a strong domestic Chinese HBM champion.

As mentioned above, there is little strategic rationale in the United States banning the export of HBM to China if it is going to continue selling the SME that local Chinese companies can use to produce advanced HBM. One could argue that the U.S. government has done that by adding TSV-relevant SME technology to the country-wide list of export controls and by the prior end-use restrictions that restrict the sale of almost all items subject to the EAR.

However, there is a big gap in the additions to the Entity List: China’s strongest domestic producer of DRAM memory and one of only two Chinese firms with a credible path to producing advanced HBM—CXMT—is not on the Entity List.

While the addition of some TSV SME technology to the country-wide export controls will pose a challenge to CXMT, the firm has been quite open about its plans to begin mass production of HBM2, and some reports have suggested that the company has already begun doing so with the equipment that it began purchasing in early 2024. The United States cannot effectively take back the equipment that it and its allies have already sold, equipment for which Chinese firms are no doubt already engaged in a full-blown reverse engineering effort.

CXMT will be limited by China’s inability to acquire EUV lithography technology for the foreseeable future, but this is not as decisive a blow in memory chip manufacturing as it is in logic. Micron, the leading U.S. memory chip provider, does not plan to begin to use EUV until 2025, and yet Micron remains quite competitive in most memory chip market segments.

This begs the question: Why was CXMT not included in the Entity List update? The answer is quite simple. As an article from Tom’s Hardware, an influential semiconductor industry news outlet, reported:

> Chinese DRAM makers Changxin Memory (CXMT) and Fujian Jinhua are aggressively expanding production and cutting prices, reports DigiTimes. Right now, the two manufacturers sell their DDR4 components with a 50% discount compared to similar ICs made by South Korean makers and in some cases, these DRAMs are even cheaper than reballed (recycled/re-used) memory chips.

> CXMT’s production capacity has surged from 70,000 wafers per month (WPM) in 2022 to 200,000 WPM in 2024, the report says. The company aims to increase its output to 300,000 wafers per month and capture 11% of the global DRAM market in the coming years. Fujian Jinhua, despite being sanctioned by the U.S. government, has also managed to ramp up its DDR4 production.

In short, CXMT is embarking upon an explosive memory product capacity expansion, one that might see its global market share increase more than ten-fold compared with its 1 percent DRAM market share in 2023. That massive capacity expansion translates directly into massive purchases of SME, and one that the SME industry found too attractive to turn down. According to an unconfirmed report from DigiTimes Asia, citing sources in China’s semiconductor supply chain, the Japanese government argued forcefully that the United States must not include CXMT on the Entity List. It is possible that Japan said that it would continue approving export licenses for its firms to sell to CXMT even if the U.S. government included a strong entity listing.

If CXMT was acquiring equipment that was exclusively useful for legacy memory production, such as DDR4, this might not be especially concerning. However, the Chinese equipment firms are growing in capability and sophistication, and the massive procurement of foreign equipment dramatically reduces the number of jigsaw pieces that they must domestically acquire in order to solve the overall puzzle of domestic, high-volume HBM production. Meanwhile, their growing market share in legacy DRAM from the capacity expansion—heavily supported by massive Chinese government subsidies for companies that purchase domestically produced DRAM—will allow them to gain operational experience and scale that they can devote to the HBM technology once local Chinese equipment suppliers master TSV technology. Multiple industry sources told CSIS that Chinese firms are making greater progress in etching and deposition equipment, the primary basis of TSV technology, than they are in lithography.

#### 4. The license exemption category created and applied to Chinese memory firm XMC raises even greater risk of giving rise to domestic Chinese HBM production.

XMC is a subsidiary of the Chinese firm YMTC, which has long been China’s top firm for producing NAND (aka “flash” memory), a different kind of memory chip. At one point, Apple was planning to purchase YMTC’s NAND memory for use in iPhones. However, in December 2022, the United States applied an exceptionally broad Entity List restriction upon YMTC. One of the critical reasons for this justification was that YMTC had been, for years, deeply engaged in efforts to support Chinese development of alternatives to U.S. SME, meaning that U.S. government officials thought that it made sense to apply the export control strategic mindset that the United States had applied to Chinese equipment makers, even though YMTC was first and foremost a chipmaker. Today, YMTC is reportedly one of the key members of the Huawei-led semiconductor network, with XMC being Huawei’s primary partner for HBM manufacturing. SMIC, and two leading Chinese semiconductor equipment companies, Advanced Micro-Fabrication Equipment (AMEC) and Naura are reportedly the others. Huawei is effectively the leader of the Chinese government–backed semiconductor team, with a privileged position to influence semiconductor policymaking.

Industry sources told CSIS that—despite the broad December 2022 entity listing—the YMTC network was still able to acquire most U.S. equipment by routing purchases through shell companies, with XMC arguably the most important example.

The Commerce Department is clearly aware of the risk posed by XMC, having published the following about it in the new Entity List updates:

> The ERC determined to add Wuhan Xinxin Semiconductor Manufacturing Company Limited, under the destination of China, to the Entity List with a Footnote 5 designation, for posing a significant risk of becoming involved in activities contrary to the national security and foreign policy interests of the United States under §§ 744.11 and 744.23 of the EAR. This determination is based on information that this company poses a significant risk of becoming involved in the development or production of “advanced-node ICs.” A license will be required for all items subject to the EAR.

However, this tough language is mostly undone by what follows,

> This entity will be eligible for license exception Restricted Fabrication Facility (RFF) (§ 740.26), a new license exception added to part 740 (License Exceptions) of the EAR pursuant to the FDP IFR published concurrently with this final rule. License Exception RFF authorizes the export, reexport, and in-country transfer of items described in ECCNs 3B991 (except 3B991.b.2.a through .b) and 3B992 that are not described in ECCN 3B001.a.4, .c, .d, f.1.b.2, .k to .p; 3B002.c, 3B993, or 3B994, subject to the requirements of § 740.26.

The new regulations clarify that end-use restrictions still apply to Restricted Fabrication Facilities (RFFs) and prohibit the sale of any equipment known to be in use or intended for use in the production of advanced chip manufacturing. However, as mentioned above, there are many elements in this regulation that reveal the U.S. government’s doubts about the effectiveness of its end-use export controls in comparison to country-wide and strong Entity List controls. XMC is publicly known to be planning a massive HBM capacity buildout, and it is difficult to see how this RFF would prevent XMC, or any other firm added to the new RFF category, from deceptively acquiring a large quantity of advanced equipment, ostensibly for the production of legacy chips, and then repurposing that equipment at a later date for HBM production. In such a circumstance, this rule could do little besides locking the door after the thief has already robbed the house and escaped.

While the new RFF controls would technically constitute a stricter regulation for XMC than what was in effect after the October 2022 and October 2023 restrictions (since XMC was then left off the Entity List despite its ties to YMTC), the controls represent a retreat from the strategy that the U.S. government appeared to be pursuing in December 2022 when YMTC was listed.

Overall, the unwillingness of the United States to go after Huawei’s fab network with full force represents yet another compromise that will likely assist China in its chip manufacturing indigenization efforts.

The RFF exemption also sets a concerning precedent. Industry will likely push for every future fab to be added to this list unless there is clear proof that they are exceeding the thresholds. However, waiting until there is clear evidence will invariably mean that the controls are imposed only after it is too late for those controls to have a strategic effect.

#### 5. Much of the true implementation and effectiveness of these controls will rely upon advisory opinion letters from BIS, which are generally non-public and do not go through the interagency process, even though they can have enormous national security consequences.

The two packages of updated export controls are together more than 200 pages. One might think that reading all of these controls would provide a clear picture of how the United States intends to apply and enforce export controls. However, this is in many cases not true because there is an additional source of critical export control policymaking that is only rarely made public: BIS-issued advisory opinions. These opinions, while ostensibly mere clarifications of existing policy, can have the equivalent effect as policymaking by officially determining, for example, that a given fab is not engaged in advanced-node production or that a given entity poses no risk of diversion to a restricted end use or end user. Industry sources told CSIS that—in recent years—advisory opinions have been extremely impactful in expanding legally allowed exports of SME to China.

This latest export control package was debated in the U.S. government interagency process that includes the Departments of State, Defense, Commerce, and Energy, as well as the White House and intelligence community. However, advisory opinions are generally determined by BIS alone, which gives the bureau significant power in determining the actual approach taken as an end result, including determining the applicability of license exemptions. Government sources told CSIS that the Commerce Department and BIS tend to be significantly more receptive to the concerns of exporters than other agencies in the U.S. federal government, which are frequently more focused on national security and economic security issues and ensuring the coherent implementation of the overarching strategy.

Some of this is supported by the language in the final regulations, which includes lines such as, “BIS continues to welcome feedback from industry on specific ECCNs that are not used in front-end production of ICs and could be excluded from the ECCN scope of § 744.23(a)(4).”


### Conclusion: A Job Not Finished

In her December 7, 2024, remarks at the Reagan National Defense Forum, Secretary Raimondo strongly suggested that the Biden administration would have additional forthcoming AI and semiconductor policies: “there’s just a huge amount of work [remaining to be done]. I’ve told my team ‘buckle up. We’re working till the 19th at midnight.” Raimondo explicitly stated that this might include new tariffs intended to address China’s efforts to dominate the production of legacy-node chip production.

A government regulatory notice posted on December 9 appeared to confirm that this would include a new at least one package of additional export controls titled, “Export Control Framework for Artificial Intelligence Diffusion.”

Whether or not that package of controls will be effective remains to be seen, but there is a broader point that both the current and incoming presidential administrations need to understand: speedy, simple, and frequently updated export controls are far more likely to be more effective than even an exquisitely complex well-defined policy that comes too late. The Biden administration has demonstrated only an ability to update its approach once a year, while Chinese smugglers, shell companies, lawyers, and policymakers can clearly make bold decisions quickly. Delay to allow additional time for debate and consultation is, in and of itself, a policy decision, and not always the right one.

---

__Gregory C. Allen__ is the director of the Wadhwani AI Center at the Center for Strategic and International Studies (CSIS) in Washington, D.C.
