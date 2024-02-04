// import React from "react";
// import Logo from "../Logo/Logo";
// import Search from "../Search/Search";
// import Button from "../Button/Button";
// import styles from "./Navbar.module.css";

// function Navbar({ searchData }) {
//     return (
//         <nav className={styles.navbar}>
//             <a href="/">
//                 <Logo/>
//             </a>
//             <Search 
//             placeholder={"Search a song of your choice"}
//             searchData={searchData}
//             />
//             <Button>Give Feedback</Button>
//         </nav>
//     )

// }

// export default Navbar;

import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import  "./Navbar.module.css";

function Navbar({ searchData }) {
    return (
        <nav className = "nav" style={{
            backgroundColor: 'var(--color-primary)',
            height: '74px',
            width: '100vw',
            padding: '0px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <a href="/">
                <Logo/>
            </a>
            <Search 
            placeholder={"Search a song of your choice"}
            searchData={searchData}
            />
            <Button>Give Feedback</Button>
        </nav>
    )

}

export default Navbar;