---
layout: post
title:  "网络文本的模糊图像"
author: "Ted Chiang"
date:   2023-02-09 12:00:00 +0800
image:  https://i.imgur.com/de5Jn3M.jpg
#image_caption: ""
description:   ""
position: right
---

2013年，德国一家建筑公司的工人注意到他们的施乐复印机有一些奇怪的地方：当他们复印一张房子平面图时，副本与原件之间存在微妙而显著的差异。

<!--more-->

在最初的平面图中，每栋房子的三个房间都有一个矩形来说明其面积：房间分别为14.13平方米，21.11平方米和17.42平方米。然而，在复印件中，所有三个房间都被标记为14.13平方米。该公司联系了计算机科学家大卫·克里塞尔（David Kriesel），让他对这一看似不可思议的结果进行调查。他们需要一名计算机科学家，因为现代施乐复印机使用的不是20世纪60年代流行的物理静电复印工艺。相反，它以数字方式扫描文档，然后打印生成的图像文件。结合这一事实，为了节省空间，几乎每个数字图像文件都经过了压缩。谜底开始浮出水面。

压缩文件需要两个步骤：首先是编码，在此期间文件被转换为更紧凑的格式；然后是解码，将编码的过程反向进行。如果恢复的文件与原始文件相同，则压缩过程被描述为无损，即没有丢失信息。相比之下，如果恢复的文件只是原始文件的近似值，则压缩被描述为有损，即一些信息已丢失而无法恢复。无损压缩通常用于文本文件和计算机程序，因为在这些领域中，即使是一个错误的字符也有可能造成灾难性的后果。在绝对精度不重要的情况下，有损压缩通常用于照片、音频和视频。大多数时候，我们不会注意到一张图片、一首歌或电影是否被完美地复制。只有当文件被压缩得非常紧时，保真度的损失才会更加明显。在这些情况下，我们会注意到所谓的压缩伪影——最小的JPEG和MPEG图像的模糊，或者低比特率MP3的微弱声音。

施乐复印机使用一种被称为jbig2的有损压缩格式，专为黑白图像而设计。为了节省空间，复印机会识别图像中看起来相似的区域，并为所有这些区域存储一份副本；当文件被解压时，它会重复使用该副本来重建映像。结果是，复印机判断出指定房间面积的标签非常相似，所以它只需要存储其中一个，即14.13平方米的房间，并且在打印楼层平面图时，它对所有三个房间都重复使用这一个标签。

施乐复印机使用有损压缩格式而不是无损格式，这本身并不是一个问题。问题是复印机以一种微妙的方式压缩了图像，使其中压缩的伪影不能被立即识别出来。如果复印机只是打印出模糊的照片，每个人都会知道这不是原件的准确复制品。导致问题的原因是复印机输出的数字是可读的，但不准确——它使副本看起来准确，但实际上并不准确。（2014年，施乐发布了一个补丁来纠正这个问题。）

我认为，在我们研究OpenAI的ChatGPT和其他类似程序（人工智能研究人员称之为大语言模型）时，施乐复印机的这起事件值得我们铭记于心。复印机和大语言模型之间的相似之处可能不是很明显，但请考虑以下场景：想象一下，你即将永远失去上网的机会。在准备阶段，你计划为万维网上的所有文本创建一个压缩副本，以便将其存储在专用服务器上。不幸的是，你的私人服务器只有所需空间的1%；如果你想要所有的一切都是准确的，你就不能使用无损压缩算法。相反，你可以编写一个有损算法来识别文本中的统计规律，并将它们存储在专门的文件格式中。由于你在这个任务中拥有几乎无限的计算能力，因此你的算法可以识别非常细微的统计规律，这允许你实现所需的100:1的压缩比。

于是，失去网络连接不再那么可怕，因为你把网络上的所有信息都存储在了你的服务器上。唯一的问题是，由于文本被高度压缩，你无法通过搜索准确的引用来查找信息；你永远不会得到一个精确的匹配，因为存储的不是单词。为了解决这个问题，你创建了一个接口，该接口接受问题形式的查询，并以传达服务器上的要点的答案进行响应。

