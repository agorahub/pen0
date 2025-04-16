---
layout: post
title : The AI Power Surge
author: Karl Smith, et al.
date  : 2025-03-03 12:00:00 +0800
image : https://i.imgur.com/4udtW5w.jpeg
#image_caption: ""
description: "Growth Scenarios for GenAI Datacenters Through 2030"
excerpt_separator: <excerpt/>
---

_This paper examines the feasibility and constraints of sustained growth in generative AI infrastructure._ <excerpt/> _Using a novel modeling approach, we analyze three growth scenarios based on historical technological adoptions: an eight-or-more year “Second Industrial Revolution” scenario, a five-year “PC Explosion” scenario, and a two-year “Dot-Com Boom” scenario._

Our findings indicate that cumulative capital spending in the most aggressive scenario could reach $2.35 trillion by 2030, with compute deployment reaching 7.0E+30 total floating-point operations (FLOP) and power demands adding 83.7 gigawatts (GWs) to the U.S. grid. While financing appears manageable with U.S. capital markets, and graphics processing unit (GPU) production constraints seem surmountable through technological advancement, the unprecedented scale of electrical power demands—equivalent to adding a new state the size of Texas to the grid—poses significant infrastructure and policy challenges.


### Introduction

Generative artificial intelligence (genAI) rapidly became the focus of technology sector investment after the release of ChatGPT 3.5 in November of 2022. Since then, genAI has consistently captured the attention and resources of industry leaders, solidifying its place as a transformative technology.

The projections for genAI investment are staggering. Sam Altman, CEO of the leading genAI provider OpenAI, has reportedly discussed creating a $7 trillion fund for genAI investment before 2030. Such an enormous number underscores industry leaders’ confidence in the transformative potential of genAI for the technology sector and the global economy. Nvidia, the leading producer of GPUs that provide compute for genAI, saw its revenue grow from $5 billion in the last quarter of fiscal year 2021 to $35 billion in the final quarter of FY 2024. This growth has been fueled by the increasing demand for advanced computational hardware capable of handling the exponential increase in genAI workloads.

Parallel to the rapid increase in investment in GPUs, the electricity sector has seen a jump in power demand. Like factories or refineries, data centers attempt to maximize the return on capital by operating 24 hours a day, seven days a week, as close to full capacity as possible. A new data center can demand as much as one GW of constant power, and the genAI industry plans to increase the scale and quantity of new data centers added every year. As of 2024, the additional demand from data centers has already reversed a six-decade-long trend of falling growth. Estimates of future demand have been revised sharply upwards.

The debut of DeepSeek’s R1 model introduced a significant shift in the genAI landscape. When delivering cutting-edge performance at a fraction of the computational cost compared to frontier models, R1 has fueled speculation that hyperscale data centers may no longer be the limiting factor in genAI progress. Some argue that the trillion-dollar arms race in genAI infrastructure could prove unnecessary if leading models can be trained and deployed with dramatically lower resource requirements. Yet, among industry leaders, there is little indication that infrastructure investment plans are being scaled back. Rather than being viewed as a cap to genAI’s expansion, DeepSeek’s efficiency gains are understood as a catalyst for even more aggressive genAI deployment. Moreover, lower costs do not imply diminishing demand; instead, they further extend the frontier of what is economically viable, broadening genAI’s reach across industries and accelerating its integration into the global economy.

The newly announced Stargate Project, a $500 billion investment led by OpenAI in partnership with SoftBank and Oracle, reinforces this interpretation. Stargate represents the largest genAI infrastructure initiative to date, with plans for a vast network of hyperscale data centers across the United States. If DeepSeek’s breakthrough demonstrated that state-of-the-art genAI can be achieved more efficiently, Stargate underscores that the response from key players is to expand investment, not to temper it. The fundamental premise remains unchanged: No matter how rapidly genAI efficiency improves, the demand for compute continues to scale beyond prior projections. Far from reducing the need for capital expenditure, cost declines in training and inference are expected to unlock new applications, driving even more infrastructure buildout.

