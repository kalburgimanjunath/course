##Installing Jekyll

Before we begin to build the website itself, we must first install the Jekyll tool.

#Mac OS X

Jekyll is fairly easy to install on Mac OS X because Ruby, platform Jekyll runs on, comes preinstalled. If you’d like to update Ruby to use a more recent version, feel free to do so using RVM or other methods. If you’d like to check the version of Ruby installed, type ruby -v into your Terminal.

####Find the Ruby version installed

Open your Terminal and install the Jekyll Gem with the command gem install jekyll. If you get an error relating to the version of RubyGems, you can update it with sudo gem update --system.

Once the Gem installation finishes, you can also install several packages we will use later for Markdown processing and syntax highlighting.

####RDiscount

RDiscount is an alternative implementation of Markdown processing written in C. Because it’s a native program, RDiscount is really fast to process your source Markdown files.

You can install it with the command sudo gem install rdiscount.

####Pygments

Pygments is a Python based syntax highlighter. It can be installed on Mac OS X with the command sudo easy_install Pygments. You do not need to install Pygments if you do not plan on posting code snippets on your website.

Alternatively, you can use Homebrew or MacPorts to install Pygments. Instructions for these methods are available on the official Jekyll installation guide.

####Windows

Windows users must install Ruby, if it is not installed already. Unlike Mac OS X, Ruby is not installed by default with the operating system, so most users will have to perform the following steps. Ruby can be easily installed with RubyInstaller. Download and run the latest version of the installer listed on the RubyInstaller website. You will also need to install the latest DevKit, which is also available on the RubyInstaller downloads page.

Once you’ve extracted the DevKit package, use the Command Prompt to cd into the directory and run the following commands.
<pre>
ruby dk.rb init
ruby dk.rb install
</pre>
Finally, install the Jekyll RubyGem with gem install jekyll.

####RDiscount

RDiscount can be installed with a command similar to the one used on Mac OS X above. If you are running your Command Prompt as an administrator, you can simply use gem install rdiscount.