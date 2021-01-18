---
title: Removing committed files from Github repo
description: Fixing the mess you made 
date: 2020-10-30
---

# Removing committed files from Github repo

Sometimes, if you haven't had enough coffee in the morning, you may find yourself in the position of having committed files which shouldn't be pushed to your Github repo. 
For instance all node modules of your React project, even though you have been told strictly time and time again that this is cause enough to fail an exam or whatever the project might be.

Now, worry not. Although this is super embarassing and you surely don't want your teacher/boss/mom to find out you did such a silly mistake, I am here to brighten your day and let you know that all hope is not lost.

1. Create .gitignore file and add the files/folders that shouldn't be pushed to Github.
2. If you want to remove a file, run the following command. ```--cached``` is to keep the file locally: \
``` git rm --cached path/file_name ``` \
If you want to remove a folder, add ```-r``` as well: \
``` git rm -r --cached path/folder ```
3. Make sure the changes have been made: \
``` git status ```
4. Commit and push the changes
5. Drink more coffee, and let no one know of your mistake. Ever.
