# Time Converter

Refer to the below image.

![time-converter-output](https://user-images.githubusercontent.com/90957976/136209353-d3da194e-77c9-44a6-9fe0-f1fd8116a969.gif)

Instructions:

- The HTML input element for entering the number of hours should have the id hoursInput
- The HTML input element for entering the number of minutes should have the id minutesInput
- Add HTML label elements for HTML input elements with ids hoursInput and minutesInput
- The HTML button element should have the id convertBtn
- The HTML p element to display the converted time in seconds should have the id timeInSeconds
- The HTML p element to display the error message should have the id errorMsg

By following the above instructions, achieve the given functionality.

- When values are entered in HTML input elements with ids hoursInput and minutesInput, the HTML button with id convertBtn is clicked
- The converted time in seconds should be displayed in the HTML p element with id timeInSeconds
- The HTML p element with id errorMsg should be empty
- The HTML p element with id errorMsg should display an error message in the following cases
- When the HTML input element with id hoursInput is empty and convertBtn is clicked
- When the HTML input element with id minutesInput is empty and convertBtn is clicked
- When both the HTML input elements hoursInput and minutesInput are empty and convertBtn is clicked

Quick Tip

timeInSeconds = ((hours) *60 + minutes) * 60

Use this Background image:

https://assets.ccbp.in/frontend/dynamic-webapps/time-converter-bg.png

**CSS Colors used:**

Text colors Hex code values used:

    #f5f7fa
    #000000
    #ffffff

CSS Font families used:

    Open Sans
