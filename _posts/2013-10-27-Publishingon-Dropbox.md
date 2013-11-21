---
title: Publishing Your Jekyll Website on Dropbox
layout: default
---


In this miniature lesson, we'll use Dropbox to host a Jekyll website. While you'll want to refrain from using this in production because of the inability to use a custom domain name, Dropbox is perfect for sharing an unfinished website with your clients. Best of all, using Dropbox in this way is free.

First, you'll want to register for a Dropbox account. Registration is completely free and you'll receive two gigabytes of storage space initially. There's plenty of opportunities for you to increase the storage space you have available for free-- Dropbox regularly runs promotions giving away space.

Once you've registered for Dropbox and have installed the syncing application on your Mac or PC, you can create a new folder in your Dropbox called "Public" (with a capital "P" and no quotation marks). Because new accounts do not have a Public folder by default, you may have to enable it in your Dropbox account by clicking on this link.

Dropbox Public Folder

Inside of this public folder, you can place your generated Jekyll website. If you do not have a Jekyll website already built or know how to use Jekyll, you can follow the main tutorial in this course or download the completed Jekyll sample website.

I recommend copying the _site folder generated from running the Jekyll command into your Public folder, and then renaming it to something more descriptive. For example, you may want to rename the folder to "Blog" so that the finished, generated website is located in "Dropbox/Public/Blog".

Once you've copied the generated website into your public folder, right click the index.html file inside of your website's root folder, hover over the "Dropbox" menu item, and copy the public link. Try pasting it into your browser to see your website.

It's important to note that if your website looks like the following, you will want to ensure you have not used absolute paths in your assets.

Broken Paths

For example, images with a path of /img/background.jpg will not work due to the leading slash. You will need to correct the relative paths for each directory level as well.