Securing dominance in genAI has emerged as a focus for U.S. policymakers, who see it as vital for maintaining economic leadership and safeguarding national security. Achieving such dominance requires capitalizing on the transformative benefits of genAI and ensuring that the United States can train and deploy the most advanced genAI models in the world.

In this paper, we describe a model designed to explore the following questions: Will the recent acceleration in genAI growth continue over the short, medium, and long term, and, if so, does the United States have the economic capacity and infrastructure to support that growth?


### Background

Our model connects three possible constraints on the growth of the U.S. genAI industry:

- __Financing:__ Could the sheer cost of capital hinder genAI development and deployment?

- __Hardware:__ Could the production and supply of specialized genAI hardware, particularly GPUs, create bottlenecks?

- __Electric Power:__ Could the energy demands of genAI models and supporting infrastructure outpace available resources?

Three illustrative scenarios represent different durations over which the post-ChatGPT acceleration in genAI growth might last:

- __Second Industrial Revolution:__ eight or more years

- __The PC Explosion:__ five years

- __The Dot-Com Boom:__ two years

The most aggressive scenario is modeled after the growth experienced during the Second Industrial Revolution—between 1870 and 1914—when electricity, Bessemer steel, and internal combustion engines fundamentally altered the nature of production. If genAI facilitates this level of economic transformation, we expect the investment in genAI to continue at its present rate over the next decade and beyond.

It is worth noting that leading AI labs are raising hundreds of billions of dollars in capital based on an anticipated transformation of this magnitude. We include two additional scenarios because market expectations have been thwarted in the past.

The first alternative scenario is modeled after the PC revolution. The development of personal computers revolutionized the business sector and radically altered the nature of clerical work but did not dramatically transform the US economy. A similar path for genAI might mean that industries like software development and media are completely overhauled, but the rest of the economy sees only modest adjustments. In that case, we would expect the period of rapid genAI investment that began in 2023 to continue until 2028 before petering out.

The second alternative scenario is modeled after the dot-com boom. While interest in internet-centric companies began in 1995, the lion’s share of venture capital investment occurred between the last two quarters of 1999 and the first two quarters of 2021. If AI takes a similar trajectory, the surge in investment that began in late 2023 is now coming to a close. This scenario defies most conventional wisdom but is crucial as a robustness check.


### Scenario Results

We offer some representative top-line results from our model below. Table 1 displays cumulative totals relative to 2022 for each scenario. The three categories of capital spending, compute deployed in total FLOP, and GWs added are the aggregate demand metrics for each of the three enablers, respectively.

