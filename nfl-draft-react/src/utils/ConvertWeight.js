export const convertWeight = (valueInKilograms) => {
    const weightInPounds = Math.floor(valueInKilograms / 0.45359237);
    return `${weightInPounds}`;
}