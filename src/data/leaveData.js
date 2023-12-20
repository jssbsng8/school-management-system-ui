export const leaveColumn = [
    {
        accessorKey: "apply_date",
        header: "Apply Date",
    },
    {
        accessorKey: "from",
        header: "From",
    },
    {
        accessorKey: "to",
        header: "To",
    },
    {
        accessorKey: "reason",
        header: "Reason",
    },
    {
        accessorKey: "status",
        header: "Status",
        Cell: ({ cell, row }) => (
            <div>
              {row.original.status === "approved" && (
                <span
                  className="status"
                  style={{ color: "#388b84", backgroundColor: "#388b8433" }}
                >
                  {cell.getValue()}
                </span>
              )}
              {row.original.status === "pending" && (
                <span
                  className="status"
                  style={{ color: "#ff9966", backgroundColor: "#ff996633" }}
                >
                  {cell.getValue()}
                </span>
              )}
              {row.original.status === "cancelled" && (
                <span
                  className="status"
                  style={{ color: "#fd4332", backgroundColor: "#fd433233" }}
                >
                  {cell.getValue()}
                </span>
              )}
            </div>
        ),
    },
];

export const leaveData = [
    {
      id: 1,
      apply_date: "2023-01-15",
      from: "2023-01-10",
      to: "2023-01-19",
      reason: "Fever",
      status: "approved",
    },
    {
      id: 2,
      apply_date: "2023-02-20",
      from: "2023-02-15",
      to: "2023-02-18",
      reason: "Family Function",
      status: "cancelled",
    },
    {
      id: 3,
      apply_date: "2023-03-10",
      from: "2023-03-05",
      to: "2023-03-12",
      reason: "Emergency",
      status: "pending",
    },
    {
      id: 4,
      apply_date: "2023-04-22",
      from: "2023-04-15",
      to: "2023-04-22",
      reason: "Financial Breakdown",
      status: "approved",
    },
    {
      id: 5,
      apply_date: "2023-05-12",
      from: "2023-05-05",
      to: "2023-05-12",
      reason: "",
      status: "pending",
    },
    {
      id: 6,
      apply_date: "2023-06-24",
      from: "2023-06-20",
      to: "2023-06-24",
      reason: "Miscellaneous",
      status: "cancelled",
    },
    {
      id: 7,
      apply_date: "2023-07-21",
      from: "2023-07-15",
      to: "2023-07-21",
      reason: "Miscellaneous",
      status: "approved",
    },
  ];
  