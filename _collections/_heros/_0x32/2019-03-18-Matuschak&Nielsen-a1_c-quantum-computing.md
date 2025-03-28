---
layout: post
title:  "Quantum Computing"
author: "Andy Matuschak and Michael Nielsen"
date:   2019-03-18 12:00:00 +0800
image:  https://i.imgur.com/nTmt0Vp.png
#image_caption: ""
description:   ""
position: center
---

_If humanity ever makes contact with alien intelligences, will they possess computers? In sci-fi, alien computers are commonplace._ <!--more--> _If that’s correct, it means there is some way aliens can discover computers independently of humans. After all, we’d be very surprised if aliens had independently invented Coca-Cola or Pokémon or the Harry Potter books. If aliens have computers, it’s because computers are the answer to a question that naturally occurs to both human and alien civilizations._

Here on Earth, the principal originator of computers was the English mathematician Alan Turing. In his paper, published in 1936, Turing wasn’t trying to invent a clever gadget or to create an industry. Rather, he was attacking a problem about the nature of mathematics posed by the German mathematician David Hilbert in 1928. That sounds abstruse, but it’s worth understanding the gist of Hilbert and Turing’s thinking, since it illuminates where computers come from, and what computers will become in the future.

Through his career, Hilbert was interested in the ultimate limits of mathematical knowledge: what can humans know about mathematics, in principle, and what (if any) parts of mathematics are forever unknowable by humans? Roughly speaking, Hilbert’s 1928 problem asked whether there exists a general algorithm a mathematician can follow which would let them figure out whether any given mathematical statement is provable. Hilbert’s hoped-for algorithm would be a little like the paper-and-pencil algorithm for multiplying two numbers. Except instead of starting with two numbers, you’d start with a mathematical conjecture, and after going through the steps of the algorithm you’d know whether that conjecture was provable. The algorithm might be too time-consuming to use in practice, but if such an algorithm existed, then there would be a sense in which mathematics was knowable, at least in principle.

In 1928, the notion of an algorithm was pretty vague. Up to that point, algorithms were often carried out by human beings using paper and pencil, as in the multiplication algorithm just mentioned, or the long-division algorithm. Attacking Hilbert’s problem forced Turing to make precise exactly what was meant by an algorithm. To do this, Turing described what we now call a Turing machine: a single, universal programmable computing device that Turing argued could perform any algorithm whatsoever.

Today we’re used to the idea that computers can be programmed to do many different things. In Turing’s day, however, the idea of a universal programmable computer was remarkable. Turing was arguing that a single, fixed device could imitate any algorithmic process whatsoever, provided the right program was supplied. It was an amazing leap of imagination, and the foundation of modern computing.

In order to argue that his machine could imitate any algorithmic process, Turing considered what operations a human mathematician could perform when carrying out an algorithm. For each such operation, he had to argue that his machine could always do the same thing. His argument is too long to reproduce in full here, but it’s fun and instructive to see the style of Turing’s reasoning:

> Computing is normally done by writing certain symbols on paper. We may suppose this paper is divided into squares like a child’s arithmetic book. In elementary arithmetic the two-dimensional character of the paper is sometimes used. But such a use is always avoidable, and I think that it will be agreed that the two-dimensional character of paper is no essential of computation. I assume then that the computation is carried out on one-dimensional paper, i.e. on a tape divided into squares. … The behavior of the computer [Turing is referring to the person performing an algorithm, not the machine!] at any moment is determined by the symbols which he is observing, and his “state of mind” at that moment. We may suppose that there is a bound BB to the number of symbols or squares which the computer can observe at one moment. If he wishes to observe more, he must use successive observations. We will also suppose that the number of states of mind which need be taken into account is finite.

Obviously, this was an informal and heuristic argument! Invoking a child’s arithmetic book, or someone’s mental state is not the stuff of a rigorous, bulletproof argument. But Turing’s argument was convincing enough that later mathematicians and scientists have for the most part been willing to accept it. Turing’s machine became the gold standard: an algorithm was what we could perform on a Turing machine. And since that time, computing has blossomed into an industry, and billions of computers based on Turing’s model have been sold.

