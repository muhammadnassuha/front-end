
function Hello(props) {
    console.log(props);

    //desructing props
    const {name} = props;
    return(
        <div className="hello">
            <h2>Hay React</h2>
            <p>Saya {name} - Fullstact Developer</p>
        </div>
    );
}
export default Hello