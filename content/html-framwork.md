---
title: "Why I built a HTML Framework"
description: "I have built a framework that makes me 2x faster."
---

![image](/blog-images/HTML.png)

## Why I built a HTML Framework

There is a big gap between the capabilities of raw HTML and css and the component libraries that are used all over the internet. HTML on one hand is versitle but asks for a lot of time as compensation from the developer. Whereas component libraries are large prebuilt section that you can put right in your code, which is only nice untill you need to make changes to it. I spent a lot of time looking around for something that solved both these problems. I figured I could use a component based framework to allow me to create custom html tags aiming for something that is far faster to write yet customisable in every sence like any <p></p> tag would be.

### Foundations

Starting from the ground up and looking at the lines of css we would write the most when creating a component from scratch I took a look at a simple header. Whenever I create a centered header there is a list of css that I write straight away while making sure to assign all the classes ill need. So created a tag <mheader></mheader>. Using some nuxt magic you can make this act like a native tag. Using .mheader to select it out the box there is no need for extra classes. It is a flex column with default gap and margin centering it. This can be fully changed by simply selecting the class .mheader and overriding the styles. Using this you can get 95% of what you want without a single line of css. Now knowing that it was possible and easy I started automating more simple basic structures. The next creation was the <splitrow> tag. This is a row of two items that take up 50% of the parent by default. Again very simple and doesnt take long, but I find myself using this all the time saving maybe 5 minutes each time. This also doesnt require you pass in slots and label them so they go to the right places. Using some clever js all you write is the splitrow tag, then two content items and close the splitrow tag. Thats it! Each child is automatically assigned a class, left-content and right-content which is available to you when you write it. You can then use these classes to assign when the boxes should colapse into a column for smaller screens using the (flex: 1 1 300px) property. Or you can change the whole thing using the .splitrow selector giving you full control of tag. Just like native css.

### CSS Frameworks

I understand that this draws many similarities to CSS framworks like bootstrap or tailwind but I feel they are just not as nice to work with, and also I think that using these html tags is much faster and more intuative. Not to mention the code is a lot cleaner and easier to read. I'll often write a section that has 20 lines of css and is completely responsive and looks the way I intended.

### More Features

There are many other basic features I could talk about but understanding the power and simplicity of this framework I wanted to create more. I created things like the <trinav> or <binav> tags which allow for three and two section navs respectivly. Again all you write is <trinav> div div div </trinav> and the structure is already right there. The nav children already have their own selectors basked in for modifications. I have never built a nav in under 3 minutes before this. Or another example is the <mpage> tag. This centers content and gives it a max width of 1600px by default. Which I use everywhere to give everything perfect alignment and site padding that is also responsive. Out the box desktop has 50px inline-padding, then mobile gets 25px and small mobile gets 15px. Of course you can override these value but just being able to write a few words and have this functionality should have been available in vanilla HTML. Some more examples are the flex columns and rows. So you will rarely be defining those in css anymore. The list goes on. Each basic structure may only save you a matter of minutes or sections but it adds up fast.

### Advanced capabilities.

Iv added in a <carousel> tag that generates a carosel out of the box. All you do is add the content items between the tags. You have the option to customise the buttons and of course you have full control of all the css used in the carousel and its children. Its never been so easy to have these advanced features written in minutes. Or the <lazyboi /> tag. This operates like the native <img> tag but it just lazy loads them. Simple just swap out the lazy images with this one and off you go. Another one I use a lot are the <appear> tags. Simple any content inside the tags will slide in when in the user viewport. This one you dont so much change the css with selectors you pass props. I had tried to avoid this as much as possible but here it was needed, until I learn how to create custom css properties, hehe. You can pass through things like duration, delay, threshold, direction and so on. Allowing for some subtle and effective slides with 0 css.

### Conclusion

I could go on listing the many tags and capabilities of such a system but I think you can imagine how powerful this could be. I have only started development recently and would like to add loads more to this as it's been a gamechanger to how I write websites now. If any of you would like to hear more or give it a go let me know and i'll make it public. Is this a good approach or is there really something I have been missing. I keep thinking surely someone is solving this apparent gap already? Either way its fun to build and is speeding up my work for sure. Thanks for reading!
