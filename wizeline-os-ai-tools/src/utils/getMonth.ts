export const getMonth = (date: Date) => {
    const month = date.toLocaleString("en-US", { month: "short" });
    return month;
};