我所描述的听起来很像ChatGPT，或者大多数其他大语言模型。可以把ChatGPT看作是万维网上所有文本的模糊JPEG。它保留了万维网上的大部分信息，就像JPEG保留了高分辨率图像的大部分信息一样。但是，如果你要寻找精确的比特序列，你无法找到它，你得到的只是一个近似值。但是，因为这个近似值是以语法文本的形式呈现的，而ChatGPT擅长创建语法文本，所以它通常是可以接受的。你看到的仍然是一张模糊的JPEG，但模糊发生的方式不会使图片整体看起来不那么清晰。

这种与有损压缩的类比不仅仅是一种理解ChatGPT通过使用不同的单词重新打包万维网上找到的信息的方法，它也是一种理解“幻觉”或对事实性问题的无意义回答的方法。而大语言模型（如ChatGPT）都很容易出现这种情况。这些幻觉是压缩后的产物。但是，就像施乐复印机产生的错误标签一样，它们似乎是可信的，要识别它们就需要将它们与原件进行比较。在这种情况下，这意味着要么是万维网，要么是我们自己对世界的认识。当我们这样想的时候，这样的幻觉一点也不令人惊讶。如果一种压缩算法被设计成在99%的原始文本被丢弃后重建文本，我们应该预料到它生成的很大一部分内容将完全是捏造的。

当我们记得有损压缩算法使用的一种常用技术是插值（译者注：一种通过已知的、离散的数据点，在范围内推求新数据点的过程或方法）时，这个类比就更有意义了——也就是说，通过查看间隙两侧的内容来估计缺失的内容。当图像程序显示照片时，必须重建压缩过程中丢失的像素时，它会查看附近的像素并计算平均值。这就是当ChatGPT被提示用《独立宣言》的风格描述丢在烘干机里的袜子时所做的事情：它在“词汇空间”中取两个点，并生成占据它们之间位置的文本。（“在人类事件的过程中，一个人有必要把他的衣服与他们的同伴分开，以保持其清洁和秩序……”）ChatGPT非常擅长这种形式的插值，人们发现它很有趣：他们发现了一种用于段落而不是照片的“模糊”工具，并且玩得很开心。

鉴于像ChatGPT这样的大语言模型经常被吹捧为人工智能的前沿，将它们描述为有损文本压缩算法可能听起来令人不屑一顾，或者至少令人泄气。我确实认为这种观点为将大语言模型人格化的趋势提供了有用的纠正，但是压缩类比还有另一个方面值得考虑。自2006年以来，一位名叫马库斯·赫特（Marcus Hutter）的人工智能研究人员提供了一项现金奖励——被称为“压缩人类知识奖”或“赫特奖”，奖励任何能够无损地压缩维基百科特定1GB快照的人，要求比上一位获奖者的数据更小。你可能遇到过使zip文件格式压缩的文件。zip格式将赫特的1GB文件压缩到300兆左右；而最近的获奖者已经设法将其减少到115兆字节。这不仅仅是一次磨合练习。赫特认为，更好的文本压缩将有助于创造人类级别的人工智能，部分原因是通过理解文本可以实现最大程度的压缩。

为了理解压缩和理解之间的关系，假设你有一个文本文件，其中包含上百万个加减乘除的示例。尽管任何压缩算法都可以减小这个文件的大小，但要实现最大的压缩比，可能需要推导出算术原理，然后编写计算器程序的代码。使用计算器，你不仅可以完美地重建文件中的数百万个示例，还可以重建将来可能遇到的任何其他算术示例。同样的逻辑也适用于压缩维基百科的一部分。如果压缩程序知道力等于质量乘以加速度，那么在压缩有关物理的页面时，它可以丢弃大量的单词，因为它能够重建它们。同样，程序对供求关系了解得越多，在压缩有关经济的页面时，就能丢弃越多的单词，等等。

