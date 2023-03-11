## Introdunction
This simple **create-react-app** application displays information about SpaceX's API. It's mobile-friendly.

Application is fetching JSON data from API, caching it in localStorage and shows information.

Avaible by _https_ protocol: [https://dynamic-malasada-f2f679.netlify.app](https://dynamic-malasada-f2f679.netlify.app)

When creating was used:

- [create-react-app](https://create-react-app.dev/docs/getting-started)
- [react-slick](https://react-slick.neostack.com/docs/get-started)
- local storage
- Fetch API

> The application was written using functional components and hooks, no classes (except those that are imported to work with react-slick)

## How to set up the development environment
**Step 1:** download and extract the project archive

**Step 2:** Open the project folder in the Git console (Right click on the folder and select "Git bash here" from the context menu)

**Step 3:** Write `npm install` on the command line to install all the dependencies in the project.

**Step 4:** Happy Hacking!

## How to deploy
I used [**Netlify**](https://www.netlify.com/) for deploying my project, here is step-by-step instruction about how to do it by yourself.

After setting up development environment you have this project as folder on your computer, then follow these steps:

### _GitHub part_

**Step 1:** Open the project folder in the Git console or console in you code editor (VScode, for exaple) an type `git init` to initialize your git repository

**Step 2:** `git add .` for saving all changes in repository

**Step 3:** `git commit -m "Describe changes you added"` commiting your project

**Step 4:** `git remote add origin https://github.com/yawgoo87/react-dragon-app.git` Instead https you must paste link on your repository, where you want push project to

**Step 5:** `git push origin master` for pushing your project.

### _Netlify part_

Step 6: Sign Up with your GitHub account on [**Netlify**](https://www.netlify.com/)

Step 7: Connecting to Git provider(follow Netlify instructions)

Step 8: Choose repository with project you want to publish

Step 9: ✨Finish✨

Don't be afraid if you got ERROR after deploying. There is the logs where you can see document and string that was cause of error, you can fix it in your code editor.

## How to upload your fixes and updates?
You just need to perform steps 2, 3 and 5 from [_GitHub part_](https://github.com/yawgoo87/react-dragon-app/new/master#github-part) after editind and saving project, let's repeat them:

**Step 1:** `git add .`

**Step 2:** `git commit -m "Describe changes you added"`

**Step 3:** `git push origin master`

## Have fun✨
