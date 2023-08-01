import Form1 from "./Demo/Form1";
import Form2 from "./Demo/Form2";
import Form3 from "./Demo/Form3";

function ReactForm() {
    return (
        <>
            <h3>React Forms</h3>
            <div className="card">
                <div className="card-header">
                    <h5>Form 1</h5>
                </div>
                <div className="card-body">
                    <Form1 />
                </div>
            </div>
            <hr />
            <div class="card">
                <div class="card-header">
                    <h5>Form 2</h5>
                </div>
                <div class="card-body">
                    <Form2 />
                </div>
            </div>
            <hr />
            <div class="card">
                <div class="card-header">
                    <h5>Form 3</h5>
                </div>
                <div class="card-body">
                    <Form3 />
                </div>
            </div>
        </>
    );
}

export default ReactForm;