//18:00 --> 1080
export function convertMinutesToHourString(minutesAmount: number) {
    const hours = Math.floor(minutesAmount /60);
    const minutes = Math.floor(minutesAmount%60);
    return `${String(hours).padStart(2,'0')}:${String(minutes).padEnd(2,'0')}`;
}