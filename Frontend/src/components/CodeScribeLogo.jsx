const CodeScribeLogo = ({ size = 34 }) => {
    return (
        <div
            className="shrink-0 overflow-hidden rounded-[10px]"
            style={{
                width: size,
                height: size,
            }}
        >
            <img
                src="/codescribe-logo.png"
                alt="CodeScribe logo"
                className="h-full w-full object-cover"
            />
        </div>
    );
};

export default CodeScribeLogo;