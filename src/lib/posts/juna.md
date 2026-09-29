---
title: Juna
date: "2026-08-26"
description: From an enthusiast to a designer
tags: [showcase, keyboards]
banner:
  path: "/assets/img/projects/juna/Juna_cyan.avif"
  alt: "Post Banner"
  width: 2560
  height: 1707
author:
  name: LogolicusZ
  social: https://www.instagram.com/logolicusz.kb
---

<script>
  import Carousel from '$lib/components/Carousel.svelte';

  const ddsProto = [
    { src: '/assets/img/blog/juna/juna_2024_01.avif', alt: 'Juna prototype, front three-quarter view' },
    { src: '/assets/img/blog/juna/juna_2024_02.avif', alt: 'Juna prototype, side profile' },
    { src: '/assets/img/blog/juna/juna_2024_03.avif', alt: 'Juna prototype, top-down view' },
    { src: '/assets/img/blog/juna/juna_2024_04.avif', alt: 'Juna prototype, weight detail' }
  ];

  const finalProto = [
    { src: '/assets/img/projects/juna/file_6.avif', alt: 'Juna prototype, front three-quarter view' },
    { src: '/assets/img/projects/juna/file_7.avif', alt: 'Juna prototype, side profile' },
    { src: '/assets/img/projects/juna/file_8.avif', alt: 'Juna prototype, top-down view' },
    { src: '/assets/img/projects/juna/file_9.avif', alt: 'Juna prototype, weight detail' },
    { src: '/assets/img/projects/juna/file_10.avif', alt: 'Juna prototype, rear view' },
    { src: '/assets/img/projects/juna/file_11.avif', alt: 'Juna, assembled and finished' },
    { src: '/assets/img/projects/juna/file_12.avif', alt: 'Juna, angled detail shot' },
    { src: '/assets/img/projects/juna/file_13.avif', alt: 'Juna, case and weight' },
    { src: '/assets/img/projects/juna/file_14.avif', alt: 'Juna, keycaps installed' },
    { src: '/assets/img/projects/juna/file_15.avif', alt: 'Juna, finished build' }
  ];
</script>

<figure class="my-6">
  <a href="/assets/img/projects/juna/Juna_cyan.avif" data-pswp-width="2560" data-pswp-height="1707" class="block cursor-zoom-in"><img src="/assets/img/projects/juna/Juna_cyan.avif" alt="Juna in cyan" title="Juna"
       width="2560" height="1707" loading="eager"
       class="w-full rounded-sm" /></a>
  <figcaption class="text-sm text-center text-neutral-500">
    Photo by <a href="https://www.instagram.com/bowlkeyboards/" class="unset-link underline underline-offset-2 transition-colors hover:text-accent-green">Bowl</a>
  </figcaption>
</figure>

I first found my way into the hobby thanks to my at the time main keyboard breaking down. Since it was still under warranty I got the money back for it and started looking for a new keyboard, which led me down the rabbit hole of YouTube...

