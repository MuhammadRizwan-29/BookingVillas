import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./List.css"

export default function List(){
    return(
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSerach"></div>
                    <div className="listResult"></div>
                </div>
            </div>
        </div>
    );
}