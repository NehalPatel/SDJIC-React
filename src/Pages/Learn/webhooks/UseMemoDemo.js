import UseMemoProblem from "../Demo/UseMemoProblem";
import UseMemoSolution from "../Demo/UseMemoSolution";

function UseMemoDemo() {
    return (
        <>
            <h3>React useMemo</h3>
            <p>The React useMemo Hook returns a memoized value.</p>
            <p>Think of memoization as caching a value so that it does not need to be recalculated.</p>
            <p>The useMemo Hook only runs when one of its dependencies update.</p>
            <p>This can improve performance.</p>
            <p>The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.</p>
            <div className="card">
                <div className="card-header">
                    <h5>Problem</h5>
                </div>
                <div className="card-body">
                    <p>In this example, we have an expensive function that runs on every render.</p>
                    <p>When changing the count or adding a todo, you will notice a delay in execution.</p>  

                    <UseMemoProblem />
                </div>
            </div>

            <hr />

            <div className="card">
                <div className="card-header">
                    <h5>Solution</h5>
                </div>
                <div className="card-body">
                    <p>To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.</p>
                    <p>We can wrap the expensive function call with useMemo.</p>
                    <p>The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.</p>
                    <p>In the following example, the expensive function will only run when count is changed and not when todo's are added.</p>

                    <UseMemoSolution />
                </div>
            </div>
        </>
    );
}

export default UseMemoDemo;