import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendarDay, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { format } from "date-fns";

export default function Header(){
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult : 1,
        children : 0,
        room : 1,
    });
    const [date, setDate] =useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const handleOption = (name, operation)=>{
        setOptions((prev) => {
            return{
                ...prev,
                    [name]:operation === "inc" ? options [name] + 1: options [name] - 1,
            };
        });
    };
    return(
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stay</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airpot Taxi</span>
                    </div>
                </div>
                <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                <p className="headerDesc">
                    Get rewards for your travels - unlock instant saving of 10% or more with a free BookingVillas account.
                </p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder="Where are you going?" className="headerSearchInput" />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span className="headerSearchText" onClick={()=>setOpenDate(!openDate)}> {`${format(
                            date[0].startDate,
                            "MM/dd/yyyy"
                            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                            />}
                       
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room `}
                            <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adults</span>
                                    <div className="optionCount">
                                        <button className="optionCounterButton" onClick={()=>handleOption("adult", "dec")}>-</button>
                                        <span className="optionCounterNumber">1</span>
                                        <button className="optionCounterButton" onClick={()=>handleOption("adult", "inc")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCount">
                                        <button className="optionCounterButton" onClick={()=>handleOption("children", "dec")}>-</button>
                                        <span className="optionCounterNumber">0</span>
                                        <button className="optionCounterButton" onClick={()=>handleOption("children", "inc")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCount">
                                        <button className="optionCounterButton" onClick={()=>handleOption("room", "dec")}>-</button>
                                        <span className="optionCounterNumber">1</span>
                                        <button className="optionCounterButton" onClick={()=>handleOption("room", "inc")}>+</button>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="headerSearchItem">
                       <button className="headerBtn">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}