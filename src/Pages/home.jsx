
export function Home() {
    return (
        <div className="container">
            <h1 className="welcome">Добро пожаловать<br />на ProjectMate!</h1>
            <p className="description">
                Этот сайт — ваш проводник в мир <br /> интересных проектов, стартапов и <br /> идей. Здесь вы можете найти
                что-то <br /> вдохновляющее, принять участие или <br /> поддержать инициативы.
            </p>
            <p class="call-to-action">
                А если у вас есть собственная идея, мы <br /> с радостью поможем её опубликовать!
            </p>
            <a href="/#/Pages/Page1" className="button">Поехали!</a>
        </div>
    )
}