大型语言模型识别文本中的统计规律。对网络文本的任何分析都会揭示，像“供应不足”这样的短语经常出现在“价格上涨”这样的短语附近。当被问及有关供应短缺影响的问题时，包含这种相关性的聊天机器人可能会回答有关价格上涨的问题。如果一个大语言模型已经编译了大量经济术语之间的相关性——多到可以对各种各样的问题提供合理的回答——我们是否应该说它实际上理解了经济理论？像ChatGPT这样的模型没有资格获得赫特奖，原因有很多，其中之一就是它们不能精确地重建原始文本，也就是说它们不执行无损压缩。但是，它们的有损压缩是否可能表明，人工智能研究人员真正理解了他们感兴趣的那种类型？

让我们回到算术的例子。如果你要求GPT-3（ChatGPT构建的大语言模型）添加或减去一对数字，当数字只有两位数时，它几乎总是会给出正确的答案。但数字越大，准确率就会显著下降，当数字有五位数时，准确率会下降到10%。GPT-3给出的大多数正确答案都不能在网上找到——例如，包含“245 + 821”文本的网页并不多——所以它不是在进行简单的记忆。但是，尽管吸收了大量的信息，它也无法推导出算术原理。仔细检查GPT-3的错误答案表明，它在执行算术时不带“1”。万维网上当然包含携带“1”的解释，但是GPT-3不能包含这些解释。GPT-3对算术例子的统计分析使它能够产生与真实事物的表面近似，但仅此而已。

鉴于GPT-3在小学教学科目上的失败，我们如何解释它有时在写大学水平的论文时表现良好的事实？尽管大语言模型经常产生幻觉，但当它们清醒时，它们好像真的能理解经济理论等学科。也许算术是一个特殊的情况，大语言模型不太适合。有没有可能，在加减法之外的领域，文本中的统计规律确实与真实世界的真实知识相对应？

我认为有一个更简单的解释。想象一下，如果ChatGPT是一种无损算法会是什么样子。如果是这样的话，它总是通过提供来自相关网页的逐字引用来回答问题。我们可能会认为这个软件只是对传统搜索引擎的轻微改进，并对它印象不太深刻。ChatGPT从网络上重新表达材料，而不是逐字引用，这让它看起来像一个学生用自己的话表达思想，而不是简单地重复他读过的东西。它会造成ChatGPT理解了材料的错觉。在人类学生中，死记硬背并不是真正学习的标志，因此ChatGPT无法从网页中准确地引用内容，这恰恰使我们认为它学到了一些东西。当我们处理单词序列时，有损压缩看起来比无损压缩更聪明。

大语言模型已经有了很多种用法。把它们看作是模糊的JPEG文件，这就提供了一种评估它们可能适合或不适合的方法。让我们思考几种情况。

大语言模型能取代传统搜索引擎吗？为了让我们对它们有信心，我们需要知道他们有没有被灌输政治宣传和阴谋论——我们需要知道JPEG是否捕捉了正确的网络区域。但是，即使大语言模型只包含我们想要的信息，仍然存在模糊性的问题。有一种模糊是可以接受的，那就是用不同的词重新陈述信息；对于完全捏造的模糊，当我们寻找事实时，我们认为这是不可接受的。在消除不可接受的模糊性的同时，保留可接受的模糊性，在技术上是否可行尚不清楚，但我希望在不久的将来，我们能找到答案。

即使有可能限制大语言模型参与制作，我们应该使用它们来生成万维网内容吗？只有当我们的目标是重新打包网络上已有的信息时，这才有意义。有些公司就是这么做的，我们通常称它们为内容工厂。也许大语言模型的模糊性对他们来说是有用的，它可以作为一种避免侵犯版权的手段。不过，一般来说，我想说的是，任何对内容工厂有好处的东西都不适合搜索信息的人。这种重新包装的兴起使我们现在更难在网上找到我们想要的东西。大型语言模型生成的文本在网络上发布得越多，网络本身就变得越模糊。

