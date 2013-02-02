Shiva for Firefox OS
====================

Firefox OS client for `Shiva-Server <https://github.com/tooxie/shiva-server>`_


Resources
=========

These are the resources you are going to need in order to build a Firefox OS
app.

* `FF nightly <http://nightly.mozilla.org/>`_
* `FF OS simulator 2.0 <https://ftp.mozilla.org/pub/mozilla.org/labs/r2d2b2g/r2d2b2g-linux.xpi>`_

Optionally, you can get the `Firefox OS Simulator <https://github.com/mozilla/r2d2b2g>`_'s source code, for the lulz.

* Gaia: https://github.com/mykmelez/gaia

Articles
========

Useful articles for

* https://hacks.mozilla.org/2013/01/introducing-the-firefox-os-boilerplate-app/
* https://hacks.mozilla.org/2013/01/introducing-web-activities/
* https://hacks.mozilla.org/2013/01/writing-web-apps-quickly-with-mortar/
* https://hacks.mozilla.org/2013/01/hacking-gaia-for-firefox-os-part-1/


Problems
========

* The remote debugger runs on a different port every time.
* Need to restart the simulator to see updates on the app.
* Should be a "reboot" button in the sim, that reuses the port.
    * Maybe a dev toolbar with options like restart and inspect DOM?
* The debugger is hard to use.
* Can't inspect the DOM of the sim.
* Lacking docs.
* Dependencies are lying around in a global namespace.
* An option to run the app on the sim or on a real device.
* No simple way to use the shared resources without duplicating code.
* Some hidden cache magic preventing changes from showing up every once in a
  while.
* Invalid manifest file when no icon is present.
  * Works when an non-existent icon is present.
* Sometimes the applications shows up twice on the desktop, but only one is
  functional.
  * That happens when you change the manifest file and click update.
* XHR requests enforce the same domain policy. Should be an easy way to bypass
  that restriction in dev environs.
* It's tedious to unlock the screen everytime.
* The simulator crashes when redirected to an mp3 file.
