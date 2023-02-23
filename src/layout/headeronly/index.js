import Header from "./header";


function Headeronly({children}) {
    return (  
        <div>
            <Header/>
            <div className="container"> 
               
                <div className="content">
                    {children} 
                </div>
            </div>
        </div>
    );
}

export default  Headeronly;