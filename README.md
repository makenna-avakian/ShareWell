# ShareWell Frontend Hire Programming Assignment
## Requirements:

- You must use Next.js **version 13.x.**
- You must use TypeScript.
- You may only install Tailwind (any version; required) and Zustand (optional).
- You should use Tailwind exclusively for styles; there should be no other stylesheets except for global.css, and no styles should be added.
- You may install any development dependencies you need.
- You may organize the code as you see fit.

# Set up and commands:

1. In your CLI, run `cd sharewell` then `npm install` to set up the project.
2. To run the project, run `npm run dev`. 

# Fun learnings and notes:

- Next.js does not support importing tailwind styles through json files like i've done in the past with . The (messy) workaround was to include the classes by full name inside an object literal lookup. Not very pretty, but would be good in a TIL...

- Zustand is REALLY interesting. Much easier than Redux. Went down a rabbit hole: https://makenna-avakian.github.io/TIL/Zustand/zustandStateManagement/

- Next.js v. 13 has a really great way of storing images for production use. 
