# ShareWell

This is a project for the ShareWell interview. It should follow the below:

- You must use Next.js **version 13.x.**
- You must use TypeScript.
- You may only install Tailwind (any version; required) and Zustand (optional).
- You should use Tailwind exclusively for styles; there should be no other stylesheets except for global.css, and no styles should be added.
- You may install any development dependencies you need.
- You may organize the code as you see fit.

Your task is to build 3 pages. **Each page should be at least twice the screen height.** The pages should have the following URLs: /green, /blue, and /red. Each page should have a background color corresponding to its URL (e.g., /green should have a green background). 

The Figma design includes 3 modals, **any of which can appear on any page of the site** (if a new page happens to be added the modal should be able to appear there)**.** There is a desktop, tablet, and mobile version of each modal. 

Each page should have a white title using an H1 tag with the name of the color (e.g., /green should have a white title "GREEN"). Below that, there should be 2 buttons (the button styles do not matter), and each button will open a modal. The buttons on /green should open modals 1 and 2. The buttons on /blue should open modals 2 and 3. The buttons on /red should open modals 1 and 3. Please label the buttons with text indicating which modal each button opens. When a modal is opened, it should dim the background, and clicking outside of the modal should close it.

# General Steps taken to complete this:

1. Setting up Next.js project