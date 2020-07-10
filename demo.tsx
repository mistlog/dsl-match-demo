export function Main(value: any) {
    {
        "use match";

        (value: 1) => <HandleValueIsNumber />;
        (value: "a" | "b" | "c") => console.log("value is ...");
        () => console.log("default here");
    }
}

function HandleValueIsNumber() {
    console.log("value is 1");
}