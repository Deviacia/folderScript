Hi there.

NodeJS is required for the script to work

This script use <code>index.html</code> template file from <code>./template</code>. <br />
After it script creating any count of folders with independent names from array, <br />
and <strong>insert in each folder new index.html with edits</strong> in <code>{width}</code> and <code>{height}</code> from array.<br />

In the base template, we need to write variables <code>{width}</code> and <code>{height}</code> where we need to do edits <br />

GO TO <code>./index.js</code> <br />
Like example we have array with this sizes<br />

const templates = [ <br />
    {w: 300, h: 300}, <br />
    {w: 200, h: 420}, <br />
    {w: 300, h: 420}, <br />
    {w: 600, h: 420} <br />
]

Script create folder with name <code>{dirExport}</code>, in example it is <code>html</code> <br />
And inserted inside 4 folders with names : <code>./html/300x300</code>, <code>./html/200x420</code>, <code>./html/300x420</code> and <code>./html/600x420</code> <br />
And in each folder inserted index.html with the sizes corresponding to the name instead of variables

P.S. Sorry for my bad english :) and not full doc.
P.S.S. I recommend to do edit only array inside index.js with sizes and  index.html
