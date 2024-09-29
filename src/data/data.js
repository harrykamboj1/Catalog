
export const data1d = [
    { name: '00:00', value: 62000 },
    { name: '04:00', value: 43000 },
    { name: '08:00', value: 53500 },
    { name: '12:00', value: 24000 },
    { name: '16:00', value: 84500 },
    { name: '20:00', value: 55000 },
    { name: '24:00', value: 103179 },
];

export const data3d = [
    { name: 'Day 1', value: 61000 },
    { name: 'Day 2', value: 64000 },
    { name: 'Day 3', value: 63179 },
];

export const data1w = [
    { name: 'Week 1', value: 60000 },
    { name: 'Week 2', value: 62000 },
    { name: 'Week 3', value: 64500 },
    { name: 'Week 4', value: 63179 },
];

export const data1m = [
    { name: 'January', value: 60000 },
    { name: 'February', value: 62000 },
    { name: 'March', value: 64500 },
    { name: 'April', value: 63179 },
];

export const data1y = [
    { name: 'First ', value: 60000 },
    { name: 'Second ', value: 52000 },
    { name: 'Third', value: 84500 },
    { name: 'Fourth', value: 13179 },
];


export const generateFluctuatingDataWithVolume = (length, baseValue) => {
    let data = [];
    let lastValue = baseValue;
    let fluctuation;

    for (let i = 0; i < length; i++) {
        fluctuation = Math.random() * 10000 - 5000;
        lastValue = lastValue + fluctuation;

        if (lastValue < 0) lastValue = 0;

        data.push({
            name: i.toString(),
            value: lastValue,
        });
    }
    return data;
}

export const generateDataForTab = (activeTab) => {
    switch (activeTab) {
        case 0:
            return generateFluctuatingDataWithVolume(24, 63000);
        case 1:
            return generateFluctuatingDataWithVolume(3, 64000);
        case 2:
            return generateFluctuatingDataWithVolume(7, 65000);
        case 3:
            return generateFluctuatingDataWithVolume(30, 62000);
        case 4:
            return generateFluctuatingDataWithVolume(6, 61000);
        case 5:
            return generateFluctuatingDataWithVolume(12, 60000);
        case 6:
            return generateFluctuatingDataWithVolume(6, 60000);
        default:
            return [];
    }
};