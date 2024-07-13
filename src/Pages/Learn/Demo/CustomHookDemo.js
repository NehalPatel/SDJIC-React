import useFetch from "./useFetch";

function CustomHookDemo() {
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //         .then((res) => res.json())
    //         .then((data) => setData(data));
    // }, []);

    //const [data] = useFetch("todos?_limit=20");
    const [data] = useFetch("posts?_limit=20");

    return (
        <>
            <h5>TODO APIs</h5>
            <ol>
                {data &&
                    data.map((item) => {
                        return <li key={item.id}>{item.title}</li>;
                    })}
            </ol>
        </>
    );
}

export default CustomHookDemo;