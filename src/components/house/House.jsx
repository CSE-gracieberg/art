import "./House.css";

const House = (props) => {
    <section className="house">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <img src={props.src} alt="house"/>
    </section>
}

export default House;