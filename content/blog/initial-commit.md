---
title: "Initial Commit"
description: The stroy behind this website and blog
date: 2021-10-17T12:31:28-05:00
tags:
    - stroy
    - background
draft: false
images:
    - /images/blog/initial-commit/first-version-landing.jpg
---

According to the IANA records, I purchased this domain in January of 2014 in the hope of setting up a personal website for myself to showcase my projects, work, and interests. But as a developer, we all like to tinker with all sorts of shiny new technology instead of doing the bare minimum needed to publish something on the web. Right?

According to my [first commit](https://github.com/ali92hm/alihm/commit/07e2867d80b9267eb0a4d655cffeaba3b886523a) on this website’s [repo](https://github.com/ali92hm/alihm) on Jun 4, 2014, I started with a simple Node/Express application hosted behind an Nginx server running on an AWS EC2 free tier that I got for being a student. I’m not going to go back to that commit, run the application, and see what it looked like. So instead, I found the first [internet archive snapshot](https://web.archive.org/web/20151201235118/http://www.alihm.net/) (taken in Dec 2015), and it looks like this.

![first-version-landing](/images/blog/initial-commit/first-version-landing.jpg)

Looks [familiar](https://alihm.net)?

But trust me, while the front end of my landing page looks exactly the same (albeit with newer pictures), this simple website's backend, build system, and hosting system have gone through quite a bit of evolution. From EC2/Nginx to k8s (I got free Azure credits at Microsoft) with certmanager  served by Node, then static files served by Nginx on k8s, back to simple VM and certmanager, to finally running on S3 and Cloudfront, I’ve wasted quite a bit of time for something that probably should have been just Medium or Wix. Not to mention that initially, I planned to build my own blogging/CMS application with a database instead of using something off the shelf… so I guess this explains why I’m a backend/infra engineer.


The "wasted time" that I referred to above is not really wasted time. Sure, if I really really depended on this website and needed it to survive (the way a startup does or to get a job), I would have wasted plenty of time and should be out of business by now. But in a way, as I learned more and more sophisticated things through my professional career, I started applying them to this website's infrastructure. It's very common for junior engineers to do the same, and I don't think there is anything wrong with it. In a way, recreating all those systems in a miniature way solidified my learnings and made sure I've grasped a good understanding of those systems.

As engineers start to grow into more senior roles, they realize simple is better than complex, and the fewer moving parts there are, the more stable the product is. So as I started to get the technical complexity chips off my shoulder and gathered more courage to ship things as they are, I decided to move my website to a completely static site and use a generator for the blog to get some writing out. But I couldn't find the time to do so.

This brings us to August 2021 where I was completely burnt out from work and decided to leave my job to rest and work on things that I never seem to find any time for. So far, two months have passed, and I've been pleased with my progress. I've traveled, got back to strength training, read a couple of books, learned a bunch of new cool things, started brewing kombucha, completed a side project (blog post coming soon), and decided to set up and finish this website once and for all so I can get to writing and improve my non-technical skills. HN has been a great inspiration to me to write more and share what I know. So far, I've been mostly a lurker, but I'm hoping to change that soon in the form of publishing my own work (at least maybe until I go back to work again).

Putting the first piece of content out is always the hardest, so here is the Initial commit.

Git push!
