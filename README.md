## Please read if you are updating the Tampermonkey script:

If you update the script, please also increment the version number to allow the scripts running on our machines to auto-update.

##Instructions for setting up Tampermonkey and running the "Internal Comments Only" Jira script:

Before starting, please note that these instructions are for use with Chrome. Please always use Chrome for Jira with the Tampermonkey script running.

Before you run the Tampermonkey script, please have a look at any of the “BOZ” tickets to familiarise yourself with what you SHOULD NOT be able to see when the script is running. e.g. https://ampersand.atlassian.net/browse/BOZ-61

Click on the Comment field and you will see the "Share With Customer" button.
Click on “Estimation Needed” and you will see that there is an option to make a comment to the customer.
Make a comment on a BOZ ticket, save it then click to edit it. On the Edit Comment screen, the "Share With Customer" button is visible.
The above three elements are what the script should remove.
Download and install the Tampermonkey extension for Chrome from here: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en

Click on the Tampermonkey icon and choose “Add new script”

Delete all the default content in the editor and replace with the contents of the script found here:

https://raw.githubusercontent.com/AmpersandHQ/Tampermonkey/master/script.js
and save.

Now go to the Jira issue search page and click on any of the BOZ tickets: https://ampersand.atlassian.net/issues/?jql=project%20%3D%20BOZ - If the script is enabled, there will be a small red square containing a number 1 on the Tampermonkey icon (the number will only appear when you are on Jira pages).

##TESTS:

Click on the Comment field on the BOZ ticket you have selected. Only the “Internal Comment” button should be visible. Make a comment and click the button. Check that the comment you have just added to the ticket is marked as INTERNAL. Note: The Comment text area will contain some pre-filled text when you first click on it. Please just delete this before you start writing your own comments.

Click to edit the comment you have just made. On the Edit Comment screen, the only button visible should be "Add to issue only".

Click on one of the workflow transitions, e.g. "Resolve", so that you get a dialog screen with a Comment section. Only the Internal Comment should be available. Make a comment and submit. Check that the comment you have just added to the ticket is marked as INTERNAL.
