const totalScoreCalculator = (ca_score, exam_score) => {
    return parseInt(ca_score) + parseInt(exam_score)
}

export const resultColumn = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "code",
        header: "Code",
    },
    {
        accessorKey: "ca_score",
        header: "CA Score",
    },
    {
        accessorKey: "exam_score",
        header: "Exam Score",
    },
    {
        accessorKey: "total",
        header: "Total",
    },
];

export const resultsData = [
    {
      id: 1,
      title: "English Language",
      code: "GNS",
      ca_score: 19,
      exam_score: 40,
    },
    {
      id: 2,
      title: "Mathematics",
      code: "MTH",
      ca_score: 18,
      exam_score: 48,
    },
    {
      id: 3,
      title: "Geography",
      code: "GEO",
      ca_score: 12,
      exam_score: 65,
    },
    {
      id: 4,
      title: "Civic Education",
      code: "CVE",
      ca_score: 22,
      exam_score: 66,
    },
    {
      id: 5,
      title: "History",
      code: "HST",
      ca_score: 12,
      exam_score: 54,
    },
    {
      id: 6,
      title: "Social Studies",
      code: "SOS",
      ca_score: 24,
      exam_score: 58,
    },
    {
      id: 7,
      title: "Computer Science",
      code: "CSC",
      ca_score: 21,
      exam_score: 68,
    },
    {
      id: 8,
      title: "Agricultural Science",
      code: "AGE",
      ca_score: 20,
      exam_score: 67,
    },
    {
      id: 9,
      title: "Further Mathematics",
      code: "FMTH",
      ca_score: 20,
      exam_score: 71,
    },
    {
      id: 10,
      title: "Geography",
      code: "GEO",
      ca_score: 15,
      exam_score: 67,
    },
  ].map((entry) => ({
    ...entry,
    total: totalScoreCalculator(entry.ca_score, entry.exam_score),
  }));
  