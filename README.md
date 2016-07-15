## Please read if you are updating the Tampermonkey script:

If you update the script, please also increment the version number to allow the scripts running on our machines to auto-update.

##Instructions for setting up Tampermonkey and running the "Internal Comments Only" Jira script:

Before starting, please note that **these instructions are for use with Chrome**. Please always use Chrome for Jira with the Tampermonkey script running.

Download and install the Tampermonkey extension for Chrome from here: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en

Click on the Tampermonkey icon and choose “Add new script”

Delete all the default content in the editor and replace with the contents of the script found here:

https://raw.githubusercontent.com/AmpersandHQ/Tampermonkey/master/script.js
and save.

Now go to the Jira issue search page and click on any of our BAU tickets. 

##TESTS:

Click on the Comment field on the ticket you have selected. Only the “Internal Comment” button should be visible. When you next make a comment you should see that the comment is marked as INTERNAL.

Click to edit the comment you have just made. On the Edit Comment screen, the only button visible should be "Add to issue only".

Click on one of the workflow transitions, e.g. "Resolve", so that you get a dialog screen with a Comment section. Only the Internal Comment should be available. Make a comment and submit. Check that the comment you have just added to the ticket is marked as INTERNAL.
