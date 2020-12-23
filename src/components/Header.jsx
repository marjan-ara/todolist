import React, { useContext } from 'react';
import SimpleContext from './../context/SimpleContext';

const Header = () => {
    const ctx=useContext(SimpleContext);
    const {totalTasks}=ctx;
    let title=null;
    if (totalTasks === 0) {
      title = <p>&#128526; همه کارهای امروز انجام شده</p>;
    } else if (totalTasks < 4) {
      title = <p>&#128522; فقط {totalTasks} کار دیگه برای امروز مونده</p>;
    } else {
      title = (
        <p>&#128527; عجله کن. {totalTasks} کار دیگه باید امروز انجام بدی!</p>
      );
    }
    return (
      <div className="headerP">
        {title}
        <hr className="header-hr" />
      </div>
    );
}
 
export default Header;