export function formatDate(date, format = "long") {
    const d = new Date(date);

    if (isNaN(d.getTime())) return "-";

    const optionsMap = {
        short: {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        },
        long: {
            day: "numeric",
            month: "long",
            year: "numeric",
        },
        withDay: {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        },
    };

    return new Intl.DateTimeFormat("id-ID", optionsMap[format]).format(d);
}
