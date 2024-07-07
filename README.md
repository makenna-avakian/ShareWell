# ShareWell Frontend Hire Programming Assignment

This is a straightforward coding exercise. There are no tricks or heavy logic involved. We are looking to assess how well you organize code, follow instructions, and adhere to the provided Figma design.

- You must use Next.js **version 13.x.**
- You must use TypeScript.
- You may only install Tailwind (any version; required) and Zustand (optional).
- You should use Tailwind exclusively for styles; there should be no other stylesheets except for global.css, and no styles should be added.
- You may install any development dependencies you need.
- You may organize the code as you see fit.

Your task is to build 3 pages. **Each page should be at least twice the screen height.** The pages should have the following URLs: /green, /blue, and /red. Each page should have a background color corresponding to its URL (e.g., /green should have a green background). 

The Figma design includes 3 modals, **any of which can appear on any page of the site** (if a new page happens to be added the modal should be able to appear there)**.** There is a desktop, tablet, and mobile version of each modal. 

Each page should have a white title using an H1 tag with the name of the color (e.g., /green should have a white title "GREEN"). Below that, there should be 2 buttons (the button styles do not matter), and each button will open a modal. The buttons on /green should open modals 1 and 2. The buttons on /blue should open modals 2 and 3. The buttons on /red should open modals 1 and 3. Please label the buttons with text indicating which modal each button opens. When a modal is opened, it should dim the background, and clicking outside of the modal should close it.

Do not overthink this. Well-written, clean, **reusable** code is always better than overly complex solutions. You have access to dev mode in Figma, and I highly recommend you use it. Also, I am available to answer any questions you have and will respond promptly. You may email me at billy@sharewellnow.com.

# Fun learnings and notes:

- Next.js does not support importing tailwind styles through json files like i've done in the past with Vite. The (messy) workaround was to include the classes by full name inside an object literal lookup. Not very pretty, but would be good in a TIL...

- Zustand is REALLY interesting. Much easier than Redux. Went down a rabbit hole: https://makenna-avakian.github.io/TIL/Zustand/zustandStateManagement/

- Next.js v. 13 has a really great way of storing images for production use. 
