function Clock({ time }) {
    let hour = Math.floor(time / 3600);
    let minuet = Math.floor(time / 60);
    let second = time % 60;

    return (
        <>
            {hour < 10 ? `0${hour}` : hour}:
            {minuet < 10 ? `0${minuet}` : minuet}:
            {second < 10 ? `0${second}` : second}
        </>
    )
}

export default Clock