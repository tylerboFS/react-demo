const Cake = (props) => {

    return <li onClick={
        () => props.setSelectedFlavor(props.flavor)
    }>
        {props.flavor}
    </li>
}

export default Cake;