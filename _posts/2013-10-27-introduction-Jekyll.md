---
title: Introduction to Jekyll
layout: default
---

Jekyll is a Ruby script to generate a static HTML website from source text and themes. Unlike Wordpress, Drupal, Tumblr or other services, the HTML is generated before being deployed to the web server– not during each web request. Therefore, blogs using Jekyll load extremely fast and can handle high volumes of traffic without hiccups.

In this tutorial, we will build a Jekyll website from scratch. You’ll learn how to setup Jekyll to build websites locally, create a basic blog theme using Twitter Bootstrap, configure the theme to display blog posts and static pages, and deploy the finished site on Amazon’s S3 platform.

##Prerequisites

For this extensive tutorial, I will assume you have some experience with the following:

<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Command Line or Terminal</li>
    <li>DNS settings and nameservers</li>
</ul>

You do not have to be a web designer or programmer, though it may be helpful in understanding some of concepts used in this tutorial. You also don’t need to know much about the command line– I provide all commands in their entirety. You will, however, have to know the basics of directory navigation (e.g. know what cd does) and ultimately be comfortable using the command line to manage and deploy your website.

Though you do not have to know a lot about DNS or changing your domain’s nameservers, it will be helpful in the final step where we deploy the website to Amazon S3 and assign a domain name to the bucket.

Even though Jekyll is built in Ruby, you do not need to know the Ruby programming language. However, if you opt to build Jekyll plugins, Ruby experience is required.


While some of the concepts associated with Jekyll can be complex to beginners, I’ll walk through every step. The command line, in particular, can be relatively menacing for newbies, but once you know how to use the jekyll command, generating your website is a breeze.

###Why Jekyll?

A couple of years ago, I made the decision to host my blog on Tumblr. I didn’t do it for the social features, but rather for the pre-built infrastructure. Tumblr is a large service designed to handle massive amounts of traffic, and on the few occassions where this traffic capacity was important for my blog, Tumblr performed admirably.

But despite its reliability during heavy traffic spikes, Tumblr periodically showed the dreaded “We’re Sorry” message when the entire service was overloaded or down.

<h4>Tumblr Overloaded</h4>

In December of 2012, Tumblr failed spectacularly when the entire platform was taken down due to a “network issue.” A similar outage occured in October when the site was down for multiple hours. To top it off, a bug in the website caused thousands of users to unknowingly repost a racist hate message on their own blogs. The bug spread like a virus and infected both small-time bloggers and large publications such as The Verge.

####Moving from Tumblr

It was clear that Tumblr, like all other services, suffered from its issues– both in reliability and security. After the outage in December, I decided to move my blog to another platform. There were several alternatives I considered, ranging from hosted alternatives to more advanced, manual platforms such as Jekyll.

####Wordpress.org

Wordpress is an extremely popular platform and comes in self hosted and managed flavors. Wordpress.org is the open source, self hosted version. Simply buy standard services from a web host, upload the Wordpress platform through FTP, and set it up.

It’s well known, well supported, and there are tons of cache plugins to increase the performance of your website. The problem is, without these performance tweaks, Wordpress can easily crash your server under load. With the proper tuning, Wordpress can perform quite well, but it often involves a lot of work and maintenance.

####Hosted Wordpress

The other alternative to consider is a hosting provider that specializes in Wordpress blog hosting. Services like WPEngine and Wordpress.com have a lot of experience with Wordpress and know how to squeeze every ounce of performance out of it. With a slightly higher monthly bill on these services, your site will require less maintenance and you can focus on writing.

####Jekyll

My search for a great blogging platform ultimately brought me to Jekyll. I’d heard about it in the past, but never taken a detailed look because I didn’t know Ruby, the language Jekyll is written in. To my delight, it turns out that using Jekyll requires no Ruby experience.

Jekyll can be hosted on any web hosting service that serves static files, including Heroku, Amazon EC2, Amazon S3 and CloudFront, or even a service like Dropbox. This is a major benefit of Jekyll– there is no vendor or platform lock in. Any HTTP server that can serve files can run an entire Jekyll website.

Another benefit of Jekyll, which comes as a result of the nature of static websites, is high performance. Any modern static file server, such as nginx, can serve over 10,000 requests per second. With an in memory cache, such as Varnish, performance can be increased to over 30,000 requests per second. Finally, Jekyll websites can be hosted on a global content delivery network, which decreases latency and load times for visitors around the world.

Jekyll-powered websites are also extremely secure. Unlike Wordpress, which has an administration interface that can be compromised, Jekyll websites are immune to almost every type of web security attack. This is also due to the fact that Jekyll websites are static– no code is run on your server. The only weakness is the password to your FTP or hosting account. As long as the passwords are kept safe, your website is immune to the majority of issues other solutions face.

####Who Jekyll is For

Jekyll, while an extremely promising platform, is mainly targeted at tech-savvy bloggers and web masters. With Jekyll, don’t expect to hit an “install” button and suddenly have a beautiful theme and an easy administration interface waiting for you like you would with Wordpress.

But what Jekyll lacks in newbie-friendliness it makes up for in power and flexibility. With some Ruby code (or even without writing a single line of it), you can create a blog that feels dynamic and versatile. For example, unlike Wordpress, where creating a custom layout for a single post involves modifying your entire theme and re-uploading it through FTP, Jekyll allows you to specify a different layout to use with a single configuration line in each post.

Jekyll is not a silver bullet and will not magically make you a more popular or proficient blogger, but as you will see, it is a worthwhile tool to learn how to use. Jekyll allows you, the content author, to display your work as you see fit, without the typical restrictions imposed by other blogging platforms. Personally, as a developer and tinkerer, this flexibility is unparalleled in blogging tools and I am always discovering new and creative ways to present my blog posts and content.