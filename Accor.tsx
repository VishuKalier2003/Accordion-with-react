import './AccorStyles.css'

type ClickedProps = {
    clicked: boolean,
}

export const Accor = (props: ClickedProps) => {
    if(props.clicked !== true)
    {
        props.clicked = false;
    }
    return (
        <div>
            <div className="container">
                <button className="btn">
                    +</button>Name
                    <button className="btn">-</button>
                    </div>
                <div className="details">My Self Vishu Kalier</div>
            <div className="container">
                <button className="btn">+</button>Address</div>
                <div className="details">
                    I am residing at B-9, Mellford City, Rohta Road, Meerut</div>
            <div className="container">
                <button className="btn">+</button>About</div>
                <div className="details">
                    I am Persuing Integrated Mtech from VIT Bhopal University in AI and ML
                </div>
            <div className="container">
                <button className="btn">+</button>Email</div>
                <div className="details">
                    My Email is: VishuKalier123@gmail.com</div>
        </div>
    )
}