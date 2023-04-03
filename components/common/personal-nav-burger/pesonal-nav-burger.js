
import NextLink from "next/link";
// import './styles.css'
const PersonalNavBurger = () => {
    
    return (
        <>

			<div className="a-header">
					<input type="checkbox" name="main-nav" id="main-nav" className="burger-check"/>
					<label htmlFor="main-nav" className="burger menu"><span></span></label>
					<ul>
						<li>
							<NextLink href={'/personal-area/info'}>
								<a 	 className="active">Информация</a>
							</NextLink>
						</li>
						<li>
							<NextLink href={'/personal-area/user-data'}>
								<a 	 className="active">Мои данные</a>
							</NextLink>
						</li>
						<li>
							<NextLink href={'/personal-area'}>
								<a 	 className="active">Мои страховые полиса</a>
							</NextLink>
						</li>
						<li>
							<NextLink href={'/personal-area/buy'}>
								<a 	 className="active">Купить полис онлайн</a>
							</NextLink>
						</li>
						<li>
							<NextLink href={'/personal-area/polic-updates'}>
								<a 	 className="active">Продлить полис онлайн </a>
							</NextLink>
						</li>
						<li>
							<NextLink href={'/personal-area/settings'}>
								<a 	 className="active">настройки</a>
							</NextLink>
						</li>
				</ul>
			</div>
        </>
      
    )

}

export default PersonalNavBurger;
