
export async function getVote() {
    await sleep(1000);

    return {
        // selection: 'React'
    };
}

export async function getAggregate() {
    await sleep(1000);

    return {
        'React': 30,
        'Vue': 25,
        'Angular': 25,
        'Bootstrap': 15,
        'None': 5,
    };
}

async function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}