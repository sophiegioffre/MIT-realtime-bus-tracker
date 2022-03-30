# Real Time Bus Tracker


## DESCRIPTION 
This project shows a map of Boston centered on the area around MIT and Harvard. Bus stops between MIT and Harvard are designated with red map markers. Each blue map marker refers to a different bus. Every 15s the map updates the locations of each bus, moving the blue map markers. 
Improvements:
- Created a .forEach loop containing if-else conditions that updates and moves the single marker assigned to each bus rather than creating a new marker for each 15s update.
- Added static bus stops along the portion of the route that goes between MIT and Harvard. These are designated by red map markers. 
- Added a map overlay containing a title and map key to explain what the map is showing and how to read it. I changed experimented with background opacity, font family, and color. I am pretty happy with how it looks.
- Customized the blue map markers to an icon of a bus
- Customized the red map markers to coordinate with the styles/colors of the map

## HOW TO RUN
Clone all files in this repo to your local drive. Then open the index.html file in a browser, perferibly Google Chrome. Watch for the buses to update their real-time locations every 15 seconds.

## ROAD MAP TO FUTURE IMPROVEMENTS
I plan to improve this project in the following ways:
- Add a hover event for each bus marker to show bus status, number, and destination

## LICENSE
MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
