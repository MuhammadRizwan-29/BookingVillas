import "./Featured.css"

export default function Featured(){
    return(
        <div className="featured">
            <div className="featureItem">
                <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 1470w" 
                alt="" 
                className="featureImg" />
                
                <div className="featuredTitle">
                    <h1>Dulban</h1>
                    <h2>123 - Property</h2>
                </div>
            </div>
            <div className="featureItem">
                <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 1470w" 
                alt="" 
                className="featureImg" />
                
                <div className="featuredTitle">
                    <h1>Austin</h1>
                    <h2>031 - Property</h2>
                </div>
            </div>
            <div className="featureItem">
                <img 
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 1470w" 
                alt="" 
                className="featureImg" />
                
                <div className="featuredTitle">
                    <h1>Reno</h1>
                    <h2>593 - Property</h2>
                </div>
            </div>
        </div>
    );
}