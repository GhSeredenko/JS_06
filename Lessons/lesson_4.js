for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) continue //континью означает пропустить
        console.log(i);
}

for (let i = 0; i <= 10; i++) {
    if (i == 7) {
        break
    }
    console.log(i)
}
