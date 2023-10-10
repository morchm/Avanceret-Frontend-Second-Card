interface Name {
    name:string;
}

const AboutContent = (props:Name) => {
    return(
        <>
        <div>{props.name}</div>
        </>
    )
}

export default AboutContent;