Thanks to [Taeha Types](https://www.youtube.com/@TaehaTypes), I discovered the mechanical keyboard hobby. I was searching for a new keyboard on YouTube when his videos got recommended to me, and I was immediately hooked. If I have to describe what I was feeling when I found the mechanical keyboard hobby, I think I would have to say it was pure excitement. I love to tinker with a lot of stuff, the same reason I got into tech and computers.

Now, many years later, I am older and have picked up many other interests along the way, like designing. I myself have wanted to design my own board for the longest time; I just did not have the confidence in myself to start, since I often feared that I would do it incorrectly.

## Why design a keyboard?

My honest answer to that question would be: "Why not!"

I first started playing around with the idea of designing my own keyboard at the end of 2023, early 2024. I can't really remember the exact reason why, but from what I can recollect of that time it was honestly the next logical direction in the hobby for me.

I first started looking into what other designers were using to design their boards, and while there are quite a few options for CAD software, I saw that a lot of people were using Fusion 360.

After that I started by just getting used to it. I had never used any sort of CAD program before but honestly found it to be far more intuitive than Blender, for example, which is commonly used for creating renders inside the hobby.

Since I barely knew anything about designing at all, I decided to see if anyone had made some videos about it, and it turned out that there were quite a few. In the end I landed on one of [Hali's](https://www.youtube.com/@hali4045) YouTube videos. Though they were a bit too fast to follow, I managed to actually sort of create something that resembled a keyboard, and this was the result of that:

<figure class="my-6">
  <a href="/assets/img/blog/juna/first_tkl_fusion.avif" data-pswp-width="2328" data-pswp-height="1272" class="block cursor-zoom-in"><img src="/assets/img/blog/juna/first_tkl_fusion.avif" alt="Juna design in Fusion 360" title="Juna"
       width="2328" height="1272" loading="eager"
       class="w-full rounded-sm" /></a>
  <figcaption class="text-sm text-center text-neutral-500">
    Fusion 360 Screenshot
  </figcaption>
</figure>

During this process, I also realized that I might not have enough knowledge to create a design from the ground up that would even be producible, as I really didn't know anything about margins, PCB sizes, daughterboard sizes, etc... Just things you need to be aware of when designing a keyboard.

Like many others, I have a day job so that I can afford our lovely hobby, which leads me to be surrounded by many tech-savvy individuals. One of them, who is not only one of my good friends but also a really big fan of open-source projects, has worked with me on many projects, one of them being [Explorecraft](https://explorecraft.net/). This led me to explore open-source keyboard designs, and I was particularly impressed by the work of Shy and Hali.

This led me to check out their projects on GitHub and play around with the design files inside Fusion.

Although this allowed me to learn a lot about how a finished design looked, it always sort of felt wrong to just re-hash someone's finished design with just a different name and engraving, even if it was an open-sourced keyboard.

While checking out the open-source projects from [Shy](https://github.com/Steinkampdesigns), I started conversing with him over Discord, asking him tons of questions about certain details, like how big WKL blockers are or what the margin is for this and that, etc...

He kindly offered to send me a full recording of him making a 60% from the first sketch to the final fillet. This was probably the most influential piece of media for me when it came to keyboard designing.

Again, thank you so much, Shy!

And now, closing off this chapter, we come to what the outcome was of that "how to video":

## Juna

Juna is the result of me following the basic ideas that Shy showed me in his guide while also adding my own touch.

Ever since learning about the history of this hobby and [OTD](https://geekhack.org/index.php?topic=123118.0), I have always been fascinated with the simplicity of the 360C and yet how classy it managed to look. So I decided to make Juna a more modernized 60% version of the 360C.

The name and theme of the board stem from the Charm album by Clairo!
<iframe data-testid="embed-iframe" style="border-radius:12px" title="Juna by Clairo" src="https://open.spotify.com/embed/track/2mWfVxEo4xZYDaz0v7hYrN?utm_source=generator&si=0a11e6bbbd7f4289" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

The design started off very cleanly, with just a simple engraving of the name of the board on the inside of the weight.

This is also when I decided I wanted to make a small run of this keyboard, or at least have a prototype I could call mine. Like many other designers, I chose to go with DDS as the manufacturer, since they were well known and their quality is really good.

<figure class="my-6">
  <a href="/assets/img/blog/juna/juna_fusion.avif" data-pswp-width="1449" data-pswp-height="1076" class="block cursor-zoom-in"><img src="/assets/img/blog/juna/juna_fusion.avif" alt="Juna design in Fusion 360" title="Juna"
       width="1449" height="1076" loading="eager"
       class="w-full rounded-sm" /></a>
  <figcaption class="text-sm text-center text-neutral-500">
    Fusion 360 Screenshot
  </figcaption>
</figure>

I ordered my first prototype in October of 2024, and to be honest, I could not wait for it to arrive. The idea of finally holding something physical, a design I had until then only seen on a screen, was really something.

When a keyboard gets manufactured, it goes through a few steps before it's finished. First the CNC machine is programmed, which in turn carves the keyboard out of a solid block of aluminum. After that it gets prepared for anodizing, which gives the board its final color and feel. And then, at last, it gets shipped to me.

Here you can see how a keyboard looks right out of the CNC machine:

<figure class="my-6">
  <a href="/assets/img/blog/juna/juna_pre-finish.avif" data-pswp-width="2560" data-pswp-height="1920" class="block cursor-zoom-in"><img src="/assets/img/blog/juna/juna_pre-finish.avif" alt="Juna design in Fusion 360" title="Juna"
       width="2560" height="1920" loading="eager"
       class="w-full rounded-sm" /></a>
  <figcaption class="text-sm text-center text-neutral-500">
    Photo from DDS
  </figcaption>
</figure>

And how it looks once it's finished:

<figure class="my-6 not-prose">
  <Carousel images={ddsProto} />
  <figcaption 
    class="mt-3 text-sm text-center text-neutral-500">The finished DDS prototype -
    Photos by <a href="https://www.instagram.com/logolicusz/" class="unset-link underline underline-offset-2 transition-colors hover:text-accent-green">Me</a>
  </figcaption>
</figure>

Although I was happy with how the proto turned out, it did have a few issues that I needed to fix before running any sort of group buy:

- The O-ring standoffs were too high, leading to so much compression that the typing experience felt like a very poorly designed top mount.
- The weight had a slight curve to it, which kept it from sitting flush inside the case.
- Some thicker cables weren't usable, since the USB hole was a bit too small.

With those issues sorted out, I decided to run a small group buy for the board, setting the MOQ at 10. For those who don't know what a group buy is, it's comparable to a Kickstarter campaign.

Sadly, we didn't reach the MOQ that first time. It was a little demotivating, but I sat down anyway and started reworking the design, as the file I had been using just wasn't really usable anymore. Every little change in the timeline would break 20 other changes; those who have made boards themselves know exactly what I'm talking about.

Once the design was in a better place, I decided to do a proper IC on GeekHack, which you can still find here: [Juna Geekhack IC](https://geekhack.org/index.php?topic=125384.0). The IC helped a lot to spread the board to more people, and it was even shown off in Black Simon's weekly IC reviews. That's where I received the feedback that I should add a JST cover, something I hadn't considered until that point, to fix the hollowness of the keys that sat right on top of the JST channel and daughterboard hole.

After making that last final change, I ordered another prototype in June of 2025. This is also the prototype most of you are familiar with.

<figure class="my-6 not-prose">
  <Carousel images={finalProto} />
  <figcaption 
    class="mt-3 text-sm text-center text-neutral-500">The June 2025 prototype - 
    Photos by <a href="https://www.instagram.com/logolicusz/" class="unset-link underline underline-offset-2 transition-colors hover:text-accent-green">Me</a>
  </figcaption>
</figure>

Not long after releasing the IC, I approached Jae from [Prototypist Keyboards](https://prototypist.net/) to see if they might be interested in vendoring the project, which he agreed to do — something that still feels a little surreal to me.

I received the board a few months later, just in time for it to be shown off at Mechanicon.

<figure class="my-6">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <a href="/assets/img/blog/juna/mechanicon_juna1.avif" data-pswp-width="2560" data-pswp-height="1707" class="block cursor-zoom-in"><img src="/assets/img/blog/juna/mechanicon_juna1.avif" alt="Juna on display at Mechanicon" title="Juna at Mechanicon"
         width="2560" height="1707" loading="lazy"
         class="w-full aspect-3/2 object-cover rounded-sm" /></a>
    <a href="/assets/img/blog/juna/mechanicon_juna2.avif" data-pswp-width="2560" data-pswp-height="1707" class="block cursor-zoom-in"><img src="/assets/img/blog/juna/mechanicon_juna2.avif" alt="Juna on display at Mechanicon" title="Juna at Mechanicon"
         width="2560" height="1707" loading="lazy"
         class="w-full aspect-3/2 object-cover rounded-sm" /></a>
  </div>
  <figcaption class="text-sm text-center text-neutral-500">
    Photos by Def_
  </figcaption>
</figure>

This really marked the start of Juna's journey into a bigger group buy. Over time the vendor list grew to include Kibou for Asia, Delta Key Co for the EU, and later Bowl Keyboards for the US, with Bowl eventually taking over as the leading vendor for the board.

Besides the board itself, I also got Mechlovin on board to make the PCBs for the project. I've used their PCBs for a few years now and they have always been reliable, with 0 issues.

While preparing the last details of the group buy, DDS our original manufacturer raised their prices significantly, and later followed up with the statement that they would no longer be taking on any keyboard projects in the future.

The increase was steep enough that we decided to delay the group buy, along with the initial review stream by Alexotos, and find a new manufacturer. This is where I need to give a big thank you to Bowl, as he was the one who tracked down a new one: Keyreative. Up until that point they were only known for making keycaps, with Juna and the Shy60 being the first keyboard projects for them.

We got some quotes from Keyreative that we were happy with, and shortly after making the switch we ordered the first prototype from them. In total there were 3 Keyreative protos made alongside the two original DDS protos.

Finally, the GB for Juna opened on the 27th of April, followed shortly by the first review stream by Alexotos on May 3rd.

I also want to give a big shout out to Alexotos, ExtraPriusPlease (EPP), and Mugen for showcasing the board and taking some awesome pictures of it.

<figure class="my-6">
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
    <a href="/assets/img/blog/juna/alexotos.avif" data-pswp-width="900" data-pswp-height="900" class="block cursor-zoom-in"><img src="/assets/img/blog/juna/alexotos.avif" alt="Juna photographed by the community" title="Juna"
         width="900" height="900" loading="lazy"
         class="w-full aspect-square object-cover rounded-sm" /></a>
    <a href="/assets/img/blog/juna/epp.avif" data-pswp-width="900" data-pswp-height="900" class="block cursor-zoom-in"><img src="/assets/img/blog/juna/epp.avif" alt="Juna photographed by the community" title="Juna"
         width="900" height="900" loading="lazy"
         class="w-full aspect-square object-cover rounded-sm" /></a>
    <a href="/assets/img/blog/juna/mugen.avif" data-pswp-width="900" data-pswp-height="900" class="block cursor-zoom-in"><img src="/assets/img/blog/juna/mugen.avif" alt="Juna photographed by the community" title="Juna"
         width="900" height="900" loading="lazy"
         class="w-full aspect-square object-cover rounded-sm" /></a>
  </div>
  <figcaption class="text-sm text-center text-neutral-500">
    Profile pictures of <a href="https://www.instagram.com/alexotos/" class="unset-link underline underline-offset-2 transition-colors hover:text-accent-green">Alexotos</a> , <a href="https://www.instagram.com/extrapriusplease.kb/" class="unset-link underline underline-offset-2 transition-colors hover:text-accent-green">EPP</a> and <a href="https://www.instagram.com/mugen.kbd/" class="unset-link underline underline-offset-2 transition-colors hover:text-accent-green">Mugen</a>
  </figcaption>
</figure>

Juna closed its GB phase on the 25th of June and is currently sitting in the manufacturing queue (as of 26.08.2026).


## Retrospective

After everything, I'm mostly just thankful. Thankful to those who decided they liked Juna enough to buy it, and thankful to everyone who supported me along the way, be it my close friends, the homies I've made through the hobby, or the vendors.

I got to learn a lot about a process I'd mostly only ever seen from the consumer side, and I have to say I now finally understand why it sometimes takes people years before they feel prepared or comfortable enough to initiate a group buy, let alone actually fulfill one.

Honestly, a few years back, just the idea of being able to say I made a keyboard felt impossible. Now it's just like any other Tuesday, haha.

After all the stress and time it took, I do think it was worth it — though I definitely wouldn't recommend everyone go through this process.

Again, thank you to everyone I've met throughout this, and I can't wait to see what my next project brings. As a good friend of mine put it: "Bro was traumatized by Juna and goes at it yet again."

I hope everyone has a nice day!

Logo out.

## Sound test

<div class="aspect-video my-6">
  <iframe src="https://www.youtube.com/embed/7j0Cmh_V6-Q?si=6Q07r3gS10XkSmZs" 
  title="YouTube video player"
  class="w-full h-full rounded-sm"   
  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen></iframe>
</div>

## Streams

<div class="aspect-video my-6">
 <iframe class="w-full h-full rounded-sm" src="https://www.youtube.com/embed/WKCUgtjD19c?si=ShWllxayPgc8Wzvy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div class="aspect-video my-6">
 <iframe class="w-full h-full rounded-sm" src="https://www.youtube.com/embed/LY2jGlEg_fE?si=t6SatBv2bTjqIU99" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div class="aspect-video my-6">
 <iframe class="w-full h-full rounded-sm"  src="https://www.youtube.com/embed/SilqzEMsiNs?si=89TRaOlilaXj_BtC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



