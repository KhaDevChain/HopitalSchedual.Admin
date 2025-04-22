export const downloadCSV = (data: any[]) => {
    const csvRows = [];
    const wrapInQuotes = (value: any) => `"${value}"`;

    for (const row of data) {
        const values = [
            row.id,
            row.date.toISOString().split("T")[0],
            row.customer.name,
            row.payment,
            row.status ? "Completed" : "Pending",
            row.total.toFixed(2),
        ].map(wrapInQuotes);

        csvRows.push(values.join(","));
    }
    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "orders.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
};