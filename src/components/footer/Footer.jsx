export const Footer = ({ colors }) => {
    let cssStyle = {

        padding: "10px",
        background: colors.top,
        color: colors.font,
        fontSize: "22px",
    };
    return (
        <>
            <hr></hr>
            <div style={{ margin: "auto", textAlign: "center", ...cssStyle }}>
                Made by ❤️ with ❤️
            </div>
        </>
    )
}