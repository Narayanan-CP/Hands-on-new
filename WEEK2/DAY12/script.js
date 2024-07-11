function manageEvent() {
    // Prompt the user to enter the event date
    let eventDateString = prompt("Enter the event date (YYYY-MM-DD):");
    let eventDate = new Date(eventDateString);

    // Get today's date
    let today = new Date();

    // Calculate the difference in time
    let timeDifference = eventDate.getTime() - today.getTime();

    // Calculate the number of days until the event
    let daysUntilEvent = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Format the event date in a user-friendly way
    let formattedDate = eventDate.toLocaleDateString('en-GB');

    // Determine if the event is in the past, present, or future
    let eventStatus;
    if (daysUntilEvent > 0) {
        eventStatus = "Future";
    } else if (daysUntilEvent < 0) {
        eventStatus = "Past";
    } else {
        eventStatus = "Present";
    }

    // Adjust the event date to a different time zone (UTC to local time zone)
    // Assuming we want to adjust to UTC+5:30 (Indian Standard Time)
    let localTimeOffset = 5.5 * 60 * 60 * 1000; // Offset in milliseconds
    let localEventDate = new Date(eventDate.getTime() + localTimeOffset);

    // Display the results
    console.log(`Days until event: ${daysUntilEvent}`);
    console.log(`Event Date (formatted): ${formattedDate}`);
    console.log(`Event Status: ${eventStatus}`);
    console.log(`Event Date in Local Time Zone (UTC+5:30): ${localEventDate}`);
}