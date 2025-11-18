---
title: "More!"
description: ""
omit_header_text: true
featured_image: images/shiva_moon_landscape.jpg
summary: "Another sample programming article."
type: page
weight: 4
---


This article is an application of the Advent of Code 2022 Day 1 solution to the context of the browser.

To see it in action, you would create a properly-formatted input file. That is, each line would contain just one number, or would be blank to indicate separation between packs.  Save the file somewhere on your computer and then use the input-field below to select it.

{{< rawhtml >}}
<input id="fileInput" type="file" name="file" />

<p id = "result">After you select your file, the max pack-total will appear here!<p>
{{< /rawhtml >}}

The relevant JavaScript file is [here](/js/advent-in-action.js).  Use the Web Inspector tool on your browser to identify the elements on the html page that are accessed by the code.

**Note:**  You do not have to implement any of your Eloquent JavaScript solutions in the browser.  I wrote this article only to teach myself about reading user-provided files in the browser.

{{< rawhtml >}}
<script src="/js/advent-in-action.js"></script>
{{< /rawhtml >}}