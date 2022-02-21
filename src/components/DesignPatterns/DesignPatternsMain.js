export const DesignPatternsMain = () => {
    return (
        <>
            <div className="card-header">
                <div className="card-title h5">Design Patterns</div>
                <div className="card-subtitle text-gray">
                    Recognising Problems Solved
                </div>
            </div>
            <div className="card-body">
                <ul>
                    <li>Creational</li>
                    <li>Structural</li>
                    <li>Behavioural</li>
                </ul>
            </div>
            <div className="card-image">
                {/* <img
                    src="https://via.placeholder.com/150"
                    className="img-responsive"
                    alt=""
                ></img> */}
            </div>
            <div className="card-footer">
                <button className="btn btn-primary">Find out more...</button>
            </div>
        </>
    );
};
