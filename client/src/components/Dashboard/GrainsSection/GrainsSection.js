import { Button } from "react-bootstrap";
import AddGrain from "./AddGrain.js";

function GrainsSection(){
    return(<>
        <div style={{border:"2px solid black", height:"600px", width:"1200px", textAlign:"center"}}>
            <div>
                <AddGrain/>
            </div>
        </div>
    </>);
}
export default GrainsSection;