
export function Card(props) {
    return (
        <>

            <div className='card'>
                <img src='Z.jpg' alt="" />
                <h3 className='Card-title'>{props.title}</h3>
                <p className='Card-desc'>{props.desc}</p>
            </div>
        </>
    )
}