![image01](https://i.imgur.com/XP1WcWh.png)
_▲ Table 1: Key Metrics in 2030_

The three categories of Capital Spending, Compute Deployed in total Flops, and GWs added are our aggregate demand metrics for each of our three enablers, respectively.

We began by projecting recent investment trends using census data from 2014 to 2024 to create coherent scenarios across these three metrics. We then used trends in the decline in GPU prices to estimate the number of GPUs purchased annually consistent with that projection. Finally, we employed trends in power efficiency to calculate the additional power required by our projection of yearly GPU growth.

This gave us a mathematical relationship linking investment, GPUs, and power at the macro level. Because individual data centers are rated by their power usage, we were able to use proprietary microdata provided by Semianalysis to calibrate our macro-level relationship to actual fine-grained deployments.

#### Financing

Capital availability has been robust, with major players such as tech giants, venture capitalists, and governments prioritizing genAI investments. However, some analysts are concerned that genAI’s revenue generation will not be sufficient to sustain the large profit margins technology companies have had to this point.

A proprietary analysis of greenfield projects indicates that the six firms currently leading in genAI investment collectively expect growth to continue at this pace in the foreseeable future. This is consistent with public statements made by the CEOs of those companies.

We want to evaluate whether this growth is financially sustainable by treating financing data centers like industrial investments. Datacenter creation involves a sizable industrial investment in physical chips and infrastructure. Interest and depreciation will govern the overall cost of such an investment. Additionally, the power needs of data centers will be operational costs.

Carrying costs are what an industrial firm expects to pay yearly to maintain its physical plant, machines, and other equipment. These types of expenses are dominated by the interest payments on the original construction and the loss of worn-out and obsolete physical structures, machines, and equipment.

Using a five-year straight-line depreciation schedule and a financial cost of 300 basis points over the ten-year treasury, we find that, assuming present trends continue, the total carrying cost of capital would rise from roughly $30 billion in 2024 to $430 billion in 2030 in the most optimistic scenarios for genAI development.

$430 billion is an eye-popping number, but it must be considered in context. In 2023, U.S. businesses spent $5.2 trillion on interest and depreciation alone. The long-term, economy-wide interest and depreciation growth trend is 5 percent per year. Assuming this trend holds, that number will reach $7.3 trillion in 2030, a gain of $2.1 trillion in six years. Adding the $430 billion genAI will cost would increase that change by less than 20 percent to $2.5 trillion, a substantial, but not impossible, boost. Looking at it another way, accommodating the genAI increase would require spending on depreciation and interest to grow by 6.4 percent a year rather than 5 percent. For comparison, that is roughly equal to the growth rate in interest and depreciation from $1.27 trillion in 1993 to $1.97 trillion in 2000.

Therefore, there is little indication that the carrying cost of genAI will be an unbearable strain on U.S. capital markets. Although a complete analysis of whether the industry-specific gains from that investment outweigh the costs is well beyond the scope of this paper, we can provide some benchmarks for realism.

So far, productivity gains from genAI seem promising in software engineering. This may be because genAI firms tailor their models specifically to be helpful to themselves, which may suggest that tailoring for other industries could produce widespread gains over time. Assuming the current pattern holds, how much productivity gain would software engineering have to see to “pay for” the depreciation and interest on computing facilities?

Estimates from the Bureau of Labor Statistics suggest that by 2030, the total wage bill of software engineers in the United States will exceed $1 trillion. These estimates are based on historical numbers and do not include the effects of genAI. With this estimated wage bill, genAI would need to increase the productivity of the average software engineer by 42 percent to cover the cost of depreciation and interest. Put simply, if in 2030, genAI could allow U.S. companies to hire 40 percent fewer software engineers and produce the same output, that alone could justify the cost of depreciation and interest for the entire genAI industry. As a last heuristic, if genAI is used primarily for entertainment, and roughly 20 percent of residents in the developed world signed up for a genAI streaming service, then the cost of capital would amount to approximately $160 a month per subscription. GenAI would have to be roughly as appealing as cable television to justify depreciation and interest costs.

#### GPU Availability

To analyze the potential problems posed by GPU production, we took our baseline capital expenditure estimates and calculated how much chip production would be implied. This required several steps.

Today, the state-of-the-art GPU is the H100, produced by Nvidia. We define an H100 equivalent as a hypothetical GPU in any given year that produces the same compute as a current H100 using state-of-the-art technology for that year. Thus, we expect the cost of H100 equivalents to decline precipitously over time.

The speed of that decline is a matter of contention. Nvidia’s CEO points out that GPU performance nearly doubles every year. However, critics say that this ignores the fact that Nvidia’s chips have become larger over time, thus representing more silicon and higher production costs.

Epoch AI estimates that the cost per FLOP (a technical metric of GPU performance) halves every 2.5 years. However, this estimate does not include the effect of algorithmic efficiency. Essentially, better genAI algorithms reduce the hardware cost of each computation, thus boosting the total computations that any GPU can perform within a given period.

Tim Fist and Arnab Datta at the Institute for Progress estimate that performance per dollar triples roughly every two years using hardware and algorithmic computing. This metric is consistent with our field reading and is the basis for our model H100 equivalents. Consequently, we assume that the cost per H100 equivalent will drop by 48 percent per year.

Based on Semianlaysis and Census Bureau data, we estimate that the GPU’s cost is two to three times the full cost, including facilities, installation, cooling, etc. Moreover, the non-GPU costs depend on how many megawatts (MWs) of power are used. Therefore, in order to arrive at a consistent figure over time, we must determine how watts per H100 equivalent evolve.

To that end, we turned to data from researchers at Northeastern University, which suggest that energy efficiency per square millimeter of silicon falls by 28 percent annually. Since our H100 equivalent has a fixed amount of silicon, we can use 28 percent as our energy efficiency trend.

Using that rate of efficiency decline, we multiply the H100 equivalent per MW times the H100 equivalent price to find the GPU energy cost for a single MW facility. This allows us to match the energy cost for facilities and GPUs in any given year. We then calculate the gross MWs added in any given year as capital spending divided by the price per MW.

Our baseline capital spending estimates show that gross MWs increased from 3,000 in 2024 to 39,000 in 2030. We use that figure to calculate the number of H100 equivalents, estimating that the wattage per H100 equivalent will have fallen from 1,400 in 2024 to 249 in 2030. Thus, the total H100 equivalents should climb from 2.9 million in 2024 to 159 million in 2030.

To validate our estimate, we turn to a brief analysis of semiconductor manufacturing. The Taiwan Semiconductor Manufacturing Company (TSMC) has a 90 percent market share in state-of-the-art GPUs. Although there is substantial evidence that other microchip manufacturers are ramping up GPU production capabilities to match the sharply increasing demand, we focus solely on TSMC’s capacity to be conservative.

Epoch AI projects that TSMC’s total silicon wafer production will reach 300–900 million H100 equivalents by 2030. Based on our projection of capital spending on H100 equivalents, the genAI industry must use between 15 and 50 percent of TSMC’s total capacity.

The numbers are significant but entirely plausible, given that TSMC is a state-of-the-art manufacturer and genAI is a state-of-the-art application. In the worst-case scenario, most of TSMC’s non-AI customers will be priced out and forced to depend on less advanced producers.

Our analysis has one large caveat: It does not account for a severe non-economic bottleneck—specifically, warfare on the island of Taiwan. Identifying the military and diplomatic options available to prevent or mitigate such an outcome is beyond the scope of this paper. Still, it’s important to note that the conclusions of this study depend on the continued supply of Taiwanese semiconductors.

#### Electric Power

Now that the number of H100 equivalents installed in any given year has been determined, calculating the power requirement is simple. The depreciation of GPUs eliminates the power demand that would have come from worn-out, unusable chips. With the same 5-year straight-line depreciation used above to calculate MWs, the total power requirement rises from 4,000 MW in 2024 to 84,000 MW in 2030.

This figure implies unprecedented growth for the data center industry and a profound change in the overall growth trajectory for the U.S. electric power sector. In 2024, the peak electricity demand in the United States was 745 GW, which has not changed significantly in over a decade. For context, the electricity demand for genAI technology will exceed that of most states: peak demand for New York is about 33 GW (summer 2023), and the all-time peak for CAISO, the California power grid, is 52 GW (September 2022). In 2024, the primary grid operator in Texas, ERCOT, hit its peak production at 85 GW.

Our model’s demand estimates are roughly in line with forecasts generated by other research teams. A 2024 study by LBNL, which takes a detailed “bottom-up” approach estimating the energy usage of GPUs and other IT infrastructure, shows that total U.S. data center demand could grow from a base of roughly 40 GW in 2024 to 74–132 GW by 2028, that is, an increase in demand of 34–92 GWs in four years.

Notably for policymakers, this model’s 80 GW production excludes any additional drivers of electric demand growth, such as enterprise, cloud service computation, and crypto mining, each seeing growth, albeit at a slower rate than genAI. Other considerable sources of demand growth include the expansion of electricity-intensive industries—e.g., semiconductor fabrication and battery manufacturing—and the slow but sure increase in electric vehicles. Together, these demand drivers could easily contribute an additional 50-plus GWs of peak load to the grid by 2035.

The most significant sources of uncertainty for our projections are whether the electricity supply and the requisite grid infrastructure can be deployed quickly enough to meet this increased demand. The reliability imperative retains ultimate priority in the power sector, so utilities and grid operators across the United States will only connect and serve demand resources they can reliably supply. This energy supply constraint is present in the data center development sector as well, where “speed-to-power”—how fast a site can receive energy—has rapidly emerged as the most critical factor driving siting and investment decisions.

A host of well-documented factors constrain the rapid scaling of supply in the power sector, including heavily backlogged generation interconnection queues, median wait times for new projects reaching over five years in 2023, persistent hurdles to the crucial high-voltage transmission expansion necessary to support new generation and demand, and the poor permitting environment for infrastructure of all types. In addition, crucial equipment like transformers and gas turbines are increasingly on multi-year backorders, further increasing project delays and costs.

Since the mid-1970s, all U.S. electric power sector aspects—commercial, policy, and regulatory—have adapted to slowing growth rates. Over the last two decades, moreover, growth has been effectively zero. However, with the crucial national security loads of genAI at the forefront, the new paradigm of surging electric demand growth requires a new model of ambitious policymaking at both the state and federal levels.

Major policy questions include addressing back-logged interconnection queues, accelerating transmission system expansion, streamlining the permitting environment, resolving the thorny issue of gas-electric coordination, and expanding the federal government’s role in unlocking new nuclear construction.


### Conclusion

Our analysis suggests that the recent acceleration in genAI growth could continue through 2030, but with significant infrastructure challenges that must be addressed. Examining three potential constraints—financing, hardware availability, and electric power demands—we find that while the first two obstacles appear surmountable, the unprecedented scale of electrical power requirements poses the most serious challenge to sustained growth.

From a financing perspective, even our most aggressive scenario, requiring $2.35 trillion in cumulative capital spending by 2030, appears manageable within U.S. capital markets. The projected annual carrying costs of $430 billion by 2030 would represent less than 20 percent of the expected growth in economy-wide interest and depreciation. Moreover, our analysis suggests that relatively modest productivity gains in the software engineering sector alone could justify these capital costs, with a 42 percent increase in productivity sufficient to cover the industry’s depreciation and interest expenses.

Hardware constraints, particularly GPU availability, also appear manageable given expected technological advances and manufacturing capacity. Our projections indicate that the genAI industry would require between 15 percent and 50 percent of TSMC’s total manufacturing capacity by 2030—a substantial but feasible share. However, this assessment assumes continued access to Taiwanese semiconductor manufacturing, highlighting a critical geopolitical vulnerability in the supply chain.

The most significant challenge to sustained genAI growth lies in meeting its unprecedented electrical power demands. Our model projects that genAI technology will require approximately 84 GW of power by 2030—equivalent to adding another Texas to the U.S. grid. This dramatic increase in power demand, combined with other growing sectors such as electric vehicles and semiconductor manufacturing, will require a fundamental transformation of the U.S. power sector, which has been oriented toward minimal growth since the 1970s.

Critical infrastructure bottlenecks threaten to impede this necessary scaling of power capacity. Addressing these challenges will require coordinated policy action at both state and federal levels, including reforms to permitting processes, transmission planning, and nuclear power development.

In conclusion, while the United States possesses the economic capacity to support continued genAI growth through 2030, realizing this potential will require unprecedented coordination between industry and government to modernize and expand critical infrastructure, particularly in the power sector. The success of this endeavor will likely determine whether the United States can maintain its leadership position in genAI development and deployment. Future research should focus on detailed policy frameworks for accelerating power sector transformation while maintaining grid reliability and security.

---

__Karl Smith__ is an economic policy consultant specializing in AI.

__Joseph Majkut__ is director of the Energy Security and Climate Change Program at the Center for Strategic and International Studies (CSIS).

__Cy McGeady__ is a fellow with the Energy Security and Climate Change Program at CSIS.

__Barath Harithas__ is a senior fellow in the Economics Program and Scholl Chair in International Business at CSIS.
