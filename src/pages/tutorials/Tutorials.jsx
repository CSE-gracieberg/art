import House from "../../components/house/House";

const Tutorials  = () => {
    return(
        <div id="tutorials" className="page">
            <House
                title="farmhouse"
                description ="we have chickens"/>
            <House 
                title="modern vista"
                description ="Lots of glass"/>
           <House 
                title="mansion"
                description="room for everyone"/>
        </div>
    );
};

export default Tutorials;