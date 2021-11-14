# fem-ip-address-tracker

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Notes

(November 14th, 2021)

This is the first "real" application I've had to build out for Frontend Mentor, requiring me to integrate with two different API services on top of implementing the UI. Conceptually, I didn't find anything particularly difficult, but I was forced to take a few detours on two different occasions. On the first, I needed to figure out how to deal with a CORS issue for one of the APIs - no immediate solution presented itself, so I ended up writing my own proxy on GCP.

Secondly, I decided too late that I wanted to enhance the project with a few minor features, like form hinting and loading animations. These were eventually added, but their integrations weren't as smooth as they would have been if I'd planned for them from the start. So much for "minor" features. I'll make sure to include these considerations up front next time.

While I've used SolidJS (technically) once before in the past, this marked the first non-trivial application that I've built out with it. The framework's idea of "reactivity" takes some getting used to, and I had to rework a few components multiple times before I began to get a feel for it. By the end, though, it began to feel like a more streamlined version of React, and that's something I can get behind.

[A live version of this project may be found here.](https://sophisticated-fear.surge.sh)