关于OpenAI即将推出的ChatGPT继任者GPT-4的信息非常少。但是我想做一个预测：当收集用于训练GPT-4的大量文本时，OpenAI会尽一切努力排除由ChatGPT或任何其他大语言模型生成的材料。若事实果真如此，那么将大语言模型与有损压缩进行类比是有用的。反复保存JPEG会产生更多的压缩制件，因为每次都会丢失更多的信息。这就相当于过去不断复制副本的做法，图像质量只会越来越差。

事实上，衡量大语言模型质量的一个有用标准可能是，公司是否愿意使用它生成的文本作为新模型的训练材料。如果ChatGPT的输出对GPT-4来说不够好，我们或许会认为它对我们来说也不够好。相反，如果一个模型生成的文本非常好，可以用来训练新的模型，那么我们应该对文本的质量有信心。（我怀疑这样的结果需要在用于构建这些模型的技术上取得重大突破。）如果我们开始看到模型产生的输出和输入一样好，那么有损压缩的类比将不再适用。

大语言模型能帮助人类创作原创作品吗？要回答这个问题，我们需要明确这个问题的含义。有一种艺术类型被称为影印艺术，在这种艺术中，艺术家们利用复印机的独特特性作为创作工具。在ChatGPT复印机上，沿着这些路线的事情肯定是可能的，所以，在这个意义上，答案是肯定的。但我认为没有人会说，复印机已经成为艺术创作中的必备工具。绝大多数艺术家在创作过程中不会使用它们，没人会认为他们的这种选择会让自己处于不利地位。

所以让我们假设，我们并不是在谈论一种类似于“施乐艺术”的新的写作类型。鉴于这一规定，大语言模型生成的文本能否成为作家在创作原创作品时有用的起点，无论是小说还是非虚构？让一个大语言模型来处理样板文件，能让作者把注意力集中在真正有创意的部分吗？

显然，没有人能代表所有的作家，但我想说的是，以一份模糊的非原创作品作为起点，并不是创作原创作品的好办法。如果你是一个作家，在你写原创作品之前，你会写很多非原创的作品。花在非原创工作上的时间和精力不会被浪费。相反，我认为正是它让你最终能够创作出原创的作品。花在选择正确的词汇和重新排列句子以更好地遵循彼此上的时间，教会了你如何通过文章传达想要表达的意思。让学生写论文不仅仅是一种测试他们对材料掌握程度的方法，这给了他们表达自己想法的经验。如果学生从来不用写我们都读过的文章，他们就永远不会获得写我们从未读过的东西所需的技能。

这并不是说，一旦你不再是学生，你就可以安全地使用大语言模型提供的模板。想要表达自己想法的挣扎并不会在你毕业后消失。每当你开始起草一篇新文章时，这种挣扎就会出现。有时候，只有在写作的过程中，你才能发现自己最初的想法。有些人可能会说，大语言模型的输出看起来与人类作家的初稿没有太大不同，但是，我认为这只是表面上的相似。你的初稿不是一个明确表达的非原创想法；这是一个原始想法的拙劣表达，它伴随着你无定形的不满，你意识到它所说的和你想说的之间的距离。这是在重写时能够指导你的东西，这是当你开始使用人工智能生成的文本时所缺乏的东西之一。

写作没什么神奇或神秘的，但它不仅仅是把现有的文件放在一台不可靠的复印机上，然后按下打印按钮。在未来，我们有可能创造出一个人工智能，它能够仅凭自己对世界的经验就写出好文章。我们实现这一目标的那一天确实意义重大，但那一天远远超出了我们的预测范围。与此同时，我们有理由提出这样一个问题：重新表述万维网有何用途？如果我们永远无法访问互联网，不得不在空间有限的私人服务器上存储副本，那么像ChatGPT这样的大语言模型可能是一个很好的解决方案，假设它可以防止伪造。但我们并没有失去对互联网的访问。那么，当你还有原始图片的时候，一张模糊的JPEG到底有多大用处呢？

![image1](https://i.imgur.com/zzF9HnT.jpg)
