🚀 Release Process for Angular Website

This document explains how to build and deploy the Angular project to GitHub Pages under the /website/ path.

1️⃣ Build the Angular App

Run the Angular build command with the proper base-href and output path:

ng build --output-path docs --base-href /website/

Notes:

--output-path docs ensures the build files go into the docs folder, which GitHub Pages uses.

--base-href /website/ ensures all relative URLs in the app point to the correct path for the repository.

2️⃣ Fix Angular “browser” output folder issue

Depending on Angular version, the build might create a subfolder docs/browser/. Move all files to the root docs/:

mv docs/browser/* docs/

3️⃣ Clean up the leftover folder

After moving files, remove the empty browser folder:

rm -rf docs/browser

If this command fails, you can delete the docs/browser folder manually.

4️⃣ Add GitHub Pages routing fix

Angular routes may fail on refresh due to client-side routing. Fix this by copying index.html to 404.html:

cp docs/index.html docs/404.html
5️⃣ Push the build to GitHub
git add docs
git commit -m "Release: deploy Angular build"
git push
6️⃣ Configure GitHub Pages

Go to your repository → Settings → Pages

Set:

Branch: main

Folder: /docs

Save.

7️⃣ Access your site

After ~1 minute, your site will be live at:

https://<username>.github.io/website/
🔹 Optional Tips

To simplify future deployments, add a script in package.json:

"scripts": {
  "deploy": "ng build --base-href /website/ && mv docs/browser/* docs/ && rm -rf docs/browser && cp docs/index.html docs/404.html"
}

Then deploy with:

npm run deploy

Always clear your browser cache or use incognito mode to test updates.