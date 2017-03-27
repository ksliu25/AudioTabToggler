<h1>AudioTabToggler</h1>
<p>
    This Google Chrome extension simply creates a keyboard shortcut (Alt + Shift + Tab #) to toggle audio sources in tabs 1-4 (Chrome extension limitation, although there might be more involved means to make more -- 4 seems like plenty).
</p>

<p>
    Tested with Youtube, SoundCloud, Pandora, Google Music, anything with a single instance of an audio or video tag. Unreliably, it also features a straight document queryselector for those that dynamically generate HTMLAudioElements or use HTML5 Canvas in more modern audio players such as SoundCloud. <b>Also note that it seems this will not work for anything that requires authentication -- such as Spotify's Web Player.</b>
</p>

<h2> Installation</h2>
<p> Download the zipped file, extract, load up Chrome Extensions and "Load unpacked extension..." pointed at the extracted directory </p>
<h2> Usage </h2>
<p> 
    Alt + Shift + Tab # on Mac, Ctrl + Shift + Tab # on PC for only the FIRST 4 TABS as this is a limitation set forth by Chrome extension. I'm sure there are ways around it but it seems a lot more involved than what I needed, also are you listening to more than 4 different audio sources?! 
</p>
<p>
    Additionally, you can set them yourself by navigating to here in your url bar:
    chrome://extensions/configureCommands
</p>