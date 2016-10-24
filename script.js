// ==UserScript==
// @name         Jira - Enable Internal Comments Only
// @namespace    http://tampermonkey.net/
// @version      1.0.6
// @description  Prevents the "Share With Customer" button from being shown underneath the Comment box and ensures that only internal comments are available on the workflow transition screens
// @author       Sara Milner, Matthew Lishman, Matt Anstey, Luke Rodgers, Claire Parker
// @match        https://ampersand.atlassian.net/*
// @downloadURL  https://raw.githubusercontent.com/AmpersandHQ/Tampermonkey/master/script.js
// @grant        none

// ==/UserScript==
/* jshint -W097 */
'use strict'; 

$(function() {

  // Event for when the user tries to comment.
  $(document).on('focus', '#comment', function () {
      // Hide the "Share with Customer" button underneath the Comment text area on the main ticket screen.
      $('.sd-comment-buttons .sd-external-submit').hide();
      if (typeof(ServiceDesk.Comment.Field.prepopulatedComment) === 'function') {
          // Force prepopulated comment to always be blank, because it is useless.
          ServiceDesk.Comment.Field.prepopulatedComment = function(){return ''};
      }
  });

// Select the Internal Comment tab and remove the External Comment tab for all workflow transition
// screens that include the Comment field.
  $(document).on('focus', '.jira-dialog', function () {

      $('.js-sd-internal-comment').click();

      $('.js-sd-internal-comment').removeClass('inactive');

      $('.js-sd-external-comment').hide();

  });

  // Hide the "Share With Customer" button on the "Edit Comment" dialog
  $(document).on('focus', '.aui-dialog2', function () {
      // This is a fix for a strange bug in Jira. On a ticket, start on the Comments tab,
      // select the All tab. Try to edit a comment. You will now see the 'Share with Customer'
      // button! Also, cancel the overlay, only to see an identical overlay without the
      // 'Share With Customer' button! The overlay is opening twice for some reason.
      // This code closes all extra overlays by clicking the 'Add To Issue Only' button
      // and uses a hacky selector to select all 'Share
      // With Customer' buttons in case there are still more than one and hide them.
      // Hacky because you can't select more than one element using an ID - IDs should
      // be unique on a page of course!
      var buttonPrivate = $('.aui-dialog2 #button-private');
      var numOfExtraUnwantedOverlays = (buttonPrivate.length) - 1;


      console.log("Number of buggy extra overlays before remove action = " + numOfExtraUnwantedOverlays);

      if (numOfExtraUnwantedOverlays > 0){
          for (var i = 1; i < buttonPrivate.length; i++) {
              // Click the Internal Comment button (buttonPrivate) to close any extra overlays -
              // we want to close all "extra" overlays and only leave the first overlay,
              // i.e. buttonPrivate[0], which is why we start the 'for' loop at i = 1.
              // Click the Internal Comment button to close the extra overlays, to ensure that
              // the comment remains internal.
              buttonPrivate[i].click();
              console.log("Closed buggy extra overlay number " + i);
          }

      }

      // Hide the "Share With Customer" button now that we have ensured that all extra
      // buggy overlays have been closed
      console.log("Hiding 'Share With Customer' button...");
      $('.aui-dialog2 #button-public').hide();
      console.log("Hidden 'Share With Customer' button");
  });

});
