IronGIT : an application to list the total of issues of any project hosted in github.com using the public API : /repos/:owner/:repo/issues.

IronGIT was generated with Angular CLI version 10.0.0.


Development server

Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.


How to use : 

Once in the navigator the user have to introduce the name of the owner of the project you are looking for its issues en the case "owner", then the name of the project, en the case "repo".
then click the green button " FIND ISSUES".

++ If the name of the owner and the name of the repo both do exist en github, the user will be redirected to the home page, where they will see a liste with pagination of the issues : 
-Title : title of the issue,
-User : Who did start the topic about that issue / the user can click on the user nickname or icon to be redirected to the profile of that user on githyb.

 -State : open if the issues is still under discution, close if not,
 -Details : more etails about the issues , the button "See more" redirect the user to the original page on github for that issue.
 
 ++ If the name of the owner or the name of the repo do not exist en github , the user see a warning with a button that let him go back to look for a new issue. 
