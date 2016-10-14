var totalRequests = 0;

export function pour(drink, volume) {
    if (volume < 0) {
        throw new Error('Invalid volume of whisky');
    }
    if (volume > 200) {
        throw new Error('There is no such glass');
    }

    totalRequests++;
    if (totalRequests % 2 == 0) {
        return volume + 50;
    }
    return volume;
}

export function free() {
    totalRequests = 0;
}