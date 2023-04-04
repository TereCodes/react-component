import React from 'react'
import NavList from './NavList';
import "../styles/footer-navlist.css";
const NavListBottomLeft = () => {
    return (
        <>
            <div className="footer-links">
                <div className="footer-left">
                    <NavList lists={"About"} />
                    <NavList lists={"Advertising"} />
                    <NavList lists={"Business"} />
                    <NavList lists={"How Search Works"} />
                </div>

                <div className="footer-center">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC" alt="carbon icon" />
                    <span>Carbon neutral since 2007</span>
                </div>

                <div className="footer-right">
                    <NavList lists={"Privacy"} />
                    <NavList lists={"Terms"} />
                    <NavList lists={"Settings"} />
                </div>
            </div>
        </>

    )
}

export default NavListBottomLeft;