Still, there’s something discomforting about Turing’s analysis. Might he have missed something in his informal reasoning about what an algorithm is? In 1985, the English physicist David Deutsch suggested a deeper approach to the problem of defining what is meant by an algorithm. Deutsch pointed out that every algorithm is carried out by a physical system, whether it be a mathematician with paper-and-pencil, a mechanical system such as an abacus, or a modern computer. Deutsch then considered the following question (I’ve slightly rephrased to make it easier to read):

> Is there a (single) universal computing device which can efficiently simulate any other physical system?

If there was such a device, you could use it to perform any algorithm whatsoever, because algorithms have to be performed on some kind of physical system. And so the device would be a truly universal computer. What’s more, Deutsch pointed out, you wouldn’t need to rely on informal, heuristic arguments to justify your notion of algorithm, as Turing had done. You could use the laws of physics to prove your device was universal.

So let’s come back to our opening question: will aliens have computers? Deutsch’s question above is a simple, fundamental question about the nature of the universe. It’s the kind of question which alien counterparts to Deutsch could plausibly come to ponder. And the alien civilizations of which they are a part would then be led inexorably to invent computers.

In this sense, computers aren’t just human inventions. They are a fundamental feature of the universe, the answer to a simple and profound question about how the universe works. And they have likely been discovered over and over again by many alien intelligences.

There’s a wrinkle in this story. Deutsch is a physicist with a background in quantum mechanics. And in trying to answer his question, Deutsch observed that ordinary, everyday computers based on Turing’s model have a lot of trouble simulating quantum mechanical systems. In particular, they seem to be extraordinarily slow and inefficient at doing such simulations. To answer his question affirmatively, Deutsch was forced to invent a new type of computing system, a quantum computer. Those quantum computers can do everything conventional computers can do, but are also capable of efficiently simulating quantum-mechanical processes. And so they are arguably a more natural computing model than conventional computers. If we ever meet aliens, my bet is that they’ll use quantum computers (or, perhaps, will have quantum computing brains). After all, it’s likely that aliens will be far more technologically advanced than current human civilization. And so they’ll use the computers natural for any technologically advanced society.

This essay explains how quantum computers work. It’s not a survey essay, or a popularization based on hand-wavy analogies. We’re going to dig down deep so you understand the details of quantum computing. Along the way, we’ll also learn the basic principles of quantum mechanics, since those are required to understand quantum computation.

Learning this material is challenging. Quantum computing and quantum mechanics are famously “hard” subjects, often presented as mysterious and forbidding. If this were a conventional essay, chances are that you’d rapidly forget the material. But the essay is also an experiment in the essay form. As I’ll explain in detail below the essay incorporates new user interface ideas to help you remember what you read. That may sound surprising, but uses a well-validated idea from cognitive science known as spaced-repetition testing. More detail on how it works below. The upshot is that anyone who is curious and determined can understand quantum computing deeply and for the long term.

That said, you need some mathematical background to understand the essay. I’ll assume you’re comfortable with complex numbers and with linear algebra – vectors, matrices, and so on. I’ll also assume you’re comfortable with the logic gates used in conventional computers – gates such as AND, OR, NOT, and so on.

If you don’t have that mathematical background, you’ll need to acquire it. How you do that depends on your prior experience and learning preferences – there’s no one-size-fits-all approach, you’ll need to figure it out for yourself. But two resources you may find helpful are: (1) 3Blue1Brown’s series of YouTube videos on linear algebra; and (2) the more in-depth linear algebra lectures by Gil Strang. Try them out, and if you find them helpful, keep going. If not, explore other resources.

It may seem tempting to try to avoid this mathematics. If you look around the web, there are many flashy introductions to quantum computing that avoid mathematics. There are, for instance, many rather slick videos on YouTube. They can be fun to watch, and the better ones give you some analogies to help make sense of quantum computing. But there’s a hollowness to them. Bluntly, if they don’t explain the actual underlying mathematical model, then you could spend years watching and rewatching such videos, and you’d never really get it. It’s like hanging out with a group of basketball players and listening to them talk about basketball. You might enjoy it, and feel as though you’re learning about basketball. But unless you actually spend a lot of time playing, you’re never going to learn to play basketball. To understand quantum computing, you absolutely must become fluent in the mathematical model.

▼ Full Thesis

---

[Andy Matuschak and Michael A. Nielsen, “Quantum Computing for the Very Curious”, San Francisco (2019)](https://quantum.country/qcvc).
