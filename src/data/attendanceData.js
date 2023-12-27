const attendanceData = [
  { date: "2023-12-01", status: "present" },
  { date: "2023-12-04", status: "present" },
  { date: "2023-12-06", status: "present" },
  { date: "2023-12-07", status: "present" },
  { date: "2023-12-08", status: "present" },
  { date: "2023-12-11", status: "present" },
  { date: "2023-12-13", status: "present" },
  { date: "2023-12-14", status: "present" },
  { date: "2023-12-05", status: "absent" },
  { date: "2023-12-10", status: "holiday" },
  { date: "2023-12-12", status: "absent" },
  { date: "2023-12-18", status: "present" },
  { date: "2023-12-22", status: "absent" },
  { date: "2023-12-25", status: "present" },
  { date: "2023-12-26", status: "absent" },
  { date: "2023-12-15", status: "late" },
  { date: "2023-12-19", status: "present" },
  { date: "2023-12-20", status: "present" },
  { date: "2023-12-21", status: "late" },
  { date: "2023-12-03", status: "holiday" },
  { date: "2023-12-17", status: "holiday" },
  { date: "2023-12-24", status: "holiday" },
];
  
export const eventsData = attendanceData.map((record) => {
  let color;
  let textColor;
  const dayOfWeek = new Date(record.date).getDay();

  // Check if the day is a Sunday
  if (dayOfWeek === 0) {
    color = "gray"; // Set Sunday as a holiday with a gray background
    textColor = "white";
  } else {
    switch (record.status) {
      case "present":
        color = "green";
        textColor = "white";
        break;
      case "absent":
        color = "red";
        textColor = "white";
        break;
      case "late":
        color = "yellow";
        textColor = "black";
        break;
      default:
        color = "transparent";
        textColor = "black";
    }
  }

  return {
    title: record.status.charAt(0).toUpperCase() + record.status.slice(1),
    date: record.date,
    rendering: "background", // Show the event as a background event
    backgroundColor: color,
    textColor: textColor,
    className: `custom-event-${record.status.toLowerCase()}`, // Add a custom class
  };
});