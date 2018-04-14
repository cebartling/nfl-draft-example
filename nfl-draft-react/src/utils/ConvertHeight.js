export const convertHeight = (valueInMeters) => {
    const converted = valueInMeters / 0.3048;
    const feet = Math.floor(converted);
    const inches = Math.round((converted - feet) * 12);
    return `${feet}' ${inches}"`;
}