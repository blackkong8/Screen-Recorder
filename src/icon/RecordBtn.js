function RecordBtn({ style, isActive, onClick }) {

    return (
        <div
            onClick={onClick}
            style={{
                ...style,

                borderRadius: isActive ? "25%" : "50%",
                backgroundColor: "tomato"
            }}
        />
    );
}

export default RecordBtn;